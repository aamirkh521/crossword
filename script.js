//Globals
var currentTextInput;
var puzzelArrayData;
var numberOfActionButtons = 7;
const tempArr = [];
const qObj = {
  1: {
    type: "col",
    ans: "prospecting",
  },
  2: {
    type: "col",
    ans: "umbrella",
  },
  3: {
    type: "col",
    ans: "ball",
  },
  4: {
    type: "col",
    ans: "girl",
  },
  5: {
    type: "row",
    ans: "elephant",
  },
  6: {
    type: "row",
    ans: "education",
  },
  7: {
    type: "row",
    ans: "elepha",
  },
}

const indexObj = {
	1 : {
		index : 0,
		start : 0,
	},
	2 : {
		index : 1,
		start : 6
	},
	3: {
		index : 0,
		start : 9
	},
	4: {
		index : 6,
		start : 10
	},
	5: {
		index : 5,
		start : 0
	},
	6: {
		index : 7,
		start : 3
	},
	7: {
		index : 2,
		start : 4
	}
}

function getIndexes(key) {
	if(Object.prototype.hasOwnProperty.call(indexObj,key)){
	  return indexObj[key]
	}
  }
//Loads the Crossword
function initializeScreen() {
  var puzzelTable = document.getElementById("puzzel");
  puzzelArrayData = preparePuzzelArray();
  for (var i = 0; i < puzzelArrayData.length; i++) {
    var row = puzzelTable.insertRow(-1);
    var rowData = puzzelArrayData[i];
    for (var j = 0; j < rowData.length; j++) {
      var cell = row.insertCell(-1);
      if (rowData[j] != 0) {
        var txtID = String("txt" + "_" + i + "_" + j);
        cell.innerHTML =
          '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' +
          'id="' +
          txtID +
          '" readonly="readonly">';
      } else {
        cell.classList.add("mystyle");
      }
    }
  }
  addHint();

  createActionButtons();

  let submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function () {
    console.log("submit here");
    submitAnswer(tempArr);
  });
}
//Adds the hint numbers
function addHint() {
  document.getElementById("txt_0_0").placeholder = "1";
  document.getElementById("txt_1_6").placeholder = "2";
  document.getElementById("txt_0_9").placeholder = "3";
  document.getElementById("txt_6_10").placeholder = "4";
  document.getElementById("txt_5_0").placeholder = "5";
  document.getElementById("txt_7_3").placeholder = "6";
  document.getElementById("txt_2_4").placeholder = "7";
}
//Stores ID of the selected cell into currentTextInput
// function textInputFocus(txtID123){
// 	currentTextInput = txtID123;
// }
//Returns Array
function preparePuzzelArray() {
  return [
    ["p", 0, 0, 0, 0, 0, 0, 0, 0, "3", 0, 0],

    ["r", 0, 0, 0, 0, 0, "2", 0, 0, "3", 0, 0],

    ["o", 0, 0, 0, "7", "7", "2", "7", "7", "7", 0, 0],

    ["s", 0, 0, 0, 0, 0, "2", 0, 0, "3", 0, 0],

    ["p", 0, 0, 0, 0, 0, "2", 0, 0, 0, 0, 0],

    ["e", "l", "e", "p", "h", "a", "n", "t", 0, 0, 0, 0],

    ["c", 0, 0, 0, 0, 0, "2", 0, 0, 0, "4", 0],

    ["t", 0, 0, "6", "6", "6", "2", "6", "6", "6", "4", "6"],

    ["i", 0, 0, 0, 0, 0, "2", 0, 0, 0, "4", 0],

    ["n", 0, 0, 0, 0, 0, 0, 0, 0, 0, "4", 0],

    ["g", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}
//Clear All Button
function clearAllClicked() {
  currentTextInput = "";
  var puzzelTable = document.getElementById("puzzel");
  puzzelTable.innerHTML = "";
  initializeScreen();
}
//Check button
function checkClicked() {
  for (var i = 0; i < puzzelArrayData.length; i++) {
    var rowData = puzzelArrayData[i];
    for (var j = 0; j < rowData.length; j++) {
      if (rowData[j] != 0) {
        var selectedInputTextElement = document.getElementById(
          "txt" + "_" + i + "_" + j
        );
        if (selectedInputTextElement.value != puzzelArrayData[i][j]) {
          selectedInputTextElement.style.backgroundColor = "red";
        } else {
          selectedInputTextElement.style.backgroundColor = "white";
        }
      }
    }
  }
}
//Clue Button
function clueClicked() {
  if (currentTextInput != null) {
    var temp1 = currentTextInput;
    var token = temp1.split("_");
    var row = token[1];
    var column = token[2];
    document.getElementById(temp1).value = puzzelArrayData[row][column];
    //checkClicked();
  }
}
//Solve Button
function solveClicked() {
  if (currentTextInput != null) {
    var temp1 = currentTextInput;
    var token = temp1.split("_");
    var row = token[1];
    var column = token[2];

    // Print elements on top
    for (j = row; j >= 0; j--) {
      if (puzzelArrayData[j][column] != 0) {
        document.getElementById("txt" + "_" + j + "_" + column).value =
          puzzelArrayData[j][column];
      } else break;
    }
    // Print elements on right
    for (i = column; i < puzzelArrayData[row].length; i++) {
      if (puzzelArrayData[row][i] != 0) {
        document.getElementById("txt" + "_" + row + "_" + i).value =
          puzzelArrayData[row][i];
      } else break;
    }

    // Print elements below
    for (m = row; m < puzzelArrayData.length; m++) {
      if (puzzelArrayData[m][column] != 0) {
        document.getElementById("txt" + "_" + m + "_" + column).value =
          puzzelArrayData[m][column];
      } else break;
    }
    // Print elements on left
    for (k = column; k >= 0; k--) {
      if (puzzelArrayData[row][k] != 0) {
        document.getElementById("txt" + "_" + row + "_" + k).value =
          puzzelArrayData[row][k];
      } else break;
    }
    // Done!
  }
}

function submitAnswer([qNum, { type, ans }]) {
  let submittedAns = document.getElementById("userAnswer").value;
  const ansArr = submittedAns.split("");

  const {index, start} = getIndexes(qNum);

  if (submittedAns.length === ans.length) {
    if (submittedAns.toLowerCase() === ans.toLowerCase()) {
		ansArr.forEach((v, i) => {
			if (type === "row") {
			  document.getElementById(`txt_${index}_${start + i}`).value = v;
			  document.getElementById(`txt_${index}_${start + i}`).classList.remove('error')
			  document.getElementById(`txt_${index}_${start + i}`).classList.add('success')
			}
			if (type === "col") {
			  document.getElementById(`txt_${index + i}_${start}`).value = v;
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('error')
			  document.getElementById(`txt_${index + i}_${start}`).classList.add('success')
			}
		  });
      document.getElementById("failMsg").style.display = "none";
      document.getElementById("failDesc").style.display = "none";
      document.getElementById("successMsg").style.display = "block";
      document.getElementById("successDesc").style.display = "block";
	  
    } else {
	    ansArr.forEach((v, i) => {
			if (type === "row") {
			  document.getElementById(`txt_${index}_${start + i}`).value = v;
			  document.getElementById(`txt_${index}_${start + i}`).classList.remove('success')
			  document.getElementById(`txt_${index}_${start + i}`).classList.add('error')
			}
			if (type === "col") {
			  document.getElementById(`txt_${index + i}_${start}`).value = v;
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('success')
			  document.getElementById(`txt_${index + i}_${start}`).classList.add('error')
			}
		  });
      document.getElementById("successMsg").style.display = "none";
      document.getElementById("successDesc").style.display = "none";
      document.getElementById("failMsg").style.display = "block";
      document.getElementById("failDesc").style.display = "block";
	  
    }
    // checkClicked()
   
    console.log(ansArr);
  } else {
	document.getElementById('successMsg').style.display = 'none'
	document.getElementById('successDesc').style.display = 'none'
	document.getElementById('failMsg').style.display = 'block'
	document.getElementById('failDesc').style.display = 'block'
    alert("Please Enter proper length word");
  }
}

function createActionButtons() {
  let actionBtn = document.getElementById("actionButton");

  for (let k = 1; k <= numberOfActionButtons; k++) {
    let actiondiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = "images/Group 272.png";
	img.classList.add('btn')
    actiondiv.style.padding = "0px 10px 0px 0px";
    actiondiv.style.position = "relative";
    actiondiv.style.float = "left";
    actiondiv.appendChild(img);

    let heading = document.createElement("span");
    heading.setAttribute("id", `heading${k}`);
	heading.classList.add('btn-text')
    heading.innerHTML = k;
    heading.style.fontWeight = "bold";
    actiondiv.appendChild(heading);
    actionBtn.appendChild(actiondiv);
    if (Object.prototype.hasOwnProperty.call(qObj, k)) {
      img.addEventListener("click", function () {
		removeInfoClass()
		  this.classList.add('info')
          showInput(qObj[k], k);
      });
      heading.addEventListener("click", function () {
		removeInfoClass()
		  let elem = this.previousElementSibling
		  elem.classList.add('info')
		  console.log('elem here', elem)
		 showInput(qObj[k], k);
      });
    }
  }
}

function showInput(obj, qNum) {
console.log(obj)
console.log('ques no is', qNum);	
const {type,ans} = obj

const cells = document.querySelectorAll('.info-cell')
cells.forEach(function(el) {
	el.classList.remove('info-cell')
	});

const {index, start} = getIndexes(qNum);
let ansArr = ans.split('')
ansArr.forEach((v, i) => {
	if (type === "row") {
	  document.getElementById(`txt_${index}_${start + i}`).classList.add('info-cell')
	}
	if (type === "col") {
	  document.getElementById(`txt_${index + i}_${start}`).classList.add('info-cell')
	}
  });

  tempArr.length = 0;
  document.getElementById("userAnswer").value = ''
  document.getElementById("quesNum").innerHTML = qNum
  let rightPanel = document.getElementById("rightPanel");
  rightPanel.style.visibility = "visible";
  tempArr.push(qNum, obj);
  console.log(tempArr);
}

function onlyAlphabets(e) {
	try {
		let charCode
		if (window.event) {
			 charCode = window.event.keyCode;
		}
		else if (e) {
			 charCode = e.which;
		}
		else { 
			return true; 
		}
		return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) ? true : false
	}
	catch (err) {
		alert(err.Description);
	}
}

function removeInfoClass() {
	let elements = document.querySelectorAll('.btn')
	elements.forEach(function(el) {
	el.classList.remove('info')
	});
}
