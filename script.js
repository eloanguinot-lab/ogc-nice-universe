// =============================
// OGC NICE UNIVERSE - SCRIPT
// =============================



// Bouton accueil

function allerHistoire(){

    document
    .getElementById("histoire")
    .scrollIntoView({
        behavior:"smooth"
    });

}







// =============================
// QUIZ OGC NICE
// =============================


let scoreNice = 0;



function quizNice(){


scoreNice = 0;



let q1 = prompt(
"En quelle année l'OGC Nice a-t-il été créé ?\n\n1 - 1904\n2 - 1920\n3 - 1950"
);



if(q1 === "1"){

scoreNice++;

alert("Bonne réponse 🔥");

}

else{

alert("Raté 😅 La réponse était 1904");

}





let q2 = prompt(

"Combien de titres de Champion de France possède l'OGC Nice ?\n\n1 - 2\n2 - 4\n3 - 6"

);



if(q2 === "2"){

scoreNice++;

alert("Exact 🔴⚫");

}

else{

alert("Raté 😅 C'est 4 titres");

}





let q3 = prompt(

"Comment s'appelle le stade de l'OGC Nice ?\n\n1 - Stade Vélodrome\n2 - Allianz Riviera\n3 - Parc des Princes"

);



if(q3 === "2"){

scoreNice++;

alert("Bien joué 👏");

}

else{

alert("Raté 😅 C'est Allianz Riviera");

}





let q4 = prompt(

"Quel est le surnom de l'OGC Nice ?\n\n1 - Le Gym\n2 - Les Canaris\n3 - Les Verts"

);



if(q4 === "1"){

scoreNice++;

alert("Parfait 🔴⚫");

}

else{

alert("Raté 😅 C'est Le Gym");

}





alert(

"Ton score final : "
+ scoreNice +
"/4 ⚽🔴⚫"

);



}








// =============================
// ANIMATION DES ELEMENTS
// =============================



const elements = document.querySelectorAll(".reveal");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = 1;


}


});


});



elements.forEach(element=>{


element.style.opacity = 0;


observer.observe(element);


});








// =============================
// ANIMATION DU TITRE
// =============================


let titre = document.querySelector("nav h1");



setInterval(()=>{


titre.style.transform="scale(1.08)";



setTimeout(()=>{


titre.style.transform="scale(1)";


},400);



},3000);
