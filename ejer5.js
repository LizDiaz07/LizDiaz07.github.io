
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];


function showPeople() {
    document.getElementById("people-array").innerText = "People: " + people.join(", ");
}

function removeDani() {
    people = people.filter(person => person !== "Dani");
    document.getElementById("result").innerText = "Dani removed. People: " + people.join(", ");
}


function removeJuan() {
    people = people.filter(person => person !== "Juan");
    document.getElementById("result").innerText = "Juan removed. People: " + people.join(", ");
}

function moveLuisToFront() {
    let luisIndex = people.indexOf("Luis");
    if (luisIndex !== -1) {
        let luis = people.splice(luisIndex, 1)[0];
        people.unshift(luis);
        document.getElementById("result").innerText = "Luis moved to front. People: " + people.join(", ");
    }
}


function addName(name) {
    people.push(name);
    document.getElementById("result").innerText = name + " added. People: " + people.join(", ");
}


function logMariaThenBreak() {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            document.getElementById("result").innerText = "Found Maria, exiting loop.";
            break;
        }
    }
}


function findMariaIndex() {
    let mariaIndex = people.indexOf("Maria");
    document.getElementById("result").innerText = "'Maria' is at index: " + mariaIndex;
}
