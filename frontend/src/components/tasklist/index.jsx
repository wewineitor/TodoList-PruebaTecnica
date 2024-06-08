import Task from '../task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, getTasks }) => {
    return (
        <div className={styles.taskList}>
            {tasks.map((task) => (
                <Task key={task.id} {...task} getTasks={getTasks}/>
            ))}
        </div>
    );
};

export default TaskList;