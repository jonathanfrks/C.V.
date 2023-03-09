
window.onscroll = function() {
  scrollIndicator();
}

  scrollIndicator = () => {
    const winScroll = document.body.
    scrollTop || document.documentElement.
    scrollTop;

    const height = document.documentElement.
    scrollHeight - document.documentElement.
    clientHeight;

    const scrolled = (winScroll / height)
    *100;

   // console.log(scrolled);
    document.getElementById("progress-bar").style.width = scrolled + "%";

  };

//  progress bar

function img() {
 
  const imgUno = document.getElementById("imgUno");
  const imgDos = document.getElementById("imgDos");

  const cargaImg = (entradas, observador) => {
    // console.log(entradas)
    // console.log(observador)

    entradas.forEach((entrada) => {

      if(entrada.isIntersecting){
          entrada.target.classList.add('visible');
      } else {
          entrada.target.classList.remove('visible');
      }

    });

  }

  const observador = new IntersectionObserver(cargaImg, {

    root: null,
    rootMargin: '0px',
    threshold: 0.5

  });

  observador.observe(imgUno);
  observador.observe(imgDos);
  observador.observe(imgTres);

};

img();

const d = document;

  function scrollSpy(){

  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  
  const cb = (entries) => {
    //console.log("entries", entries);

    entries.forEach((entry) => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
       

        if (entry.isIntersecting) {

            d.querySelector(`a[href="#${id}"]`).classList.add("active");
              
     } else{

            d.querySelector(`a[href="#${id}"]`).classList.remove("active");
           //  d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        }

    });
  };

  const observer = new IntersectionObserver(cb,{

    threshold:[0.5, 0.75],

  });
   // console.log("observer", observer);

  $sections.forEach((el) => observer.observe(el));
};

scrollSpy();



