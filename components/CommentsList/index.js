export default function CommentsList({ comments }) {
  console.log(comments);
  return (
    <section>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => {
          const timestamp = new Date(comment.timestamp);
          const fullDate = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
          const fullTime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
          return (
            <li key={index}>
              <blockquote>"{comment.content}"</blockquote>({fullDate},{fullTime}
              )
            </li>
          );
        })}
      </ul>
    </section>
  );
}
