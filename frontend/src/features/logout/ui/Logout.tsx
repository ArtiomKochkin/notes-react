import { AuthContext } from "@/shared/lib/context";
import { MdOutlineLogout } from "react-icons/md";
import { useContext } from "react";
import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/const";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { setIsAuth } = useContext(AuthContext);
  const nav = useNavigate();

  const handleClick = () => {
    setIsAuth(false);
    localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    nav("/login");
  };
  
  return (
    <button className="ml-4" onClick={handleClick}>
      <MdOutlineLogout />
    </button>
  )
}