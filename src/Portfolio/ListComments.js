import React, { useState, useEffect } from "react";
import { listObjectsFromAPI } from "../utils/api";

export default function ListComments() {
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadComments() {
      setError([]);
      setLoaded(false);
      listObjectsFromAPI(abortController.signal, "comments")
        .then((res) => {
          setComments(res);
          setLoaded(true);
        })
        .catch((err) => {
          setComments([]);
          setLoaded(true);
          setError([err.message]);
        });
    }

    loadComments();
    return () => abortController.abort();
  }, []);

  if (error.length > 0) {
    return <p>Unable to load comments.</p>
  }
  else if (loaded) {
    return comments.map((comment) => {
        const { pronouns } = comment;
        const pron = pronouns === 1 ? "He/Him" : pronouns === 2 ? "She/Her" : "They/Them";
        return (
          <div className="comment" key={comment.id}>
            <h6>{comment.firstName} {comment.lastName} ({pron}) says:</h6>
            <p>{comment.comment}</p>
          </div>
        );
      });
  } else {
    return <p>Loading Comments...</p>
  }
}
