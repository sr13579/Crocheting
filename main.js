
function shortout() {
var shinp=document.getElementById("short").value;

switch(shinp) {
  case "sc" :
  txt= "Single Crochet";
  break;
 case "sl st" :
  txt= "Slip Stitch";
  break;
   case "beg" :
  txt= "Begin/Beginning";
  break;
   case "cl" :
  txt= "Cluster";
  break;
   case "ch" :
  txt= "Chain";
  break;
   case "bl" :
  txt= "Block";
  break;
	}
document.getElementById("out").innerHTML=txt;

}