var dateInput = document.querySelector("#date");
var checkBtn = document.querySelector("#checkBtn");
var luckyNum = document.querySelector("#luckyNum");

var outputDiv = document.querySelector("#output");
function clickHandler() {
  var luckyNumber = luckyNum.value;
  var date = dateInput.value;
  console.log(luckyNumber);
  var dateArray = date.split("-");
  let dateAsNum = parseInt(dateArray.join(""));
  let newDate = Array.from(String(dateAsNum));
  var total = 0;
  for (let i = 0; i < newDate.length; i++) {
    total = total + parseInt(newDate[i]);
  }
  console.log(total);
  if (total % luckyNumber === 0) {
    console.log("lucky");
    outputDiv.innerHTML = "Wohoo, your birthday is Lucky :)";
  } else {
    console.log("not lucky");
    outputDiv.innerHTML = "Oops, your birthday is not so Lucky :(";
  }
}

checkBtn.addEventListener("click", clickHandler);
