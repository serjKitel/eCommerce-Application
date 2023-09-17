interface CreateElementOptions {
  tag: string;
  className?: string;
  attributes?: { [key: string]: string };
  textContent?: string;
}

export const createElement = (options: CreateElementOptions) => {
  const {
    tag, className, attributes, textContent,
  } = options;
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
};
