let button = document.querySelector(".btn");
let inputfield = document.getElementById("inputfield")
let result = document.getElementById("result")
button.addEventListener("click", () => {
    let birthdate = new Date(inputfield.value)
    let bday = birthdate.getDate();
    let bmonth = birthdate.getMonth() + 1;
    let byear = birthdate.getFullYear();
    let today = new Date();
    let tday = today.getDate();
    let tmonth = today.getMonth() + 1;
    let tyear = today.getFullYear();
    let ageMonth, agedate, ageyear;
    ageyear = tyear - byear;
    if (tmonth >= bmonth) {

        ageMonth = tmonth - bmonth;
    } else {
        ageyear--;
        ageMonth = 12 + tmonth - bmonth;
    }
    if (tday >= bday) {

        agedate = tday - bday;

    }
    result.innerHTML = `you are ${ageyear} years ${ageMonth} Months and ${agedate} Old`;
    console.log("You are  :" + ageyear + "Year," + ageMonth + " months and " + agedate + "Days Old :")
}
);
