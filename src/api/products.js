import axios from "axios";

import { encryptedData, decryptedData } from "../utils/encryption";

const apiUrl = "https://sih-blackwing-api.herokuapp.com/api";

export const submitProduct = async (formData, token) => {
    try {
        const response = await axios.post(apiUrl + "/product/", formData, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
        console.log(response);

    if (response) {
        return (response)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err.response.data.result);
        return (err.response.data.result)
    }
    
}