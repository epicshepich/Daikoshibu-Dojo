function id(ID){
  return document.getElementById(ID);
}
var MC = id("mastercontainer");
var docwidth = window.innerWidth;
var docheight = window.innerHeight;
/*var docwidth = 0;
var docheight = 0;
while(window.innerWidth>docwidth){
  docwidth++
}
while(window.innerHeight>docheight){
  docheight++
}*/

var docratio;
/*function forcedocratio(DR){
  docratio = DR;//1366/629;
  if(docwidth/docheight>=docratio){
    MC.style.height = docheight;
    MC.style.width = docheight*docratio;
    console.log("too wide");
    MC.style.position="absolute";
    MC.style.left=(docwidth-docheight*docratio)/2;
//  MC.style.margin
  } else {
    MC.style.width = docwidth;
    MC.style.height = docwidth/docratio;
    console.log("too tall");
    MC.style.position="absolute";
    MC.style.top=(docheight-docwidth/docratio)/2;
  }
}*/
docratio = docwidth/docheight;
var header = {};
header.logo={element:id("logo"),x:870,y:948,arcx:10};


header.logo.resize=function(){
  header.logo.arcy=(header.logo.arcx*header.logo.y/header.logo.x)*docratio;
  header.logo.surplusarcy=(header.logo.y-header.logo.x)*(header.logo.arcy/header.logo.y);
  header.logo.squarearcy=header.logo.arcy-header.logo.surplusarcy;
header.logo.element.style.width=header.logo.arcx+"%";
header.logo.element.style.left=(100-header.logo.arcx)/2+"%";
};


header.satellites={};
header.satellites.r={element:id("rsatellitelogo"),arcx:7,x:721,y:721,left:7}
header.satellites.l={element:id("lsatellitelogo"),arcx:header.satellites.r.arcx,x:header.satellites.r.x,y:header.satellites.r.y}


header.satellites.resize=function(){
  header.satellites.l.left=100-header.satellites.r.left-header.satellites.l.arcx;
  header.satellites.r.arcy=(header.satellites.r.arcx*header.satellites.r.y/header.satellites.r.x)*docratio;
  header.satellites.l.arcy=header.satellites.r.arcy;
  header.satellites.r.top=header.logo.surplusarcy+(header.logo.squarearcy-header.satellites.r.arcy)/2;
  header.satellites.l.top=header.satellites.r.top;
header.satellites.r.element.style.width=header.satellites.r.arcx+"%";
header.satellites.r.element.style.height=header.satellites.r.arcy+"%";
header.satellites.r.element.style.top=header.satellites.r.top+"%";
header.satellites.r.element.style.left=header.satellites.r.left+"%";
header.satellites.l.element.style.width=header.satellites.l.arcx+"%";
header.satellites.l.element.style.height=header.satellites.l.arcy+"%";
header.satellites.l.element.style.top=header.satellites.l.top+"%";
header.satellites.l.element.style.left=header.satellites.l.left+"%";
};


header.navibar={element:id("navibar"),arcx:80,x:960,y:50};

header.navibar.resize=function(){
  header.navibar.arcy=header.navibar.arcx/header.navibar.x*header.navibar.y*docratio;
  header.navibar.top=header.logo.surplusarcy+(header.logo.squarearcy-header.navibar.arcy)/2;
header.navibar.element.style.width=header.navibar.arcx+"%";
header.navibar.element.style.height=header.navibar.arcy+"%";
header.navibar.element.style.top=header.navibar.top+"%";
header.navibar.element.style.left=(100-header.navibar.arcx)/2+"%";
};

header.navibar.bg={element:id("navibar-bg")};
header.navibar.buttons={};
header.navibar.buttons.resize=function(){
  for(i=0;i<document.getElementsByClassName("navibarbutton").length;i++){
    document.getElementsByClassName("navibarbutton")[i].style.lineHeight=header.navibar.bg.element.height+"px";
  }
};

var contentarea={element:id("contentarea"),arcx:80,left:10};
contentarea.resize=function(){
  contentarea.top=header.logo.arcy+0.2*header.navibar.arcy;
  contentarea.bottom=1*header.navibar.arcy
  contentarea.height=100-(contentarea.top+contentarea.bottom);
  contentarea.element.style.top=contentarea.top+"%";
  contentarea.element.style.height=contentarea.height+"%";

};
contentarea.frame={element:id("contentframe")};
contentarea.frame.resize=function(){
  contentarea.frame.element.width="100%";
  contentarea.frame.element.height="100%";
};
for(m=0;m<document.getElementsByClassName("navibargradient").length;m++){
document.getElementsByClassName("navibargradient")[m].src="images/icons/black clear gradient.png";
}
//--------------------------
function resize(){
console.log("resizing...");
docwidth = window.innerWidth;
docheight = window.innerHeight;
docratio = docwidth/docheight;
header.logo.resize();
header.satellites.resize();
header.navibar.resize();
header.navibar.buttons.resize();
contentarea.resize();
contentarea.frame.resize();
}
//document.getElementsByTagName("html")[0].addEventListener("resize",resize);
window.addEventListener("resize",resize);
resize();
