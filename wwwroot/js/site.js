


function edit(e) {
  
    var cardtraget = e.target.closest("#cover");
    var cardtraget1 = e.target.closest("#card");
    var p = cardtraget.childNodes[3].childNodes[1];
    p.removeAttribute('hidden');
    cardtraget1.style.backgroundColor = 'green';
    var d = cardtraget1.children[0].childNodes[0].parentElement;
   
    d.classList.add("onedit");
 
    var title = cardtraget1.children[0].childNodes[0].data;
    var inp = p.childNodes[1].childNodes[1][1];
    inp.value = title;
   
}
function update(e) {
    debugger
    e.preventDefault();
    var newValue = e.target.parentNode.parentNode[1];
    var title = document.getElementsByClassName("onedit");
    title[0].innerHTML = newValue.value;
    title[0].classList.remove("onedit");
    var div = e.target.closest(".me");
    div.hidden = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "EditPost?value="+newValue.value , true);
    xhttp.send();

   // title.innerText = newValue.value;
   
}

