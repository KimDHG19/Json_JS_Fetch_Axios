fetch('http://localhost:3000/shortcuts')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.log(err);
	});