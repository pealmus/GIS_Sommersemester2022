function speichern() {
    var kommentare = document.getElementById('kommentare').value;
    var inhalt = document.getElementById('inhalt')
    window.localStorage.setItem('kommentare','inhalt');
    console.log(kommentare);
    var ausgabe = '';
    for (var i =0; i < localStorage.length; i++) {
      ausgabe += localStorage.key(i) + " = " + localStorage.getItem(localStorage.key(i)) + "<br>";
    }
    document.getElementById("comments").innerHTML = ausgabe;
    document.getElementById("kom").innerHTML = Date();
    document.getElementById("comments").innerHTML = kommentare;  

}









