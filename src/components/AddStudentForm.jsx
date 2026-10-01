import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") return;

    onAdd({
      id: Date.now(),
      name: name.trim(),
      major: major.trim(),
      score: Number(score)
    });

    setName("");
    setMajor("");
    setScore("");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <div className="form-grid">
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>
      </div>
    </form>
  );
}

export default AddStudentForm;