import axios from "axios";
import { encryptedData } from "../utils/encryption";

const apiUrl = "https://sih-blackwing.onrender.com/api";

export const createStaffPost = async (formData, token) => {
    try {
        // formData = encryptedData(formData);
        const response = await axios.post(apiUrl + "/staff/", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("line8", response);
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

export const viewAllStaffGet = async (token) => {
    try {
        const response = await axios.get(apiUrl + "/staff/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("line8", response);
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err);
        // return (err.response.data.result)
    }
}

export const viewStaffByIdGet = async (id, token) => {
    try {
        const response = await axios.get(apiUrl + "/staff/" + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("line8", response);
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

export const removeStaffDelete = async (id, token) => {
    try {
        const response = await axios.delete(apiUrl + "/staff/" + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("line8", response);
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