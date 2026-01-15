import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import type { Direction } from "../types/direction";
import type { GridProps } from "../types/grid";
import { GRID_SIZE, ROTATION_MAP } from "../constants/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fafafa",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  border: "1px solid #ccc",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
}));

const AppGrid: React.FC<
  GridProps & { objectX: number; objectY: number; direction: Direction }
> = ({ objectX, objectY, direction }) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 420, width: "100%", margin: "auto" }}>
      <Grid container columns={GRID_SIZE} spacing={0.5}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = GRID_SIZE - 1 - Math.floor(index / GRID_SIZE); // flip vertically
          const isObject = x === objectX && y === objectY;

          return (
            <Grid size={1} key={index}>
              <Item
                sx={{
                  height: 60,
                  width: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isObject ? "#94eb97" : undefined,
                  boxShadow: isObject ? "0 0 10px #94eb97" : "none",
                  animation: isObject
                    ? "glow 1.5s ease-in-out infinite"
                    : "none",
                  "@keyframes glow": {
                    "0%, 100%": { boxShadow: "0 0 10px #94eb97" },
                    "50%": { boxShadow: "0 0 25px #94eb97" },
                  },
                }}
              >
                {isObject && (
                  <Box
                    sx={{
                      transform: `rotate(${ROTATION_MAP[direction]})`,
                      transition: "transform 0.6s ease", // This adds the spin
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: 28,
                        animation: "bounceUp 0.5s ease 0.6s", // Bounce starts after spin delay
                        "@keyframes bounceUp": {
                          "0%, 100%": { transform: "translateY(0)" },
                          "50%": { transform: "translateY(-10px)" },
                        },
                      }}
                    >
                      🤖
                    </Box>
                  </Box>
                )}
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AppGrid;
