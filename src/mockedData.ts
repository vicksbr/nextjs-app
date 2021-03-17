import { CurationData, FullWindowData } from "types";

export const itemsData: CurationData = {
  windows: [
    {
      name: "World News",
      last_update: new Date(2018, 1, 2).getTime(),
      type: "flux",
      id: "window1",
      rank: [],
    },
    {
      name: "Graphic Design",
      last_update: new Date(2018, 1, 3).getTime(),
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
      last_update: new Date(2019, 3, 1).getTime(),
      type: "flux",
      id: "window2",
      rank: [],
    },
    {
      name: "Currencies",
      last_update: new Date(2019, 1, 10).getTime(),
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
      last_update: new Date(2019, 1, 1).getTime(),
      type: "quotestable",
      id: "window5",
      rank: [],
    },
    {
      name: "Game News and Entertainment",
      last_update: new Date(2018, 1, 1).getTime(),
      type: "flux",
      id: "window6",
      rank: [],
    },
    {
      name: "USD BRL",
      last_update: new Date(2018, 1, 1).getTime(),
      type: "chart",
      id: "window7",
      rank: [],
    },
    {
      name: "US Federal Reserve",
      last_update: new Date(2019, 4, 5).getTime(),
      type: "chart",
      id: "window8",
      rank: [],
    },
    {
      name: "Agro Commodities BR",
      last_update: new Date(2018, 5, 4).getTime(),
      type: "flux",
      id: "window9",
      rank: [],
    },
    {
      name: "Petrobras",
      last_update: new Date(2018, 8, 18).getTime(),
      type: "twittersearch",
      id: "window10",
      rank: [],
    },
  ],
  layouts: [
    {
      name: "US Markets",
      last_update: new Date(2020, 1, 1).getTime(),
      id: "layout1",
      rank: 1,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Gamer Girl Board",
      last_update: new Date(2021, 1, 1).getTime(),
      id: "layout2",
      rank: 2,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: false,
    },
    {
      name: "Food",
      last_update: new Date(2018, 5, 5).getTime(),
      id: "layout3",
      rank: 3,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Lifestyle",
      last_update: new Date(2018, 3, 3).getTime(),
      id: "layout4",
      rank: 4,
      thumbnail:
        "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      active: true,
    },
    {
      name: "Mercado Financeiro BR",
      last_update: new Date(2018, 2, 2).getTime(),
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
      last_update: new Date(2019, 7, 7).getTime(),
      id: "category1",
      rank: 1,
    },
    {
      name: "Finances",
      last_update: new Date(2020, 7, 7).getTime(),
      id: "category2",
      rank: 3,
    },
  ],
  tags: [
    {
      name: "Bitcoin",
      last_update: new Date(2019, 8, 8).getTime(),
      id: "tag1",
    },
    {
      name: "Blockchain",
      last_update: new Date(2020, 9, 9).getTime(),
      id: "tag2",
    },
    {
      name: "Cryptocoin",
      last_update: new Date("December 17, 1995 03:24:00").getTime(),
      id: "tag3",
    },
    {
      name: "Business",
      last_update: new Date(2020, 8, 1).getTime(),
      id: "tag4",
    },
    {
      name: "Entrepreneurship",
      last_update: new Date(2020, 8, 2).getTime(),
      id: "tag5",
    },
    {
      name: "Finances",
      last_update: new Date(2020, 8, 3).getTime(),
      id: "tag6",
    },
  ],
};

export const fullWindowsData: FullWindowData[] = [
  {
    name: "World News",
    last_update: new Date(2019, 5, 11).getTime(),
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
      snapshot_date: new Date(2019, 6, 11).getTime(),
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "2d52b358-dab4-4665-b734-e9f4a40a56a1",
    },
  },
  {
    name: "USD BRL",
    last_update: new Date(2019, 10, 10).getTime(),
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
      snapshot_date: new Date(2019, 10, 12).getTime(),
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a3",
      window: "2d52b358-dab4-4665-b734-e9f4a40a56a4",
    },
  },
  {
    name: "Ibovespa",
    last_update: new Date(2019, 11, 11).getTime(),
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
      snapshot_date: new Date(2019, 11, 10).getTime(),
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "2d52b358-dab4-4665-b734-e9f4a40a56a2",
    },
  },
  {
    name: "Agro Comodities BR",
    last_update: new Date(2019, 12, 12).getTime(),
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
      snapshot_date: new Date(2018, 12, 12).getTime(),
      username: "fred",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a3",
      window: "2d52b358-dab4-4665-b734-e9f4a40a56a5",
    },
  },
  {
    name: "Petrobras",
    last_update: new Date(2018, 10, 10).getTime(),
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
      snapshot_date: new Date(2018, 11, 12).getTime(),
      username: "fred22",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a3",
      window: "unexisting-window",
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
