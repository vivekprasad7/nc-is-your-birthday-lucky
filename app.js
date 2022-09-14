const dateDigits = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");

const msg = document.querySelector("#msg");


function checkLuck(sum, luckyDigit){
    if(sum % luckyDigit === 0)
    {
        msg.innerText = "Your birth date is lucky."
    } else {
        msg.innerText = "Your birth date is not lucky."
    }
 
};

function checkBirthdateIsLucky(){
    const dob = dateDigits.value;
    const luckyDigit = luckyNumber.value;
    const sum = calculateSum(dob);

    if(sum && dob){
        checkLuck(sum, luckyDigit)
    }else {
        msg.innerText = "Please enter both the values.";
    }
    

};


function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum= 0;
    for(let i =0; i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkBtn.addEventListener('click', checkBirthdateIsLucky);


