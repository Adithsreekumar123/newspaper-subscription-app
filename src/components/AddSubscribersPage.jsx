import React from 'react'

import SubHeader from './SubHeader'


const AddSubscribersPage = () => {
    return (
        <div>

            
<SubHeader/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Subscriber Name</label>
                                    <input type="text" className="form-control" />
                                </div>


                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Address</label>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">District</label>
                                    <input type="text" className="form-control" />
                                </div>


                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Village Office</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Email ID</label>
                                    <input type="email" className="form-control" />
                                </div>


                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">Submit</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default AddSubscribersPage