 function checkEntries()
  {
    //Anfang: Überprüfung der Eingabefelder Autor, Vorname & Name 

    var buchstaben = /[A-Za-z]/;

    if(!buchstaben.test(document.formular.autor.value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.formular.autor.focus();
      document.formular.autor.style.borderColor = "red";
      return false;
    }


    if(!buchstaben.test(document.formular.vorname.value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.formular.vorname.focus();
      document.formular.vorname.style.borderColor = "red";
      return false;
    }

    if(!buchstaben.test(document.formular.name.value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.formular.name.focus();
      document.formular.name.style.borderColor = "red";
      return false;
    }

    //Ende: Überprüfung der Eingabefelder Autor, Vorname & Name



    var isbnVal = /^[0-9]{13}$/;

    if(!isbnVal.test(document.formular.isbn.value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.formular.isbn.focus();
      document.formular.isbn.style.borderColor = "red";
      return false;
    }


    var jahrVal = /^[0-9]{4}$/;
    var maxJahr = 2015;

   if(!jahrVal.test(document.formular.jahr.value) || document.formular.jahr.value > maxJahr) {
       alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
       document.formular.jahr.focus();
       document.formular.jahr.style.borderColor = "red";
       return false;
    }


    var auflageVal = /^[0-9]/;

     if(!auflageVal.test(document.formular.auflage.value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.formular.auflage.focus();
      document.formular.auflage.style.borderColor = "red";
      return false;
    }


    // Überprüfung war erfolgreich
    return true;
  }