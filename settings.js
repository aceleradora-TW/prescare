const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'
const DB_PORT = '5432'

const databaseUrl = () => {
    if (process.env.DATABASE_URL) {
        // Se existe a variável, retornamos o valor dela
        return process.env.DATABASE_URL
    }

    //Senão, usamos os valores que apontam para o banco local
    return 'postgres://' +
        DB_USER +
        ':' +
        DB_PASSWORD +
        '@' +
        DB_HOST +
        ':' +
        DB_PORT +
        '/' +
        DB_NAME
}

module.exports = {
    PORT,
    DATABASE_URL: databaseUrl(),
}