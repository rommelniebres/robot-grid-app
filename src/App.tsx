import { useState } from "react";
import AppGrid from "./components/AppGrid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { Direction } from "./types/direction";
import { parsePosition } from "./helpers/AppHelper";

function App() {
  const [inputValue, setInputValue] = useState("4,3 NORTH");
  const [committedPosition, setCommittedPosition] = useState("4,3 NORTH");
  const [error, setError] = useState("");

  const handleCommit = () => {
    const value = inputValue.toUpperCase().trim();
    const result = parsePosition(value);
    if (typeof result === "string") {
      setError(result);
    } else {
      setCommittedPosition(value);
      setError("");
    }
  };

  const parsed = parsePosition(committedPosition);
  const objectX = typeof parsed === "string" ? 0 : parsed.x;
  const objectY = typeof parsed === "string" ? 0 : parsed.y;
  const direction: Direction =
    typeof parsed === "string" ? "NORTH" : parsed.direction;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 500,
          backgroundColor: "whitesmoke",
          margin: "auto",
          padding: 2,
        }}
      >
        <TextField
          label="Enter position (x,y DIRECTION)"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
          onBlur={handleCommit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCommit();
          }}
          sx={{ mb: 3, width: 300 }}
          helperText='Format: "x,y DIRECTION", e.g., "2,3 EAST"'
        />

        <AppGrid
          position={committedPosition}
          objectX={objectX}
          objectY={objectY}
          direction={direction}
        />
      </Box>

      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={(_, reason) => {
          if (reason === "clickaway") return;
          setError("");
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
