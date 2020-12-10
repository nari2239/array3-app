function colorChange2 () {
  const modalSubmit = document.querySelector('.modal-submit');
    modalSubmit.addEventListener('mouseover', () => {
      modalSubmit.setAttribute("style", "background-color: #EEEEEE;");
    });
    modalSubmit.addEventListener('mouseout', () => {
      modalSubmit.removeAttribute("style", "background-color: #EEEEEE;")
    });
  }
  
  window.addEventListener('load', colorChange2)