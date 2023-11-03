fetch('https://api.weatherapi.com/v1/current.json?key=a0edc6b5af8749b3a8b164009230111&q=Varanasi&aqi=no').then(function(response){
   return response.json()
}).then(function(resp1){
   console.log(resp1);
   console.table(resp1)
})