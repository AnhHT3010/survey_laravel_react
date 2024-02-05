import { Navigate, Outlet } from "react-router-dom"
import { useUserStateContext } from "../contexts/ContextProvider";

function GuestLayout() {
  const { userToken } = useUserStateContext();

  if (userToken) {
    return <Navigate to="/" />;
  }
  return (
    <div
      style={{
        backgroundImage:
          'url("https://elixirprogrammer.com/images/banner-art.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout
