import React from 'react';
import CustomModal from '../common/model';

const Emiplan = ({isOpen,setIsOpen}:any) => {
  return (
    <div>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        triggerText="Open Modal"
      ></CustomModal>
    </div>
  );
};

export default Emiplan;