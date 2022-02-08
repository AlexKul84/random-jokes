async function getData() {
    const quotesRu = 'data_ru.json';
    const resRu = await fetch(quotesRu);
    const data = await resRu.json();

    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function changeData() {
        document.getElementById("phrase").textContent = data[Math.floor(Math.random() * 100)].text
    });

    showData(data[Math.floor(Math.random() * 100)].text)
  }


function showData(data) {
    document.getElementById("phrase").textContent = data
}

getData();