//問1
document.write("ココカラ——————————");
document.write("<br>");

// for 文を使って５回ループ処理している
for(var star = 1; star <= 5; star++){
    document.write("★");
}

document.write("<br>");
document.write("——————————ココマデ");

document.write("<br><br>");

//問2
document.write("ココカラ—————————— ");
document.write("<br>");

for(var star1 = 1; star1 <= 2; star1++){
    for(var star2 = 1; star2 <= 3; star2++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問3
document.write("ココカラ——————————");
document.write("<br>");

for(var star3 = 1; star3 <= 2; star3++){
    for(var star4 = 1; star4 <= 5; star4++){
        document.write("☆");
    }
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問4
document.write("ココカラ——————————");
document.write("<br>");

for(var star5 = 1; star5 <= 4; star5++){
    for(var star6 = 1; star6 <= 5; star6++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問5
document.write("ココカラ——————————");
document.write("<br>");

for(var star7 = 1; star7 <= 5; star7++){
    for(var star8 = 1; star8 <= 3; star8++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問6
document.write("ココカラ——————————");
document.write("<br>");

for(var star9 = 0; star9 < 3; star9++){
    for(var star10 = 0; star10 < 3; star10++){
        if(star10 % 2 ==0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }   
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問7
document.write("ココカラ——————————");
document.write("<br>");

for(var star11 = 0; star11 < 4; star11++){
    for(var star12 = 0; star12 <= 4; star12++){
        if(star12 % 2 ==0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("——————————ココマデ");

document.write("<br><br>");

//問8
document.write("ココカラ——————————");
document.write("<br>");

for(var star13 = 1; star13 <= 5; star13++){
    for(var star14 = 1; star14 <= star13; star14++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("——————————ココマデ");