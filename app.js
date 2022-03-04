let key = "d89724a568dfde12c0d0a02fecc1fda0"



function canWeGetOut() {

    let watchID = navigator.geolocation.watchPosition(function getPosition(position) {

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=' + key).then(response => response.json())  // convert to json
        .then(json => {
            
            let city = json['name']
            
            let data = json['main']
            console.log(data)
            let temp = parseInt(data['temp']) - 273.5 + "°"
            console.log(temp)

            if (parseInt(data['temp']) - 273.5 < 0) {
                document.getElementById('UPDATE').innerHTML = "Bah frérot il fait froid quand même là 🧊"
            } if (parseInt(data['temp']) - 273.5 > 0 && parseInt(data['temp']) - 273.5 < 10) {
                document.getElementById('UPDATE').innerHTML = "Bof genre met au moins un manteau 😬"
            } if (parseInt(data['temp']) - 273.5 > 10 && parseInt(data['temp']) - 273.5 < 15) {
                document.getElementById('UPDATE').innerHTML = "Honnêtement pourquoi pas frérot 😎"
            } if (parseInt(data['temp']) - 273.5 > 15 && parseInt(data['temp']) - 273.5 < 20) {
                document.getElementById('UPDATE').innerHTML = "Là c'est oui il fait bien bon 🤯"
            } if (parseInt(data['temp']) - 273.5 > 20 && parseInt(data['temp']) - 273.5 < 30) {
                document.getElementById('UPDATE').innerHTML = "Hésite même pas zigoto 🙂"
            } if (parseInt(data['temp']) - 273.5 > 30) {
                document.getElementById('UPDATE').innerHTML = "tu veux mourrir ? 💀"
            }
            

            let p = document.getElementById('pDetails')
            p.innerHTML = '(' + city + ' - ' + temp + ')'
            
        })

        .catch(err => console.log('Request Failed', err)); // Catch errors;
        
    });
}
