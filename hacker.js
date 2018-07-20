'use-strict'
/* Event listener for run the script and encode the text */
let link = document.querySelector("#button");
link.addEventListener('click', hackString )

/* I define a constante for cut the sting from the begin everytime */
const REF = 0;


/**
 * Event Listener Callback function
 * @param Event
 * @return string
 */
function hackString(event){
  let inputText = document.querySelector("#string").value.toLowerCase();

    for (var i = 0; i < inputText.length; i++) {
          switch(inputText[i]){
            case 'a' :
              inputText = replaceLetter(inputText, inputText[i], i, 4);
              break;

            case 'e':
              inputText = replaceLetter(inputText, inputText[i], i, 3);
              break;

            case 'l':
              inputText = replaceLetter(inputText, inputText[i], i, 1);
              break;

            case 'o':
              inputText = replaceLetter(inputText, inputText[i], i, 0);
              break;

            case 's':
              inputText = replaceLetter(inputText, inputText[i], i, 5);
              break;

            default:
              console.error("ERROR ")

          }//switch
    }//for

  let response = document.querySelector(".response p");
  response.textContent = inputText.toUpperCase();

  if(inputText.length != 0){
    response.style.padding = "1rem 2%";
  }


}//function

/**
 * String handler
 * @param String
 * @param String
 * @param Integer
 * @param String
 * @return String
 *
 */
function replaceLetter(fullString, letter, i, replace){
    let fromStart = fullString.slice(REF, (i));
    let end = fullString.substr(i+1);
/* I build the new string with the templates string (ES6) */
    fullString = `${fromStart}${replace}${end}`;

    return fullString;
}//function
