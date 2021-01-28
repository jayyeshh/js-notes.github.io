const container=document.getElementsByClassName('container')[0];
const screen=document.getElementsByClassName('screen')[0];
const bg1=document.getElementsByClassName('bg1')[0];
const bg2=document.getElementsByClassName('bg2')[0];
const prevExpression=document.getElementsByClassName('prev')[0];
const ans=document.getElementsByClassName('ans')[0];
let btns=Array.from(document.getElementsByClassName('btn'));
let rows=Array.from(document.getElementsByClassName('row'));
let operators=['+','-','*','/','%','=','.','BACKSPACE'];
let prev="";
let operation="";
let operatorFlag=false;

const updateView=()=>{
    if(window.innerWidth<600){
        container.classList.add('smContainer');
        screen.classList.add('smScreen');
        bg1.style.display='none';
        bg2.style.display='none';
        btns.forEach(btn=> btn.classList.add('smBtn'));
        rows.forEach(row=> row.classList.add('smRow'));
    }else{
        bg1.style.display='block';
        bg2.style.display='block';
        container.classList.remove('smContainer');
        screen.classList.remove('smScreen');
        btns.forEach(btn=> btn.classList.remove('smBtn'));
        rows.forEach(row=> row.classList.remove('smRow'));
    }
}

window.onload=()=>{
    updateView();
}

window.addEventListener('resize',()=>{
    updateView();
})

const updateScreen=()=>{
    ans.innerText=operation;
    if(operation!==prev.substr(0,prev.length-1) || !prev) prevExpression.innerHTML=prev;
}

const handleOperator=(op)=>{
    if(operatorFlag) return;
    if(!operation && ['*','/','%'].includes(op)) return;
    if(op==="="){
        if(!operation) return;
        prev=`${operation}=`;
        operation=`${eval(operation)}`;
    }else if(op==="BACKSPACE"){
        operation=operation.substr(0,operation.length-1);
        if(!operation){
            prev="";
            prevExpression.innerText="";
        }
        operatorFlag=(operators.includes(operation.charAt(operation.length-1)));
    }else if(!operatorFlag){
        operation+=op;
        operatorFlag=true;
    }
    updateScreen();
}

const handleDigit=(digit)=>{
    operatorFlag=false;
    operation+=digit;
    updateScreen();
}

const clearScreen=()=>{
    operation="";
    prev="";
    updateScreen();
}

const keyPressed=(e)=>{
    if(!e.target.classList.contains('btn')) return;
    let key=e.target.getAttribute('name');
    if(e.target.innerText==="C") clearScreen();
    else if(operators.includes(key)) handleOperator(key);
    else handleDigit(key);
}