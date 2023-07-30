const axios = require("axios");

const getData = async url => {
    try {
        const response = await axios.get(url);
        console.log(response.status); // 200?
        return response.data;
    } catch (error) {
        throw new Error(`Error: ${error}`);
    } finally {
        console.log("Data successfully retrieved.");
    }
};
