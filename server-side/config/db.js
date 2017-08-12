const express = require('express')
const mysql = require('mysql')

const confDB = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'budget'
})

confDB.connect()