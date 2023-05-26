import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : 'donation_app',
    process.env.DB_USERNAME ? process.env.DB_USERNAME : 'root',
    process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '',
     {
       host: process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1',
       dialect: 'mysql'
     }
   );
export {
    sequelize,
};