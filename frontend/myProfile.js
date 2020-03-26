const newSearch = new URLSearchParams(window.location.search)
const email = newSearch.get('email')

fetch(`http://localhost:4000/users/user?email=${email}`)
    .then(response => response.json())
    .then(user => renderUserName(user))

function renderUserName(user) {
    const userCard = document.getElementById("user-card")

    const name = document.createElement('h1')
    name.innerText = user.name === null ? "John Doe" : user.name;

    userCard.appendChild(name);
    renderUserImage(user);
}

function renderUserImage(user) {
    const userCard = document.getElementById("user-card")

    const image = document.createElement('img')
    image.src =  user.image_url === null ? "https://i0.wp.com/mastersbp.com/wp-content/uploads/2016/08/dummy-prod-1.jpg" : `${user.image_url}`;
    image.alt = "user profile picture"

    const imageForm = document.createElement('div')
    imageForm.className = "custom-file"

    imageForm.innerHTML = `
        <input type="file" class="custom-file-input" id="validatedCustomFile" required>
        <label class="custom-file-label photo-label-input" for="validatedCustomFile">Change profile picture...</label>
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
        <textarea type="text" class="form-control textarea-control" id="" placeholder="${bioText}">
    `
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
        <form method="POST" action="http://localhost:4000/skills/${skill.id}">
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
    
    addSkill.innerHTML = `
    <form class="form-padding" method="POST" action="http://localhost:4000/skills">
        <input type="text" class="form-control add-skill-input" id="addSkillsInput" placeholder="Add skill..." name="name">
        <input type="hidden" name="user_id" value="${user.id}">
        <input type="hidden" name="has_skill" value="true">
    </form>`
    skillList.appendChild(addSkill);
    
    const input = document.getElementById("addSkillsInput");

    const addDesiredSkill = document.createElement('li')
          addDesiredSkill.innerHTML = `
          <form class="form-padding" method="POST" action="http://localhost:4000/skills">
            <input type="text" class="form-control add-skill-input" id="addDesiredSkillsInput" placeholder="Add desired skill..." name="name">
              <input type="hidden" name="user_id" value="${user.id}">
              <input type="hidden" name="has_skill" value="false">
          </form>`
          desiredSkillList.appendChild(addDesiredSkill);

    renderDeleteProfile(user)
}

function renderDeleteProfile(user) {
    const userCard = document.getElementById("user-card")
    const deleteProfileButton = document.createElement('div')
    deleteProfileButton.innerHTML = `<input id=${user.id} type="button" value="Delete Profile" class="delete"></input><br /><br /><br />`

    userCard.appendChild(deleteProfileButton)
}         