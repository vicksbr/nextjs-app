import React, { useState } from "react";
import type { Story } from "@storybook/react";

export default {
  title: "Mock Api Viewer/Windows",
};

const newWindowData = {
  name: "New Window",
  description: "window description",
  thumbnail:
    "https://i.picsum.photos/id/38/460/460.jpg?hmac=xmyt6kZw_mADqCdDa7ab4-FAFQHpGnYjKkiNELPVVpQ",
  type: "flux",
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
  categories: [
    {
      name: "gaming",
      id: "dee92648-bf74-49e0-8322-b5ba4e3159cb",
    },
    {
      name: "oi maldade",
      id: "9c1bc992-dc9f-4adf-b7c6-780c380e7ef9",
    },
  ],
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
  active: true,
  featured: false,
  created_from: {
    username: "fred",
    board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
    window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
  },
};

const baseUrl = "http://localhost:3000/api";

export const Windows: Story = () => {
  const [response, setResponse] = useState<any>(null);

  const listWindows = (filtersQueryString: string = "") => {
    fetch(`${baseUrl}/curated/windows${filtersQueryString}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const getWindow = (id: string) => {
    fetch(`${baseUrl}/curated/windows/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const createWindow = () => {
    const data = JSON.stringify(newWindowData);
    fetch(`${baseUrl}/curated/windows`, { method: "POST", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const editWindow = (id: string) => {
    const data = JSON.stringify(newWindowData);
    fetch(`${baseUrl}/curated/windows/${id}`, { method: "PATCH", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const deleteWindow = (id: string) => {
    fetch(`${baseUrl}/curated/windows/${id}`, { method: "DELETE" }).then(() => {
      setResponse(null);
    });
  };
  const updateSnapshot = (id: string) => {
    const data = JSON.stringify({
      username: "fred2",
      board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
      window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    });
    fetch(`${baseUrl}/curated/windows/${id}/snapshot`, { method: "PUT", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const listUsers = (filterQueryString: string = "") => {
    fetch(`${baseUrl}/users${filterQueryString}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const getUserBoards = (id: string) => {
    fetch(`${baseUrl}/users/${id}/boards`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  return (
    <div>
      <p>Requests:</p>
      <div>
        <button onClick={() => listWindows()}>get all curated windows</button>
        <button onClick={() => listWindows("?name=Ibovespa")}>filter name=Ibovespa</button>
        <button onClick={() => listWindows("?type=flux,chart")}>filter type=flux,chart</button>
        <button onClick={() => listWindows("?categories=\"gaming\"")}>filter categories="gaming"</button>
        <button onClick={() => listWindows("?layout_id=bd4e4f66-2ae7-4447-8605-69247b0a92b5")}>filter layout_id=bd4e...</button>
        <br/>
        <button onClick={() => getWindow("window1")}>
          get a curated window*
        </button>
        <button onClick={createWindow}>create window</button>
        <button onClick={() => editWindow("window1")}>edit window*</button>
        <button onClick={() => deleteWindow("window1")}>delete window*</button>
        <button onClick={() => updateSnapshot("window1")}>
          update snapshot*
        </button>
      </div>
      <div>
        <button onClick={() => listUsers()}>get fluxonaut users</button>
        <button onClick={() => listUsers("?name=fred")}>get fluxonaut users | name=fred</button>
        <button onClick={() => getUserBoards("userId")}>get user boards</button>
      </div>
      <hr />
      <p>Response:</p>
      <pre style={{ whiteSpace: "pre" }}>
        {JSON.stringify(response, null, 2)}
      </pre>
      <hr />
      <p>Notes:</p>
      <li>Responses for user requests were mocked static</li>
      <li>* request using id = "window1".</li>
    </div>
  );
};
