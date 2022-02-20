document.getElementById('cel').addEventListener('keyup', function(event){
    const celValue = event.target.value
    document.getElementById('feh').value = (celValue * 9 + 160)/5
})
document.getElementById('feh').addEventListener('keyup',function(event){
    const fehValue = event.target.value
    document.getElementById('cel').value = ((fehValue-32)*5)/9
})
// cel to kelvin
document.getElementById('cel-kel').addEventListener('keyup', function(event){
    const celValue = event.target.value
    document.getElementById('kel').value = (parseFloat(celValue)+273);
})
document.getElementById('kel').addEventListener('keyup',function(event){
   
    const kelValue = event.target.value
    document.getElementById('cel-kel').value = (parseFloat(kelValue)-273);
})
// feh to kelvin
document.getElementById('fah-kel').addEventListener('keyup', function(event){
    const fahValue = event.target.value
    document.getElementById('kel-fah').value = (((parseFloat(fahValue) - 32)*5))/9 + 273;
})

document.getElementById('kel-fah').addEventListener('keyup',function(event){
   
    const kelValue = event.target.value
    document.getElementById('fah-kel').value = ((parseFloat(kelValue)-273)*9)/5 + 32;
})