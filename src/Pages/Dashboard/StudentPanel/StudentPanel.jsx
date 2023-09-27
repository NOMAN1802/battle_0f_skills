/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentDetails from './AppointmentDetails';
import { Button, Card } from '@material-tailwind/react';
import TaskCard from '../../Tasks/TaskCard';
import Container from '../../../Components/Container/Container';


const StudentPanel = () => {
    const { tasks } = useSelector((state) => state.tasksSlice);
    const archiveTasks = tasks.filter((item) => item.status == 'archive');
  console.log(tasks);

    const [statusFilter, setStatusFilter] = useState('all');

  const filterTasks = () => {
    if (statusFilter === 'all') {
      return tasks; // Show all tasks
    } else {
      return tasks.filter((task) => task.status === statusFilter); // Filter tasks by status
    }
  };

  const filteredTasks = filterTasks();
  return (
    <Container>
        <div className="w-full">
    
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
          <Card className="overflow-x-auto h-full w-full rounded-xl">
              <table style={{ fontFamily: 'cursive', fontSize: '15px' }} className="w-full bg-blue-gray-100 rounded-xl">
                  {/* head */}
                  <thead className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                      <tr>
                         
                          <th>Title</th>
                          <th>priority</th>
                          <th>Date</th>
                          <th>Assign To</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>


                      {
                          filteredTasks.map(task => <AppointmentDetails
                              key={task.id}
                              task={task}
                              
                              
                          >
                            {task.title} - Status: {task.status}
                          </AppointmentDetails>)
                      }



                  </tbody>



              </table>
          </Card>
      </div>
  </div>
    </Container>
    
  );
};

export default StudentPanel;