function hitung()
{
    x= document.form1.x.value;
    pil = document.form1.opt.value;

    if (pil == "dollar") {
        document.getElementById("tampil").innerHTML = x * 9915;
    }
    else if (pil == "dollar sg") {
        document.getElementById("tampil").innerHTML = x * 13472;
    }
    else if (pil == "ringgit") {
        document.getElementById("tampil").innerHTML = x * 874;
    }
    else if (pil == "yen") {
        document.getElementById("tampil").innerHTML = x * 120;
    }
    else if (pil == "euro") {
        document.getElementById("tampil").innerHTML = x * 15888;
    }
    else if (pil == "riyal") {
        document.getElementById("tampil").innerHTML = x * 3592;
    }
}
