const myPromise = new Promise((resolve, reject) =>{
setTimeout(() => { let result=Math.round(Math.random()*100 )
  if (result%2===0){
  resolve(result)
}else{
  reject(result)}
},3000)})

myPromise
.then((result) => {
  console.log(`Завершено успешно. Сгенерированное число —  ${result}`);
})
.catch((error) => {
  console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
})



