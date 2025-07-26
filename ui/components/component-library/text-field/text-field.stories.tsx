import React, { useState, useRef } from "react";
import {
  StoryFn,
  Meta,
} from "@storybook/react";
import { useArgs } from "@storybook/client-api";

import {
  Display,
  FlexDirection,
  AlignItems,
  TextVariant,
  IconColor,
} from "../../../helpers/constants/design-system";
import { AvatarToken, AvatarTokenSize } from "../avatar-token";
import { Text } from "../text";
import { Box, PolymorphicRef } from "../box";
import { TextFieldSize, TextFieldType } from "./text-field.types";
import {
  ButtonIcon,
} from "../button-icon";

const README = require("./README.mdx");

export default {
  title: "Components/ComponentLibrary/TextField",
  component: TextField as any,
  parameters: {
    docs: {
      page: README as any
    }
  },
};

const Template = (args) => {
    const [{ value }, updateArgs] = useArgs();
    const handleOnChange = (e) =>
        updateArgs({ value: e.target.value });
    return (
        <TextField
            {...args}
            value={value}
            onChange={handleOnChange}
        />
    );
};

// Stories

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const SizeStory = (args) => (
    <Box
        display={Display.InlineFlex}
        flexDirection={FlexDirection.Column}
        gap={4}>
        <TextField {...args} placeholder="Small" size="sm" />
        <TextField {...args} placeholder="Medium" size="md" />
        <TextField {...args} placeholder="Large" size="lg" />
    </Box>
);
SizeStory.storyName = "Sizes";

export const TypeField = (args) => (
   <Box display={"flex"} flexDir={"column"} gap={4}>
     {/* Add specific types if needed */}
   </Box>
);

TypeField.storyName= 'Types';

// Truncate functionality can be directly included within Template story itself if it's reused.

// Example of integrating accessories:
const AccessoriesExample =(props)=>{

}

AccessoriesExample.storyName='Accessories'

// Ref example:

```
