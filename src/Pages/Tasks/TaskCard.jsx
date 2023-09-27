/* eslint-disable react/prop-types */
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/tasksSlice';
import { Card } from '@material-tailwind/react';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedStatus;

  if (task?.status === 'pending') {
    updatedStatus = 'running';
  } else if (task.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
  }

  const changeStatus = () => {
    dispatch(updateStatus({ id: task.id, status: updatedStatus }));
  };

  return (
    <Card className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3 ${
          task.priority === 'high' ? 'text-red-500' : ' '
        } ${
          task.priority === 'medium' ? 'text-yellow-500' : ' '
        } ${
          task.priority === 'low' ? 'text-green-500' : ' '
        }`}
        style={{ fontFamily: 'cursive', fontSize: '25px' }}
      >
        {task?.title}
      </h1>
      <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="mb-3">{task?.description}</p>
      <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p style={{ fontFamily: 'cursive', fontSize: '15px' }}>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={changeStatus} title="Update Status">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
