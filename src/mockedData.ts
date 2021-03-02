import { CurationData, FullWindowData } from "types";
import { randomDate } from "utils/date";

export const itemsData: CurationData = {
  windows: [
    {
      name: "World News",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "flux",
      id: "window1",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "US Financial Blogs",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "flux",
      id: "window2",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "Graphic Design",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "flux",
      id: "window3",
      basePath: '/windows',
      rank: [
        {
          layout_id: "layout1",
          value: 99,
        },
      ],
    },
    {
      name: "Currencies",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "quotestable",
      id: "window4",
      basePath: '/windows',
      rank: [
        {
          layout_id: "layout1",
          value: 50,
        },
      ],
    },
    {
      name: "Ibovespa",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "quotestable",
      id: "window5",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "Game News and Entertainment",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "flux",
      id: "window6",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "USD BRL",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "chart",
      id: "window7",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "US Federal Reserve",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "chart",
      id: "window8",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "Agro Commodities BR",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "flux",
      id: "window9",
      basePath: '/windows',
      rank: [],
    },
    {
      name: "Petrobras",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      type: "twittersearch",
      id: "window10",
      basePath: '/windows',
      rank: [],
    }, 
  ],
  layouts: [
    {
      name: "US Markets",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "layout1",
      rank: 1,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
      basePath:' /layouts',
    },
    {
      name: "Gamer Girl Board",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "layout2",
      rank: 2,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: false,
      basePath:' /layouts',
    },
    {
      name: "Food",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "layout3",
      rank: 3,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
      basePath:' /layouts',
    },
    {
      name: "Lifestyle",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "layout4",
      rank: 4,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
      basePath:' /layouts',
    },
    {
      name: "Mercado Financeiro BR",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "layout5",
      rank: 5,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
      basePath:' /layouts',
    },
  ],
  categories: [
    {
      name: "Business",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "category1",
      rank: 1,
      basePath: '/categories'
    },
    {
      name: "Finances",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "category2",
      rank: 3,
      basePath: '/categories'
    },
  ],
  tags: [
    {
      name: "Bitcoin",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "tag1",
      basePath: "/tags"
    },
    {
      name: "Blockchain",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "tag2",
      basePath: "/tags"
    },
    {
      name: "Cryptocoin",
      last_update: new Date("December 17, 1995 03:24:00"),
      id: "tag3",
      basePath: "/tags"
    },
    {
      name: "Business",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "tag4",
      basePath: "/tags"
    },
    {
      name: "Entrepreneurship",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "tag5",
      basePath: "/tags"
    },
    {
      name: "Finances",
      last_update: randomDate(new Date(2018,1,1), new Date()),
      id: "tag6",
      basePath: "/tags"
    },
  ],
};

export const fullWindowsData: FullWindowData[] = [
  {
    name: "World News",
    last_update: randomDate(new Date(2018,1,1), new Date()),
    type: "flux",
    id: "window1",
    description: "The hottest gaming news",
    tags: [
      {
        name: "gaming",
        id: "09178ca9-3161-4813-b2c9-3c9803100ec7",
      },
      {
        name: "news",
        id: "8756eb63-a63f-4ce5-8581-ff8859c8a894",
      },
    ],
    category: {
      name: "gaming",
      id: "dee92648-bf74-49e0-8322-b5ba4e3159cb",
    },
    layouts: [
      {
        id: "bd4e4f66-2ae7-4447-8605-69247b0a92b5",
        name: "Business",
        rank: 2,
      },
      {
        id: "66c86fe3-3d1e-48c3-aab9-86ddf8505368",
        name: "Finances",
        rank: 8,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "USD BRL",
    last_update: randomDate(new Date(2018,1,1), new Date()),
    type: "chart",
    id: "window2",
    description: "USD BRL chart",
    tags: [
      {
        name: "news",
        id: "8756eb63-a63f-4ce5-8581-ff8859c8a894",
      },
    ],
    category: {
      name: "oi maldade",
      id: "9c1bc992-dc9f-4adf-b7c6-780c380e7ef9",
    },
    layouts: [
      {
        id: "66c86fe3-3d1e-48c3-aab9-86ddf8505368",
        name: "Finances",
        rank: 2,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "Ibovespa",
    last_update: randomDate(new Date(2018,1,1), new Date()),
    type: "quotestable",
    id: "window3",
    description: "Ibovespa quotes table",
    tags: [
      {
        name: "news",
        id: "8756eb63-a63f-4ce5-8581-ff8859c8a894",
      },
    ],
    category: {
      name: "oi maldade",
      id: "9c1bc992-dc9f-4adf-b7c6-780c380e7ef9",
    },
    layouts: [
      {
        id: "bd4e4f66-2ae7-4447-8605-69247b0a92b5",
        name: "Business",
        rank: 6,
      },
      {
        id: "66c86fe3-3d1e-48c3-aab9-86ddf8505368",
        name: "Finances",
        rank: 3,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "Agro Comodities BR",
    last_update: randomDate(new Date(2018,1,1), new Date()),
    type: "flux",
    id: "window4",
    description: "Brazil's agro comodities",
    tags: [
      {
        name: "gaming",
        id: "09178ca9-3161-4813-b2c9-3c9803100ec7",
      },
      {
        name: "news",
        id: "8756eb63-a63f-4ce5-8581-ff8859c8a894",
      },
    ],
    category: {
      name: "gaming",
      id: "dee92648-bf74-49e0-8322-b5ba4e3159cb",
    },
    layouts: [
      {
        id: "bd4e4f66-2ae7-4447-8605-69247b0a92b5",
        name: "Business",
        rank: 5,
      },
      {
        id: "66c86fe3-3d1e-48c3-aab9-86ddf8505368",
        name: "Finances",
        rank: 5,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "Petrobras",
    last_update: randomDate(new Date(2018,1,1), new Date()),
    type: "twittersearch",
    id: "window5",
    description: "The hottest gaming news",
    tags: [
      {
        name: "gaming",
        id: "09178ca9-3161-4813-b2c9-3c9803100ec7",
      },
      {
        name: "news",
        id: "8756eb63-a63f-4ce5-8581-ff8859c8a894",
      },
    ],
    category: {
      name: "gaming",
      id: "dee92648-bf74-49e0-8322-b5ba4e3159cb",
    },
    layouts: [
      {
        id: "bd4e4f66-2ae7-4447-8605-69247b0a92b5",
        name: "Business",
        rank: 2,
      },
      {
        id: "66c86fe3-3d1e-48c3-aab9-86ddf8505368",
        name: "Finances",
        rank: 8,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
];

export const fluxonautUsers = [
  {
    name: "ricardover",
    id: "a04c8fcf-1d37-4ac2-a6d1-8c7ee2774c0f",
  },
  {
    name: "fred",
    id: "12f32336-8263-469b-bcd9-2261d28e8354",
  },
  {
    name: "fred2",
    id: "46194ce2-fdf4-4ea7-b5e1-b2ca143df7d1",
  },
];

export const userBoards = [
  {
    name: "Gaming",
    id: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
    windows: [
      {
        name: "League of Legends",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a1",
        window_type: "chart",
      },
      {
        name: "Dota 2",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a2",
        window_type: "flux",
      },
    ],
  },
  {
    name: "Financial",
    id: "2d52b358-dab4-4665-b734-e9f4a40a56a3",
    windows: [
      {
        name: "USD BRL",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a4",
        window_type: "chart",
      },
      {
        name: "Agro Commodities BR",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a5",
        window_type: "flux",
      },
    ],
  },
];
