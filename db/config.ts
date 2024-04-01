import { NOW, column, defineDb, defineTable } from 'astro:db';

export const Guestbook = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    date: column.date({ default: NOW }),
    message: column.text(),
  },
});

export default defineDb({
  tables: {
    Guestbook
  },
});