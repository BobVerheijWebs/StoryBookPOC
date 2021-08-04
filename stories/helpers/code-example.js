function addCodeExample(component, templateConfig) {
  if (!component || !templateConfig) return;
  component.parameters = {
    docs: {
      source: {
        code: templateConfig({
          title: component?.args?.title,
          button_color: component?.args?.button_color,
        }),
      },
    },
  };
  return component;
}
export { addCodeExample };
