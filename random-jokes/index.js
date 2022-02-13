const english = document.querySelector('.english');
const russian = document.querySelector('.russian');
const main_image = document.querySelector('.main_image');
const btn = document.querySelector('.btn');

// russian.addEventListener('click', function switchToRussian(event) {
//     if(event.target.classlist.contains('russian')) {
    
//     }
// })  
        
async function getDataRu() {
    const quotesRu = 'data_ru.json';
    const resRu = await fetch(quotesRu);
    const data = await resRu.json();
    russian.classList.add('active')
    english.classList.remove('active')
    btn.addEventListener('click', function changeData() {
        document.getElementById("phrase").textContent = data[Math.floor(Math.random() * 100)].text
    });
    showData(data[Math.floor(Math.random() * 100)].text)
}

async function getDataEn() {
    const quotesEn = 'data_en.json';
    const resEn = await fetch(quotesEn);
    const data = await resEn.json();
    russian.classList.remove('active')
    english.classList.add('active')
    btn.addEventListener('click', function changeData() {
        document.getElementById("phrase").textContent = data[Math.floor(Math.random() * 100)].text
    });
    showData(data[Math.floor(Math.random() * 100)].text)
}

btn.addEventListener('click', function changeData() {
    main_image.classList.toggle('active_image')
});

russian.addEventListener('click', getDataRu)
english.addEventListener('click', getDataEn)


function showData(data) {
    document.getElementById("phrase").textContent = data
}

getDataRu();