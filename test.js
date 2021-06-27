// Para ler arquivos.
const fs = require('fs')

// ler arquivo
/*fs.readFile('./felipe.nunes', {encoding: 'utf-8'}, (erro, dados) => {

	if (erro){
		console.log('[SERVER] - Erro durante a execução')
	}
	else{
		console.log(dados)
	}
	console.log('finish')
})*/

// escrever arquivo
/*fs.writeFile('./felipe.nunes', 'Novo Conteudo do Arquivo ', (erro) => {
	if (erro){
		console.log('[SERVER] - Erro durante o salvamento')
	}
	else{
		console.log('Arquivo alterado com sucesso')
	}
})
*/

// Escritor e leitor de arquivo json

fs.readFile('./usuario.json', {encoding: 'utf-8'}, (erro, dados) => {


	if (erro) {
		console.log('Um erro aconteceu')
	}
	else{
		var conteudo = JSON.parse(dados)
		conteudo.nome = "Gustavo"
		console.log(conteudo)

		fs.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
			if (erro){
				console.log('Um erro aconteceu durante a escrita')
			}
		})

	}

})