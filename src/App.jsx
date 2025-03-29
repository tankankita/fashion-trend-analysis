import React, { useState } from 'react';

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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold'
      }}>
        Trend Analysis
      </h1>
      <div style={{ marginBottom: '2rem', display: 'flex', width: '100%' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            padding: '0.75rem',
            fontSize: '1rem',
            marginRight: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>


      <div>
        {/* Table Header */}
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ width: '100%', tableLayout: 'fixed' }}
        >
          <colgroup>
            <col style={{ width: '5%' }} />     {/* Checkbox column */}
            <col style={{ width: '5%' }} />     {/* Checkbox column */}
            <col style={{ width: 'auto' }} />   {/* Link column - flexible */}
            <col style={{ width: '10%' }} />    {/* Go button column */}
          </colgroup>
          <thead>
            <tr>
              <th>Index </th>
              <th>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
                <span style={{ marginLeft: '0.5rem' }}>Select All</span>
              </th>
              <th>Links</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable Table Body */}
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ width: '100%', tableLayout: 'fixed' }}
          >
            <colgroup>
              <col style={{ width: '5%' }} />
              <col style={{ width: '5%' }} />
              <col style={{ width: 'auto' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              {sampleLinks.map((link) => (
                <tr key={link.id}>
                  <td> {link.id}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedLinks.includes(link.id)}
                      onChange={() => handleCheckboxChange(link.id)}
                    />
                  </td>
                  <td style={{ overflowWrap: 'break-word' }}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.url}
                    </a>
                  </td>
                  <td>
                    <button onClick={() => window.open(link.url, '_blank')}>Go</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button style={{ marginTop: '1rem' }} onClick={handlePrintSelected}>
          Print Selected
        </button>
        <button style={{ marginTop: '1rem', marginLeft: '3rem' }} onClick={handlePrintSelected}>
          Get Comments 
        </button>
      </div>

      {printedLinks.length > 0 && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f8f8', border: '1px solid #ddd' }}>
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
