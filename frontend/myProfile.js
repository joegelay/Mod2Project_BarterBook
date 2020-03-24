const newSearch = new URLSearchParams(window.location.search)
const email = newSearch.get('email')

function fetchUser() {
    fetch(`http://localhost:4000/users?email=${email}`)
    .then(response => response.json())
    .then(user => renderUser(user))
}