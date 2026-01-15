import type { Meta, StoryObj } from "@storybook/react";

import AppGrid from "./AppGrid";

const meta = {
  title: "Components/AppGrid",
  component: AppGrid,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: "text",
    },
    objectX: {
      control: { type: "number", min: 0, max: 4 },
    },
    objectY: {
      control: { type: "number", min: 0, max: 4 },
    },
    direction: {
      control: "select",
      options: ["NORTH", "EAST", "SOUTH", "WEST"],
    },
  },
} satisfies Meta<typeof AppGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic position
export const Center: Story = {
  args: {
    position: "2,2 NORTH",
    objectX: 2,
    objectY: 2,
    direction: "NORTH",
  },
};

// Corner cases
export const BottomLeft: Story = {
  args: {
    position: "0,0 NORTH",
    objectX: 0,
    objectY: 0,
    direction: "NORTH",
  },
};

export const TopRight: Story = {
  args: {
    position: "4,4 WEST",
    objectX: 4,
    objectY: 4,
    direction: "WEST",
  },
};

// Different directions
export const FacingEast: Story = {
  args: {
    position: "2,2 EAST",
    objectX: 2,
    objectY: 2,
    direction: "EAST",
  },
};

export const FacingSouth: Story = {
  args: {
    position: "2,2 SOUTH",
    objectX: 2,
    objectY: 2,
    direction: "SOUTH",
  },
};

export const FacingWest: Story = {
  args: {
    position: "2,2 WEST",
    objectX: 2,
    objectY: 2,
    direction: "WEST",
  },
};
