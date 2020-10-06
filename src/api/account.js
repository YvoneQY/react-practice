import service from '../../src/utils/request'


export function LoginIn(data){
    return service.request({
        url:'/login',
        method:'post',
        data
       // params:data//请求类型为get
    })
}


export function GetCode(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data
    })
}









