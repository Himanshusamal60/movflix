import React, { useState } from "react";
import "./bookpage.css";




function Bookpage() {

const[userData,setUserData]= useState({
  email: '',
  name: '',
  phone:'',
  seat:'',
});

const handleChange = (e) => {
  setUserData({ ...userData, [e.target.name]: e.target.value });
  console.log(userData);
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Store data in local storage
  localStorage.setItem('userData', JSON.stringify(userData));
  alert('Registration successful!');
  // Reset form fields
  setUserData({
    email: '',
    name: '',
    phone: '',
    seat: '',
  });
console.log(userData);
};

  return (
    <div className="mb-5 ">
      <button
        type="button"
        className="btn btn-primary bookBtn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Book Your Ticket
      </button>

      <div
        className="modal  fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content  modalBg">
            <div className="modal-header">
              <h1 className="modal-title  fs-5" id="staticBackdropLabel">
                Book Ticket
              </h1>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body ">
              <form  onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                  value={userData.email}
                  onChange={handleChange}
                    name="email"
                    className="form-control"
                    id="email"
                    required
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text text-secondary">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                  value={userData.name}
                  onChange={handleChange}
                    name="name"
                    className="form-control"
                    required
                    id="name"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label for="phone" className="form-label">
                        Mobile No.
                      </label>
                      <input
                        type="type"
              value={userData.phone}
              onChange={handleChange}
                        name="phone"
                        className="form-control"
                        required
                        id="phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label for="seat" className="form-label">
                        No.of Seats
                      </label>
                      <input
                        type="number"
                        name="seat"
                        onChange={handleChange}
                      value={userData.seat}
                        className="form-control"
                        required
                        id="seat"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    required
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                back
              </button>
              <button  type="submit"  className="btn btn-primary">
                Book
              </button>
            </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookpage;
