import React from "react";

function Signup(){


    return(
        <>
        <div className = "container mx-auto px-8 shadow-2xl object-cover" >
            <div className = "login-header pt-5 justify-center">
                <center><header>Sign up | MentorMate</header></center>
            </div>

            <form>
                <div className="grid-cols-2 flex items-center gap-4 pb-2 justify-start">
                    <label className = "text-slate-800-bold "for="username" >User Name</label>
                    <div >
                    <input className="box-border rounded"type="text" placeholder = "Username" id="username"/>
                    </div>
                </div>

                <div className="justify-start grid-cols-3 flex items-stretch gap-4 pb-2">
                    <label for="name" class="col-sm-2 col-form-label" >Name</label>
                    <div className="pl-10">
                    <input type="text" className="rounded" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col-sm-4">
                    <input type="text" className="rounded" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>

                <div className="justify-start grid-cols-2 flex items-stretch gap-4 pb-2">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div className="pl-11">
                    <input type="email" className="rounded" placeholder = "Email" id="inputEmail3"/>
                </div>
                </div>

                <div className="justify-start grid-cols-2 flex items-stretch gap-4 pb-2">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div className="pl-3">
                    <input type="password" className="rounded" placeholder = "Password" id="inputPassword3"/>
                </div>
                </div>

                <div className="justify-start grid-cols-1 flex items-center gap-4 pb-2">
                <div className="justify-start grid-cols-3 flex items-center gap-4  ">
                    <label for="dob" class="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="pl-2 ">
                    <input type="number" className="rounded" placeholder="Date" aria-label="Date"/>
                    </div>
                    <div class="col-sm-3">
                    <label class="visually-hidden" for="autoSizingSelect"></label>
                    <select className="rounded" id="autoSizingSelect">
                        <option selected>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="1">April</option>
                        <option value="2">May</option>
                        <option value="3">June</option>
                        <option value="1">July</option>
                        <option value="2">August</option>
                        <option value="3">September</option>
                        <option value="1">October</option>
                        <option value="2">November</option>
                        <option value="3">December</option>
                    </select>
                    </div>
                    
                    <div className="">
                    <input type="number" className="rounded" placeholder="Year" aria-label="Year"/>
                    </div>
            
                </div>
                </div>

                <div className="justify-start grid-cols-2 flex items-stretch gap-4 pb-2">
                    <label for="grade" class="col-sm-2 col-form-label">Grade</label>
                <div className="pl-10">
                <select className="rounded" aria-label="">
                    <option selected>Select your grade</option>
                    <option value="1">12</option>
                    <option value="2">13</option>   
                </select>
                </div>
                </div>

                <div className="grid-cols-2 flex items-stretch gap-4 pb-2">
                    <label for="Stream" class="col-sm-2 col-form-label">Stream</label>
                <div className="pl-7">
                <select className="rounded" aria-label="">
                    <option selected>Select your stream</option>
                    <option value="1">Biology</option>
                    <option value="2">Physical Science</option>
                    <option value="3">Agriculture</option>     
                </select>
                </div>
                </div>

        
                <div className=" justify-center box-border shadow-lg shadow-gray-800 cursor-pointer hover:shadow-gray-500">
                <center><a href="indexlogin.html" className="font-bold">Sign up</a></center>
                </div>

            
            </form>


        </div>
        </>
    );



}
export default Signup;