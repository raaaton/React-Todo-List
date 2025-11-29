import TodoItem from "./TodoItem";
import "./TasksList.css"

export default function TaskList(props) {
    return (
        <section className="todoItemsList">
            { [...props.todoItems].reverse().filter((item => !item.checked)).length ? <p className="subTitleTodo">Pending tasks:</p> : null }
            {[...props.todoItems].reverse().filter((item => !item.checked)).map(item =>
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    handleCheck={props.handleCheck}
                    checked={item.checked}
                    deleteTodoItem={props.deleteTodoItem}
                />
            )}
            { [...props.todoItems].reverse().filter((item => item.checked)).length ? <p className="subTitleTodo">Done tasks:</p> : null }
            { [...props.todoItems].reverse().filter((item => item.checked)).map(item =>
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    handleCheck={props.handleCheck}
                    checked={item.checked}
                    deleteTodoItem={props.deleteTodoItem}
                />
            )}
        {!props.todoItems.length ? <p className="noTaskP" style={{textAlign: "center"}}>You don't have any task yet...</p> : null}
        </section>
    )
}