import {IChat} from "../modelsInterface/IChat";

export const firstChat: IChat = {
  id: 1,
  title: "Daddy",
  avatar: `Ананасик.png`,
  unread_count: 2,
  created_by: 1,
  last_message: {
    user: {
      first_name: "Name1",
      second_name: "Name1",
      avatar: `Ананасик.png`,
      email: "Name1@email.com",
      login: "Name1",
      phone: "8(925)-111-11-11",
    },
    time: "15:30",
    content: "Купи хлеб и молоко"
  }
}

export const secondChat: IChat = {
  id: 2,
  title: "Kitty",
  avatar: `Киви.png`,
  unread_count: 1,
  created_by: 2,
  last_message: {
    user: {
      first_name: "Kitty1",
      second_name: "Kitty2",
      avatar: `Киви.png`,
      email: "Kitty@email.com",
      login: "Kitty",
      phone: "8(925)-111-11-12",
    },
    time: "15:32",
    content: "Добавь к списку папы кошачий пауч, плиз"
  }
}

export const thirdChat: IChat = {
  id: 3,
  title: "Mom",
  avatar: `Мандаринка.png`,
  unread_count: 16,
  created_by: 3,
  last_message: {
    user: {
      first_name: "Mom",
      second_name: "Mom",
      avatar: `Мандаринка.png`,
      email: "Mom@email.com",
      login: "Mom",
      phone: "8(925)-111-11-13",
    },
    time: "02:12",
    content: "и завтра важный день, ложись спать"
  }
}

export const mockListChats = [firstChat, secondChat, thirdChat]

