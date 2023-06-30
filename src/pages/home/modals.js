

let closeCreateModal = document.querySelectorAll("#close-create")
let createModal = document.getElementById("create-modal")
closeCreateModal.forEach((elem) => {
  elem.addEventListener('click', () => {
    createModal.classList.add("hidden")
  })
})

let closeEditModal = document.querySelectorAll("#close-edit")
let editModal = document.getElementById("edit-modal")
closeEditModal.forEach((elem) => {
  elem.addEventListener('click', () => {
    editModal.classList.add("hidden")
  })
})

let closeAccessModal = document.getElementById("close-access")
let accessModal = document.getElementById("access-modal")
closeAccessModal.addEventListener('click', () => {
  accessModal.classList.add("hidden")
})

let closeDeleteModal = document.querySelectorAll("#close-delete")
let deleteModal = document.getElementById("delete-modal")
closeDeleteModal.forEach((elem) => {
  elem.addEventListener('click', () => {
    deleteModal.classList.add("hidden")
  })
})