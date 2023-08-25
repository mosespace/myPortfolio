import React from "react";

export default function Contact() {
  return (
    <section className='contact'>
      <div className='contact-text'>
        <span>Contact_</span>
        <div class='contact-container'>
          <div class='row'>
            <h1>Contact us</h1>
          </div>
          <div class='row'>
            <h4>I'd love to hear from you!</h4>
          </div>
          <div class='row input-container'>
            <div class='col-xs-12'>
              <div class='styled-input wide'>
                <input type='text' required />
                <label>Name</label>
              </div>
            </div>
            <div class='col-md-6 col-sm-12'>
              <div class='styled-input wide'>
                <input type='text' required />
                <label>Email</label>
              </div>
            </div>
            <div class='col-md-6 col-sm-12'>
              <div class='styled-input wide'>
                <input type='text' required />
                <label>Phone Number</label>
              </div>
            </div>
            <div class='col-xs-12'>
              <div class='styled-input wide'>
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div class='col-xs-12'>
              <button class='btn-lrg submit-btn'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
