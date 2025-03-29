import React from 'react';
import './URLTable.css';

const URLTable = ({ sampleLinks, selectedLinks, handleCheckboxChange, handleSelectAll, isAllSelected }) => (
  <div className="url-table">
    <table className="table-header">
      <colgroup>
        <col style={{ width: '5%' }} />
        <col style={{ width: '5%' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Index</th>
          <th>
            <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
          </th>
          <th>Links</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>

    <div className="table-body-wrapper">
      <table className="table-body">
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '5%' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <tbody>
          {sampleLinks.map((link) => (
            <tr key={link.id}>
              <td>{link.id}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedLinks.includes(link.id)}
                  onChange={() => handleCheckboxChange(link.id)}
                />
              </td>
              <td className="link-column">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
              </td>
              <td>
                <button onClick={() => window.open(link.url, '_blank')}>Go</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default URLTable;
