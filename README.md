# 📝 todolist

A minimal task management demo app built with modern frontend and backend tooling.  
This project is focused on authentication, protected task data, and a clean architecture for learning and portfolio purposes.

## ✨ Features

- ✅ Login (via Supabase Auth)
- ✅ View your personal tasks (with Supabase RLS)
- ✅ Create, edit, and delete tasks
- ✅ Server-side data loading with TanStack Start
- ✅ Notifications for actions (create/delete)
- ✅ Clean UI with shadcn/ui and Tailwind CSS

## 🧱 Tech Stack

| Layer     | Stack                                        |
| --------- | -------------------------------------------- |
| Frontend  | React + TanStack Start (Router, Query, Form) |
| Backend   | Supabase (PostgreSQL + Auth + RLS)           |
| Styling   | Tailwind CSS + shadcn/ui                     |
| Auth      | Supabase Auth                                |
| Dev Tools | TypeScript, ESLint, Prettier                 |

## 📁 Project Structure

```bash
src/
├── routes/        # Pages and routes (TanStack)
├── server/        # Server loaders/actions
├── lib/           # Supabase client, utilities
├── components/    # Reusable UI (shadcn-based)
```

## 🚀 Getting Started

1. Clone this repo
2. Set up a Supabase project
3. Create a `.env` file with your Supabase keys
4. Run the dev server:

```bash
npm install
npm run dev
```

## 📌 Notes

- This project is not a production app — it's meant as a demonstration of how to combine TanStack Start with Supabase for fullstack development.
- Authentication and data access are implemented with real constraints using RLS policies.

## TODO

- [x] Auth with email/password
- [x] Auth with Google/GitHub
- [x] Error and not found components pro Tanstack Router
- [ ] Write tests for features/auth components
- [ ] Private layout with Sidebar + Topbar
- [ ] i18n
- [ ] Profile settings page
- [ ] Todolist crud page

## 🪪 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
