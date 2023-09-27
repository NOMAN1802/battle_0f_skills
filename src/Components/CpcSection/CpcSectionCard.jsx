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

const CpcSectionCard = ({program}) => {
    return (
        <Fade>
            <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={program.image}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography style={{ fontFamily: 'cursive', fontSize: '25px'}} variant="h6" color="gray" className="mb-4 uppercase">
              CPC Program:

            </Typography>
            <Typography style={{ fontFamily: 'cursive', fontSize: '15px'}}  variant="h4" color="blue-gray" className="mb-2">
              <ol>
                <li>{program?.teamMemberNames[0]}</li>
                <li>{program?.teamMemberNames[1]}</li>
                <li>{program?.teamMemberNames[2]}</li>
                <li>{program?.teamMemberNames[3]}</li>
                <li>{program?.teamMemberNames[4]}</li>
              </ol>
            </Typography>
            <Typography style={{ fontFamily: 'cursive', fontSize: '15px'}} color="gray" className="mb-8 font-normal">
              {program?.Description}
            </Typography>
            <Link to="/cpc" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
        </Fade>
      );
};

export default CpcSectionCard;