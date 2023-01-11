import {

  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {
  HomePage,
  Dashboard,
  StaffPage,
  RegistrationPage,
  TemplatesPage,
  LoginPage,
  Projects,
} from "./pages";

import {
  NavBarComp,
  UserProjects,
  EditDetails,
  EditProject,
  ViewProject,
  PrivateRoute,
  ErrorBoundary,
} from "./components";
import Restaurant from "./components/DesignTemplates/HomePages/Restaurant";
import Banking from "./components/DesignTemplates/HomePages/Banking";
import Orders from "./components/DesignTemplates/Inputs/order";
import Messenger from "./components/DesignTemplates/Inputs/messenger";
import Store from "./components/DesignTemplates/menus/Store"



function App() {
  return (
    <ErrorBoundary>
      <Router>
        <NavBarComp className="sticky" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/ideas" element={<TemplatesPage />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/bankHome" element={<Banking />} />
          <Route path="/orderform" element={<Orders />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/e-commerce" element={<Store />} />

          <Route path="/edit-details" element={<PrivateRoute />}>
            <Route path="/edit-details" element={<EditDetails />} />
          </Route>


          <Route
            path="/projects/:projectId"
            element={<PrivateRoute />}
          />
          <Route
            path="/projects/:projectId"
            element={<ViewProject />}
          />
          <Route path="/projects" element={<PrivateRoute />}>
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route path=":id" element={<PrivateRoute />}>
            <Route path=":id" element={<UserProjects />} />
          </Route>
          <Route
            path="/projects/edit/:projectId"
            element={<PrivateRoute />}
          >
            <Route
              path="/projects/edit/:projectId"
              element={<EditProject />}
            />

          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
