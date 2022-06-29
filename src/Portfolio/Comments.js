import React, { useState } from "react";
import ListComments from "./ListComments";
import { createComment } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Comments() {
  const initialForm = { firstName: '', lastName: '', pronouns: 1, comment: ''}
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({target}) => {
    setFormData({ ...formData, [target.name]: target.name === "pronouns" ? Number(target.value) : target.value});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      const abortController = new AbortController();
      await createComment(formData, abortController.signal);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <article className="container-fluid" id="comments">
      <section className="InfoRow">
        <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
          <h2 className="portfolio-h2">Portfolio Comments:</h2>
          <form action="submit" className="comment-form" onSubmit={handleSubmit}>
            <p>Leave A Comment?</p>
            <select name="pronouns" onChange={handleChange} value={formData.pronouns}>
                <option value={1}>He/Him</option>
                <option value={2}>She/Her</option>
                <option value={3}>They/Them</option>
              </select>
            <div className="row">
              <input required name="firstName" maxLength={12} type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
              <input required name="lastName" maxLength={12} type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            </div>
            <textarea name="comment" maxLength={140} placeholder="Your comment here..." cols="35" rows="3" value={formData.comment} onChange={handleChange}></textarea>
            <button action="submit">Comment</button>
            <p className="error" style={{display: `${error === "" ? "none" : "block"}`, width: "80%"}}>{error}</p>
          </form>
          <div className="comments">
            <ListComments/>
          </div>
        </div>
      </section>
    </article>
  );
}
