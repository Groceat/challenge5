


var header = document.getElementById("currentDay");
var boxes = document.querySelectorAll(".row");
var cont = document.querySelector(".container");
curhour = moment(11, "HH").format('hh A');
todaycomp = moment().format("h A");

comparetoday= moment().format("HH");
incretoday= moment().add(0,'hours').format("HH");
console.log(comparetoday<incretoday);
spook = moment(5, "HH").add(0,'hours').format("h A");
console.log(comparetoday);
console.log(incretoday);
comparetoday2= moment().format("dddd, MMMM Do YYYY");

header.textContent=comparetoday2;
itermom = moment();
for(var i = 0; i<9; i++){
    incretoday= moment(9, "HH").add(i,'hours').format("HH");
spook = moment(9, "HH").add(i,'hours').format("h A");  
var compe=moment(spook).isBefore(todaycomp)
var el = document.createElement("div");
var txta = document.createElement("textarea");
var but = document.createElement("button");
but.className="saveBtn";
var litty;
var jlitty;
txta.id=i;

var numb = JSON.stringify(txta.id);

txta.textContent=JSON.parse(localStorage.getItem(txta.id));

var idval;
txta.addEventListener("input",function(event){
    console.log(event.target.value);
    litty=event.target.value;
    idval = event.target.id;
    console.log(idval);
    jlitty = JSON.stringify(litty);
    })
    but.addEventListener("click",function(){
        console.log("---");
        console.log(jlitty);
        localStorage.setItem(idval, jlitty);
       test2= JSON.parse(localStorage.getItem(idval))
        console.log(test2);
    });

   console.log(incretoday);
   console.log(comparetoday);
if(incretoday>comparetoday){
    el.className="row future";
    console.log("being checked!!1")
}
else if(incretoday<comparetoday){
    console.log("being checked!!2")
    el.className="row past";
}
else if (incretoday===comparetoday){
    console.log("being checked!!3")
    el.className="row present";

}
el.textContent=spook;

el.appendChild(but);
el.appendChild(txta);
cont.appendChild(el);


}