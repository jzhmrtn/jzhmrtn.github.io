let B1F2StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F2StairsWest2.jpg");
let B1F3StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest.jpg");
let B1F3StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest2.jpg");
let B1F4StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest.jpg");
let B1F4StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest2.jpg");
let B1F5StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest.jpg");
let B1F5StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest2.jpg");


let imageContainer = document.querySelector(".image-container");

let tagler = document.querySelector(".sidemenu");

let containerBaseWidth = imageContainer.offsetWidth;
let containerBaseHeight = imageContainer.offsetHeight;

//Panolens

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  cameraFov: 120,
});

viewer.add( B1F2StairsWest2, B1F3StairsWest, B1F3StairsWest2, B1F4StairsWest, B1F4StairsWest2, B1F5StairsWest, B1F5StairsWest2, );

//Linking Panoramas

B1F2StairsWest2.link( B1F3StairsWest, new THREE.Vector3( -202.98, 400.27, -1714.74 ) );
B1F2StairsWest2.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 200, 0, -1000 ) );
  } );

B1F3StairsWest.link( B1F2StairsWest2, new THREE.Vector3( 1802.98, -1200.27, 1000 ) );
B1F3StairsWest.link( B1F3StairsWest2, new THREE.Vector3( 1900, 400.27, 300 ) );
B1F3StairsWest.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 1200, 0, 500 ) );
  } );

B1F3StairsWest2.link( B1F3StairsWest, new THREE.Vector3( 1400, -700, 1200 ) );
B1F3StairsWest2.link( B1F4StairsWest, new THREE.Vector3( 1300, 400, 500 ) );
B1F3StairsWest2.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 700, 0, 500 ) );
  } );

B1F4StairsWest.link( B1F3StairsWest2, new THREE.Vector3( 1500, -800, 100 ) );
B1F4StairsWest.link( B1F4StairsWest2, new THREE.Vector3( 1700, 400, -500 ) );
B1F4StairsWest.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 500, 0, 0 ) );
  } );

B1F4StairsWest2.link( B1F4StairsWest, new THREE.Vector3( -800, -400, -1000 ) );
B1F4StairsWest2.link( B1F5StairsWest, new THREE.Vector3( -1000, 300, -500 ) );
B1F4StairsWest2.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( -600, 0, -500 ) );
  } );

B1F5StairsWest.link( B1F4StairsWest2, new THREE.Vector3( 2000, -1000, 550 ) );
B1F5StairsWest.link( B1F5StairsWest2, new THREE.Vector3( 1500, 300, -100 ) );
B1F5StairsWest.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 550, 0, 0 ) );
  } );

B1F5StairsWest2.link( B1F5StairsWest, new THREE.Vector3( 500, -500, -700 ) );
// B1F5StairsWest2.link( B1F5StairsWest2, new THREE.Vector3( 1500, 300, -100 ) );
B1F5StairsWest2.addEventListener( 'enter-fade-complete', function(){
    viewer.tweenControlCenter( new THREE.Vector3( 500, 0, -500 ) );
  } );

//Functions

function changeContainerSize ( width ) {
    viewer.container.style.width = width + "px";
    // viewer.container.style.height = height + "px";
    viewer.onWindowResize( width, containerBaseHeight );
}

// Toggler Code

document.querySelector( '#togglerOpen' ).addEventListener( 'click', function(){

    if(tagler.offsetWidth == "0") {
        console.log("SARA");
    } else {
        console.log("BUKAS");
    }

    var newWidth = containerBaseWidth - document.getElementById("togglerOpen").offsetWidth;
    // var newHeight = containerBaseHeight - document.getElementById("togglerOpen").offsetHeight;
    changeContainerSize( newWidth );

}, false );


document.querySelector( '#togglerClose' ).addEventListener( 'click', function(){

    var newWidth = containerBaseWidth + document.getElementById("togglerClose").offsetWidth;
    // var newHeight = containerBaseHeight + document.getElementById("togglerClose").offsetHeight;
    changeContainerSize( newWidth );

}, false );
