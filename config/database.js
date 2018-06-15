module.exports = {
    'url': process.env.DATABASE_URL ? process.env.DATABASE_URL : 'postgres://postgres:prescare@localhost:5432/prescare'
};