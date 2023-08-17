import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';
import { METHODS } from '../../../constants/methods';
import { createInputBlock } from '../input-block';
import { labelAttrEmail, labelAttrPass } from '../../atoms/label/label';
import { inputAttrEmail, inputAttrPass } from '../../atoms/input/input';
import { LABEL_EMAIL, LABEL_PASS } from '../../../constants/common';
import { createBtnsAuth } from '../btns-auth/btns-auth';

const formAttributes = {
  method: METHODS.post,
  id: 'form-auth',
};

export const createFormAuth = () => {
  const formElement = createElement({
    tag: TAGS.form,
    className: 'form',
    attributes: formAttributes,
  });

  const btnsAuth = createBtnsAuth();
  const inputEmail = createInputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL);
  const inputPass = createInputBlock(labelAttrPass, inputAttrPass, LABEL_PASS);

  formElement.appendChild(inputEmail);
  formElement.appendChild(inputPass);
  formElement.appendChild(btnsAuth);

  return formElement;
};
