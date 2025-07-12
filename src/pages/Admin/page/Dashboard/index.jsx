import React from "react";
import './dashboardstyle.css';
import PerformanceChart from "../../../../admin/performancechart";

const AdminDashboard = () => {
  return (
    <>


      <section className="fleet-manager">

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Welcome Fleet Manager</h1>
            </div>
          </div>

        </div>
        <div className="btn-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a className="btn btn-primary">Total Rides Today 42</a>
              </div>
              <div className="col-md-4">
                <a className="btn btn-btn btn-secondary">Total Today Earning 1245$</a>
              </div>
              <div className="col-md-4">
                <a className="btn btn-success">Active Vehicle 18/20</a>
              </div>
            </div>
          </div>
        </div>
        <div className="riders-section">
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div class="card">
                  <h5 class="card-title">Upcoming Riders</h5>
                  <div class="card-body">

                    <p class="card-text">Heathrow Airport Terminal </p>
                    <a href="#" class="btn btn-primary">10:30 AM</a>
                  </div>
                  <div class="card-body">

                    <p class="card-text">Gatwick Airport Terminal 5 </p>
                    <a href="#" class="btn btn-primary">10:30 AM</a>
                  </div>
                  <div class="card-body">

                    <p class="card-text">Gatwick Airport Terminal 5 </p>
                    <a href="#" class="btn btn-primary">10:30 AM</a>
                  </div>
                  <div class="card-body">

                    <p class="card-text">Gatwick Airport Terminal 5 </p>
                    <a href="#" class="btn btn-primary"><span>10:30 AM</span></a>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <div class="card">
                  <h5 class="card-title">Performance Metrics</h5>
                  <div 
                  style={{
                    paddingBottom:50
                  }}
                  class="card-body">
                    <PerformanceChart />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="activity-table">
                <h2 class="text-left pt-4">Recent Activity </h2>

                <div class="container table-responsive py-5">
                  <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Status</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">12 Sep,2024</th>
                        <td>Ride Completed: Heathrow to London City</td>
                        <td><a href="#" className="btn btn-primary">Completed</a></td>

                      </tr>
                      <tr>
                        <th scope="row">12 Sep,2024</th>
                        <td>New Vehicle: BMW 5 Series</td>
                        <td><a href="#" className="btn btn-primary">Processed</a></td>

                      </tr>
                      <tr>
                        <th scope="row">12 Sep,2024</th>
                        <td>Ride Completed: Heathrow to London City</td>
                        <td><a href="#" className="btn btn-primary">Pending News</a></td>

                      </tr>


                    </tbody>
                  </table>
                </div>




              </div>
            </div>
          </div>
        </div>



      </section>



    </>
  )
}

export default AdminDashboard;
