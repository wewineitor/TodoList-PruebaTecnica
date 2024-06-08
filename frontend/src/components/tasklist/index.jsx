import Task from '../task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks }) => {
    return (
        <div className={styles.taskList}>
            {tasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
};

export default TaskList;