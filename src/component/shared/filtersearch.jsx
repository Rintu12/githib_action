import React from "react";

const FilterOption = () => {
    return (
        <>
            <div className="filter-section p-3">
                <div className="mobile-filter">

                 <p style={{
                     fontSize:18,
                     color:'#1E293B',
                     fontWeight:600,
                     fontFamily:'Outfit',
                     paddingBottom:10
                 }}>Outboard Journey</p>
                    <form action="">
                        <div className="mb-3 input-field">
                            <label for="pickupDate" className="form-label">Pickup Date</label>
                            <input type="date" className="form-control" id="pickupDate" />
                        </div>
                        <div className="mb-3 input-field">
                            <label for="pickupTime" className="form-label">Pickup Time</label>
                            <input type="time" className="form-control" id="pickupTime" value="" />
                        </div>
                        <div className="mb-3 add-return-container">
                            <label for="" className="form-label">Return Journey</label>
                          <button onClick={() =>{}}>Add Return</button>
                        </div>
                        <div className="mb-3 add-return-container">
                            <label for="" className="form-label">Return Journey</label>
                          <button>1 Adult</button>
                        </div>
                    </form>
                    <div className="mb-3">
                        <label className="form-label">Vehicle Types</label>
                        <div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" id="vehicleType1" />
                                <label className="form-check-label ml-2" for="vehicleType1">Vehicle Type 1</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="vehicleType2" />
                                <label className="form-check-label ml-2" for="vehicleType2">Vehicle Type 2</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="vehicleType3" />
                                <label className="form-check-label ml-2" for="vehicleType3">Vehicle Type 3</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="vehicleType4" />
                                <label className="form-check-label ml-2" for="vehicleType4">Vehicle Type 4</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="filterapply-btn">Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterOption;