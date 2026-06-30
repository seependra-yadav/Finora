import React from 'react';


function Footer() {
  return (
    <div className="container mt-5 footer">

      <div className="row">

        {/* Logo */}
        <div className="col">
          <img
            src="media/Images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
        </div>{/* Company */}
<div className="col">
  <p><strong>Company</strong></p>
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Open demat account</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Minor demat account</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>NRI demat account</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>HUF demat account</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Commodity</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Dematerialisation</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Fund transfer</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>MTF</a>
</div>

{/* Support */}
<div className="col">
  <p><strong>Support</strong></p>
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Contact us</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Support portal</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>How to file a complaint?</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Status of your complaints</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Bulletin</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Circular</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Z-Connect blog</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Downloads</a>
</div>

{/* Account */}
<div className="col">
  <p><strong>Account</strong></p>
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>About</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Philosophy</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Press & media</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Careers</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Zerodha Cares (CSR)</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Zerodha.tech</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Open source</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Referral program</a>
</div>

{/* Quick Links */}
<div className="col">
  <p><strong>Quick Links</strong></p>
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Upcoming IPOs</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Brokerage charges</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Market holidays</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Economic calendar</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Calculators</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Markets</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Sectors</a><br />
  <a href="#" style={{ textDecoration: "none", color: "#6c757d" }}>Gift Nifty</a>
</div>

      </div>

      <hr />

      {/* Full Disclaimer Content */}
      <div className="row mt-4">
        <div className="col-12 small text-muted">

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
            For any complaints pertaining to securities broking please write to complaints@zerodha.com, 
            for DP related to dp@zerodha.com. 
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. 
            Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. 
            Benefits: Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 
             Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 
             Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository 
            on your e-mail and/or mobile number to create pledge. 
             Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker factsheet
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. 
            Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. 
            Issued in the interest of investors. 
            KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary 
            (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. 
            Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. 
            In case of non allotment the funds will remain in your bank account. 
            As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. 
            If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket.
          </p>

          <p>
            Customers availing insurance advisory services offered by Ditto 
            (Tactical Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) 
            will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. 
            These are offered through Blostem Fintech Private Limited. 
            Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. 
            Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, 
            Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. 
            Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>

        </div>
      </div>

    </div>
  );
}

export default Footer;