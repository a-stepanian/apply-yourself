import React, { useEffect, useState } from "react";

const List = () => {
  const [allApps, setAllApps] = useState([]);

  // Fetch all apps from DB
  useEffect(() => {
    const fetchApps = async () => {
      const response = await fetch("http://localhost:5000/applications", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(newApplication),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      const data = await response.json();
      setAllApps(data);
    };
    fetchApps();
  }, [allApps]);

  return (
    <section>
      <h2>All Applications</h2>
      {allApps.map((app) => {
        return (
          <article key={app._id}>
            <h2>{app.company}</h2>
          </article>
        );
      })}
    </section>
  );
};

export default List;
