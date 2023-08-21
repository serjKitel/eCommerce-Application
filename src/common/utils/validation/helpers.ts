import { TAGS } from '@constants/tags';
import { IInputCheck } from '@types/commonTypes';
import { createElement } from '@utils/createElement';

export const showErrors = (errors: string[], errorEl: HTMLElement) => {
  errors.forEach((error) => {
    const err = createElement({
      tag: TAGS.p,
    });
    err.textContent = error;
    errorEl.appendChild(err);
  });
};

export const validateInput = (el: HTMLElement, isValidateInput: (arg0: IInputCheck) => boolean) => {
  const errorEl = el.querySelector('div') as HTMLElement;
  const input = el.querySelector('input') as HTMLInputElement;
  const data: IInputCheck = {
    value: input.value,
    errorEl,
  };
  return isValidateInput(data);
};
