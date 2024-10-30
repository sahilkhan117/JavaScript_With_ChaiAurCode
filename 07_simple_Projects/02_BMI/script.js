const form = document.querySelector("form");

const h = document.querySelector("#height");
const w = document.querySelector("#weight");

const result = document.querySelector("#result");
const msg = result.nextElementSibling;

form.addEventListener("submit", (e) => {

    const height = parseInt(h.value);
	const weight = parseInt(w.value);

    if (height == "" || height < 0 || isNaN(height)) {
        msg.innerHTML = `Please give a valid Height ${height}`;
	} else if (weight == "" || weight < 0 || isNaN(weight)) {
		msg.innerHTML = `Please give a valid Height ${weight}`;
	} else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;

        let col = bmi < 18.6 ? "yellow" : bmi < 24.9 ? "green" : "red";

});