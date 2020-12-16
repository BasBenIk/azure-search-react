import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ReactMarkdown from "react-markdown";

import "./Details.css";

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});

  useEffect(() => {
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        const doc = response.data.document;
        setDocument(doc);
      })
      .catch(error => {
        console.log(error);
      });

  }, [id]);

  return (
    <main className="main main--details container fluid">
      <div className="card result-container">
        <ReactMarkdown source={ document.content } />
      </div>
    </main>
  );
}
