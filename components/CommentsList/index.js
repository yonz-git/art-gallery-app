export default function CommentsList({ comments }) {
  console.log(comments);
  return (
    <section>
      <h4>Comments:</h4>
      <ul>
        {comments.map((comment, index) => {
          console.log(comment.timestamp);
          const timestamp = new Date(comment.timestamp);
          const fullDate = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
          const fullTime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
          console.log(timestamp);
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
