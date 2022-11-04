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

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe empleado con id ${id}`)
        }
    });

    return promesa;

    // if (empleado) {
    //     callback(null, empleado);
    // } else {
    //     callback(`Empleado con id ${id} no existe`)
    // }
}


getEmpleado(2)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))
