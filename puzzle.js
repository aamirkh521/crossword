//Globals
var flag = location.search.split('flag=')[1] ? location.search.split('flag=')[1] : null
var currentTextInput;
var puzzelArrayData;
var numberOfActionButtons = 10;
const tempArr = [];
let qObj, indexObj
if(flag === 'rising'){
 qObj = {
  1: {
    type: "col",
    ans: "ARMATORILOR",
  },
  2: {
    type: "col",
    ans: "CIVIL",
  },
  3: {
    type: "row",
    ans: "ADECVARE",
  },
  4: {
    type: "row",
    ans: "FRANSIZA",
  },
  5: {
    type: "col",
    ans: "CONTRACTANT",
  },
  6: {
    type: "col",
    ans: "STRATIFICAREA",
  },
  7: {
    type: "col",
    ans: "VIATA",
  },
  8: {
    type: "row",
    ans: "ASIGURATORILOR",
  },
  9: {
    type: "row",
    ans: "AMBULATORII",
  },
  10: {
    type: "row",
    ans: "DESPAGUBIREA",
  },
}

 indexObj = {
	1 : {
		index : 0,
		start : 12,
	},
	2 : {
		index : 0,
		start : 15
	},
	3: {
		index : 1,
		start : 6
	},
	4: {
		index : 3,
		start : 10
	},
	5: {
		index : 5,
		start : 9
	},
	6: {
		index : 6,
		start : 6
	},
	7: {
		index : 8,
		start : 2
	},
  8: {
		index : 9,
		start : 0
	},
  9: {
		index : 13,
		start : 9
	},
  10: {
		index : 17,
		start : 6
	}
}
}
else if(flag === 'achiever'){
  qObj = {
    1: {
      type: "col",
      ans: "INTERNA",
    },
    2: {
      type: "col",
      ans: "CONSULTANTA",
    },
    3: {
      type: "col",
      ans: "CONSUMATORII",
    },
    4: {
      type: "row",
      ans: "TERORISM",
    },
    5: {
      type: "col",
      ans: "INTEGRITATEA",
    },
    6: {
      type: "col",
      ans: "BENEFICIARUL",
    },
    7: {
      type: "col",
      ans: "TRANSPARENTA",
    },
    8: {
      type: "col",
      ans: "SUBIECTIVE",
    },
    9: {
      type: "row",
      ans: "FRAUDAIINTENTIONATA",
    },
    10: {
      type: "row",
      ans: "ANUITATE",
    },
  }
  
   indexObj = {
    1 : {
      index : 1,
      start : 7,
    },
    2 : {
      index : 2,
      start : 9,
    },
    3: {
      index : 3,
      start : 13
    },
    4: {
      index : 5,
      start : 3
    },
    5: {
      index : 7,
      start : 11
    },
    6: {
      index : 8,
      start : 16
    },
    7: {
      index : 8,
      start : 19
    },
    8: {
      index : 9,
      start : 4
    },
    9: {
      index : 10,
      start : 1
    },
    10: {
      index : 18,
      start : 6
    }
  }
}
else if(flag === 'proficient'){
  qObj = {
    1: {
      type: "col",
      ans: "ANUITATI",
    },
    2: {
      type: "col",
      ans: "RISCURILEDINAMICE",
    },
    3: {
      type: "row",
      ans: "INDEMNIZATIA",
    },
    4: {
      type: "row",
      ans: "CASCO",
    },
    5: {
      type: "col",
      ans: "FLEXA",
    },
    6: {
      type: "row",
      ans: "COLECTIV",
    },
    7: {
      type: "col",
      ans: "AGRICOLE",
    },
    8: {
      type: "row",
      ans: "FIDELITATE",
    },
    9: {
      type: "row",
      ans: "ANIMALE",
    },
    10: {
      type: "row",
      ans: "CAUTIUNE",
    },
  }
  
   indexObj = {
    1 : {
      index : 1,
      start : 17,
    },
    2 : {
      index : 3,
      start : 7,
    },
    3: {
      index : 3,
      start : 13
    },
    4: {
      index : 4,
      start : 7
    },
    5: {
      index : 6,
      start : 14
    },
    6: {
      index : 7,
      start : 12
    },
    7: {
      index : 10,
      start : 10
    },
    8: {
      index : 13,
      start : 5
    },
    9: {
      index : 16,
      start : 4
    },
    10: {
      index : 19,
      start : 0
    }
  }
}
else if(flag === 'champion'){
  qObj = {
    1: {
      type: "col",
      ans: "ANGAJATORUL",
    },
    2: {
      type: "row",
      ans: "TREI",
    },
    3: {
      type: "col",
      ans: "INSPECTIE",
    },
    4: {
      type: "row",
      ans: "PAD",
    },
    5: {
      type: "col",
      ans: "GRUP",
    },
    6: {
      type: "row",
      ans: "ASIGURATOR",
    },
    7: {
      type: "col",
      ans: "KID",
    },
    8: {
      type: "row",
      ans: "MANDAT",
    },
    9: {
      type: "col",
      ans: "CMR",
    },
    10: {
      type: "row",
      ans: "OPERATOR",
    },
  }
  
   indexObj = {
    1 : {
      index : 3,
      start : 15,
    },
    2 : {
      index : 8,
      start : 5,
    },
    3: {
      index : 8,
      start : 8
    },
    4: {
      index : 8,
      start : 14
    },
    5: {
      index : 9,
      start : 12
    },
    6: {
      index : 10,
      start : 7
    },
    7: {
      index : 12,
      start : 6
    },
    8: {
      index : 14,
      start : 3
    },
    9: {
      index : 14,
      start : 13
    },
    10: {
      index : 16,
      start : 6
    }
  }
}
let rightAnswer = 0
let numberOfQues = 10

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
  if(flag === 'rising'){
  document.getElementById("txt_0_12").placeholder = "1";
  document.getElementById("txt_0_15").placeholder = "2";
  document.getElementById("txt_1_6").placeholder = "3";
  document.getElementById("txt_3_10").placeholder = "4";
  document.getElementById("txt_5_9").placeholder = "5";
  document.getElementById("txt_6_6").placeholder = "6";
  document.getElementById("txt_8_2").placeholder = "7";
  document.getElementById("txt_9_0").placeholder = "8";
  document.getElementById("txt_13_9").placeholder = "9";
  document.getElementById("txt_17_6").placeholder = "10";
  }
  if(flag === 'achiever'){
    document.getElementById("txt_1_7").placeholder = "1";
    document.getElementById("txt_2_9").placeholder = "2";
    document.getElementById("txt_3_13").placeholder = "3";
    document.getElementById("txt_5_3").placeholder = "4";
    document.getElementById("txt_7_11").placeholder = "5";
    document.getElementById("txt_8_16").placeholder = "6";
    document.getElementById("txt_8_19").placeholder = "7";
    document.getElementById("txt_9_4").placeholder = "8";
    document.getElementById("txt_10_1").placeholder = "9";
    document.getElementById("txt_18_6").placeholder = "10";
    }
    if(flag === 'proficient'){
      document.getElementById("txt_1_17").placeholder = "1";
      document.getElementById("txt_3_7").placeholder = "2";
      document.getElementById("txt_4_7").placeholder = "3";
      document.getElementById("txt_6_7").placeholder = "4";
      document.getElementById("txt_6_14").placeholder = "5";
      document.getElementById("txt_7_12").placeholder = "6";
      document.getElementById("txt_10_10").placeholder = "7";
      document.getElementById("txt_13_5").placeholder = "8";
      document.getElementById("txt_16_4").placeholder = "9";
      document.getElementById("txt_19_0").placeholder = "10";
      }
      if(flag === 'champion'){
        document.getElementById("txt_3_15").placeholder = "1";
        document.getElementById("txt_8_5").placeholder = "2";
        document.getElementById("txt_8_8").placeholder = "3";
        document.getElementById("txt_8_14").placeholder = "4";
        document.getElementById("txt_9_12").placeholder = "5";
        document.getElementById("txt_10_7").placeholder = "6";
        document.getElementById("txt_12_6").placeholder = "7";
        document.getElementById("txt_14_3").placeholder = "8";
        document.getElementById("txt_14_13").placeholder = "9";
        document.getElementById("txt_16_6").placeholder = "10";
        }
}
//Stores ID of the selected cell into currentTextInput
// function textInputFocus(txtID123){
// 	currentTextInput = txtID123;
// }
//Returns Array
function preparePuzzelArray() {
  if(flag === 'rising'){
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}
if(flag === 'achiever'){
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]
  ];
}
if(flag === 'proficient'){
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}
if(flag === 'champion'){
   return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,    0, 0, 0],
    [0, 0, 0,   1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,    0, 0, 0],
    [0, 0, 0,   0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,    0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}
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
		rightAnswer++
		ansArr.forEach((v, i) => {
			if (type === "row") {
			  document.getElementById(`txt_${index}_${start + i}`).value = v;
			  document.getElementById(`txt_${index}_${start + i}`).classList.remove('error')
			  document.getElementById(`txt_${index}_${start + i}`).classList.remove('info-cell')
			  document.getElementById(`txt_${index}_${start + i}`).classList.add('success')
			}
			if (type === "col") {
			  document.getElementById(`txt_${index + i}_${start}`).value = v;
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('error')
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('info-cell')
			  document.getElementById(`txt_${index + i}_${start}`).classList.add('success')
			}
			document.getElementById(`img${qNum}`).classList.add('success-btn')
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
			  document.getElementById(`txt_${index}_${start + i}`).classList.remove('info-cell')
			  document.getElementById(`txt_${index}_${start + i}`).classList.add('error')
			}
			if (type === "col") {
			  document.getElementById(`txt_${index + i}_${start}`).value = v;
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('success')
			  document.getElementById(`txt_${index + i}_${start}`).classList.remove('info-cell')
			  document.getElementById(`txt_${index + i}_${start}`).classList.add('error')
			}
			document.getElementById(`img${qNum}`).classList.add('error-btn')
		  });
      document.getElementById("successMsg").style.display = "none";
      document.getElementById("successDesc").style.display = "none";
      document.getElementById("failMsg").style.display = "block";
      document.getElementById("failDesc").style.display = "block";
	  
    }
    // checkClicked()
	if(rightAnswer === numberOfQues){
		alert('success')
	}
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
    img.src = "images/gameplay_screen/Group 272.png";
	img.classList.add('btn')
    img.setAttribute("id", `img${k}`);

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
  document.getElementById("successMsg").style.display = "none";
  document.getElementById("successDesc").style.display = "none";
  document.getElementById("failMsg").style.display = "none";
  document.getElementById("failDesc").style.display = "none";
  
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
