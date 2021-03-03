import React from "react";

import { FirebaseDatabaseNode } from "@react-firebase/database";

const AutoComplete = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} style={{color:"white"}}>{item.author}</li>
      ))}
    </ul>
  );
};

const Feedback = () => {
  return (
    <FirebaseDatabaseNode path="books/">
      {(data) => {
        const { value } = data;
        if (value === null || typeof value === "undefined") return null;
        const keys = Object.keys(value);
        const values = Object.values(value);
        const valuesWithKeys = values.map((value, i) => ({
          author: value.author,
          country: value.country,
          id: keys[i],
        }));
        return <AutoComplete items={valuesWithKeys} />;
      }}
    </FirebaseDatabaseNode>
  );
};

export default Feedback;
