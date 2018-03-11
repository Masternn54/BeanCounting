//this function was made in Codepen which is why it made not work when you run it
// if you want to test to se if it works go to code pen and paste the
// code in the js area to check


function countBs(inputS){
    var Count = 0;

    for (i=0; i<inputS.length; i++) {
        if (inputS[i]=="b" || inputS[i]=="B" ) {
            Count = Count + 1; }
        console.log(inputS[i]);
    }
    return Count;
}

function countChar(inputS, Char){

    var Count = 0;

    for (i=0; i<inputS.length; i++) {
        if (inputS[i]== Char.toLowerCase()  || inputS[i]==Char.toUpperCase ) {
            Count = Count + 1; }
        console.log(inputS[i]);
    }
    return Count;

}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4