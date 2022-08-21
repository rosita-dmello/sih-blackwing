import axios from "axios";

const apiUrl = "https://950b-2400-3c20-200-40b5-9c6a-5729-3372-9ac6.in.ngrok.io/query/";

export const sendQueryPost = async (formData) => {
    try {
        const response = await axios.post(apiUrl, formData);
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

