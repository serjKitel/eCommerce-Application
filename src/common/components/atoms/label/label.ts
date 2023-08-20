import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const labelAttrEmail = {
  for: 'email',
};

export const labelAttrPass = {
  for: 'password',
};

export const labelAttrName = {
  for: 'name',
};

export const labelAttrSurname = {
  for: 'surname',
};

export const labelAttrDate = {
  for: 'date',
};

export const labelAttrStreet = {
  for: 'street',
};

export const labelAttrTown = {
  for: 'town',
};

export const labelAttrIndex = {
  for: 'index',
};

export const labelAttrCountry = {
  for: 'country',
};

export const LabelElement = (attr: { [key: string]: string }) => createElement({
  // move in Input
  tag: TAGS.label,
  className: 'label',
  attributes: attr,
});
