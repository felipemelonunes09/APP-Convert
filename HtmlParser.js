var ejs = require('ejs')

class HtmlParser{
	static async Parse(table){
		// metodo do ejs para renderizar um arquivo
		return ejs.renderFile('./table.ejs', {header: table.header, rows: table.rows })	
	}
}

module.exports = HtmlParser