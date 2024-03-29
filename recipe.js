const clientNAME = document.getElementById("name");
const clientPHONE = document.getElementById("phone");
const clientMAIL = document.getElementById("mail");
const errorMSG = document.querySelector(".error");
const successMSG = document.getElementById("success");
const cautionMSG = document.getElementById("caution");

function reg () {

    console.log(clientNAME.value);
    console.log(clientMAIL.value);
    console.log(errorMSG.value);
    console.log(successMSG.value);
    console.log(clientPHONE.value);
    console.log("click");

    if (clientNAME.value == "" || clientPHONE.value == "" || clientMAIL.value == "") {
        console.log("enter a value")
        errorMSG.style.display = "block";
    } else {
        console.log("registered")
        // errorMSG.style.display = "none"
        successMSG.style.display = "block";
        cautionMSG.style.display = "none";

        errorMSG.style.display = "none"
    }
}

function search () {
    const SearchERROR = document.getElementById("SRerror");
    const searcher = document.getElementById("searching");
    const Afang = document.getElementById("afang_dish");
    const CoconutRICE = document.getElementById("coconutRice_dish");
    const WhiteSOUP = document.getElementById("whiteSoup_dish");
    const ChickenSTEW = document.getElementById("chickenStew_dish");
    const Coleslaw = document.getElementById("coleslaw_dish");

    // console.log(SearchERROR.value)
    // // console.log(searcher.value)
    // console.log(Afang.value)
    // console.log(CoconutRICE.value)
    // console.log(WhiteSOUP.value)
    // console.log(ChickenSTEW.value)
    // console.log(Coleslaw.value)

    if (searcher.value == "") {
        console.log("empty");
        SearchERROR.style.display = "block"
    } else if (searcher.value == "Coconut rice" || searcher.value == "Coconut Rice" || searcher.value == "coconut rice") {
        console.log("coconut Rice")
        SearchERROR.style.display = "none";
        CoconutRICE.style.display = "block";
        ChickenSTEW.style.display = "none";
        WhiteSOUP.style.display = "none";
        Coleslaw.style.display = "none";
        Afang.style.display = "none";                  
    } else if (searcher.value == "Chicken stew" || searcher.value == "Chicken Stew" || searcher.value == "chicken stew" || searcher.value == "Stew") {
        console.log("stew");
        SearchERROR.style.display = "none";
        ChickenSTEW.style.display = "block";
        WhiteSOUP.style.display = "none";
        Coleslaw.style.display = "none";
        Afang.style.display = "none";
        CoconutRICE.style.display = "none"; 
    } else if (searcher.value == "White soup" || searcher.value == "White Soup" || searcher.value == "white soup") {
        console.log("White Soup");
        SearchERROR.style.display = "none";
        WhiteSOUP.style.display = "block";
        Coleslaw.style.display = "none";
        Afang.style.display = "none";
        CoconutRICE.style.display = "none";
        ChickenSTEW.style.display = "none";
    } else if (searcher.value == "Coleslaw salad" || searcher.value == "Coleslaw Salad" || searcher.value == "coleslaw salad" || searcher.value == "Salad") {
        console.log("salad");
        SearchERROR.style.display = "none";
        Coleslaw.style.display = "block";
        Afang.style.display = "none";
        CoconutRICE.style.display = "none";
        ChickenSTEW.style.display = "none"
        WhiteSOUP.style.display = "none";
    } else if (searcher.value == "Afang soup" || searcher.value == "Afang Soup" || searcher.value == "afang soup" || searcher.value == "Afang") {
        console.log("Soup");
        SearchERROR.style.display = "none";
        Afang.style.display = "block";
        CoconutRICE.style.display = "none";
        ChickenSTEW.style.display = "none"
        WhiteSOUP.style.display = "none";
        Coleslaw.style.display = "none";
    } else {
        SearchERROR.style.display = "block";
        Afang.style.display = "none";
        CoconutRICE.style.display = "none";
        ChickenSTEW.style.display = "none"
        WhiteSOUP.style.display = "none";
        Coleslaw.style.display = "none";
    }
}
    
    // const recipe = document.querySelector(".recipes");

    // const SR = searcher.value;
    // const Dishes = [Afang, CoconutRICE, WhiteSOUP, ChickenSTEW, Coleslaw];

    // // for (let x = 0; x <= recipe.length; x++) {
    // //     console.log(x);
    // //     const element = array[x];
        
    //     if (SR == "") {
    //         SearchERROR.style.display = "block";
    //     } else if (SR == "Afang" || "Afang Soup") {
    //         console.log(Dishes[0])
    //         Dishes[0]
    //     } else if (SR == "Coconut Rice") {
    //         console.log(Dishes[1])
    //         Dishes[1]
    //     } else if (SR == "White Soup") {
    //         console.log(Dishes[2])
    //         Dishes[2]
    //     } else if (SR == "Chicken Stew") {
    //         console.log(Dishes[3])
    //         Dishes[3]
    //     } else if (SR == "Coleslaw Salad" || "Coleslaw" || "Salad") {
    //         console.log(Dishes[4])
    //         Dishes[4]
    //     } else {
    //         SearchERROR.style.display = "block";
    //     }
    // }


function aDish () {
    const afang = document.getElementById("afang_dish");

    afang.style.display = "block";
}

// console.log(afang)
// console.log(afang.style.display)

// if (afang.style.display === 'block') {
//     console.log("no image");
// } else {
//     console.log("dish");
// }

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