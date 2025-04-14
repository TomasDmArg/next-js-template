# Debugging Techniques 🔍

Effective debugging is a critical skill for any developer. This guide covers common techniques and tools for debugging both frontend and backend code in this Next.js application. 🛠️

## Frontend Debugging (Browser) 🌐

Your primary tool for frontend debugging is your browser's Developer Tools (usually opened with F12). 🔧

- **Console Tab:** 📝
    - View logs (`console.log`, `console.warn`, `console.error`). Use descriptive logs to track execution flow and inspect variable values.
    - Execute JavaScript snippets interactively.
    - Inspect error messages and stack traces.
- **Elements Tab:** 🏗️
    - Inspect the rendered HTML structure (DOM).
    - Analyze and modify CSS styles applied to elements.
    - Check element attributes and event listeners.
- **Network Tab:** 🌐
    - Inspect all network requests made by the page (API calls, images, scripts, etc.).
    - Check request/response headers, payloads, status codes, and timing.
    - Filter requests, analyze waterfalls to identify bottlenecks.
- **Sources Tab:** 📄
    - Set breakpoints (`debugger;` statement in code or by clicking line numbers) to pause JavaScript execution.
    - Step through code execution (step over, step into, step out).
    - Inspect variable values at specific points in time (scope inspection).
    - Analyze call stacks.
    - View original source code even after transpilation/bundling (requires source maps, usually enabled in development).
- **Application Tab:** 💾
    - Inspect local storage, session storage, cookies, IndexedDB, and other browser storage mechanisms.

## Backend Debugging (Next.js API Routes and Server Components) ⚙️

Debugging code running on the server (API Routes, Server Components with `"use server"` if applicable) requires different techniques.

- **Logging:** 📝
    - Use `console.log`, `console.warn`, `console.error` extensively within your server-side code.
    - These logs will appear in the **terminal** where you ran `bun dev` (or your production environment's logging system), _not_ in the browser console.
    - Use structured logging for better analysis in production if needed.
- **Node.js / Bun Debugger:** 🔧
    - You can attach a debugger to the running Node.js/Bun process.
    - **Using VS Code:** Configure your `launch.json` to attach to the Next.js development server process. This allows setting breakpoints, inspecting variables, and stepping through code directly in your editor.
    - **Manual:** Run the development server with the `--inspect` flag (`bun --inspect dev`) and connect using Chrome DevTools (`chrome://inspect`) or other compatible clients.
    - Place `debugger;` statements in your server-side code to trigger breakpoints when the debugger is attached.

## React Developer Tools 🛠️

- A browser extension available for Chrome, Firefox, and Edge.
- **Components Tab:** Inspect the React component hierarchy, view props and state for selected components, and even modify them live. 🧩
- **Profiler Tab:** Record application interactions to identify performance bottlenecks caused by unnecessary component re-renders. 📊
- Essential for understanding how your React components are structured and behaving. 🎯

## General Debugging Tips 💡

- **Reproduce Consistently:** Try to find the exact steps to reproduce the bug reliably. 🔄
- **Isolate the Problem:** Narrow down the scope. Is the bug in the frontend or backend? In which specific component or function? 🎯
- **Simplify:** Temporarily remove code or features to see if the bug disappears. Comment out sections. 🔍
- **Read Error Messages Carefully:** Understand the error type and stack trace. 📝
- **Check Network Requests:** Verify that API calls are being made correctly and the responses are as expected. 🌐
- **Check State:** Use React DevTools or logging to verify component state and context values. 📊
- **Talk Through the Problem:** Explaining the problem to someone else (or even rubber duck debugging) can often reveal the solution. 🦆
