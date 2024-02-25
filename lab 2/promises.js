function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous request
        setTimeout(() => {
            const data = "Response data";
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 1000);
    });
}

fetchData("https://example.com/api/data")
    .then(data => console.log(data))
    .catch(error => console.error(error));
