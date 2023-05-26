import User from "./user.model";

const dbInit = () => {
    User.sync({ alter: true })
}

export default dbInit;