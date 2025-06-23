import moment from 'moment'
import 'moment/locale/es'
import type { Milestones as Milestone, MilestoneKey } from './ChallengeCompound'
import type { ChallengeMonth } from './ChallengeMonth'
import type { Sponsor } from './Sponsor'

moment.locale('es')
class Challenge {
	milestone: Milestone
	_sponsors: Sponsor[] = []

	constructor(launch: Date, challengeMonth: ChallengeMonth = 8) {
		const cp = this.setChallengePeriod(launch, 8)

		this.milestone = {
			launchDate: { eventDate: launch, isDone: false },
			askMe: { eventDate: this.addDays(launch, 5), isDone: false },
			subscriptionLimit: { eventDate: this.addDays(launch, 37), isDone: false },
			permitLimit: { eventDate: this.addDays(launch, 37), isDone: false },
			reportPlan: { eventDate: this.addDays(launch, 41), isDone: false },
			reportSavings: { eventDate: this.addDays(launch, 150), isDone: false },
			rankPublish: { eventDate: this.addDays(launch, 160), isDone: false },
			awardsDates: { eventDate: new Date(2025, 11, 15, 12, 0), isDone: false },
			challengePeriod: { start: cp[0], finish: cp[1] }
		}
	}

	addDays(date_to_add: Date = new Date(), days: number = 1): Date {
		const date_copy = new Date(date_to_add)
		date_copy.setDate(date_copy.getDate() + days)
		date_copy.setHours(23, 59)
		return date_copy
	}

	toggleTask(key: MilestoneKey) {
		this.milestone[key].isDone = !this.milestone[key].isDone
	}

	relativeTime(key: MilestoneKey) {
		return moment(this.milestone[key].eventDate).fromNow()
	}

	fmtTime(key: MilestoneKey, fmt: string) {
		return moment(this.milestone[key].eventDate).format(fmt)
	}

	setChallengePeriod(launchDate: Date, challengeMonth: ChallengeMonth): [Date, Date] {
		const challenge = [new Date(launchDate), new Date(launchDate)] as [Date, Date]
		//set 8:00h 1st of X month
		challenge[0].setDate(1)
		challenge[0].setHours(8)
		challenge[0].setMonth(challengeMonth)
		//set last Day of X+1 month
		challenge[1].setMonth(challengeMonth + 2)
		challenge[1].setDate(challenge[1].getDate() - 1)
		challenge[1].setHours(23, 59)

		return challenge
	}
	get year() {
		return this.milestone.launchDate.eventDate.getFullYear()
	}

	get shortName() {
		return '#ec' + this.milestone.launchDate.eventDate.getFullYear().toString().slice(-2)
	}

	addSponsor(sponsors: Sponsor[]) {
		this._sponsors = [...this._sponsors, ...sponsors]
	}
	get sponsors() {
		return this._sponsors
	}
}

const ctx = new Challenge(new Date(2025, 6, 5, 10), 8)
//sponsors
ctx.addSponsor([
	{
		name: 'Isa Energía',
		url: 'https://interchilesa.com/es/',
		logo: 'https://interchilesa.com/wp-content/uploads/2025/03/isa-energia.logo_.png'
	},
	{
		name: 'Chilquinta Energía',
		url: 'https://www.chilquinta.cl/',
		logo: 'https://a.storyblok.com/f/82872/x/ea4cc123a6/logo_chilquinta.svg'
	},
	{
		name: 'Copec SA',
		url: 'https://ww2.copec.cl/personas',
		logo: 'https://copec.cdn.modyo.com/uploads/590bf3e3-8a92-4ece-b770-c5e0c07374f4/original/logo_copec_90_an_os_1_.webp'
	},
	{
		name: 'Inacap',
		url: 'https://portal.inacap.cl/',
		logo: 'https://digital.inacap.cl/recursos/inacap-liferay/img/logo-footer.png'
	},
	{
		name: 'DuocUC Valparaíso',
		logo: 'https://www.duoc.cl/wp-content/themes/wordpress-duoc-cl/images/logo-duoc.svg',
		url: 'https://www.duoc.cl/sedes/valparaiso/'
	}
])
export { Challenge, ctx }
