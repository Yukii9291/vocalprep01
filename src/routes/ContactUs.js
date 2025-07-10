import { Link } from "react-router-dom";
import { Button } from "your-button-component-path"; // Adjust the import based on your project structure

// ...existing code...

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Put your contact form or info here.</p>
    <Link to="/contact">
      <Button>Contact Us</Button>
    </Link>
  </div>
);
export default Contact;