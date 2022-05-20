// toggle = true;
// var i = 0;
// var txt = "SIDDHARTHA BHATTACHARJEE";
// j = txt.length;
// var speed = 220;
// function sleep(time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
// }
// function typeWriter() {
//     text = txt;
//     if (i <= text.length) {
//         document.getElementById("mname").innerHTML = text.substring(0, i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
//     else {
//         if (j == txt.length || j == txt.length - 1) {
//             sleep(2000).then(() => {
//                 setTimeout(typeWriter, speed);
//                 document.getElementById("mname").innerHTML = txt.substring(0, j);
//                 if (j == 0) {
//                     j = txt.length;
//                     i = 0;
//                 }
//                 j--;
//             });
//         }
//         else {
//             setTimeout(typeWriter, speed);
//             document.getElementById("mname").innerHTML = txt.substring(0, j);
//             if (j == 0) {
//                 j = txt.length;
//                 i = 0;
//             }
//             j--;
//         }
//     }
// }

// old code above


function scrollToNextDiv(a) {
    document.getElementById(a).scrollIntoView({
        behavior: 'smooth',
    });
}




toggle = true;
var i = 0;
var txt = "Student";
var txt1 = "Programmer";
var txt2 = "Web Developer";
var txt3 = "Android Developer";
var point = 0;
j = txt.length;
j1 = txt1.length;
j2 = txt2.length;
j3 = txt3.length;
var speed = 200;
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function typeWriter() {

    if(point == 0){
        text = txt;
        if (i <= text.length) {
            document.getElementById("prof").innerHTML = text.substring(0, i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            if (j == text.length || j == text.length - 1) {
                sleep(900).then(() => {
                    setTimeout(typeWriter, speed);
                    document.getElementById("prof").innerHTML = text.substring(0, j);
                    if (j == 0) {
                        j = text.length;
                        i = 0;
                    }
                    j--;
                });
            }
            else {
                setTimeout(typeWriter, speed);
                document.getElementById("prof").innerHTML = text.substring(0, j);
                if (j == 0) {
                    j = text.length;
                    i = 0;
                    if(point<3){
                        point++;
                    }
                    else{
                        point = 0;
                    }
                }
                j--;
            }
        }
    }

    else if(point==1){
        text = txt1;
        if (i <= text.length) {
            document.getElementById("prof").innerHTML = text.substring(0, i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            if (j1 == text.length || j1 == text.length - 1) {
                sleep(900).then(() => {
                    setTimeout(typeWriter, speed);
                    document.getElementById("prof").innerHTML = text.substring(0, j1);
                    if (j1 == 0) {
                        j1 = text.length;
                        i = 0;
                    }
                    j1--;
                });
            }
            else {
                setTimeout(typeWriter, speed);
                document.getElementById("prof").innerHTML = text.substring(0, j1);
                if (j1 == 0) {
                    j1 = text.length;
                    i = 0;
                    if(point<3){
                        point++;
                    }
                    else{
                        point = 0;
                    }
                }
                j1--;
            }
        }
    }

    else if(point==2){
        text = txt2;
        if (i <= text.length) {
            document.getElementById("prof").innerHTML = text.substring(0, i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            if (j2 == text.length || j2 == text.length - 1) {
                sleep(900).then(() => {
                    setTimeout(typeWriter, speed);
                    document.getElementById("prof").innerHTML = text.substring(0, j2);
                    if (j2 == 0) {
                        j2 = text.length;
                        i = 0;
                    }
                    j2--;
                });
            }
            else {
                setTimeout(typeWriter, speed);
                document.getElementById("prof").innerHTML = text.substring(0, j2);
                if (j2 == 0) {
                    j2 = text.length;
                    i = 0;
                    if(point<3){
                        point++;
                    }
                    else{
                        point = 0;
                    }
                }
                j2--;
            }
        }
    }

    else if(point==3){
        text = txt3;
        if (i <= text.length) {
            document.getElementById("prof").innerHTML = text.substring(0, i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            if (j3 == text.length || j3 == text.length - 1) {
                sleep(900).then(() => {
                    setTimeout(typeWriter, speed);
                    document.getElementById("prof").innerHTML = text.substring(0, j3);
                    if (j3 == 0) {
                        j3 = text.length;
                        i = 0;
                    }
                    j3--;
                });
            }
            else {
                setTimeout(typeWriter, speed);
                document.getElementById("prof").innerHTML = text.substring(0, j3);
                if (j3 == 0) {
                    j3 = text.length;
                    i = 0;
                    if(point<3){
                        point++;
                    }
                    else{
                        point = 0;
                    }
                }
                j3--;
            }
        }
    }

}

typeWriter();

