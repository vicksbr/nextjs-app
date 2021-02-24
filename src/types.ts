export type WindowTypes = ["Flux", "Chart", "Quotes Table", "Twitter Search"];
export type WindowType = "Flux" | "Chart" | "Quotes Table" | "Twitter Search";

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
  sortBy: "date" | "name" | "type" | "rank";
  order: "asc" | "desc";
};

export type WindowData = {
  name: string;
  date: Date;
  type: WindowType;
  id: string;
  basePath: string;
};

export type LayoutData = {
  name: string;
  date: Date;
  id: string;
  basePath: string;
};

export type CategoryData = {
  name: string;
  date: Date;
  id: string;
  basePath: string;
};

export type TagData = {
  name: string;
  date: Date;
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
