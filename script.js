// CREATE NEW ITEM
const modal = document.querySelector('.modal')
const inputModal = document.getElementById('input-modal');
const buttonModal = document.getElementById('button-modal');

buttonModal.addEventListener('click', () => {
    const inputModalValue = inputModal.value;

    if(inputModalValue === ""){
        modal.classList.remove('active')
        errorMessage();
        return
    }

    const dropzoneItems = document.querySelector('.dropzones-items-main');

    const dropzonesItemsItem = document.createElement('div');
    dropzonesItemsItem.classList.add('dropzones-items__item');
    dropzonesItemsItem.draggable = "true";

    const dropzonesitemsItemP = document.createElement('p');
    dropzonesitemsItemP.textContent = inputModalValue;

    const dropzonesitemsItemSpan = document.createElement('span');
    const dropzonesitemsItemI = document.createElement('i');
    dropzonesitemsItemI.classList.add('bx', 'bxs-trash', 'removeItems');

    dropzonesitemsItemSpan.appendChild(dropzonesitemsItemI);

    dropzonesItemsItem.appendChild(dropzonesitemsItemP);
    dropzonesItemsItem.appendChild(dropzonesitemsItemSpan)

    dropzoneItems.appendChild(dropzonesItemsItem);
    
    modal.classList.remove('active');
    clearInput(inputModal)

    dropzonesItemsItem.addEventListener('dragstart', dragstart);
    dropzonesItemsItem.addEventListener('dragend', dragend);

    dropzonesitemsItemI.addEventListener('click', () => {
        dropzonesItemsItem.remove();
    });
})

function dragstart(){
    let dropzones = document.querySelectorAll('.dropzones-items');

    this.classList.add('dragging');
    dropzones.forEach(e => e.classList.add('fieldDragging'))
}

function dragend(){
    let dropzones = document.querySelectorAll('.dropzones-items');
    
    this.classList.remove('dragging');
    dropzones.forEach(e => e.classList.remove('fieldDragging'))
}

// CREATE NEW DROPZONE
const inputFormzone = document.getElementById('input-formzone')
const buttonFormzone = document.getElementById('button-formzone');

buttonFormzone.addEventListener('click', () => {
    const inputValue = inputFormzone.value;

    if(inputValue === ""){
        errorMessage();
        return
    }

    const container = document.querySelector('.container');

    const dropzones = document.createElement('div');
    dropzones.classList.add('dropzones');

    const dropzonesHeader = document.createElement('div');
    dropzonesHeader.classList.add('dropzones-header');

    const dzHeaderTitle = document.createElement('h3');
    dzHeaderTitle.textContent = inputValue;

    const dzHeaderDelete = document.createElement('h3');
    const dzHeaderDeleteI = document.createElement('i');
    dzHeaderDeleteI.classList.add('bx', 'bxs-trash', 'removeField');
    
    dzHeaderDelete.appendChild(dzHeaderDeleteI);

    dropzonesHeader.appendChild(dzHeaderTitle);
    dropzonesHeader.appendChild(dzHeaderDelete);
    
    const dropzonesItems = document.createElement('div');
    dropzonesItems.classList.add('dropzones-items');

    dropzones.appendChild(dropzonesHeader);
    dropzones.appendChild(dropzonesItems);
    container.appendChild(dropzones);

    clearInput(inputFormzone)

    dropzonesItems.addEventListener('dragover', dragover);

    dzHeaderDeleteI.addEventListener('click', () => {
        dropzones.remove();
    })
})

const zoneItems = document.querySelectorAll('.dropzones-items');

zoneItems.forEach(e => {
    e.addEventListener('dragover', dragover);
})

function dragover(){
    let isDragging = document.querySelector('.dragging');

    this.appendChild(isDragging);
}

function clearInput(item){
    item.value = "";
}

// MODAL
const closeModal = document.getElementById('closeModal')
const openModal = document.getElementById('openModal');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
})
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
})

// ERROR
const closeError = document.getElementById('closeError');
const error = document.querySelector('.error');

function errorMessage(){
    error.style.display = "flex";
}

closeError.addEventListener('click', () => {
    error.style.display = "none";
})