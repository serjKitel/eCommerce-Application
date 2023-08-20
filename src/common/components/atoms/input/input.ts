import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const inputAttrEmail = {
  name: 'email',
  type: 'email',
  id: 'email',
  required: 'required',
};

export const inputAttrPass = {
  name: 'password',
  type: 'password',
  id: 'password',
  required: 'required',
  autocomplete: 'off',
};

export const inputAttrName = {
  name: 'name',
  type: 'text',
  id: 'name',
};

export const inputAttrSurname = {
  name: 'surname',
  type: 'text',
  id: 'surname',
};

export const inputAttrDate = {
  name: 'date',
  type: 'date',
  id: 'id',
};

export const inputAttrStreet = {
  name: 'street',
  type: 'text',
  id: 'id',
};

export const inputAttrTown = {
  name: 'town',
  type: 'text',
  id: 'id',
};

export const inputAttrIndex = {
  name: 'index',
  type: 'text',
  id: 'id',
};

export const inputAttrCountry = {
  name: 'country',
  type: 'text',
  id: 'country',
};

export const Input = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.input,
  className: 'input',
  attributes: attr,
});
