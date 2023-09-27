/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Card } from '@material-tailwind/react';

const TakeAppointment = ({details}) => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
      );
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const newTaskId = Date.now();
        const saveTask = {id: newTaskId, title: data.title, description: data.description, date: data.date, assignedTo: data?.assignedTo, priority: data?.priority,status: 'pending' }
        setTasks([...tasks, saveTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, saveTask]));


        reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task Submitted SuccessFully',
            showConfirmButton: false,
            timer: 1500
        })

        return saveTask;
    };
    return (
        <Card>
        <div className="flex  items-center mx-auto justify-center">
           <div>
             <h1 style={{ fontFamily: 'cursive', fontSize: '25px' }} className="font-semibold text-5xl my-6">Take an appointment</h1>
             
           </div>
           
         </div>
         <div className="flex gap-5 mx-auto">
             <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
               <MagnifyingGlassIcon className="h-6 w-6" />
             </button>
             <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
               <BellIcon className="h-6 w-6" />
             </button>
             
           </div>
         <div>
             <h1 style={{ fontFamily: 'cursive', fontSize: '20px' }} className="font-semibold text-3xl text-center">Take a appointment With: {details?.name} </h1>
             </div>
       <form className='card-body w-2/3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
           <div className="flex flex-col mb-5">
               <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                   Title
               </label>
               <input
                   className="input input-bordered rounded-2xl"
                   type="text"
                   id="title"
                   {...register('title')}
               />
           </div>
           <div className="flex flex-col mb-5">
               <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                   Description
               </label>
               <textarea
                   className="input input-bordered rounded-2xl"
                   type="text"
                   id="description"
                   {...register('description')}
               />
           </div>
           <div className="flex flex-col mb-5">
               <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                   Date
               </label>
               <input
                   className="input input-bordered rounded-2xl"
                   type="date"
                   id="date"
                   {...register('date')}
               />
           </div>
           <div className="flex flex-col mb-5">
               <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                   Assign to
               </label>
               <input
                   className="input input-bordered rounded-2xl"
                   id="assignedTo"
                   {...register('assignedTo')}
                   defaultValue={details.name}

              />

                  
                  
               
           </div>
           <div className="flex flex-col mb-5">
               <label htmlFor="title" className="mb-2">
                   Priority
               </label>
               <select
                   className="input input-bordered rounded-2xl"
                   id="priority"
                   {...register('priority')}
               >
                   <option defaultValue value="high">
                       High
                   </option>
                   <option value="medium">Medium</option>
                   <option value="low">Low</option>
               </select>
           </div>
           <div className="flex gap-3 justify-end">

               <button style={{ fontFamily: 'cursive', fontSize: '25px' }} type="submit" className="rounded-full border-b border-blue-400 hover:border-yellow-300 mx-auto">
                   submit
               </button>
           </div>
       </form>
   </Card>
    );
};

export default TakeAppointment;