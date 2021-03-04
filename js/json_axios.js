const container = document.querySelector(".container");

//funktion för json/api hantering
const showShortcut = () => {
//skapar en tom sträng för HTML-innehåll
	let output = ""

//axios funktioner
	axios.get('http://localhost:3000/shortcuts')
		.then(resp => {
			let data = resp.data
			//testa
			console.log(data)
			data.forEach(e => {
				output += `
            <div class="card">
              <h1>${e.name} </h1>
              <a href="${e.url}">${e.url}</a>
              <img src="${e.image}" alt="logo">
              
            </div>
            `;
				//consol-loggar för test:
				console.log(output);
				//console.log(`${e.name}, ${e.url}, ${e.img}`);

				container.innerHTML = output
			});
		})
		.catch(error => {
			console.log(error);
		});
}

document.addEventListener("DOMContentLoaded", showShortcut)