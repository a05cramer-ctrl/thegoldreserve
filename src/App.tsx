import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Gold Reserve" className="logo-img" />
            <span className="logo-name">Gold Reserve</span>
            <span className="logo-ticker">$AURM</span>
          </div>
          <nav className="nav">
            <a href="#vault">Vault</a>
            <a href="#metrics">Reserve Metrics</a>
            <a href="#holdings">Holdings</a>
            <a href="#inventory">Inventory</a>
            <a href="#audit">Audit</a>
            <a href="#reports">Reports</a>
            <a href="#policy">Monetary Policy</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container">
            <img src="/logo.png" alt="Gold Reserve" className="hero-logo" />
            <p className="section-label">Institutional Reserve-Backed Asset</p>
            <h1 className="hero-title">Gold Reserve</h1>
            <p className="hero-ticker">$AURM</p>
            <p className="hero-desc">
              A fully collateralized digital asset backed by allocated physical gold reserves. 
              Governed under transparent monetary policy with third-party attestation.
            </p>
            <a href="#allocation" className="btn-primary hero-cta">View Reserve Allocation</a>
            <div className="hero-links">
              <a href="https://x.com/GoldReserve_Dev" target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter
              </a>
              <a href="#" className="hero-social" aria-label="Chart">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 3v18h18v-2H5V3H3zm16 4h-2v9h2V7zM13 5v14h2V5h-2zm-4 4v10h2V9H9z"/></svg>
                Chart
              </a>
            </div>
          </div>
        </section>

        <section id="vault" className="section vault-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Secure Storage Facility</p>
              <h2 className="section-title">Vault Overview</h2>
            </div>
            <div className="vault-visual">
              <img src="/vault-overview.png" alt="Gold Reserve vault — allocated physical gold storage" className="vault-img" />
              <div className="vault-stats-overlay">
                <div className="vault-stat">
                  <span className="vault-stat-value">4,892</span>
                  <span className="vault-stat-label">Bars in custody</span>
                </div>
                <div className="vault-stat">
                  <span className="vault-stat-value">999.9</span>
                  <span className="vault-stat-label">Fineness (‰)</span>
                </div>
                <div className="vault-stat">
                  <span className="vault-stat-value">24/7</span>
                  <span className="vault-stat-label">Surveillance</span>
                </div>
                <div className="vault-stat">
                  <span className="vault-stat-value">Class III</span>
                  <span className="vault-stat-label">Vault rating</span>
                </div>
              </div>
            </div>
            <div className="vault-specs">
              <div className="vault-spec card-institutional">
                <span className="vault-spec-label">Custodian</span>
                <span className="vault-spec-value">Brinks Global Services</span>
              </div>
              <div className="vault-spec card-institutional">
                <span className="vault-spec-label">Location</span>
                <span className="vault-spec-value">Zurich, Switzerland</span>
              </div>
              <div className="vault-spec card-institutional">
                <span className="vault-spec-label">Insurance</span>
                <span className="vault-spec-value">Lloyd's of London — $150M</span>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="section metrics-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Quarterly Snapshot</p>
              <h2 className="section-title">Reserve Metrics</h2>
            </div>
            <div className="metrics-grid">
              <div className="metric-card card-institutional">
                <span className="metric-label">Total Reserve Value</span>
                <span className="metric-value">$127.4M</span>
                <span className="metric-meta">USD equivalent</span>
              </div>
              <div className="metric-card card-institutional">
                <span className="metric-label">Physical Gold</span>
                <span className="metric-value">152.2</span>
                <span className="metric-meta">kilograms (4,892 oz)</span>
              </div>
              <div className="metric-card card-institutional">
                <span className="metric-label">Bar Count</span>
                <span className="metric-value">4,892</span>
                <span className="metric-meta">1 oz allocated bars</span>
              </div>
              <div className="metric-card card-institutional">
                <span className="metric-label">Collateralization</span>
                <span className="metric-value">102.3%</span>
                <span className="metric-meta">over-collateralized</span>
              </div>
              <div className="metric-card card-institutional">
                <span className="metric-label">$AURM Circulating</span>
                <span className="metric-value">124.6M</span>
                <span className="metric-meta">tokens outstanding</span>
              </div>
              <div className="metric-card card-institutional">
                <span className="metric-label">Last Attestation</span>
                <span className="metric-value">31 Dec 2024</span>
                <span className="metric-meta">independent audit</span>
              </div>
            </div>
          </div>
        </section>

        <section id="holdings" className="section holdings-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Asset Composition</p>
              <h2 className="section-title">Holdings</h2>
            </div>
            <table className="table-institutional">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Allocation</th>
                  <th>Quantity</th>
                  <th>Value (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Physical Gold (allocated)</td>
                  <td className="value-highlight">94.2%</td>
                  <td>4,892 bars / 152.2 kg</td>
                  <td>$120.1M</td>
                </tr>
                <tr>
                  <td>Liquid Reserves</td>
                  <td>4.1%</td>
                  <td>—</td>
                  <td>$5.2M</td>
                </tr>
                <tr>
                  <td>Operational Reserve</td>
                  <td>1.7%</td>
                  <td>—</td>
                  <td>$2.1M</td>
                </tr>
              </tbody>
            </table>
            <div className="holdings-cta">
              <a href="#allocation" className="btn-outline">View Reserve Allocation</a>
            </div>
          </div>
        </section>

        <section id="inventory" className="section inventory-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Allocated Storage — Corridor A</p>
              <h2 className="section-title">Physical Inventory</h2>
            </div>
            <div className="inventory-layout">
              <div className="inventory-image-wrap">
                <img src="/vault-corridor.png" alt="Gold Reserve allocated storage corridor" className="inventory-img" />
                <div className="inventory-image-caption">
                  Allocated gold bars, 999.9 fineness. Serial-tracked, third-party verified.
                </div>
              </div>
              <div className="inventory-details">
                <table className="table-institutional">
                  <thead>
                    <tr>
                      <th>Serial Range</th>
                      <th>Purity</th>
                      <th>Weight</th>
                      <th>Bars</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1234001 – A1234500</td>
                      <td className="value-highlight">999.9</td>
                      <td>1 oz</td>
                      <td>500</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>A1234501 – A1235000</td>
                      <td className="value-highlight">999.9</td>
                      <td>1 oz</td>
                      <td>500</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>B2341001 – B2342000</td>
                      <td className="value-highlight">999.9</td>
                      <td>1 oz</td>
                      <td>1,000</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>C3456001 – C3457000</td>
                      <td className="value-highlight">999.9</td>
                      <td>1 oz</td>
                      <td>1,000</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>— Additional lots</td>
                      <td>999.9</td>
                      <td>1 oz</td>
                      <td>1,892</td>
                      <td>Verified</td>
                    </tr>
                  </tbody>
                </table>
                <div className="inventory-summary">
                  <div className="inventory-summary-row">
                    <span>Total bars</span>
                    <span className="value-highlight">4,892</span>
                  </div>
                  <div className="inventory-summary-row">
                    <span>Total weight</span>
                    <span className="value-highlight">152.2 kg</span>
                  </div>
                  <div className="inventory-summary-row">
                    <span>Last reconciliation</span>
                    <span>31 Dec 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="audit" className="section audit-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Third-Party Verification</p>
              <h2 className="section-title">Audit Summary</h2>
            </div>
            <table className="table-institutional">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Auditor</th>
                  <th>Scope</th>
                  <th>Opinion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Q4 2024</td>
                  <td>Reserve Attestation Partners</td>
                  <td>Physical inventory & reconciliation</td>
                  <td className="value-highlight">Unqualified</td>
                </tr>
                <tr>
                  <td>Q3 2024</td>
                  <td>Reserve Attestation Partners</td>
                  <td>Physical inventory & reconciliation</td>
                  <td className="value-highlight">Unqualified</td>
                </tr>
                <tr>
                  <td>Q2 2024</td>
                  <td>Reserve Attestation Partners</td>
                  <td>Physical inventory & reconciliation</td>
                  <td className="value-highlight">Unqualified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="reports" className="section certificates-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Documentation</p>
              <h2 className="section-title">Certificates & Reports</h2>
            </div>
            <div className="certificates-grid">
              <div className="cert-card card-institutional">
                <span className="cert-type">Attestation Report</span>
                <span className="cert-title">Q4 2024 Reserve Attestation</span>
                <span className="cert-date">December 2024</span>
                <a href="#" className="cert-link">View PDF</a>
              </div>
              <div className="cert-card card-institutional">
                <span className="cert-type">Monetary Policy</span>
                <span className="cert-title">2024 Annual Policy Statement</span>
                <span className="cert-date">January 2024</span>
                <a href="#" className="cert-link">View PDF</a>
              </div>
              <div className="cert-card card-institutional">
                <span className="cert-type">Custody</span>
                <span className="cert-title">Custodial Agreement Summary</span>
                <span className="cert-date">Ongoing</span>
                <a href="#" className="cert-link">View PDF</a>
              </div>
            </div>
          </div>
        </section>

        <section id="policy" className="section policy-section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Strategic Framework</p>
              <h2 className="section-title">Monetary Policy Phases</h2>
            </div>
            <div className="policy-timeline">
              <div className="policy-phase card-institutional">
                <span className="phase-number">I</span>
                <h3 className="phase-title">Foundation</h3>
                <p className="phase-desc">Establish custodial infrastructure, initial reserve allocation, and third-party attestation framework.</p>
                <span className="phase-status">Complete</span>
              </div>
              <div className="policy-phase card-institutional">
                <span className="phase-number">II</span>
                <h3 className="phase-title">Expansion</h3>
                <p className="phase-desc">Scale reserve holdings, implement automated reconciliation, and expand attestation frequency.</p>
                <span className="phase-status">In Progress</span>
              </div>
              <div className="policy-phase card-institutional">
                <span className="phase-number">III</span>
                <h3 className="phase-title">Institutional Integration</h3>
                <p className="phase-desc">Partner custody networks, multi-jurisdiction compliance, and enhanced reporting standards.</p>
                <span className="phase-status">Planned</span>
              </div>
            </div>
          </div>
        </section>

        <section id="allocation" className="section cta-section">
          <div className="container cta-inner">
            <h2 className="cta-title">View Reserve Allocation</h2>
            <p className="cta-desc">
              Access the full breakdown of reserve composition, custodial details, and real-time attestation data.
            </p>
            <a href="#" className="btn-primary">View Reserve Allocation</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-name">Gold Reserve</span>
            <span className="logo-ticker">$AURM</span>
          </div>
          <p className="footer-disclaimer">
            This site is for informational purposes. Gold Reserve ($AURM) is a digital asset backed by allocated physical gold. 
            Past attestations do not guarantee future reserve adequacy. Consult professional advice before any investment.
          </p>
          <p className="footer-entertainment">All content is fictional and for entertainment purposes only.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
