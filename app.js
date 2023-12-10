function display1() {
    document.getElementById('screen').value+=7;
}

function display2() {
    document.getElementById('screen').value+=8;
}

function display3() {
    document.getElementById('screen').value+=9;
}

function display4() {
    document.getElementById('screen').value+="*";
}

function displaya() {
    document.getElementById('screen').value+='+';
}

function display5() {
    document.getElementById('screen').value+=4;
}

function display6() {
    document.getElementById('screen').value+=5;
}

function display7() {
    document.getElementById('screen').value+=6;
}

function display8() {
    document.getElementById('screen').value+='-';
}

function display9() {
    document.getElementById('screen').value+=1;
}

function display10() {
    document.getElementById('screen').value+=2;
}

function display11() {
    document.getElementById('screen').value+=3;
}

function display12() {
    document.getElementById('screen').value+='/';
}

function display13() {
    document.getElementById('screen').value='';
}

function display14() {
    document.getElementById('screen').value+='.';
}

function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
}
function display16() {
    document.getElementById('screen').value+=0;
}