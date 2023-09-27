import React from 'react';
import { Typography } from '@material-tailwind/react';

const AppointmentDetails = ({task}) => {
    return (
        <tr>
            <td className='text-center'>
            <Typography
            
             variant="small"
             color="blue-gray"
             style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'
            >
               {task?.title}
            </Typography>
            </td>
           <td className='text-center'>
           <Typography
           
             variant="small"
             color="blue-gray"
             style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'
            >
                 {task?.priority
}
            </Typography>
           </td>
           <td className='text-center'>
           <Typography
           
             variant="small"
             color="blue-gray"
             style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'
            >
                {task?.date}
            </Typography>
           </td>
            <td className='text-center'>
            <Typography
            
             variant="small"
             color="blue-gray"
             style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'
            >{task?.assignedTo}</Typography>
            </td>
            <td className='text-center'>
            <Typography
           
             variant="small"
             color="blue-gray"
             style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center mr-2'
            >{task?.status}</Typography>
            </td>
            
        </tr>
    );
};

export default AppointmentDetails;