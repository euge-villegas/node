// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);


const getUserById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Euge'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500)
}

getUserById(10, (usuario) => {
    console.log(usuario);   
});