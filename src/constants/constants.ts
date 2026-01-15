import type { Direction } from "../types/direction";

export const GRID_SIZE = 5;

export const ROTATION_MAP: Record<Direction, string> = {
  NORTH: "180deg",
  EAST: "270deg",
  SOUTH: "0deg",
  WEST: "90deg",
};
