 const clear = document.querySelector('.clear')
 clear.addEventListener('click',() => {localStorage.clear()}) 
 let name=""
 let date= ""
 if (localStorage.getItem('myName')){
      alert(`«Добрый день, ${localStorage.getItem('myName')}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('date')}»`)
      date=new Date()
      localStorage.setItem('date',date.toLocaleString())
 }else{
    name=prompt(`«Добро пожаловать! Назовите, пожалуйста, ваше имя ${name}»` )
    date=new Date()
    localStorage.setItem('myName',name)
    localStorage.setItem('date',date.toLocaleString())
         }

