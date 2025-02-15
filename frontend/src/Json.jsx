import React from 'react';
import * as XLSX from 'xlsx';

const ParseExcel = ({ onDataParsed }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      if (onDataParsed) {
        onDataParsed(jsonData);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <input
      type="file"
      accept=".xlsx,.xls"
      onChange={handleFileUpload}
      className="hidden"
      id="excel-upload"
    />
  );
};

export default ParseExcel; 