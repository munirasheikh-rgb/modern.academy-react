export default function Results(){

    return(
        <>
        <main className="content">
    <section className="results">
      <h2>Exam Results</h2>
      <p><strong>Student:</strong> <span id="student-name"></span></p>
      <table className="results-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>85</td>
            <td>A</td>
          </tr>
          <tr>
            <td>English</td>
            <td>78</td>
            <td>B+</td>
          </tr>
          <tr>
            <td>Biology</td>
            <td>92</td>
            <td>A+</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
        </>
    )
}