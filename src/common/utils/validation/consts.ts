export enum ErrorsDate {
  dateYear = '\nВам меньше 18 лет',
  dateFormat = '\nДата введена неверно',
}

export enum ErrorsEmail {
  emailDoggy = 'Адрес электронной почты должен содержать @',
  emailDomen = 'Адрес электронной почты должен содержать доменное имя',
  emailFormat = 'Неправильный формат адреса электронной почты',
}

export enum ErrorsPassword {
  passwordUpperLetter = '\nПароль должен содержать хотя бы одну заглавную букву (AZ)',
  passwordLowerLetter = '\nПароль должен содержать хотя бы одну строчную букву (az)',
  passwordNumber = '\nПароль должен содержать как минимум одну цифру (0-9)',
  passwordTrim = '\nПароль не должен содержать начальные или конечные пробелы',
}

export enum ErrorsText {
  textLetter = '\nПоле не должно содержать специальных символов или цифр',
}

export const minAge: number = 18;
export const startDat: string = '1950-01-01';
