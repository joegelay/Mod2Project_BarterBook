const newSearch = new URLSearchParams(window.location.search)
const email = newSearch.get('email')

fetch(`http://localhost:4000/users/user?email=${email}`)
    .then(response => response.json())
    .then(user => renderUserName(user))

function renderUserName(user) {
    const userCard = document.getElementById("user-card")

    const name = document.createElement('div');
    const userName = user.name === null ? "John Doe" : user.name;

    name.className = "name-div";
    name.innerHTML = `
        <h3>Name:</h3>
        <form method="POST" action="http://localhost:4000/users/${user.id}" class="center-vertical-form">
            <input name="_method" type="hidden" value="PUT"> 
            <input type="text" class="name-input-box" name="name" value="${userName}">
            <input type="hidden" name="email" value="${user.email}">
            <input type="hidden" name="password" value="${user.password}">
            <input type="hidden" name="zip" value="${user.zip}">
            <input type="hidden" name="bio" value="${user.bio}">
            <input type="hidden" name="image_url" value="${user.image_url}">
        </form>`;

    userCard.appendChild(name);
    renderUserImage(user);
}

function renderUserImage(user) {
    const userCard = document.getElementById("user-card")

    const image = document.createElement('img')

    image.className = "main-photo"
    image.src =  user.image_url === null ? "https://i0.wp.com/mastersbp.com/wp-content/uploads/2016/08/dummy-prod-1.jpg" : `${user.image_url}`;
    image.alt = "user profile picture"

    const imageForm = document.createElement('div')
    
    imageForm.className = 'picture-upload-input-div';
    imageForm.innerHTML = `
        <h3>Update Profile Picture:</h3>
        <form method="POST" action="http://localhost:4000/users/${user.id}">
            <input type="text" class="form-control" name="image_url" placeholder="Enter Image URL Here">
            <input name="_method" type="hidden" value="PUT"> 
            <input type="hidden" name="name" value="${user.name}">
            <input type="hidden" name="email" value="${user.email}">
            <input type="hidden" name="password" value="${user.password}">
            <input type="hidden" name="zip" value="${user.zip}">
            <input type="hidden" name="bio" value="${user.bio}">
        </form>
    `

    userCard.appendChild(image);
    userCard.appendChild(imageForm);

    renderUserBio(user);
}

function renderUserBio(user) {
    const userCard = document.getElementById("user-card")

    const bio = document.createElement('div')
    const bioText = user.bio === null ? "Enter bio here" : user.bio;

    bio.className = "bio"
    bio.innerHTML = `
        <h3 class="bio-header">Bio:</h3>
        <form method="POST" action="http://localhost:4000/users/${user.id}" class="flex-form">
            <input name="_method" type="hidden" value="PUT"> 
            <input type="hidden" name="name" value="${user.name}">
            <input type="hidden" name="email" value="${user.email}">
            <input type="hidden" name="password" value="${user.password}">
            <input type="hidden" name="zip" value="${user.zip}">
            <textarea type="text" class="form-control textarea-control" name="bio">${bioText}</textarea>
            <input type="hidden" name="image_url" value="${user.image_url}">
            <input type="submit" class="btn-primary rounded-input" value="Update Bio">
        </form>`;

    userCard.appendChild(bio);

    renderSkillLists(user);
}

function renderSkillLists(user) {
    const userCard = document.getElementById("user-card")

    const skillLists = document.createElement('div')
    skillLists.className = "skill-lists"


    const skills= document.createElement('div')
    skills.className = "skills"
    const skillsHeader = document.createElement('h4')
    skillsHeader.innerText = "Skills:"


    const desiredSkills= document.createElement('div')
    desiredSkills.className = "desired-skills"
    const desiredSkillsHeader = document.createElement('h4')
    desiredSkillsHeader.innerText = "Desired Skills:"

    const skillList = document.createElement('ul')
    skillList.id= "skill-list-ul"

    const desiredSkillList = document.createElement('ul')
    desiredSkillList.id= "desired-skill-list-ul"

    userCard.appendChild(skillLists);

    skillLists.appendChild(skills);
    skillLists.appendChild(desiredSkills);

    skills.appendChild(skillsHeader);
    skills.appendChild(skillList);

    desiredSkills.appendChild(desiredSkillsHeader);
    desiredSkills.appendChild(desiredSkillList);

    renderListItems(user);
}


function renderListItems(user) {

    const skillList = document.getElementById("skill-list-ul")
    const desiredSkillList = document.getElementById("desired-skill-list-ul")
    
    user.skills.forEach(skill => {
        const skillLi = document.createElement('li')
        const skillElement = document.createElement('span');
        
        skillElement.className = 'skill-list-item';
        skillElement.innerHTML = `${skill.name} 
        <form class="form-right" method="POST" action="http://localhost:4000/skills/${skill.id}">
            <input name="_method" type="hidden" value="delete"> 
            <input name="user_id" type="hidden" value="${user.id}">
            <input name="skill_id" type="hidden" value="${skill.id}">
            <input class="delete" type="submit" value="Delete">
        </form>`;
            
        
        let hasSkill = false;

        // Check if the current skill is a has_skill or desired skill
        for (let i = 0; i < user.user_skills.length; i++) {
            if (user.user_skills[i].skill_id === skill.id) {
                hasSkill = user.user_skills[i].has_skill;
                break;
            }
        }

        if (hasSkill) {
            skillList.appendChild(skillLi)
            skillLi.appendChild(skillElement);
        } else {
            desiredSkillList.appendChild(skillLi);
            skillLi.appendChild(skillElement);
        }
    });

    const addSkill = document.createElement('li')
    addSkill.id = "add-skill-input"
    
    addSkill.innerHTML = `
    <form class="form-padding" method="POST" action="http://localhost:4000/skills">
        <input type="text" class="form-control-custom add-skill-input" id="addSkillsInput" placeholder="Add skill..." name="name">
        <input type="hidden" name="user_id" value="${user.id}">
        <input type="hidden" name="has_skill" value="true">
    </form>`
    skillList.appendChild(addSkill);

    const addDesiredSkill = document.createElement('li')
    addDesiredSkill.id = "add-desired-skill-input"

          addDesiredSkill.innerHTML = `
          <form class="form-padding" method="POST" action="http://localhost:4000/skills">
            <input type="text" class="form-control-custom add-skill-input" id="addDesiredSkillsInput" placeholder="Add desired skill..." name="name">
              <input type="hidden" name="user_id" value="${user.id}">
              <input type="hidden" name="has_skill" value="false">
          </form>`
          desiredSkillList.appendChild(addDesiredSkill);

    renderDeleteProfile(user)
}

function renderDeleteProfile(user) {
    const userCard = document.getElementById("user-card")
    const deleteProfileButton = document.createElement('div')

    deleteProfileButton.className = 'delete-profile-div';

    deleteProfileButton.innerHTML = `
        <form method="POST" action="http://localhost:4000/users/${user.id}">
            <input name="_method" type="hidden" value="delete"> 
            <input id=${user.id} type="submit" value="Delete Profile" class="delete delete-profile powerful-delete-btn">
        </form>`;

    userCard.appendChild(deleteProfileButton)
}         