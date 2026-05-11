import CommentsList from "../CommentsList";
import { uid } from "react-uid";
import {
  Form,
  Label,
  InputField,
  SubmitButton,
  SuccessMessage,
} from "./CommentsForm.styled";
import { useState } from "react";

export default function CommentsForm({ artPieces, artPiece, setArtPieces }) {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const id = uid(data);

    setArtPieces(
      artPieces.map((art) =>
        art.slug === artPiece.slug
          ? {
              ...art,
              comments: art.comments
                ? [
                    { content: data.comment, timestamp: Date.now(), id: id },
                    ...art.comments,
                  ]
                : [{ content: data.comment, timestamp: Date.now(), id: id }],
            }
          : art
      )
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    event.target.reset();
    event.target.comment.focus();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="comment">Add Comment</Label>
        <InputField
          id="comment"
          aria-label="Inputfield for Comments"
          type="text"
          name="comment"
          placeholder="place a comment here…"
          required
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
      {showSuccess && (
        <SuccessMessage aria-label="Success Message for adding a new Comment">
          <p>✓ Comment successfully added!</p>
        </SuccessMessage>
      )}
      <CommentsList comments={artPiece.comments} />
    </>
  );
}
