const axios = require("axios");

const convertToUSD = async (arr) => {
    const host = "api.frankfurter.app";

    const promises = arr.map((el) => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    `https://${host}/latest?amount=${el.amount}&from=${el.currency}&to=USD`
                )
                .then((data) => {
                    resolve(data.data.rates.USD);
                })
                .catch(() => {
                    reject("error");
                });
        });
    });

    return await Promise.all(promises);
};

const arr = [
    { amount: 15000.0, currency: "IDR" },
    { amount: 3.1, currency: "EUR" },
];

(async () => {
    console.log(await convertToUSD(arr));
})();
