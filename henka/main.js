var stances = ["tachi","hantachi","suwari","isu suwari","yokotawaru"];
var stancese = ["standing","sitting on toes", "sitting","sitting in a chair","laying"];
var stancesinterval = [0.7,0.75,0.85,0.95,1];
var orientations =["mae","yoko","ushiro"];
var orientationse=["from the front","from the side","from the back"];
var orientationsinterval=[0.4,0.75,1];
var positions = ["kao","nodo","kubi","emon","ude","mune","empi","te","hara","koshi","hiza","ashi","kakato"];
var positionse=["face","throat","neck","shoulder","upper arm","chest","elbow","hand","belly","pelvis","knee","leg","heel"];
var hands = ["kata","moro","ryou"];
var handse = ["one hand grabs the","both hands grab one","each hand grabs a"];
var grips = ["daku","kubi shime","emon","ude","mune","te"];
var gripse= ["bear hug","choke","shoulder","upper arm","chest","hand"];
var principles = ["hakkodori","atemi","nage","tekagami","osaedori","nihonage","otoshi"];
var strikes =["tsukiage","tsukimi","tataku","shuto","geri"];
var strikese = ["uppercut","punch","haymaker","knife-hand strike","kick"];
var button = document.getElementById("button");
button.addEventListener("click",main);
var henka;
//var principle = document.getElementById("principle");
//var atemi = document.getElementById("atemi");
//var name = document.getElementById("name");

function rgap/*randomly generate array position*/(array){
  return array[Math.round(Math.random()*(array.length-1))];
}

function gapd/*generate array position by distributions*/(array,distribution){
  var random = Math.random();
  for(i=0;i<distribution.length;i++){
    if(i===0){
      if(random <= distribution[i]){
        return array[i];
      }
    } else if(random >distribution[i-1]&&random<=distribution[i]) {
      return array[i];
  }else{
    
  }
}
}

function main(){
  var strike;var lock;var technique;var hand;
  
  technique = gapd(stances,stancesinterval);
  technique += " "+ gapd(orientations,orientationsinterval);
  var grip = rgap(grips);
  if(grip!="daku"&&grip!="kubi shime"&&grip!="mune"){
    hand = rgap(hands);
    if(Math.random()>0.7){
      technique += " hiki";
    }
    technique += " "+hand;
  } else if(grip=="mune"){
     if(Math.random()>0.5){
       hand = "ryou";
     } else {
       hand="kata";
     }
    if(Math.random()>0.7){
      technique += " hiki";
    }
    technique += " "+hand;
  } else {
    
  }
  technique += " "+grip;
  if(hand=="kata"){
    technique += " "+rgap(strikes);
  }
  technique+=" "+rgap(principles);
  document.getElementById("name").innerHTML=technique;
  console.log(technique);
  document.getElementById("atemi").innerHTML="*Include: "+rgap(positions)+" "+rgap(strikes);
  document.getElementById("principle").innerHTML="*Include: "+rgap(["te kagami","osae dori","ni ho nage"]);
}
function sentencetoarray(sentence){
  var input = sentence;
  var array = [];
  while(input.indexOf(" ")>-1){
    array.push(input.substring(0,input.indexOf(" ")));
    input=input.replace(input.substring(0,input.indexOf(" ")+1),"");
  }
  array.push(input);
  return array;
}
function translate(phrase){
  var parray = sentencetoarray(phrase);
  //
 for(i=0;i<parray.length;i++){
   if(stances.indexOf(parray[i])>-1){
     parray[i]=stancese[stances.indexOf(parray[i])];
   } else if(orientations.indexOf(parray[i])>-1){
     parray[i]=orientationse[orientations.indexOf(parray[i])];
   } else if(positions.indexOf(parray[i])>-1){
     parray[i]=positionse[positions.indexOf(parray[i])];
   } else if(hands.indexOf(parray[i])>-1){
     parray[i]=handse[hands.indexOf(parray[i])];
   } else if(grips.indexOf(parray[i])>-1){
     parray[i]=gripse[grips.indexOf(parray[i])];
   } else if(strikes.indexOf(parray[i])>-1){
     parray[i]=strikese[strike.indexOf(parray[i])];
   } else if(principles.indexOf(parray[i])>-1){
     parray[i]="finish with "+principles[principles.indexOf(parray[i])];
   }
 } 
 console.log(parray);
 return parray;
}