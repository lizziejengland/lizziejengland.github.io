const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theImg = document.getElementById('theImg')

var pics1 = new Array ();
var pics2 = new Array ();
var pics3 = new Array ();

pics1[0]= new Image;
pics1[0].src = 'a.png';

pics1[1]= new Image;
pics1[1].src = 'abstract.png';

pics1[2]= new Image;
pics1[2].src = 'alice.png';

pics1[3]= new Image;
pics1[3].src = 'amateur.png';

pics1[4]= new Image;
pics1[4].src = 'away.png';

pics1[5]= new Image;
pics1[5].src = 'background.png';

pics1[6]= new Image;
pics1[6].src = 'bars.png';

pics1[7]= new Image;
pics1[7].src = 'blur.png';

pics1[8]= new Image;
pics1[8].src = 'boob.png';

pics1[9]= new Image;
pics1[9].src = 'book.png';

pics1[10]= new Image;
pics1[10].src = 'boy.png';

pics1[11]= new Image;
pics1[11].src = 'cello.png';

pics1[12]= new Image;
pics1[12].src = 'chain.png';

pics1[13]= new Image;
pics1[13].src = 'faces.png';

pics1[14]= new Image;
pics1[14].src = 'closetoes.png';

pics1[15]= new Image;
pics1[15].src = 'color.png';

pics1[16]= new Image;
pics1[16].src = 'cool.png';

pics1[17]= new Image;
pics1[17].src = 'curve.png';

pics1[18]= new Image;
pics1[18].src = 'cut.png';

pics1[19]= new Image;
pics1[19].src = 'develop.png';

pics1[20]= new Image;
pics1[20].src = 'ditto.png';

pics1[21]= new Image;
pics1[21].src = 'draw.png';

pics1[22]= new Image;
pics1[22].src = 'ear.png';

pics1[23]= new Image;
pics1[23].src = 'enviro.png';

pics1[24]= new Image;
pics1[24].src = 'eye.png';



pics2[0]= new Image;
pics2[0].src = 'farm.png';

pics2[1]= new Image;
pics2[1].src = 'finger.png';

pics2[2]= new Image;
pics2[2].src = 'fingerprint.png';

pics2[3]= new Image;
pics2[3].src = 'french.png';

pics2[4]= new Image;
pics2[4].src = 'front.png';

pics2[5]= new Image;
pics2[5].src = 'geom.png';

pics2[6]= new Image;
pics2[6].src = 'god.png';

pics2[7]= new Image;
pics2[7].src = 'halfcolor.png';

pics2[8]= new Image;
pics2[8].src = 'hand.png';

pics2[9]= new Image;
pics2[9].src = 'handbar.png';

pics2[10]= new Image;
pics2[10].src = 'her.png';

pics2[11]= new Image;
pics2[11].src = 'hook.png';

pics2[12]= new Image;
pics2[12].src = 'idk.png';

pics2[13]= new Image;
pics2[13].src = 'kiss.png';

pics2[14]= new Image;
pics2[14].src = 'lean.png';

pics2[15]= new Image;
pics2[15].src = 'man.png';

pics2[16]= new Image;
pics2[16].src = 'mark.png';

pics2[17]= new Image;
pics2[17].src = 'micro.png';

pics2[18]= new Image;
pics2[18].src = 'money.png';

pics2[19]= new Image;
pics2[19].src = 'monroe.png';

pics2[20]= new Image;
pics2[20].src = 'moreidk.png';

pics2[21]= new Image;
pics2[21].src = 'moreppl.png';

pics2[22]= new Image;
pics2[22].src = 'moresky.png';

pics2[23]= new Image;
pics2[23].src = 'nakedpp.png';

pics2[24]= new Image;
pics2[24].src = 'nment.png';



pics3[0]= new Image;
pics3[0].src = 'note.png';

pics3[1]= new Image;
pics3[1].src = 'old.png';

pics3[2]= new Image;
pics3[2].src = 'piccurve.png';

pics3[3]= new Image;
pics3[3].src = 'place.png';

pics3[4]= new Image;
pics3[4].src = 'planes.png';

pics3[5]= new Image;
pics3[5].src = 'ppl.png';

pics3[6]= new Image;
pics3[6].src = 'queen.png';

pics3[7]= new Image;
pics3[7].src = 'read.png';

pics3[8]= new Image;
pics3[8].src = 'rearview.png';

pics3[9]= new Image;
pics3[9].src = 'school.png';

pics3[10]= new Image;
pics3[10].src = 'scribble.png';

pics3[11]= new Image;
pics3[11].src = 'sign.png';

pics3[12]= new Image;
pics3[12].src = 'skyline.png';

pics3[13]= new Image;
pics3[13].src = 'someone.png';

pics3[14]= new Image;
pics3[14].src = 'street.png';

pics3[15]= new Image;
pics3[15].src = 'thing.png';

pics3[16]= new Image;
pics3[16].src = 'tights.png';

pics3[17]= new Image;
pics3[17].src = 'toeface.png';

pics3[18]= new Image;
pics3[18].src = 'toes.png';

pics3[19]= new Image;
pics3[19].src = 'uhhuh.png';

pics3[20]= new Image;
pics3[20].src = 'wheel.png';

pics3[21]= new Image;
pics3[21].src = 'woman.png';

pics3[22]= new Image;
pics3[22].src = 'words.png';

pics3[23]= new Image;
pics3[23].src = 'yeah.png';

pics3[24]= new Image;
pics3[24].src = 'you.png';



theButton.addEventListener('click', getImages);

function getImages (){
    var rand = pics1[Math.floor(Math.random() * pics1.length)];
    document.getElementById("theImg").src = rand.src;

    var randed = pics2[Math.floor(Math.random() * pics2.length)];
    document.getElementById("theImg1").src = randed.src;

    var rands = pics3[Math.floor(Math.random() * pics3.length)];
    document.getElementById("theImg2").src = rands.src;
}




