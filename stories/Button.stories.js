import { Button } from "@webs/component-library/button";

import { addCodeExample } from "./helpers/code-example";

export default {
  title: "Example/Button",
  argTypes: {
    button_color: {
      control: {
        type: "select",
        options: ["violet", "pink"],
      },
    },
    title: {
      control: {
        type: "select",
        options: ["Short", "Medium Length", "Rather Long Button Text"],
      },
    },
  },
};

const Template = (args) => {
  return `
    <webs-button
      text="${args.title}"
      extraClasses="${args.button_color ? "button-" + args.button_color : ""}"
      href=""
      openInNewTab="true"
    ></webs-button>
  `;
};

export const Orange_Primary = Template.bind({});
Orange_Primary.args = {
  title: "Short",
};

export const Violet_Secondary = Template.bind({});
Violet_Secondary.args = { button_color: "violet", title: "Medium Length" };

export const Pink_Tertiary = Template.bind({});
Pink_Tertiary.args = { button_color: "pink", title: "Rather Long Button Text" };

addCodeExample(Orange_Primary, Template);
addCodeExample(Violet_Secondary, Template);
addCodeExample(Pink_Tertiary, Template);
