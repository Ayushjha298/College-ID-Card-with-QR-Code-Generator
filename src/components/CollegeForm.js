import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CollegeForm.css';

const CollegeForm = () => {
  const [student, setStudent] = useState({
    name: '',
    id: '',
    department: '',
    phone: '',
    dob: '',
    address: '',
    aadhar: '',
    bloodGroup: '',
    guardianName: '',
    guardianPhone: '',
    photo: null,
    studentSignature: null,
    authoritySignature: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setStudent({ ...student, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleStudentSignatureChange = (e) => {
    setStudent({ ...student, studentSignature: URL.createObjectURL(e.target.files[0]) });
  };

  const handleAuthoritySignatureChange = (e) => {
    setStudent({ ...student, authoritySignature: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/id-card', { state: { student } });
  };

  return (
    <div className="college-form-container">
      <form onSubmit={handleSubmit} className="college-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="id">PRN:</label>
          <input type="text" id="id" name="id" value={student.id} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={student.department} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" value={student.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB:</label>
          <input type="date" id="dob" name="dob" value={student.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={student.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="aadhar">Aadhar Number:</label>
          <input type="text" id="aadhar" name="aadhar" value={student.aadhar} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select id="bloodGroup" name="bloodGroup" value={student.bloodGroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O-">O-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guardianName">Guardian's Name:</label>
          <input type="text" id="guardianName" name="guardianName" value={student.guardianName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="guardianPhone">Guardian's Phone:</label>
          <input type="text" id="guardianPhone" name="guardianPhone" value={student.guardianPhone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="studentSignature">Student Signature:</label>
          <input type="file" id="studentSignature" name="studentSignature" accept="image/*" onChange={handleStudentSignatureChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="authoritySignature">Authority Signature:</label>
          <input type="file" id="authoritySignature" name="authoritySignature" accept="image/*" onChange={handleAuthoritySignatureChange} required />
        </div>
        <button type="submit">Generate ID Card</button>
      </form>
    </div>
  );
};

export default CollegeForm;
