const Pool = require("pg").Pool

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "todo_db",
	password: "supercool",
	port: 5432,
})

module.exports = pool
