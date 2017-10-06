const SETTINGS_PREFIX:string="settings/";
const ROLE_PREFIX:string="role/";
export class SettingsApiModel {
    ROLE:string=ROLE_PREFIX;
    MENU:string=SETTINGS_PREFIX+"menu";
    SELECT_MENU(type:string){
        return `${SETTINGS_PREFIX}menu/${type}`
    }
}
