import axios from "axios";

const apiUrl = "https://sih-blackwing-api.herokuapp.com/api";

export const createBidderPost = async (formData) => {
    try {
        const response = await axios.post(apiUrl + "/bidder/", formData);
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

