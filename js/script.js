function searchIP() {
    const apiKey = "at_NSyBGaCqt2exym4TGVYvJT3S7GQTk"; // Example API key
    // const ip = '161.185.160.93';
    const ip = document.getElementById('ipSearch').value; // Example IP address
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`; // Example URL
    
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid IP or Request Error");
              }
              return response.json();
    })
        .then(data => {
            const apiContent = document.getElementById("apiContent"); // API content element
            const map = document.getElementById("map"); // Map element
            apiContent.style.visibility = 'visible';
            apiContent.innerHTML = `
                <div class="row g-0">
                    <div class="col-sm-12 col-lg-3">
                        <p>IP Address</p>
                        <h3>${data.ip}</h3>
                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <p>Location</p>
                        <h3>${data.location.city}, ${data.location.region}, ${data.location.country}</h3>
                    </div>

                    <div class="col-sm-12 col-lg-3">
                        <p>Timezone</p>
                        <h3>${data.location.timezone}</h3>
                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <p>ISP</p>
                        <h3>${data.isp}</h3>
                    </div>
                </div>
            `;
            map.style.visibility = 'visible';

            showMap(data.location.lat, data.location.lng);
            
        // console.log("IP:", data.ip);
        // console.log("Localização:", data.location); // contém cidade, região, país, coords
        // console.log("Latitude:", data.location.lat);
        // console.log("Longitude:", data.location.lng);
        // console.log("Timezone:", data.location.timezone);
        // console.log("ISP:", data.isp);
    })
}

let map; // Agora `map` está no escopo global do script

function showMap(lat, lng) {
    if (!map) {
      map = L.map("map").setView([lat, lng], 13);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else {
      map.setView([lat, lng], 13);
    }
  
    L.marker([lat, lng]).addTo(map);
  }

