import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import PlaceDetails from "../pages/Placedetails/PlaceDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlace from "../pages/Dashboard/AddPlace";
import { getPlace } from "../api/places";
import MyBookings from "../pages/Dashboard/MyBookings";
import MyListings from "../pages/Dashboard/MyListings";
import ManageBookings from "../pages/Dashboard/ManageBookings";
import ErrorPage from "../error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/place/:id",
        element: (
          <PrivateRoute>
            <PlaceDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getPlace(params.id),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/add-place",
        element: <AddPlace />,
      },
      {
        path: "/dashboard/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/my-listings",
        element: <MyListings />,
      },
      {
        path: "/dashboard/manage-bookings",
        element: <ManageBookings />,
      },
    ],
  },
]);
