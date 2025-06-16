import './contactUs.css';
import Button from './Button';
import ContactThank from './ContactThank';

function ContactUs({setComponent}) {

  return (
    <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-info-container">
            <div className='contact-info'>
                <img src='./src/assets/logoBackgroundTransparent.png'></img>
                <div className='contact-text'>
                    <h2>We are here to help</h2>
                    <p>
                        Feel free to reach out to us at
                        <br></br>2888-8888 or live chat with us.
                    </p>
                    <p>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br></br>Saturday: 9:00 AM - 12:00 PM
                        <br></br>Sunday: Closed
                    </p>
                </div>
            </div>
            <div className='contact-input'>
                <h2>Contact Information</h2>
                
                <br></br>
                <form>
                <label htmlFor="name">* Name:</label>
                <input type="text" id="name" name="name" required />

                <br></br>
                <label htmlFor="email">* Email:</label>
                <input type="email" id="email" name="email" required />
                
                <br></br>
                <label htmlFor="reason">* Subject:</label>
                <select id="reason" name="reason" required>
                    <option value="" disabled selected>
                        Select a reason
                    </option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Sales Inquiry</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                </select>

                <br></br>
                <label htmlFor="message">* Message:</label>
                <br></br>
                <textarea id="message" name="message" required></textarea>
                <br></br>
                {/* Use the Button component to redirect to the ContactThank page */}
                <Button
                buttonName="Send"
                setComponent={setComponent}
                newComponent={<ContactThank />}
                />
                </form>

            </div>
        </div>
    </div>
  );
}

export default ContactUs;