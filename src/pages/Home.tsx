import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/signinauthzero">SigninauthZero</Link>
        </li>
        <li>
          <Link to="/forgotpasswordauthzero">ForgotpasswordauthZero</Link>
        </li>
        <li>
          <Link to="/guestusermobilescreenone">GuestusermobilescreenOne</Link>
        </li>
        <li>
          <Link to="/guestusermobilescreentwo">GuestusermobilescreenTwo</Link>
        </li>
        <li>
          <Link to="/guestusercredentialsshared">
            Guestusercredentialsshared
          </Link>
        </li>
        <li>
          <Link to="/guestusercredentialdetailpage">
            Guestusercredentialdetailpage
          </Link>
        </li>
        <li>
          <Link to="/guestusercredentialdetailpagealignment">
            GuestusercredentialdetailpageAlignment
          </Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/pricingone">PricingOne</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/signedinuserlandingpage">Signedinuserlandingpage</Link>
        </li>
        <li>
          <Link to="/signedinuserlandingpageprofilemenu">
            Signedinuserlandingpageprofilemenu
          </Link>
        </li>
        <li>
          <Link to="/signedinuserlandingpagewithcredentialsshared">
            Signedinuserlandingpagewithcredentialsshared
          </Link>
        </li>
        <li>
          <Link to="/signedinuserlandingpagewithcredentialssharedaftervone">
            SignedinuserlandingpagewithcredentialssharedafterVOne
          </Link>
        </li>
        <li>
          <Link to="/signedinusercredentialdetailpage">
            Signedinusercredentialdetailpage
          </Link>
        </li>
        <li>
          <Link to="/signedinusercredentialdetailpagealignment">
            SignedinusercredentialdetailpageAlignment
          </Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/manageaccountmyprofile">ManageAccountMyProfile</Link>
        </li>
        <li>
          <Link to="/manageaccountmyprofileedit">
            ManageAccountMyProfileedit
          </Link>
        </li>
        <li>
          <Link to="/transactionhistory">TransactionHistory</Link>
        </li>
        <li>
          <Link to="/billingaddress">BillingAddress</Link>
        </li>
        <li>
          <Link to="/admindashboard">AdminDashboard</Link>
        </li>
        <li>
          <Link to="/adminpackages">AdminPackages</Link>
        </li>
        <li>
          <Link to="/adminusers">AdminUsers</Link>
        </li>
        <li>
          <Link to="/adminvoucherhistory">AdminVoucherHistory</Link>
        </li>
        <li>
          <Link to="/admincredentialverificationhistory">
            AdminCredentialVerificationHistory
          </Link>
        </li>
        <li>
          <Link to="/adminvoucherreconciliation">
            AdminVoucherReconciliation
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
