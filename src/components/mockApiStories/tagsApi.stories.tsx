import React, { useState } from "react";
import type { Story } from "@storybook/react";

export default {
  title: "Mock Api Viewer/Tags",
};

const baseUrl = "http://localhost:3000/api";

export const Tags: Story = () => {
  const [response, setResponse] = useState<any>(null);
  const listTags = (filterQueryString: string = "") => {
    fetch(`${baseUrl}/tags${filterQueryString}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const createTag = () => {
    const data = JSON.stringify({
      name: "New Tag Name",
    });
    fetch(`${baseUrl}/tags`, { method: "POST", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const editTag = (id: string) => {
    const data = JSON.stringify({
      name: "New Name",
    });
    fetch(`${baseUrl}/tags/${id}`, { method: "PATCH", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const deleteTag = (id: string) => {
    fetch(`${baseUrl}/tags/${id}`, { method: "DELETE" }).then(() => {
      setResponse(null);
    });
  };
  return (
    <div>
      <p>Requests:</p>
      <button onClick={() => listTags()}>get all tags</button>
      <button onClick={() => listTags("?name=Finances")}>
        get all tags | name=Finances
      </button>
      <button onClick={createTag}>create tag¹</button>
      <button onClick={() => editTag("tag1")}>edit tag²</button>
      <button onClick={() => deleteTag("tag1")}>delete tag³</button>
      <hr />
      <p>Response:</p>
      <pre style={{ whiteSpace: "pre" }}>
        {JSON.stringify(response, null, 2)}
      </pre>
      <hr />
      <p>Notes:</p>
      <p>1. creates a tag with name == "New Tag Name".</p>
      <p>2. change the name of the tag with id == "tag1" to "New Name".</p>
      <p>3. delete the tag with id == "tag1".</p>
    </div>
  );
};
