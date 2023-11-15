import Button_general from "./Button_general"
const Section_Head = (props) => {
    return (
        <div className="OS-Post-head">
            <h2 className="OS-Post-title">{props.title}</h2>
            <p className="OS-Post-paragraphe w-75">
              {props.paragraphe}
            </p>
            <Button_general content={props.content} class="OS-button-post mt-3"/>
        </div>
    )
}

export default Section_Head