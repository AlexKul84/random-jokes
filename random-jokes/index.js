const english = document.querySelector('.english');
const russian = document.querySelector('.russian');

// russian.addEventListener('click', function switchToRussian(event) {
//     if(event.target.classlist.contains('russian')) {
    
//     }
// })  
        
async function getDataRu() {
    const quotesRu = 'data_ru.json';
    const resRu = await fetch(quotesRu);
    const data = await resRu.json();
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function changeData() {
        document.getElementById("phrase").textContent = data[Math.floor(Math.random() * 100)].text
    });
    showData(data[Math.floor(Math.random() * 100)].text)
}

async function getDataEn() {
    const quotesEn = 'data_en.json';
    const resEn = await fetch(quotesEn);
    const data = await resEn.json();
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function changeData() {
        document.getElementById("phrase").textContent = data[Math.floor(Math.random() * 100)].text
    });
    showData(data[Math.floor(Math.random() * 100)].text)
}

russian.addEventListener('click', getDataRu)
english.addEventListener('click', getDataEn)


function showData(data) {
    document.getElementById("phrase").textContent = data
}

getDataRu();