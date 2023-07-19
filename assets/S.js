let track_lang = Array.from(document.getElementsByClassName('language'))
track_lang.map(lang => {
    lang.addEventListener('click', (e)=>{
       console.log(e.target.id)
       window.location = "../cheatsheet/" + e.target.id
    })
})
