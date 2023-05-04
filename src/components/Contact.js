import React from 'react'

const Contact = () => {
  return (
    <>
     <div className='contact-info'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
            {/*phone */}
            <div className='contact-info-item d-flex justify-content-start align-item-center'>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                  Phone
                </div>
                <div className='contact-info-text'>
                  91 9899752254
                </div>
              </div>

            </div>
            {/*email*/}
            <div className='contact-info-item d-flex justify-content-start align-item-center'>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                  Email
                </div>
                <div className='contact-info-text'>
                  npr@yahoo.com
                </div>
              </div>
           
            </div>
            {/*address*/}
            <div className='contact-info-item d-flex justify-content-start align-item-center'>
              <div className='contact-info-content'>
                <div className='contact-info-title'>
                  Address
                </div>
                <div className='contact-info-text'>
                  Nagdah begusarai bihar
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
     </div>

    {/*Contact us form*/}
    <div className='contact-form'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='contact-form-container py-5'>
              <div className='contact-form-title'>
                Get In Touch</div>
                <form id='contact-form'>
                  <div className='contact-form-name d-flex justify-content-between align-item-between'>
                    <input type='text' id='contact-form-email' className='contact-form-email input-field' placeholder='Your Name' required='true'/>                    </div> 
                    <input type='email' id='contact-form-name' className='contact-form-name input-field' placeholder='Your Email' required='true'/>
                    <input type='number' id='contact-form-phone'className='contact-form-phone input-field' placeholder='Your PhoneNumber' required='true'/>
                
                   <div className='contact-form-text mt-5'>
                    <textarea className='text-field contact-form-message' placeholder='Message' cols='30' rows='10'></textarea>
                   </div>
                   <div className='contact-form-button'>
                    <button type='submit' className='button contact-submit-button'>Send Message</button>
                   </div>
                
                
                </form>



            </div>

          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Contact
