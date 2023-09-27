/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaHome, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { SiGoogleclassroom } from 'react-icons/si';
import { AiOutlineTeam } from 'react-icons/ai';
import useAdmin from '../../hooks/useAdmin';
import useFaculty from '../../hooks/isFaculty';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isFaculty] = useFaculty();

    return (
       <div className='flex items-center '>
         <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          
          <List>
            <ListItem>
                
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              
              </ListItemPrefix>
              {isAdmin ? (
                             <div>
                             <NavLink className="my-2" to="adminPanel">Admin Panel</NavLink>
                                    
                             </div>
                            ) : isFaculty ? (
                                <div>
                                    <NavLink className="my-2" to="facultyPanel">Faculty Panel</NavLink>
                                    
                                </div>
                            ) : (
                                <div>
                                    <NavLink className="my-2" to="studentPanel">Student Panel </NavLink>
                                  
                                </div>
                            )}
            </ListItem>
            
            <ListItem>
              <ListItemPrefix>
                <FaHome className="h-5 w-5" />
                
              </ListItemPrefix>
              <NavLink className="my-2" to="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isAdmin ? (
                             <div>
                             <NavLink className="my-2" to="addEvent">Add an Event</NavLink>
                                    
                             </div>
                            ) : isFaculty ? (
                                <div>  
                                    <NavLink className="my-2" to="facultyPanel">Add Study Materials</NavLink>
                                    
                                </div>
                            ) : (
                                <div>
                                    <NavLink className="my-2" to="studentPanel">My Activities </NavLink>
                                  
                                </div>
                            )}
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isAdmin ? (
                             <div>
                             <NavLink className="my-2" to="allUsers">Manage Users</NavLink>
                                    
                             </div>
                            ) : isFaculty ? (
                                <div>  
                                    <NavLink className="my-2" to="facultyPanel">Add Study Materials</NavLink>
                                    
                                </div>
                            ) : (
                                <div>
                                    <NavLink className="my-2" to="studentPanel">My Activities </NavLink>
                                  
                                </div>
                            )}
            </ListItem>
           
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          
        </Card>
        <div className='flex justify-center flex-grow'>
            <Outlet></Outlet>
        </div>
       </div>
      );
};

export default Dashboard;
