import { Sequelize } from "sequelize"
import database from "../config/database.js"

const Tipo = database.define('tipos', {
    id_tipo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

export default Tipo