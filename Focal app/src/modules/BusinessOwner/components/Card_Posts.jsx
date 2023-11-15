import Button_general from "./Button_general"
const Card_Posts = (props) => {
  return (

    <div style={{paddingBottom:"70px"}} className="col-lg-4 col-md-6  col-12 pt-2">
      {
        props.img_1 ?
          <>
            <div id="OS-card-Posts" className="card">
              <div className="card-body">
                <h2 className="OS-Card-blogs-title">{props.title}</h2>
                <div className="d-flex flex-wrap justify-content-between">
                  <div>
                    <img src={props.img_1} alt="this ic icon" />
                    <span className="OS-span_1-posts px-1">{props.span_1}</span>
                  </div>
                  <span className="OS-span_3-posts align-items-center">{props.span_3}</span>
                </div>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <h2 className="OS-counter_1-posts">{props.counter_1}</h2>
                    <p className="OS-paragraphe-posts-counter">{props.paragraphe_1}</p>
                  </div>
                  <div className="OS-Line-posts"></div>
                  <div>
                    <h2 className="OS-counter_2-posts">{props.counter_1}</h2>
                    <p className="OS-paragraphe-posts-counter">{props.paragraphe_2}</p>
                  </div>
                </div>
                <Button_general class="OS-button_1-posts" content="View candidates" />
                <Button_general class="OS-button_2-posts" content="View candidates" />
                <p className="OS-paragraphe-posts">{props.paragraphe_3}</p>
              </div>
            </div>
          </>
         
         :
          
          <>
            <div style={{minHeight:"394px",
                   maxHeight:"max-content"}} id="OS-card-Posts" className="card">
              <div className="card-body">
                <h2 className="OS-Card-blogs-title">{props.title}</h2>
                <div className="d-flex flex-wrap justify-content-between">
                  <div>
                    <img src={props.img_2} alt="this ic icon" />
                    <span className="OS-span_2-posts px-1">{props.span_1}</span>
                  </div>
                  <span className="OS-span_3-posts align-items-center">{props.span_3}</span>
                </div>
                <h3 className="OS-posts-decription py-3  mb-5">
                 {props.description}
                </h3>
                <Button_general class="OS-button_1-posts" content="Employee evaluation" />
                <Button_general class="OS-button_2-posts" content="Add Complaint" />
              </div>
            </div>
          </>

      }

    </div>


  )
}

export default Card_Posts

