// //<!--items-->

var items  =document.getElementById('test');

items.style.margin="0"
// items.style.background="#F9F9F9";
// items.style.display="flex"
// items.style.position="absolute"
items.style.top="30rem"
items.style.display="grid";
// items.style.grid-template-columns ="auto auto auto "
// items.style.width="50rem"
// items.style.height="50rem"
var te;
var L=[];
var l=[];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var imagee
var ratefloat 
var rate
var nameee
var Randomno
var rr
var datee
for(var i =1; i<46; i++){
    if (i%2==0){
        imagee="shoe-2.png"
    }
    else if(i%3==0){
        imagee="shoe-3.png"
    
    }
    else{
        imagee="shoe-1.png"
    };

    l.push(imagee)
    
    // let strno = i
    nameee= "name" + i.toString();
    l.push(nameee)
    rate =getRndInteger(1,5);
    ratefloat= parseInt( rate).toFixed(1)
    l.push(ratefloat)
    console.log(ratefloat)
    Randomno = getRndInteger(200,20000);
    // rr="₹"+ Randomno.toString();
    l.push(Randomno)
    datee=getRndInteger(1,10)
    l.push(datee)
    L.push(l)
    l=[]

    // items.innerHTML += "<div class='card' style='background: white; width:2rem; height:2rem; margin:1rem; z-index:50; text-align: center;'></div>"
};
function allCards(){
// console.log(L[0])
var n1
var i1
var rf1
var  rr1
var d1 
for (var j =0; j<L.length; j++){
    n1=L[j][0];
    
    // console.log(n1)
    i1= L[j][1];
    rf1= L[j][2];
    rr1=L[j][3];
    d1=L[j][4];
    items.innerHTML +=`<div class="card" style='box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); width:max-content; margin:1rem; padding:4rem; border-radius:2rem;'><img src= ${n1} style='width:25rem; height:20rem;'><div class='container' style='font-size:2rem; text-align:left;'> <div class='topline' style='display:flex;'> <p style='font-size:2.5rem;'>${i1}</p> <div class='raiting'style=' display:inline; font-size:1.4rem; float:right; margin-left:auto; text-align: right; padding:0.3rem; background: #FEF5EB; colour: rgba(247, 155, 52, 1); border-radius:0.7rem; width:max-content;'> <div style='display:inline;'><img src='hel.png'>  <p style='color: rgba(247, 155, 52, 1); '>${rf1}</p></div></div>  </div> <h1 style='font-size:3rem; color:rgba(208, 30, 30, 1); '>₹${rr1}</h1><p style='opacity:0.5; font-size:1.3rem;'>Dilivery in ${d1} days </p></div></div>`
};


};
var ltemp= L
allCards()
// var ele = "1.0"
// console.log(ltemp)
// console.log(ltemp[0][2])
// console.log(ltemp)
function getSelected(ele){
    items.innerHTML='';
    console.log(ltemp)
    for (var k=0; k<ltemp.length; k++){
        if (ltemp[k][2]==ele) {


        // for (var j =0; j<ltemp.length; j++){
        n1=ltemp[k][0];
        
        // console.log(n1)
        i1= ltemp[k][1];
        rf1= ltemp[k][2];
        rr1=ltemp[k][3];
        d1=ltemp[k][4];
        items.innerHTML +=`<div class="card" style=' box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); width:max-content; margin:1rem; padding:1rem;'><img src= ${n1} style='width:25rem; height:20rem;'><div class='container' style='font-size:2rem; text-align:left;'> <div class='topline' style='display:flex;'> <p style='font-size:2.5rem;'>${i1}</p> <div class='raiting'style=' display:inline; font-size:1.4rem; float:right; margin-left:auto; text-align: right; pading:0.3rem; background: #FEF5EB; colour: rgba(247, 155, 52, 1); border-radius:0.7rem; width:max-content;'> <div style='display:inline;'><img src='hel.png'>  <p style='color: rgba(247, 155, 52, 1); '>${rf1}</p></div></div>  </div> <h1 style='font-size:3rem; color:rgba(208, 30, 30, 1); '>₹${rr1}</h1><p style='opacity:0.5; font-size:1.3rem;'>Dilivery in ${d1} days </p></div></div>`
        };
        
    }
    
}
function allCardsOne(){
    items.innerHTML='';
    for (var k=0; k<ltemp.length; k++){
        // if (ltemp[k][2]==ele) {


        // for (var j =0; j<ltemp.length; j++){
        n1=ltemp[k][0];
        
        console.log(n1)
        i1= ltemp[k][1];
        rf1= ltemp[k][2];
        rr1=ltemp[k][3];
        d1=ltemp[k][4];
        items.innerHTML +=`<div class="card" style=' box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); width:max-content; margin:1rem; padding:1rem;'><img src= ${n1} style='width:25rem; height:20rem;'><div class='container' style='font-size:2rem; text-align:left;'> <div class='topline' style='display:flex;'> <p style='font-size:2.5rem;'>${i1}</p> <div class='raiting'style=' display:inline; font-size:1.4rem; float:right; margin-left:auto; text-align: right; pading:0.3rem; background: #FEF5EB; colour: rgba(247, 155, 52, 1); border-radius:0.7rem; width:max-content;'> <div style='display:inline;'><img src='hel.png'>  <p style='color: rgba(247, 155, 52, 1); '>${rf1}</p></div></div>  </div> <h1 style='font-size:3rem; color:rgba(208, 30, 30, 1); '>₹${rr1}</h1><p style='opacity:0.5; font-size:1.3rem;'>Dilivery in ${d1} days </p></div></div>`
        // };
    }
};

// getSelected("1.0")

// var L=[];
// var l= [];
// var Ima
// function getRndInteger(min,max){
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// };



//// <!--items end-->

// <!--creating list-->

// var L=[];
// var l=[];
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// var imagee

// for (var i=1; i<46; i++){
//     if (i%2==0){
//         imagee= <img src='shoe-2' >
//     }
// }



var option =document.getElementById("box")
option.addEventListener("click",helloworld)
var boxes;
var val;
function helloworld(){
    boxes=document.getElementsByClassName('card')
    val=option.value;
    // for( box of boxes){
        if (val=="all"){
            console.log("helloworld")
            items.innerHTML='';
            allCards()
            // countsss
            // allCardsOne()
            console.log("helo")
            
        }

        else if (val=="5s"){
            getSelected("5.0")
            // countsss
            // console.log("helo5")
        }
        else if (val=="4s"){
            getSelected("4.0")
            // countsss
            // console.log("helo4")
        }
        else if (val=="3s"){
            getSelected("3.0")
            // countsss
            // console.log("hel3")
        }
        else if (val=="2s"){
            getSelected("2.0")
            // countsss
            // console.log("helo2")
        }
        else if (val=="1s"){
            getSelected("1.0")
            // countsss
            // console.log("helo1")
 
        }

    // };
};

// ltemp.sort
// console.log(ltemp)
// var absd=[]
// absd=[1,4,2,5521,3,4,315]


// rate
function getSorted(list12){
    for (var k=0; k<list12.length; k++ ){

    
    for (var j=0; j< (list12.length-k-1); j++){
        if(list12[j][3] > list12[j+1][3]){
            var world =list12[j]
            list12[j]=list12[j+1]
            list12[j+1]=world
            
        }
        
    }
}
    // console.log(list12)
    // allCards()   
}
// rate end
// function getSorted(list12){
//     for (var j=0; j< list12.length; j++){
//         if(list12[j][3] > list12[j+1][3]){
//             list12[j][3],list12[j+1][3]=list12[j+1][3],list12[j][3]
//             console.log(list12[j])

//         }

//     }
// }

// allCardsOne()


// dilivery 
function getSorted2(list12){
    for (var k=0; k<list12.length; k++ ){

    
    for (var j=0; j< (list12.length-k-1); j++){
        if(list12[j][4] > list12[j+1][4]){
            var world =list12[j]
            list12[j]=list12[j+1]
            list12[j+1]=world
            
        }
        
    }
}


    // console.log(list12)
    // allCards()   
}

// dilivery end


// star
function getSorted3(list12){
    for (var k=0; k<list12.length; k++ ){

    
    for (var j=0; j< (list12.length-k-1); j++){
        if(list12[j][2] > list12[j+1][2]){
            var world =list12[j]
            list12[j]=list12[j+1]
            list12[j+1]=world
            
        }
        
    }
}


    // console.log(list12)
    // allCards()   
}

function getSorted4(list12){
    for (var k=0; k<list12.length; k++ ){

    
    for (var j=0; j< (list12.length-k-1); j++){
        if(list12[j][1] > list12[j+1][1]){
            var world =list12[j]
            list12[j]=list12[j+1]
            list12[j+1]=world
            console.log(list12[j])
            
        }
        
    }
}


    console.log(list12)
    // allCards()   
}


var option222 =document.getElementById("box2")
option222.addEventListener("click",hello12)
var valagrim;
var boxes
function hello12(){
    boxes=document.getElementsByClassName('card')
    valagrim=option222.value;
    // for( box of boxes){
        if (val=="sa"){
            allCardsOne()
            console.log("helo")
            // countsss
            
        }
        
        else if (valagrim=="HL"){
            ltemp= L
            getSorted(ltemp)
            items.innerHTML='';
            allCards()
            // countsss
            
            // getSelected("5.0")
            // console.log("helo5")
        }
        else if (valagrim=="DT"){
            ltemp= L
            getSorted2(ltemp)
            items.innerHTML='';
            allCards()  
            // countsss
            // console.log("helo4")
        }
        else if (valagrim=="SR"){
            ltemp= L
            getSorted3(ltemp)
            items.innerHTML='';
            allCards()
            // countsss
            // console.log("hel3")
        }
        else if (valagrim=="NAME"){
            ltemp= L
            getSorted4(ltemp)
            items.innerHTML='';
            allCards()
            
            // console.log("helo2")
        }
        // else if (val=="1s"){
        //     getSelected("1.0")
        //     // console.log("helo1")
 
        }

    // };
function countsss(){
    var count= document.getElementsByClassName('card')
    var CT=count.length
    console.log(CT)
    
    var subheading=document.getElementById("sebhead")
    subheading.innerHTML=`<h1 ID='why'>${CT} Products <h1>   `
};    


