var toggleButton = document.getElementById('toggleButton');
var vtheader = document.querySelector('.Vtheader');
var titleBar = document.getElementById('titleBar');
var sceneList = document.getElementById("sceneList")

toggleButton.addEventListener('click', function() {
    
    vtheader.style.top = '0px';
    toggleButton.style.opacity = 0;

});

titleBar.addEventListener('click', function() {

    vtheader.style.top = '-40px';
    
    if(sceneList.classList.contains("enabled")) {
        toggleSceneList();
    }

    toggleButton.style.opacity = 1;

});
