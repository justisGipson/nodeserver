fetchAllFromAuthRoute = () => {
    const fetch_url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')
    
    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    })
}

postToAuthRouteCreate = () => {
    const fetch_url = 'http://localhost:3000/authtest/create'
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;
    let authInputData = {authtestdata: {item: authTestDataInput}};

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    })
}

getOneByUser = () => {
    let postIdNumber = document.getElementById('getNumber').value;
    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    }).then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        var myItem = document.getElementById('getItemValue');
        myItem.innerHTML = response.authtestdata;
    })
}

updateItem = () => {
    let postIdNumber = document.getElementById('updateNumber').value;
    let authTestDataInput = document.getElementById('updateValue').value;
    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
}