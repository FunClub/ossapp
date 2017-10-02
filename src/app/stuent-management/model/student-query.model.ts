import { PageRequestModel } from "../../share/model/page-request.model";

export class StudentQueryModel extends PageRequestModel {
    showUnAudit:boolean;
    showPage:boolean;
    constructor(){
        super();
        this.showUnAudit=true;
        this.showPage =true;
    }
}
