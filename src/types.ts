export type WindowTypes = ["flux", "chart", "quotestable", "twittersearch"];
export type WindowType = "flux" | "chart" | "quotestable" | "twittersearch";

export type View = "windows" | "layouts" | "categories" | "tags";

type Window = {
  type: "window";
  data: WindowData;
}
type Layout = {
  type: "layout";
  data: LayoutData;
}
type Category = {
  type: "window";
  data: CategoryData;
}
type Tag = {
  type: "window";
  data: TagData;
}

export type Item = {
  id: string;
} & (Window | Layout | Category | Tag);

export type Sort = {
  sortBy: "last_update" | "name" | "type" | "rank";
  order: "asc" | "desc";
};

export type WindowData = {
  name: string;
  last_update: Date;
  type: WindowType;
  id: string;
  basePath: string;
  rank: {
    layout_id: LayoutData["id"];
    value: LayoutData["rank"];
  }[];
};

export type BaseWindow = {
  username: string;
  board: string;
  window: string;
}

export type FullWindowData = {
  name: string;
  last_update: Date;
  description: string;
  thumbnail: string;
  tags: {
    name: TagData["name"];
    id: TagData["id"];
  }[];
  type: WindowType;
  category: {
    name: CategoryData["name"];
    id: CategoryData["id"];
  };
  layouts: {
    id: LayoutData["id"];
    name: LayoutData["name"];
    rank: LayoutData["rank"];
  }[];
  active: boolean;
  featured: boolean;
  id: string;
  created_from: BaseWindow;
}

export type LayoutData = {
  name: string;
  last_update: Date;
  id: string;
  basePath: string;
  rank: number;
  thumbnail: string;
  active: boolean;
};

export type CategoryData = {
  name: string;
  last_update: Date;
  id: string;
  basePath: string;
  rank: number;
};

export type TagData = {
  name: string;
  last_update: Date;
  id: string;
  basePath: string;
};

export type ItemData = WindowData | LayoutData | CategoryData | TagData;

export type CurationData = {
  windows: WindowData[];
  layouts: LayoutData[];
  categories: CategoryData[];
  tags: TagData[];
};
