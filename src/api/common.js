import axios from "axios";

const apiUrl = "https://sih-blackwing-api.herokuapp.com/api";

export const verifyOtpPost = async (formData) => {
    try {
        const response = await axios.post(apiUrl + "/auth/verify/otp", formData);
        console.log(response);

    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}


export const generateOtpGet = async (userId) => {
    try {
        const response = await axios.get(apiUrl + "/auth/generate/otp/" + userId);
        console.log(response);

    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}

export const loginPost = async (formData) => {
    try {
        const response = await axios.post(apiUrl + "/auth/login", formData);
        console.log(response);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}

export const generateTotpGet = async (userId, token) => {
    try {
        const response = await axios.get(apiUrl + "/auth/totp/" + userId, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}

export const enableTotpPut = async (userId, token, totp) => {
    try {
        const response = await axios.put(apiUrl + "/auth/totp/" + userId, totp, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}

export const verifyTotpPost = async (userId, token, totp) => {
    try {
        const response = await axios.post(apiUrl + "/auth/totp/" + userId, totp, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}

export const getApiVersion = async () => {
    try {
        const response = await axios.get(apiUrl);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}