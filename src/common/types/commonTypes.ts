export interface HeaderMenuItem {
  text: string;
  href: string;
}

export interface IRegistration {
  email: string,
  password: string,
  firstName: string,
  lastName: string
}

export interface IAuthorization {
  email: string,
  password: string
}

export interface IInputCheck {
  value: string,
  errorEl: HTMLElement,
  number?: number
}
