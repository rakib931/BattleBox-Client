import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlant from "../pages/Dashboard/ContestCreator/AddContest";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import ContestCreatorReq from "../pages/Dashboard/Admin/ContestCreatorReq";
import AllContest from "../pages/AllContests/AllContests";
import ManagePendingContest from "../pages/Dashboard/Admin/ManagePendingContest";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import MySubmitions from "../pages/Dashboard/Customer/MySubmitions";
import MyCreatedContests from "../pages/Dashboard/ContestCreator/MyCreatedContests";
import SubmittedTasks from "../pages/Dashboard/ContestCreator/SubmittedTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // index:true,
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
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
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
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "submited-task",
        element: (
          <PrivateRoute>
            <SubmittedTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "created-contests",
        element: (
          <PrivateRoute>
            <MyCreatedContests />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "creator-request",
        element: (
          <PrivateRoute>
            <ContestCreatorReq />
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
            <MyOrders />
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
        element: <ManagePendingContest />,
      },
    ],
  },
]);
