export default function CommentsList({ comments }) {
  return (
    <section>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => {
          const timestamp = new Date(comment.timestamp);
          const fullDate = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
          const fullTime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
          return (
            <li key={comment.id}>
              <blockquote>&quot;{comment.content}&quot;</blockquote>({fullDate},
              {fullTime})
            </li>
          );
        })}
      </ul>
    </section>
  );
}
