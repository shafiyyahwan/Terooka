
/* Terooka shared place data.
   All venues and sample reviews are fictional prototype content.
*/

window.TerookaData = window.TerookaData || {};

window.TerookaData.places = [
  {
    id: 'riverstory',
    name: 'Riverfront Heritage Walk',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Heritage',
    lat: 1.5583,
    lng: 110.3477,
    description: 'A riverside storytelling walk inspired by Kuching’s history.',
    image: 'img/riverfront1.jpg',
    demo: true,
    reviews: [
      {
        name: 'Alya',
        stars: 5,
        text: 'The riverside stories made the walk much more interesting.',
        sample: true
      },
      {
        name: 'Daniel',
        stars: 4,
        text: 'Enjoyed exploring the heritage trail and river views.',
        sample: true
      }
    ]
  },
  {
    id: 'laksa',
    name: 'Rasa Sarawak Kitchen',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Food',
    lat: 1.5547,
    lng: 110.3532,
    description: 'A food experience inspired by Sarawak laksa.',
    image: 'img/sarawak-food.jpg',
    demo: true,
    reviews: [
      {
        name: 'Mira',
        stars: 5,
        text: 'Loved learning about the ingredients behind Sarawak laksa.',
        sample: true
      },
      {
        name: 'Haziq',
        stars: 4,
        text: 'A fun introduction to local food culture.',
        sample: true
      }
    ]
  },
  {
    id: 'beads',
    name: 'Borneo Bead Studio',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Crafts',
    lat: 1.5625,
    lng: 110.3445,
    description: 'A hands-on beadwork workshop inspired by Sarawak crafts.',
    image: 'img/sarawak-beads.jpg',
    demo: true,
    reviews: [
      {
        name: 'Nadia',
        stars: 5,
        text: 'Making a beadwork piece helped me appreciate the craftsmanship.',
        sample: true
      },
      {
        name: 'Amir',
        stars: 4,
        text: 'The bead patterns and their cultural meanings were fascinating.',
        sample: true
      }
    ]
  },
  {
    id: 'culturehouse',
    name: 'Stories of Borneo Gallery',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Museum',
    lat: 1.5505,
    lng: 110.3490,
    description: 'A gallery featuring local stories, music and traditional objects.',
    image: 'img/sarawak-gallery.jpg',
    demo: true,
    reviews: [
      {
        name: 'Sofia',
        stars: 5,
        text: 'Enjoyed discovering the stories behind traditional objects.',
        sample: true
      },
      {
        name: 'Ryan',
        stars: 4,
        text: 'Interesting exhibits about Sarawak cultural heritage.',
        sample: true
      }
    ]
  },
  {
    id: 'weaving',
    name: 'Anyaman Heritage Workshop',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Crafts',
    lat: 1.5573,
    lng: 110.3587,
    description: 'A weaving experience inspired by traditional handicrafts.',
    image: 'img/sarawak-weaving.jpg',
    demo: true,
    reviews: [
      {
        name: 'Farah',
        stars: 5,
        text: 'Trying the weaving techniques gave me a new appreciation for the craft.',
        sample: true
      },
      {
        name: 'Jason',
        stars: 4,
        text: 'A creative way to learn about traditional weaving.',
        sample: true
      }
    ]
  },
  {
    id: 'keklapis',
    name: 'Kek Lapis Corner',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Food',
    lat: 1.5514,
    lng: 110.3436,
    description: 'A food stop highlighting Sarawak layered cakes.',
    image: 'img/sarawak-kek-lapis.jpg',
    demo: true,
    reviews: [
      {
        name: 'Izzah',
        stars: 5,
        text: 'Loved seeing how the colourful cake layers are made.',
        sample: true
      },
      {
        name: 'Ben',
        stars: 4,
        text: 'A sweet way to discover a Sarawak speciality.',
        sample: true
      }
    ]
  },
  {
    id: 'baucraft',
    name: 'Bau Heritage Craft House',
    city: 'Bau',
    state: 'Sarawak',
    category: 'Crafts',
    lat: 1.4166,
    lng: 110.1551,
    description: 'A craft experience in the Bau area.',
    image: 'img/sarawak-bau.jpg',
    demo: true,
    reviews: [
      {
        name: 'Lina',
        stars: 5,
        text: 'Enjoyed learning the basics of traditional crafts.',
        sample: true
      },
      {
        name: 'Adam',
        stars: 4,
        text: 'A welcoming introduction to the local creative traditions.',
        sample: true
      }
    ]
  },
  {
    id: 'serian',
    name: 'Serian Cultural Stories',
    city: 'Serian',
    state: 'Sarawak',
    category: 'Heritage',
    lat: 1.1737,
    lng: 110.5681,
    description: 'A storytelling experience inspired by the cultural diversity of Serian.',
    image: 'img/sarawak-serian.jpg',
    demo: true,
    reviews: [
      {
        name: 'Sara',
        stars: 5,
        text: 'The stories introduced me to traditions I had not heard about.',
        sample: true
      },
      {
        name: 'Irfan',
        stars: 4,
        text: 'A thoughtful way to explore Serian’s cultural diversity.',
        sample: true
      }
    ]
  }
];

window.TerookaData.categories = [
  'All Places',
  'Heritage',
  'Food',
  'Crafts',
  'Museum'
];
