var headline = document.getElementById("Madlib_Headline");
headline.innerHTML = "Javascript MADLIBS!"

var noun = document.getElementById('noun1');
noun.value = "Enter a noun";

var noun2= document.getElementById('noun2');
noun2.value = "Enter a plural noun";

var adjective = document.getElementById('adjective');
adjective.value = "Enter an adjective";

var verb = document.getElementById('verb');
verb.value = "Enter a verb";

var place = document.getElementById('place');
place.value= "Enter a place";

var madlib = document.getElementById('madlib');
madlib.innerHTML="";


var buttonInput = document.getElementById('submit');
buttonInput.innerHTML="submit";

buttonInput.onclick = function(){
	madlib.innerHTML = "While out with " + noun.value +", <br>there was the most " + adjective.value + "<br>and inexplicable " + verb.value + ".<br>It reminded me of those " + noun2.value + "<br>that in the 80's were commonly seen at " + place.value +".";
	
}

function clearText(thefield){
if (thefield.defaultValue==thefield.value)
thefield.value = ""
} 