fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(users => showUsers(users));

showUsers = users => {
    const usersDiv = document.querySelector('#cards-div');

    users.forEach(user => {
        const userElement = document.createElement('div');
        
        userElement.className = 'user-card';
        userElement.innerHTML = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h5 class="card-title">${user.name}</h5>
                    <img src="${user.image_url}" alt="User Profile Picture" class="card-img-top card-img">
                </div>
                <div class="flip-card-back">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.bio}</p>
                </div>
            </div>
        </div>`;
        usersDiv.append(userElement);
    });
}

/*
<div class="card h-100" style="width: 18rem;"><img src="${user.image_url}" class="card-img-top card-img" alt="user picture"><div class="card-body">
        <h5 class="card-title">${user.name}</h5><p class="card-text">${user.bio}</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`
        */