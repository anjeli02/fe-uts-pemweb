import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import LoginForm from "./pages/LoginForm";
import Biodata from "./pages/dashboard/Biodata"; 

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import DashboardIndex from "./pages/dashboard/DashboardIndex";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import CategoryEdit from "./pages/dashboard/category/CategoryEdit";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate"; 
import EventEdit from "./pages/dashboard/event/EventEdit";
import SpeakerIndex from "./pages/dashboard/seminar/SpeakerIndex"; 
import SpeakerCreate from "./pages/dashboard/seminar/SpeakerCreate"; 
import SpeakerEdit from "./pages/dashboard/seminar/SpeakerEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/workshop" element={<Workshop />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />
            
            {/* Category */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />} />

            {/* Event */}
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/new" element={<EventCreate />} />
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />} />

            {/* Speaker */}
            <Route path="/dashboard/pembicara" element={<SpeakerIndex />} />
            <Route path="/dashboard/seminar/speaker" element={<SpeakerCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<SpeakerEdit />} />

            <Route path="/dashboard/biodata" element={<Biodata />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;