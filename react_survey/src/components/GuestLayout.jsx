import { Navigate, Outlet } from "react-router-dom"
import { useUserStateContext } from "../contexts/ContextProvider";

function GuestLayout() {
  const { userToken } = useUserStateContext();

  if (userToken) {
    return <Navigate to="/" />;
  }
  return (
    <div>
    Part of layout
      <Outlet />
    </div>
  )
}

export default GuestLayout
