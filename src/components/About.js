import React from 'react'

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <image></image>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Nupur Kumari</h5>
                <h6>web developer</h6>
                <p className='profile-rating mt-3 mb-5'>RANKING:<span>1/10</span></p>

                <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link "  id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
  </li>
 
</ul>



              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' className='profile-edit-btn' name='btnAddMore' value='Edit profile'/>
            </div>

             <div className='row'>
              {/*left side data toggle*/}
              <div className='col-md-4'>
                <div className='profile-work'>
                  <p>WORK LINK</p>
                  <a href=' https://youtu.be/43IbFDSVdB0' target='_thapa'>Youtube</a><br/>
                  <a href=' https://youtu.be/43IbFDSVdB0' target='_thapa'>Ract</a><br/>
                  <a href=' https://youtu.be/43IbFDSVdB0' target='_thapa'>Reactjs</a><br/>
                  <a href=' https://youtu.be/43IbFDSVdB0' target='_thapa'>One video react</a><br/>
                  <a href=' https://youtu.be/43IbFDSVdB0' target='_thapa'>Thapa tech</a><br/>
                </div>
              </div>

              {/*right side data toggle*/}

              <div className='col-md-8 pl-5 about-info'>
               <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' area-labelledby='home-tab'>
                  <div className='row'>
                  <div className='col md-6'>
                    <label >User Id</label>
                  </div>
                  <div className='col md-6'>
                     <p>407991</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Name</label>
                  </div>
                  <div className='col md-6'>
                     <p>Nupur kumari</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Email</label>
                  </div>
                  <div className='col md-6'>
                     <p>him@gmail.com</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >phone</label>
                  </div>
                  <div className='col md-6'>
                     <p>9899831465</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Profession</label>
                  </div>
                  <div className='col md-6'>
                     <p>Doctor</p>
                  </div>
                  </div>
                 
                </div>
             <div class='tab-pan fade' id='profile' role='tabpanel' area-labelledby='profile-tab'>

             <div className='row'>
                  <div className='col md-6'>
                    <label >Experience</label>
                  </div>
                  <div className='col md-6'>
                     <p>10 years</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Address</label>
                  </div>
                  <div className='col md-6'>
                     <p>Awantika Delhi</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Organisation</label>
                  </div>
                  <div className='col md-6'>
                     <p>Max Healthcare</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Martial status</label>
                  </div>
                  <div className='col md-6'>
                     <p>Married</p>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col md-6'>
                    <label >Spouse Nmae</label>
                  </div>
                  <div className='col md-6'>
                     <p>Himanshu kumar</p>
                  </div>
                  </div>




             </div>

               </div>
              </div>


             </div>


          </div>

        </form>
      </div>
    </>
  )
}

export default About
