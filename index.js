var button=document.getElementById("calc");

function calc()
{    
    var n1=Number(document.getElementById('totalsub').value);
    var a=Number(document.getElementById('m1').value);
    var b=Number(document.getElementById('m2').value);
    var c=Number(document.getElementById('m3').value);
    var d=Number(document.getElementById('m4').value);
    var e=Number(document.getElementById('m5').value);
    var f=Number(document.getElementById('m6').value);
    var g=Number(document.getElementById('m7').value);
    var h=Number(document.getElementById('m8').value);    
    var avg=(a+b+c+d+e+f+g+h)/n1;
    //console.log(avg);

    if (avg <= 100 && avg > 90) {
        window.alert('S grade')
    }
    else if (avg > 80) {
        window.alert('A grade')
    }
    else if (avg > 70) {
        window.alert('B grade')
    }
    else if (avg > 60) {
        window.alert('C grade')
    }
    else if (avg > 50) {
        window.alert('D grade')
    }
    else if (avg > 40) {
        window.alert('E grade')
    }
    else {
        window.alert('F grade')
    }
    
}
