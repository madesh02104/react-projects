

export default function Experience() {
  return (
    <div className="experience-div">
      <h1>Experience</h1>
      <div className="details-list">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />

        <label htmlFor="job">Job/Role</label>
        <input type="text" id="job" />

        <label htmlFor="duration">Duration</label>
        <input type="text" id="duration" placeholder="eg: 25 june 2022 - 17 august 2023" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" />

        <div className="achievements-div">
          <label htmlFor="achievement">Achievements</label>
          <input type="text" id="achievement" />
          <input type="text" id="achievement" />
          <input type="text" id="achievement" />
          <button className="add-achievements-btn">+ New Achievement</button>
        </div>
      </div>
      <div className="details-list">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />

        <label htmlFor="job">Job/Role</label>
        <input type="text" id="job" />

        <label htmlFor="duration">Duration</label>
        <input type="text" id="duration" placeholder="eg: 25 june 2022 - 17 august 2023" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" />

        <div className="achievements-div">
          <label htmlFor="achievement">Achievements</label>
          <input type="text" id="achievement" />
          <input type="text" id="achievement" />
          <input type="text" id="achievement" />
          <button className="add-achievements-btn">+ New Achievement</button>
        </div>
      </div>
      <button className="add-experience-btn">+ New Experience</button>
    </div>
  )
}
