import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useLogoutMutation } from "@/entities/auth";
import { useContext } from "react";
import { AuthContext } from "@/shared/lib/context";


export const Logout = () => {
  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const authContext = useContext(AuthContext);

  const handleClick = async () => {
    try {
      await logout();
      authContext?.logout();

      googleLogout();
      nav('/login');
    } catch (err) {
      console.error(`Logout Error: ${err}`);
    }
  };
  
  return (
    <button className="ml-4" onClick={handleClick}>
      <MdOutlineLogout />
    </button>
  )
}