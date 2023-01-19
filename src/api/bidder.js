import axios from "axios";
import { encryptedData, decryptedData } from "../utils/encryption";

const apiUrl = "https://sih-blackwing.onrender.com/api";

export const createBidderPost = async (formData) => {
    try {
        
        formData = encryptedData(formData);
        const response = await axios.post(apiUrl + "/bidder/", formData);
        console.log("line8", response);
    if (response.data) {
        // response.data = decryptedData(response.data);
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
        const response = await axios.post(apiUrl + "/bid/apply", data, {
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

