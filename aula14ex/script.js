function contador(){
    let inicio = document.getElementById('txtnumi')
    let fim = document.getElementById('txtnumf')
    let passo = document.getElementById('txtnump')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
    } else{
        // CONTAGEM DECRESCENTE
        for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
        }
    }
}
