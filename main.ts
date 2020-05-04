import UserModel from "./userModel";

export default class Main {

    constructor(private userModel: UserModel) {
    }

    private getUserData(): void {
        this.userModel.firstName = "Kishor";
        this.userModel.lastName = "Naik";
    }

    private displayUserData(): void {
        console.log(`${this.userModel.firstName} ${this.userModel.lastName}`);
    }

    private convertIntoJson(): void {

        console.log(JSON.stringify(this.userModel));
    }

    public execute(): void {

        this.getUserData();

        this.displayUserData();

        this.convertIntoJson();
    }
}

function uiMiddleware() {

    let userModelObj: UserModel = new UserModel();

    let mainObj: Main = new Main(userModelObj);
    mainObj.execute();
}

uiMiddleware();