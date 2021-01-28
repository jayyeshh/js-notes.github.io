let getByClass=(cls)=>document.getElementsByClassName(cls)[0];

let input=getByClass('inp');
let list=getByClass('list');

const setStorage=(item)=>{
    let items=JSON.parse(localStorage.getItem('items'));
    if(!items){
        localStorage.setItem("items",JSON.stringify([item]));
        return;
    }
    items.push(item);
    localStorage.setItem("items",JSON.stringify(items));
}

const addItem=(item)=>{
    let li=document.createElement('li');
    li.classList.add('item');
    let it=document.createElement('div');
    it.classList.add("itemName");
    it.innerText=item;
    li.appendChild(it);
    let btn=document.createElement('button');
    btn.innerHTML="&#10008;";
    btn.classList.add('del');
    btn.addEventListener('click', delItem);
    li.appendChild(btn);
    list.appendChild(li);
    input.value="";
    input.focus();
}

const itemSubmission=(e)=>{
    e.preventDefault();
    let item=input.value.trim();
    if(!item){
        input.classList.add('inputError');
        window.alert('please put some task')
        setTimeout(()=> input.classList.remove('inputError'), 2000);
        return;
    }
    item=camelCase(item);
    setStorage(item);
    addItem(item);
}

const camelCase=(item)=> item.split(' ').map(i=> i[0].toUpperCase()+i.substr(1)).join(' ');

const delItem=(e)=>{
    let itemToBeDeleted=e.target.parentNode;
    let parent=e.target.parentNode.parentNode;
    parent.removeChild(itemToBeDeleted);
    let items=JSON.parse(localStorage.getItem('items'));
    items=items.filter(item=> item!==itemToBeDeleted.firstChild.innerText);
    localStorage.setItem("items", JSON.stringify(items));
}

const setNewValue=(value, input, li)=>{
    value=value.trim();
    if(!value){
        input.classList.add('inputError');
        setTimeout(()=>{
            input.classList.remove('inputError');
        }, 2000);
        return;
    }
    let newItem=document.createElement('div');
    newItem.innerText=camelCase(value);
    newItem.classList.add("itemName");
    li.removeChild(input);
    li.insertBefore(newItem, li.firstChild);
    let index=Array.prototype.indexOf.call(li.parentNode.childNodes, li);
    let items=JSON.parse(localStorage.getItem("items"));
    items[index]=value;
    localStorage.setItem("items",JSON.stringify(items));
}

const normalMode=(li, div)=>{
    li.removeChild(li.firstChild);
    li.insertBefore(div, li.firstChild);
}

const edit=(e)=>{
    e.preventDefault();
    let item=e.target;
    let li=item.parentNode;
    li.removeChild(item);
    let input=document.createElement('input');
    input.setAttribute('type','text');
    input.classList.add('editor');
    input.value=item.innerText;
    input.addEventListener('keypress',(e)=>{
        if(e.key==="Enter") setNewValue(e.target.value, input, li);
    });
    input.addEventListener('keyup', (e)=>{
        if(e.key==="Escape") normalMode(li, item);
    });
    li.insertBefore(input, li.firstChild);
    input.focus();
}

const init=()=>{
    let items=localStorage.getItem('items');
    if(!items) return;
    items=JSON.parse(items);
    items.forEach(item=> addItem(item));
}

window.onload=init();