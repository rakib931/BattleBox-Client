import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlant from "../pages/Dashboard/ContestCreator/AddContest";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import ContestCreatorReq from "../pages/Dashboard/Admin/ContestCreatorReq";
import AllContest from "../pages/AllContests/AllContests";
import ManagePendingContest from "../pages/Dashboard/Admin/ManagePendingContest";
import MySubmitions from "../pages/Dashboard/Customer/MySubmitions";
import MyCreatedContests from "../pages/Dashboard/ContestCreator/MyCreatedContests";
import SubmittedTasks from "../pages/Dashboard/ContestCreator/SubmittedTasks";
import MyWinningContests from "../pages/Dashboard/Customer/MyWinningContests";
import Leaderboard from "../pages/Dashboard/Customer/Leaderboard";
import ContestParticipated from "../pages/Dashboard/Customer/ContestParticipated";
import Statistics from "../pages/Dashboard/Common/Statistics";
import CreatorRoute from "./CreatorRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/all-contest",
        element: <AllContest />,
      },
      {
        path: "/contest/:id",
        element: (
          <PrivateRoute>
            <ContestDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-contest",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <AddPlant />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "leaderboard",
        element: (
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        ),
      },
      {
        path: "submited-tasks/:id",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <SubmittedTasks />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "created-contests",
        element: (
          <PrivateRoute>
            <CreatorRoute>
              <MyCreatedContests />
            </CreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "creator-request",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ContestCreatorReq />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-wining-contests",
        element: (
          <PrivateRoute>
            <MyWinningContests />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "participated",
        element: (
          <PrivateRoute>
            <ContestParticipated />
          </PrivateRoute>
        ),
      },
      {
        path: "my-submition",
        element: (
          <PrivateRoute>
            <MySubmitions />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-contest",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManagePendingContest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
