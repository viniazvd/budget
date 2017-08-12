const connection = require('./../config/db')

let controller = {}

controller.list = ( req, res ) => {
	connection.query('SELECT * FROM usuario', function( err, results, fields ) {
		if( err ) throw err

		console.log( 'results: ', results )
	})
}

controller.getUser = ( req, res ) => {
	connection.query('SELECT * FROM usuario WHERE id = "' + req.params.id + '"', function( err, results, fields ) {
		if( err ) throw err

		console.log( 'results: ', results[0] )
	})
}

controller.save = ( req, res ) => {
	// const user = req.body
	const sql = `INSERT INTO usuario (nome, email, senha) VALUES ('vini5', 'vini5@email.com', '5555')`
	
	connection.query( sql, function( err, results, fields ) {
		if( err ) throw err

		console.log( 'Usuário registrado com sucesso!' )
	})
}

controller.delete = ( req, res ) => {
	const sql = `DELETE FROM usuario WHERE id = ${ req.params.id }`

	connection.query( sql, function( err, results, fields ) {
		if( err ) throw err

		console.log( 'Usuário deletado com sucesso!' )
	})
}

controller.update = ( req, res ) => {
	const sql = `UPDATE usuario SET nome = nomeUpdate WHERE id = ${ req.params.id }`

	connection.query( sql, function( err, results, fields ) {
		if( err ) throw err

		console.log( 'Usuário alterado com sucesso!' )
	})	
}

module.exports = controller
