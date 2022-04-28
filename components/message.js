import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Message = ({msg}) => {
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch({
            type: "DISPLAY_MESSAGE",
            payload: ""
        })
    }, 4000)

    return (
        <div className="message">
            <Toast>
                <Toast.Header>
                    <strong className="me-auto">Success!</strong>
                </Toast.Header>
                <Toast.Body>{msg}</Toast.Body>
            </Toast>
        </div>
    )
}

export default Message;