import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "storybook/test";
import App from "./App";

// Main app component - interactive grid for object positioning
// Input format: "x,y DIRECTION" where x,y are 0-4 and direction is NORTH/EAST/SOUTH/WEST
const meta = {
  title: "App/Main Application",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default view
export const Default: Story = {};

// Center position test
export const CenterPosition: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "2,2 NORTH");
    await userEvent.tab();
  },
};

// Bottom-left corner
export const BottomLeft: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "0,0 SOUTH");
    await userEvent.tab();
  },
};

// Top-right corner
export const TopRight: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "4,4 WEST");
    await userEvent.tab();
  },
};

// Test different directions
export const FacingEast: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "2,2 EAST");
    await userEvent.tab();
  },
};

// Testing Enter key input
export const EnterKeyTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "1,3 WEST{Enter}");
  },
};

// Error case - invalid x coordinate
export const InvalidXCoord: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "5,2 NORTH");
    await userEvent.tab();
  },
};

// Error case - invalid direction
export const InvalidDirection: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "2,2 NORTHEAST");
    await userEvent.tab();
  },
};

// Error case - wrong format
export const WrongFormat: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/enter position/i);

    await userEvent.clear(input);
    await userEvent.type(input, "invalid");
    await userEvent.tab();
  },
};
