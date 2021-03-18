const students = [
    {
        firstName: "Loïc",
        lastName: "Greco",
        color:"#67D5B5"
    },
    {
        firstName: "Roxanne",
        lastName: "Guella",
        color: "#EE7785"
    },
    {
        firstName: "Max",
        lastName: "Lepan",
        color: "#C89EC4"
    },
    {
        firstName: "Nicolas",
        lastName: "Liegeon",
        color: "#84B1ED"
    },
    {
        firstName: "Arthur",
        lastName: "Monnet",
        color: "#EDE884"
    },
    {
        firstName: "Yohan",
        lastName: "Quinquis",
        color: "#f3bb74"
    },
]
const nbResult = document.querySelector("#nbResult")
const allResult = document.querySelector("#allResult");


students.forEach(student => {
    allResult.innerHTML += `<div class="case"><div class="circle" style="background-color: ${student.color}"></div><h4>${student.firstName} ${student.lastName.toUpperCase()}</h4></div>`
});
nbResult.innerHTML = `${students.length} résultats sur ${students.length} au total`



document.querySelector('#search').addEventListener('input', () => {
    allResult.innerHTML = ""
    let tmp=0
    students.forEach(student => {
        if ((student.firstName.toLowerCase().includes(document.querySelector("#search").value)) || (student.lastName.toLowerCase().includes(document.querySelector("#search").value))) {
            tmp++;
            allResult.innerHTML += `<div class="case"><div class="circle" style="background-color: ${student.color}"></div><h4>${student.firstName} ${student.lastName.toUpperCase()}</h4></div>`
        }
    })
    if (tmp===0){
        allResult.innerHTML = "<h4>Aucun résultat</h4>"
    }
    nbResult.innerHTML = `${tmp} résultats sur ${students.length} au total`
})