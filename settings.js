module.exports = {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.PRESCARE_SECRET || 'me',
    DATABASE_URL: process.env.DATABASE_URL 
        ? process.env.DATABASE_URL 
        : 'postgres://postgres:prescare@localhost:5432/prescare'

}