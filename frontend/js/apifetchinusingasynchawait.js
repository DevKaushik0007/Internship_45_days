const fetchdata = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log(`error is ${error}`)
    }
};
fetchdata();
