import { useRouter } from "next/navigation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ActiveBubble from "../card-picture/ActiveBubble";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface AppLayoutProps {
  children: any;
}

function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  return (
    <div className="container-layout">
      {children}
      <div className="container-drawer">
        <div
          className="item-drawer"
          onClick={() => {
            router.push("/");
          }}
        >
          <FavoriteBorderIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          />
        </div>
        <div
          className="item-drawer"
          onClick={() => {
            router.push("/tiempo-juntos");
          }}
        >
          <AccessTimeIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          />
        </div>

        <div className="item-drawer" onClick={()=>{router.push("/dedicatoria")}}> <EmailOutlinedIcon
            sx={{ width: "40px", height: "40px", color: "white" }}
          /></div>
      </div>

      <ActiveBubble />
    </div>
  );
}

export default AppLayout;
