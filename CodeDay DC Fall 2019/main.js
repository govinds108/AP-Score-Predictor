myStorage = window.localStorage; 
function getFormVal(){
    var className = document.getElementById("class").value;
    var gender = document.getElementById("gender").value;
    console.log("2");
    var race = document.getElementById("race").value;
    console.log("1");
    var grade = document.getElementById("grade").value;
    var state = document.getElementById("state").value;

    localStorage.setItem("gender", gender);
    localStorage.setItem("class", className);
    localStorage.setItem("race", race);
    localStorage.setItem("grade", grade);
    localStorage.setItem("state", state);
    console.log(localStorage.getItem('state'));

}