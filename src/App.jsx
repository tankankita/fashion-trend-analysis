import React, { useState } from 'react';
import './App.css';
import URLTable from './components/URLTable';
import ActionButton from './components/ActionButton';

const sampleLinks = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  url: `https://example.com/page-${i + 1}`
}));

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLinks, setSelectedLinks] = useState([]);
  const [printedLinks, setPrintedLinks] = useState([]);

  const handleSearch = () => {
    console.log('Search for:', searchQuery);
  };

  const handleCheckboxChange = (id) => {
    setSelectedLinks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePrintSelected = () => {
    const selectedUrls = sampleLinks
      .filter((link) => selectedLinks.includes(link.id))
      .map((link) => link.url);
    setPrintedLinks(selectedUrls);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLinks(sampleLinks.map((link) => link.id));
    } else {
      setSelectedLinks([]);
    }
  };

  const isAllSelected = selectedLinks.length === sampleLinks.length;

  return (
    <div className="container">
      <h1 className="title">Fashion Trend Analysis</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Hashtags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <URLTable
        sampleLinks={sampleLinks}
        selectedLinks={selectedLinks}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
      />

      <div className="action-buttons">
        <ActionButton label="Print Selected" onClick={handlePrintSelected} />
        <ActionButton label="Get Comments" onClick={handlePrintSelected} />
      </div>

      {printedLinks.length > 0 && (
        <div className="results">
          <h3>Selected Links:</h3>
          <ul>
            {printedLinks.map((url, idx) => (
              <li key={idx}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
