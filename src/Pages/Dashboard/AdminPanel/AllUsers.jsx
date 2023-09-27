/* eslint-disable no-unused-vars */
import { Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [],  refetch} = useQuery(['users'], async ()=>{
        const res = await fetch('https://battle-of-skills-server.vercel.app/users')
        return res.json()
    })
    console.log(users.role);

    const handleMakeAdmin = user =>{
        fetch(`https://battle-of-skills-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeFaculty = user =>{
        fetch(`https://battle-of-skills-server.vercel.app/users/faculty/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Faculty Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='w-2/3'>
        <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className='text-center text-3xl text-stone-500 my-8 font-semibold'>All Users: {users.length}</h1>
      
        <div className="overflow-x-auto h-full w-full rounded-xl">
            <table style={{ fontFamily: 'cursive', fontSize: '15px' }} className="w-full bg-blue-gray-100 rounded-xl">
                {/* head */}
                <thead className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                    <tr  style={{ fontFamily: 'cursive', fontSize: '15px' }}>
                        <th>
                            #
                        </th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Make Faculty</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <tr
                            key={user._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img className='relative inline-block h-12 w-12 rounded-full object-cover object-center' src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td  style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'>
                                {user.name}
                            </td>
                            <td style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'>{user.email}</td>
                            <td style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'>
                                {user.role}
                            </td>
                            
                            <td style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'>{ user.role === 'admin' ? 'admin' :
                                    <Button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-black opacity-30  text-white mr-2"><FaUserShield></FaUserShield></Button> 
                                    }</td>

                            <td style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'>
                                {user.role === 'faculty' ? 'faculty' :
                                    <Button onClick={()=> handleMakeFaculty(user)}  className="btn btn-ghost bg-black opacity-30 rounded-2xl text-white mr-2"><FaUser></FaUser></Button>
                                }
                            </td>
                        </tr>)
                    }


                </tbody>
                {/* foot */}


            </table>
        </div>
    </div>
    );
};

export default AllUsers;