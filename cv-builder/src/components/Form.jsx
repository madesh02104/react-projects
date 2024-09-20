import '../styles/form.css';
import Personal from './Personal.jsx';
import Education from './Education.jsx';
import Languages from './Languages.jsx';
import Experience from './Experience.jsx';

export default function Form() {
  return (
    <>
        <form>
            <Personal />
            <Education />
            <Languages />
            <Experience />
        </form>
    </>
  )
}
