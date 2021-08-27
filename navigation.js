//window.location.search
function id(ID){
  return document.getElementById(ID);
}

var URL=window.location.toLocaleString();
var page;
var konami=false;
if(URL.indexOf("?page=")>-1){
if(URL.indexOf("&")>-1){
  page = URL.slice(URL.indexOf("?page=")+6,URL.indexOf("&"));
}else{
  page = URL.slice(URL.indexOf("?page=")+6,URL.length);
}
if(URL.indexOf("konami=true")>-1){
  konami=true;
}
//possibly add contingency for keys in query string
} else {
  page = "home";
}

var iframetarget="";
switch(page){
  case "home":
  iframetarget = "home.html";
  break;
  case "about":
  iframetarget = "about.html";
  break;
  case "calendar":
  iframetarget = "calendar.html";
  break;
  case "members":
  iframetarget = "members.html";
  break;
  case "contact":
  iframetarget = "contact.html";
  break;
  case "henka":
  iframetarget = "henka/index.html";
  break;
  case "inception":
  iframetarget = "index.html";
  break;
  default:
  iframetarget = "404.html";
}
if(konami){
  iframetarget+="?konami=true";
}
console.log(iframetarget);

for(k=0;k<document.getElementsByClassName("navibarbutton").length;k++){
  //document.getElementsByClassName("navibarlink")[k].href="http://24.231.182.198/Dojo/index.html?page="+document.getElementsByClassName("navibarbutton")[k].getAttribute("target");
  document.getElementsByClassName("navibarlink")[k].href="index.html?page="+document.getElementsByClassName("navibarbutton")[k].getAttribute("target");
  }
  //id("logolink").href="http://24.231.182.198/Dojo/index.html?page="+id("logo").getAttribute("target");
  id("logolink").href="index.html?page="+id("logo").getAttribute("target");
  id("lsatellitelink").href=id("lsatellitelogo").getAttribute("target");
  id("rsatellitelink").href=id("rsatellitelogo").getAttribute("target");
  id("contentframe").src = iframetarget;
  if(konami){
    for(i=0;i<document.getElementsByTagName("a").length;i++){
      document.getElementsByTagName("a")[i].href=document.getElementsByTagName("a")[i].href+"&konami=true";
      console.log("I GOT IT")
  }
  }
