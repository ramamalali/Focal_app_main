
const Card_Blogs = (props) => {
    return (
        <div style={{paddingBottom:"70px"}} className="col-lg-4 col-md-6 col-12 pt-2">
            <div id="#OS-card-blogs" className="card">
                <div className="card-body">
                    <img src={props.img} className="img-fluid w-100 py-1" alt="this is image" />
                    <p className="card-text py-1">
                        {props.paragraphe}
                   </p>
                    <div className="d-flex justify-content-end">
                       <img src={props.Vector} alt="this is image" />
                    </div>
                    <div className="mt-3 d-flex flex-wrap justify-content-between">
                        <div className="d-flex flex-wrap gap-3">
                            <div className="OS-circle">
                                <img className="img-fluid rounded-circle w-100" src={props.logo} alt="this is image" />
                            </div>
                            <span className="OS-span-Blogs d-flex align-items-center">{props.span_1}</span>
                        </div>
                        <span className="FA-span-Blogs d-flex align-items-center">{props.span_2}</span>
                    </div>
                    <div className="d-flex flex-wrap py-2 gap-1">              
                       <span className="FAROUN-span">#UI,</span>
                        <span className="FAROUN-span">#Ux</span>
                        <span className="FAROUN-span">,#Design</span>
                        <span className="FAROUN-span">#VR</span>
                        <span className="FAROUN-span">,#AI</span>
                        <span className="FAROUN-span">#Gaming </span>                     
                        <span className="FAROUN-span">,#Ui&Ux</span>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Blogs