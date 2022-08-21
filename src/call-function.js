const loadRandomName = () => {
    fetch('http://localhost:3000/random-name')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
};
loadRandomName();