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