const button = document.querySelector('button')
const popupWrapper = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close')
const popup = document.querySelector('.popup')

button.addEventListener('click',()=>{
    popupWrapper.style.display = 'block';
})


popupClose.addEventListener('click',()=>{
    popupWrapper.style.display = "none"
})

popupWrapper.addEventListener('click',(event)=>{
    console.log(event.target);
    
    if(event.target == popupWrapper && !popup.contains(event.target)){
        popupWrapper.style.display= 'none'
    }
    // popupWrapper.style.display = "none"
})