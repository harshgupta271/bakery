function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }

  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this value to change the trigger point
  });

  // Select all the scroll items
  const scrollItems = document.querySelectorAll('.card');

  // Observe each scroll item
  scrollItems.forEach(item => {
    observer.observe(item);
  });
  //close navbar
  function c(){
    const z= document.getElementById('hello');
    const d=document.getElementById('navbarNav');
    z.classList.add('collapsed')
    z.setAttribute('aria-expanded','false')
    d.classList.remove('show')
};
//onclick
const h=document.getElementById('end');
document.addEventListener('click',(e)=>{
    if(!h.contains(e.target)){
        c();
    }
    });
   //onscroll 
document.onscroll=function(){
    c();
};
