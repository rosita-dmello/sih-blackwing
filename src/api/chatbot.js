import axios from "axios";

const apiUrl = "https://3e0b-2405-204-9591-8d45-b845-542c-596-d8d0.in.ngrok.io/query/";

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

