//Globals
var currentTextInput;
var puzzelArrayData;
var numberOfActionButtons = 7
const tempArr =[]

//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.classList.add("mystyle")
			}
		}
	}
	addHint();
    // document.getElementById("userAnswer").onclick = alert('hello')
	createActionButtons()

	let submitBtn = document.getElementById('submit')
	submitBtn.addEventListener('click',function() {
	console.log('submit here')
	submitAnswer(tempArr)
})

}
//Adds the hint numbers
function addHint(){
	document.getElementById("txt_0_0").placeholder = "1";
	document.getElementById("txt_1_6").placeholder = "2";
	document.getElementById("txt_0_9").placeholder = "3";
	document.getElementById("txt_6_10").placeholder = "4";
	document.getElementById("txt_5_0").placeholder = "5";
	document.getElementById("txt_7_3").placeholder = "6";
	document.getElementById("txt_2_4").placeholder = "7";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
return [
    ['p',0, 0, 0, 0, 0, 0, 0, 0, '3', 0, 0],
				
    ['r',0, 0, 0, 0, 0, '2', 0, 0, '3', 0, 0],
				
    ['o',0, 0, 0, '7', '7', '2', '7', '7', '7', 0, 0],
				
    ['s',0, 0, 0, 0, 0, '2', 0, 0, '3', 0, 0],
				
    ['p',0, 0, 0, 0, 0, '2', 0, 0, 0, 0, 0],
				
    ['e','l', 'e', 'p', 'h', 'a', 'n', 't', 0, 0, 0, 0],
				
    ['c',0, 0, 0, 0, 0, '2', 0, 0, 0, '4', 0],
				
    ['t',0, 0, '6', '6', '6', '2', '6', '6', '6', '4', '6'],
				
    ['i',0, 0, 0, 0, 0, '2', 0, 0, 0, '4', 0],
				
    ['n',0, 0, 0, 0, 0, 0, 0, 0, 0, '4', 0],
				
    ['g',0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';
					
				}else{
					selectedInputTextElement.style.backgroundColor = 'white';
				}
			}
		}
	}
}
//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzelArrayData[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		for(j = row; j >= 0; j--){
			if(puzzelArrayData[j][column] != 0){
				document.getElementById('txt' + '_' + j + '_' + column).value = puzzelArrayData[j][column];
				}else break;
		}
		// Print elements on right
		for(i = column; i< puzzelArrayData[row].length; i++){
			if(puzzelArrayData[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = puzzelArrayData[row][i];
				}else break;
		}
		
		// Print elements below
		for(m = row; m< puzzelArrayData.length; m++){
			if(puzzelArrayData[m][column] != 0){
				document.getElementById('txt' + '_' + m + '_' + column).value = puzzelArrayData[m][column];
				}else break;
		}
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(puzzelArrayData[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = puzzelArrayData[row][k];
				}else break;
		}
		// Done!	
	}
}

function submitAnswer([qNum,{type,ans}]){
  console.log('qNum here',qNum)
  let submittedAns = document.getElementById('userAnswer').value
  const ansArr = submittedAns.split('')
  let index, start
  if(qNum===5){
   index = 5
   start = 0
  }
  if(qNum===2){
    index = 1
    start = 6
   }
  ansArr.forEach((v,i) => {
      if(type === 'row'){
      document.getElementById(`txt_${index}_${start+i}`).value = v
      }
      if(type === 'col'){
        document.getElementById(`txt_${index+i}_${start}`).value = v
        }
  });
  console.log(ansArr);
}

const qObj = {
	1:{
		type:'col',
		ans:'prospecting'
	},
	5:{
		type:'row',
		ans:'elephant'
	},
	7:{
		type:'row',
		ans:'elepha'
	}
}
function createActionButtons(){
	let actionBtn = document.getElementById('actionButton')
	for(let k=1; k<=numberOfActionButtons; k++){
		let img = document.createElement('img');
		img.src = 'images/Group 272.png';
		img.style.padding = "0px 10px 0px 0px";
		img.style.position = 'relative'
		actionBtn.appendChild(img);
		
		let heading = document.createElement('span')
		heading.setAttribute('id',`heading${k}`)
		heading.innerHTML=k
		heading.style.fontWeight ='bold'
		actionBtn.appendChild(heading)
		
		if(Object.prototype.hasOwnProperty.call(qObj, k)){
			img.addEventListener('click', function(){
				showInput(qObj[k], k);
			});
			heading.addEventListener('click', function(){
				showInput(qObj[k], k);
			});
		}
		
	}
}

function showInput(obj,qNum) {
	tempArr.length = 0
	let rightPanel =document.getElementById('rightPanel')
	rightPanel.style.visibility = 'visible'
	tempArr.push(qNum,obj)
	console.log(tempArr)
}





