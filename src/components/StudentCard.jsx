function StudentCard({ id, name, major, score, onDelete }) {
  const passed = score >= 60;

  return (
    <div className="card">
      <div className="student-avatar">
        {name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{name}</h3>

        <span className="major">
          {major}
        </span>

        <div className="score-section">
          <span>Score</span>
          <strong>{score}</strong>
        </div>

        <div className={passed ? "status passed" : "status failed"}>
          {passed ? "✓ Passed" : "✕ Failed"}
        </div>

        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
        >
          Delete Student
        </button>
      </div>
    </div>
  );
}

export default StudentCard;