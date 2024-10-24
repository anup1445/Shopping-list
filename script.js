const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();
    const newItem = itemInput.value;

    // validate input
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    //create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');

    
    li.appendChild(button);

    itemList.appendChild(li);
    console.log(itemList);
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
    
}
//Event listeners
itemForm.addEventListener('submit',addItem);























// //Event delegation

// const list = document.querySelector('ul');

// list.addEventListener('click',(e)=> {
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });
// list.addEventListener('mouseover',(e)=> {
//     if(e.target.tagName === 'LI'){
//         e.target.style.color = 'red';
//     }
// });

//  //Event bubbling 

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// div.addEventListener('click',(e)=> {
//     alert('Div was clicked');
//     //inn order to stop event bubbling from happening for a particular element use stop propagation
//     e.stopPropagation();

// })
// button.addEventListener('click',()=> {
//     alert('Button was clicked');
// });

// form.addEventListener('click',()=> {
//     alert('form was clicked');

// });

// document.body.addEventListener('click',()=> {
//     alert('Body was clicked');
// })


//FORM SUBMISSION
// const form = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();

//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;
    
//     if(item === '' || priority === '0'){
//         alert('Please fill all the fields');
//         return; 
//     }

//     console.log(item,priority);
// }

// //Method 2- using the FormData object
// function onSubmit2(e) {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const item = formData.get('item');
//     console.log(item);
//     const priority = formData.get('priority');
//     console.log(priority);
//     console.log(formData);
// }
// form.addEventListener('submit',onSubmit2);

// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');


// //Event handlers
// function onInput(e){
//     heading.textContent = e.target.value;

// }

// function onCheck(e) {
//     heading.textContent = e.target.checked;
// }
// itemInput.addEventListener('input',onInput);
// checkbox.addEventListener('input', onCheck);

// const itemInput = document.getElementById('item-input');


// const onKeyPress = (e) => {
//     console.log('on keypress');
// }
// itemInput.addEventListener('keypress',onKeyPress);


// const logo = document.querySelector('img');

// const onclick = () => {
//     console.log("click event");
// }

// const onDoubleclick = () => {
//     if(document.body.style.backgroundColor != 'purple'){
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.color = 'white';
//     }else{
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// };

// const onRightClick = () => {
//     console.log('right click event ');
// };

// const onMouseDown = () => {
//     console.log('on mouse down');
// }
// //event listeners
// logo.addEventListener('click',onclick)
// logo.addEventListener('dblclick',onDoubleclick);
// logo.addEventListener('contextmenu',onRightClick);
// logo.addEventListener('mousedown',onMouseDown);


//remove button and remove any child from the document

// function clearButton(){
//     const clearBtn = document.querySelector("#clear");
//     clearBtn.remove();
// }

// clearButton();


// //remove any child 
// function removeChild(childIndex){
//     const lis = document.querySelectorAll('li');
//     lis.forEach((item,index)=>{
//         if(index == childIndex-1){
//             item.remove();

//         }else if(childIndex -1 > lis.length){
//             alert("Not any children nodes left to remove");

//         }
//     })
// }

// removeChild(3);


// function replaceAllItems(){
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item,index)=> {
//         let element = '';

//         switch(index){
//             case 0:
//                 element = 'first';
//                 break;
//             case 1:
//                 element = 'second';
//                 break;
//             case 2:
//                 element = 'third';
//                 break;
//             case 3:
//                 element = 'fourth';
//                 break;
//             default:
//                 element = 'additional element added';
//                 break;
//         }

//         item.textContent = `Replace ${element}`;
//     });
// }

// replaceAllItems();

// function replaceNthItem(newEle, n){
//     const nthChild = document.querySelector(`li:nth-child(${n})`);
    
//     const li = document.createElement('li');
//     li.textContent = `${newEle}`;

//     nthChild.replaceWith(li);
// }


// replaceNthItem('hello',4);

// function replaceFirst(){
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'replaced with first';

//     firstItem.replaceWith(li);
// }

// replaceFirst();



// function insertAfter(newEl, existingEl){
//     existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
    
// }

// const li = document.createElement('li');

// li.textContent = 'inset after given element';


// const firstItem = document.querySelector('li:first-child');
// console.log(firstItem);

// insertAfter(li,firstItem);




//clean and performant way

// function createNewItem(item){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';

//     button.appendChild(icon);

//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }

// createNewItem('Cheese');
// createNewItem('Sauce');
















// function createListItem(item){
//     const li = document.createElement('li');

//     li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;

//     document.querySelector('.items').appendChild(li);
// }

// createListItem('Eggs');

