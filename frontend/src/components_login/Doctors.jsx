import React from 'react'
import surgeon from "../../public/surgeon.jpg";
import doctor2 from "../../public/doctor 2.jpg";
function Doctors() {
  return (
    

    <>
      <div className="flex flex-col md:flex-row mt-8">
        {/* doctor 1 */}
        <div className="card bg-base-100 w-80 ml-12 md:ml-5 shadow-xl">
          <figure>
            <img
              src={surgeon}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Rohan Dsouza</h2>
            <p>Email : akhilesh@gmail.com <br />
            Mobile No : 9898529637 <br />
            DOB : 05/11/1990 <br />
            Gender : Male</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      
      {/* doctor 2 */}
      <div className="card bg-base-100 w-80 ml-12 md:ml-16 shadow-xl">
        <figure>
          <img
            src={doctor2}
            alt="Shoes" 
            width="300px"
            height="400px"/>
            
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dr. Ramesh Singh</h2>
          <p>Email : Ramesh@gmail.com <br />
            Mobile No : 9272583690 <br />
            DOB : 04/11/1992 <br />
            Gender : Male</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>

{/* doctor 3 */}
      <div className="card bg-base-100 w-80 ml-12 md:ml-16 shadow-xl">
        <figure>
          <img
            src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"
            alt="doctor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dr. Rohan Dwivedi</h2>
          <p>Email : Rohan@gmail.com <br />
            Mobile No : 9785967420 <br />
            DOB : 05/01/1998 <br />
            Gender : Male</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
{/* doctor 4 */}
      <div className="card bg-base-100 w-80 ml-12 md:ml-16  shadow-xl">
        <figure>
          <img
            src="https://medi-center.nl/wp-content/uploads/2022/10/Female-Doctor-PNG-Transparent-1.png"
            alt="doctor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dr. Sonali Yadav</h2>
          <p>Email : Sonali123@gmail.com <br />
            Mobile No : 9837478598 <br />
            DOB : 03/12/2000 <br />
            Gender : Female</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Doctors
