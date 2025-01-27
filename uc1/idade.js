// const idade = 21

// switch (true) {
//     case (idade>=0 && idade <=12):
//         console.log("criança");
//         break;
//         case (idade>=13 && idade <=18):
//         console.log("aolesente");
//         break;
//         case (idade>=18 && idade <=65):
//         console.log("adulto");
//         break;
//         case (idade >=12):
//         console.log("idoso");
//         break;
//         default:
//             console.log("idade invalida");
// }
const idade = 21

if (idade>=0 && idade<=12) {
    console.log("criança");
} else if (idade >=13 && idade<=18) {
    console.log("adolescente");
} else if (idade >=18 && idade<=65) {
    console.log("adulto");
} else if (idade>=65) {
    console.log("idoso");
} else {
    console.log("idade invalida");
}