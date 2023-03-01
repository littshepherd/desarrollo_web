console.log('hola')
console.log(Math.random())
console.log(2*'20')

let imprimir  = ()=> {
  console.log("this is an arrow function")
}

let saludoPersonalizado = nombre => console.log("Biendvenido "+nombre.toUpperCase())

let setPerson = (firsName,lastName,age)=> {
  return {
    name: firsName,
    last: lastName,
    age: age
  }
}
imprimir()
saludoPersonalizado("julian")
console.log(setPerson("Julian","Berrio",20))