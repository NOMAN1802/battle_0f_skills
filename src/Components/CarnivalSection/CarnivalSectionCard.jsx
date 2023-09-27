/* eslint-disable no-unused-vars */
import React from 'react';

const CarnivalSectionCard = ({program}) => {

    return (
        <div className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
          >
            <img
              className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
              src={program.image}
              alt=''
            />
            <div
              className='
              absolute
              top-3
              right-3
            '
            >
             
            </div>
          </div>
          <div style={{ fontFamily: 'cursive', fontSize: '25px'}}
          className='font-semibold text-center text-stone-400 text-lg'>{program.programName}
          </div>
          {/* <div style={{ fontFamily: 'cursive', fontSize: '25px'}}
           className='font-normal text-center text-stone-400 text-sm'>Venue: {program.programVenue}
           </div>
          <div style={{ fontFamily: 'cursive', fontSize: '15px'}}
          className='font-normal text-center text-stone-400 text-sm'>Description: {program.Description}
          </div> */}
          <div style={{ fontFamily: 'cursive', fontSize: '15px'}}
          className='font-normal text-center text-stone-400 text-sm'>date: {program.date}
          </div>
          
        </div>
        
      </div>
    );
};

export default CarnivalSectionCard;