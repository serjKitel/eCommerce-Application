import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { errorInputElement } from '../../atoms/errorInput/errorInput';
import { inputElement } from '../../atoms/input/input';
import { labelElement } from '../../atoms/label/label';

export const createInputBlock = (
  attrLabel: { [key: string]: string }, attrInput: { [key: string]: string }, text: string
) => {
  const inputBlockElement = createElement({
    tag: TAGS.div,
    className: 'input__block',
  });

  const label = labelElement(attrLabel);
  label.textContent = text;

  inputBlockElement.appendChild(label);
  inputBlockElement.appendChild(inputElement(attrInput));
  inputBlockElement.appendChild(errorInputElement);

  return inputBlockElement;
};
