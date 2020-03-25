const newSearch = new URLSearchParams(window.location.search)
const email = newSearch.get('email')

console.log(email)

fetch(`http://localhost:4000/users/user?email=${email}`)
    .then(response => response.json())
    .then(user => renderUser(user))

function renderUser(user) {
    const body = document.querySelector('body')

    const name = document.createElement('p')
    name.innerText = user.name 

    body.appendChild(name)
}