// App.jsx
import React, { useRef, useState } from 'react';
import ExportExcelButton from './components/ExportExcelButton';
import { importExcel } from './utils/excelUtils';
import ExcelDisplay from './components/ExcelDisplay';

const App = () => {
  const [importedData, setImportedData] = useState([]);
  const [isImporting, setIsImporting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    setIsImporting(true);
    const file = e.target.files[0];
    try {
      const data = await importExcel(file);
      setImportedData(data);
    } catch (error) {
      console.error('Error importing Excel file:', error);
    } finally {
      setIsImporting(false);
    }
  };

  const handleImportButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleExportButtonClick = () => {
    setIsExporting(true);
    // Your export logic here
    setTimeout(() => {
      setIsExporting(false);
    }, 2000); // Simulating an export process with a delay
  };


  return (
    <div>
      <ExportExcelButton data={importedData} onClick={handleExportButtonClick} loading={isExporting} />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleImportButtonClick} disabled={isImporting}>
        {isImporting ? 'Importing...' : 'Import Excel'}
      </button>


      {importedData.length > 0 && <ExcelDisplay data={importedData} />}

      
    </div>
  );
};

export default App;
