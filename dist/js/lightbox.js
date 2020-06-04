const card = document.querySelectorAll('.card');
const lightbox = document.createElement('div');

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

card.forEach(currentItem => {
    console.log(currentItem);
    
    currentItem.addEventListener('click',e =>{
        console.log('working');
        
        lightbox.classList.add('active');
        
    })
});