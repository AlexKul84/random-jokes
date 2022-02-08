const url = 'https://type.fit/api/quotes';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data[2].author);
    showData(data[2].text)
  }

function showData(data) {
    document.getElementById("phrase").textContent = data
}

getData();