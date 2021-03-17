export type WindowTypes = ["flux", "chart", "quotestable", "twittersearch"];
export type WindowType = "flux" | "chart" | "quotestable" | "twittersearch";

export type Views = ["windows", "layouts", "categories", "tags"];
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
  last_update: number;
  type: WindowType;
  id: string;
  rank: {
    layout_id: LayoutData["id"];
    value: LayoutData["rank"];
  }[];
};

export type BaseWindow = {
  name: string;
  id: string;
  window_type: WindowType;
}

export type Board = {
  name: string;
  id: string;
  windows: BaseWindow[];
}

export type SnapshotInfo = {
  username: string;
  board: Board;
  window: BaseWindow;
  date?: number;
}

export type CreatedFrom = {
  username: string;
  board: string;
  window: string;
  snapshot_date: number;
}

export type FullWindowData = {
  name: string;
  last_update: number;
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
  created_from: CreatedFrom;
}

export type LayoutData = {
  name: string;
  last_update: number;
  id: string;
  rank: number;
  thumbnail: string;
  active: boolean;
};

export type CategoryData = {
  name: string;
  last_update: number;
  id: string;
  rank: number;
};

export type TagData = {
  name: string;
  last_update: number;
  id: string;
};

export type ItemData = WindowData | LayoutData | CategoryData | TagData;

export type CurationData = {
  windows: WindowData[];
  layouts: LayoutData[];
  categories: CategoryData[];
  tags: TagData[];
};
