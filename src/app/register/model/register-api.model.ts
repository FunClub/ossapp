export class RegisterApiModel{
    REGISTER:string="register";
    VALIDATE_CODEIMG:string="share/verificationCodeImg";
    VALIDATE_CODE(code:string){
        return `share/verificationCode/${code}`;
    }
}