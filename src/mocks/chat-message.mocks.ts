import {IChatMessage} from "../modelsInterface/IChatMessage";
export const message1: IChatMessage = {
  id: 11,
  user_id: 2,
  chat_id: 3,
  time: "27.06.2024",
  type: "text",
  content: 'Хочешь анекдот?',
}

export const message2: IChatMessage = {
  id: 12,
  user_id: 2,
  chat_id: 3,
  time: "27.06.2024",
  type: "text",
  content: 'Заходит компьютерщик в булочную после бессонной ночи у компьютера, провозившись с установкой кривой видеокарты, и говорит:\n' +
    '\n' +
    '- Мне, пожалуйста, буханку черно-белого хлеба и батон цветного....' +
    '\n',
}

export const message3: IChatMessage = {
  id: 13,
  user_id: 2,
  chat_id: 3,
  time: "27.06.2024",
  type: "text",
  content: 'это баян',
  main: true,
}
export const mockListMessages = [message1, message2, message3];
