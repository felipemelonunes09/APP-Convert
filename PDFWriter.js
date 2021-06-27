var pdf = require('html-pdf')

class PDFWriter{
	static Write(filname, html){
		pdf.create(html).toFile(filname, (err) => {

		}) 
	}
}

module.exports = PDFWriter