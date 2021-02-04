export type WindowType = "Flux" | "Chart" | "Quotes Table" | "Twitter Search";

export type WindowTypes = ["Flux", "Chart", "Quotes Table", "Twitter Search"];

export type View = "windows" | "layouts" | "categories" | "tags";

export type Sort = {
  sortBy: "date" | "name" | "type";
  order: "asc" | "desc";
};

export type Window = {
  name: string;
  date: Date;
  type: WindowType;
};

export type Layout = {
  name: string;
  date: Date;
};

export type Category = {
  name: string;
  date: Date;
};

export type Tag = {
  name: string;
  date: Date;
};

export type CurationData = {
  windows: Window[];
  layouts: Layout[];
  categories: Category[];
  tags: Tag[];
};
