const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if(currentActive > 1) prev.disabled = false
  if (currentActive > steps.length-1){
    currentActive = steps.length;
    next.disabled = true;
} 
update()
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive === 1) {
    currentActive = 1;
    prev.disabled = true;
  }
  if(currentActive < steps.length) next.disabled = false

  update()

});


const update = ()=>{
    steps.forEach((step,index)=>{
        if(index<currentActive){
            step.classList.add("active");
        }
        else{
            step.classList.remove('active')
        }
    })
    console.log(progress.style.width);
    
    progress.style.width = `${(currentActive-1)/(steps.length-1)*100}%`
}

