import React from "react";
import type { Story } from "@storybook/react";

import ThumbnailPicker from "./ThumbnailPicker";

export default {
  title: "ThumbnailPicker",
  component: ThumbnailPicker,
};

type ThumbnailPickerProps = React.ComponentProps<typeof ThumbnailPicker>;

const Template: Story<ThumbnailPickerProps> = (args) => (
  <ThumbnailPicker {...args} />
);

export const Default = Template.bind({});
