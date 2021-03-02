import { rest } from "msw";
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

import {
  itemsData,
  fullWindowsData,
  fluxonautUsers,
  userBoards,
} from "mockedData";
import type { CurationData, FullWindowData } from "types";

type DbType = {
  windows: FullWindowData[];
} & Omit<CurationData, "windows">;
const adapter = new LocalStorage<DbType>("db");
const db = low(adapter);

const randomUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const extractWindowBasicData = (windowData: FullWindowData) => {
  const { name, last_update, type, id } = windowData;
  return { name, last_update, type, id };
};

const dbDefaults: DbType = {
  ...db._.cloneDeep(itemsData),
  windows: db._.cloneDeep(fullWindowsData)
};
db.defaults(dbDefaults).write();

export const handlers = [
  // Tags endpoints
  // Get all tags
  rest.get("/tags", (_, res, ctx) => {
    return res(ctx.json(db.get("tags").value()));
  }),

  // Create a tag
  rest.post("/tags", (req, res, ctx) => {
    const tagName = JSON.parse(req.body as string).name;
    if (tagName) {
      const newTag = {
        name: tagName,
        last_update: new Date(),
        id: randomUUID(),
        basePath: '/tags'
      };
      db.get("tags").push(newTag).write();
      return res(ctx.status(201), ctx.json(newTag));
    }
    return res(ctx.status(400));
  }),

  // Edit tag
  rest.patch("/tags/:id", (req, res, ctx) => {
    const tagId = req.params.id;
    const tagNewName = JSON.parse(req.body as string).name;

    if (tagId && tagNewName) {
      db.get("tags")
        .find({ id: tagId })
        .assign({ name: tagNewName, last_update: new Date() })
        .write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Delete tag
  rest.delete("/tags/:id", (req, res, ctx) => {
    const tagId = req.params.id;
    if (tagId) {
      db.get("tags").remove({ id: tagId }).write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Reset Tags to initial state - for test purposes
  rest.post("/tags/reset", (_, res, ctx) => {
    const initialTags = db._.cloneDeep(itemsData.tags);
    db.set("tags", initialTags).write();
    return res(ctx.status(201));
  }),

  // Categories endpoints
  // Get all categories
  rest.get("/categories", (_, res, ctx) => {
    return res(ctx.json(db.get("categories").value()));
  }),

  // Create a category
  rest.post("/categories", (req, res, ctx) => {
    const catName = JSON.parse(req.body as string).name;
    const catRank = JSON.parse(req.body as string).rank;
    if (catName && catRank) {
      const newCat = {
        name: catName,
        last_update: new Date(),
        id: randomUUID(),
        rank: catRank,
        basePath: '/categories'
      };
      db.get("categories").push(newCat).write();
      return res(ctx.status(201), ctx.json(newCat));
    }
    return res(ctx.status(400));
  }),

  // Edit category
  rest.patch("/categories/:id", (req, res, ctx) => {
    const catId = req.params.id;
    const catNewName = JSON.parse(req.body as string).name;
    const catNewRank = JSON.parse(req.body as string).rank;

    if (catId && catNewName && catNewRank) {
      db.get("categories")
        .find({ id: catId })
        .assign({ name: catNewName, rank: catNewRank, last_update: new Date() })
        .write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Delete category
  rest.delete("/categories/:id", (req, res, ctx) => {
    const catId = req.params.id;
    if (catId) {
      db.get("categories").remove({ id: catId }).write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Reset Categories to initial state - for test purposes
  rest.post("/categories/reset", (_, res, ctx) => {
    const initialCategories = db._.cloneDeep(itemsData.categories);
    db.set("categories", initialCategories).write();
    return res(ctx.status(201));
  }),

  // Layouts endpoints
  // Get all layouts
  rest.get("/curated/layouts", (_, res, ctx) => {
    return res(ctx.json(db.get("layouts").value()));
  }),

  // Create a layout
  rest.post("/curated/layouts", (req, res, ctx) => {
    const reqBody = JSON.parse(req.body as string);
    const newLayout = {
      ...reqBody,
      last_update: new Date(),
      id: randomUUID(),
    };
    db.get("layouts").push(newLayout).write();
    return res(ctx.status(201), ctx.json(newLayout));
  }),

  // Edit layout
  rest.patch("/curated/layouts/:id", (req, res, ctx) => {
    const layoutId = req.params.id;
    const reqBody = JSON.parse(req.body as string);

    if (layoutId) {
      db.get("layouts")
        .find({ id: layoutId })
        .assign({
          ...reqBody,
          last_update: new Date(),
        })
        .write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Delete layout
  rest.delete("/curated/layouts/:id", (req, res, ctx) => {
    const layoutId = req.params.id;
    if (layoutId) {
      db.get("layouts").remove({ id: layoutId }).write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Reset Layouts to initial state - for test purposes
  rest.post("/curated/layouts/reset", (_, res, ctx) => {
    const initialLayouts = db._.cloneDeep(itemsData.layouts);
    db.set("layouts", initialLayouts).write();
    return res(ctx.status(201));
  }),

  // Windows endpoints
  // Get all windows
  rest.get("/curated/windows", (_, res, ctx) => {
    const windows = db.get("windows").cloneDeep().value();
    const windowsBasicData = windows.map((window) =>
      extractWindowBasicData(window)
    );
    return res(ctx.json(windowsBasicData));
  }),

  // Get a window
  rest.get("/curated/windows/:id", (req, res, ctx) => {
    const windowId = req.params.id;

    const window = db.get("windows").find({ id: windowId }).cloneDeep().value();

    return res(ctx.json(window));
  }),

  // Create a window
  rest.post("/curated/windows", (req, res, ctx) => {
    const reqBody = JSON.parse(req.body as string);

    const newWindow: FullWindowData = {
      ...reqBody,
      last_update: new Date(),
      id: randomUUID(),
    };

    db.get("windows").push(newWindow).write();
    return res(ctx.status(201), ctx.json(newWindow));
  }),

  // Edit window
  rest.patch("/curated/windows/:id", (req, res, ctx) => {
    const windowId = req.params.id;
    const reqBody = JSON.parse(req.body as string);

    if (windowId) {
      const newData = reqBody;
      db.get("windows")
        .find({ id: windowId })
        .assign({
          ...newData,
          last_update: new Date(),
        })
        .write();
      return res(
        ctx.status(201),
        ctx.json({
          name: newData.name,
          id: windowId,
        })
      );
    }
    return res(ctx.status(400));
  }),

  // Delete window
  rest.delete("/curated/windows/:id", (req, res, ctx) => {
    const windowId = req.params.id;
    if (windowId) {
      db.get("windows").remove({ id: windowId }).write();
      return res(ctx.status(201));
    }
    return res(ctx.status(400));
  }),

  // Update window snapshot
  rest.put("/curated/windows/:id/snapshot", (req, res, ctx) => {
    const windowId = req.params.id;
    const reqBody = JSON.parse(req.body as string);
    if (windowId && reqBody.username && reqBody.board && reqBody.window) {
      db.get("windows")
        .find({ id: windowId })
        .assign({
          created_from: reqBody,
          last_update: new Date(),
        })
        .write();
      return res(ctx.status(204));
    }
    return res(ctx.status(400));
  }),

  // Reset Windows to initial state - for test purposes
  rest.post("/curated/windows/reset", (_, res, ctx) => {
    const initialWindows = db._.cloneDeep(fullWindowsData);
    db.set("windows", initialWindows).write();
    return res(ctx.status(201));
  }),

  // Users endpoits
  // Get Fluxonaut users
  rest.get("/users", (_, res, ctx) => {
    return res(ctx.status(201), ctx.json(fluxonautUsers));
  }),

  rest.get("/users/:id/boards", (req, res, ctx) => {
    const userId = req.params.id;
    if (userId) return res(ctx.status(201), ctx.json(userBoards));
    return res(ctx.status(400));
  }),
];
