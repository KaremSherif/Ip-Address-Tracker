const apiHost = 'cors-anywhere.herokuapp.com';
const yourApi = 'ENTER_YOUR_API'
const apiUrl = 'https://ipapi.co/8.8.8.8/json/'

const ipAddress = document.querySelector('.ip')
const clocation = document.querySelector('.country')
const utcZone = document.querySelector('.utc')
const isp = document.querySelector('.org')

const textInput = document.querySelector('#ip-input')
const sumbmitBtn = document.querySelector('#submit-btn')
// ip api

async function getApi(){

    const response = await fetch('https://ipapi.co/8.8.8.8/json/');
    const data = await response.json()
    // ipAddress.textContent = data.ip
    // clocation.textContent = data.country_name
    // utcZone.textContent = ` UTC ${data.utc_offset}`
    // isp.textContent = data.org
    // console.log(data);
}

getApi()


// map api


const map = L.map('map').setView([0, 0], 0);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([0, 0]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

const updatemark = (mark = [42, 42]) => {
    map.setView(mark, 7)
    L.marker(mark).addTo(map)
}

updatemark()

const ipDetails = (defalut_ip) => {
    if(defalut_ip == undefined){
        let url =`${yourApi}${apiHost}${apiUrl}?apiKeys=${yourApi}`
    }else{
        let url =`${yourApi}${apiHost}${apiUrl}?apiKeys=${yourApi}`
    }
    // ipAddress.textContent = data.ip
    // clocation.textContent = data.country_name
    // utcZone.textContent = ` UTC ${data.utc_offset}`
    // isp.textContent = data.org
    
    // mark([data.location.lat, data.location.ing])
}

ipDetails()