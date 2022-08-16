// Часы

function showTime () {
    const date = new Date(); // создаем постоянную и получаем время
    const currentTime = date.toLocaleTimeString(); // метод возращающий из date представление времени 
    const time = document.querySelector('.time'); // в time передаем элемент с классом .time 
    time.textContent = currentTime; // в элемент .time вставляем текст с временем
    setTimeout(showTime, 1000); // заставляем скрипт обновлятся каждую секунду и показывать новое время
}

showTime ()

// Дата и день недели

function showDate() {
    const showTime = new Date();
    const options = {weekday: 'long',month: 'long', day: 'numeric'};
    const currentDate = showTime.toLocaleDateString('en-US', options)
    const date = document.querySelector('.date'); 
    date.textContent = currentDate;
    setTimeout(showDate, 1000)
}

showDate()

// Приветствие пользователя в зависимости от времени суток

function getTimeOfDay () {
  if (hours > 4 && hours < 10) {
      return 'Morning' 
  } else if (hours > 10 && hours < 18) {
      return 'Day'
  } else if (hours > 18 && hours < 22) {
      return 'Evening' 
  } else if (hours > 22 || hours < 4) {
      return 'Night'
  }
}

const date = new Date();
const hours = date.getHours();
const greetingHours =  getTimeOfDay(hours)

function showGreeting() {
    const greeting = document.querySelector('.greeting')
    greeting.textContent = `Good ${greetingHours}`;    
    setTimeout(showGreeting, 1000)
}

showGreeting()

//  Запоминаем имя пользователя

const yourName = document.querySelector('.name')

//перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorage() {
    localStorage.setItem('name', yourName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        yourName.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

// Слайдер для фоновых изображений

const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

let bgNum = getRandomInt (1, 21)
console.log(bgNum)
// slidePrev.addEventListener('click', setBg) 
// slideNext.addEventListener('click', setBg)
const body = document.querySelector('body')

function setBg() {
  const url = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"
  const dayTime = greetingHours.toLowerCase()
  const bgNumSt = bgNum.toString().padStart(2,'0')
  const jpeg = ".jpg"
  if (greetingHours == 'Morning'){
    body.style.backgroundImage = `${url}${dayTime}/${bgNumSt}${jpeg}')`
  } else if (greetingHours == 'Day') {
    body.style.backgroundImage = `${url}${dayTime}/${bgNumSt}${jpeg}')`
  } else if (greetingHours == 'Evening') {
    body.style.backgroundImage = `${url}${dayTime}/${bgNumSt}${jpeg}')`
  } else if (greetingHours == 'Night') {
    body.style.backgroundImage = `${url}${dayTime}/${bgNumSt}${jpeg}')`
  }
}

setBg()



// Виджет погоды

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city')

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=fe506bc9921ff3a27bc0f347966cc48d&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Ветер: ${data.wind.speed} м/с`
    humidity.textContent = `Влажность: ${data.main.humidity}%`
    city.textContent = `${data.name}`
  }

 
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

// Цитаты

async function getQuotes() {  
  const quote = document.querySelector('.quote')
  const author = document.querySelector('.author')
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const quoteNum = Math.floor(Math.random() * data.length)
  const randQuote = data[quoteNum]
  quote.textContent = randQuote.text
  author.textContent = randQuote.author
}

getQuotes();

const quotesRef = document.querySelector('.change-quote')
quotesRef.addEventListener('click',getQuotes)


// Музыкальный плеер

// import playList from './playList.js';

// const audio = new Audio();
// let isPlay = false,
//     playNum = 0
// const play = document.querySelector('.play')
// play.addEventListener('click',playAudio)

// const playNext = document.querySelector('.play-next')
// playNext.addEventListener('click', playNextF)
// function playNextF() {
//   playNum++
// }

// const playPrev = document.querySelector('.play-prev')
// playPrev.addEventListener('click', playPrevF)
// function playPrevF() {
//   playNum--
// }

// function playAudio() {
//   audio.src = '../assets/sounds/Aqua Caelestis.mp3';
//   audio.currentTime = 0;
//   audio.play();
  // audio.src = playList[playNum].src;
  // if (isPlay == false) {
  //   isPlay = true
  // } else {
  //   isPlay = false
  // }
//   play.classList.toggle('pause')
// }

// const li = document.createElement('li');
// const playListContainer = document.querySelector('.play-list')

// playList.forEach(el => {
//   playListContainer.textContent = playListContainer.append(li)
//   playListContainer.classList.add('play-item')
// })