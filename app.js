function prayerTimes(latitude, longitude){
    fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(Response => Response.json())
    .then(function(Response){
        let date = new Date();
        let today = date.getDate() -1;
        
        //console.log(Response.data[today])
    });
}


function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);

}

function error(){
    alert('Cannot access the  location')
}

function userLocation(){
    if(!navigator.geolocation){
        alert('Geolocation not Found');
    }else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app = document.getElementById('app');
    let  h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);

    userLocation();
}

index();