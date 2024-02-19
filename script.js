// crear el mapa
let mapa = L.map('map').setView([-17.391, -65.519], 8);

// agregar el mapa base
let mapaBase = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
{
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

mapaBase.addTo(mapa);

// agregar geojson con sus iconos y popups respectivos
var datos = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "nombre": "Bolivia TV",
          "tipo": "Televisión",
          "facebook": "http://www.boliviatv.bo",
          "localidad": "La Paz",
          "departamento": "La Paz",
          "img": "boliviatv.jpeg",
          "lugar_investigacion": "Trópico, Yapacaní y Montero",
          "tema": "Política Estatal"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -68.13212375,
            -16.49974437
          ]
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Patria Nueva - Illimani",
          "tipo": "Radio",
          "facebook": "https://www.facebook.com/RedPatriaNuevaOficial/",
          "localidad": "La Paz",
          "departamento": "La Paz",
          "img": "illimani.jpeg",
          "lugar_investigacion": "Trópico, Yapacaní y Montero",
          "tema": "Política Estatal"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -68.13243562,
            -16.49961276
          ]
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio La Voz 89.5",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "lavozmont.png",
          "facebook": "https://www.facebook.com/people/La-Voz-FM-89/100043327726574/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.26146210248311,
            -17.318955732084447
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Audio Bosco",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "audiobosc.png",
          "facebook": "https://www.facebook.com/AudioBosco/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.26206918993026,
            -17.330489841437
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Ciudad 101.5 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "radiociud.jpeg",
          "facebook": "https://www.facebook.com/ciudadradio.bo/?locale=es_LA",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.250862208370634,
            -17.338334046428898
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Universal Montero",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "universalmont.png",
          "facebook": "https://www.facebook.com/rtumontero/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25212558237351,
            -17.340986353412205
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Integración 90.3 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "integra.jpeg",
          "facebook": "https://www.facebook.com/integracionfm/?locale=es_LA",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.255805039324215,
            -17.341378085552023
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Católica Carisma 103.1 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "catolica.png",
          "facebook": "https://www.facebook.com/radiocatolicacarisma/?locale=es_LA",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25591347605955,
            -17.34174942130082
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Energy 95.5",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "energy.jpeg",
          "facebook": "https://www.facebook.com/RedioEnergy955/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25829887237933,
            -17.341702863227
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Turbo MIX 91.5 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "turbomix.png",
          "facebook": "https://www.facebook.com/radioturbomixmontero/?locale=es_LA",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25248562453342,
            -17.34427375851199
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Mundial Montero ",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "rmundial.png",
          "facebook": "https://www.facebook.com/RTVMNoticiasMontero/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25058138999826,
            -17.345156398662027
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio María Auxiliadora",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "maux.png",
          "facebook": "https://es-la.facebook.com/radiomariaauxiliadora105/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25533277159984,
            -17.351326184824146
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio TV Mix 89.9 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "mixmont.png",
          "facebook": "https://www.facebook.com/people/RADIO-MIX-899-Montero/100069392006347/?locale=ms_MY",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.248052525277274,
            -17.35183030784357
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Continental 102.3 FM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "contmont.png",
          "facebook": "https://play.google.com/store/apps/details?id=rc.envivo&hl=es_BO&gl=US&pli=1",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.248048367231675,
            -17.352966148958487
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio TV Norte",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "radio-random.jpeg",
          "facebook": null,
          "tipo": "Televisión",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.24254304502911,
            -17.361154826343252
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Canal 8 Visión Cruz",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "visioncruz.jpeg",
          "facebook": "https://www.facebook.com/noticiasvisioncruz/?locale=es_LA",
          "tipo": "Televisión",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.255951164317594,
            -17.340933422860388
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Canal 57 MGM",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "mgm.png",
          "facebook": "https://www.facebook.com/canal57MGM/?locale=es_LA",
          "tipo": "Televisión",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.24960283177289,
            -17.342687486470027
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "TV Latina",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "tvlatina.png",
          "facebook": "https://www.audiokiss.com/tvlatina/",
          "tipo": "Televisión",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.2640318857318,
            -17.34342039807062
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio AudioKiss ",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "audiokiss.png",
          "facebook": "https://www.audiokiss.com/audiokiss/",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.26398261700035,
            -17.343331737057625
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Diario Zona Norte",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "zonanorte.jpeg",
          "facebook": "https://www.facebook.com/diariozonanorte.2020/",
          "tipo": "Prensa Escrita",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25308756873849,
            -17.345300581106457
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Montero Noticias",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "monteronot.png",
          "facebook": "https://www.facebook.com/monteronoticias/?locale=es_LA",
          "tipo": "Medio Digital",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.25532788904259,
            -17.348930338905532
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio El Deber",
          "localidad": "Santa Cruz de la Sierra",
          "departamento": "Santa Cruz",
          "img": "edr.jpeg",
          "facebook": "https://www.facebook.com/eldeberradio",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.1997147295732,
            -17.76004205728846
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio FIDES Santa Cruz",
          "localidad": "Santa Cruz de la Sierra",
          "departamento": "Santa Cruz",
          "img": "fideson.png",
          "facebook": "https://www.facebook.com/profile.php?id=100040278325119",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.18565666434479,
            -17.789838675743084
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Autentika de Montero",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "autentika.png",
          "facebook": "https://www.facebook.com/profile.php?id=100066444972093",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.24774500831997,
            -17.33436326848806
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Bendita Trinidad",
          "localidad": "Montero",
          "departamento": "Santa Cruz",
          "img": "bendita-trinidadmontero.png",
          "facebook": "https://www.facebook.com/benditatrinidadmonterobolivia/?locale=es_LA",
          "tipo": "Radio",
          "lugar_investigacion": "Montero",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.252043991612254,
            -17.32566065924655
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Red UNITEL",
          "localidad": "Santa Cruz de la Sierra",
          "departamento": "Santa Cruz",
          "img": "unitel.jpeg",
          "facebook": "https://www.facebook.com/unitelbolivia",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní y Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.219778728207345,
            -17.821098821914063
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Red UNO de Bolivia",
          "localidad": "Santa Cruz de la Sierra",
          "departamento": "Santa Cruz",
          "img": "reduno.png",
          "facebook": "https://www.facebook.com/RedUnotv",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní y Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.235282291267325,
            -17.80914106014798
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Yapacani",
          "localidad": "Yapacani",
          "departamento": "Santa Cruz",
          "img": "radiotv-yapacani.jpeg",
          "facebook": "https://www.facebook.com/RadioYapacani",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.8819024337686,
            -17.40236569765858
          ]
        },
        "id": 27
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "TV Comunitaria Villa Yapacaní",
          "localidad": "Yapacani",
          "departamento": "Santa Cruz",
          "img": "radio-random.jpeg",
          "facebook": "null",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias sindicales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.8819077630978,
            -17.401567451220075
          ]
        },
        "id": 28
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Ichilo",
          "localidad": "Yapacani",
          "departamento": "Santa Cruz",
          "img": "rtv-ichilo.jpeg",
          "facebook": "https://www.facebook.com/radiotvichilo",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.88054730617067,
            -17.40381205258744
          ]
        },
        "id": 29
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Televisión Amboró canal 25",
          "localidad": "Yapacaní",
          "departamento": "Santa Cruz",
          "img": "tvamboro-yapacani.png",
          "facebook": "https://www.facebook.com/TvAmboro",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.885386097447466,
            -17.405851240885738
          ]
        },
        "id": 30
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Federación Sindical de Colonizadores y Productores Agropecuarios de Yapacani",
          "localidad": "Yapacani",
          "departamento": "Santa Cruz",
          "img": "radio-random.jpeg",
          "facebook": "null",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias sindicales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.88192623035884,
            -17.401678797353753
          ]
        },
        "id": 31
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Canal 11 TV Universitaria UAGRM",
          "localidad": "Santa Cruz de la Sierra",
          "departamento": "Santa Cruz",
          "img": "tvu-scz.jpeg",
          "facebook": "https://www.facebook.com/canal11tvuuagrm/",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní y Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.19749588849473,
            -17.77767076310103
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Omega",
          "localidad": "Yapacani",
          "departamento": "Santa Cruz",
          "img": "rtvomega-yapacani.jpeg",
          "facebook": "https://www.facebook.com/RadioTelevisonOmega/?locale=es_LA",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.88072536319186,
            -17.402054695509833
          ]
        },
        "id": 33
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Asociación Boliviano Japonesa San Juan de Yapacaní",
          "localidad": "San Juan de Yapacaní",
          "departamento": "Santa Cruz",
          "img": "jap.jpg",
          "facebook": "https://abj-sanjuan.org.bo/",
          "tipo": "Televisión",
          "lugar_investigacion": "Yapacaní",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.846168002523996,
            -17.291941129761724
          ]
        },
        "id": 34
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Esperanza Aiquile",
          "localidad": "Aiquile",
          "departamento": "Cochabamba",
          "img": "esperanza.jpeg",
          "facebook": "https://www.facebook.com/aiquileradioesperanza",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.17734915597144,
            -18.204702266560318
          ]
        },
        "id": 35
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Unión Bautista Boliviana",
          "localidad": "Cochabamba",
          "departamento": "Cochabamba",
          "img": "unionbautista-villat.jpeg",
          "facebook": "https://www.facebook.com/profile.php?id=100064776608413",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.1612084539616,
            -17.396285729196947
          ]
        },
        "id": 36
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio y Televisión Comunitaria Carrasco",
          "localidad": "Ivirgarzama",
          "departamento": "Cochabamba",
          "img": "carrasco.png",
          "facebook": "https://www.facebook.com/RTVCarrasco/?locale=es_LA",
          "tipo": "Televisión",
          "lugar_investigacion": "Trópico y Yapacaní",
          "tema": "Noticias sindicales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -64.85749558064126,
            -17.033110983428415
          ]
        },
        "id": 37
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Fides Cochabamba",
          "localidad": "Cochabamba",
          "departamento": "Cochabamba",
          "img": "fides2.jpeg",
          "facebook": "https://www.facebook.com/RadioFidesChapare",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.15810615355518,
            -17.384006344863195
          ]
        },
        "id": 38
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio y TV Boyuibe",
          "localidad": "Boyuibe",
          "departamento": "Santa Cruz",
          "img": "radiomilenio-boyuibe.jpeg",
          "facebook": "https://www.facebook.com/radiomilenioboyuibe/",
          "tipo": "Televisión",
          "lugar_investigacion": "Montero",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.282774982972455,
            -20.433973261470555
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Cruz del Sur 96.7 FM",
          "localidad": "Villa Tunari",
          "departamento": "Cochabamba",
          "img": "cruzdelsur-chapare.jpeg",
          "facebook": "https://www.facebook.com/p/RADIO-CRUZ-DEL-SUR-Villa-14-de-Sep-Chapare-100064899515881",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.347838383154,
            -16.844773870065907
          ]
        },
        "id": 40
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Bethel 95.5 FM",
          "localidad": "Cochabamba",
          "departamento": "Cochabamba",
          "img": "radiobethel.jpeg",
          "facebook": "https://www.facebook.com/bethelcbba/",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.15674929903847,
            -17.397258609683107
          ]
        },
        "id": 41
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio y Televisión Soberanía del Trópico",
          "localidad": "Villa Tunari",
          "departamento": "Cochabamba",
          "img": "radiosoberania.jpeg",
          "facebook": "https://www.facebook.com/radiosoberania.bo",
          "tipo": "Televisión",
          "lugar_investigacion": "Trópico",
          "tema": "Noticias sindicales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.39808087163806,
            -16.91473478461704
          ]
        },
        "id": 42
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Kawsachun Coca",
          "localidad": "Lauca Eñe",
          "departamento": "Cochabamba",
          "img": "rkc.jpeg",
          "facebook": "https://www.facebook.com/RadioKawsachunCoca",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico, Yapacaní y Montero",
          "tema": "Noticias sindicales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.22808883793667,
            -16.99499672979195
          ]
        },
        "id": 43
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Claros - RTC",
          "localidad": "Ivirgarzama",
          "departamento": "Cochabamba",
          "img": "radio-random.jpeg",
          "facebook": "null",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -64.83604479973785,
            -17.076710501340713
          ]
        },
        "id": 44
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Red CCTV",
          "localidad": "Sacaba",
          "departamento": "Cochabamba",
          "img": "cctv.jpeg",
          "facebook": "https://www.facebook.com/p/Red-CCTv-Cochabamba-100080287069606/",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.10016860124657,
            -17.392036914065486
          ]
        },
        "id": 45
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio y Televisión Universitaria TVU - UMSS",
          "localidad": "Cochabamba",
          "departamento": "Cochabamba",
          "img": "tvu-cochabamba.jpeg",
          "facebook": "https://www.facebook.com/TVUCochabambaOficial",
          "tipo": "Televisión",
          "lugar_investigacion": "Trópico",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.15576202001454,
            -17.391627242571303
          ]
        },
        "id": 46
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Televisión Monumental RTM",
          "localidad": "Shinahota",
          "departamento": "Cochabamba",
          "img": "rtm.jpeg",
          "facebook": "https://www.facebook.com/profile.php?id=100064940263383&locale=hi_IN",
          "tipo": "Televisión",
          "lugar_investigacion": "Trópico",
          "tema": "Noticias Locales y Nacionales"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.24753750277983,
            -16.992582583628476
          ]
        },
        "id": 47
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Generación Dinámica",
          "localidad": "Chimoré",
          "departamento": "Cochabamba",
          "img": "radio-random.jpeg",
          "facebook": "null",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Música y Entretenimiento"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.15601180535556,
            -16.990909348557025
          ]
        },
        "id": 48
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Bethel Aiquile 107.1 FM",
          "localidad": "Aiquile",
          "departamento": "Cochabamba",
          "img": "bethel.jpeg",
          "facebook": "https://www.facebook.com/profile.php?id=100064412570435",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -65.18797694159545,
            -18.19867614115165
          ]
        },
        "id": 49
      },
      {
        "type": "Feature",
        "properties": {
          "nombre": "Radio Nuevo Tiempo Cochabamba 88.3 FM",
          "localidad": "Cochabamba",
          "departamento": "Cochabamba",
          "img": "orion-cocha.jpeg",
          "facebook": "https://www.facebook.com/nuevotiempobolivia/",
          "tipo": "Radio",
          "lugar_investigacion": "Trópico",
          "tema": "Religión"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.16693554215973,
            -17.366821115032494
          ]
        },
        "id": 50
      }
    ]
  };

// personalizar iconos
var iconoEstado = L.icon({
  iconUrl: 'estatal.png',
  iconSize: [26, 42]
})

var iconoLocal = L.icon({
  iconUrl: 'local.png',
  iconSize: [26, 42]
})

var iconoMusica= L.icon({
  iconUrl: 'musica.png',
  iconSize: [26, 42]
})

var iconoRel = L.icon({
  iconUrl: 'religion.png',
  iconSize: [26, 42]
})

var iconoSind = L.icon({
  iconUrl: 'sindical.png',
  iconSize: [26, 42]
})

var iconoOtro = L.icon({
  iconUrl: 'otro.png',
  iconSize: [26, 42]
})

// filtrar capas para cada region de medios
var soloTropico = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Trópico";
})

var soloYapacani = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Yapacaní";
})

var soloMontero = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Montero";
})

var TropYap = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Trópico y Yapacaní";
})

var YapMon = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Yapacaní y Montero";
})

var todo = datos.features.filter(function(feature) {
  return feature.properties.lugar_investigacion === "Trópico, Yapacaní y Montero";
})

// agregar iconos y popups
// tropico
var tropLayer = L.geoJSON(soloTropico, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});

// yapacani
var yapLayer = L.geoJSON(soloYapacani, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});

// montero
var monLayer = L.geoJSON(soloMontero, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});

// tropico y yapacani
var tYLayer = L.geoJSON(TropYap, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});
// yapacani y montero
var yMLayer = L.geoJSON(YapMon, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});
// todo

var todoLayer = L.geoJSON(todo, {
  pointToLayer: function(feature, latlng){
    var tema = feature.properties.tema;
    var icono;

    // un loop para cada tema de medio
    if(tema === 'Política Estatal'){
      icono = iconoEstado;
    } else if (tema === 'Noticias Locales y Nacionales'){
      icono = iconoLocal;
    } else if(tema === 'Música y Entretenimiento'){
      icono = iconoMusica;
    } else if(tema === 'Religión'){
      icono = iconoRel;
    } else if(tema === 'Noticias sindicales'){
      icono = iconoSind;
    } else {icono = iconoOtro;}

    return L.marker(latlng, {icon: icono});
  },

  onEachFeature: function (feature, layer) {
    // crear el contenido del popup
    var popupContent = "<img src='" + feature.properties.img + "' width= 200px/>" +
    "<br>" +
    "<br>" +
    "<b>Nombre: </b>" + feature.properties.nombre +
    "<br>" +
    "<b>Tipo: </b>" + feature.properties.tipo +
    "<br>" +
    "<b>Tema: </b>" + feature.properties.tema +
    "<br>" +
    "<b>Departamento: </b>" + feature.properties.departamento +
    "<br>" +
    "<b>Localidad: </b>" + feature.properties.localidad +
    "<br>" +
    "<a href='" + feature.properties.facebook + "'>Enlace a Facebook</a>";
    
    // agregar el contenido a la capa de puntos
    layer.bindPopup(popupContent);
}
});

// agregar capas
tropLayer.addTo(mapa);
yapLayer.addTo(mapa);
monLayer.addTo(mapa);
tYLayer.addTo(mapa);
yMLayer.addTo(mapa);
todoLayer.addTo(mapa);

// agregar filtros y controles
var overlayLayers = {
  "Trópico": tropLayer,
  "Yapacaní": yapLayer,
  "Montero": monLayer,
  "Trópico y Yapacaní": tYLayer,
  "Yapacaní y Montero": yMLayer,
  "Trópico, Yapacaní y Montero": todoLayer
};

var controlesLayer = L.control.layers(null, overlayLayers,
  {collapsed: false});
controlesLayer.addTo(mapa);

// crear leyenda
// estamos usando: https://github.com/aazuspan/leaflet-feature-legend

var legend = L.control({position: 'bottomright'});

legend.onAdd = function(mapa) {
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<img src="estatal.png" width= 12px> Política Estatal<br>';
  div.innerHTML += '<img src="local.png" width= 12px> Local y nacional<br>';
  div.innerHTML += '<img src="musica.png" width= 12px> Entretenimiento<br>';
  div.innerHTML += '<img src="religion.png" width= 12px> Religión<br>';
  div.innerHTML += '<img src="sindical.png" width= 12px> Sindical<br>'
  return div;
};

legend.addTo(mapa);