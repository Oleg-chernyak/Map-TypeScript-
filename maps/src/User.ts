import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export default "Jack";
 
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "black";

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    };

    contentMarker(): string {
        return `User Name: ${this.name}`;
    }
};