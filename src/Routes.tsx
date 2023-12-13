import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AdminVoucherReconciliation = React.lazy(
  () => import("pages/AdminVoucherReconciliation"),
);
const AdminCredentialVerificationHistory = React.lazy(
  () => import("pages/AdminCredentialVerificationHistory"),
);
const AdminVoucherHistory = React.lazy(
  () => import("pages/AdminVoucherHistory"),
);
const AdminUsers = React.lazy(() => import("pages/AdminUsers"));
const AdminPackages = React.lazy(() => import("pages/AdminPackages"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const BillingAddress = React.lazy(() => import("pages/BillingAddress"));
const TransactionHistory = React.lazy(() => import("pages/TransactionHistory"));
const ManageAccountMyProfileedit = React.lazy(
  () => import("pages/ManageAccountMyProfileedit"),
);
const ManageAccountMyProfile = React.lazy(
  () => import("pages/ManageAccountMyProfile"),
);
const Pricing = React.lazy(() => import("pages/Pricing"));
const SignedinusercredentialdetailpageAlignment = React.lazy(
  () => import("pages/SignedinusercredentialdetailpageAlignment"),
);
const Signedinusercredentialdetailpage = React.lazy(
  () => import("pages/Signedinusercredentialdetailpage"),
);
const SignedinuserlandingpagewithcredentialssharedafterVOne = React.lazy(
  () => import("pages/SignedinuserlandingpagewithcredentialssharedafterVOne"),
);
const Signedinuserlandingpagewithcredentialsshared = React.lazy(
  () => import("pages/Signedinuserlandingpagewithcredentialsshared"),
);
const Signedinuserlandingpageprofilemenu = React.lazy(
  () => import("pages/Signedinuserlandingpageprofilemenu"),
);
const Signedinuserlandingpage = React.lazy(
  () => import("pages/Signedinuserlandingpage"),
);
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const PricingOne = React.lazy(() => import("pages/PricingOne"));
const Signup = React.lazy(() => import("pages/Signup"));
const GuestusercredentialdetailpageAlignment = React.lazy(
  () => import("pages/GuestusercredentialdetailpageAlignment"),
);
const Guestusercredentialdetailpage = React.lazy(
  () => import("pages/Guestusercredentialdetailpage"),
);
const Guestusercredentialsshared = React.lazy(
  () => import("pages/Guestusercredentialsshared"),
);
const GuestusermobilescreenTwo = React.lazy(
  () => import("pages/GuestusermobilescreenTwo"),
);
const GuestusermobilescreenOne = React.lazy(
  () => import("pages/GuestusermobilescreenOne"),
);
const ForgotpasswordauthZero = React.lazy(
  () => import("pages/ForgotpasswordauthZero"),
);
const SigninauthZero = React.lazy(() => import("pages/SigninauthZero"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signinauthzero" element={<SigninauthZero />} />
          <Route
            path="/forgotpasswordauthzero"
            element={<ForgotpasswordauthZero />}
          />
          <Route
            path="/guestusermobilescreenone"
            element={<GuestusermobilescreenOne />}
          />
          <Route
            path="/guestusermobilescreentwo"
            element={<GuestusermobilescreenTwo />}
          />
          <Route
            path="/guestusercredentialsshared"
            element={<Guestusercredentialsshared />}
          />
          <Route
            path="/guestusercredentialdetailpage"
            element={<Guestusercredentialdetailpage />}
          />
          <Route
            path="/guestusercredentialdetailpagealignment"
            element={<GuestusercredentialdetailpageAlignment />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricingone" element={<PricingOne />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/signedinuserlandingpage"
            element={<Signedinuserlandingpage />}
          />
          <Route
            path="/signedinuserlandingpageprofilemenu"
            element={<Signedinuserlandingpageprofilemenu />}
          />
          <Route
            path="/signedinuserlandingpagewithcredentialsshared"
            element={<Signedinuserlandingpagewithcredentialsshared />}
          />
          <Route
            path="/signedinuserlandingpagewithcredentialssharedaftervone"
            element={<SignedinuserlandingpagewithcredentialssharedafterVOne />}
          />
          <Route
            path="/signedinusercredentialdetailpage"
            element={<Signedinusercredentialdetailpage />}
          />
          <Route
            path="/signedinusercredentialdetailpagealignment"
            element={<SignedinusercredentialdetailpageAlignment />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/manageaccountmyprofile"
            element={<ManageAccountMyProfile />}
          />
          <Route
            path="/manageaccountmyprofileedit"
            element={<ManageAccountMyProfileedit />}
          />
          <Route path="/transactionhistory" element={<TransactionHistory />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminpackages" element={<AdminPackages />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route
            path="/adminvoucherhistory"
            element={<AdminVoucherHistory />}
          />
          <Route
            path="/admincredentialverificationhistory"
            element={<AdminCredentialVerificationHistory />}
          />
          <Route
            path="/adminvoucherreconciliation"
            element={<AdminVoucherReconciliation />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
