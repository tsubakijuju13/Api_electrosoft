const API_URL = 'http://localhost:8000/login/token/';
const API_SIGNUP_URL = 'http://localhost:8000/usuarios/';

export const signup = async (user) => {
    return await fetch(API_SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: user.nombre,
            apellido: user.apellido,
            direccion: user.direccion,
            identificacion: user.identificacion,
            telefono: user.telefono,
            ciudad: user.ciudad,
            barrio: user.barrio,
            email: user.email,
            password: user.password,
            re_password: user.re_password,
            role: "Cliente",
            
        })

    })
}


export const getToken = async (user) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    })

}
