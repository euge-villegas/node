const empleados = [
    {
        id: 1,
        nombre: 'Euge'
    },
    {
        id: 2, 
        nombre: 'Pau'
    },
    {
        id: 3,
        nombre: 'Ari'
    }
];

const salario = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const sueldo = salario.find(s => s.id === id)?.salario;

    if (sueldo) {
        callback(null, sueldo)
    } else {
        callback(`Empleado con id ${id} no existe`)
    }
}

const id = 1;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    console.log(empleado);

    getSalario(id, (err, sueldo) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log(sueldo);
        }
    })
});

