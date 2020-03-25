const searchParams = new URLSearchParams(window.location.search);
const userSearch = searchParams.get('search');
const userUrl = userSearch === null ? 'http://localhost:4000/users' : `http://localhost:4000/users?search=${userSearch}`;

fetch(userUrl)
    .then(response => response.json())
    .then(users => showUsers(users));

showUsers = users => {
    const usersDiv = document.querySelector('#cards-div');

    users.forEach(user => {
        const userElement = document.createElement('div');
        const skillsElement = document.createElement('ul');

        user.skills.forEach(skill => {
            const skillElement = document.createElement('li');

            skillElement.className = 'skill-list-item';
            skillElement.innerText = skill.name;
            
            skillsElement.appendChild(skillElement);
        });
        
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
                    <h6 class="card-text">Skills/Desired Skills:</h6>
                    <div id='skills-list-${user.id}'></div>
                    <hr>
                    <a class="email-link" href="mailto:${user.email}" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i> Email</a>
                </div>
            </div>
        </div>`;

        usersDiv.append(userElement);

        const userEleAdded = document.querySelector(`#skills-list-${user.id}`);
        userEleAdded.append(skillsElement);
    });
}

/*
<div class="card h-100" style="width: 18rem;"><img src="${user.image_url}" class="card-img-top card-img" alt="user picture"><div class="card-body">
        <h5 class="card-title">${user.name}</h5><p class="card-text">${user.bio}</p><a href="#" class="btn btn-primary">Learn More</a></div></div>`
        */