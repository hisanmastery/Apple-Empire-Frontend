import React from 'react';
import CustomModal from '../common/model';

const Emiplan = ({isOpen,setIsOpen}:any) => {
  return (
    <div>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="EMIPLAN"
      >
        <div className='grid grid-cols-12'>
          <div className='col-span-3'>
            <h1>left side</h1>
          </div>
          <div className='col-span-9'>
             <h1>right side</h1>
          </div>
      </div>

      </CustomModal>
    </div>
  );
};

export default Emiplan;