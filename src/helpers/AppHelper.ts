import { GRID_SIZE } from "../constants/constants";
import type { Direction } from "../types/direction";

// Helper function to parse and validate the position string
export function parsePosition(
  position: string,
): { x: number; y: number; direction: Direction } | string {
  const match = position.match(/^(\d+),(\d+)\s+(NORTH|SOUTH|EAST|WEST)$/i);

  if (!match) return 'Invalid format. Use "x,y DIRECTION".';

  const x = parseInt(match[1], 10);
  const y = parseInt(match[2], 10);
  const dir = match[3].toUpperCase() as Direction;

  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE)
    return `x and y must be between 0 and ${GRID_SIZE - 1}.`;

  if (!["NORTH", "SOUTH", "EAST", "WEST"].includes(dir))
    return "Direction must be NORTH, EAST, SOUTH, or WEST.";

  return { x, y, direction: dir };
}
