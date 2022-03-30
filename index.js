// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

var cookies = document.cookie
var notes = localStorage.getItem('notes')


//cookies name

cookieStore.get('name')
  .then(function(cookieObj) {
    console.log(cookieObj)
    if (cookieObj){
      nameSpan.textContent= cookieObj.value
    }
  })

//var nameCookie = cookies
 // .find(function(cookie){
 //   return cookie.startsWith('name')
 // })
 // if (nameCookie) {
 //   nameSpan.textContent = nameCookie
 // }


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  notes= textarea.value;
  localStorage.setItem('notes', notes)
  //name stored to cookie
    document.cookie = 'name=' + nameSpan.textContent


  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  localStorage.clear()
  textarea.value= '';
  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp