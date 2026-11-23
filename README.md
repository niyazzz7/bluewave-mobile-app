# Bluewave

Мобильное приложение на Expo SDK 57 (React Native 0.86, React 19.2, TypeScript).

## Запуск

```bash
npm install
npx expo install --fix   # подтянет точные версии пакетов под SDK 57
npm start
```

## Структура

- `App.tsx` — навигация (вкладки + стек экранов с кнопкой «Назад»)
- `src/navigation.ts` — типы экранов
- `src/theme.ts` — цвета
- `src/components/UI.tsx` — общие компоненты (Page, Button, Field, Card, ListItem, ToggleRow, Chip, Pill)
- `src/screens/` — 31 экран
