import CommentsList from "../CommentsList";
import { useState } from "react";
import { uid } from "react-uid";
import { Form, Label, InputField, SubmitButton } from "./style";

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
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="comment">Add Comment</Label>
        <InputField
          id="comment"
          type="text"
          name="comment"
          placeholder="place a comment here…"
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
      <CommentsList comments={comments} />
    </>
  );
}
