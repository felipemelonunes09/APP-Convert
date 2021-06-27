const fs = require('fs')
const util = require('util')

// transforma função com call back para função com promise
//var newFunction = util.promisify()

class Reader {

	constructor(){
		this.reader = util.promisify(fs.readFile)
	}

	
	 async Read(filepath){
		try{
			return await this.reader(filepath, 'utf8')
		}
		catch(err){
			return err
		}
	}
}

module.exports = Reader;