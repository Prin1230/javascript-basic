const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e.target);
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      const e = results.innerHTML = `<span id="p">${bmi} UNDER WEIGHT</span>`;
     p.style.backgroundColor="yellow";
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span id="p">${bmi} NORMAL</span>`;
      p.style.backgroundColor="green";
    } else {
      results.innerHTML = `<span id="p">${bmi} OverWeight</span>`;
      p.style.backgroundColor="red";
    }
  }
});