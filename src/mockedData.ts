import { CurationData, FullWindowData } from "types";
import { randomDate } from "utils/date";

export const itemsData: CurationData = {
  windows: [
    {
      name: "World News",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "flux",
      id: "window1",
      rank: [],
    },
    {
      name: "Graphic Design",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "flux",
      id: "window3",
      rank: [
        {
          layout_id: "layout1",
          value: 99,
        },
      ],
    },
    {
      name: "US Financial Blogs",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "flux",
      id: "window2",
      rank: [],
    },
    {
      name: "Currencies",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "quotestable",
      id: "window4",
      rank: [
        {
          layout_id: "layout1",
          value: 50,
        },
      ],
    },
    {
      name: "Ibovespa",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "quotestable",
      id: "window5",
      rank: [],
    },
    {
      name: "Game News and Entertainment",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "flux",
      id: "window6",
      rank: [],
    },
    {
      name: "USD BRL",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "chart",
      id: "window7",
      rank: [],
    },
    {
      name: "US Federal Reserve",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "chart",
      id: "window8",
      rank: [],
    },
    {
      name: "Agro Commodities BR",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "flux",
      id: "window9",
      rank: [],
    },
    {
      name: "Petrobras",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      type: "twittersearch",
      id: "window10",
      rank: [],
    },
  ],
  layouts: [
    {
      name: "US Markets",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "layout1",
      rank: 1,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Gamer Girl Board",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "layout2",
      rank: 2,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: false,
    },
    {
      name: "Food",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "layout3",
      rank: 3,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Lifestyle",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "layout4",
      rank: 4,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Mercado Financeiro BR",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "layout5",
      rank: 5,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
  ],
  categories: [
    {
      name: "Business",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "category1",
      rank: 1,
    },
    {
      name: "Finances",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "category2",
      rank: 3,
    },
  ],
  tags: [
    {
      name: "Bitcoin",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "tag1",
    },
    {
      name: "Blockchain",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "tag2",
    },
    {
      name: "Cryptocoin",
      last_update: new Date("December 17, 1995 03:24:00"),
      id: "tag3",
    },
    {
      name: "Business",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "tag4",
    },
    {
      name: "Entrepreneurship",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "tag5",
    },
    {
      name: "Finances",
      last_update: randomDate(new Date(2018, 1, 1), new Date()),
      id: "tag6",
    },
  ],
};

export const fullWindowsData: FullWindowData[] = [
  {
    name: "World News",
    last_update: randomDate(new Date(2018, 1, 1), new Date()),
    type: "flux",
    id: "window1",
    description: "The hottest gaming news",
    tags: [
      {
        name: "Bitcoin",
        id: "tag1",
      },
      {
        name: "Business",
        id: "tag4",
      },
    ],
    category: {
      name: "Business",
      id: "category1",
    },
    layouts: [
      {
        id: "layout2",
        name: "Gamer Girl Board",
        rank: 2,
      },
      {
        id: "layout3",
        name: "Food",
        rank: 8,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: true,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "USD BRL",
    last_update: randomDate(new Date(2018, 1, 1), new Date()),
    type: "chart",
    id: "window2",
    description: "USD BRL chart",
    tags: [
      {
        name: "Cryptocoin",
        id: "tag3",
      },
    ],
    category: {
      name: "Finances",
      id: "category2",
    },
    layouts: [
      {
        id: "layout5",
        name: "Mercado Financeiro BR",
        rank: 2,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: false,
    featured: false,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "Ibovespa",
    last_update: randomDate(new Date(2018, 1, 1), new Date()),
    type: "quotestable",
    id: "window3",
    description: "Ibovespa quotes table",
    tags: [
      {
        name: "Entrepreneurship",
        id: "tag5",
      },
    ],
    category: {
      name: "Business",
      id: "category1",
    },
    layouts: [
      {
        id: "layout4",
        name: "Lifestyle",
        rank: 6,
      },
      {
        id: "layout3",
        name: "Food",
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
    last_update: randomDate(new Date(2018, 1, 1), new Date()),
    type: "flux",
    id: "window4",
    description: "Brazil's agro comodities",
    tags: [
      {
        name: "Bitcoin",
        id: "tag1",
      },
      {
        name: "Finances",
        id: "tag6",
      },
    ],
    category: {
      name: "Business",
      id: "category1",
    },
    layouts: [
      {
        id: "layout4",
        name: "Lifestyle",
        rank: 5,
      },
      {
        id: "layout1",
        name: "US Markets",
        rank: 5,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/1025/460/460.jpg?hmac=RERfmyH5tq5XrmTueDasXSsI_fVBFRSJSNRLz-ASvhk",
    active: false,
    featured: true,
    created_from: {
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    },
  },
  {
    name: "Petrobras",
    last_update: randomDate(new Date(2018, 1, 1), new Date()),
    type: "twittersearch",
    id: "window5",
    description: "The hottest gaming news",
    tags: [
      {
        name: "Cryptocoin",
        id: "tag3",
      },
      {
        name: "Business",
        id: "tag4",
      },
    ],
    category: {
      name: "Business",
      id: "category1",
    },
    layouts: [
      {
        id: "layout1",
        name: "US Markets",
        rank: 9,
      },
      {
        id: "layout2",
        name: "Gamer Girl Board",
        rank: 8,
      },
    ],
    thumbnail:
      "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
    active: true,
    featured: false,
    created_from: {
      username: "fred2",
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
