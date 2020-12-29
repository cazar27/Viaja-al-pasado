import { Servicio, Ruta, Dificultad } from './Servicio';
const tags: any [] = [
      {text: ' Bañera', icon: 'fa fa-bath'},
      {text: ' Teléfono', icon: 'fa fa-phone'},
      {text: ' Wifi', icon: 'fa fa-wifi'},
      {text: ' Televisión', icon: 'fa fa-tv'},
      {text: ' Desayuno', icon: 'fa fa-cutlery'},
      {text: ' Accesible', icon: 'fa fa-wheelchair'},
      {text: ' Actividad deportiva', icon: 'fa fa-bicycle'},
      {text: ' Saludable', icon: 'fa fa-heartbeat'},
      {text: ' Naturaleza', icon: 'fa fa-leaf'},
      {text: ' Guiáda', icon: 'fa fa-bullhorn'}
];

const RUTAS: Ruta[] = [
  {
    id: 1,
    name: 'Ruta por el rio Higuerón',
    inicio: 'Acequia Lizar',
    fin: 'Cahorros altos del Higuerón',
    duracion: '7 horas 42 minutos',
    altitud: 610,
    dificultad: Dificultad.Moderada,
    mapa: 'http://carloszamorano.es/viaja_al_pasado/img/mapa-ruta-3.jpg',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/ruta1-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta1-2.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta1-3.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta1-4.jpg'
    ]
  },
  {
    id: 2,
    name: 'Ruta Circular:  La Molineta, Cachorros Bajos del Higuerón, Pozos Batán y Lizar y Castillo de Frigiliana',
    inicio: 'La Molineta',
    fin: 'Castillo de Frigiliana',
    duracion: '4 horas 10 minutos',
    altitud: 485,
    dificultad: Dificultad.Moderada,
    mapa: 'http://carloszamorano.es/viaja_al_pasado/img/mapa-ruta-2.jpg',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/ruta2-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta2-2.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta2-3.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta2-4.jpg'
    ]
  },
  {
    id: 3,
    name: 'Ruta Circular - El fuerte (Sierra Almajara)',
    inicio: 'Cartel información senderos de Frigiliana',
    fin: 'El fuerte',
    duracion: '5 horas 40 minutos',
    altitud: 1004 ,
    dificultad: Dificultad.Moderada,
    mapa: 'http://carloszamorano.es/viaja_al_pasado/img/mapa-ruta-3.jpg',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/ruta3-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta3-2.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta3-3.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/ruta3-4.jpg'
    ]
  }
];

export const SERVICIOS: Servicio[] = [
  {
    id: '1',
    name: 'Casa normal',
    desprice: 'Desde 80€ el dia',
    price: 80,
    description: ['La casa de la que disponemos está situada cerca del entorno natural, en el cual podrá usted vivir una increíble experiencia unida al máximo relax.',
    'La vivienda está tematizada en la cultura árabe, en la que además dispondrá de un catering con comida típica.',
    'Dispone de 4 habitaciones, 3 cuartos de baño, un amplio salón y una piscina privada.'],
    urlInfo: 'Más información sobre esta casa',
    url: '/servicios:1',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/casa1-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/casa1-2.jpg'
    ],
    likes: 5,
    tags: ['']
  },
  {
    id: '2',
    name: 'Pack Casa + Visita Cultural',
    desprice: 'Desde 40 € alojamiento + 10 € de la actividad',
    price: 40,
    description: ['La casa de la que disponemos para este pack es una casa de ensueño, en la que tendrá la oportunidad de relajarse y descansar, en pleno centro urbano.',
    'Este pack incluye el alquiler de la casa y una visita cultural con guía por Frigiliana, donde se le llevará a los rincones, de dicha localidad, más bonitos y pintorescos de toda la zona de Málaga. La duración de dicha visita será de una tarde o mañana, a elección suya.',
    'La vivienda dispone de 4 habitaciones, 3 cuartos de baño, un salón amplio, una piscina privada y un salón espectacular.'],
    urlInfo: 'Más información ',
    url: '/servicios:2',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/casa2-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/casa2-2.jpg'
    ],
    likes: 12,
    tags: ['']
  },
  {
    id: '3',
    name: 'Pack Casa + Ruta',
    desprice: 'Desde 100€, 100€ más con guia',
    price: 100,
    description:
    [
      'Disfruta de tu alojamiento en Frigiliana en una de nuestras casas rurales. Situada a las afueras y parte más alta del pueblo de Frigiliana encontrarás esta casa rural equipada con todas las herramientas deportivas necesarias durante tu estancia, para que puedas disfrutar con total libertad de las actividades deportivas que ofrecemos.',
      '5 habitaciones, 3 baños, cocina, salón comedor, piscina exterior e interior, chimenea, calefacción, barbacoa, wifi, parking'
    ],
    urlInfo: 'Más información sobre el alojamiento',
    url: '/servicios:3',
    img: [
      'http://carloszamorano.es/viaja_al_pasado/img/casa3-1.jpg',
      'http://carloszamorano.es/viaja_al_pasado/img/casa3-2.jpg'
    ],
    likes: 4,
    tags: [''],
    rutas: this.RUTAS
  }
];
