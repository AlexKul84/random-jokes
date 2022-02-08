async function getData() {
    const quotes = 'data_ru.json';
    const res = await fetch(quotes);
    const data = await res.json();

    showData(data[Math.floor(Math.random() * 100)].text)
  }

function showData(data) {
    document.getElementById("phrase").textContent = data
}

getData();