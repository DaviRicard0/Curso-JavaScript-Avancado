//callback
/*setTimeout(() => {
    console.log("Exec callback....")

    setTimeout(() => {
        console.log("Exec callback....")

        setTimeout(() => {
            console.log("Exec callback....");
        },2000);
    }, 2000);
}, 2000);*/

//promise

const esperarPor = (tempo = 2000) => {
    console.log("Exec...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Fim');
        },tempo);
    });
};

esperarPor()
    .then(()=>esperarPor())
    .then(esperarPor);