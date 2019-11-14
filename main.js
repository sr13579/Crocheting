
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
  
  case "dc" :
  txt= "Double Crochet";
  break;
  
  case "dec" :
  txt= "Decrease";
  break;
  
  case "dtr" :
  txt= "Double Treble Crochet";
  break;
  
  case "fo" :
  txt= "Fasten Off";
  break;
  
  case "fol" :
  txt= "Following";
  break;
  
  case "grp" :
  txt= "Group";
  break;
  
  case "hdc" :
  txt= "Half Double Crochet";
  break;

  case "inc" :
  txt= "Increase";
  break;
  
case "lp" :
  txt= "Loop";
  break;
  
case "pat" :
  txt= "Pattern";
  break;
  
  case "pc" :
  txt= "Popcorn";
  break;
  
  case "prev" :
  txt= "Previous";
  break;
  
  case "rem" :
  txt= "Remaining";
  break;
  
  case "rep" :
  txt= "Repeat";
  break;
  
  case "rnd" :
  txt= "Round";
  break;
  
  case "sk" :
  txt= "Skip";
  break;

  case "sm" :
  txt= "Same";
  break;

  case "sp" :
  txt= "Space";
  break;

  case "st" :
  txt= "Stitch";
  break;
  
  case "rf" :
  txt= "Relief Stitch Front";
  break;
  
  case "rb" :
  txt= "Relief Stitch Back";
  break;
  
  case "tch" :
  txt="Turning Chain"
  break;
  
  case "thro" :
  txt= "Through";
  break;

  case "tog" :
  txt= "Togather";
  break;
  
  case "tr" :
  txt= "Treble Crochet";
  break;
  
  case "yo" :
  txt= "Yarn Over";
  break;
	}
document.getElementById("out").innerHTML=txt;

}
