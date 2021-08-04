# Installation instructions

This repository already has working functionality for one example component.
If you want to learn how to apply these components in StoryBook in your own repo check the following instructions:

## Storybook

You can install storybook by running `npx sb init`

When you do this in a repo that has no JavaScript Framework yet set, it will ask you to select an option from the dropdown.
Select web-components.

When you have initialized, you have to first run storybook.
In this repo, I used npm to run storybook as follows:
`npm run storybook`

This will take a while as it will set up some example stories and will fire up your browser to view the stories.

In the repo, it has now created a directory called stories, within which are files with the following naming convention:
`Button.stories.js`
`Header.stories.js`
`Page.stories.js`

You can play around with these examples if you want.

Next, we need to install the package that contains the component-library.
Make sure you are authorized and use the [following instructions](https://docs.gitlab.com/ee/user/packages/npm_registry/#instance-level-npm-endpoint) to set it up in your node package manager.

## Example

Remove the examples that StoryBook made. (Button, Header, Page and all related files to these components).
Create a new file called `Button.stories.js`, or whatever suits your example needs.

Now, we can build up a story for a component as follows:

```js
// File name: Button.stories.js

import { Button } from "@webs/component-library/button"; // <- this will import the webs-button component created in the component library, make sure to consult documentation on how to use these specific components in advance.

export default {
  title: "Example/Button",
  argTypes: {
    button_color: {
      // <-- these arg types can be set to have controls inside of storybook.
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
  `; // <-- here, based on the arguments passed to the Template, it will render the button with different options.
};

export const Orange_Primary = Template.bind({});
Orange_Primary.args = {
  title: "Short",
}; // <-- lastly you'll need to export at least one variation with arguments set to how that variation should look.
```

This will show up as follows in StoryBook:

![SB Example](https://i.imgur.com/LBYuy8M.png)

At the bottom, you can change the controls that are added to this component.

In the docs panel, you can actually see how the component can be rendered in with its arguments added to the web-component:
![SB Example Two](https://i.imgur.com/oideTFK.png)

For now, the functionality of live updating the code does not function as it should. This is something that will be handled in future updates.

All in all, whoever uses StoryBook can easily copy snippets from the docs panel:

```js
<webs-button
  text="Short"
  extraClasses=""
  href=""
  openInNewTab="true"
></webs-button>
```
