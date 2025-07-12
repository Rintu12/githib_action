import React from "react";
import './jobstyle.css';
const Jobmanagement = () =>{
    return(
        <>
         <section className="job-mange">
         
         <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <h1>Job Management</h1>
               </div>
               </div>
          
         </div>
         <div className="btn-section">
         <div className="container">
           <div className="row">
             <div className="col-md-4">
               <a  className="btn btn-primary">Jobs Today 25</a>
             </div>
             <div className="col-md-4">
               <a  className="btn btn-btn btn-secondary">Completed Jobs 18</a>
             </div>
             <div className="col-md-4">
               <a  className="btn btn-success">Pending Jobs 7</a>
             </div>
             </div>
         </div>
         </div>
       
         <div className="container">    
            <div className="row table-filter">
                <div className="col-md-4">
                <h2 class="text-left">Jobs List </h2>
                </div>
                <div className="col-md-4">
                <form role="search" method="get" action="">
  <div class="input-container">
		<input type="search" class="search-input" value="" name="s" placeholder="Search" />
    <button type="submit" class="search-submit" name="submit"><i class="fa fa-search" aria-hidden="true"></i> Search</button>
  </div>
</form>
                </div>
                
                <div className="col-md-2">
                <button type="submit" className="filter-btn" name="submit">  Filter
                <i class="fa fa-bars" aria-hidden="true"></i> </button>
                </div>
                <div className="col-md-2">
                <button type="submit" className="export" name="submit"><i class="fa fa-sign-in" aria-hidden="true"></i>  Export</button>
                </div>
            </div>
             <div className="row">
                 <div className="col-md-12">
                     <div className="job-table">
                     

<div class="container table-responsive py-5"> 
<table class="table ">

<tbody>
 <tr >
   <td>
    <div className="head-sec">
        <div className="heading-1">Saloon - Sedan Ride </div>
        <div className="heading-2">In Progress</div>
    </div>
    <div className="timezone">
     <div className="date" >Date: 19 Sep 2024</div>  
     <div className="time" >Time 9:45 AM</div> 
    </div>
    <div className="price-icon-sec">
        <div className="price">Base Price: 2.5£</div>
        <div className="icon-sec">
           <ul>
            <li><a className="list-one" >
            <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>Next Pickup In</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>3</span>
                <span>Days</span>
                </a>
            </li>
            <li><a className="list-one" >
            <span>11</span>
                    <span>Hours</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>14</span>
                    <span>Minuets</span>
                </a>
            </li>
           </ul>
        </div>
    </div>
   </td>
   <td>
    <div className="form-sec">
        <div className="heading">From</div>
        <div className="txt">Heathrow Airport Terminal 5</div>
    </div>
    </td>
   <td>
   <div className="form-sec">
   <div className="heading">To</div>
   <div className="txt">Heathrow Airport Terminal 5</div>
        </div>
   </td>
   <td>
   <div className="form-sec">
   <div className="heading">Vehicle & Size</div>
   <div className="txt">Standard Saloon</div>
   <div className="txt">For1-3 Passengers</div>
    </div>
   
    </td>
    <td>
   <div className="form-sec">
   <div className="heading">Driver</div>
   <div className="txt">John Doe</div>
 
    </div>
   
    </td>
    <td>
   <div className="bn-sec">
   <div className="heading">Mark</div> 
   <a href="#" className="btn btn-primary">View Detail</a>
   </div>
   </td>
  
 </tr>
 <tr >
   <td>
    <div className="head-sec">
        <div className="heading-1">Saloon - Sedan Ride </div>
        <div className="heading-2">In Progress</div>
    </div>
    <div className="timezone">
     <div className="date" >Date: 19 Sep 2024</div>  
     <div className="time" >Time 9:45 AM</div> 
    </div>
    <div className="price-icon-sec">
        <div className="price">Base Price: 2.5£</div>
        <div className="icon-sec">
           <ul>
            <li><a className="list-one" >
            <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>Next Pickup In</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>3</span>
                <span>Days</span>
                </a>
            </li>
            <li><a className="list-one" >
            <span>11</span>
                    <span>Hours</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>14</span>
                    <span>Minuets</span>
                </a>
            </li>
           </ul>
        </div>
    </div>
   </td>
   <td>
    <div className="form-sec">
        <div className="heading">From</div>
        <div className="txt">Heathrow Airport Terminal 5</div>
    </div>
    </td>
   <td>
   <div className="form-sec">
   <div className="heading">To</div>
   <div className="txt">Heathrow Airport Terminal 5</div>
        </div>
   </td>
   <td>
   <div className="form-sec">
   <div className="heading">Vehicle & Size</div>
   <div className="txt">Standard Saloon</div>
   <div className="txt">For1-3 Passengers</div>
    </div>
   
    </td>
    <td>
   <div className="form-sec">
   <div className="heading">Driver</div>
   <div className="txt">John Doe</div>
 
    </div>
   
    </td>
    
    <td>
   <div className="bn-sec">
   <div className="heading">Mark</div> 
   <a href="#" className="btn btn-primary">View Detail</a>
   </div>
   </td>
  
 </tr>
 <tr >
   <td>
    <div className="head-sec">
        <div className="heading-1">Saloon - Sedan Ride </div>
        <div className="heading-2">In Progress</div>
    </div>
    <div className="timezone">
     <div className="date" >Date: 19 Sep 2024</div>  
     <div className="time" >Time 9:45 AM</div> 
    </div>
    <div className="price-icon-sec">
        <div className="price">Base Price: 2.5£</div>
        <div className="icon-sec">
           <ul>
            <li><a className="list-one" >
            <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>Next Pickup In</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>3</span>
                <span>Days</span>
                </a>
            </li>
            <li><a className="list-one" >
            <span>11</span>
                    <span>Hours</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>14</span>
                    <span>Minuets</span>
                </a>
            </li>
           </ul>
        </div>
    </div>
   </td>
   <td>
    <div className="form-sec">
        <div className="heading">From</div>
        <div className="txt">Heathrow Airport Terminal 5</div>
    </div>
    </td>
   <td>
   <div className="form-sec">
   <div className="heading">To</div>
   <div className="txt">Heathrow Airport Terminal 5</div>
        </div>
   </td>
   <td>
   <div className="form-sec">
   <div className="heading">Vehicle & Size</div>
   <div className="txt">Standard Saloon</div>
   <div className="txt">For1-3 Passengers</div>
    </div>
   
    </td>
    <td>
   <div className="form-sec">
   <div className="heading">Driver</div>
   <div className="txt">John Doe</div>
 
    </div>
   
    </td>
    <td>
   <div className="bn-sec">
   <div className="heading">Mark</div> 
   <a href="#" className="btn btn-primary">View Detail</a>
   </div>
   </td>
  
 </tr>
 <tr >
   <td>
    <div className="head-sec">
        <div className="heading-1">Saloon - Sedan Ride </div>
        <div className="heading-2">In Progress</div>
    </div>
    <div className="timezone">
     <div className="date" >Date: 19 Sep 2024</div>  
     <div className="time" >Time 9:45 AM</div> 
    </div>
    <div className="price-icon-sec">
        <div className="price">Base Price: 2.5£</div>
        <div className="icon-sec">
           <ul>
            <li><a className="list-one" >
            <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>Next Pickup In</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>3</span>
                <span>Days</span>
                </a>
            </li>
            <li><a className="list-one" >
            <span>11</span>
                    <span>Hours</span>
                </a>
            </li>
            <li><a className="list-one" >
                <span>14</span>
                    <span>Minuets</span>
                </a>
            </li>
           </ul>
        </div>
    </div>
   </td>
   <td>
    <div className="form-sec">
        <div className="heading">From</div>
        <div className="txt">Heathrow Airport Terminal 5</div>
    </div>
    </td>
   <td>
   <div className="form-sec">
   <div className="heading">To</div>
   <div className="txt">Heathrow Airport Terminal 5</div>
        </div>
   </td>
   <td>
   <div className="form-sec">
   <div className="heading">Vehicle & Size</div>
   <div className="txt">Standard Saloon</div>
   <div className="txt">For1-3 Passengers</div>
    </div>
   
    </td>
    <td>
   <div className="form-sec">
   <div className="heading">Driver</div>
   <div className="txt">John Doe</div>
 
    </div>
   
    </td>
    <td>
   <div className="bn-sec">
   <div className="heading">Mark</div> 
   <a href="#" className="btn btn-primary">View Detail</a>
   </div>
   </td>
  
 </tr>
 

 

</tbody>
</table>
</div>



                        
                     </div>
                     <div class="pagination justify-content-center">
  <a href="#"> &laquo; Previous</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">Next &raquo; </a>
</div>
                 </div>
             </div>
         </div>



     </section>
        </>
    )
}

export  default Jobmanagement;