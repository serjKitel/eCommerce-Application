import { createContactsPage } from '@molecules/contacts/contacts';

export const renderContactsPage = () => {
  // const headerElement = createHeader();
  const contactsPage = createContactsPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(contactsPage);
  }
};
