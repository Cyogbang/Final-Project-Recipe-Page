function reg () {
    const clientNAME = document.getElementById("name");
    const clientPHONE = document.getElementById("phone");
    const clientMAIL = document.getElementById("mail");
    const errorMSG = document.querySelector(".error");
    const successMSG = document.getElementById("success");
    const cautionMSG = document.getElementById("caution");

    const inputNAME = clientNAME.value;
    const inputPHONE = clientPHONE.value;
    const inputMAIL = clientMAIL.value;

    if (inputNAME || inputPHONE || inputMAIL === "") {
        console.log("enter a value")
        errorMSG.style.display = "block";
    } else {
        console.log("registered")
        // errorMSG.style.display = "none"
        successMSG.style.display = "block";
        cautionMSG.style.display = "none";
    }
}

function search () {
    const SearchERROR = document.getElementById("SRerror");
    const searcher = document.getElementById("searching");
    const Afang = document.getElementById("Dish1");
    const CoconutRICE = document.getElementById("Dish2");
    const WhiteSOUP = document.getElementById("Dish3");
    const ChickenSTEW = document.getElementById("Dish4");
    const Coleslaw = document.getElementById("Dish5");
    // const recipe = document.querySelector(".recipes");

    const SR = searcher.value;
    const Dishes = [Afang, CoconutRICE, WhiteSOUP, ChickenSTEW, Coleslaw];

    // for (let x = 0; x <= recipe.length; x++) {
    //     console.log(x);
    //     const element = array[x];
        
        if (SR == "") {
            SearchERROR.style.display = "block";
        } else if (SR == "Afang" || "Afang Soup") {
            console.log(Dishes[0])
            Dishes[0]
        } else if (SR == "Coconut Rice") {
            console.log(Dishes[1])
            Dishes[1]
        } else if (SR == "White Soup") {
            console.log(Dishes[2])
            Dishes[2]
        } else if (SR == "Chicken Stew") {
            console.log(Dishes[3])
            Dishes[3]
        } else if (SR == "Coleslaw Salad" || "Coleslaw" || "Salad") {
            console.log(Dishes[4])
            Dishes[4]
        } else {
            SearchERROR.style.display = "block";
        }
    }
// }

function aDish () {
    let afang = document.getElementById("afang_dish");

    afang.style.display = "block";
}

function bDish () {
    let coconutRice = document.getElementById("coconutRice_dish");

    coconutRice.style.display = "block";
}

function cDish () {
    let whiteSoup = document.getElementById("whiteSoup_dish");

    whiteSoup.style.display = "block";
}

function dDish () {
    let chickenStew = document.getElementById("chickenStew_dish");

    chickenStew.style.display = "block";
}

function eDish () {
    let coleslaw = document.getElementById("coleslaw_dish");

    coleslaw.style.display = "block";
}