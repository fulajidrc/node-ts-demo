
import User from "../models/user.model";

class AuthService{
    register = async () => {
        const user = await User.create({
            name: 'test',
            email: 'test@gmail.com'
        })
        return {
            statusCode: 201,
            data:user,
            message: 'User registred successfully!'
        }
    }
}

export default new AuthService();