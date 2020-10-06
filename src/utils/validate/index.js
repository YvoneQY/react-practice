
export const validate_password=/^3$/;

const reg_email=/A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export function validate_email(value){
    return reg_email.test(value)
}



