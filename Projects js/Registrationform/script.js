const form=document.querySelector('.form')
form.addEventListener('submit',function(e) {
    e.preventDefault();
const name=document.querySelector('.name').value;
const age=document.querySelector('#age');
const dob=document.querySelector('#dob');
const contact=document.querySelector('#contact');
const email=document.querySelector('.email')
const submit=document.querySelector('#sub')
const result=document.querySelector('.result')
    result.innerHTML=`Thank you for registration ${name}`;
})