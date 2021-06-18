var initCoords = {
      lat: 21.128398,
      lng: -101.6486384
  };
  

function iniciaMapa() {
      var MapStyle = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#528079"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#ffff"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#B319B2"
                    }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#4b6878"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#64779e"
                    }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#4b6878"
                    }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#334e87"
                    }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#283d6a"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#37E66A"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#3C7680"
                    }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#F1D930"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#304a7d"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#98a5be"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#E972AD"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#255763"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#B319B2"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#883BCC"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#3a4762"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#19B39B"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                    ]
                }
                ],
                    {name: 'MAPA PERSONALIZADO'}
        );
    
        var properties = {
            center: { 
                 lat: 21.152639, lng:  -101.711598
            },
            zoom: 14,
            mapTypeControlOptions: {
                mapTypeIds : [ 'roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
            }
            
        };
        
      fetch('estacionamientos.json')
      .then( function(response){
          response.json().then(function(data){
              const map = new google.maps.Map(document.getElementById('mapa'), properties);
              map.mapTypes.set('style_map', MapStyle);
    map.setMapTypeId('style_map');

  
              data.forEach(marcador => {
                  var informacion = 
                  `<div class="marker">
                      <div class="card-body">
                          <h5 class="card-title">${marcador.PlaceName}</h5>
                      </div>
                  </div>`;
  
                  var infoWindow = new google.maps.InfoWindow({
                      content: informacion
                  });
  
                  if(marcador.PlaceName == marcador.PlaceName){
                      let marker = new google.maps.Marker({
                          map: map,
                          position: new google.maps.LatLng(marcador.Latitude, marcador.Longitude),
                          title: marcador.PlaceName
                      })
  
                      marker.addListener('click', function(){
                          infoWindow.open(map, marker);
                      })
                  }
          });
      })
      .catch( function(error){
          console.log('Ocurrió un error', error);
      })
      
      }
      )
}

const listaloggedout = document.querySelectorAll(".logged-out");
const listaloggedin = document.querySelectorAll(".logged-in");
const datosdelacuenta = document.querySelector(".datosdelacuenta");

const configuraMenu = (user) => {
  if (user) {
    db.collection("usuarios")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
                <p>Nombre: ${doc.data().nombre}</p>
                <p>Correo: ${user.email}</p>
                <p>Teléfono: ${doc.data().telefono}</p>
                <p>Dirección: ${doc.data().direccion}</p>
            `;
        datosdelacuenta.innerHTML = html;
      });

    listaloggedin.forEach((item) => (item.style.display = "block"));
    listaloggedout.forEach((item) => (item.style.display = "none"));
  } else {
    datosdelacuenta.innerHTML = "";
    listaloggedin.forEach((item) => (item.style.display = "none"));
    listaloggedout.forEach((item) => (item.style.display = "block"));
  }
};

const listadeplatillos = document.getElementById("listadeplatillos");

const obtienePlatillos = (data) => {
  if (data.length) {
    let html = "";

    data.forEach((doc) => {
      const platillo = doc.data();
      console.log(platillo);
      const columna = `
                <div class="col-12 col-md-4">
                    <img src="images/${platillo.imagen}" alt="${platillo.nombre}">
                    <p>${platillo.nombre}</p>
                    <p class="text-danger">$${platillo.precio}.00 pesos</p>
                  
                        <button class="btn btn-primary">Pagar Ahora</button>
                    </a>
                </div>
            `;

      html += columna;
    });

    listadeplatillos.innerHTML = html;
  } else {
    listadeplatillos.innerHTML =
      '<p class="text-center">INICIE SESIÓN PARA PODER VER SUS PLATILLOS.</p>';
  }
};
