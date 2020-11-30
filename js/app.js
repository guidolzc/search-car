const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];


/*console.table(autos);  // MUESTRA LA TABLA en html

for(let i = 0;i <autos.length; i++){
	//console.log(autos[i].marca);

	/*if(autos[i].precio > 40000){
		console.log(autos[i]);
	}*/
	/*if(autos[i].puertas === 4){
		console.log(autos[i]);
	}*/
	/*if(autos[i].color === 'Negro'){
		console.log(autos[i]);
	}
	console.log(autos[i]);
} 
*/

// ""FOREACH"""
// SIRVE MAS PARA UN LISTADO DE COMPRAS PARA UN CARRITO COCMO VER LISTADO DE COMPRA QUE EL USUARIO AGREGO
// COMO VER UN TODOS LOS ELEMENTOS DE UN ARREGLO 
//autos.forEach(autos =>console.log(autos));


/* 
let resultado = [];
autos.forEach(auto =>{
	if(auto.color === 'Rojo'){
		resultado.push(auto);
	}
});	
console.log(resultado);
*/

// map // CREA UN NUEVO ARREGLO  MIENTRAS Q ''FOREACH" SOLO recorre todos los elementos

 /*let resultado = autos.map(auto => {
	if (auto.marca === 'BMW'){
		return auto;
	}
 });
console.log (resultado);*/



// "FILTER"	 es como un buscador en grande escala de un solo tipo sin errores 
// retornar los objetos que cumplan la condicion

//let resultado = autos.filter(auto => auto.marca !=='BMW');

//let resultado = autos.filter(auto => auto.color === 'Rojo');

//let resultado = autos.filter(auto => auto.year === '2018' );

//let resultado = autos.filter(auto => auto.year > '2015' );

//let resultado = autos.filter(auto => auto.precio > '50000' );

//let resultado = autos.filter(auto => auto.puertas === 2 );

//let resultado = autos.filter(auto => auto.transmision === 'manual' );

//let resultado = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017 );

//let resultado = autos.filter(auto => auto.year >= 2016 && auto.marca === 'BMW');

//console.log(resultado);


//  ""FIND"" 
//TRAE EL PRIMERO Q CUMPLA LA CONDICION
// sirve para encontrar 1 CODIGO 

//let resultado = autos.find(auto => auto.marca === 'BMW');
//let resultado = autos.find(auto => auto.modelo === 'Mustang');


//console.log(resultado);


// ""reduce""" SUMA Y ALMACENA EN 1 TOTAL 
// suma todos los precios de los autos 
//let resultado = autos.reduce((total,auto)=> total+ auto.precio, 0);


//const numero = [1,2,3];
//let resultado = numero.reduce((total,numero)=> total+ numero, 100);


//console.log(resultado);




// ""some"""  si o no si exite o no  false o true

//let resultado = autos.some(auto => auto.marca === 'BMW');
//let resultado = autos.some(auto => auto.marca === 'Ferrari');
let resultado = autos.some(auto => auto.precio > 1000000);

console.log(resultado);

