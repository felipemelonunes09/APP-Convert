class Table {
	constructor(data){
		if (data != undefined){
			this.header = data[0]
			data.shift(); // Remove primeio elemento
			this.rows = data;
		}
	}

	// metodo se tornar um 'atributo' e como é um metodo get deve obrigatoriamente retornar algo
	get RowCount(){
		return this.rows.length;
	}

	get CollunsCount(){
		return this.header.length;
	}
}

module.exports = Table