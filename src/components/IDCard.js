// src/components/IDCard.js
import React from 'react';
import QRCode from 'qrcode.react';
import './IDCard.css';

const IDCard = ({ student, onImageLoad }) => {
  const { name, id, department, phone, dob, address, aadhar, bloodGroup, guardianName, guardianPhone, photo, studentSignature, authoritySignature } = student;

  return (
    <div className="id-card">
      <div className="id-card-front">
        <div className="id-card-header">
          <img src="/BVP logo.png" alt="College Logo" className="logo" onLoad={onImageLoad} />
          <div>
            <h2>Bharati Vidyapeeth College of Engineering</h2>
            <h3>Student ID Card</h3>
          </div>
        </div>
        <div className="id-card-body">
          <div className="id-card-info">
            <p><strong>Name : </strong> {name}</p>
            <p><strong>PRN : </strong> {id}</p>
            <p><strong>Department : </strong> {department}</p>
            <p><strong>Phone : </strong> {phone}</p>
            <p><strong>DOB : </strong> {dob}</p>
            <p className='address'><strong>Address : </strong> {address}</p>
          </div>
          <div className="id-card-photo">
            {photo && <img src={photo} alt="Student" onLoad={onImageLoad} />}
          </div>
        </div>
        <div className="id-card-footer">
          <div>
            <p>Student's Signature</p>
            {studentSignature && <img src={studentSignature} alt="Student Signature" className="signature" onLoad={onImageLoad} />}
          </div>
          <div>
            <p>Authority's Signature</p>
            {authoritySignature && <img src={authoritySignature} alt="Authority Signature" className="signature" onLoad={onImageLoad} />}
          </div>
        </div>
      </div>
      <div className="id-card-back">
        <div className="id-card-header">
          <img src="/BVP logo.png" alt="College Logo" className="logo" onLoad={onImageLoad} />
          <div>
            <h2>Bharati Vidyapeeth College of Engineering</h2>
            <h3>Student ID Card</h3>
          </div>
        </div>
        <div className="id-card-back-info">
          <p><strong>Aadhar No. : </strong> {aadhar}</p>
          <p><strong>Blood Group : </strong> {bloodGroup}</p>
          <p><strong>Guardian's Name : </strong> {guardianName}</p>
          <p><strong>Guardian's Phone : </strong> {guardianPhone}</p>
        </div>
        <div className="id-card-back-qr">
          <QRCode value={JSON.stringify(student)} size={250} />
        </div>
      </div>
    </div>
  );
};

export default IDCard;
