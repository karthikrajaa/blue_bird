import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


class Home extends React.Component{
    render() {
        return(
            <div style={{ fontFamily: "Montserrat"}}>
                <div className="banner">
                    
                <div class="content">
                    </div>
                    <Navbar/>

                    <div className="container" style={{ width:"80%"}}>
                        <div class="row">
                            
                            <div class="col-sm" style={{paddingTop:"100px"}}>
                                <h1 style={{ color: "#ffffff", fontSize:"32px", fontWeight:"bold", fontFamily:"sans-serif", lineHeight:"40px", letterSpacing:"2px"}}>Unleash your<br/> business potential<br/> with the Cloud</h1>
                                <br/>
                                <p style={{ color: "#ffffff", fontSize:"15px", fontWeight:"lighter",lineHeight:"30px", letterSpacing:"1px"}}>Cloud Technology Solutions design, develop<br/>and Deliver cloud solutions and devices that<br/>drive your organization forward.</p>
                                <br/>
                                <button className="btn btn but" type="button" style={{ backgroundColor: "#00CD89", letterSpacing:"1px" }}>Start Your Journey</button>
                                <br/>
                                <br/>
                            </div>

                            <div class="col-sm text-center" style={{paddingTop:"50px"}}>
                                <img src="images/illustratiion1.png" style={{maxWidth:"100%", height:"auto"}} alt=""/>
                                <br/>
                                <br/>
                                <br/>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container text-center" style={{ maxWidth: "85%", fontWeight:"lighter"}}>
                    <div class="row">
                        
                        <div className="col-md-4">
                            <div style={{ color:"#0084E5", fontSize:"50px" }}>
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <br/>
                            <br/>
                            <h5 style={{ fontSize:"18px", fontWeight:"bolder" }}>Cloud-Startergy</h5>
                            <br/>
                            <p style={{ fontSize:"12px", fontWeight:"300", lineHeight:"25px"}}>
                            We will work with you to improve your IT<br/>
                            strategy and help you relaise the benefits<br/>
                            to a true cloud approch
                            </p>
                            <br/>
                        </div>

                        <div className="col-md-4">
                            <div style={{ color:"#0084E5", fontSize:"50px" }}>
                                <i class="fas fa-network-wired"></i>
                            </div>
                            <br/>
                            <br/>
                            <h5 style={{ fontSize:"18px", fontWeight:"bolder" }}>Implementation</h5>
                            <br/>
                            <p style={{ fontSize:"12px", fontWeight:"300", lineHeight:"25px" }}>
                            We will implement and migrate the right<br/>
                            cloud solution and Technical services best<br/>
                            fit to establish your goals
                            </p>
                            <br/>
                        </div>

                        <div className="col-md-4">
                            <div style={{ color:"#0084E5", fontSize:"50px" }}>
                                <i class="fas fa-server"></i>
                            </div>
                            <br/>
                            <br/>
                            <h5 style={{ fontSize:"18px", fontWeight:"bolder" }}>Cloud-Server</h5>
                            <br/>
                            <p style={{ fontSize:"12px", fontWeight:"300", lineHeight:"25px" }}>
                            We will have your back 24/7 ensuring that<br/>
                            your cloud solution is always <br/>
                            working the way it should
                            </p>
                        </div>

                    </div>
                </div>

                <br/>
                <br/>

                <div className="danner">
                    <br/>
                    <br/>
                
                    <div className="container text-center" style={{ maxWidth:"100%"}}>
                        <h5 style={{fontSize:"22px", letterSpacing:"1px", fontWeight:"bolder"}}>Cloud Server Solutions</h5>
                        <br/>
                        <p style={{fontSize:"14px", fontWeight:"300", letterSpacing:"1px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet ultricies
                                neque<br/> sit amet efficitur. Pellentesque tristique rutrum aliquam. Curabitur et auctor
                                nulla.</p>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="container text-center">
                        <img src="images/abstract2.png" style={{maxWidth:"30%", height:"auto"}} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="btn btn but" type="button" style={{ color: "#ffffff", backgroundColor: "#00CD89", letterSpacing:"1px" }}>FIND OUT MORE</button>
                        <br/>
                        <br/>
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>

                    <div className="container text-center" style={{ maxWidth:"100%"}}>
                        <h5 style={{fontSize:"22px", letterSpacing:"1px", fontWeight:"bolder"}}>Our Featured Services</h5>
                        <br/>
                        <p style={{ fontSize:"14px", fontWeight:"300", letterSpacing:"1px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet ultricies
                                neque sit amet efficitur.<br/> Pellentesque tristique rutrum aliquam. Curabitur et auctor
                                nulla.</p>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className ="container" style={{ maxWidth:"75%"}}>
                      <div class="row text-center">

                            <div class="col-md-6">
                                <br/>
                                <br/>
                                <div class="card1" style={{ backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"20px"}}>
                                    <div class="card-body">
                                        <p style={{ color:"#ffffff", fontSize:"20px", fontWeight:"500", letterSpacing:"1px"}}>
                                            Cloud Transformation
                                        </p>
                                        <p style={{ color:"#ffffff", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                            Drive your business forward by finding the right<br/>
                                            cloud-based collabration tools and devices so you<br/>
                                            can work more effeciently
                                        </p>
                                        <br/>
                                        <button className="btn btn" type="button" style={{ color: "#ffffff", backgroundColor: "#00CD89", letterSpacing:"1px",fontSize:"14px", fontWeight:"300", }}>FIND OUT MORE</button>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                                <br/>  
                            </div>

                            <div class="col-md-6">
                                <br/>
                                <br/>
                                <div class="card1" style={{ backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"20px"}}>
                                    <div class="card-body">
                                        <p style={{ color:"#ffffff", fontSize:"20px", fontWeight:"500", letterSpacing:"1px"}}>
                                            Cloud infrastucture
                                        </p>
                                        <p style={{ color:"#ffffff", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                            Our cloud experts can help you design and<br/>
                                            implement an intelligent, scalable and secure<br/>
                                            infrastucture that is cost effective.
                                        </p>
                                        <br/>
                                        <button className="btn btn" type="button" style={{ color: "#ffffff", backgroundColor: "#00CD89", letterSpacing:"1px",fontSize:"14px", fontWeight:"300", }}>FIND OUT MORE</button>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                                <br/>  
                            </div>
                      </div>
                      <div class="row text-center">

                            <div class="col-md-6">
                                <div class="card1" style={{ backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"20px"}}>
                                    <div class="card-body">
                                        <p style={{ color:"#ffffff", fontSize:"20px", fontWeight:"500", letterSpacing:"1px"}}>
                                            Cloud Transformation
                                        </p>
                                        <p style={{ color:"#ffffff", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                            Drive your business forward by finding the right<br/>
                                            cloud-based collabration tools and devices so you<br/>
                                            can work more effeciently
                                        </p>
                                        <br/>
                                        <button className="btn btn" type="button" style={{ color: "#ffffff", backgroundColor: "#00CD89", letterSpacing:"1px",fontSize:"14px", fontWeight:"300", }}>FIND OUT MORE</button>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                                <br/>  
                            </div>

                            <div class="col-md-6">
                                <div class="card1" style={{ backgroundColor:"#f1f1f1", borderRadius:"5px", padding:"20px"}}>
                                    <div class="card-body">
                                        <p style={{ color:"#ffffff", fontSize:"20px", fontWeight:"500", letterSpacing:"1px"}}>
                                            Cloud infrastucture
                                        </p>
                                        <p style={{ color:"#ffffff", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                            Our cloud experts can help you design and<br/>
                                            implement an intelligent, scalable and secure<br/>
                                            infrastucture that is cost effective.
                                        </p>
                                        <br/>
                                        <button className="btn btn" type="button" style={{ color: "#ffffff", backgroundColor: "#00CD89", letterSpacing:"1px",fontSize:"14px", fontWeight:"300", }}>FIND OUT MORE</button>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                                <br/>  
                            </div>

                            
                      </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    

                    <div className="container text-center" style={{ maxWidth:"100%"}}>
                        <h5 style={{fontSize:"22px", letterSpacing:"1px", fontWeight:"bolder"}}>Our Partners</h5>
                        <br/>
                        <p style={{ fontSize:"14px", fontWeight:"300", letterSpacing:"1px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet ultricies
                        neque sit amet efficitur.<br/> Pellentesque tristique rutrum aliquam. Curabitur et auctor
                        nulla.</p>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className ="container text-center" style={{maxWidth:"80%"}}>
                      <div class="row">
                            <div class="col-md" style={{justifyContent:"center", display:"flex", paddingBottom:"20px"}}>
                                <button class="btn btn round">
                                    <img src="images/adidas.png" style={{ height:"80px", maxWidth:"80px"}} alt="..."></img>
                                </button>
                            <br/>  
                            </div>
                            <div class="col-md" style={{justifyContent:"center", display:"flex", paddingBottom:"20px"}}>
                                <button class="btn btn round">
                                    <img src="images/nike.png" style={{ height:"80px", maxWidth:"80px"}} alt="..."></img>
                                    <br/>
                                </button>
                            <br/>  
                            </div>
                            <div class="col-md" style={{justifyContent:"center", display:"flex", paddingBottom:"20px"}}>
                                <button class="btn btn round">
                                    <img src="images/puma.png" style={{ height:"80px", maxWidth:"80px"}} alt="..."></img>
                                    <br/>
                                </button>
                            <br/>  
                            </div>
                            <div class="col-md" style={{justifyContent:"center", display:"flex", paddingBottom:"20px"}}>
                                <button class="btn btn round">
                                    <img src="images/reebok.png" style={{ height:"80px", maxWidth:"80px"}} alt="..."></img>
                                    
                                </button><br/>
                                <br/>
                            <br/>  
                            </div>
                            <div class="col-md" style={{justifyContent:"center", display:"flex", paddingBottom:"20px"}}>
                                <button class="btn btn round">
                                    <img src="images/arrow.png" style={{ height:"80px", maxWidth:"80px"}} alt="..."></img>
                                    <br/>
                                </button>
                            <br/>  
                            </div>
                      </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="container text-center" style={{ maxWidth:"100%", paddingBottom:"50px"}}>
                        <h5 style={{fontSize:"22px", letterSpacing:"1px", fontWeight:"bolder"}}>What our customers says about us</h5>
                        <br/>
                        <p style={{ fontSize:"14px", fontWeight:"300", letterSpacing:"1px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet ultricies
                        neque sit amet efficitur.<br/> Pellentesque tristique rutrum aliquam. Curabitur et auctor
                        nulla.</p>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    

                    <div class="vanner">   
                        <div className="container caros1" style={{ maxWidth:"70%"}}>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">

                                <div class="card2 text-center">
                                            <div class="card-body">
                                            <img src="images/person1.jpeg" style={{ maxWidth:"80px", borderRadius:"50%"}} alt="..."></img>
                                                <br/>
                                                <br/>
                                                <p style={{ color:"#414141", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    Our cloud experts can help you design and<br/>
                                                    implement an intelligent, scalable and secure<br/>
                                                    infrastucture that is cost effective.
                                                </p>
                                                <p style={{ color:"#000000", fontSize:"14px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    Robert Smith
                                                </p>
                                            </div>
                                        </div>

                                </div>
                                <div class="carousel-item">

                                <div class="card2 text-center">
                                            <div class="card-body">
                                            <img src="images/person2.png" style={{ maxWidth:"80px", borderRadius:"50%"}} alt="..."></img>
                                                <br/>
                                                <br/>
                                                <p style={{ color:"#414141", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    Our cloud experts can help you design and<br/>
                                                    implement an intelligent, scalable and secure<br/>
                                                    infrastucture that is cost effective.
                                                </p>
                                                <p style={{ color:"#000000", fontSize:"14px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    Jonny werk
                                                </p>
                                            </div>
                                        </div>

                                </div>
                                <div class="carousel-item">

                                <div class="card2 text-center">
                                            <div class="card-body">
                                                <img src="images/person3.jpeg" style={{ maxWidth:"80px", borderRadius:"50%"}} alt="..."></img>
                                                <br/>
                                                <br/>
                                                <p style={{ color:"#414141", fontSize:"12px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    Our cloud experts can help you design and<br/>
                                                    implement an intelligent, scalable and secure<br/>
                                                    infrastucture that is cost effective.
                                                </p>
                                                <p style={{ color:"#000000", fontSize:"14px", fontWeight:"300", letterSpacing:"1px", lineHeight:"2"}}>
                                                    kenny
                                                </p>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>
                        </div>

                        <div className="container text-center" style={{ maxWidth:"100%"}}>
                            <h5 style={{fontSize:"22px", letterSpacing:"1px", fontWeight:"bolder", color:"#ffffff"}}>Ready to take the next step?</h5>
                            <br/>
                            <p style={{ fontSize:"14px", fontWeight:"300", letterSpacing:"1px", color:"#ffffff" }}>
                                Do it before your competition does. it's free for the first 14 days!
                            </p>
                            <br/>
                            <div class="container" style={{ alignItems:"center", display:"flex", justifyContent:"center"}}>
                                <form >
                                    <div class="form-row" style={{ display:"flex", justifyContent:"center"}}>
                                    <div class="col-auto">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>      
                                        <br/>
                                    </div>

                                    <div class="col-auto">
                                        <button type="submit" class="btn mb-2" value="submit" style={{ color: "#ffffff", backgroundColor: "#F05D5F", letterSpacing:"1px", width:"150px"}}>
                                        Send
                                        </button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="container" style={{ maxWidth:"100%"}}>
                            <Footer/>
                        </div>

                    </div> 
                
                </div>

                

            </div>
        )
    }
}

export default Home;