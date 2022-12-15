//https://youtu.be/C22hQKE_32c for drag and drop tutorial
//https://stackoverflow.com/questions/18581379/how-to-save-the-contents-of-a-div-as-a-image for save button


const theButton = document.querySelector('button');
const aButton = document.getElementById('reset');
console.log(theButton);
let theMain = document.querySelector('main');
let theImg = document.getElementById('theImg');
const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

var pics1 = new Array ();
var backgrounds = new Array();

//array of images for the assets

pics1[0] = new Image;
pics1[0].src = 'assets/1.png';
pics1[1] = new Image;
pics1[1].src = 'assets/2.png';
pics1[2] = new Image;
pics1[2].src = 'assets/3.png';
pics1[3] = new Image;
pics1[3].src = 'assets/4.png';
pics1[4] = new Image;
pics1[4].src = 'assets/5.png';
pics1[5] = new Image;
pics1[5].src = 'assets/6.png';
pics1[6] = new Image;
pics1[6].src = 'assets/7.png';
pics1[7] = new Image;
pics1[7].src = 'assets/8.png';
pics1[8] = new Image;
pics1[8].src = 'assets/9.png';
pics1[9] = new Image;
pics1[9].src = 'assets/10.png';
pics1[10] = new Image;
pics1[10].src = 'assets/11.png';
pics1[11] = new Image;
pics1[11].src = 'assets/12.png';
pics1[12] = new Image;
pics1[12].src = 'assets/13.png';
pics1[13] = new Image;
pics1[13].src = 'assets/14.png';
pics1[14] = new Image;
pics1[14].src = 'assets/15.png';
pics1[15] = new Image;
pics1[15].src = 'assets/16.png';
pics1[16] = new Image;
pics1[16].src = 'assets/17.png';
pics1[17] = new Image;
pics1[17].src = 'assets/18.png';
pics1[18] = new Image;
pics1[18].src = 'assets/19.png';
pics1[19] = new Image;
pics1[19].src = 'assets/20.png';
pics1[20] = new Image;
pics1[20].src = 'assets/21.png';
pics1[21] = new Image;
pics1[21].src = 'assets/22.png';
pics1[22] = new Image;
pics1[22].src = 'assets/23.png';
pics1[23] = new Image;
pics1[23].src = 'assets/24.png';
pics1[24] = new Image;
pics1[24].src = 'assets/25.png';
pics1[25] = new Image;
pics1[25].src = 'assets/26.png';
pics1[26] = new Image;
pics1[26].src = 'assets/27.png';
pics1[27] = new Image;
pics1[27].src = 'assets/28.png';
pics1[28] = new Image;
pics1[28].src = 'assets/29.png';
pics1[29] = new Image;
pics1[29].src = 'assets/30.png';
pics1[30] = new Image;
pics1[30].src = 'assets/31.png';
pics1[31] = new Image;
pics1[31].src = 'assets/32.png';
pics1[32] = new Image;
pics1[32].src = 'assets/33.png';
pics1[33] = new Image;
pics1[33].src = 'assets/34.png';
pics1[34] = new Image;
pics1[34].src = 'assets/35.png';
pics1[35] = new Image;
pics1[35].src = 'assets/36.png';
pics1[36] = new Image;
pics1[36].src = 'assets/37.png';
pics1[37] = new Image;
pics1[37].src = 'assets/38.png';
pics1[38] = new Image;
pics1[38].src = 'assets/39.png';
pics1[39] = new Image;
pics1[39].src = 'assets/40.png';
pics1[40] = new Image;
pics1[40].src = 'assets/41.png';
pics1[41] = new Image;
pics1[41].src = 'assets/42.png';
pics1[42] = new Image;
pics1[42].src = 'assets/43.png';
pics1[43] = new Image;
pics1[43].src = 'assets/44.png';
pics1[44] = new Image;
pics1[44].src = 'assets/45.png';
pics1[45] = new Image;
pics1[45].src = 'assets/46.png';
pics1[46] = new Image;
pics1[46].src = 'assets/47.png';
pics1[47] = new Image;
pics1[47].src = 'assets/48.png';
pics1[48] = new Image;
pics1[48].src = 'assets/49.png';
pics1[49] = new Image;
pics1[49].src = 'assets/50.png';
pics1[50] = new Image;
pics1[50].src = 'assets/51.png';
pics1[51] = new Image;
pics1[51].src = 'assets/52.png';
pics1[52] = new Image;
pics1[52].src = 'assets/53.png';
pics1[53] = new Image;
pics1[53].src = 'assets/54.png';
pics1[54] = new Image;
pics1[54].src = 'assets/55.png';
pics1[55] = new Image;
pics1[55].src = 'assets/56.png';
pics1[56] = new Image;
pics1[56].src = 'assets/57.png';
pics1[57] = new Image;
pics1[57].src = 'assets/58.png';
pics1[58] = new Image;
pics1[58].src = 'assets/59.png';
pics1[59] = new Image;
pics1[59].src = 'assets/60.png';
pics1[60] = new Image;
pics1[60].src = 'assets/61.png';
pics1[61] = new Image;
pics1[61].src = 'assets/62.png';
pics1[62] = new Image;
pics1[62].src = 'assets/63.png';
pics1[63] = new Image;
pics1[63].src = 'assets/64.png';
pics1[64] = new Image;
pics1[64].src = 'assets/65.png';
pics1[65] = new Image;
pics1[65].src = 'assets/66.png';
pics1[66] = new Image;
pics1[66].src = 'assets/67.png';
pics1[67] = new Image;
pics1[67].src = 'assets/68.png';
pics1[68] = new Image;
pics1[68].src = 'assets/69.png';
pics1[69] = new Image;
pics1[69].src = 'assets/70.png';
pics1[70] = new Image;
pics1[70].src = 'assets/71.png';
pics1[71] = new Image;
pics1[71].src = 'assets/72.png';
pics1[72] = new Image;
pics1[72].src = 'assets/73.png';
pics1[73] = new Image;
pics1[73].src = 'assets/74.png';
pics1[74] = new Image;
pics1[74].src = 'assets/75.png';
pics1[75] = new Image;
pics1[75].src = 'assets/76.png';
pics1[76] = new Image;
pics1[76].src = 'assets/77.png';
pics1[77] = new Image;
pics1[77].src = 'assets/78.png';
pics1[78] = new Image;
pics1[78].src = 'assets/79.png';
pics1[79] = new Image;
pics1[79].src = 'assets/80.png';
pics1[80] = new Image;
pics1[80].src = 'assets/81.png';
pics1[81] = new Image;
pics1[81].src = 'assets/82.png';
pics1[82] = new Image;
pics1[82].src = 'assets/83.png';
pics1[83] = new Image;
pics1[83].src = 'assets/84.png';
pics1[84] = new Image;
pics1[84].src = 'assets/85.png';
pics1[85] = new Image;
pics1[85].src = 'assets/86.png';
pics1[86] = new Image;
pics1[86].src = 'assets/87.png';
pics1[87] = new Image;
pics1[87].src = 'assets/88.png';
pics1[88] = new Image;
pics1[88].src = 'assets/89.png';
pics1[89] = new Image;
pics1[89].src = 'assets/90.png';
pics1[90] = new Image;
pics1[90].src = 'assets/91.png';
pics1[91] = new Image;
pics1[91].src = 'assets/92.png';
pics1[92] = new Image;
pics1[92].src = 'assets/93.png';
pics1[93] = new Image;
pics1[93].src = 'assets/94.png';
pics1[94] = new Image;
pics1[94].src = 'assets/95.png';
pics1[95] = new Image;
pics1[95].src = 'assets/96.png';
pics1[96] = new Image;
pics1[96].src = 'assets/97.png';
pics1[97] = new Image;
pics1[97].src = 'assets/98.png';
pics1[98] = new Image;
pics1[98].src = 'assets/99.png';
pics1[99] = new Image;
pics1[99].src = 'assets/100.png';

//array of background images
backgrounds[0] = new Image;
backgrounds[0].src = 'backgrounds/1.jpg';
backgrounds[1] = new Image;
backgrounds[1].src = 'backgrounds/2.jpg';
backgrounds[2] = new Image;
backgrounds[2].src = 'backgrounds/3.jpg';
backgrounds[3] = new Image;
backgrounds[3].src = 'backgrounds/4.jpg';
backgrounds[4] = new Image;
backgrounds[4].src = 'backgrounds/5.jpg';
backgrounds[5] = new Image;
backgrounds[5].src = 'backgrounds/6.jpg';
backgrounds[6] = new Image;
backgrounds[6].src = 'backgrounds/7.jpg';
backgrounds[7] = new Image;
backgrounds[7].src = 'backgrounds/8.jpg';
backgrounds[8] = new Image;
backgrounds[8].src = 'backgrounds/9.jpg';
backgrounds[9] = new Image;
backgrounds[9].src = 'backgrounds/10.jpg';
backgrounds[10] = new Image;
backgrounds[10].src = 'backgrounds/11.jpg';
backgrounds[11] = new Image;
backgrounds[11].src = 'backgrounds/12.jpg';


theButton.addEventListener('click', getImages);

function getImages (){
    //creating a copy of og array 
    var pics2 = pics1.slice()

    //randomly getting a pic from the array and then removing it from the copy so there are no repeats
    var random_num = Math.floor(Math.random() * pics2.length)
    var rand = pics2[random_num];
    document.getElementById("theImg").src = rand.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randed = pics2[random_num];
    document.getElementById("theImg1").src = randed.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randeds = pics2[random_num];
    document.getElementById("theImg2").src = randeds.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randedy = pics2[random_num];
    document.getElementById("theImg3").src = randedy.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var rands = pics2[random_num];
    document.getElementById("theImg4").src = rands.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randed = pics2[random_num];
    document.getElementById("theImg5").src = randed.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randy = pics2[random_num];
    document.getElementById("theImg6").src = randy.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var rander = pics2[random_num];
    document.getElementById("theImg7").src = rander.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randt = pics2[random_num];
    document.getElementById("theImg8").src = randt.src;
    pics2.splice(random_num, 1)

    random_num = Math.floor(Math.random() * pics2.length)
    var randup = pics2[random_num];
    document.getElementById("theImg9").src = randup.src;
    pics2.splice(random_num, 1)

    //trying to randomly change background but it isnt working
    var random_slay = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById("bruh").style.backgroundImage = 'random_slay.src';
  }



//Fill listeners
for (const image of fill){
  image.addEventListener('dragstart', dragStart)
  image.addEventListener('dragend', dragEnd)
}

//loop thru empties and call drag events but dont actually u only have one empty

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragLeave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


//Drag Functions
function dragStart(){
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
  console.log(this)
  
}


function dragEnd(){
  this.className = 'fill'
  console.log('end')
}

function dragOver(e){
  e.preventDefault();
  /*var x = e.clientX; 
  var y = e.clientY; 
  image.style.marginLeft  = x+"px";
  image.style.marginTop  = y+"px";*/
  console.log('over')
  
}


function dragEnter(e){
  e.preventDefault();
  this.className += ' hovered';
  console.log('enter')
}

function dragLeave(){
  this.className = 'empty';
}

function dragDrop(e){
  this.className = 'empty';
  for (const image of fill) {
    if (image.className == 'invisible') {
      //trying to make it so you get to drop the image where your mouse is but not quite working yet
      var x = e.clientX; 
      var y = e.clientY; 
      image.style.marginLeft  = x+"px";
      image.style.marginTop  = y+"px";
      image.style.position = 'absolute';
      this.append(image);
      console.log(this);
    }
    }
  } 

aButton.addEventListener('click', resetImages);

  function resetImages(){
    this.className = 'fill'
    for(const image of fill){
      this.append(image);

    }
  }


