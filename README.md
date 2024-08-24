# Next.js Project Template

This repository contains a blank Next.js project template with a variety of pre-configured tools and components to jumpstart your web development process.

## Features

- [Next.js](https://nextjs.org/) - React framework for building web applications
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [ESLint](https://eslint.org/) - Linting utility for JavaScript and TypeScript
- [Million.js](https://million.js.org/) - Million Lint surfaces problematic code and automatically suggests ways to improve it.
- [Bun](https://bun.sh/) - All-in-one JavaScript runtime & toolkit
- Docker configuration for containerization

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```

3. Install dependencies:
   ```
   bun install
   ```

4. Run the development server:
   ```
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Docker

To build and run the Docker container:

1. Build the image:
   ```
   docker build -t nextjs-template .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 nextjs-template
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)