// let chi = viewer.getScene().children;
// for(k in chi){
//   if(chi[k].src.includes("B1F2") && chi[k].src.includes("West")) {
//     releaseMem();
//     B1F2Halls("West");
//   } else if(chi[k].src.includes("B1F2") && chi[k].src.includes("East")) {
//     releaseMem();
//     B1F2Halls("East");
//   }
  
// }

let imageContainer = document.querySelector(".image-container");

let tagler = document.querySelector(".sidemenu");

let containerBaseWidth = imageContainer.offsetWidth;
let containerBaseHeight = imageContainer.offsetHeight;

//Stairs
let stairs = [
    B1F2StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F2StairsWest2.jpg"),
    B1F3StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest.jpg"),
    B1F3StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest2.jpg"),
    B1F4StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest.jpg"),
    B1F4StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest2.jpg"),
    B1F5StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest.jpg"),
    B1F5StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest2.jpg"),
    B1F2Hall1East = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall1East.jpg"),
    B1F2StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F2StairsEast2.jpg"),
    B1F3StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F3StairsEast.jpg"),
    B1F3StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F3StairsEast2.jpg"),
    B1F4StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F4StairsEast.jpg"),
    B1F4StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F4StairsEast2.jpg"),
    B1F5StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F5StairsEast.jpg"),
    B1F5StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F5StairsEast2.jpg"),
  
];
let temp = new PANOLENS.ImagePanorama("imgs/temp.jpg");
//Floor 2 Halls
let B1F2Hall1West = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall1West.jpg");
let B1F2Hall2West = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall2West.jpg");
//Panolens

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  cameraFov: 120,
});

//------------------------//

// let xd;

// for (var key in stairs) {
//   if(stairs[key].src.includes("B1F2")){
//     xd = stairs[key];
//     console.log(xd);
//   }
// }

// console.log(viewer.getScene());

//------------------------//



  // Bulwagan.link( BulwaganEast, new THREE.Vector3( 1500, 100, 600 ) );
  // Bulwagan.link( BulwaganWest, new THREE.Vector3( 1700, 100.27, -600 ) );

  // BulwaganEast.link( B1F2Hall4East, new THREE.Vector3( -400, -900, -1200 ) );
  // BulwaganEast.link( BulwaganWest, new THREE.Vector3( 300, -200, 1200 ) );
  // BulwaganEast.link( Bulwagan, new THREE.Vector3( 1600, -1000.27, -300 ) );
 
  // B1F2Hall4East.link( B1F2Hall3East, new THREE.Vector3( -1500, -500, 1000 ) );
  // B1F2Hall4East.link( BulwaganEast, new THREE.Vector3( 1500, -500.27,-1000 ) );

  // B1F2Hall3East.link( B1F2Hall2East, new THREE.Vector3( -1200, -200, -900 ) );
  // B1F2Hall3East.link( B1F2Hall4East, new THREE.Vector3( 1400, 100.27, 1100 ) );

  // B1F2Hall2East.link( B1F2Hall3East, new THREE.Vector3( -800, -200, -900 ) );
  // B1F2Hall2East.link( B1F2Hall1East, new THREE.Vector3( 900, -100.27, 1100 ) );

  

  
// B1F3HallEast
// B1F3Hall2
// B1F3Hall3
// B1F3Hall4
// B1F3Hall5
// B1F3Hall6
// B1F3MWRoom1
// B1F3PTRoom1
// B1F3PTRoom2

addScene(temp);

tempEast = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
tempEast.position.set( -602, 100, -1014.74 );
tempEast.addEventListener( 'click', function(){
  
  releaseMem();
  B1Stairs("East", "B1F3");

} );

tempWest = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
tempWest.position.set( 302, 100, -1014.74 );
tempWest.addEventListener( 'click', function(){
  
  releaseMem();
  B1Stairs("West", "B1F3");

} );


temp.add( tempEast, tempWest );

// for(i in stairs) {
//   if(stairs[i].src.includes("West")) {
//     console.log(stairs[i]);
//   }
// }


//Building 1

//Panoramas of stairs

function B1Stairs(side, flr){
  
  let stairs = [
    B1F2StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F2StairsWest2.jpg"),
    B1F3StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest.jpg"),
    B1F3StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F3StairsWest2.jpg"),
    B1F4StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest.jpg"),
    B1F4StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F4StairsWest2.jpg"),
    B1F5StairsWest = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest.jpg"),
    B1F5StairsWest2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/West/B1F5StairsWest2.jpg"),
    B1F2StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F2StairsEast2.jpg"),
    B1F3StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F3StairsEast.jpg"),
    B1F3StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F3StairsEast2.jpg"),
    B1F4StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F4StairsEast.jpg"),
    B1F4StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F4StairsEast2.jpg"),
    B1F5StairsEast = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F5StairsEast.jpg"),
    B1F5StairsEast2 = new PANOLENS.ImagePanorama("imgs/Building1/Stairs/East/B1F5StairsEast2.jpg"),
  ];  
//Checks which side the previous panorama was 
  for(i in stairs) {
    if(stairs[i].src.includes(side)) {
      addScene(stairs[i]);
      if(stairs[i].src.includes(flr) && stairs[i].src.includes("2"))  {
        viewer.setPanorama(stairs[i]);
      } 
    }
  }
    
  

//West Stairs Links
  B1F2StairsWest2.link( B1F3StairsWest, new THREE.Vector3( -202.98, 400.27, -1714.74 ) );
  B1F2StairsWest2info = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F2StairsWest2info.position.set( 1802, -1000, 614.74 );
  B1F2StairsWest2info.addEventListener( 'click', function(){
    
    releaseMem();
    B1F2Halls("West");

  } );

  B1F2StairsWest2.add( B1F2StairsWest2info );

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

  B1F3StairsWest2info = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F3StairsWest2info.position.set( -502, -500, 1014.74 );
  B1F3StairsWest2info.addEventListener( 'click', function(){
    
    releaseMem();
    B1F3Halls("West");

  } );

  B1F3StairsWest2.add( B1F3StairsWest2info );

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
  B1F5StairsWest2.link( B1F5StairsWest2, new THREE.Vector3( 1500, 300, -100 ) );
  B1F5StairsWest2.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( 500, 0, -500 ) );
    } );
  
//East Stairs Links

  B1F2StairsEast2.link( B1F3StairsEast, new THREE.Vector3( 2002.98, 700.27, 154.74 ) );
  B1F2StairsEast2info = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F2StairsEast2info.position.set( -502, -600, -1514.74 );
  B1F2StairsEast2info.addEventListener( 'click', function(){
    
    releaseMem();
    B1F2Halls("East");

  } );

  B1F2StairsEast2.add( B1F2StairsEast2info );

  B1F3StairsEast.link( B1F2StairsEast2, new THREE.Vector3( 2002.98, -900.27, -400 ) );
  B1F3StairsEast.link( B1F3StairsEast2, new THREE.Vector3( 1900, 500.27, 300 ) );
  B1F3StairsEast.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( 1200, 0, 500 ) );
    } );

  B1F3StairsEast2.link( B1F3StairsEast, new THREE.Vector3( 1400, -700, 1200 ) );
  B1F3StairsEast2.link( B1F4StairsEast, new THREE.Vector3( 800, 500, 1500) );
  B1F3StairsEast2.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( 700, 0, 500 ) );
    } );

  B1F3StairsEast2info = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F3StairsEast2info.position.set( 1002, -500, -550 );
  B1F3StairsEast2info.addEventListener( 'click', function(){
    
    releaseMem();
    B1F3Halls("East");

  } );

  B1F3StairsEast2.add( B1F3StairsEast2info );
  
  B1F4StairsEast.link( B1F3StairsEast2, new THREE.Vector3( 350, -750, -1500 ) );
  B1F4StairsEast.link( B1F4StairsEast2, new THREE.Vector3( 1050, 400, -1500 ) );
  B1F4StairsEast.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( 5, 0, -5 ) );
    } );

  B1F4StairsEast2.link( B1F4StairsEast, new THREE.Vector3( -1500, -1000, 300 ) );
  B1F4StairsEast2.link( B1F5StairsEast, new THREE.Vector3( -1200, 300, -500 ) );
  B1F4StairsEast2.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( -600, 0, -500 ) );
    } );

  B1F5StairsEast.link( B1F4StairsEast2, new THREE.Vector3( -1400, -700, 600 ) );
  B1F5StairsEast.link( B1F5StairsEast2, new THREE.Vector3( -1200, 300, 50 ) );
  B1F5StairsEast.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( -13, 0, 0 ) );
    } );

  B1F5StairsEast2.link( B1F5StairsEast, new THREE.Vector3( -1000, -500, -700 ) );
  B1F5StairsEast2.link( B1F5StairsEast2, new THREE.Vector3( -1000, -600, 1000 ) );
  B1F5StairsEast2.addEventListener( 'enter-fade-complete', function(){
      viewer.tweenControlCenter( new THREE.Vector3( -2.9, 0, 1.1 ) );
    } );

}

//Panoramas of floor 2

function B1F2Halls(side){

  let B1F2 = [
    B1F2Hall1West = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall1West.jpg"),
    B1F2Hall2West = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall2West.jpg"),
    B1F2Hall3West = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall3West.jpg"),
    BulwaganWest = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/BulwaganWest1.jpg"),
    Bulwagan = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/Bulwagan2.jpg"),
    BulwaganEast = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/BulwaganEast1.jpg"),
    B1F2Hall1East = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall1East.jpg"),
    B1F2Hall2East = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall2East.jpg"),
    B1F2Hall3East = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall3East.jpg"),
    B1F2Hall4East = new PANOLENS.ImagePanorama("imgs/Building1/Floor2/B1F2Hall4East.jpg"),
  ];
  
  addScene(B1F2);

  if(side.includes("West")) {
    viewer.setPanorama(B1F2Hall1West);
  } else if(side.includes("East")) {
    viewer.setPanorama(B1F2Hall1East);
  }
  
  B1F2Hall1West.link( B1F2Hall2West, new THREE.Vector3( -100, -900, -1200 ) );
  B1F2Hall1Westinfo = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F2Hall1Westinfo.position.set( 100, -1000, 1200 );
  B1F2Hall1Westinfo.addEventListener( 'click', function(){

    releaseMem();
    B1Stairs("West", "B1F2");

  } );

  B1F2Hall1West.add( B1F2Hall1Westinfo );

  B1F2Hall2West.link( B1F2Hall1West, new THREE.Vector3( 800, -1000.27, 1200 ) );
  B1F2Hall2West.link( B1F2Hall3West, new THREE.Vector3( -800, -900, -1200 ) );
  
  B1F2Hall3West.link( B1F2Hall2West, new THREE.Vector3( -2000, -900, 300 ) );
  B1F2Hall3West.link( BulwaganWest, new THREE.Vector3( 2000, -1000.27, -300 ) );
  
  BulwaganWest.link( B1F2Hall3West, new THREE.Vector3( 1000, -500, 900 ) );
  BulwaganWest.link( BulwaganEast, new THREE.Vector3( -1000, -100, -900 ) );
  BulwaganWest.link( Bulwagan, new THREE.Vector3( 400, 100.27, -900 ) );

  Bulwagan.link( BulwaganEast, new THREE.Vector3( 1500, 100, 600 ) );
  Bulwagan.link( BulwaganWest, new THREE.Vector3( 1700, 100.27, -600 ) );

  BulwaganEast.link( B1F2Hall4East, new THREE.Vector3( -400, -900, -1200 ) );
  BulwaganEast.link( BulwaganWest, new THREE.Vector3( 300, -200, 1200 ) );
  BulwaganEast.link( Bulwagan, new THREE.Vector3( 1600, -1000.27, -300 ) );
 
  B1F2Hall4East.link( B1F2Hall3East, new THREE.Vector3( -1500, -500, 1000 ) );
  B1F2Hall4East.link( BulwaganEast, new THREE.Vector3( 1500, -500.27,-1000 ) );

  B1F2Hall3East.link( B1F2Hall2East, new THREE.Vector3( -1200, -200, -900 ) );
  B1F2Hall3East.link( B1F2Hall4East, new THREE.Vector3( 1400, 100.27, 1100 ) );

  B1F2Hall2East.link( B1F2Hall3East, new THREE.Vector3( -800, -200, -900 ) );
  B1F2Hall2East.link( B1F2Hall1East, new THREE.Vector3( 900, -100.27, 1100 ) );

  B1F2Hall1East.link( B1F2Hall2East, new THREE.Vector3( 200, -900, -1000 ) );
  B1F2Hall1Eastinfo = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
  B1F2Hall1Eastinfo.position.set( 100, -1000, 1200 );
  B1F2Hall1Eastinfo.addEventListener( 'click', function(){

    releaseMem();
    B1Stairs("East", "B1F2");

  } );

  B1F2Hall1East.add( B1F2Hall1Eastinfo );

}

//Floor 3


//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING
//HALL 4 MISSING

function B1F3Halls(side) {
  let B1F3Halls = [
    B1F3HallWest = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3HallWest.jpg"),
    B1F3HallEast = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3HallEast.jpg"),
    B1F3Hall2 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3Hall2.jpg"),
    B1F3Hall3 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3Hall3.jpg"),
    B1F3Hall4 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3Hall4.jpg"),
    B1F3Hall5 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3Hall5.jpg"),
    B1F3Hall6 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3Hall6.jpg"),
    B1F3MWRoom1 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3MWRoom1.jpg"),
    B1F3PTRoom1 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3PTRoom(1st half).jpg"),
    B1F3PTRoom2 = new PANOLENS.ImagePanorama("imgs/Building1/Floor3/B1F3PTRoom(2nd half).jpg"),
  ];
  
  addScene(B1F3Halls);

  if(side.includes("West")) {
    viewer.setPanorama(B1F3HallWest);
  } else if(side.includes("East")) {
    viewer.setPanorama(B1F3HallEast);
  }
  
    B1F3HallWest.link( B1F3Hall2, new THREE.Vector3( -1800, -500, -500 ) );
    B1F3HallWest.link( B1F3PTRoom1, new THREE.Vector3( 400, -600, 500 ) );
    B1F3HallWestinfo = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
    B1F3HallWestinfo.position.set( 1800, -500, 500 );
    B1F3HallWestinfo.addEventListener( 'click', function(){
  
      releaseMem();
      B1Stairs("West", "B1F3");
  
    } );
  
    B1F3HallWest.add( B1F3HallWestinfo );
  
    B1F3PTRoom1.link( B1F3HallWest, new THREE.Vector3( 250, -300, 900 ) );
    B1F3PTRoom1.link( B1F3PTRoom2, new THREE.Vector3( 700, -00, -300 ) );
  
    B1F3PTRoom2.link( B1F3Hall3, new THREE.Vector3( -50, -300, 900 ) );
    B1F3PTRoom2.link( B1F3PTRoom1, new THREE.Vector3( -1000, -300, -300 ) );
  
    B1F3Hall2.link( B1F3HallWest, new THREE.Vector3( -550, -300, 600 ) );
    B1F3Hall2.link( B1F3Hall3, new THREE.Vector3( 550, -300, -600 ) );
    
    B1F3Hall3.link( B1F3Hall2, new THREE.Vector3( -250, -300, 700 ) );
    B1F3Hall3.link( B1F3Hall4, new THREE.Vector3( 250, -300, -700 ) );
    B1F3Hall3.link( B1F3PTRoom2, new THREE.Vector3( -250, -500, -700 ) );
  
    B1F3Hall4.link( B1F3Hall3, new THREE.Vector3( -750, -350, 250 ) );
    B1F3Hall4.link( B1F3Hall5, new THREE.Vector3( 750, -350, -250 ) );
  
    B1F3Hall5.link( B1F3Hall4, new THREE.Vector3( 620, -550, -550 ) );
    B1F3Hall5.link( B1F3Hall6, new THREE.Vector3( -620, -550, 550 ) );
  
    B1F3Hall6.link( B1F3Hall5, new THREE.Vector3( -670, -350, -650 ) );
    B1F3Hall6.link( B1F3HallEast, new THREE.Vector3( 720, -350, 650 ) );
  
    B1F3HallEast.link( B1F3Hall6, new THREE.Vector3( 520, -400, 1100 ) );
    B1F3HallEastinfo = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
    B1F3HallEastinfo.position.set( -720, -200, -1400  );
    B1F3HallEastinfo.addEventListener( 'click', function(){
  
      releaseMem();
      B1Stairs("East", "B1F3");
  
    } );
  
    B1F3HallEast.add( B1F3HallEastinfo );

}

//Functions

function changeContainerSize ( width ) {
    viewer.container.style.width = width + "px";
    // viewer.container.style.height = height + "px";
    viewer.onWindowResize( width, containerBaseHeight );
}

//FIXES MEMORY LEAKAGE

function releaseMem(){

  viewer.dispose();
  viewer.clearAllCache();

}

function addScene(set){
  if(Array.isArray(set)) {
    for(i in set) {
      viewer.add(set[i]);
    }
  } else {
    viewer.add(set);
  }
  
}

// Toggler Code

document.querySelector( '#togglerOpen' ).addEventListener( 'click', function(){

    if(tagler.offsetWidth == "0") {
        console.log("SARA");
    } else {
        console.log("BUKAS");
    }

    let newWidth = containerBaseWidth - document.getElementById("togglerOpen").offsetWidth;
    // let newHeight = containerBaseHeight - document.getElementById("togglerOpen").offsetHeight;
    changeContainerSize( newWidth );

}, false );


document.querySelector( '#togglerClose' ).addEventListener( 'click', function(){

    let newWidth = containerBaseWidth + document.getElementById("togglerClose").offsetWidth;
    // let newHeight = containerBaseHeight + document.getElementById("togglerClose").offsetHeight;
    changeContainerSize( newWidth );

}, false );
