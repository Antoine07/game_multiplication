import React from "react";

import { FirebaseDatabaseNode } from "@react-firebase/database";

const FeedBacksFire = () => {
  return (
    <FirebaseDatabaseNode path="scores/">
      {(data) => {
        const { value } = data;
        if (value === null || typeof value === "undefined") return null;
        const keys = Object.keys(value); // transformer en tableau JSON => array
        const values = Object.values(value);
        const items = values.map((value, i) => ({
          score: value.score,
          id: keys[i],
        }));

        return (
          <ul>
            {items.map((item, i) => (
              <li key={i} style={{ color: "white" }}>
                {item.score}
              </li>
            ))}
          </ul>
        );
      }}
    </FirebaseDatabaseNode>
  );
};

export default FeedBacksFire;
