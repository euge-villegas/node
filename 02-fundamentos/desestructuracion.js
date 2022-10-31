const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
    return `${this.nombre} ${this.apellido}`;
    }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;



function imprimeHeroe({ nombre, apellido, poder, edad = 35 }) {
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , h2, h3 ] = heroes;

console.log(h2, h3);