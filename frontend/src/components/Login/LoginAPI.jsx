const API_URL = 'http://localhost:8000/login/token/';
const API_SIGNUP_URL = 'http://localhost:8000/api/usuarios/';

export const signup = async (user) => {
    return await fetch(API_SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
            re_password: user.re_password,
            role: "Cliente",
            active: true,
            name: user.name,
            last_name: user.last_name
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
