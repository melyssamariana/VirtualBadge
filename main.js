const LinksSocialMedia = {
  github: 'melyssamariana',
  instagram: 'melyssamariana',
  linkedin: 'in/melyssamariana',
  medium: '@melyssamariana',
  email: 'melyssa.mariana32@gmail.com',
  subjectEmail: 'Vi teu email no VirtualBadge',
  messageEmail: 'HelloWorld'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social == 'email') {
      li.children[0].href = `https://mail.google.com/mail/u/0/?fs=1&to=${email}&su=${subjectEmail}&body=${messageEmail}&tf=cm`
    } else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()
