//for secetion 
const millChargeF = document.getElementById('millChargeF')
const millChargeH = document.getElementById('millChargeH')
const ansF = document.getElementById('ansF')
const ansH = document.getElementById('ansH')
const totalResult = document.getElementById('totalResult')
const finalAns = document.getElementById('finalAns')
const resultBtn = document.getElementById('resultBtn')
const submit = document.getElementById('submit')
//for guest
const millChargeGF = document.getElementById('millChargeGF')
const millChargeGH = document.getElementById('millChargeGH')
const ansGF = document.getElementById('ansGF')
const ansGH = document.getElementById('ansGH')
const extra = document.getElementById('extra')

const paidAmount = document.getElementById('paidAmount')
const againShowResult = document.getElementById('againShowResult')
const finalResult = document.getElementById('finalResult')





  // for full~~~~~~~~~~~~~~~~~~~
  document.querySelector('#forFull').onchange = function () {

    const rangeFull = document.querySelector('#rangeFull').value
    const showValue = document.querySelector('#showValue')
    showValue.innerHTML = `${rangeFull}`

    ansF.value = Number(rangeFull) * Number(millChargeF.value)
    ansF.innerHTML = ansF.value

}


// for houf~~~~~~~~~~~~~~~~~~~~~~
document.querySelector('#forH').onchange = function () {

    const rangeH = document.querySelector('#rangeH').value
    const showV = document.querySelector('#showV')

    showV.innerHTML = `${rangeH}`
    ansH.value = Number(rangeH) * Number(millChargeH.value)
    ansH.innerHTML = ansH.value
}
//THIS IS FOR GUEST

// for gest full~~~~~~~~~~~~~~~~~~~
document.querySelector('#forGFull').onchange = function () {

    const rangeGFull = document.querySelector('#rangeGFull').value
    const showGValue = document.querySelector('#showGValue')
    showGValue.innerHTML = `${rangeGFull}`

    ansGF.value = Number(rangeGFull) * Number(millChargeGF.value)
    ansGF.innerHTML = ansGF.value

}


// for geust houf~~~~~~~~~~~~~~~~~~~~~~
document.querySelector('#forGH').onchange = function () {

    const rangeGH = document.querySelector('#rangeGH').value
    const showGV = document.querySelector('#showGV')

    showGV.innerHTML = `${rangeGH}`
    ansGH.value = Number(rangeGH) * Number(millChargeGH.value)
    ansGH.innerHTML = ansGH.value
}



function full() {

    totalResult.value = ansF.value + ansH.value + ansGH.value + ansGF.value + Number(extra.value)

    againShowResult.value = totalResult.value


}


submit.addEventListener('click', function (e) {
    e.preventDefault()
    full()
})

resultBtn.addEventListener('click',function(){
    finalAns.value = paidAmount.value- againShowResult.value
    document.getElementById('checkMoney').innerHTML =`Your balance is: ${finalAns.value}`
})




// calculation section for full mil