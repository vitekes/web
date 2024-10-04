import "./Tags.sass";
export function Tags({ tags }: { tags: string[] }) {
  return (
    <section className="tags">
      {tags.map(str => (
        <div className="tag">{str}</div>
      ))}
    </section>
  );
}
