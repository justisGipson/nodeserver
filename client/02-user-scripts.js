userSignUp = () => {
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user: {username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken:', token);
    });
}