const inputPageNode=document.querySelector('.inputPage');
const inputlimitNode=document.querySelector('.limit');
const btnNode=document.querySelector('.btn');
const listNode=document.querySelector('.list');
const errLimitNode=document.querySelector('.errorLimit');
const clear = document.querySelector('.clear')
clear.addEventListener('click',() => {localStorage.clear()}) 

btnNode.addEventListener('click',shortNum);
btnNode.addEventListener('click', clearTable)
saveImg()
function useRequest (){
  fetch(` https://picsum.photos/v2/list?page=${+inputPageNode.value}&limit=${+inputlimitNode.value}`)
  .then((response) => { return response.json(); })
  .then((data) => {addResult(data)})
  .catch(() => {console.log("error")});
 }
 function saveImg() {
   if (localStorage.getItem('data')){
    let object = JSON.parse(localStorage.getItem('data'))
  for (let key in object){
    errLimitNode.setAttribute('hidden', 'true')
    listNode.insertAdjacentHTML("afterbegin",`<li><img src="${object[key].download_url}" alt="${object[key].author}"width="300" height="200" ></li>`)
  }}return
}

 function addResult (data){
  localStorage.setItem('data',JSON.stringify(data))
  for (let key in data){
   errLimitNode.setAttribute('hidden', 'true')
   listNode.insertAdjacentHTML("afterbegin",`<li><img src="${data[key].download_url}" alt="${data[key].author}"width="300" height="200" ></li>`)
  }   
}
function shortNum(){
  let myPromise = new Promise((resolve, reject) => {
    if (comCondlimit()&&comCondPage()){
      resolve()
    }else{
      reject()
    }
  })
  myPromise
.then (()=>{useRequest()})
.catch(()=>{resultCond()})
}


function comCondPage(){
  let result=true;
  if(1>inputPageNode.value||inputPageNode.value>10||isNaN(+inputPageNode.value))result=false
  if(!result){
  errLimitNode.removeAttribute("hidden")
  errLimitNode.innerHTML=`Номер страницы вне диапазона от 1 до 10`}
  return result
}
function comCondlimit (){
  let result=true;
  if(1>inputlimitNode.value||inputlimitNode.value>10||isNaN(+inputlimitNode.value)) result=false;
  if(!result){
  errLimitNode.removeAttribute("hidden")
  errLimitNode.innerHTML=`Лимит вне диапазона от 1 до 10`}
  return result
}
function resultCond(){
    let result=false;
  if(!comCondlimit ()&&!comCondPage()) result=true;
    if(result)
    errLimitNode.innerHTML=`Номер страницы и лимит вне диапазона от 1 до 10`
   return result
  }
  
function  clearTable (){
  let list=document.querySelectorAll('li')
  if (list.length==0){
    return
  }else{
    list.forEach((element)=>{
      listNode.removeChild(element)
    })
  }
}
