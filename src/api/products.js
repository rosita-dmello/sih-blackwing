import axios from "axios";

import { encryptedData, decryptedData } from "../utils/encryption";

const apiUrl = "https://sih-blackwing.onrender.com/api";

export const submitProduct = async (formData, token) => {
    try {
        console.log("submitProduct", formData);
        const response = await axios.post(apiUrl + "/product/", formData, {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": 'multipart/form-data',
          }
      });
        console.log(response.data);

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

export const getProducts = async () => {
    try {
        const response = await axios.get(apiUrl + "/product/")
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

export const getMyProducts = async (token) => {
    try {
        const response = await axios.get(apiUrl + "/product/my-products",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
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