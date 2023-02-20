export class SeasonWinner {
    circuitName: string;
    driverName: string;
    nationality: string;
    grid: string;
    laps: string;
    raceName: string;
    time: string;
    constructorName: string;
    driverId: string;
    highlight!: boolean;

    constructor(data = {}) {
        Object.assign(this, data);
    }

    /**
     * @description maps ther server response to the required SeasonWinner type
     * @param object - object after parsing the server's response
     */
    seasonWinnerMapper(object: any) {
        console.log(object)
        this.circuitName = object.Circuit.circuitName;
        this.driverName = object.Results[0].Driver.givenName + ' ' + object.Results[0].Driver.familyName;
        this.nationality = object.Results[0].Driver.nationality;
        this.driverId = object.Results[0].Driver.driverId;
        this.grid = object.Results[0].grid;
        this.laps = object.Results[0].laps;
        this.raceName = object.raceName;
        this.time = object.Results[0].Time.time;
        this.constructorName = object.Results[0].Constructor.name;
        return this;
    }
}