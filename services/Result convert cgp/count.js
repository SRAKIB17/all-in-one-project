
function count(id,value){
    const trimValue = value.trim()

    if(trimValue == ''){
        
    }
    else{
        const array = trimValue.split(',');

        getId(id).innerText = array.length;
        getId(id).style.display = 'block'
    }
    
}

getId('number').addEventListener('keyup',function(event){
    count('showCount-number',event.target.value)
    
})
getId('number').addEventListener('change',function(event){
    count('showCount-number',event.target.value)
    
})

getId('perSubjectCredit').addEventListener('keyup',function(event){
    count('showCount-perSubjectCredit',event.target.value)
    
})
getId('perSubjectCredit').addEventListener('change',function(event){
    count('showCount-perSubjectCredit',event.target.value)
    
})




function clearInput(id){
    getId(id).value = '';
    getId('showCount-'+id).innerText = ''
    getId('showCount-'+id).style.display = 'none'
}