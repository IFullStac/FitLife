

document.addEventListener('DOMContentLoaded', () => {  

  const ltElements = document.getElementsByClassName('LT')
  const enElements = document.getElementsByClassName('EN')
  const ruElements = document.getElementsByClassName('RU')

  function clearEN() {
    for (let elEN of enElements) {
      elEN.classList.remove('languageVisible')
      elEN.classList.add('disabled')
    }
  }

  function clearRU() {
    for (let elRU of ruElements) {
      elRU.classList.remove('languageVisible')
      elRU.classList.add('disabled')
    }
  }
  
  clearEN()
  clearRU()

  function clearLT() {
    for (let elLT of ltElements) {
      elLT.classList.remove('languageVisible')
      elLT.classList.add('disabled')
    }
  }

  document.getElementById('LT-FLAG').addEventListener('click', lithuanian)
  document.getElementById('EN-FLAG').addEventListener('click', english)
  document.getElementById('RU-FLAG').addEventListener('click', russian)

  function lithuanian() {
    for (let elLT of ltElements) {
      elLT.classList.add('languageVisible')
      elLT.classList.remove('disabled')
    }
    clearEN()
    clearRU()
  }

  function english() {
    for (let elEN of enElements) {
      elEN.classList.add('languageVisible')
      elEN.classList.remove('disabled')
    }
    clearLT()
    clearRU()
  }

function russian() {
    for (let elRU of ruElements) {
      elRU.classList.add('languageVisible')
      elRU.classList.remove('disabled')
    }
    clearLT()
    clearEN()
  }



  // ********** GYM slides **********************
  // *****************************************
  const gymSlides = document.getElementsByClassName("gym-image-div")
  let   gymSingleSlidePosition = 0
  let   gymTripleSlidePosition = 0 
  const numberOfGymPhotos = gymSlides.length

  document.getElementById('carousel-button-next').addEventListener('click', nextSingleGymSlide ) // single photo slide
  document.getElementById('carousel-button-prev').addEventListener('click', prevSingleGymSlide ) // single photo slide
  document.getElementById('carousel-3-button1-next').addEventListener('click', nextTripleGymSlide )  // triple photo slide
  document.getElementById('carousel-3-button1-prev').addEventListener('click', prevTripleGymSlide )  // triple photo slide

  // *******  SINGLE GYM SLIDES *******

  function hideSingleGymSlides() {
    for (let slide of gymSlides) {
      slide.classList.remove('carousel-item-visible')
      slide.classList.add('carousel-item-hidden')
    }
  } // hidding all the single slides 

  function nextSingleGymSlide() {

    hideSingleGymSlides()

    if (gymSingleSlidePosition === numberOfGymPhotos - 1) {
      gymSingleSlidePosition = 0
    } else {
      gymSingleSlidePosition++
    }
    gymSlides[gymSingleSlidePosition].classList.add('carousel-item-visible')
  }

  function prevSingleGymSlide() {
  hideSingleGymSlides()

    if (gymSingleSlidePosition === 0) {
      gymSingleSlidePosition = numberOfGymPhotos - 1
    } else {
      gymSingleSlidePosition--
    }
    gymSlides[gymSingleSlidePosition].classList.add('carousel-item-visible')
  }

  // *******  TRIPLE GYM SLIDES *******

  function hideTripleGymSlides() {
    for (let slide of gymSlides) {
      slide.classList.remove('triple-carousel-item-visible')
      slide.classList.add('triple-carousel-item-hidded')
    }
  } // hidding all the triple slides

  function nextTripleGymSlide() {
    hideTripleGymSlides()
    
    if (gymTripleSlidePosition === numberOfGymPhotos - 5 ) {
      gymTripleSlidePosition += 2
    } else if (gymTripleSlidePosition === numberOfGymPhotos  - 4 ) {
      gymTripleSlidePosition +=1
    } else if (gymTripleSlidePosition === numberOfGymPhotos  - 3 ) {
      gymTripleSlidePosition = 0
    } else {
      gymTripleSlidePosition +=3
    }
    for (let i = gymTripleSlidePosition; i < gymTripleSlidePosition+3; i++ ){
      gymSlides[i].classList.add('triple-carousel-item-visible')
    }
  }

  function prevTripleGymSlide() {
    hideTripleGymSlides()
    if (gymTripleSlidePosition === 1 || gymTripleSlidePosition === 2) {
      gymTripleSlidePosition = 0
    } else if (gymTripleSlidePosition === 0) {
      gymTripleSlidePosition = numberOfGymPhotos - 3
    } else {
      gymTripleSlidePosition -=3
    }
    for (let i = gymTripleSlidePosition; i < gymTripleSlidePosition+3; i++ ){
      gymSlides[i].classList.add('triple-carousel-item-visible')
    }
  }

  // *******  PILATES SLIDES *******

  const pilatesSlides = document.getElementsByClassName("pil-image-div")
  let   pilSingleSlidePosition = 0
  let   pilTripleSlidePosition = 0 
  const numberOfPilPhotos = pilatesSlides.length


  document.getElementById('carousel-button2-next').addEventListener('click', nextSinglePilSlide )  // single photo slide
  document.getElementById('carousel-button2-prev').addEventListener('click', prevSinglePilSlide )  // single photo slide
  document.getElementById('carousel-3-button2-next').addEventListener('click', nextTriplePilSlide ) // triple photo slide
  document.getElementById('carousel-3-button2-prev').addEventListener('click', prevTriplePilSlide ) // triple photo slide

  function hideSinglePilatesSlides() {
    for (let slide of pilatesSlides) {
      slide.classList.remove('carousel-item-visible')
      slide.classList.add('carousel-item-hidden')
    }
  }

  // *******  SINGLE PILATES SLIDES *******

  function nextSinglePilSlide() {
    hideSinglePilatesSlides()

    if (pilSingleSlidePosition === numberOfPilPhotos - 1) {
      pilSingleSlidePosition = 0
    } else {
      pilSingleSlidePosition++
    }
    pilatesSlides[pilSingleSlidePosition].classList.add('carousel-item-visible')
  }

  function prevSinglePilSlide() {
  hideSinglePilatesSlides()

    if (pilSingleSlidePosition === 0) {
      pilSingleSlidePosition = numberOfPilPhotos - 1
    } else {
      pilSingleSlidePosition--
    }
    pilatesSlides[pilSingleSlidePosition].classList.add('carousel-item-visible')
  }

  // *******  TRIPLE PILATES SLIDES *******

  function hideTriplePilatesSlides() {
    for (let slide of pilatesSlides) {
      slide.classList.remove('triple-carousel-item-visible')
      slide.classList.add('triple-carousel-item-hidded')
    }
  }

  function nextTriplePilSlide() {
    hideTriplePilatesSlides()
    
    if (pilTripleSlidePosition === numberOfPilPhotos - 5 ) {
      pilTripleSlidePosition += 2
    } else if (pilTripleSlidePosition === numberOfPilPhotos  - 4 ) {
      pilTripleSlidePosition +=1
    } else if (pilTripleSlidePosition === numberOfPilPhotos  - 3 ) {
      pilTripleSlidePosition = 0
    } else {
      pilTripleSlidePosition +=3
    }

    for (let i = pilTripleSlidePosition; i < pilTripleSlidePosition+3; i++ ){
      pilatesSlides[i].classList.add('triple-carousel-item-visible')
    }
  }

  function prevTriplePilSlide() {
    hideTriplePilatesSlides()
    if (pilTripleSlidePosition === 2 || pilTripleSlidePosition === 1) {
      pilTripleSlidePosition = 0
    } else if (pilTripleSlidePosition === 0) {
      pilTripleSlidePosition = numberOfPilPhotos - 3
    } else {
      pilTripleSlidePosition -= 3
    }
    for (let i = pilTripleSlidePosition; i < pilTripleSlidePosition + 3; i++ ){
      pilatesSlides[i].classList.add('triple-carousel-item-visible')
    }
  }

  // ****END OF BASIC SLIDE SETUP ***

  // ******BEGINING OF MODALS ***

  const modals = document.getElementById('gModal')  

  function createElement(elID) {
    let kuriamasElementas =  document.getElementById(elID)
    let picAddress = kuriamasElementas.firstElementChild.src
    // let photoDescription = kuriamasElementas.firstElementChild.alt
    
    const modalDiv =  document.createElement('div')
    const buttonDiv =  document.createElement('div')
    const pics =      document.createElement('img')
    const spans=     document.createElement('span')
    // const aprasymas = document.createElement('p')
    const buttonNext = document.createElement('button')
    const buttonPrev = document.createElement('button')

    // modalDiv.appendChild(aprasymas)
      // aprasymas.innerHTML = photoDescription
    modalDiv.appendChild(pics)
      pics.src = picAddress
      pics.style.objectFit = 'cover'
      pics.style.height = '60vh'
      pics.style.maxHeight = '520px'
      pics.style.width = '100%'
    modalDiv.appendChild(buttonDiv)
      buttonDiv.classList.add('carousel-actions')
      buttonDiv.appendChild(buttonPrev)
      buttonDiv.appendChild(buttonNext)
        buttonNext.setAttribute('id', 'carousel-button-next')
        buttonPrev.setAttribute('id', 'carousel-button-prev')
        buttonNext.setAttribute('aria-label', 'Next Slide')
        buttonPrev.setAttribute('aria-label', 'Previous Slide')
        buttonNext.innerHTML = '>'
        buttonPrev.innerHTML = '<'
        buttonNext.addEventListener('click', moveToNextModal )
        buttonPrev.addEventListener('click', moveToPrevModal )
    modalDiv.appendChild(spans)
      spans.classList.add('gclose')
      spans.innerHTML = '&times;'
    modalDiv.classList.add('gmodal-content')
    modals.appendChild(modalDiv)

    spans.onclick = function(){
      hideModal()
      modals.removeChild(modalDiv)
    }
  
    window.onclick = function(event) {
      if (event.target == modals) {
        hideModal()
        modals.removeChild(modalDiv)
      }
    }

    buttonNext.onclick = function(){
      modals.removeChild(modalDiv)
    }
    buttonPrev.onclick = function(){
      modals.removeChild(modalDiv)
    }

  }  // END OF CREATE ELEMENT FUNCTION

  function eventAdder() {
    for (let i = 0; i < numberOfGymPhotos; i++) {
      gymSlides[i].setAttribute('id', i+'-indexGymPhotoDiv')
      gymSlides[i].addEventListener('click', expandGalaryPhotos )  
    } 
  
    for (let i = 0; i < numberOfPilPhotos; i++) {
      pilatesSlides[i].setAttribute('id', i + '-indexPilatesPhotoDiv')
      pilatesSlides[i].addEventListener('click', expandGalaryPhotos )  
    }   
  }

  function eventRemover() {
    for (let i = 0; i < numberOfGymPhotos; i++) {
      gymSlides[i].removeAttribute('id', i+'-indexGymPhotoDiv')
      gymSlides[i].removeEventListener('click', expandGalaryPhotos )  
    } 
  
    for (let i = 0; i < numberOfPilPhotos; i++) {
      pilatesSlides[i].removeAttribute('id', i + '-indexPilatesPhotoDiv')
      pilatesSlides[i].removeEventListener('click', expandGalaryPhotos )  
    }   
  }

  if(window.innerWidth > 600) {
    eventAdder()
  } // happens on load if the window is wider than 600px

 this.window.addEventListener('resize', function(){
  if(window.innerWidth > 600) {
   eventAdder()
   } else {
    eventRemover()
   }
 })


  

  function showModal() {
    modals.classList.add('show-Modal')
  }
  function hideModal() {
    modals.classList.remove('show-Modal')
  }

  
  let slideIndex = 0  // the index of the photos in the slide
  let arrLength = 0 // number of max pics possible to slide with modals
  let idText = ''




  // EXPAND PHOTO FUNCTION 
  function expandGalaryPhotos() { 
    if (this.classList.contains("gym-image-div")){
      arrLength = numberOfGymPhotos
      idText = '-indexGymPhotoDiv'
    } else {
      arrLength = numberOfPilPhotos
      idText = '-indexPilatesPhotoDiv'
    }
    showModal()
    let id = this.id
    slideIndex = parseInt(id)    
    createElement(id)
  }  // END OF EXPAND PHOTO FUNCTION





  function  moveToNextModal() {
    if (slideIndex === arrLength -1) {
      slideIndex = 0
    } else {
      slideIndex++
    }
    id = slideIndex + idText
    createElement(id)
  }

  function  moveToPrevModal() {
    if (slideIndex === 0) {
      slideIndex = arrLength - 1 
    } else {
      slideIndex--
    }
    id = slideIndex + idText
    createElement(id)
  }


  // PHOTOSLIDE FUNCTION
  let slideTime = 5000
  // let pakartojimai = 7
  let photoSlidePosition = 0
  
  const photoInTheList = document.getElementsByClassName('slider-image')
  let nrOfPhotos = photoInTheList.length
  // const info = document.getElementById('info')

  function photoSlide() {

    // info.innerHTML += ' photoslide position = ' + photoSlidePosition+ '<br>'

    photoInTheList[photoSlidePosition].classList.remove('carousel-item-visible')

    if (photoSlidePosition === nrOfPhotos - 1) {
      photoSlidePosition = 0 
      photoInTheList[photoSlidePosition].classList.add('carousel-item-visible')
    } else {
      photoSlidePosition++
      photoInTheList[photoSlidePosition].classList.add('carousel-item-visible')
    }

    // pakartojimai--

    // if (pakartojimai === 0) {
    //   clearInterval(timerId)
    //   alert('ciklo pabaiga')
    // }
    
  }
  // let timerId = 
    setInterval(photoSlide, slideTime )

      // document.getElementById('sendBtn').addEventListener('click', function() {
      //   let readyToSend = false 
      //   let readyToSendName = false 
      //   let readyToSendEmail = false 
      //   let readyToSendNumber = false
      //   let readyToSendMessage = false  


      //   const emailVar = document.getElementById('emailAddressId').value
      //   const firstNameVar = document.getElementById('firstNameId').value
      //   const phoneNumberVar = document.getElementById('phoneNumberId').value
      //   const messageTextVar = document.getElementById('messageTextId').value

      //   const checkBox = document.getElementById('checkBoxId').checked

      //   const errorMessage = document.getElementById('alertText')
      //   const zinutesPatvirtinimas = document.getElementById('messageConfirmation')
      //   zinutesPatvirtinimas.innerHTML = ''
      //   errorMessage.innerHTML = ''

      // if (firstNameVar.length > 2) {
      //   errorMessage.innerHTML += ' '
      //   readyToSendName = true
      // } else { 
      //   errorMessage.innerHTML += 'Vardo laukelis negali buti tuscias <br>'
      //   readyToSendName = false 
      // }

      // if ( emailVar.length > 5 &&  emailVar.includes('@') && emailVar.includes('.')) {
      //   errorMessage.innerHTML += ' '
      //   readyToSendEmail = true
      // } else { 
      //   errorMessage.innerHTML += 'Blogas emailo formatas <br>' 
      //   readyToSendEmail = false 
      // }

      // if (phoneNumberVar.length > 10 && phoneNumberVar.length < 15  && phoneNumberVar.includes('+') ) {
      //   errorMessage.innerHTML += ' '
      //   readyToSendNumber = true
      // } else { 
      //   errorMessage.innerHTML += 'Blogas telefono formatas <br> '
      //   readyToSendNumber = false 
      // }

      // if (messageTextVar.length > 10 ) {
      //   errorMessage.innerHTML += ''
      //   readyToSendMessage = true
      // } else { 
      //   errorMessage.innerHTML += 'Zinutes tekstas per trumpas <br> '
      //   readyToSendMessage = false 
      // }

      // if (checkBox) {
      //   readyToSend = true
      //   errorMessage.innerHTML += ''
      // } else { 
      //   errorMessage.innerHTML += 'Prasome patvirtinti, jog sutinkate su duomenu tvarkymo taisyklemis <br> '
      //   readyToSend = false 
      // }
  
      // console.log(this.ariaChecked)

      // if (readyToSendName && readyToSendEmail && readyToSendNumber && readyToSendMessage &&  readyToSend) {
      // zinutesPatvirtinimas.innerHTML = ' Jusu zinute buvo sekminai issiusta '
      // document.getElementById('emailAddressId').value = ''
      // document.getElementById('firstNameId').value = ''
      // document.getElementById('phoneNumberId').value = ''
      // document.getElementById('messageTextId').value = ''
      // document.getElementById('checkBoxId').checked = false
      // }


  // })

 
  
  
    

  


  

    
    
    



}) // END OF PAGE LOAD LISTENER

