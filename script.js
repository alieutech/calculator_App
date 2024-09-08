const btn1 = document.getElementById("btn")
const birthday = document.getElementById("birthday")
const result = document.getElementById("result")

function calculateAge() {
    const birthdayValue = birthday.value; 
    if(birthdayValue === "") {
        alert("please enter your bith date. Thank you");
    }else {
        const age = getAge(birthdayValue);
        result.innerText = `You are ${age} ${age > 1 ? "years" :"years"} old. `
    }

    function getAge(birthdayValue) {
        const birthdayDate = new Date(birthdayValue);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const month = currentDate.getMonth() - birthdayDate.getMonth();
        if (month < 0 || month === 0 && currentDate.getDate() < birthdayDate.getDate()) {
            age--;
        }
        return age;
    }

 }
 btn1.addEventListener("click", calculateAge);