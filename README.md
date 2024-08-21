# Notes

## О проекте
Проект представляет собой приложение заметок, созданный в целях улучшения навыков работы с React и Typescript.

Для перехода на сайт можно воспользоваться ссылкой: https://artiomkochkin.github.io/notes-react/

P.S. Проект не завершен и  находится в разработке

## Основные функции

1. Заметки:
    - Создание заметки в 2 вариантах: обычная, в виде списка
    - Редактирование заметки
    - Удаление заметки
    - Закрепление заметки
    - Архивирование заметки
    - Создание копии заметки
    - Показ времени последнего редактирования заметки
    - Добавление ярлыков к заметке 
    - Скачивание заметки в 2 вариантах: PDF и DOCX
    - Полная стилизация заметки: фон и текст
    - Возможность установить свой фон
    - Сброс кастомной стилизации

2. Ярлыки:
    - Создание ярлыка
    - Редактирование названия ярлыка
    - Удаление ярлыка

3. Другое:
    - Поиск по названию заметки
    - Возможность найти заметки по определенному ярлыку
    - Возможность смены темы: светлая, тёмная
    - Возможность выбора вида отображения заметок: сетка, список
    - Возможность выбора вида боковой панели: полный, скрытый

## Стек технологий
- FSD (Feature sliced design) в качестве архитектурной методологии
- Vite в качестве инструмента сборки 
- Библиотека React
- TypeScript для типизации проекта
- Redux toolkit для работы с данными
- RTK Query для работы с запросами
- TailwindCSS и SCSS для стилизации
- Amvera Cloud для размещения backend части приложения
- Различные вспомогательные библиотеки:
   - react-router-dom v6 для маршрутизации
   - react-icons для иконок интерфейса
   - jspdf, docx, file-saver для возможности создания и скачивания заметок в формате PDF и DOCX
   - json-server в качестве сервера
   - gh-pages для размещения проекта на GitHub Pages
   - и другие (в файле package.json полный список)

## Запуск проекта

Установка зависимостей `npm install`

- Запуск проекта в режиме разработки `npm run dev`
- Запуск проекта в prod режиме `npm run build`

## Возможные ошибки
Если многократно возникает ошибка загрузки ресурсов "Произошла ошибка. Что-то пошло не так!", возможно проблема в том, что истек срок действия бесплатного тарифа для backend часть приложения, которая размещена на Amvera Cloud. 

Решить проблему можно следующим образом:
1. Склонируйте себе этот репозиторий
2. В файле src/entities/labels/const/labels.ts замените 1 строку на
   
   `export const LABELS_API_URL = "http://localhost:3000/labels";`
3. В файле src/entities/notes/const/notes.ts замените 1 строку на

   `export const NOTES_API_URL = "http://localhost:3000/notes";`
4. Установите зависимости командой `npm install`
5. Запустите проект в режиме разработки командой `npm run dev`
6. Добавьте второй терминал
7. Запустите json-server командой `json-server -w public/server/db.json`, если возникает ошибка попробуйте `npx json-server -w public/server/db.json`
8. Перейдите в браузер по ссылке http://localhost:5173/notes-react
