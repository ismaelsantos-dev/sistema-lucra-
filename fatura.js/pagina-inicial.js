
const myButton = document.getElementById("btn-salvar");




const precoDeCusto =()=>{
   
    const inputCusto = document.getElementById("custo").value
    const precoCusto = document.getElementById("total-investido");

    precoFormatado = parseFloat(inputCusto.replace(',', '.'))

    if(!isNaN(precoFormatado)){
        precoCusto.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
        }).format(precoFormatado)
    }
}

const precoVenda =()=>{
    const paragraph = document.getElementById("lucro-acumulado");
    const inputVenda = document.getElementById("preço-venda").value


    const precoVendaFormatado = parseFloat(inputVenda.replace(",","."))

    if(!isNaN(precoVendaFormatado)){
        paragraph.innerHTML = new Intl.NumberFormat("pt-br",{
            style:"currency",
            currency:"BRL"
        }).format(precoVendaFormatado)
    }
}

const lucroECusto =()=>{
    // pegamos os valores dos dois inputs

     const inputCusto = document.getElementById("custo").value
      const inputVenda = document.getElementById("preço-venda").value

      // paragrafos//

       const precoCusto = document.getElementById("total-investido");
       const paragraph = document.getElementById("lucro-acumulado");

       // formatação em parsefloat //

        const precoFormatado = parseFloat(inputCusto.replace(',', '.'))
            const precoVendaFormatado = parseFloat(inputVenda.replace(",","."))

            // formatador de moedas//
            
            const cifrao = new Intl.NumberFormat("pt-br", {
                style:"currency",
                currency:"BRL"
            })
   
            // deixando contra NaN

            if(!isNaN( precoFormatado) && !isNaN(precoVendaFormatado)){

                const lucroReal =   precoVendaFormatado-precoFormatado

 // ligando aos seus paragrafos  e ligando as suas variaveis //

       precoCusto.innerHTML =`${cifrao.format(precoFormatado)}`;

       paragraph.innerHTML =`${cifrao.format(lucroReal)}`;
       }
    else{
        alert("somente numeros válidos");

    }
            

}

const validades = () =>{
    
// pegando a descrição do produto //

 const descricaoDosProdutos = document.querySelector("#produtos").value

 // pegando as validades dos produtos //

 const valorDasValidades = document.querySelector("#validade").value
    

}


myButton.addEventListener("click",lucroECusto)



myButton.addEventListener("click",()=>{
    precoDeCusto()
    precoVenda()
})
