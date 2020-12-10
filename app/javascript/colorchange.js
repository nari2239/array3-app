function colorChange () {
  const cancelBtn = document.querySelector('.cancel-btn');
  cancelBtn.addEventListener('mouseover', () => {
    cancelBtn.setAttribute("style", "background-color: #EEEEEE;");
  });
  cancelBtn.addEventListener('mouseout', () => {
    cancelBtn.removeAttribute("style", "background-color: #EEEEEE;")
  });
}

window.addEventListener('load', colorChange);