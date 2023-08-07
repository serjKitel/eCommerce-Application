import { getProjectDetails } from './commerceTools/Client';

const btn = document.querySelector('.button') as HTMLElement;
btn.addEventListener('click', () => {
  getProjectDetails();
});
