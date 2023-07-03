


function upDateProfileInfo (profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}
function upDatedSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function upDatedHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')

}


function upDateLanguages(profileData) {
    const languages = document.getElementById('profile.laguages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

 function upDatePortfolio9(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        debugger
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : '' }>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`
    }).join('')
 }



(async () => {
    const profileData = await fetchProfileData()
    upDateProfileInfo(profileData)
    upDatedSoftSkills(profileData)
    upDatedHardSkills(profileData)
})()