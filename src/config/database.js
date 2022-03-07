module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}