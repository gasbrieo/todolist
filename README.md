# 📝 todolist

![GitHub last commit](https://img.shields.io/github/last-commit/gasbrieo/todolist)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/gasbrieo_todolist?server=http%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/gasbrieo_todolist?server=https%3A%2F%2Fsonarcloud.io)
[![Todolist](https://img.shields.io/badge/todolist-live-blue?logo=checkmarx)](https://todolist-gasbrieo.netlify.app)


A minimal task management demo app built with modern frontend and backend tooling.  
This project is focused on authentication, protected task data, and a clean architecture for learning and portfolio purposes.

## ✨ Features

- ✅ Login (via Supabase Auth)
- ✅ View your personal tasks (with Supabase RLS)
- ✅ Create, edit, and delete tasks
- ✅ Server-side data loading with TanStack Start
- ✅ Clean UI with shadcn/ui and Tailwind CSS
- ✅ Deploy with Netlify

## 🧱 Tech Stack

| Layer     | Stack                                        |
| --------- | -------------------------------------------- |
| Frontend  | React + TanStack Start (Router, Query, Form) |
| Backend   | Supabase (PostgreSQL + Auth + RLS)           |
| Styling   | Tailwind CSS + shadcn/ui                     |
| Auth      | Supabase Auth                                |
| Dev Tools | TypeScript, ESLint, Prettier                 |
| Deploy    | Netlify                                      |

## 📁 Project Structure

```bash
src/
├── components/   # Reusable UI components (shadcn-based)
├── features/     # Feature-based folders (forms, auth, etc.)
├── hooks/        # Shared React hooks
├── lib/          # Supabase client, helpers, and general utilities
├── routes/       # TanStack route entries and layouts
├── styles/       # Global styles (e.g., tailwind, css vars)
├── testing/      # Testing utilities (renderWithProviders, mocks, etc.)
├── types/        # Shared TypeScript types
├── utils/        # General utilities not tied to features
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

## 🪪 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
