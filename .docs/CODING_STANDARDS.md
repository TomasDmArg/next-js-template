# Coding Standards 📝

This document establishes the general code standards and best practices to follow. 🚀

## Naming Conventions 📛

- **Variables and Functions:** Use `camelCase`. Variables should be descriptive nouns, and functions ideally verbs that describe their action (e.g., `userProfile`, `calculateTotal`, `getUserData`) 🔤
- **Constants:** Use `UPPER_SNAKE_CASE` for truly immutable and widely used constants (e.g., `MAX_RETRIES`, `API_TIMEOUT`) 📌
- **Components (React/TSX):** Use `PascalCase` (e.g., `UserProfileCard`, `LoginForm`) 🧩
- **Classes/Interfaces/Types (TypeScript):** Use `PascalCase` (e.g., `UserService`, `IUserProfile`, `ApiResponse`) 📦
- **Files:** Use `kebab-case` for most files (e.g., `user-profile.tsx`, `api-client.ts`). Component files can use `PascalCase.tsx` if preferred (e.g., `UserProfileCard.tsx`). Be consistent 📁
- **Environment Variables:** Use `UPPER_SNAKE_CASE`, with appropriate prefixes (e.g., `NEXT_PUBLIC_API_URL`, `DATABASE_BASE_URL`) 🔧

## Environment Variables 🌍

- Use a `.env.local` file for local development secrets (this file should be in `.gitignore`) 🔒
- Use `.env.example` to document required environment variables with example values 📋
- Prefix with `NEXT_PUBLIC_` variables accessible on the client side (for Next.js projects) 🌐
- Validate environment variables when starting the application to ensure all required variables are present and correctly formatted ✅

## General Best Practices 🏆

- **Readability:** Write code that is easy to read and understand. Use meaningful names, keep functions short and focused, and add comments for complex logic or non-obvious decisions 📖
- **DRY (Don't Repeat Yourself):** Avoid duplicating code. Extract reusable logic into functions, hooks, or components 🔄
- **KISS (Keep It Simple, Stupid):** Prefer simple solutions over complex ones when possible 🎯
- **YAGNI (You Aren't Gonna Need It):** Avoid implementing features or abstractions that aren't currently required 🚫
- **Single Responsibility Principle (SRP):** Functions, classes, and components should ideally have a single primary responsibility 🎯
- **Divide and Conquer:** Break down complex problems into smaller, more manageable sub-problems. Solve each sub-problem individually and then combine the solutions 🧩

## TypeScript 💪

- **Aim for Strong Typing:** Avoid `any` when possible. Use specific types, interfaces, or generics 🎯
- **Use `unknown` instead of `any`:** When the type is truly unknown, `unknown` is safer as it forces type checking before use 🔒
- **Leverage Utility Types:** Use built-in utility types like `Partial`, `Required`, `Readonly`, `Pick`, `Omit` to create new types based on existing ones 🛠️
- **Define Clear Interfaces/Types:** Ensure interfaces and type aliases clearly define the shape of data 📋

## Documentation (JSDoc) 📚

- Use JSDoc comments (`/** ... */`) to document functions, classes, types, and complex logic, especially for exported members 📝
- Describe the purpose, parameters (`@param`), return values (`@returns`), and any potential side effects or exceptions (`@throws`) 📋
