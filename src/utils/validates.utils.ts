export const validateLogin = (value: string) => {
  if (value.length === 0) return `Поле не должно быть пустым`;
  if (value.length < 3) {
    return 'Логин должен содержать минимум 3 символа'
  }
  if (value.length > 20) {
    return 'Логин должен содержать максимум 20 символов'
  }
  if (!value.match(/(?=.*[a-z])/)) {
    return 'Проверьте логин'
  }
  if (!value.match(/^[a-z0-9_-]{3,}$/)) {
    return 'Логин может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
  }
  return '';
}

export const validatePassword = (value: string) => {
  if (value.length === 0) return `Поле не должно быть пустым`;
  if (value.length < 8) {
    return 'Пароль должен содержать минимум 8 символов'
  }
  if (value.length > 40) {
    return 'Пароль должен содержать максимум 40 символов'
  }
  if (!value.match(/(?=.*[A-Z])/)) {
    return 'Пароль должен содержать заглавные буквы'
  }
  if (!value.match(/(?=.*[a-z])/)) {
    return 'Пароль должен содержать маленькую букву'
  }
  if (!value.match(/(?=.*[0-9])/)) {
    return 'Поле должно иметь цифру'
  }
  return '';
}

export const validateName = (value: string) => {
  if (value.length === 0) return `Поле не должно быть пустым`;
  if (value.length < 2) {
    return 'Имя должно содержать минимум 2 символа'
  }
  if (value.length > 140) {
    return 'Имя должно содержать максимум 140 символов'
  }
  if (!value.match(/^[A-Z]+/)) {
    return 'Поле должно содержать заглавную букву'
  }
  if (!value.match(/[a-z-]$/)) {
    return 'Поле должно содержать только буквы и "-"'
  }
  return '';
}

export const validateEmail = (value: string) => {
  if (value.length === 0) return `Поле не должно быть пустым`;

  if (!value.match(/^\S+@\S+\.\S+$/)) {
    return 'Неверная почта'
  }
  return '';
}

export const validatePhone = (value: string) => {
  if (value.length === 0) return `Поле не должно быть пустым`;

  if (!value.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/)) {
    return 'Неверный телефон, пример +7-111-111-1111'
  }
  return '';
}

export const validateMessage = (value: string) => {
    if (value.length === 0) return `Сообщение не должно быть пустым`;
    return '';
}

export const validateNameChat = (value: string) => {
    if (value.length === 0) return `Имя чата не должно быть пустым`;
    return '';
}

export const validateDisplayName = (value: string) => {
    if (value.length > 50) return `Никнейм не должен быть больше 50 символов`;
    if(value.length===0)return ' ';
    return '';
}
