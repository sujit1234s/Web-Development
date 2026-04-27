
var a = 0
 while(a<5)
 {
    console.log(a)
    a++
 }

 var a = 0
 while(a<5)
 {
    console.log(a)
    a--
 }

for (var a =0;a<5;a++)
{
    console.log("Hello")
}

var a = 10
var b = '10'

if(a===b){
    console.log("Sahi Hai")
}
else{
    console.log("Galat hai")
}

function hey()
{
    console.log("Good Morning")
}
hey()

function sing()
{
    console.log("Main hu Giann")
}

function dance()
{
    console.log("Dance krado")
}

sing()
dance()
hey()

function abc()
{
    console.log("Hello")
    return 20
}

var a= abc()

console.log(a)

var abc = function(){
    console.log("hELLO")
}
abc()

var abc = () =>{
    console.log("Hello")
}

abc()
  
const groom = "Selmon"
const bride = "Kat"

console.log(groom ,"Weds" ,bride)

var a = [10,20,30,40]

console.log(a)

var a=[10,'sujit',6.66,true]
console.log(a)

var a=[10,20,30,40]
//.     0  1  2  3
console.log(arr[5])

a.push(99)
console.log(a)

a.pop(10)
console.log(a)

console.log(a.length)

function abc(a){
    console.log("hello")

}

abc(10)

var a=[10,20,30]

a.foreach(function(elem){

    console.log("Heelo",elem)
})

//() = Funtion()
//{} = object

var obj = {
    user:'harsh',
    age:20
}

console.log(obj.age)

 var obj1 = {
    user:'yogesh',
    age:21
}

console.log(obj1.age)

var obj2 = {
    user:'Sujit',
    age:22
}

console.log(obj2.age)
 
var user = {
    user:'sujit',
    age:69,
    greet : function(){
        console.log("Good Morning") 
        return 10
    }

}

console.log(user.greet())

var arr = [
    {name:"sujit",age:69},
    {name:"Yogesh",age:72}

]

console.log(arr[1].name)

//DOM - Document Object Model

//4 Pillars of DOM
//selection of an Element
//Changing HTML
//Changing CSS
//Event Listener

var h1 = document.querySelector('h1')
console.log(h1)


var a = document.querySelector("h1")
a.innerHTML = "Changed"

h1.style.color = "royalblue"
h1.style.backgroundColor = "black"

document.querySelector("h1")
h1.addEventListener("click",function(){
    console.log("hELLO")
})