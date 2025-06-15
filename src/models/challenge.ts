import type { ChallengeMonth } from './month';

class Challenge {
  launchDate: Date;
  subscribeLimit: Date;
  challengePeriod: [Date, Date];
  constructor(launch: Date, challengeMonth: ChallengeMonth = 8) {
    this.launchDate = launch;
    this.subscribeLimit = this.add_days(launch, 30);
    this.subscribeLimit.setHours(23, 59);
    this.challengePeriod = this.setChallengePeriod(launch, challengeMonth);
  }

  add_days(date_to_add: Date = new Date(), days: number = 1): Date {
    const date_copy = new Date(date_to_add);
    date_copy.setDate(date_copy.getDate() + days);
    return date_copy;
  }
  setChallengePeriod(launchDate: Date, challengeMonth: ChallengeMonth): [Date, Date] {
    const challenge = [new Date(launchDate), new Date(launchDate)] as [Date, Date];
    //set 8:00h 1st of X month
    challenge[0].setDate(1);
    challenge[0].setHours(8);
    challenge[0].setMonth(challengeMonth);
    //set last Day of X+1 month
    challenge[1].setMonth(challengeMonth + 2);
    challenge[1].setDate(challenge[1].getDate() - 1);
    challenge[1].setHours(23, 59);

    return challenge;
  }
  get year() {
    return this.launchDate.getFullYear();
  }
}

export { Challenge };
