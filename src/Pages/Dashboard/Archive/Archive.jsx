import { useSelector } from 'react-redux';
import TaskCard from '../../Tasks/TaskCard';
import ArchiveRow from './ArchiveRow';
import { useState } from 'react';
import { Button, Card } from '@material-tailwind/react';

const Archive = () => {
  const { tasks } = useSelector((state) => state.tasksSlice);

  const archiveTasks = tasks.filter((item) => item.status == 'archive');
  console.log(tasks);

  const [statusFilter, setStatusFilter] = useState('all');

  const filterTasks = () => {
    if (statusFilter === 'all') {
      return tasks; 
    } else {
      return tasks.filter((task) => task.status === statusFilter); // Filter tasks by status
    }
  };

  const filteredTasks = filterTasks();

  return (
    <div className="p-10">
      <div>
        <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className="text-4xl font-semibold mb-10 text-center">Appointment Summery</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className="text-4xl font-semibold my-10 text-center">All Appointments</h1>
      <div>
            <h2 style={{ fontFamily: 'cursive', fontSize: '30px' }} className="text-5xl mx-auto my-10">Total Appointments:{tasks.length} </h2>
            <div>
      <div className='my-4'>
        <Button variant="outlined" className='mr-2'  onClick={() => setStatusFilter('all')}>All</Button>
        <Button variant="outlined" className='mr-2'   onClick={() => setStatusFilter('pending')}>Pending</Button>
        <Button variant="outlined" className='mr-2'   onClick={() => setStatusFilter('running')}>In Process</Button>
        <Button variant="outlined" className='mr-2'   onClick={() => setStatusFilter('done')}>Done</Button>
      </div>
      
    </div>
            <Card className="h-full w-full overflow-x-auto">
                <table className="bg-blue-gray-100 w-full">
                    {/* head */}
                    <thead className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                        <tr  style={{ fontFamily: 'cursive', fontSize: '15px' }}>
                           
                            <th>Title</th>
                            <th>priority</th>
                            <th>Date</th>
                            <th>Assign To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            filteredTasks.map(task => <ArchiveRow
                                key={task.id}
                                task={task}
                                
                                
                            >
                              {task.title} - Status: {task.status}
                            </ArchiveRow>)
                        }



                    </tbody>



                </table>
            </Card>
        </div>
    </div>
    
  );
};

export default Archive;