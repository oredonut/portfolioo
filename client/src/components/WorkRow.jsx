function WorkRow({ index, title, org, description, pills, liveUrl }) {
  return (
    <div className="row">
      <span className="idx">{index}</span>
      <div className="row-info">
        <h3>{title}</h3>
        <div className="org">{org}</div>
        <p>{description}</p>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
            View live ↗
          </a>
        )}
      </div>
      <div className="pills">
        {pills.map((p) => (
          <span key={p} className="pill">{p}</span>
        ))}
      </div>
    </div>
  );
}

export default WorkRow;
