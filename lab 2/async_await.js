async function fetchDataAsync(url) {
    try {
        const data = await fetchData(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchData(url) {
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

fetchDataAsync("https://example.com/api/data");
