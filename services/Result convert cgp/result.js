
function getId(id){
    return document.getElementById(id);
}
var totalEarnedPoint = 0;
var avgCgpa = 0;
var totalCredit = 0;
function processingData(){
    const number = getId('number').value;
    const subjectCredit = getId('perSubjectCredit').value;
    // Array declare 
    let numberArray= []
    let subjectCreditArray = []
    // create array for result
    // for grade 
    let subCreditList = [];
    //cgpa A+ added
    let cgpaCountList = []; 
    //cgpa point
    let cgpaPoint = []; 
    //cgpa * per subject
    let earnedPoint = []; 
   
    
    if ((number == ''|| number == ' ')||(subjectCredit == '' || subjectCredit == ' ')){
        getId('errorMsg').innerText = "Something is wrong";
    }
    else{
        numberArray = number.split(',');
        subjectCreditArray = subjectCredit.split(',');
        createResult(numberArray,cgpaCountList,cgpaPoint)
    
        earnedPointCalc(cgpaPoint,subjectCreditArray,subCreditList,earnedPoint,avgCgpa);

        avgCgpa = totalEarnedPoint / Number(totalCredit);
        
        resultDataTable(avgCgpa,numberArray,subCreditList,earnedPoint,cgpaCountList,cgpaPoint)
    }
    
    
}


// create result 
function createResult(numberArray,cgpaCountList,cgpaPoint){
    
    for (const intNumber of numberArray) {
        let numberConvertInt = Number(intNumber);
        // numberList.push(numberConvertInt);
        // condition apply cgpa and point
    
        if (numberConvertInt >= 80) {
            
            cgpaCountList.push('A+');
            cgpaPoint.push(4.00);
        }
        else if (numberConvertInt >= 75) {
            
            cgpaCountList.push('A');
            cgpaPoint.push(3.75);
        }
        else if (numberConvertInt >= 70) {
            
            cgpaCountList.push('A-');
            cgpaPoint.push(3.50);
        }
        else if (numberConvertInt >= 65) {
            
            cgpaCountList.push('B+');
            cgpaPoint.push(3.25);
        }
        else if (numberConvertInt >= 60) {
            
            cgpaCountList.push('B');
            cgpaPoint.push(3.00);
        }
        else if (numberConvertInt >= 55) {
            
            cgpaCountList.push('B-');
            cgpaPoint.push(2.75);
        }
        else if (numberConvertInt >= 50) {
            
            cgpaCountList.push('C+');
            cgpaPoint.push(2.50);
        }
        else if (numberConvertInt >= 45) {
            
            cgpaCountList.push('C');
            cgpaPoint.push(2.25);
        }
        else if (numberConvertInt >= 40) {
            
            cgpaCountList.push('D');
            cgpaPoint.push(2.00);
        }
        else if (numberConvertInt < 40) {
            cgpaCountList.push('F');
            cgpaPoint.push(0.00);
        }
    }
    return cgpaCountList , cgpaPoint;
}
// earnedPoint calculator 
function earnedPointCalc(cgpaPoint,subjectCreditArray,subCreditList,earnedPoint){
    
    for (let index = 0; index < cgpaPoint.length; index++){
        const cgpa = cgpaPoint[index];
        const subCredit = Number(subjectCreditArray[index]); //convert credit 
        subCreditList.push(subCredit);
        let perSubjectEarnPoint = cgpa*subCredit;
        earnedPoint.push(perSubjectEarnPoint);
        totalEarnedPoint += perSubjectEarnPoint;
        totalCredit += subCredit;
       
    }
}
// tableData show result 
function resultDataTable(avgCgpa,numberArray,subCreditList,earnedPoint,cgpaCountList,cgpaPoint){
    // tableData decorate
    let tr = ''
    let i = 0;
    while (i <cgpaPoint.length) {
        let creditEror = ''
        let earnedPointEror = ''
        if (Number.isNaN(subCreditList[i])) {
            creditEror = 'Invalid';
            earnedPointEror = 'Invalid';
            cgpaEror = "Invalid";
        }
        else {
            creditEror = subCreditList[i];
            earnedPointEror = earnedPoint[i];
            cgpaEror = avgCgpa.toFixed(2);
        }

        if (i==0) {
            tr += '<tr><td>'+(i+1)+'</td><td>'+numberArray[i]+'</td><td>'+creditEror+'</td><td>'+cgpaCountList[i]+'</td><td>'+cgpaPoint[i]+'</td><td>'+earnedPointEror+'</td><td height="'+25*cgpaPoint.length+'px;" rowspan="'+cgpaPoint.length+'"><div class="avgCgpa">'+avgCgpa.toFixed(2);+'</div><td></tr>'
        }
        else{
            tr += '<tr><td>'+(i+1)+'</td><td>'+numberArray[i]+'</td><td>'+creditEror+'</td><td>'+cgpaCountList[i]+'</td><td>'+cgpaPoint[i]+'</td><td>'+ earnedPointEror+'</td></tr>'
        }
        i++
    }
    getId('resultData').innerHTML = tr;
    
}
// result data
 
function tableData() {
    processingData()
}
