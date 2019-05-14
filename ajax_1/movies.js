function createList() {

    var list;

      title = document.createTextNode("Disa filma qe duhen pare me patjeter:");
  //  list = "<ul>" + "<li>Movie1</li>" + "<li>Movie2</li>" + "<li>Movie3</li>" + "<li>Movie4</li>" + "<li>Movie5</li>" + "</ul>";
      list = document.createElement("ul");

      elem1 = document.createElement("li");
      text1 = document.createTextNode("Movie1");
      elem1.appendChild(text1);

      elem2 = document.createElement("li");
      text2 = document.createTextNode("Movie2");
      elem2.appendChild(text2);

      elem3 = document.createElement("li");
      text3 = document.createTextNode("Movie3");
      elem3.appendChild(text3);

      elem4 = document.createElement("li");
      text4 = document.createTextNode("Movie4");
      elem4.appendChild(text4);

      elem5 = document.createElement("li");
      text5 = document.createTextNode("Movie5");
      elem5.appendChild(text5);
      
      list.appendChild(elem1);
      list.appendChild(elem2);
      list.appendChild(elem3);
      list.appendChild(elem4);
      list.appendChild(elem5);
      
    divmovies = document.getElementById("divmovies");
    divmovies.appendChild(title);
    divmovies.appendChild(list);
//  divmovies.innerHTML = list;

}