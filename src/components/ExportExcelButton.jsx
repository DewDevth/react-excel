// ExportExcelButton.jsx
import React from 'react';
import { exportExcel } from '../utils/excelUtils';

const ExportExcelButton = ({ data }) => {
  const handleExport = () => {
    exportExcel(data);
  };

  return (
    <button onClick={handleExport}>
      Export to Excel
    </button>
  );
};

export default ExportExcelButton;
