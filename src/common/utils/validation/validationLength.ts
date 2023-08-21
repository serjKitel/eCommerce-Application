import { IInputCheck } from '@types/commonTypes';

export const showMsgMinLength = (number: number) => `Поле должно содержать минимум ${number} символов`;

export const isLength = (password: string, number: number): boolean => password.length >= number;

export const isValidateLength = (data: IInputCheck): boolean => {
  if (!isLength(data.value, data.number!)) {
    data.errorEl.textContent = showMsgMinLength(data.number!);
    return false;
  }

  data.errorEl.textContent = '';
  return true;
};
