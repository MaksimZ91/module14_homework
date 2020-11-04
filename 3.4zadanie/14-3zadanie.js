const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const selNode = document.querySelector('.select');
const alerNode = document.querySelector('.year');
const linkNode = document.querySelector('.link');
const tableNode= document.querySelector('.table')
const tableRow = tableNode.querySelector('.row')
btnNode.addEventListener('click', () => {
  selNode.value !=0 ? 
    useRequest('https://raw.githubusercontent.com/MaksimZ91/module14_homework/master/3.4zadanie/revenue.json', addResult) :  
    alert("Год не выбран.");
  })
  
 
 selNode.addEventListener('change', () => {
  selNode.value!=0?
  alerNode.setAttribute('hidden','true'):
  alerNode.removeAttribute('hidden')
}) 


function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

 xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};

function addResult (apiData){
  tableNode.removeAttribute('hidden')
  let row=""
  let link=""
    for (let key in apiData){
      if (key===selNode.value){
        let linkk =`<p><a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'],datasets:[{label:'Выручка за ${key} год',data:[${apiData[key].q1},${apiData[key].q2},${apiData[key].q3},${apiData[key].q4}]}]}}">Открыть график</a></p>`
        let rows=`<th>${apiData[key].q1}</th>
                  <th>${apiData[key].q2}</th>
                  <th>${apiData[key].q3}</th>
                  <th>${apiData[key].q4}</th>`
    row=row+rows    
    link=link+linkk          
    }
  }
  tableRow.innerHTML=row
  linkNode.innerHTML=link;
}

                       


           

     
