function greet() {
    var name = prompt("What is your name?");

    if (name) {
        alert("Hello, " + name + "!");
    } else {
        alert("Hello!");
    }

    var age = prompt("How old are you?");
    age = parseInt(age);

    confirmBirthday = confirm("Have you had a birthday yet this year?");
    currentYear = new Date().getFullYear();

    if (confirmBirthday == true) {
        console.log(birthYear = currentYear - age);
        alert("You were born in " + birthYear + ".");
    } else {
        console.log(birthYear = currentYear - age - 1);
        alert("You were born in " + birthYear + ".");
    }
}