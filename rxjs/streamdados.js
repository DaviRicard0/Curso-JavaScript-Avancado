const gerarNumeros = () => {
    return {
        iniciar(fn, intervalo = 1000){
            let num = 0;
            const i = setInterval(()=>{
                fn(num++);
            },intervalo);

            return {
                parar(){
                    clearInterval(i);
                }
            }
        }
    }
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar(numero => {
    console.log(`#1 ${numero * 4}`)
},1000);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar(numero => {
    console.log(`#2 ${numero - 4}`)
},500);

setTimeout(()=>{
    exec1.parar();
    exec2.parar();
},10000)