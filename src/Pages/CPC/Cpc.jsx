/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import YouTubeVideo from './YouTubeVideo';
import Container from '../../Components/Container/Container';
import { Fade } from 'react-reveal';

const Cpc = () => {
  

    const videoUrls = [
        'https://www.youtube.com/watch?v=rePN-VFo1Eo',
        'https://www.youtube.com/watch?v=2C5834qx0sA&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=2',
        'https://www.youtube.com/watch?v=ii8GaRjRoNI&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=3',
        'https://www.youtube.com/watch?v=DOC3MyuuWhM&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=4',
        // Add more video URLs as needed
      ];
    return (
        <Container>
            <SectionTitle
           subHeading={"Learn Smartly"}
           heading={"Study Materials"}
           >
           </SectionTitle>
           <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className='text-center my-8'>Learn React</h1>
          <Fade>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-8'>

{videoUrls.map((url, index) => (
<YouTubeVideo key={index} videoUrl={url} />
))}
</div>
          </Fade>
        </Container>
    );
};

export default Cpc;