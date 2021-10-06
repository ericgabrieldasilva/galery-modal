let buttonCloseModal = document.querySelectorAll('.btn-close')
const bgModal = document.querySelector('.bg-modal')
let modal = document.querySelectorAll('.modal')
let buttonBoxOpenModal = document.querySelectorAll('.box-single')

buttonCloseModal.forEach(button => {
  button.addEventListener('click', function () {
    removeClass('.modal', 'show')

    removeClass('.bg-modal', 'show-bg-modal')

    removeClass('.local', 'show-local')

    removeClass('.modal-text p', 'show-text')

    removeClass('.modal-img', 'show-modal-img')

    setTimeout(function(){
      modal.forEach(modal => {
        modal.style.display = 'none'
      })
    }, 1500);

  })
})

buttonBoxOpenModal.forEach(button => {
  button.addEventListener('click', function () {
    let modal = button.nextElementSibling
    let bgColor = button.getAttribute('bg-color')

    modal.classList.add('show')
    modal.style.display = 'grid'

    addNewClass('.bg-modal', 'show-bg-modal')

    addNewClass('.local', 'show-local')

    addNewClass('.modal-text p', 'show-text')

    addNewClass('.modal-img', 'show-modal-img')
    
    bgModal.style.backgroundColor = bgColor
  })
})

function addNewClass(elementName, newClass){
  let element = document.querySelectorAll(elementName)

  element.forEach(el => {
    el.classList.add(newClass)
  });

}

function removeClass(elementName, newClass){
  let element = document.querySelectorAll(elementName)

  element.forEach(el => {
    el.classList.remove(newClass)
  });

}
