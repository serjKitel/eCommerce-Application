import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { LabelElement } from '@atoms/label';
import { Input } from '@atoms/input';
import { ErrorInput } from '@atoms/error-input';

export const InputBlock = (
  attrLabel: { [key: string]: string },
  attrInput: { [key: string]: string },
  text: string,
) => {
  const inputBlockElement = createElement({
    tag: TAGS.div,
    className: 'input__block',
  });

  const label = LabelElement(attrLabel);
  label.textContent = text;

  const error = ErrorInput();

  inputBlockElement.appendChild(label);
  inputBlockElement.appendChild(Input(attrInput));
  inputBlockElement.appendChild(error);

  return inputBlockElement;
};
