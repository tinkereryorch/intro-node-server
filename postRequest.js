fetch('http://localhost:3002/friends', {
    method: 'POST',
    body: JSON.stringify({
        id: 3,
        name: 'Cloud Strife'
    })
})
.then((response) => response.json())
.then((friend) => console.log(friend));