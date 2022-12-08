/**************************************************************************/
//Nullish Coalescing Operator

const test = null;
document.body.innerHTML = `Sua idade é: ${(test ?? "Não informado")}`;
/**************************************************************************/

/**************************************************************************/
//Object

const user = {
    name: "Davi",
    age: 20,
    address: {
        street: "Rua UM"
    }
}

document.body.innerHTML = ("name" in user);
document.body.innerHTML = Object.keys(user);
document.body.innerHTML = Object.values(user);
document.body.innerHTML = JSON.stringify(Object.values(user));
document.body.innerHTML = JSON.stringify(Object.entries(user));

/**************************************************************************/
//Destructuring
const { address,age: idade, fullname = "Maria Oliveira" } = user;
document.body.innerHTML = JSON.stringify({address , idade, fullname});

function showAge({age}) {
    return age;
}
document.body.innerHTML = showAge(user);
/**************************************************************************/

/**************************************************************************/
//Rest operator

//const {name,age,...rest} = user;
//document.body.innerHTML = JSON.stringify(rest);

const array = ["Olivia",2,{name:"Maria"},8];

const [firstName,number,...rest] = array;

document.body.innerHTML = JSON.stringify({firstName,number,rest});
/**************************************************************************/

/**************************************************************************/
//Short syntax

const name = "Davi";
const age = 21;

const person = {
    name,
    age
};

document.body.innerHTML = JSON.stringify(person);
/**************************************************************************/

/**************************************************************************/
//Optional Chaining

const newUser = {
    name: "Davi",
    age: 20,
    address: {
        street: "Rua UM",
        showStreet(){
            return this.street;
        }
    }
}

//document.body.innerHTML = newUser.address?.number ?? "Número não informado";
document.body.innerHTML = newUser.address?.showStreet?.();
/**************************************************************************/

/**************************************************************************/
//Methods of array
const Array = [1,4,12,3,5];

document.body.innerHTML = "";
/*for (const i of Array) {
    document.body.innerHTML += i;
}*/

/*Array.forEach(i => {
    document.body.innerHTML += i;
});*/

//document.body.innerHTML = JSON.stringify(Array.map(item => item * 2));

//document.body.innerHTML = JSON.stringify(Array.filter(item => item % 2 === 0));

//const AllItemsAreNumbers = Array.every(item => typeof item === "number");
//document.body.innerHTML = JSON.stringify(AllItemsAreNumbers);

/*const sum = Array.reduce((acc, el)=>{
    return acc + el
},10);

document.body.innerHTML = sum;*/

/**************************************************************************/

/**************************************************************************/
//Template Literal

const newName = "Davi";
const menssage = `Hello ${newName}`;

document.body.innerHTML = menssage;
/**************************************************************************/

/**************************************************************************/
document.body.innerHTML = "";
//Promisse
/*const sumTwoNumber = (a,b) => new Promise(result => {
    setTimeout(()=>{
        result(a,b)
    },5000);
})
sumTwoNumber(10,1000).then(result => document.body.innerHTML = result);*/

/*fetch("https://api.github.com/users/DaviRicard0")
    .then(response=>response.json())
    .then(console.log)
    .catch(console.log)
    .finally(()=>console.log("End!")) */  

async function searchGithubUser() {
    try {
        const response = await fetch("https://api.github.com/users/DaviRicard0");
        return await response.json();
    } catch (error) {
        console.log(error)
    }finally{
        console.log("End!")
    }
    
}
searchGithubUser().then(response => console.log(response["login"]));
/**************************************************************************/