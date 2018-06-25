// database url could be accessed by proccess.env.DATABASE_URL

module.exports = {
    development: {
        url: "mysql://root:root@localhost:3306/moecoin"
    },
    test: {
        url: "sqlite://sqlite.db"
    },
    production: {
        use_env_variable: "DATABASE_URL"
    }
};