
function momentDateTime(value) {
    let x = moment("12-25-1995 11:11:11").format("DD/MM/YYYY h:mm:ss");
    document.getElementById("searchDateTime").innerHTML = x;
}