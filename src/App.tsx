import { useState } from "react";
import { Box } from "@mui/material";
import { Logo } from "./pages/Logo/Logo";
import { Slash } from "./pages/Slash/Slash";
import { Music } from "./pages/Music/Music";
import { Recommended } from "./pages/Recommended/Recommended";
import { Account } from "./pages/Account/Account";
import { Player } from "./pages/Player/Player";

const App = () => {
  const [currentPage, setCurrentPage] = useState("logo");

  const renderComponent = () => {
    switch (currentPage) {
      case "slash":
        return <Slash setCurrentPage={setCurrentPage} />;
      case "music":
        return <Music setCurrentPage={setCurrentPage} />;
      case "recommended":
        return <Recommended setCurrentPage={setCurrentPage} />;
      case "account":
        return <Account setCurrentPage={setCurrentPage} />;
      case "player":
        return <Player setCurrentPage={setCurrentPage} />;
      default:
        return <Logo setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY={10}
      height="100vh"
      width="100vw"
    >
      {renderComponent()}
    </Box>
  );
};

export default App;
