import React, { useState } from 'react';
import FormContact from '../components/pages/contact/FormContact';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Button } from 'primereact/button';

const ContactAddPage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className='mb-14 mt-[68px] md:mb-0'>
        <div className='px-3  md:px-3 lg:px-4 xl:px-6 py-4 w-full'>
          <FormContact onSubmit={setFormData} />
        </div>
      </div>
      <ButtomBottom>
        <Button
          onClick={handleSubmit}
          label='Simpan'
          icon='pi pi-save'
          size='large'
          className=' w-full p-3 bg-[#1cabe6] text-white'
        />
      </ButtomBottom>
    </>
  );
};

export default ContactAddPage;
