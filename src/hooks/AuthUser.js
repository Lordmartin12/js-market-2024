export const storeUser = (userObject = null) => {
    if (userObject != null) {
        localStorage.setItem('activeUser', JSON.stringify(userObject));
    }
}

export const storeToken = (token = null) => {
    if (token != null) {
        localStorage.setItem('token', token);
    }
}

export const getAuthUser = () => {
    let activeUser = JSON.parse(localStorage.getItem('activeUser')) || null;
    return activeUser;
}

export const getToken = () => {
    let token = localStorage.getItem('token') || null;
    return token;
}

export const clearAuth = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('activeUser')
}
