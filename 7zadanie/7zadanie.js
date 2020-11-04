let listNode=document.querySelector('.list')
let inputNode=document.querySelector('.input')
let btnNode=document.querySelector('.btn')
let errNode=document.querySelector('.error')
btnNode.addEventListener('click',useRequest)

function useRequest (){
  fetch(`https://jsonplaceholder.typicode.com/users/${+inputNode.value}/todos`)
  .then((response) => { return response.json(); })
  .then((data) => {addNode(data)})
  .catch(() => {console.log("error")});
 }

 function addNode (data){
   if (data.length==0){
     errNode.innerHTML=`<div>«Пользователь с указанным id не найден»</div>`
     errNode.removeAttribute("hidden")
   }else{
  console.log("2")
        for (let key in data){
        errNode.setAttribute('hidden', 'true')
        data[key].completed==true?
        listNode.insertAdjacentHTML("afterbegin",`<li>${data[key].title}</li>`):
        listNode.insertAdjacentHTML("afterbegin",`<li><strike>${data[key].title}</strike></li>`)
      }
    }
  }
  

