const newSearch = new URLSearchParams(window.location.search)
const email = newSearch.get('email')

fetch(`http://localhost:4000/users/user?email=${email}`)
    .then(response => response.json())
    .then(user => renderUserName(user))

function renderUserName(user) {
    const userCard = document.getElementById("user-card")

    const name = document.createElement('h1')
    name.innerText = user.name 

    userCard.appendChild(name);
    renderUserImage(user);
}

function renderUserImage(user) {
    const userCard = document.getElementById("user-card")

    const image = document.createElement('img')
    image.src =  `${user.image_url}`
    image.alt = "user profile picture"

    const imageForm = document.createElement('div')
    imageForm.className = "custom-file"
    imageForm.innerHTML = `
        <input type="file" class="custom-file-input" id="validatedCustomFile" required>
        <label class="custom-file-label" for="validatedCustomFile">Change profile picture...</label>
    `

    userCard.appendChild(image);
    userCard.appendChild(imageForm);

    renderUserBio(user);
}

function renderUserBio(user) {
    const userCard = document.getElementById("user-card")

    const bio = document.createElement('div')
    bio.className = "bio"
    bio.innerHTML = `
        <h3>Bio:</h3>
        <input type="text" class="form-control" id="" placeholder="${user.bio}">
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
            skillList.appendChild(skillElement);
        } else {
            desiredSkillList.appendChild(skillElement);
        }
    });
}



//             <div class="skill-lists">
//                 <div class="skills">
//                     <h4>Skills:</h4>
//                     <ul>
//                         <li>
//                             <span>
//                                 Spanish
//                                 <input id=${user_skill.id} type="button" value="Delete" class="delete">
//                             </span>
//                         </li>
//                         <li>
//                             <span>
//                                 Chess
//                                 <input id=${user_skill.id} type="button" value="Delete" class="delete">
//                             </span>
//                         <li>
//                             <span>
//                                 Coding
//                                 <input id=${user_skill.id} type="button" value="Delete" class="delete">
//                             </span>
//                         </li>
//                         <br>
//                         <li>
//                             <input type="text" class="form-control" id=""" placeholder="Add skill...">
//                         </li>
//                     </ul>
//                 </div>

//                <div class="desired-skills">
//                     <h4>Desired Skills:</h4>
//                     <ul >
//                         <li>
//                             <span>
//                                 Piano
//                                 <input id=${user_skill.id} type="button" value="Delete" class="delete">
//                             </span>
//                         </li>
//                         <li>
//                             <span>
//                                 Bike Maintenance
//                                 <input id=${user_skill.id} type="button" value="Delete" class="delete">
//                             </span>
//                         </li>
//                         <br>
//                         <li>
//                             <input type="text" class="form-control" id="" placeholder="Add desired skill...">
//                         </li>
//                     </ul>
//                </div>
//             </div>


//             <input id=${user.id} type="button" value="Delete Profile" class="delete delete-profile"></input>