document.getElementById('button3').addEventListener('click', getHTTPURL);

function getHTTPURL() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}



/* This is old shit way

document.getElementById('button3').addEventListener('click', getHTTPURL);

function getHTTPURL() {
    fetch('https://api.github.com/users')
    .then(function(res) {
        return (res.json());
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    })
} */