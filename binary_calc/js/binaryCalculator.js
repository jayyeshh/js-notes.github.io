const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const res=document.getElementById("res");

let num1='',num2='',op='';

const clearScreen=()=>{
    res.innerText="";
    num1='';
    num2='';
    op='';
}

const printScreen=()=> res.innerText=num1+op+num2;

const addNum=(e)=>{
    if(op){
        num2+=e.target.innerText;
    }else{
        num1+=e.target.innerText;
    }
    printScreen();
}

const addOp=(e)=>{
    op=e.target.innerText;
    printScreen();
}

const binAdd=(a,b)=>{
    if(a==='1' && b==='1') return ['1', '0'];
    if(a==='0' && b==='1' || a==='1' && b==='0') return ['1', '0'];
    return ['0', '0'];
}

const addition=()=>{
    let len=Math.max(num1.length, num2.length);
    num1=num1.padStart(len, '0');
    num2=num2.padStart(len, '0');
    num1=num1.split('').reverse().join('');
    num2=num2.split('').reverse().join('');
    let temp='0',carry='',sum='',s='';
    for(let i=0;i<len;i++){
        [carry, s]=binAdd(num1[i], num2[i]);
        let [temp, s]=binAdd(s, temp);
        sum+=s;
    }
    if(temp!=='0') sum+=temp;
    sum=sum.split('').reverse().join('');
    clearScreen();
    res.innerText=sum;
}

const multiply=()=>{

}

const calculate=()=>{
    if(op==='+') addition();
    if(op==='-') minus();
    if(op==='*') multiply();
    if(op==='/') div();
}

btn0.addEventListener('click',addNum);
btn1.addEventListener('click',addNum);
btnSum.addEventListener('click', addOp);
btnSub.addEventListener('click', addOp);
btnMul.addEventListener('click', addOp);
btnDiv.addEventListener('click', addOp);
btnClr.addEventListener('click', clearScreen);

btnEql.addEventListener('click', calculate);