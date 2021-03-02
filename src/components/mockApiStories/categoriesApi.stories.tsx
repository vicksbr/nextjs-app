import React, { useState } from "react";
import type { Story } from "@storybook/react";

import { handlers } from "mock/handlers";

export default {
  title: "Mock Api Viewer/Categories",
  parameters: {
    msw: handlers,
  },
};

export const Categories: Story = () => {
  const [response, setResponse] = useState<any>(null);
  const resetCategories = () => {
    fetch("/categories/reset", { method: "POST" }).then(() =>
      setResponse(null)
    );
  };
  const listCategories = () => {
    fetch("/categories")
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const createCategory = () => {
    const data = JSON.stringify({
      name: "New Category Name",
      rank: 2,
    });
    fetch("/categories", { method: "POST", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      });
  };
  const editCategory = (id: string) => {
    const data = JSON.stringify({
      name: "New Name",
      rank: 99,
    });
    fetch(`/categories/${id}`, { method: "PATCH", body: data })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        setResponse(null);
      });
  };
  const deleteCategory = (id: string) => {
    fetch(`/categories/${id}`, { method: "DELETE" }).then(() => {
      setResponse(null);
    });
  };
  return (
    <div>
      <p>Requests:</p>
      <button onClick={listCategories}>get all categories</button>
      <button onClick={createCategory}>create category¹</button>
      <button onClick={() => editCategory("category1")}>edit category²</button>
      <button onClick={() => deleteCategory("category1")}>
        delete category³
      </button>
      {" "}
      <button onClick={resetCategories}>reset⁴</button>
      <hr />
      <p>Response:</p>
      <pre style={{ whiteSpace: "pre" }}>
        {JSON.stringify(response, null, 2)}
      </pre>
      <hr />
      <p>Notes:</p>
      <p>1. creates a category with name == "New Category Name".</p>
      <p>
        2. change the name and rank of the category with id == "category1" to
        "New Name" and 99 respectively.
      </p>
      <p>3. delete the category with id == "category1".</p>
      <p>4. resets the database to the initial values.</p>
    </div>
  );
};
