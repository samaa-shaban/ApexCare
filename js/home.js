//  !====================header section starts ========================================== 
let menu= document.querySelector('#menu-btn');
let nav= document.querySelector('.nav');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');

}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

//  !====================header section ends ========================================== 
// ^ ====================== icons starts ============================================== //

document.querySelectorAll('.counter').forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target')+'0';
      const current = +counter.innerText;
      const increment = target /100; // Adjust this value for speed control
  
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter); // Smooth animation
      } else {
        counter.innerText = target; // Ensure the final value is exact
      }
    };
  
    updateCounter();
  });
  

// ^ ====================== icons ends ============================================== //
// ^ ====================== footer starts ============================================== //

// ^ ====================== footer ends ============================================== //
