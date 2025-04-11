



//問1
function menseki(hankei){
    return "半径" + hankei + "cmの円の面積は" + hankei * hankei * 3.14 + "㎠です。<br>";
}

document.write(menseki(5));
document.write(menseki(7));
document.write(menseki(10));

document.write("<br>");

//問2
function ryoukin(group, otona, kodomo){
    return group + "グループの合計金額は" + ((otona * 500) + (kodomo * 200)) + "円です。<br>";
}

document.write(ryoukin("A", 2, 4));
document.write(ryoukin("B", 1, 5));
document.write(ryoukin("C", 3, 7));