function fetchData(url, callback) {
    // Simulate an asynchronous request
    setTimeout(() => {
        const data = "Response data";
        const error = null;
        callback(error, data);
    }, 1000);
}

function logData(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

fetchData("https://example.com/api/data", logData);
