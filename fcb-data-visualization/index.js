console.log("Hello World!");

//will retieve the html code of the selected element.
// document means HTML.
const dateElement = document.getElementById('date');

console.log(dateElement);


//Date() constructor will allow us to retrieve the current date
let currentDate = new Date();

console.log(currentDate)

// sets the information we want to display along with their expected type
let dateOptions = {year: 'numeric', month: 'long', day: "numeric"};

// innerHTML to used to set the  content of the HTML Elementt
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid APU code to retrieve trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '6d58c3c47bmshedf123b691b45bbp121735jsn7f58544e8bc6',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};
/*
let myPost = {
	name: "Lee Sung Kyung",
	queyUrl:"search?q=%22Lee+Sung+Kyung%22",
	volume:31799,
	followers: 3895734
}
console.log(myPost);
console.log(myPost.name);
console.log(myPost.queyUrl);
console.log(myPost.followers);

let graphData = [
// index: 0
{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
 // index: 1
		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
]

console.log(graphData);
console.log(graphData[1]);

console.log(graphData[1]);
console.log(graphData);

graphData.push(myPost);	
console.log(graphData);	
*/
let graphData = [];	

fetch(url, options)
.then(res => res.json())
.then(data => {

	console.log(data);

	console.log(graphData.length);

for(let i =0; i < 25; i++) {
	graphData.push(
	{
		"name": data.trends[i].name,
		"volume": data.trends[i].volume
		}
	  )

	}

let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
	return object.name;
})

console.log(topics);

let volumes = graphData.map(object =>{
return object.volume
})
console.log(volumes);

const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
	type: 'bar',
	data: {
		labels: topics,
		datasets: [{
		    label: '# of tweets/xeets',
		    data: volumes,
		    borderWidth: 2,
	        backgroundColor: [
	    		'rgba(255, 99, 132, 0.2)',
	    		'rgba(255, 159, 64, 0.2)',
	    		'rgba(255, 205, 86, 0.2)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
	        ],
	        borderColor: [
	    		'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
	        ],
	        hoverBackgroundColor: [
	        	'rgb(255, 99, 132)',
	        	'rgb(255, 159, 64)',
	        	'rgb(255, 205, 86)',
	        	'rgb(75, 192, 192)',
	        	'rgb(54, 162, 235)',
	        	'rgb(153, 102, 255)',
	        	'rgb(201, 203, 207)'
	        ]
		}]
	},
	options: {
	  indexAxis: 'y',
	  scales: {
	    y: {
	      beginAtZero: true
	    }
	  }
	}
});
})

