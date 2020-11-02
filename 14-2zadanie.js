let JsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`

let object = JSON.parse(JsonString)

let JsonStr = JSON.stringify(object)

console.log(object)
console.log(JsonStr)

