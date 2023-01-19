import axios from "axios";

const apiUrl = "https://sih-blackwing.onrender.com/api";


export const getAllTenders = async () => {
  try {
    const response = await axios.get(apiUrl + "/tender/");
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getTenderByFilter = async (type, category, status) => {
  if (type === "None") {
    type = undefined;
  }
  if (category === "None") {
    category = undefined;
  }
  if (status === "None") {
    status = undefined;
  }
  try {
    const response = await axios.get(
      apiUrl + "/tender?tendertype=" + type + "&tendercategory=" + category + "&status=" + status
    );
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}

export const getDepartmentTenderByFilter = async (type, category, status, token) => {
  if (type === "None") {
    type = undefined;
  }
  if (category === "None") {
    category = undefined;
  }
  if (status === "None") {
    status = undefined;
  }
  try {
    const response = await axios.get(
      apiUrl + "/tender/department?tendertype=" + type + "&tendercategory=" + category + "&status=" + status,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}

export const getAllottedTenders = async (userId, token) => {
  try {
    const response = await axios.get(apiUrl + "/bidder/alloted/" + userId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}

export const getAppliedTenders = async (userId, token) => {
  try {
    const response = await axios.get(apiUrl + "/bidder/applied/" + userId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}
export const postTender = async (data,token) => {
  try {
    const response = await axios.post(
      apiUrl+"/tender/",data,{
        headers:{
          Authorization: `Bearer ${token}`
        }})
        console.log(response);

    if (response) {
        return (response)
    } else {
        console.log(response);
    }   
    }
   catch(err) {
        console.log(err);
        // return (err.response.data.result)
    }
}

export const viewAllBidsGet = async (token, tenderid) => {
  try {
      const response = await axios.get(apiUrl + "/" + tenderid + "/bid", {
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