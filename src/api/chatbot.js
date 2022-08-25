import axios from "axios";

const apiUrl = "https://1924-115-241-205-3.in.ngrok.io/query/";

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

