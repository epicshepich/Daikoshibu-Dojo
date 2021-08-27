var HTML = document.getElementsByTagName("html")[0];
function commonresize(){
  if(window.innerWidth>=window.innerHeight){
     HTML.style.fontSize=169*window.innerHeight/675+"%";
    } else {
    HTML.style.fontSize=169*window.innerWidth/776+"%";
    }
}
window.addEventListener("resize",commonresize);
commonresize();
function konamiclicker(){
var konami=false;
if(window.location.href.indexOf("konami=true")>-1){
  konami=true;
}
if(konami){
  for(i=0;i<document.getElementsByTagName("a").length;i++){
    document.getElementsByTagName("a")[i].href=document.getElementsByTagName("a")[i].href+"&konami=true";
    console.log("I GOT IT")
  }
}
}
konamiclicker();
