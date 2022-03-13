function calcBmi(){
    document.getElementById('text').innerHTML=''
let h=document.getElementById('height').value;
let w=document.getElementById('weight').value;
if(document.querySelector('#box input').value.length===0){
    alert("please enter a valid details")
}
let bmi=w/(h/100*h/100);
let bmiout=(bmi.toFixed(2));

document.getElementById('result').innerHTML='Your BMI is '+ bmiout;

}