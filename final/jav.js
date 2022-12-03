const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theImg = document.getElementById('theImg')

var pics1 = new Array ();
var pics2 = new Array ();
var pics3 = new Array ();
var pics4 = new Array ();
var pics5 = new Array ();
var pics6 = new Array ();
var pics7 = new Array ();
var pics8 = new Array ();
var pics9 = new Array ();
var pics10 = new Array ();

for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics1[num]= new Image;
    var str = num.toString();
    pics1[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics2[num]= new Image;
    var str = num.toString();
    pics2[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics3[num]= new Image;
    var str = num.toString();
    pics3[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics4[num]= new Image;
    var str = num.toString();
    pics4[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics5[num]= new Image;
    var str = num.toString();
    pics5[num].src = ' ' + str + '.png';

}
for(x=0; x < 101; x++){
    var num = 0;
    num++;
    pics6[num]= new Image;
    var str = num.toString();
    pics6[num].src = ' ' + str + '.png';

}
for(x=0; x < 101; x++){
    var num = 0;
    num++;
    pics7[num]= new Image;
    var str = num.toString();
    pics7[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics8[num]= new Image;
    var str = num.toString();
    pics8[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics9[num]= new Image;
    var str = num.toString();
    pics9[num].src = ' ' + str + '.png';

}
for(x=0; x < 10; x++){
    var num = 0;
    num++;
    pics10[num]= new Image;
    var str = num.toString();
    pics10[num].src = ' ' + str + '.png';

}





theButton.addEventListener('click', getImages);

function getImages (){
    var rand = pics1[Math.floor(Math.random() * pics1.length)];
    document.getElementById("theImg").src = rand.src;

    var randed = pics2[Math.floor(Math.random() * pics2.length)];
    document.getElementById("theImg1").src = randed.src;

    var rands = pics3[Math.floor(Math.random() * pics3.length)];
    document.getElementById("theImg2").src = rands.src;

    var rand = pics4[Math.floor(Math.random() * pics4.length)];
    document.getElementById("theImg3").src = rand.src;

    var randed = pics5[Math.floor(Math.random() * pics5.length)];
    document.getElementById("theImg4").src = randed.src;

    var rands = pics6[Math.floor(Math.random() * pics6.length)];
    document.getElementById("theImg5").src = rands.src;

    var rand = pics7[Math.floor(Math.random() * pics7.length)];
    document.getElementById("theImg6").src = rand.src;

    var randed = pics8[Math.floor(Math.random() * pics8.length)];
    document.getElementById("theImg7").src = randed.src;

    var rands = pics9[Math.floor(Math.random() * pics9.length)];
    document.getElementById("theImg8").src = rands.src;

    var rands = pics10[Math.floor(Math.random() * pics10.length)];
    document.getElementById("theImg9").src = rands.src;
}
