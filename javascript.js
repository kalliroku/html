// querySelectorAll methode를 활용한 함n

function modchanger(self){
var i = 0;
function tagsfind(x){
  return document.querySelectorAll(x);
}
var alist = tagsfind('a');
var divlist = tagsfind('div, ol, h1');
var bodylist = tagsfind('body');

if(self.value === "night"){
b = 'white';
c = 'black';
d = 'powderblue';
self.value = "day";
}
else {
b = "black";
c = "white";
d = "blue";
self.value = 'night';
}
bodylist[i].style.color = b;
bodylist[i].style.backgroundColor = c;
while( i < alist.length){
      alist[i].style.color = d;
      i += 1;
      }
i = 0;
while( i < divlist.length){
      divlist[i].style.borderColor = b;
      i += 1;
      }
i = 0;
}

// getElementsByTagName를 활용한
function modchanger2(self){
   if(self.value === "night"){
   tagcolorchange('a', 'red');
   tagcolorchange('p', 'white');
   bordercolorchange('div', 'white');
   bordercolorchange('ol', 'white');
   bordercolorchange('h1', 'white');
   tagbackcolorchange('body', 'black');
   self.value = 'day';
 }
 else{
   tagcolorchange('a', 'blue');
   tagcolorchange('p', 'black');
   bordercolorchange('div', 'black');
   bordercolorchange('ol', 'black');
   bordercolorchange('h1', 'black');
   tagbackcolorchange('body', 'white');
   self.value = 'night';
 }
}
var myO = {
  xlen : function(x){
  return document.getElementsByTagName(x).length},
  alen : function(){
  return document.getElementsByTagName('a').length;}
  }

 function tagcolorchange (x, y){
    var i = 0;
    while (i < myO.xlen(x)){
    document.getElementsByTagName(x)[i].style.color = y;
    i += 1;  }
}
function bordercolorchange(x, y){
  var i = 0;
  while (i < document.getElementsByTagName(x).length){
  document.getElementsByTagName(x)[i].style.borderColor = y;
  i += 1;}
}
  function tagbackcolorchange(x, y){
    var i = 0;
    while (i < document.getElementsByTagName(x).length){
    document.getElementsByTagName(x)[i].style.backgroundColor = y;
    i += 1;}
  }
