import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { BreadcrumbAbout } from '../../common/components/molecules/breadcrumb-navigation-about/BreadcrumbAbout';

export const AboutUsPage = () => {
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';

    const containerElement = createElement({
      tag: TAGS.div,
      className: 'container',
    });

    const mainInnerElement = createElement({
      tag: TAGS.div,
      className: 'main__inner',
    });

    const innerTextElement = createElement({
      tag: TAGS.p,
      className: 'main__inner-text',
    });

    innerTextElement.textContent = 'Информация о нас';

    const navigationChain = BreadcrumbAbout();

    const teamateCardsElement = createElement({
      tag: TAGS.div,
      className: 'team__cards',
    });

    const teamateCard1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__card',
    });

    const teamatePhotoBlock1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__photo-block',
    });

    const teamatePhoto1Element = createElement({
      tag: TAGS.img,
      className: 'teamate__photo',
      attributes: {
        src: './images/photo__Dimtriy.jpg',
        alt: 'photo__Dimtriy',
      },
    });

    const teamateNameBlock1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__name-block',
      textContent: 'Дмитрий Разумов',
    });

    const teamatePositionBlock1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__position-block',
      textContent: 'Frontend developer',
    });

    const teamateInfo1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__info',
      textContent: `
      Привет. Меня зовут Дима, я из Минска.
      Я младший фронтенд-разработчик.
      Я учусь на втором курсе Белорусского государственного университета информатики и радиоэлектроники,
      факультет компьютерного дизайна, по специальности «Программируемые мобильные системы».
      Мой путь в программировании начался в 11 классе.
      Меня стало очень интересовать, какое направление в IT мне выбрать,
      попробовав несколько разных направлений, я остановился на веб-разработке, в частности на фронтенде.
    `,
    });

    const teamateGithub1Element = createElement({
      tag: TAGS.div,
      className: 'teamate__github',
    });

    const teamateGithubLink1Element = createElement({
      tag: TAGS.a,
      className: 'link__github',
      attributes: {
        href: 'https://github.com/dimonio04',
      },
    });

    const teamateGithubImg1Element = createElement({
      tag: TAGS.img,
      className: 'img__github',
      attributes: {
        src: './icons/github.png',
        alt: 'github',
      },
    });

    teamateGithubLink1Element.appendChild(teamateGithubImg1Element);
    teamateGithub1Element.appendChild(teamateGithubLink1Element);
    teamateInfo1Element.appendChild(teamateGithub1Element);

    teamateCard1Element.appendChild(teamatePhotoBlock1Element);
    teamatePhotoBlock1Element.appendChild(teamatePhoto1Element);
    teamateCard1Element.appendChild(teamateNameBlock1Element);
    teamateCard1Element.appendChild(teamatePositionBlock1Element);
    teamateCard1Element.appendChild(teamateInfo1Element);

    const teamateCard2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__card',
    });

    const teamatePhotoBlock2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__photo-block',
    });

    const teamatePhoto2Element = createElement({
      tag: TAGS.img,
      className: 'teamate__photo',
      attributes: {
        src: './images/photo__Sergei.JPG',
        alt: 'photo__Sergei',
      },
    });

    const teamateNameBlock2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__name-block',
      textContent: 'Сергей Китель',
    });

    const teamatePositionBlock2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__position-block',
      textContent: 'Frontend developer',
    });

    const teamateInfo2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__info',
      textContent: `
    Привет. Меня зовут Сергей, я из Минска.
    Я младший фронтенд-разработчик.
    Я учился в гимназии №146 и изучал английский язык с первого класса.
    В результате я стал выпускником Минского государственного лингвистического университета
    по специальности «Иностранные языки и лингвистика (английский язык)».
    На данный момент, уже больше года я изучаю веб-разработку (Frontend-JavaScript).
    Изучение интересное и сложное, требует полного погружения,
    а новые знания - это всегда "круто"!
  `,
    });

    const teamateGithub2Element = createElement({
      tag: TAGS.div,
      className: 'teamate__github',
    });

    const teamateGithubLink2Element = createElement({
      tag: TAGS.a,
      className: 'link__github',
      attributes: {
        href: 'https://github.com/serjkitel',
      },
    });

    const teamateGithubImg2Element = createElement({
      tag: TAGS.img,
      className: 'img__github',
      attributes: {
        src: './icons/github.png',
        alt: 'github',
      },
    });

    teamateGithubLink2Element.appendChild(teamateGithubImg2Element);
    teamateGithub2Element.appendChild(teamateGithubLink2Element);
    teamateInfo2Element.appendChild(teamateGithub2Element);

    teamateCard2Element.appendChild(teamatePhotoBlock2Element);
    teamatePhotoBlock2Element.appendChild(teamatePhoto2Element);
    teamateCard2Element.appendChild(teamateNameBlock2Element);
    teamateCard2Element.appendChild(teamatePositionBlock2Element);
    teamateCard2Element.appendChild(teamateInfo2Element);

    const descriptionAboutUsElement = createElement({
      tag: TAGS.div,
      className: 'description__about-us',
      textContent: `
    Обязанности обсуждались на онлайн-встрече и четко были разделены ментором между участниками проекта до его старта.
    Дмитрий занимался взаимодействием разрабатываемого приложения с платформой eCommerce.
    Сергей занимался визуальным функционированием веб-страницы.
    Несколько раз в неделю проводились созвоны всей группы разработки с участием ментора,
    обсуждались возникшие трудности и пути их решения, обсуждались дальнейшие задачи.
    У каждого участника разработки было полное и ясное понимание, что от него требуется.
    Это способствовало производительной и согласованной работе в команде.
  `,
    });

    const rsSchoolBlockElement = createElement({
      tag: TAGS.div,
      className: 'rs__school-block',
    });

    const rsSchoolLinkElement = createElement({
      tag: TAGS.a,
      className: 'rs__school-link',
      attributes: {
        href: 'https://rs.school/js/',
      },
    });

    const rsSchoolImgElement = createElement({
      tag: TAGS.img,
      className: 'rs__school-img',
      attributes: {
        src: './icons/rs_school_js.svg',
        alt: 'rs-school',
      },
    });

    teamateCardsElement.appendChild(teamateCard1Element);
    teamateCardsElement.appendChild(teamateCard2Element);

    rsSchoolLinkElement.appendChild(rsSchoolImgElement);
    rsSchoolBlockElement.appendChild(rsSchoolLinkElement);

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(navigationChain);
    mainInnerElement.appendChild(teamateCardsElement);
    mainInnerElement.appendChild(descriptionAboutUsElement);
    mainInnerElement.appendChild(rsSchoolBlockElement);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }

  return mainElement;
};
