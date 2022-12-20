const API_URL = 'http://localhost:8000/login/token/';

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
