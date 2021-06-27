var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var Writer = require('./Writer')
var PDFWriter = require('./PDFWriter')

var leitor = new Reader()
var escritor = new Writer()

async function main() {
	try{
		var dados = await leitor.Read('./user.csv')
		dados = Processor.Process(dados)

		var users = new Table(dados)
		var html = await HtmlParser.Parse(users)
		
		escritor.Write(Date.now() + ' - export.html', html)
		PDFWriter.Write(Date.now() + ' - export.PDF', html)
	}
	catch(erro){
		console.log(erro)
	}
}

main()