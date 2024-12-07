const aprSlider = document.querySelector("#apr");
const button = document.querySelector("#button");
const interestOutput = document.querySelector("#accumulated");
const principal = document.querySelector("#principal");
const period = document.querySelector("#period");
const years = document.querySelector("#years");

const totalOutput = document.querySelector("#total");

aprSlider.addEventListener("input", (e) => {
  interestOutput.textContent = aprSlider.value;
});
button.addEventListener("click", calculate);
function calculate() {
  const pri = Number(principal.value);
  const per = Number(period.value);
  const yea = Number(years.value);
  const apr = Number(aprSlider.value);
  const finalOutput = pri * (1 + apr / 100 / per) ** (per * yea);
  totalOutput.textContent = finalOutput.toFixed(2);
}
