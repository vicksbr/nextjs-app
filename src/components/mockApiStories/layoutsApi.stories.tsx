import React, { useState } from "react";
import type { Story } from "@storybook/react";

import { handlers } from "mock/handlers";

export default {
  title: "Mock Api Viewer/Layouts",
  parameters: {
    msw: handlers,
  },
};

export const Layouts: Story = () => {
  const [response, setResponse] = useState<any>(null);
  const resetLayouts = () => {
    fetch("/curated/layouts/reset", { method: "POST" }).then(() =>
      setResponse(null)
    );
  };
  const listLayouts = () => {
    fetch("/curated/layouts")
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const createLayout = () => {
    const data = JSON.stringify({
      name: "New Layout",
      thumbnail: "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
      rank: 2,
      active: true,
    });
    fetch("/curated/layouts", { method: "POST", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const editLayout = (id: string) => {
    const data = JSON.stringify({
      name: "New Name",
      rank: 99,
      active: false,
      thumbnail:
        "https://i.picsum.photos/id/487/460/460.jpg?hmac=DDZ0NIY20RE_JE4Hg_fUiGzPmgJ1qfl5LMD0XLFZMLc",
    });
    fetch(`/curated/layouts/${id}`, { method: "PATCH", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const deleteLayout = (id: string) => {
    fetch(`/curated/layouts/${id}`, { method: "DELETE" }).then(() => {
      setResponse(null);
    });
  };
  return (
    <div>
      <p>Requests:</p>
      <button onClick={listLayouts}>get all layouts</button>
      <button onClick={createLayout}>create layout¹</button>
      <button onClick={() => editLayout("layout1")}>edit layout²</button>
      <button onClick={() => deleteLayout("layout1")}>delete layout³</button>
      {" "}
      <button onClick={resetLayouts}>reset⁴</button>
      <hr />
      <p>Response:</p>
      <pre style={{ whiteSpace: "pre" }}>
        {JSON.stringify(response, null, 2)}
      </pre>
      <hr />
      <p>Notes:</p>
      <p>1. creates a layout with name == "New Layout".</p>
      <p>
        2. change the name, rank, thumbnail and active of the layout with id ==
        "layout1".
      </p>
      <p>3. delete the layout with id == "layout1".</p>
      <p>4. resets the database to the initial values.</p>
    </div>
  );
};
