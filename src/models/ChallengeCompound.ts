type MilestoneKey =
	| 'launchDate'
	| 'askMe'
	| 'subscriptionLimit'
	| 'permitLimit'
	| 'reportPlan'
	| 'reportSavings'
	| 'rankPublish'
	| 'awardsDates'

type Event = {
	eventDate: Date
	isDone: boolean
}
type ChallengePeriod = {
	start: Date
	finish: Date
}

type Milestones = { [key in MilestoneKey]: Event } & { challengePeriod: ChallengePeriod }

export type { Event as MilestoneCal, MilestoneKey, Milestones }
