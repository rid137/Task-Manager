// import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({tasks, deleteTask, onToggle}) => {

  return (
    <>
      <h3 style={headingStyle}>My Tasks</h3>
        {tasks.map((task) => 
        <Task key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle} /> )}
    </>
  );
}

const headingStyle = {
  marginLeft: '10px'
}

// Tasks.propTypes = {
//     tasks: PropTypes.string,
//     deleteTask: PropTypes.func
// }

export default Tasks;
