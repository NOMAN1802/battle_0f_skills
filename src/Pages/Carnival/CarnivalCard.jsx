/* eslint-disable no-unused-vars */
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const CarnivalCard = ({program}) => {
    return (
        <Fade>
            <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={program.photo}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography style={{ fontFamily: 'cursive', fontSize: '25px'}} variant="h6" color="gray" className="mb-4 uppercase">
              Carnival Program:

            </Typography>
            <Typography style={{ fontFamily: 'cursive', fontSize: '15px'}}  variant="h4" color="blue-gray" className="mb-2">
              {program.title}
            </Typography>
            <Typography style={{ fontFamily: 'cursive', fontSize: '15px'}} color="gray" className="mb-8 font-normal">
              {program?.description}
            </Typography>
            <Typography style={{ fontFamily: 'cursive', fontSize: '15px'}} color="gray" className="mb-8 font-normal">
              {program?.date}
            </Typography>
            
          </CardBody>
        </Card>
        </Fade>
      );
};

export default CarnivalCard;