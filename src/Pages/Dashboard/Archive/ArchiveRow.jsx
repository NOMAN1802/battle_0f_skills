/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react';
import React from 'react';

const ArchiveRow = ({task}) => {
    return (
        <tr>
            <td className='text-center'>
            <Typography
            style={{ fontFamily: 'cursive', fontSize: '15px' }}
             variant="small"
             color="blue-gray"
             className="font-normal"
            >
               {task?.title}
            </Typography>
            </td>
           <td className='text-center'>
           <Typography
           style={{ fontFamily: 'cursive', fontSize: '15px' }}
             variant="small"
             color="blue-gray"
             className="font-normal"
            >
                 {task?.priority
}
            </Typography>
           </td>
           <td className='text-center'>
           <Typography
           style={{ fontFamily: 'cursive', fontSize: '15px' }}
             variant="small"
             color="blue-gray"
             className="font-normal"
            >
                {task?.date}
            </Typography>
           </td>
            <td className='text-center'>
            <Typography
            style={{ fontFamily: 'cursive', fontSize: '15px' }}
             variant="small"
             color="blue-gray"
             className="font-normal"
            >{task?.assignedTo}</Typography>
            </td>
            <td className='text-center'>
            <Typography
            style={{ fontFamily: 'cursive', fontSize: '15px' }}
             variant="small"
             color="blue-gray"
             className="font-normal"
            >{task?.status}</Typography>
            </td>
            
        </tr>
    );
};

export default ArchiveRow;