
/*
 * Terooka — Shared Place Data
 *
 * Single source of truth for:
 * - Discover map and preview
 * - Explore Place details
 * - Opening hours and visit types
 * - Cultural experiences and booking
 * - Photos and sample reviews
 *
 * Note: Some places and locations are fictional
 * prototype content.
 */

window.TerookaData = window.TerookaData || {};

window.TerookaData.places = [
  {
    id: 'riverstory',
    name: 'Riverfront Heritage Walk',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Heritage',

    lat: 1.4000,
    lng: 110.2400,

    description:
      'A riverside storytelling walk inspired by Kuching’s history.',

    image: 'img/riverfront1.jpg',
    photos: ['img/riverfront1.jpg'],

    demo: true,

    openingHours: {
      Monday: '8:00 AM – 8:00 PM',
      Tuesday: '8:00 AM – 8:00 PM',
      Wednesday: '8:00 AM – 8:00 PM',
      Thursday: '8:00 AM – 8:00 PM',
      Friday: '8:00 AM – 8:00 PM',
      Saturday: '8:00 AM – 8:00 PM',
      Sunday: '8:00 AM – 8:00 PM'
    },

    visitType: 'Self-guided cultural walk',
    workshop: null,

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

    description:
      'A food experience inspired by Sarawak laksa.',

    image: 'img/laksa-sarawak.jpg',
    photos: ['img/laksa-sarawak.jpg'],

    demo: true,

    openingHours: {
      Monday: 'Closed',
      Tuesday: '9:00 AM – 6:00 PM',
      Wednesday: '9:00 AM – 6:00 PM',
      Thursday: '9:00 AM – 6:00 PM',
      Friday: '9:00 AM – 6:00 PM',
      Saturday: '9:00 AM – 6:00 PM',
      Sunday: '9:00 AM – 6:00 PM'
    },

    visitType: 'Walk-in dining',
    workshop: null,

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

    description:
      'A hands-on beadwork workshop inspired by Sarawak crafts.',

    image: 'img/bead.jpg',
    photos: ['img/bead.jpg'],

    demo: true,

    openingHours: {
      Monday: '9:00 AM – 5:00 PM',
      Tuesday: '9:00 AM – 5:00 PM',
      Wednesday: '9:00 AM – 5:00 PM',
      Thursday: '9:00 AM – 5:00 PM',
      Friday: '9:00 AM – 5:00 PM',
      Saturday: '9:00 AM – 5:00 PM',
      Sunday: 'Closed'
    },

    visitType: 'Workshop by reservation',

    workshop: {
      name: 'Traditional Beadwork Experience',

      description:
        'Discover beadwork techniques through a guided hands-on cultural activity.',

      duration: '1.5 hours',
      price: 35,

      sessions: [
        {
          value: '10:00',
          label: '10:00 AM – 11:30 AM'
        },
        {
          value: '14:00',
          label: '2:00 PM – 3:30 PM'
        }
      ]
    },

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
    name: 'Borneo Cultures Museum',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Museum',

    lat: 1.5549,
    lng: 110.3439,

    description:
      'Explore the rich cultural heritage of Sarawak through interactive exhibitions, traditional artefacts, historical collections and stories of Borneo’s diverse communities.',

    image: 'img/museum.jpg',
    photos: ['img/museum.jpg'],

    demo: false,

    // Prototype schedule — verify before real use.
    openingHours: {
      Monday: 'Closed',
      Tuesday: '9:00 AM – 4:45 PM',
      Wednesday: '9:00 AM – 4:45 PM',
      Thursday: '9:00 AM – 4:45 PM',
      Friday: '9:00 AM – 4:45 PM',
      Saturday: '9:00 AM – 4:45 PM',
      Sunday: '9:00 AM – 4:45 PM'
    },

    visitType: 'Museum visit',
    workshop: null,

    reviews: [
      {
        name: 'Sofia',
        stars: 5,
        text: 'Loved learning about the different cultures and traditions of Sarawak.',
        sample: true
      },
      {
        name: 'Ryan',
        stars: 4,
        text: 'Beautiful museum with fascinating cultural exhibits and interactive displays.',
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

    description:
      'A weaving experience inspired by traditional handicrafts.',

    image: 'img/anyaman.jpg',
    photos: ['img/anyaman.jpg'],

    demo: true,

    openingHours: {
      Monday: '9:00 AM – 5:00 PM',
      Tuesday: '9:00 AM – 5:00 PM',
      Wednesday: '9:00 AM – 5:00 PM',
      Thursday: '9:00 AM – 5:00 PM',
      Friday: '9:00 AM – 5:00 PM',
      Saturday: '9:00 AM – 5:00 PM',
      Sunday: 'Closed'
    },

    visitType: 'Workshop by reservation',

    workshop: {
      name: 'Traditional Weaving Experience',

      description:
        'Explore basic weaving techniques with guidance from a workshop facilitator.',

      duration: '2 hours',
      price: 45,

      sessions: [
        {
          value: '09:30',
          label: '9:30 AM – 11:30 AM'
        },
        {
          value: '14:00',
          label: '2:00 PM – 4:00 PM'
        }
      ]
    },

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

    description:
      'A food stop highlighting Sarawak layered cakes.',

    image: 'img/kek-lapis.jpg',
    photos: ['img/kek-lapis.jpg'],

    demo: true,

    openingHours: {
      Monday: '9:00 AM – 7:00 PM',
      Tuesday: '9:00 AM – 7:00 PM',
      Wednesday: '9:00 AM – 7:00 PM',
      Thursday: '9:00 AM – 7:00 PM',
      Friday: '9:00 AM – 7:00 PM',
      Saturday: '9:00 AM – 7:00 PM',
      Sunday: '9:00 AM – 7:00 PM'
    },

    visitType: 'Walk-in food discovery',
    workshop: null,

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

    lat: 1.3300,
    lng: 110.3100,

    description:
      'A craft experience in the Bau area.',

    image: 'img/craft-house.jpg',
    photos: ['img/craft-house.jpg'],

    demo: true,

    openingHours: {
      Monday: 'Closed',
      Tuesday: 'Closed',
      Wednesday: '10:00 AM – 5:00 PM',
      Thursday: '10:00 AM – 5:00 PM',
      Friday: '10:00 AM – 5:00 PM',
      Saturday: '10:00 AM – 5:00 PM',
      Sunday: '10:00 AM – 5:00 PM'
    },

    visitType: 'Workshop by reservation',

    workshop: {
      name: 'Bau Craft Discovery Workshop',

      description:
        'Try a guided introductory craft activity inspired by the region’s creative traditions.',

      duration: '1 hour',
      price: 30,

      sessions: [
        {
          value: '10:00',
          label: '10:00 AM – 11:00 AM'
        },
        {
          value: '15:00',
          label: '3:00 PM – 4:00 PM'
        }
      ]
    },

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
    name: 'Sarawak Cultural Village',
    city: 'Kuching',
    state: 'Sarawak',
    category: 'Heritage',

    lat: 1.7485,
    lng: 110.3160,

    description:
      'Discover Sarawak’s diverse cultures at this living museum in Santubong. Explore traditional longhouses, watch cultural performances and learn about local crafts and heritage.',

    image: 'img/cultural-villages.jpg',
    photos: ['img/cultural-villages.jpg'],

    demo: false,

    // Prototype schedule — verify before real use.
    openingHours: {
      Monday: '9:00 AM – 5:00 PM',
      Tuesday: '9:00 AM – 5:00 PM',
      Wednesday: '9:00 AM – 5:00 PM',
      Thursday: '9:00 AM – 5:00 PM',
      Friday: '9:00 AM – 5:00 PM',
      Saturday: '9:00 AM – 5:00 PM',
      Sunday: '9:00 AM – 5:00 PM'
    },

    visitType: 'Cultural village visit',
    workshop: null,

    reviews: [
      {
        name: 'Sara',
        stars: 5,
        text: 'Loved exploring the traditional houses and learning about Sarawak’s different cultures.',
        sample: true
      },
      {
        name: 'Irfan',
        stars: 4,
        text: 'The cultural performances and traditional architecture made the visit memorable.',
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
