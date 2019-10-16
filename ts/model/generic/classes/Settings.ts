class Settings {
    public activeLineupSlots: number[];
    public lineupSlots: number[];
    public regularSeasonLength: number;
    public playoffLength: number;
    public draftType: DRAFT_TYPE;
    public leagueType: LEAGUE_TYPE;
    public scoringType: SCORING_TYPE;
    public positions: string[];
    public currentMatchupPeriod: number;
    public isActive: boolean;
    public yearsActive: number[];

    constructor(activeLineupSlots, lineupSlots, regularSeasonLength, playoffLength, draftType, currentMatchupPeriod, isActive, yearsActive: number[]) {
        this.activeLineupSlots = activeLineupSlots;
        this.lineupSlots = lineupSlots;
        this.regularSeasonLength = regularSeasonLength;
        this.playoffLength = playoffLength;
        this.draftType = draftType;
        this.positions = this.getPositions();
        this.currentMatchupPeriod = currentMatchupPeriod;
        this.isActive = isActive;
        this.yearsActive = yearsActive.sort((a, b) => b - a);
    }

    public getPositions(): string[] {
        const positions = this.activeLineupSlots.filter((slot) => {
            return slot[0] !== 1 && slot[0] !== 3 && slot[0] !== 5 && slot[0] !== 7 && slot[0] !== 23;
        }).map((slot) => {
            return intToPosition.get(slot[0]);
        });
        return positions;
    }
}