const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const button = document.querySelector("button")!;
const numres : Array<number>=[];
const stringresult:string[]=[];

type numorstring=number|string;
type Obj={val:number; time:Date}

function add(num1:numorstring, num2:numorstring) {
    if(typeof num1==="number" && typeof num2==="number"){
        return num1+num2
    }
    else if(typeof num1==="string"&&typeof num2==="string"){
        return num1 + " " + num2
    }
    else{
        return +num1 + +num2
    }
}
function printResult(object:Obj){
    console.log(object.val)
    }

button.addEventListener("click", () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(parseInt(num1), parseInt(num2));
    numres.push(result as number);
    const stringres=add(num1,num2);
    stringresult.push(stringres as string)
    console.log(numres)
    console.log(stringresult);
    printResult({val:result as number,time:new Date()})
})

const newPromise=new Promise<string>((resolve,reject)=>{
setTimeout(()=>{
    resolve("It worked")
},1000)
});

newPromise.then((Response)=>{
    console.log(Response.split("w"))
})