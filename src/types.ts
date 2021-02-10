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
  id: string;
};

export type Layout = {
  name: string;
  date: Date;
  id: string;
};

export type Category = {
  name: string;
  date: Date;
  id: string;
};

export type Tag = {
  name: string;
  date: Date;
  id: string;
};

export type CurationData = {
  windows: Window[];
  layouts: Layout[];
  categories: Category[];
  tags: Tag[];
};
