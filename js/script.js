let result = document.getElementById("result");
let input = document.getElementById("input");
let names = document.getElementById("names");
let divResult = document.getElementById("divResult");
let mainContainer = document.getElementById("mainContainer");
let resultContainer = document.getElementById("resultContainer");
let errorName = document.getElementById("errorName");
let errorP = document.getElementById("errorP");
let buttonAddName = document.getElementById("buttonAddName");

onload = function () {
    let dadoName = localStorage.getItem("valor");
    let dado = JSON.parse(dadoName);

    names.innerHTML = dado;

    let removeButton = document.getElementsByClassName("buttonRemoveName");
    for (let rB of removeButton) {
        rB.addEventListener("click", removeName);
    }
};

function addName() {
    let valor = input.value;

    if (valor === "" || valor === " ") {
        errorName.style.opacity = "100%";
        errorName.style.visibility = "visible";
    } else {
        names.innerHTML = "<div class='nameCFG'><p class='nameP'></p><button class='buttonRemoveName'>REMOVER</button></div>" + names.innerHTML;

        let nameP = document.getElementsByClassName("nameP")[0];
        nameP.innerHTML = input.value;

        input.value = " ";

        errorName.style.visibility = "hidden";
        errorName.style.opacity = "0%";
        errorP.style.opacity = "0%";
        errorP.style.visibility = "hidden";

        valor = JSON.stringify(names.innerHTML);
        localStorage.setItem("valor", valor);
    }

    buttonAddName.addEventListener("click", onload());
}

function removeName() {
    let buttonRemove = this;
    let remove = buttonRemove.parentElement;
    remove.remove();

    valor = JSON.stringify(names.innerHTML);
    localStorage.setItem("valor", valor);
}

let nameP = document.getElementsByClassName("nameP");

function sorteio() {
    let valorName = names.innerHTML;

    if (valorName === "" || valorName === " ") {
        errorName.style.opacity = "100%";
        errorName.style.visibility = "visible";
    } else if (names.children.length < 2) {
        errorP.style.opacity = "100%";
        errorP.style.visibility = "visible";
    } else {
        let numP = nameP.length;
        let numS = Math.floor(Math.random() * numP);
        result.innerHTML = nameP[numS].innerHTML;

        divResult.style.opacity = "100%";
        divResult.style.visibility = "visible";
        mainContainer.style.filter = "blur(5px)";

        let divSize = window.getComputedStyle(mainContainer, null).getPropertyValue("height");
        resultContainer.style.height = divSize;

        errorName.style.visibility = "hidden";
        errorName.style.opacity = "0%";
        errorP.style.opacity = "0%";
        errorP.style.visibility = "hidden";
    }
}

function buttonBack() {
    divResult.style.opacity = "0%";
    divResult.style.visibility = "hidden";
    mainContainer.style.filter = "none";
}
