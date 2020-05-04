export default class UserModel {

    private _firstName: string;

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName
        };
    }

}