import axios from "axios";

const baseURL = "core/preview-courses";

export const getCourses = async (token) => {
    const response = await axios.get(baseURL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export const getCourse = async (token, id) => {
    const response = await axios.get(`${baseURL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}