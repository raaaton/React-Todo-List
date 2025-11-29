import "./TodoItem.css"
import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem(props) {
    return (
        <div className="todoItem">
            <div className="todoMain">
                <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.handleCheck(props.id)}
                />
                <p style={{textDecoration: props.checked ? "line-through" : "unset"}}>{props.text}</p>
            </div>
            <div className="actions">
                <button className="delete" onClick={() => props.deleteTodoItem(props.id)}><FaTrashAlt /></button>
            </div>
        </div>
    )
}