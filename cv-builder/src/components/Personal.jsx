
export default function Personal() {
  return (
    <div className='personal-div'>
        <h1>Personal</h1>
        <div className='details-list'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' />

            <label htmlFor="address">Address</label>
            <input type="text" id='address' placeholder='city/state/country' /> 

            <label htmlFor="phone">Phone</label>
            <input type="tel" id='phone' /> 

            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" id="mail" />

            <label htmlFor="summary">Summary</label>
            <textarea type="text" id='summary' placeholder="write about yourself . . ." />

            <div className="skills-div">
                <label>Skills</label>
                <div className="skill-inputs">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <button className="add-skill-btn">+ New Skill</button>
            </div>
        </div>
    </div>
  )
}
