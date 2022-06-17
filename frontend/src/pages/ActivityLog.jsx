import React, { useEffect, useState } from "react";
import axios from "axios";

function ActivityLog() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        async function fetch() {
              try {
                  const { data } = await axios.get("/api/logs");
                  setLogs(data);
              } catch (err) {
                  console.error(err);
              }
          }
        fetch();
      }, []);
  
    return ( 
      <>
            <section className='mb-8'>
            <h1>An activity log of the last 50 user requests.</h1>
            </section>

            <section>
              {logs.map((log, _id) => (
                <article key={log._id} className="bg-greyish rounded-lg mb-8 p-4">
                  <h2 className='mb-2'>ID {log._id}</h2>
                  <p>Request time: {log.reqTime}
                  <br/>Username: {log.name}
                  <br/>Email: {log.email}
                  <br/>IP address: {log.userIP}
                  <br/>Request method: {log.reqMethod}
                  <br/>Request path: {log.reqPath}
                  <br/>Created at: {log.createdAt}
                  <br/>Updated at: {log.updatedAt}
                  </p>
                </article>
              ))}
            </section>
      </>
    )
  }
  
  export default ActivityLog
