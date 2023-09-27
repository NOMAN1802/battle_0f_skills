/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import CpcSectionCard from './CpcSectionCard';

const CpcSection = () => {
    const CpcMember = [
        {
        id: 1,
        teamMemberNames:["Md.Mustakim Al Noman", "Emtiaz ahmed", "Fahim Hasan","Md.Masud Rana", "Iftaker Rasha"],
        programVenue:"Academic Building 3",
        image:"https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        
    },
       
]
    const CpcProgram = [
        {
        id: 1,
        teamMemberNames:["Data Structure", "Algorithm", "Data Base","Web Development", "CCNA"],
        programVenue:"Academic Building 3",
        image:"https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        
    },
       
]
    return (
        <div>
             <SectionTitle
           subHeading={"Gear Up Your Skills"}
           heading={"Computer Programming Club"}
           >
           </SectionTitle>
           <Fade>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2  justify-between items-center gap-4'>
             {
                CpcMember.map(program => <CpcSectionCard key={program._id} program ={program}></CpcSectionCard>)
             }
             {
                CpcProgram.map(item => <CpcSectionCard key={item._id} program ={item}></CpcSectionCard>)
             }
           </div>
           {/* <button className='btn  border-b-2 border-blue-200'> Explore More </button> */}
        </Fade>
        
        </div>
    );
};

export default CpcSection;