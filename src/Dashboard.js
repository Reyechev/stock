import React from 'react';
import './Dashboard.css'; // This will be our CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Quis Competition Ullisco Laboris Dolore</h1>
        <p>Hi Billy Kane! You Have:</p>
        <div className="token-info">
          <div className="token-count">
            <strong>160 Tokens</strong>
          </div>
          <button className="participate-btn">Participate in Competition</button>
        </div>
      </header>
      <div className="transaction-history">
        <h2>Transaction History</h2>
        <ul>
          <li>50 Tokens from John Doe - July 10</li>
          <li>110 Tokens from Jane Doe - July 12</li>
        </ul>
      </div>
      <footer className="dashboard-footer">
        <div className="links">
          <a href="/">Useful Links</a>
          <a href="/">Support</a>
          <a href="/">Social Links</a>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
