import CommentsList from "../CommentsList";
import { useState } from "react";

export default function CommentsForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    setComments([
      { content: data.comment, timestamp: Date.now() },
      ...comments,
    ]);
    event.target.reset();
  }
  const [comments, setComments] = useState([]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add Comment</label>
        <input
          id="comment"
          type="text"
          name="comment"
          placeholder="place a comment here…"
          required
        />
        <button type="submit">Send</button>
      </form>
      <CommentsList comments={comments} />
    </>
  );
}
