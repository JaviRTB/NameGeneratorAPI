const loadRandomName = () => {
    fetch('http://localhost:3000/complete-name')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
};
loadRandomName();
const loadJSONFirstName = () => {
    fetch('http://localhost:3000/first-name')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
};
loadJSONFirstName();