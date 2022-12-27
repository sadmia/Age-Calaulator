"use strict";


let manthBarth = document.getElementById('manthBarth');
let dayBarth = document.getElementById('dayBarth');
let yearBarth = document.getElementById('yearBarth');

let manthDate = document.getElementById('manthDate');
let manthDateOption = manthDate.getElementsByTagName('option');
let dayDate = document.getElementById('dayDate');
let yearDate = document.getElementById('yearDate');

let submitBtn = document.getElementById('submitBtn');

let outputView = document.querySelector('.outputView');
let closeBtn = document.getElementById('closeBtn');

let yearShow = document.getElementById("yearShow");
let manthShow = document.getElementById("manthShow");
let dayShow = document.getElementById("dayview");

let hoursAll = document.getElementById("hoursAll");
let daysAll = document.getElementById("daysAll");
let weeksAll = document.getElementById("weeksAll");
let mandtAll = document.getElementById("mandtAll");


let liveDate = new Date();

yearDate.value = liveDate.getFullYear();
yearDate.max = liveDate.getFullYear();
manthDate.value = liveDate.getMonth() + 1;
dayDate.value = liveDate.getDate();


submitBtn.addEventListener("click", function(){
	if (yearBarth.value == "") {
		yearBarth.style.borderColor = "red";
	} else  {
		yearBarth.style.borderColor = "";
	}
	if (yearDate.value == "") {
		yearDate.style.borderColor = "red";
	} else  {
		yearDate.style.borderColor = "";
	}

	if (yearBarth.value != "" && yearDate.value != "") {
		let barthDate = new Date(yearBarth.value + "-" + manthBarth.value + "-" +  dayBarth.value);
		let liveDate = new Date(yearDate.value + "-" + manthDate.value + "-" +  dayDate.value);

		outputView.style.display = "block";

		
		let bdTime = barthDate.getTime();
		let liveTime = liveDate.getTime();

		let menTime = liveTime - bdTime;

		let secend = Math.floor(menTime / 1000);
		let minite = Math.floor(secend / 60);
		let hour = Math.floor(minite / 60);
		let day = Math.floor(hour / 24);
		let manth = Math.floor(day / 30);
		let year = Math.floor(manth / 12);

		let secend_v = secend % 60;
		let minite_v = minite % 60;
		let hour_v = hour % 60;
		let day_v = day % 30;
		let manth_v = manth % 12;
		let year_v = year % 365;

		yearShow.innerHTML = year_v;
		manthShow.innerHTML = manth_v;
		dayShow.innerHTML = day_v;

		let week = Math.floor(day / 7);

		mandtAll.innerHTML = manth;
		weeksAll.innerHTML = week;
		daysAll.innerHTML = day;
		hoursAll.innerHTML = hour;

	}

});




closeBtn.addEventListener("click", function(){

	outputView.style.display = "none";

});


