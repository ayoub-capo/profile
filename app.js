const shareButtons = document.querySelectorAll('.share-title-button')

const shareProfile = document.querySelectorAll('.share-button')

const pythonCertificat = "https://www.freecodecamp.org/certification/ayoub-ouabderrazak/scientific-computing-with-python-v7"
const javascriptCertificat = "https://www.freecodecamp.org/certification/ayoub-ouabderrazak/javascript-algorithms-and-data-structures"
const htmlCss = "https://www.freecodecamp.org/certification/ayoub-ouabderrazak/responsive-web-design"

async function copyText(e){
  //  prevent button going to the site
  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link)
  try{
    await navigator.clipboard.writeText(link)
    alert("Copied the link: " + link)
  } catch (err){
      console.log(err)
  }
}

shareButtons.forEach(shareButtons => shareButtons.addEventListener('click', copyText))
shareProfile.forEach(shareProfile => shareProfile.addEventListener('click', copyText))