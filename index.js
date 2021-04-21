const api = "https://www.breakingbadapi.com/api/characters";

const header = document.querySelector("#header");
const content = document.querySelector("#content");

async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    printData(data);
  } catch (e) {
    alert(" Sorry! Somthing wrong");
  }
}

function printData(data) {
  header.innerHTML += `
  <select class="form-control" onchange="getCh(this.value)">

  ${data.map((Character) => `<option>${Character.name}</option>`)}
   </select>`;
}

async function getCh(name) {
  const response = await fetch(`${api}?name=${name}`);
  const data = await response.json();
  console.log(data);
  content.innerHTML = `<h2>${data[0].name}</h2>`;
  content.innerHTML += `<img src="${data[0].img}"/>`;
}
getData();
