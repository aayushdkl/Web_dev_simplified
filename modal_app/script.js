/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

let modal = document.querySelector("#modal")
let open_modal_btn = document.querySelector("#open-modal-btn")
let close_modal_btn = document.querySelector("#close-modal-btn")
let overlay = document.querySelector("#overlay")


// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

open_modal_btn.addEventListener('click',e => {
    modal.className = "open"
    overlay.className = "open"
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay
close_modal_btn.addEventListener('click', e => {
    modal.classList.remove('open')
    overlay.classList.remove('open')

})


// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener('click',e => {
    modal.classList.remove('open')
    overlay.classList.remove('open')
    // overlay.style.backgroundColor = 'blue'
})