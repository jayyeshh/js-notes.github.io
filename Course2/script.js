/*
var add=function(){
    let counter=0;
    var plus=function(){
        counter+=1;
        return counter;
    }
    return plus;
}

let counter=add();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
let c2=add();
console.log(c2());
console.log(c2());
console.log(c2());
console.log(c2());
console.log(c2());
*/
/*
(function(){
    let player={
        score: scoreBoard()
    };
    let gamePlay=true;
    play();

    function questionBank(){
        let qsns=[{
            q: "Answer is option c?",
            opts: ["w","w","r"],
            correct: 3
        },{
            q: "Answer is option b?",
            opts: ["w","r","w"],
            correct: 2
        },{
            q: "Answer is option a?",
            opts: ["r","w","w"],
            correct: 1
        }];
        var getQsn=function(){
            return qsns[Math.floor(Math.random()*qsns.length)];
        }
        return getQsn;
    };

    function scoreBoard(){
        let score=0;
        return function set(s){
            score+=s;
            return score;
        }
    }

    function play(){
        while(gamePlay){
            let next=questionBank();
            let q=next()
            let ans=prompt(q.q+"\n"+"1). "+q.opts[0]+"\n2). "+q.opts[1]+"\n3). "+q.opts[2]);
            if(ans==="") continue;
            if(ans==="exit") gamePlay=false;
            else if(q.correct===Number(ans)) console.log(player.score(1));
            else console.log(player.score(0));
        }
    }
})();

function createIterator(){
    let count=0;
    return {
        next: function(){
            count+=1;
            var done=(count>3);
            var value=count<=3 ? count: undefined;
            return { value, done};
        }
    }
}

function consoleIt(itr){
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
}

var itr=createIterator();
consoleIt(itr);
function *createGen(){
    yield 1;
    yield 2;
    yield 3;
}

const itr2=createGen();
consoleIt(itr2);

//forofloop: 
let values=[1,2,3];

for(let num of values) console.log(num);

//Default iterator:
let itr3=values[Symbol.iterator]();
consoleIt(itr3);

//Check if the function is iterable or not:
function isIterable(object){
    console.log(object[Symbol.iterator]);
    return typeof object[Symbol.iterator]==="function";
}

console.log(isIterable([1,2,3]));

//Prototype Chain:

function Person(first,last,age,gender,interests){
    this.name={
        first,
        last
    };
    this.age=age;
    this.gender=gender;
}

let person1=new Person("abc","def",39,"m",["skate","e-sport"]);
console.log(person1.age);
console.log(Object.getPrototypeOf(person1)); //Person
- prototype of Object.protype is null. so Object.__proto__.__proto__ === null

let object={
    name: "james",
    city: "new boston",
    getIntro: function(){
        console.log(this.name + " from "+ this.city);
    }
}

let object2={
    name: "keanu"
}

object2.__proto__=object //now object2 will have access to all methods of object

console.log(object2.getIntro()); // "keanu from new boston";
    coz this now ref. to object2(callee function), & it cannot find city in
    object2, so it started searching for city up in the prototype chain, object
    is the prototype of object2. So it takes "new boston" from object.

- Function is the prototype of all the functions. 
- Object is prototype of Function, so basically everything is Object is js,
  coz all the functions are inheriting Object.

Function.prototype.mybind=function(){
    let sum=0;
    console.log("my bind method");
}

//now all the functions, will have access to the mybind function.
//coz all functions will have Function as their prototype & Function have mybind method.

function fun1(){
    console.log("abc");
}

let x=fun1;
console.log(x.__proto__.mybind());

// fun1.__proto__ is Function & fun1.__proto__.__proto__ is Object.

// Function Borrowing: 
let name={
    first: "jayesh",
    last: "sharma",
}

let printFullName = function(hometown,arg2,arg3){
    console.log(this.first+" "+this.last+",",hometown+","+arg2+","+arg3);
}

printFullName.call(name,"rajasthan","arg2","arg3");

let name2={
    first: "Akshay",
    last: "Saini"
}

printFullName.call(name2,"Deharadun","arg2","arg3");

//apply is same as call, just instead of passing the arguments saparately,
// like we do in call. In apply method we pass args in array.
printFullName.apply(name2,["UP","arg2","arg3"]); 

//bind method:
// call or apply gives access to the method, bind actual binds the method
// to the object and returns a new method.
let printName=printFullName.bind(name2,"Utrakhand","arg2");
//now printName is function & can be invoked later.
// & also some arguments can be provided later.
console.log(printName("new Arg"));

//Polyfill for bind method (implementation of bind method):
Function.prototype.mybind=function(...args){
    let _this=this;
    args=args.slice(1);
    return function(...params){
        this.apply(args[0],[...args,...params]);
    }
}

let printName2=printFullName.bind(name2,"Ranchi","args2");
console.log(printName2("new Arg"));

//Closure: function along with its lexical scope bundled together formed the closure.
//the outside function is returned but actual function have reference to the variable 
// defined in outside function, so it has all the references and use them when needed.
// So basically fu

function fun(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}

var z=fun();
console.log(z()); //100, coz fun is returned but its scope is preserved, a's memory will not be garbage collected,
                  //because function y have reference to it & it'll be used later. function y was returned after
                  // a was modified, so the memory contains 100.

// Uses of Closure:
// - Module Design Pattern
// - Currying
// - Functions like once
// - memoize
// - maintainig state in async world
// - setTimeouts
// - Iterators etc.


//setTimeout & Closure:
//task: print 1-5 after 1 second;
function print(){
    for(var i=1;i<=5;i++){
       setTimeout(function(){
           console.log(i);
       },i*1000);
    }
}
print();
//it'll print 6 six times. because for will run asynchronous & function inside setTimeout have reference to the same memory space.
//so by the time first setTimeout's time gets expire, i will already become 6 coz for loop is finished already. All functions inside
//setTimeout have reference to the same i(memory space of i), so it'll print 6.

//to make it work use let instead of var, coz let creates new memory space for each for loop, so each setTimeout function have its own
//reference to new i;

//to make it work without using let, use closure:
function print(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            }, x*1000);
        }
        close(i); //this will create a saparate copy of i for each setTimeout function.
    }
}
*/
    /*Function Currying *//*
// Currying is a technique of evaluating function with multiple args, into sequence of functions with single arg.
//currying using closure:
let multiply=function(x){
    return function(y){
        return (x*y);
    }
}

let multiplyByTwo=multiply(2);
console.log(multiplyByTwo(4));

//currying without closure using bind:
multiply=function(x,y){
    return (x*y);
}
let multiplyByThree=multiply.bind(this, 3);
console.log(multiplyByThree(8));
*/

//Debounce Method:
/*
let counter=0;
const getData=function(){
    console.log("Fetching...",counter++);
}

const debounce=function(fn, delay){
    let timer;
    return function(){
        let context=this, args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn.apply(context, arguments);
        }, delay);
    }
}

const keyEventHandler=debounce(getData, 300);
*/
/*
//Throttling:
//It is a technique in which, no matter how many times 
//the user fires the event, the attached function will be 
//executed only once in a given time interval.
let counter=0;
function printResizeText(){
    console.log("Resizing Window Event ",counter++);
}

let throttleFunc=function(fn, limit){
    let flag=true;
    return function(){
        let context=this, args=arguments;
        if(flag){
            fn.apply(context, args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            }, limit);
        }
    }
}

window.addEventListener('resize', throttleFunc(printResizeText, 300));
// closure is important here because if initialized flag inside the returned 
//function then flag will be reinitialized again & again, & it won't work.
//- The main difference between throttling and debouncing is that throttling 
//executes the function at a regular interval, while debouncing executes 
//the function only after some cooling period.
// So basically debouncing is the difference between two key events,
// while throttling is the difference between two function calls.
*/

//Event Bubbling & Capturing (Trickling):
/*
Bubbling: When an event happens on an element, it first runs the handlers on it,
then on its parent, then all the way up on other ancestors.
To stop the bubbling effect: event.stopPropagation()
if an element has multiple event handlers on a single event, then even if one of 
them stops the bubbling, the other ones still execute.

In other words, event.stopPropagation() stops the move upwards, but on the current 
element all other handlers will run.

To stop the bubbling and prevent handlers on the current element from running, 
there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

Capturing: the event goes down to the element. (top-down);

- With addEventListener() second argument is false by default. It is for event bubbling,
setting it true will make the event trigger in up to down/capturing/Trickling method.
    event call method: grandparent>parent>child; when event is occured on child.

both bubbling and capturing can be used together. it can have serious performance issues.
browser/window will start from capturing and then go for bubbling, so browser will first start
from top & go to the bottom, all the event which are following capturing will be triggered in this phase.
In next phase bottom-up or bubbling will happen & all the events which are following bubbling will be
triggered in this phase.
*/
/*
document.querySelector("#grandParent").addEventListener('click',()=>{
    console.log("grandParent Clicked");
}, false);  //bubbling

document.querySelector("#parent").addEventListener('click',()=>{
    console.log("parent Clicked");
}, true);  //Capturing

document.querySelector("#child").addEventListener('click',()=>{
    console.log("chlid Clicked");
}, false);  //bubbling

//output >> parent >> child >> grandParent; 
// parent will be triggered in Capturing phase & in phase 2 (bubbling phase)
// child & grandParent will be triggered.
// To stop bubbling or capturing phase, e.stopPropagation can be used.

*/

//          ***Event Delegation***
/*
// With Event Delegation, instead of defining events on every child Element,
// we give only parent element an event, & when its get trigger, we check which 
// element cause the event to trigger & handle it accordingly.
// So here event bubbling is getting used, to capture the event & get which element 
// is triggering that event.

document.getElementById("form").addEventListener('keyup',(e)=>{
    if(e.target.dataset.uppercase !== undefined){
        e.target.value=e.target.value.toUpperCase();
    }
});
// Benifits of Event Delegation:
// 1. DOM Manipulation is easier this way.
// 2. Improves the performance.
// 3. It takes less memory coz now we only have one event instead of multiple child events.
// Limitations: 
// - All the events are not bubble up, like blur, resize, focus, scrolling etc.
// - if code have stopPropagation, then also event Delegation won't work.
*/

//Async & defer
/*
In normal mode, html parsing goes on & when it encounters the script tag,
html parsing will pause, it fetches the script & executes it, 
then html parsing will continue.
In async, html parsing will not pause when script is getting fetched, but when script executes,
then html parsing will be paused & after execution is finished html parsing will continue.
In defer, html parsing will not pause while fetching the script, but script will not execute until
whole html is not parsed. So script will execute in the end.
*/

/*
//problem: sum(1)(2)(3)(4)...() //10
//Solution: 
let sum=(a)=> (b)=> b? sum(a+b) : a;

console.log(sum(1)(2)(3)(4)());
*/
/*
//Problem: flatten the object keys:
//Solution: 
let user={
    name: "user101",
    address: {
        personal: {
            city: "Deharadun",
            area: "Majra"
        },
        office: {
            city: "Hydrabad",
            area: {
                landmark: "govt. school"
            }
        }
    }
};
let finalObj={};
let magic=(obj, parent)=>{
    for(let key in obj){
        if(typeof obj[key]==="object"){
            magic(obj[key],parent+"_"+key);
        }else{
            finalObj[parent+"_"+key]=obj[key];
        }
    }
}

magic(user, "user");
console.log(finalObj);
*/
/*
//Function Statement or Function Declaration:
a();
b(); //throws an error: b is not a function.
function a(){
    console.log("a called");
}

//Function Expression: 
var b=function(){
    console.log("b called");
}

//difference between Statement & Expression: 
    // Main difference is hoisting, the function Statement
    // can be called before it is initialized, coz it has a block of memory assigned to it.
    // but Function Expressions cannot be called before assignment.

//Anonymous function: 
    // Anonymous functions are used when we need function as a value.
    // Anounymous Functions otherwise cannot be declared without name. They must have a name.
function (){ console.log("b called"); } //Error: function must have a name.
var b=function(){ console.log("b called"); } //valid.

//Named Function Expression: 
var c=function xyz(){
    console.log(xyz); //xyz is local, can be accessed here.
    console.log("c called");
}

c();
xyz(); //Reference Error: xyz is not defined. coz xyz is not in the global scope,
    // it is actually in its local scope.

Arguments: the values which gets passed to the function.
Parameters: the labels & identifiers which gets the arguments are called parameters.

First Class Function/First Class Citizen: The ability, of using function as argument & be able to return
                    the function from other functions & using function as value, is called 
                    First Class Function.

*/