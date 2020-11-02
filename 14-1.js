
const parser = new DOMParser();

const xmlString =`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const student = xmlDOM.querySelectorAll("student")

let stud=[];


student.forEach((element,index)=>{
    const name = student[index].querySelector("name");
    const first = student[index].querySelector("first");
    const second = student[index].querySelector("second");
    const age = student[index].querySelector("age");
    const prof = student[index].querySelector("prof");
    const langAttr = name.getAttribute('lang');

    let result = {
        name: first.textContent + " " + second.textContent,
        age:Number(age.textContent),
        prof:prof.textContent,
        lang:langAttr
    }
    stud.push(result)

})
console.log(stud);


