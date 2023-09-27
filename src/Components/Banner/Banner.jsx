/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <Carousel className="rounded-xl">
          <div className="relative h-full w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1680807869624-07b389d623e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'cursive', fontSize: '30px' }}
                >
                  Ict Carnival 2023
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                  style={{ fontFamily: 'cursive', fontSize: '20px' }}
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'cursive', fontSize: '30px' }}
                >
                  Computer Programming Club
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                  style={{ fontFamily: 'cursive', fontSize: '20px' }}
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'cursive', fontSize: '30px' }}
                >
                  Appointment with Faculty 
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                  style={{ fontFamily: 'cursive', fontSize: '20px' }}
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      );
};

export default Banner;