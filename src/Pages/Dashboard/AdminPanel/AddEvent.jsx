/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from '../../../Components/Container/Container';
import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const AddEvent = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch("https://battle-of-skills-server.vercel.app/addEvent", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                if(data.insertedId){

                 reset()
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/carnival');

                } 
             })
              
             
        
        .catch(error => console.log(error));
     
    
 }
                
    return (
        <Container>
            <div>
                <p style={{ fontFamily: 'cursive', fontSize: '25px' }} className='text-center my-8'>Add a carnival Event</p>
                </div>
            <div className='w-full'>
            <form className='card-body w-full' onSubmit={handleSubmit(onSubmit)}>
           <div className="flex flex-col mb-5">
               <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                   Title
               </label>
               <input
                   className="input input-bordered rounded-2xl w-full"
                   type="text"
                   id="title"
                   {...register('title')}
               />
           </div>

           <div className="flex flex-col items-start">
              <label style={{ fontFamily: 'cursive', fontSize: '20px' }}  htmlFor="photo" className='mb-2'>Photo</label>
              <input
                type="text"
                id="photo"
                className="input input-bordered rounded-2xl w-full"
                {...register("photo", { required: true })}
                
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
                   Venue
               </label>
               <input
                   className="input input-bordered rounded-2xl"
                   type="text"
                   id="venue"
                   {...register('venue')}
               />
           </div>
      
  
           <div className="flex gap-3 justify-end">

               <button style={{ fontFamily: 'cursive', fontSize: '25px' }} type="submit" className="rounded-full border-b border-blue-400 hover:border-yellow-300 mx-auto">
                   submit
               </button>
           </div>
       </form>
            </div>
            
        </Container>
    );
};

export default AddEvent;