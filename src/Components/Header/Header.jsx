/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/providers/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useFaculty from '../../hooks/isFaculty';
import useStudent from '../../hooks/isStudent';


const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isFaculty] = useFaculty();
  const [isStudent] = useStudent();
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ fontFamily: 'cursive', fontSize: '15px' }}
      >
        
        <NavLink to="/" 
        className={({ isActive }) =>
        isActive
          ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
          : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
      }
        
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ fontFamily: 'cursive', fontSize: '15px' }}
      >
        <NavLink to ="carnival"     
        className={({ isActive }) =>
        isActive
          ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
          : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
      }
      >
          ICT Carnival
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ fontFamily: 'cursive', fontSize: '15px' }}
      >
        <NavLink to="cpc"   
       className={({ isActive }) =>
       isActive
         ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
         : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
     }
      >
          CPC
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ fontFamily: 'cursive', fontSize: '15px' }}
      >
        <NavLink to="appointment"   
      className={({ isActive }) =>
        isActive
          ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
          : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
      }
      >
          Appointment
        </NavLink>
      </Typography>
{user &&
          
       
          isAdmin ?
  
          (<li style={{ fontFamily: 'cursive', fontSize: '15px' }}><NavLink
            className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
              : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
          }
             to="/dashboard/adminPanel">Dashboard</NavLink></li>) :
  
          isFaculty ? (
            <li style={{ fontFamily: 'cursive', fontSize: '15px' }}><NavLink
            className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
              : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
          }
            to="/dashboard/FacultyPanel">Dashboard</NavLink></li>
          ) :
             ''
        
      }
  
  {
    user && 
     isStudent ? (
      <li style={{ fontFamily: 'cursive', fontSize: '15px' }}><NavLink
      className={({ isActive }) =>
      isActive
        ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
        : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
    }
      to="/dashboard/studentPanel">Dashboard</NavLink></li>
    ) : ''
  }

  {
    user ? <>
      <span style={{ fontFamily: 'cursive', fontSize: '10px' }} className='m-auto mt-2'>{user?.displayName}</span>
      <div className="avatar online w-12 mx-2 m-auto">
        <div className="w-24 rounded-full">
          <img className='relative inline-block h-12 w-12 rounded-full object-cover object-center'
          src={user.photoURL} />
        </div>
      </div>
      <li  style={{ fontFamily: 'cursive', fontSize: '15px' }} onClick={handleLogOut} className="btn btn-ghost m-auto  hover:border-b-2  border-blue-200 rounded-2xl">LogOut</li>
    </> : <>
      <li style={{ fontFamily: 'cursive', fontSize: '15px' }}><NavLink
      className={({ isActive }) =>
      isActive
        ? 'p-2 rounded-2xl bg-primary text-yellow-200 cursor-pointer border-b-2 border-blue-200'
        : 'p-2 rounded-2xl group hover:border-b-2  border-blue-200 text-secondary/40 cursor-pointer transition-all'
    }
      to="/login">Login</NavLink></li>
    </>
  }

    </ul>
  );

 
 
    return (
      
         <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className='flex'>
        <img  className='relative inline-block h-12 w-12 rounded-full object-cover object-center' src="https://img.freepik.com/premium-vector/new-capable-person-skills-icon-with-add-sign-skills-icon-new-plus-positive-symbol-icon-skill-new-add-employee-increase-motivation-talent-ability-addition-business_775815-964.jpg?size=626&ext=jpg&ga=GA1.2.1868421854.1694625118&semt=ais" alt="" />
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium "
          style={{ fontFamily: 'cursive', fontSize: '15px'}}
        >
          
          Battle of <br /> Skills
        </Typography> 
      
        </div>
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;


