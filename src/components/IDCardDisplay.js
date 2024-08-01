
// src/components/IDCardDisplay.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IDCard from './IDCard';
import './IDCardDisplay.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const IDCardDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state || {};

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById('id-card');
    html2canvas(input, { useCORS: true, backgroundColor: null }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${student.name}-IDCard.pdf`);
    });
  };

  if (!student) {
    return null;
  }

  return (
    <div className="id-card-display">
      <div id="id-card">
        <IDCard student={student} onImageLoad={handleImageLoad} />
      </div>
      <button onClick={handleDownloadPDF} className="download-button" disabled={!isLoaded}>
        Download PDF
      </button>
    </div>
  );
};

export default IDCardDisplay;

