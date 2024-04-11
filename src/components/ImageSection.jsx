import React, { useState, useEffect } from 'react';
import BackgroundImage from '../assets/back.png';

const ImageSection = () => {
  const [isBelow768, setIsBelow768] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelow768(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      
      {isBelow768 ? (
        <div>
                <img src={BackgroundImage} alt='background image' className='w-[100%] '/>
                <div className="bg-white w-full px-4 py-6" style={{ backgroundImage: 'linear-gradient(to left, #1CBDDD, #4DCA79)'}}>
                <p className="font-[700] text-[36px] text-white text-left" style={{ letterSpacing: '-0.02em', lineHeight: '1' }}>
                We crush your competitors, goals, and sales records - without the B.S.
                </p>
                <button style={{ backgroundColor: '#F28D35',marginTop: '8px'}} className="text-white py-2 px-4 rounded-lg hover:bg-purple-900 h-[38px] w-[214px]">Get free consultation</button>
            </div>
        </div>

      ) : (
        
        <div>
        <img src={BackgroundImage} alt='background image' className='w-full h-[700px]'/>
        <div className="absolute bg-white h-[306px] w-[630px]" style={{left: '80px', top: '354px', backgroundImage: 'linear-gradient(to left, #1CBDDD, #4DCA79)'}}>
            <div className="p-6">
            <p className="font-[700] text-[48px] text-white text-left" style={{ letterSpacing: '-0.02em', lineHeight: '1' }}>
                We crush your competitors, goals, and sales records - without the B.S.
            </p>
            <button style={{ backgroundColor: '#F28D35',marginTop: '8px'}} className="text-white py-2 px-4 rounded-lg hover:bg-purple-900 h-[38px] w-[214px]" >Get free consultation</button>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default ImageSection;
