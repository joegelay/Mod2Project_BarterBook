const searchParams = new URLSearchParams(window.location.search);
const userSearch = searchParams.get('search');
const searchParameter = searchParams.get('parameterSelect');
const userUrl = userSearch === null ? 'http://localhost:4000/users' : `http://localhost:4000/users?search=${userSearch}&parameterSelect=${searchParameter}`;
const currentEmail = decodeURI(searchParams.get('email'));

fetch(userUrl)
    .then(response => response.json())
    .then(users => showUsers(users));

showUsers = users => {
    const usersDiv = document.querySelector('#cards-div');

    users.forEach(user => {
        if (user.email === currentEmail) {
            return;
        }
        
        // dropdown by search

        const userElement = document.createElement('div');
        const skillsElement = document.createElement('ul');
        const desiredSkillsElement = document.createElement('ul');

        user.skills.forEach(skill => {
            const skillElement = document.createElement('li');

            skillElement.className = 'skill-list-item';
            skillElement.innerText = skill.name;
            
            let hasSkill = false;

            // Check if the current skill is a has_skill or desired skill
            for (let i = 0; i < user.user_skills.length; i++) {
                if (user.user_skills[i].skill_id === skill.id) {
                    hasSkill = user.user_skills[i].has_skill;
                    break;
                }
            }

            if (hasSkill) {
                skillsElement.appendChild(skillElement);
            } else {
                desiredSkillsElement.appendChild(skillElement);
            }
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
                    <h6 class="card-text">Skills:</h6>
                    <div id='skills-list-${user.id}'></div>
                    <h6 class="card-text">Desired Skills:</h6>
                    <div id='desired-skills-list-${user.id}'></div>
                    <hr>
                    <a class="email-link" href="mailto:${user.email}" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i> Email</a>
                </div>
            </div>
        </div>`;

        usersDiv.append(userElement);

        const skillsListDiv = document.querySelector(`#skills-list-${user.id}`);
        skillsListDiv.append(skillsElement);

        const desiredSkillsDiv = document.querySelector(`#desired-skills-list-${user.id}`);
        desiredSkillsDiv.append(desiredSkillsElement);
    });
}