

export default function Education() {
  return (
    <div className="education-div">
      <h1>Education</h1>
      <div className="details-list">
        <label htmlFor="college">College/University</label>
        <input type="text" id="college" />

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" />

        <label htmlFor="passout-clg">Passed out on</label>
        <input type="text" id="passout-clg" />

        <label htmlFor="gpa-clg">Percentage/GPA</label>
        <input type="number" id="gpa-clg" />

        <label htmlFor="school">Schooling</label>
        <input type="text" id="school" />

        <label htmlFor="passout-scl">Passed out on</label>
        <input type="text" id="passout-scl" />

        <label htmlFor="gpa-scl">Percentage/GPA</label>
        <input type="number" id="gpa-scl" />
      </div>
    </div>
  )
}
