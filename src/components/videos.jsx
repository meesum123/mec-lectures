const videos =[{
    name: 'analysis of stress-1 (CE 322)',
    description: 'analysis of stress',
    id: 1,
    duration: 45,
    batch: '1',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/1.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/1.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/1.jpg'
      }
    ]
  },
  {
    name: 'analysis of stress-2 (CE 322)',
    description: 'analysis of stress-2',
    id: 2,
    duration: 45,
    batch: '1',
    branch: '1',
    course: '2',
    sources: [
      { src: 'vids/2.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/2.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/2.jpg'
      }
    ]
  },
  {
    name: 'AVL trees (CS 112)',
    description: 'AVL trees',
    id: 3,
    duration: 45,
    batch: '1',
    branch: '2',
    course: '1',
    sources: [
      { src: 'vids/3.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/3.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/3.jpg'
      }
    ]
  },
  {
    name: 'conditional probability (MA110)',
    description: 'conditional probability',
    id: 4,
    duration: 45,
    batch: '1',
    branch: '2',
    course: '2',
    sources: [
      { src: 'vids/4.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/4.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/4.jpg'
      }
    ]
  },
  {
    name: 'cryptography-1 (CS 112)',
    description: 'cryptography-1',
    id: 5,
    duration: 45,
    batch: '2',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/5.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/5.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/5.jpg'
      }
    ]
  },
  {
    name: 'cryptography-2 (CS 112)',
    description: 'cryptography-2',
    id: 6,
    duration: 45,
    batch: '2',
    branch: '1',
    course: '2',
    sources: [
      { src: 'vids/6.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/6.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/6.jpg'
      }
    ]
  },
  {
    name: 'data science-1 (CS 109)',
    description: 'data science-1',
    id: 7,
    duration: 45,
    batch: '2',
    branch: '2',
    course: '1',
    sources: [
      { src: 'vids/7.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/7.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/7.jpg'
      }
    ]
  },
  {
    name: 'data science-2 (CS 109)',
    description: 'data science-2',
    id: 8,
    duration: 45,
    batch: '2',
    branch: '2',
    course: '2',
    sources: [
      { src: 'vids/8.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/8.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/8.jpg'
      }
    ]
  },
  {
    name: 'fluid mechanics part-1 (ME 210)',
    description: 'fluid mechanics part-1',
    id: 9,
    duration: 45,
    batch: '3',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/9.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/9.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/9.jpg'
      }
    ]
  },
  {
    name: 'fluid mechanics part-2 (ME 210)',
    description: 'fluid mechanics part-2',
    id: 10,
    duration: 45,
    batch: '3',
    branch: '1',
    course: '2',
    sources: [
      { src: 'vids/10.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/10.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/10.jpg'
      }
    ]
  },
  {
    name: 'full stack-1 (CS 401)',
    description: 'full stack-1',
    id: 11,
    duration: 45,
    batch: '3',
    branch: '2',
    course: '1',
    sources: [
      { src: 'vids/11.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/11.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/11.jpg'
      }
    ]
  },
  {
    name: 'full stack-2 (CS 401)',
    description: 'full stack-2',
    id: 12,
    duration: 45,
    batch: '3',
    branch: '2',
    course: '2',
    sources: [
      { src: 'vids/12.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/12.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/12.jpg'
      }
    ]
  },
  {
    name: 'full stack-3 (CS 401)',
    description: 'full stack-3',
    id: 13,
    duration: 45,
    batch: '4',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/13.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/13.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/13.jpg'
      }
    ]
  },
  {
    name: 'heaps and heap sort (CS 112)',
    description: 'heaps and heap sort',
    id: 14,
    duration: 45,
    batch: '4',
    branch: '1',
    course: '2',
    sources: [
      { src: 'vids/14.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/14.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/14.jpg'
      }
    ]
  },
  {
    name: 'Intro to design of reinforced concrete structures (CE 323)',
    description: 'Intro to design of reinforced concrete structures',
    id: 15,
    duration: 45,
    batch: '4',
    branch: '2',
    course: '1',
    sources: [
      { src: 'vids/15.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/15.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/15.jpg'
      }
    ]
  },
  {
    name: 'intro to electrical engg-1 (EE 101)',
    description: 'intro to electrical engg-1',
    id: 16,
    duration: 45,
    batch: '4',
    branch: '2',
    course: '2',
    sources: [
      { src: 'vids/16.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/16.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/16.jpg'
      }
    ]
  },
  {
    name: 'intro to electrical engg-2 (EE 101)',
    description: 'intro to electrical engg-2',
    id: 17,
    duration: 45,
    batch: '4',
    branch: '2',
    course: '2',
    sources: [
      { src: 'vids/17.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/17.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/17.jpg'
      }
    ]
  },
  {
    name: 'introduction to machine learning(ML101)',
    description: 'introduction to machine learning',
    id: 18,
    duration: 45,
    batch: '1',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/18.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/18.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/18.jpg'
      }
    ]
  },
  {
    name: 'introduction to statistics(MA110)',
    description: 'introduction to statistics',
    id: 19,
    duration: 45,
    batch: '1',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/19.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/19.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/19.jpg'
      }
    ]
  },
  {
    name: 'materials (CE 323)',
    description: 'materials',
    id: 20,
    duration: 45,
    batch: '1',
    branch: '1',
    course: '1',
    sources: [
      { src: 'vids/20.mp4', type: 'video/mp4' },
    ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [
      {
        srcset: 'vids/thumbnails/20.jpg',
        type: 'image/jpeg',
        media: '(min-width: 100px;)'
      },
      {
        src: 'vids/thumbnails/20.jpg'
      }
    ]
  }
  ];
  export default videos;