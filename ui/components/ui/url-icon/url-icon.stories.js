import React from 'react';
import UrlIcon from './url-icon';

export default {
  title: 'Components/UI/UrlIcon',
  argType: {
    name: { control: 'text' },
    url: { control: 'text' },
    className: { control: 'text' },
    fallbackClassName: { control: 'text' },
  },
  args: {
    name,
    url,
    className,
    fallbackClassName,
  }
};

const DefaultStory = (args) => <UrlIcon {...args} />;
const AST = () => <UrlIcon name="AST" url="AST.png" />;
const BAT = () => <UrlIcon name="BAT" url="BAT_icon.svg" />;

export { DefaultStory, AST, BAT };
