import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const AddTaskForm = ({submitTask}) => {  
    const [text, settext] = useState('')     
    const [day, setday] = useState('')      
    const [reminder, setreminder] = useState(false) 
    
    const onsubmit = (e) => {
        e.preventDefault()

        if(!text || !day) {
            alert('All inputs must be filled')
            return
        }

        submitTask({text, day, reminder})

        settext('')
        setday('')
        setreminder(false)
    }
    
  return (
    <form className='add-form' onSubmit={onsubmit}>
        <div className='form-control'>
            <label htmlFor="">Task</label>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => settext(e.target.value)} 
                placeholder='Add Task'
            />
        </div>
        <div className='form-control'>
            <label htmlFor="">Day & Time</label>
            <input 
                type='datetime-local'
                value={day} 
                onChange={(e) => setday(e.target.value)} 
                placeholder='Add Day & Time' 
            />
        </div>
        <div className='form-control form-control-check' >
            <label htmlFor="">Set Reminder</label>
            <input 
                type="checkbox" 
                value={reminder} 
                checked={reminder}
                onChange={(e) => setreminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  );
}

// AddTaskForm.propTypes = {
//     submitTask: PropTypes.func
// }

export default AddTaskForm;