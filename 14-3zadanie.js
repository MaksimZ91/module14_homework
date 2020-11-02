const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const selNode = document.querySelector('.select');
const alerNode = document.querySelector('.year');
btnNode.addEventListener('click', () => {
  selNode.value !=0 ? 
    useRequest('https://raw.githubusercontent.com/boogi92/deb/master/revenue.json', addResult) :  
    alert("Год не выбран.");
  })
 selNode.addEventListener('change', () => {selNode.value!=0?alerNode.setAttribute('hidden','true'):alerNode.removeAttribute('hidden')}) 

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
    let result=""
    for (let key in apiData){
        if (key===selNode.value){
            let resultt = `<table border="1">
<tr>
    <th>1кВ</th>
    <th>2кВ</th>
    <th>3кВ</th>
    <th>4кВ</th>
</tr>
    <tr>
        <th>${apiData[key].q1}</th>
        <th>${apiData[key].q2}</th>
        <th>${apiData[key].q3}</th>
        <th>${apiData[key].q4}</th>
    </tr>
</table>`;

            result = result + resultt
        }

    }
    resultNode.innerHTML = result;
}



