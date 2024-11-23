/*
  DOM - document object model
  the document in Window is what makes up the document object model.
*/
//parent object of the browser
console.log(window);

/*
  part of Window
  below window, can do anything in Window
  store stuff in browser is part of Window object
*/
//window.alert(1);


// Single element 
const form = document.getElementById('my-form');
// select other things than id like classes, tags, anything
// like jquery for single element
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//console.log(`${form.tagName}`)


// Multiple element

// returns a NodeList similar to array. can run array methods on it 
//.item any type item.
console.log(document.querySelectorAll('.item'));
// not .item because its going to be a class no matter what
// query selector all you can put in ID, class, tag, anything so .item

// dont use getElements. id is ok
// returns an HTML collection
// no array methods, manual convert to array
// console.log(getElementsByClassName('item'));
// console.log(getElementsByTagName('li'));


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


/*
  Manipulating the DOM changing things in the DOM.
  "DOM meaning changing the User Interface"
*/
const ul = document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ='Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML='<h1>Hello</h1>'


const btn = document.querySelector('.btn')
btn.style.background = 'red';


btn.addEventListener('click', (e) => {
  // prevent default behavior of clicking fast
  // prevent form from submitting with submit
 // e.preventDefault();
  console.log('click');
  // log event handler
  console.log(e);
  // gives target element "submit button"
  console.log(e.target);
  console.log(e.target.className) 


  //grab id of myform set to darker grey
  document.querySelector('#my-form').style.background = '#ccc'
  document.querySelector('body').classList.add('.bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello World</h1>'
});

 

//hover over button it changes
btn.addEventListener('mouseover', (e) => {});

//hover first then when exit the event fires
btn.addEventListener('mouseout', (e) => {});


/*
My Form
*/
// class . others ids #, element tag nothing <body>
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log("101");
  console.log(nameInput.value);

  if(nameInput.value === '' || emailInput.value === '')
  {
    // alert('Please enter fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(()=> msg.remove(), 3000);
  } else {  
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    console.log('success');
  }
}
