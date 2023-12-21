import { Link, NavLink, Navigate, Outlet} from "react-router-dom";
import classNames from "classnames/bind";
import { useUserStateContext } from "../contexts/ContextProvider";
function DefaultLayout() {
  const navigation = [
    {
      name: "Dashboard",
      to: "/",
      icon: (
        <svg
          className="w-5 h-5 text-white-900 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white ease-in-out"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        </svg>
      ),
    },
    {
      name: "Surveys",
      to: "/surveys",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          data-slot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
    },
    {
      name: "SignOut",
      to: "/logout",
      icon: (
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
          />
        </svg>
      ),
    },
  ];

  const { currentUser, userToken } = useUserStateContext();

  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
    // Thực hiện các hành động đăng xuất ở đây và chuyển hướng nếu cần
  };

  if(!userToken){
    return <Navigate to='login' />
  }

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-4">
            {currentUser.imageUrl == "" ? (
              <img
                className="w-10 h-10 mb-2 rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt=""
              />
            ) : (
              <img
                className="w-10 h-10 mb-2 rounded-full"
                src={currentUser.imageUrl}
                alt=""
              />
            )}
            <div className="font-medium dark:text-white">
              <div>{currentUser.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentUser.email}
              </div>
            </div>
          </div>
          <ul className="space-y-2 font-medium mt-2">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.to === "/logout" ? (
                  <Link
                    onClick={(e) => logout(e)}
                    className="flex items-center p-2 text-gray-900 rounded-lg group transition duration-600"
                  >
                    {item.icon}
                    <span className="ms-3">{item.name}</span>
                  </Link>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-400 dark:bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-200 hover:text-black dark:text-white",
                        "flex items-center p-2 text-gray-900 rounded-lg group transition duration-600"
                      )
                    }
                  >
                    {item.icon}
                    <span className="ms-3">{item.name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout
