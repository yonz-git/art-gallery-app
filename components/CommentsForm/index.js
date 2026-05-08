import CommentsList from "../CommentsList";
import { uid } from "react-uid";
import { Form, Label, InputField, SubmitButton } from "./style";
import useLocalStorageState from "use-local-storage-state";

export default function CommentsForm({ artPieces, artPiece, setArtPieces }) {
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
    event.target.reset();
    event.target.comment.focus();
  }

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
      <CommentsList comments={artPiece.comments} />
    </>
  );
}
