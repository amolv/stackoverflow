import { Story, Meta } from "@storybook/react";

import SearchComp, { SearchCompProps } from ".";

export default {
  title: "Example/Searchbox",
  component: SearchComp,
  argTypes: { getSearchKey: { action: "clicked" } },
} as Meta;

const Template: Story<SearchCompProps> = (args) => <SearchComp {...args} />;
export const Default = Template.bind({});
