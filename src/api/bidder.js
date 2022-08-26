import axios from "axios";
import { encryptedData } from "../utils/encryption";

const apiUrl = "https://sih-blackwing-api.herokuapp.com/api";

export const createBidderPost = async (formData) => {
    try {
        
        formData = encryptedData(formData);
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
export const postFinancialBid= async(data,token)=>{
    try {
        data = encryptedData(data);
        const response = await axios.post(apiUrl + "/bidder/", data,{
            headers:{
              Authorization: `Bearer ${token}`
            }});
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

