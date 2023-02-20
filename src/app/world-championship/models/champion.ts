import { Driver } from '../models/driver';
export class Champion {
    season: string;
    rounds: string;
    wins: string;
    points: string;
    driver: Driver;
    constructorName: string;
    constructorUrl: string;
    constructorNationality: string;

    constructor(data = {}) {
        Object.assign(this, data);
    }

    /**
     * @description maps ther server response to the required Champion type
     * @param object - object after parsing the server's response
     */
    championMapper(object: any) {
        this.season = object.season;
        this.rounds = object.round;
        this.wins = object.DriverStandings[0].wins;
        this.points = object.DriverStandings[0].points;
        this.constructorName = object.DriverStandings[0].Constructors[0].name;
        this.constructorNationality = object.DriverStandings[0].Constructors[0].nationality;
        this.constructorUrl = object.DriverStandings[0].Constructors[0].url;
        this.driver = new Driver(object.DriverStandings[0].Driver);
        return this;

    }
}