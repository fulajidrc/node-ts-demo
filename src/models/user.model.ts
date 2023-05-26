import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';
type UserAttributes = {
    id: number,
    name: string,
    email?: string
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;


class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id: number;
    declare name: string;
    declare email: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(199),
            allowNull:false
        }
    }, 
    {
        timestamps: true,
        sequelize: sequelize,
        paranoid: false
    }
)

export default User