import React from 'react';

const ContactPage = () => {
  const contactInfo = {
    name: 'Rishabha Kumar Dwivedi',
    email: 'rishabhdwivedi.work@gmail.com',
    phone: '+916263121722',
    profession: '3rd year Student',
    branch: 'IT',
    college: 'Bangalore Institute of Technology',
  };

  return (
    <div className="mt-5 pt-2 pb-0 flex flex-col items-center justify-center h-screen">
  <h1 className="text-4xl font-bold mb-6">Contact Information</h1>
  <ul className="list-none p-0">
    <li className="mb-2">
      <strong>Name:</strong> {contactInfo.name}
    </li>
    <li className="mb-2">
      <strong>Email:</strong> {contactInfo.email}
    </li>
    <li className="mb-2">
      <strong>Phone No.:</strong> {contactInfo.phone}
    </li>
    <li className="mb-2">
      <strong>Profession:</strong> {contactInfo.profession}
    </li>
    <li className="mb-2">
      <strong>Branch:</strong> {contactInfo.branch}
    </li>
    <li className="mb-2">
      <strong>College Name:</strong> {contactInfo.college}
    </li>
  </ul>
</div>
  );
};

export default ContactPage;