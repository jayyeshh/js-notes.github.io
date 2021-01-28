// // let coin=document.getElementsByClassName("coin")[0];

// // function toss(){
// //     let results=["heads","tails"];
// //     let tossResult=document.getElementsByClassName("tossResult")[0];
// //     let result=Math.floor(Math.random()*2);
// //     tossResult.innerHTML=`<h1>${results[result]}</h1>`;
// // }

// function run(){
//     var root=document.getElementById("root");
//     var html="<table>";
//     for(let r=0;r<10;r++){
//         html+="<tr>";
//         for(let c=0;c<15;c++){
//             html+=`<td>Col: ${(r*15)+(c+1)}</td>`;
//         }
//         html+="</tr>";
//     }
//     html+="</table>";
//     root.innerHTML=html;
// }


// function showOutput(a,b,output,callback){
//     let result=callback(a,b);
//     html=`<h1>${result}</h1>`;
//     output.innerHTML=html;
// }

// function add(){
//     var num1=Number(document.getElementById("num1").value);
//     var num2=Number(document.getElementById("num2").value);
//     var output=document.getElementById("output");
//     showOutput(num1,num2,output,function(a,b){
//         return a+b;
//     });
// }

// function sub(){
//     var num1=Number(document.getElementById("num1").value);
//     var num2=Number(document.getElementById("num2").value);
//     var output=document.getElementById("output");
//     showOutput(num1,num2,output,function(a,b){
//         return a-b;
//     });
// }

// function mul(){
//     var num1=Number(document.getElementById("num1").value);
//     var num2=Number(document.getElementById("num2").value);
//     var output=document.getElementById("output");
//     showOutput(num1,num2,output,function(a,b){
//         return a*b;
//     });
// }

// function div(){
//     var num1=Number(document.getElementById("num1").value);
//     var num2=Number(document.getElementById("num2").value);
//     var output=document.getElementById("output");
//     showOutput(num1,num2,output,function(a,b){
//         return a/b;
//     });
// }


// function newTab(){
//     var w=window.open('index2.html');
//     w.onbeforeunload=function(e){
//         e.preventDefault();
//         e.returnValue='';
//         alert('Stay!!!');
//     }
// }

var output=document.getElementById("output");

// window.onload=setTimeout(updateWelcomeMsg, 2000);

// var myTimer;
// function startInt(){
//     myTimer=window.setTimeout(Popup, 3000);
// }

// function clearInt(){
//     window.clearInterval(myTimer);
// }

// function Popup(){
//     alert("Hello");
// }

// function updateWelcomeMsg(){
//     output.innerHTML="<p style='color: green;'>Thanks for staying this long. & Also, get a life you nerd.</p>";
// }

// function visitUrl(){
//     let url=document.getElementById('url').value;
//     window.location=url;
// }

// function onChangeEventHandler(){
//     output.innerHTML=`<h3 style="color: red;">${event.target.value}</h3>`;
// }

// function onBlurEventHandler(){
//     output.innerHTML=`<h3 style="color: green;">${event.target.value}</h3>`;
// }

// var img=document.getElementById('img');
// var size='350x50',color='fff',text='Image1',imgUrl;
// window.onload=function(){
//     var imgUrl=`http://via.placeholder.com/${size}/${color}/222?text=${text}`
//     img.src=imgUrl;
// }

// function onChangeHandler(){
//     if(event.target.type==="select-one") size=event.target.value;
//     else if(event.target.type==="text") text=event.target.value;
//     else if(event.target.type==="color"){
//         color=event.target.value;
//         color=color.replace("#","");
//     }
//     imgUrl=`http://via.placeholder.com/${size}/${color}/222?text=${text}`;
//     console.log(imgUrl);
//     img.src=imgUrl;
// }

// var img=document.getElementById('img');
// var curr=0,imgUrl;
// var colors=["000","111","222","aaa","bbb","ccc","ddd","eee","fff"];
// var texts=["0","1","2","a","b","c","d","e","f"];
// window.onload=function(){
//     imgUrl=`http://via.placeholder.com/350x150/${colors[curr]}/222?text=${texts[curr]}`;
//     this.changeImg();
// }

// setInterval(changeImg, 500);
// function changeImg(){
//     curr++;
//     if(curr>=colors.length) curr=0;
//     imgUrl=`http://via.placeholder.com/350x150/${colors[curr]}/222?text=${texts[curr]}`;
//     img.src=imgUrl;
// }

// function onChangeEventHandler(){
//     console.log(event.key);
//     if(!isNaN(event.key)) output.innerHTML=event.target.value;
//     return !isNaN(event.key);
// }


//drag & drop
// var Item;

// function sDrop(){
//     Item=event.target;
// }

// function nDrop(){
//     event.preventDefault();
// }

// function eDrop(){
//     event.preventDefault();
//     if(event.target.className="box"){
//         event.target.appendChild(Item);
//     }
// }

// var outputs=document.querySelectorAll('.output');
// var colors=["red","green","blue","aqua","orange"];

// setInterval(randomize, 100);

// function randomize(){{
    
// }
//     for(var i=0;i<outputs.length;i++){
//         let x=Math.floor(Math.random()*colors.length);
//         outputs[i].style.backgroundColor=colors[x];
//     }
// }

// var titles=document.querySelectorAll('.title');
// var accs=document.querySelectorAll('.acc');

// for(var i=0;i<titles.length;i++){
//     titles[i].onclick=function(){
//         actionFunc(accs,'remove','active');
//         this.nextElementSibling.classList.toggle('active');
//     }
// }

// function actionFunc(elems,a,c){
//     for(var i=0;i<elems.length;i++){
//         elems[i].classList[a](c);
//     }
// }

// var rows=document.getElementsByClassName('data');
// var friends=[];

// function onClickEventHandler(){
//     let v=event.target.getAttribute('data-row');
//     v++;
//     event.target.parentNode.lastElementChild.innerText=v;
//     event.target.setAttribute('data-row',v);
// }

// var addFriend=document.getElementById('addFriend');
// var nameInput=document.getElementById('nameInput');

// function createElem(elem){
//     return document.createElement(elem);
// }

// addFriend.onclick=function(){
//     let newFriend=nameInput.value;
//     friends.push(newFriend);
//     let tr=createElem('tr');
//     let td=createElem('td');
//     tr.classList.add('data');
//     td.appendChild(document.createTextNode(friends.length));
//     tr.appendChild(td);
//     td=createElem('td');
//     td.appendChild(document.createTextNode(newFriend));
//     tr.appendChild(td);
//     td=createElem('td');
//     td.appendChild(document.createTextNode('0'));
//     tr.appendChild(td);
//     let att=document.createAttribute('data-row');
//     att.value="0";
//     tr.setAttributeNode(att);
//     let event=document.createAttribute('onclick');
//     event.value='onClickEventHandler()';
//     tr.setAttributeNode(event);
//     let container=document.getElementById('container');
//     container.appendChild(tr);
//     nameInput.value="";
// }
// var win;

// function popup(){
//     let url=document.getElementById('inp').value;
//     let opt="top=100,left=500,width=400,height=400";
//     win=window.open(url,"_blank",opt);
// }

// function popclose(){
//     win.close();
// }

// Guess the Word Game: 
/*
var randWord=document.getElementById("randWord"),inp,score,rword;
var btn=document.getElementById("btn");
var result=document.getElementById("result");
var scoreBoard=document.getElementById("score");
var words=["learning","Javascript","newyear","guessthis","simpleaf"];

window.onload=function(){
    next();
    score=0;
    scoreBoard.innerText=score;
}

function next(){
    rword=words[Math.floor(Math.random()*words.length)];
    let curr=rword;
    let w='',wordSize=rword.length;
    for(let i=0;i<wordSize;i++){
        let index=Math.floor(Math.random()*curr.length);
        w+=curr[index];
        curr=curr.substr(0,index)+curr.substr(index+1);
    }
    randWord.innerText=w;
}

function checkResult(){
    inp=document.getElementById("inp").value;
    if(inp.toLowerCase()===rword.toLowerCase()){
        result.innerHTML=`<span style="color: green;">Correct!!</span>`;
        score+=1;
        scoreBoard.innerText=score;
    }else{
        result.innerHTML=`<span style="color: red;">Incorrect!! It was "${rword}"</span>`;
        score-=1;
        scoreBoard.innerText=score;
    }
    next();
}
*/

//Date & time Countdown:
/*
var countdown=document.getElementById("countdown");
var udate=document.getElementById("udate");
var cdate,edate;

function start(){
    edate=event.target.valueAsDate;
    let tdate=new Date(edate);
    udate.innerText=tdate;
    outputUpdate();
    
}

function fixZeros(x){
    if(x<10) return "0"+x;
    return x;
}

function outputUpdate(){
    cdate=new Date();
    var dur=(edate-cdate);
    let s,m,h,d;
    s=fixZeros(Math.floor((dur%(1000*60))/(1000)));
    m=fixZeros(Math.floor((dur%(1000*60*60))/(1000*60)));
    h=fixZeros(Math.floor((dur%(1000*60*60*24))/(1000*60*60)));
    d=fixZeros(Math.floor((dur/(1000*60*60*24))));
    countdown.innerText=`Time Remaining: ${d} days, ${h}:${m}:${s}`;
    setTimeout(outputUpdate, 1000);
}
*/

//Color Guessing Game:
/*
var result=getById('result');
var colorBox=getByClass('colorBox')[0];
var userGuess=getByClass('userGuess')[0];
var btns=getByClass('btns')[0];
var play=getById('play');
var colors=["red","blue","green","yellow"];
var randColors,cindex,gColors,gamePlay;

function getByClass(cls){
    return document.getElementsByClassName(cls);
}

function getById(id){
    return document.getElementById(id);
}

function gameEnd(){
    gamePlay=false;
    play.innerText="Play Again!";
    if(String(randColors)===String(gColors)) result.innerText="You Won!!!";
    else result.innerText="Incorrect Order!";
}

function randomizeColors(){
    randColors=colors.slice();
    for(let i=0;i<randColors.length;i++){
        let index=Math.floor(Math.random()*randColors.length);
        let temp=randColors[index];
        randColors[index]=randColors[i];
        randColors[i]=temp;
    }
}

function showBtns(){
    let html='';
    for(let i=0;i<colors.length;i++){
        html+=`<div class="btn btn_${colors[i]}" onclick="clickHandler()">${colors[i]}</div>`;
    }
    btns.innerHTML=html;
}

function showColors(){
    colorBox.style.backgroundColor=randColors[cindex];
    if(cindex<randColors.length){
        cindex+=1;
        setTimeout(showColors,200);
    }else{
        cindex=0;
        colorBox.style.backgroundColor="white";
        showBtns();
    }
}

function reset(){
    result.innerText="";
    cindex=0;
    btns.innerHTML="";
    gColors=[];
    userGuess.innerText="";
}

function start(){
    gamePlay=true;
    randomizeColors();
    reset();
    showColors();
}

function build(){
    let html='';
    for(let i=0;i<gColors.length;i++){
        html+=`<div class="btn btn_${gColors[i]} gbtn" onclick="rm(${i})"></div>`;
    }
    userGuess.innerHTML=html;
}

function rm(i){
    if(gamePlay){
        gColors.splice(i,1);
        build();
    }
}

function clickHandler(){
    if(gamePlay){
        let c=event.target.innerText;
        gColors.push(c);
        build();
        if(gColors.length==colors.length) gameEnd();
    }
}
*/

//Multifile upload: 
/*
var msg=document.getElementById('msg');

function upFiles(files){
    for(let i=0;i<files.length;i++){
        var fReader=new FileReader();
        var fileName=files[i].name;
        fReader.readAsText(files[i]);
        fReader.onload=function(e){
            msg.innerHTML+='<br>'+fileName;
            msg.innerHTML+='<br>'+e.target.result;
        }
    }
}
*/

//GeoLocation: 
/*
window.onload=init;
var m=document.getElementById('map');
function init(){
    navigator.geolocation.getCurrentPosition(placeMap);
}

function placeMap(data){
    var options={
        center: {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        },
        zoom: 5
    }
    var map=new google.maps.Map(m,options);
    console.dir(data);
}
*/

//Canvas:
//canvas setup: 
/*
var canvas1=document.getElementById("canvas1");
var canvas2=document.getElementById("canvas2");
var canvas3=document.getElementById("canvas3");
var ctx1=canvas1.getContext('2d');
var ctx2=canvas2.getContext('2d');
var ctx3=canvas3.getContext('2d');
canvas1.width=400;
canvas2.width=400;
canvas2.width=400;
canvas1.height=300;
canvas2.height=300;
canvas3.height=300;

function drawCircle(ctx,color){
    ctx.beginPath();
    ctx.fillStyle=color; //color to be filled with
    ctx.arc(100,100,50,0,2*Math.PI);
    ctx.stroke(); //to draw boundry
    ctx.fill(); //to fill color
}

window.onload=createCanvas();

var can=document.querySelectorAll('canvas');
for(let x=0;x<can.length;x++){
    can[x].addEventListener('mouseover',function(){
        document.getElementById('img').src=event.target.toDataURL();
    })
}

function createCanvas(){
    ctx1.fillStyle='red';
    ctx1.fillRect(10,30,100,100);
    ctx2.beginPath();
    drawCircle(ctx2,'blue');
    drawCircle(ctx3,'yellow');
}


ctx.fillStyle='red';
ctx.fillRect(10,30,100,100);    

rent pos to give pos.
ctx.stroke(); //applying stroke to line.
ctx.beginPath();  //begins a path, or resets the current path.
ctx.arc(60,430,50,0,2*Math.PI); //args: x,y,r,sAngle,eAngle,counterclockwise
ctx.stroke();
ctx.font="24px Arial"; //font options
ctx.fillText("Hello",10,540); //args: msg,x,y
*/

//Canvas Animation:
/*
var canvas=document.getElementById('canvas1');
var ctx=canvas.getContext('2d');
var canvas2=document.getElementById('canvas2');
var ctx2=canvas2.getContext('2d');
var posA={x: 0,y: 50};
var posB={x: 50,y: 0};
canvas.width=400;
canvas.height=400;
canvas2.width=400;
canvas2.height=400;
window.onload=function(){
    animateLTR();
    animateUTD();
}


function animateLTR(){
    posA.x=posA.x+5;
    if(posA.x>canvas.width) posA.x=0;
    if(posA.y>canvas.height) posA.y=50;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle='blue';
    ctx.arc(posA.x,posA.y,50,0,Math.PI*2);
    ctx.fill();

    window.setTimeout(animateLTR, 100);
}

function animateUTD(){
    posB.y+=5;
    if(posB.x>canvas2.width) posB.x=50;
    if(posB.y>canvas2.height) posB.y=0;

    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx2.beginPath();
    ctx2.fillStyle='yellow';
    ctx2.arc(posB.x,posB.y,50,0,Math.PI*2);
    ctx2.fill();

    window.setTimeout(animateUTD, 100);
}
*/

//Uploading Image into the Canvas;
/*
setupCanvas()

function upImage(){
    let r=new FileReader();
    let ifile=event.target.files[0];
    r.readAsDataURL(ifile);
    r.onload=function(){
        let img=new Image();
        img.src=event.target.result;
        img.onload=function(){
            canvas1.width=img.width;
            canvas1.height=img.height;
            ctx1.drawImage(img,0,0);
            ctx1.fillStyle="red";
            ctx1.font="24px Arial";
            ctx1.fillText("Javascript", 2, canvas1.height-10);
        }
    }
}
*/
/*
var color="black";
var colors=["blue","green","yellow","red"];
var canImage=document.getElementById('canImage');

var pos={x: 0,y: 0};

window.onload=init();

function init(){
    canvas1.addEventListener('mousemove', draw);
    canvas1.addEventListener('mousemove', sPos);
    canvas1.addEventListener('mouseenter', sPos);
    createPallete();
}

function createPallete(){
    let html='';
    for(let i=0;i<colors.length;i++){
        html+=`<div name="${colors[i]}" class="clr_box" id="clr_${colors[i]}" onclick="setColor(event)"></div>`;
    }
    let pallet=document.getElementById("pallet");
    pallet.innerHTML=html;
}

function setColor(e){
    color=e.target.value;
    if(e.target.value===undefined) color=e.target.getAttribute('name');
}

function draw(e){
    if(e.buttons!=1) return;
    console.log(pos);
    let output=document.getElementsByClassName('output')[0];
    output.innerHTML=`<h2>X: ${pos.x}, Y: ${pos.y}</h2>`;
    ctx1.beginPath();
    ctx1.moveTo(pos.x,pos.y);
    sPos(e);
    ctx1.lineTo(pos.x,pos.y);
    ctx1.lineCap="round";
    ctx1.strokeStyle=color;
    ctx1.lineWidth=10;
    ctx1.stroke();
}

function sPos(e){
    pos.x=e.pageX;
    pos.y=e.pageY;
}

function save(){
    var dataURL=canvas1.toDataURL();
    canImage.src=dataURL;
}

function clearCanvas(){
    ctx1.clearRect(0,0,canvas1.width,canvas1.height);
}
*/

// active/iactive list
/*
var list=document.getElementById("list");
window.onload=buildlist();

function buildlist(){
    let html='';
    for(let i=0;i<data.length;i++){
        html+=`<li onclick="changeStatus(event,${i})" class="lItem">${data[i].name} <span class=${data[i].status==="active"? "active": "inactive"}>${data[i].status}</span></li>`;
    }
    list.innerHTML=html;
}

function changeStatus(e,i){
    let status=e.target.lastChild.parentNode;
    let currClass=status.classList[0];
    status.classList.remove(currClass);
    currStatus=currClass==="active" ? "inactive": "active"
    status.classList.add(currStatus);
    status.innerText=currStatus;
    data[i].status=currStatus;
}

function add(e){
    e.preventDefault();
    let elems=e.target.children;
    let name=elems[0].value;
    let status=elems[1].value;
    data.push({name,status});
    elems[0].value="";
    elems[1].value="";
    buildlist();
}

*/

// XHR Request Method:
/*
function getData(){
    var xHR=new XMLHttpRequest();
    xHR.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            let data=JSON.parse(this.responseText);
            data.forEach(c=> console.log(c.name));
        }
    }

    xHR.open('GET',"https://restcountries.eu/rest/v2/all",true);
    xHR.send();
}

'use strict'
function *pgGen(){
    let c=0;
    while(c<10){
        yield c++;
    }
}

let pg=pgGen();
console.log('~>',pg.next());

for(let i=0;i<10;i++){
    let holder=pg.next();
    if(holder.done) break;
    console.log("=> ",holder.value);
}

console.log('-->',pg);

console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next()); 

//Errors: 
Const cannot be reassigned: TypeError
ReferenceError: cannot find variable or cannot access variable.
Syntax Error: 

//Execution Context: 
Memory (Variable Environment) & Code ( Thread of Execution );
"Javascript is a Synchronous single-threaded language"

- Call Stack/ Execution Context Stack/ Program Stack / Control Stack / Runtime Stack / Machine Stack.
- global execution context is at the bottom of call stack, all other call stacks will be pushed on top of it.
- Like var, let is also hoisted, but when accessed before initialization let gives error, while var returns "undefined";
    this happened because var gets attached to the global object & assigned undefined. let is also assigned undefined but
    stored in saparate memory space.
    When variables are in 'temporal dead zone' & gets accessed, they return error.
    temporal dead zone: from hoisting until the variable gets assigned.

Lexical Environment: Each execution context have reference to its parent, which is known as lexical Environment. 
                    Global execution context have null as its lexical env. when js engline cannot find any variable 
                    in its local Environment, it moves to its lexical env. & look for that variable there, it keep moving 
                    up the lexical env. until it reached the null or find the variable. The chain of lexical env. is 
                    called "The Scope Chain".

    - Empty paranthesus ({}) are valid js code & can be called block.
      Also known as compound statement. It groups multiple statements together,
      so that these group of statements can be used together, where js expects single statement.

Shadowing: When declared variable in certain scope has the same name defined on it's outer scope.
            ex: var a=100;
                {
                    var a=10;
                    console.log(a); //10
                }
                console.log(a); //10
- here inner a shodowed the outer a & modifies the memory block, both a are referencing to same memory block,
  so we get 10 even outside the block.
- let does not follow this same rule, so inside block let will print 10 but outside block it'll print 100.
  same for const.
- if outside the block the variable is declared with let & inside declared with var , it'll throw SyntaxError,
  but vice-versa is allowed.


JS-2016: (**), arr.includes(item)
JS-2017: Object.values(), Object.entries(), async await, str.padStart(length, pad), str.padEnd(len, pad);

- arr.some(), arr.every()
- arr.reduce((accumulator, currValue, currIndex, arr)=> {}, initialValue);

=> Class Inheritance: 
- super() method referes to the parent class.
- use extends keyword to inherit another class.
- getter & setter. use the underscore character to separate the getter/setter from the actual property.
- Class declarations are not hoisted.

"use strict";
=>> Not allowed in use strict:
- Writing to read-only property:
    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    obj.x = 3.14;            // This will cause an error
- Writing to get-only property:
    var obj={get x() { return 0;}};
    obj.x=3.14; //error.
- deleting a var/object or function.
- duplicate parameter name.
- Octal numberic literals (010) or Octal escape char ("\010").
- deleting an undeletable property: delete Object.prototype;
- The this keyword refers to the object that called the function.
  If the object is not specified, functions in strict mode will return 
  undefined and functions in normal mode will return the global object (window):


//Javascript Engine: 
    phases: Parsing >> Compilation >> Execution
    Parsing: AST
    Compilation: JIT (Just In Time) Compilation (Interpreter + Compiler)
                    Generates the byte Code
    Execution:  Memory Heap & Call Stack

    Garbage Collector (Mark & Sweap Algorithm):
        In the naive mark-and-sweep method, each object in memory has a flag (typically a single bit) reserved for garbage collection use only. This flag is always cleared, except during the collection cycle.
        The first stage is the mark stage which does a tree traversal of the entire 'root set' and marks each object that is pointed to by a root as being 'in-use'. All objects that those objects point to, and so on, are marked as well, so that every object that is reachable via the root set is marked.
        In the second stage, the sweep stage, all memory is scanned from start to finish, examining all free or used blocks; those not marked as being 'in-use' are not reachable by any roots, and their memory is freed. For objects which were marked in-use, the in-use flag is cleared, preparing for the next cycle.
        This method has several disadvantages, the most notable being that the entire system must be suspended during collection; no mutation of the working set can be allowed. This can cause programs to 'freeze' periodically (and generally unpredictably),
        making some real-time and time-critical applications impossible. In addition, the entire working memory must be examined, much of it twice, potentially causing problems in paged memory systems.

    Tri-color marking:
        V8 implements marking using two mark-bits per object and a marking worklist. Two mark-bits encode three colors: white (00), grey (10), and black (11).
        Initially all objects are white, which means that the collector has not discovered them yet. A white object becomes grey when the collector discovers 
        it and pushes it onto the marking worklist. A grey object becomes black when the collector pops it from the marking worklist and visits all its fields. This scheme is called tri-color marking. Marking finishes when there are no more grey objects. 
        All the remaining white objects are unreachable and can be safely reclaimed.
        For this to work application needs to pause while marking otherwise application change the graph & some live objects will be garbage collected.
            To Reduce the pause delays, collector splits up the marking work into smaller chunks and allows the application to run between the chunks.
                

    Optimizations: inlining, Copy Elision, Inline Caching, 

    Copy Elision: copy elision refers to a compiler optimization technique that eliminates 
                  unnecessary copying of objects.

    Inline caching: Inlining is the process of replacing a call site (the line of code 
                    where the function is called) with the body of the called function. 

    Monomorphic, Polymorphic, Megamorphic.

    - Polymorphic State:  With polymorphic inline caching, multiple method lookup results can be recorded 
                          at the same call site. Because every call site in a program can potentially see 
                          every type in the system, there usually is an upper bound to how many lookup results 
                          are recorded at each call site. Once that upper bound is reached, call sites become 
                          "megamorphic" and no more inline caching is performed.


    - Megamorphic State- This state is entered when a particular call site has seen a predetermined number 
                        of different types. Once a call site has entered the "megamorphic" state, it will 
                        behave just as it did in the "uninitialized" state with the exception that it will not enter the "monomorphic" state ever again

    

    JS Engines:
    V8 - Google, C++
    Rhino - Mozilla, Java
    SpiderMonkey - First Js Engine, powered by Netscape at first, now FireFox.
    JavaScriptCore - Apple for Safari, marketed as Nitro
    KJS - KDE's engine
    Chakra(JScript9) - Internet Explorer
    Chakra(JavaScript) - Microsoft Edge
    JerryScript, Duktape - lightweighted for IOT

    Design: 
    V8 first generates an abstract syntax tree with its own parser. Then, Ignition,
    the V8 interpreter, generates bytecode from this syntax tree using the internal V8 bytecode format.
    TurboFan is the V8 optimizing compiler, it takes this bytecode and generates machine code from it. 
    In other words, V8 compiles JavaScript directly to native machine code using just-in-time compilation before executing it.
    The compiled code is additionally optimized (and re-optimized) dynamically at runtime, based on heuristics of the code's execution profile.
    Optimization techniques used include inlining, elision of expensive runtime properties, and inline caching. The garbage collector 
    is a generational incremental collector.

    A common implementation of JIT compilation is to first have AOT(Ahead of time) compilation to bytecode (virtual machine code), known as bytecode compilation, 
    and then have JIT compilation to machine code (dynamic compilation), rather than interpretation of the bytecode.

    Security:
    mplementation of JIT compilation consists of compiling source code or byte code to machine code and executing it. This is generally done directly in memory – 
    the JIT compiler outputs the machine code directly into memory and immediately executes it, rather than outputting it to disk and then invoking the code as a 
    separate program, as in usual ahead of time compilation. In modern architectures this runs into a problem due to executable space protection – arbitrary memory 
    cannot be executed, as otherwise there is a potential security hole. Thus memory must be marked as executable; for security reasons this should be done after 
    the code has been written to memory, and marked read-only, as writable/executable memory is a security hole(W^X).

    W^X: It is a memory protection policy whereby every page in a process's or kernel's address space may be either writable or executable, but not both.

    Ignition: With Ignition, V8 compiles JavaScript functions to a concise bytecode, which is between 50% to 25% the size of the equivalent baseline machine code. 
    This bytecode is then executed by a high-performance interpreter which yields execution speeds on real-world websites close to those of code generated by 
    V8’s existing baseline compiler.

    The Ignition interpreter uses TurboFan’s low-level, architecture-independent macro-assembly instructions to generate bytecode handlers for each opcode. 
    TurboFan compiles these instructions to the target architecture, performing low-level instruction selection and machine register allocation in the process. 
    This results in highly optimized interpreter code which can execute the bytecode instructions and interact with the rest of the V8 virtual machine in a low-overhead manner, 
    with a minimal amount of new machinery added to the codebase.
    Bytecode is an abstraction of machine code.
    Ignition is a register machine with an accumulator register.

    - https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775

    node --print-bytecode --print-bytecode-filter=func_name file.js  | less
    other flags:
    --print-opt-code: code generated by optimizing compiler
    --trace-ic: different object types a call sites encounters
    --trace-opt and --trace-depot: which functions are (de)optimized.

         Heap Memory Allocation -> Orinoco Garbage Collector
    v8 -- 
         Call Stack Execution Context -> TurboFan Optimization Compiler -> Ignition JS Interpreter -> Liftoff WebAssembly
    
    Async: 
    Call Stack  |  Web Apis
    ||| Callback Queue |||

    forEach is synchronous, when it runs it blocks the stack.
    Async forEach:

    function asyncForEach(array, cb){
        array.forEach(function(){
            setTimeout(cb, 0);
        })
    }
                    Parser               Bytecode Gen.   Optimizing
    JS Source Code =======> AST + Scopes ====> ByteCode ====> Machine Code

    Parsing: 
    - Parser:  full, eager 
    - Pre-parser: fast, "lazy"
    - Reparse: 

    Ignition: Why Interpreter?
    - Reduced memory usage: Compiled to a concise bytecode, rather than machine code.
    - Reduced parsing overhead: Bytecode is concise, allowing eager compilation of JS source.
    - Reduced compiler pipeline complexity: Bytecode is source-of-truth for optimizing/ deoptimizing.

    
                        Register Optimizer -> Peephole Opt. -> Dead Code Elimination    
                            |                                           |
    Parser -> AST -> Bytecode Generator                        Bytecode Array Writer -> Bytecode
                                                                                            |
                                                                                        Interpreter

    - Backend of the TurboFan Compiler. (Ignition interpreter structure)

    Nodejs Event Loop: Libuv
    Event Loop Structure: 
    1. Node apps pass async tasks to the event loop along with a callback.
    2. The event loop efficiently manages a thread pool and executes tasks efficiently.
    3. and executes each callback as tasks complete.

*/