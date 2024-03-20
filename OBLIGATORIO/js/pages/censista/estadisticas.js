function initEstadisticas () {
    changeVisibility("estadisticSection", "block");

    document.querySelector('#btnBackToMenu3').addEventListener('click' , backToMenu3)
}


function backToMenu3() {
    destroyEstadisticSection();
    initMenuSection()
  
  }
  
  function destroyEstadisticSection() {
    changeVisibility("estadisticSection", 'none');
  }