var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Eliot Jenkins", "Optical", 2643);
initialList.push(claim6);
var claim7 = new claim("Jeremy Johnston", "Specialist", 2132);
initialList.push(claim7);
var claim8 = new claim("Peyton Barbour", "Emergency", 23125);
initialList.push(claim8);
var claim9 = new claim("Rocford Thomas", "Primary Care", 822);
initialList.push(claim9);
var claim10 = new claim("Josh Bargess", "Optical", 14132);
initialList.push(claim10);

//DOM variables
var newElement, newText, position;
position = document.getElementById('payouts');

//returns line with the payout amount & patient name.
for (i=0; i<initialList.length; i++){
	var percentCovered = getPercentCovered(initialList[i].visitType);
	var amountPaid = getClaimPayout(initialList[i].visitCost);
	var printReportClaims = "Paid out $" + amountPaid + " for " + initialList[i].patientName + ".";
	console.log(printReportClaims);
	totalPayedOut += amountPaid;
	//appends to DOM - payout report
	var newElement = document.createElement('ul'); 
	var newText = document.createTextNode(printReportClaims);
	newElement.appendChild(newText);
	position.appendChild(newElement);
}

var printTotalPaid = "Total Payout: $" + totalPayedOut;
console.log(printTotalPaid);

//appends to DOM - total payout
var newElement = document.createElement('ul');
var newText = document.createTextNode(printTotalPaid);
newElement.appendChild(newText);
position.appendChild(newElement);

//function to determine percent covered - takes in visit type returns percent covered.
function getPercentCovered(reason){
	var coverageRule;
	switch(reason){
		case ("Optical"):
			coverageRule = 0;
			break;
		case ("Specialist"):
			coverageRule = 10;
			break;
		case ("Emergency"):
			coverageRule = 100;
			break;
		case ("Primary Care"):
			coverageRule = 50;
			break;
	}
	return coverageRule;
}

//function to determine payout amount - takes in visit cost
function getClaimPayout(visitcost){
	var claimPayout = visitcost * (percentCovered / 100);
	return Math.round(claimPayout);
}