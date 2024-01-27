import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Lesson,
  DashboardLayout,
  Error,
  Profile,
  Home,
  Stats,
  AddFlashcard,
  AllFlashcards,
  EditFlashcard,
  Admin,
} from "./pages";
//import { loader as allFlashcardsLoader } from "./pages/AllFlashcards";
// import { loader as dashboardLoader } from './pages/DashboardLayout'";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        //loader: dashboardLoader,
        children: [
          { index: true, element: <Home /> },
          {
            path: "lesson",
            element: <Lesson />,
          },
          {
            path: "add-flashcard",
            element: <AddFlashcard />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-flashcards",
            element: <AllFlashcards />,
          },
          {
            path: "edit-flashcard",
            element: <EditFlashcard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
