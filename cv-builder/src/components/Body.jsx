import '../styles/body.css';
import Form from './Form.jsx';
import Resume from './Resume.jsx';

export default function Body() {
  return (
    <>
        <div className="body-container">
            <Form />
            <Resume />
        </div>
    </>
  )
}
