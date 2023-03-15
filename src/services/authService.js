import axios from "axios";

const tokenURL = "auth/anonymous?platform=subscriptions";

export const getToken = async () => { 
    const response = await axios.get(tokenURL);
    return response.data.token;
};