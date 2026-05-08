import CommentsList from "../CommentsList";
import { useState } from "react";
import { uid } from "react-uid";

export default function CommentsForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const id = uid(data);
    setComments([
      { content: data.comment, timestamp: Date.now(), id: id },
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
