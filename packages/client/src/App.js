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
  Users,
  UserProjects,
  EditDetails,
  EditProject,
  ViewProject,
} from "./components";

function App() {
  return (
    <Router>
      <NavBarComp className="sticky" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/ideas" element={<TemplatesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit-details" element={<EditDetails />} />

        <Route
          path="/projects/:projectId"
          element={<ViewProject />}
        />
        <Route path="/projects" element={<Projects />}>
          <Route path=":id" element={<UserProjects />} />
        </Route>
        <Route
          path="/projects/edit/:projectId"
          element={<EditProject />}
        />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
