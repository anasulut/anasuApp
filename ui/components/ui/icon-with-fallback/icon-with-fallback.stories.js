import React from 'react';
import PropTypes from 'prop-types';
import { BannerAlert } from '../../component-library';
import { Severity } from '../../../helpers/constants/design-system';
import README from './README.mdx';

const Deprecated = ({ children }) => (
  <>
    <BannerAlert severity={Severity.Warning} title="Deprecated" description="<IconWithFallback/> has been deprecated in favor of <AvatarNetwork/>" marginBottom={4} />
    {children}
  </>
);

Deprecated.propTypes = {
  children: PropTypes.node,
};

export default {
  title: 'Components/UI/IconWithFallback',
  component: IconWithFallback,
  parameters: { docs: { page: README } },
};

export const DefaultStory = (args) => (
  <Deprecated>
    <IconWithFallback {...args} />
  </Deprecated>
);

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  name: 'ast',
  icon: './AST.png',
  size: 24,
};

export const Fallback = (args) => (
<Deprecated>
<IconWithFallback {...args} />
</Deprecated>
);

Fallback.args = {
name:'ast',
size :24,
};
