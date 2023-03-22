const btnoptions = document.querySelector('.btnOption');
// btnoptions.innerHTML = 'Rent the secret';
console.log(btnoptions);

const create=()=>{
    const options = document.getElementsByClassName('signBtn');
    options.style.backgroundColor = 'white';
    options.style.color = 'black';
}


btnoptions.addEventListener('click',create);