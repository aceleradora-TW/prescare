module.exports = {
    PORT: (process.env.PORT || 3000),
    DATABASE_URL: process.env.DATABASE_URL ? process.env.DATABASE_URL : 'postgres://postgres:prescare@localhost:5432/prescare'
}