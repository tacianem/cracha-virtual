const LinksSocialMedia = {
  github: 'tacianem',
  youtube: '',
  instagram: 'drawings.rin'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

function getGithubProfileInfo() {
  const url = `https://api..github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json) //response guarda o que vem do fetch
    .then(data => { //promise
      //pega resultado da primeira promise e põe em 'data'
      userName.textcontent = data.name
      userBio.textcontent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLinkTree.textcontent = data.login
    })

  //ARROW FUNCTION:
  /* function *name*(response) {
    response.json()
  } */
}

changeSocialMediaLinks()
//getGithubProfileInfo()
/* >>>> CHANGING THE VALUES IN LinksSocialMedia ALONE WILL ADAPT THE PAGE TO A NEW DIFFERENT PERSON ALREADY!! <<<<< */
