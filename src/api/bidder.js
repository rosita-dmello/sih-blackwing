import axios from "axios";

const apiUrl = "https://sih-blackwing.herokuapp.com/api";

export const createBidderPost = async (formData) => {
    try {
        const response = await axios.post(apiUrl + "/bidder/");
    if (response.data) {
        return (response.data)
    } else {
        console.log(response);
    }   
    } catch(err) {
        console.log(err);
    }
    
}