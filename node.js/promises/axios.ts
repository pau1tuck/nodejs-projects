import axios from 'axios';

const currencies = {some: "data"}
const rates = []

export const fetchRates = async () => {
    const keys = Object.keys(currencies); // to array

    const promises = keys.map(async key => { // map array
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
            });
            rates.push(response.data);
            console.log(currencies[key], "retrieved");
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    });

    await Promise.all(promises);
}