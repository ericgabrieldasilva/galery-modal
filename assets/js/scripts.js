const buttonBoxOpenModal = document.querySelectorAll('.box-single')
const buttonCloseModal = document.querySelectorAll('.btn-close')
const modalWrapper = document.querySelectorAll('.modal-wrapper')
const bgModal = document.querySelector('.bg-modal')
const modal = document.querySelectorAll('.modal')

// Canceling modal click event
modalWrapper.forEach(modal => {
  modal.onclick = function(e){
    e.stopPropagation()
  }
})

// Closes the modal when you click on the background
modal.forEach(modal => {
  modal.onclick = function(){
    closeModal()
  }
})

// Closes the modal when you click the button
buttonCloseModal.forEach(button => {
  button.addEventListener('click', function () {
    closeModal()
  })
})

// Opens the modal when you click the button
buttonBoxOpenModal.forEach(button => {
  button.addEventListener('click', function () {
    const modal = button.nextElementSibling
    const bgColor = button.getAttribute('bg-color')

    modal.classList.add('show')
    modal.style.display = 'grid'
    bgModal.style.backgroundColor = bgColor

    openModal()
  })
})

// Add new class on element
function addNewClass(elementName, newClass) {
  const element = document.querySelectorAll(elementName)

  element.forEach(el => {
    el.classList.add(newClass)
  })
}

// Remove class of element
function removeClass(elementName, newClass) {
  const element = document.querySelectorAll(elementName)

  element.forEach(el => {
    el.classList.remove(newClass)
  })
}

// Close modal
function closeModal() {
  removeClass('.modal', 'show')
  removeClass('.bg-modal', 'show-bg-modal')
  removeClass('.local', 'show-local')
  removeClass('.modal-text p', 'show-text')
  removeClass('.modal-img', 'show-modal-img')
  setTimeout(function () {
    modal.forEach(modal => {
      modal.style.display = 'none'
    })
  }, 1500)
}

// Open modal
function openModal() {
  addNewClass('.bg-modal', 'show-bg-modal')
  addNewClass('.local', 'show-local')
  addNewClass('.modal-text p', 'show-text')
  addNewClass('.modal-img', 'show-modal-img')
}
