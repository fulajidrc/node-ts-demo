import { ResponseModel } from "../interfaces";

class Service{
    response({code, message, data ,error}:ResponseModel){
        return {
            code,
            message,
            data,
            error
        }
    }
}

export default Service;