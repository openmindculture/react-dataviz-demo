# React DataViz Demo

**I wanted to start a simple data visualization demo project using React with ReCharts and preferably TypeScript and TSX.** I also wanted to use evaluate AI assistants and learn new skills. Here is what I learned.

Abstract:
Copilot, much like Windsurf, is overhyped and not ready for production code generation.
Jetbrains AI's strength are context actions like finding possible problems.
Google (Gemini) AI is not error-free either, but still the most useful.

## Tutorials vs. AI assistance

### GitHub Copilot in Microsoft VisualStudio Code

See branch `copilot-demo`:

 - Copilot created boilerplate code in a nested sub-folder with the same project name.
 - Copilot did not properly resolve peer dependencies.
 - Copilot did not include the expected `@vitejs/plugin-react` dependency.
 - Copilot did not create a `.gitingore` file.
 - Copilot's instructions and its code did not create a working project.
 - Even after obvious fixes, there is no working application running on localhost.
 - Despite being unsuable, its low-quality output still counts against my subscription plan's "AI usage".
 - **Conclusion: Copilot, much like Windsurf, is overhyped and not ready for production. Don't use Copilot!**

#### Copilot-Generated Runtime Error

The fixed version should have run on http://localhost:3000/
after running
    - `npm install`
    - `npm run dev`

After running npm run dev, no webpage was found for the web address: http://localhost:3000/ This localhost page can’t be found. The CJS build of Vite's Node API is deprecated.
See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

Giving Copilot a last chance to fix its errors, commonplace advice included 
troubleshooting steps like checking the terminal output, ensure you are using ESM for Vite config, delete `node_modules` and reinstall, check the node version or try a different port. The randomness of the suggestions reveals the assistant's cluelessness.

#### Copilot-Generated DataViz Demo Project Structure

- `src/`: Contains the source code for the application.
  - `App.tsx`: The main component that renders the Chart component.
  - `components/Chart.tsx`: The Chart component that uses ReCharts to visualize data.
  - `data/sampleData.ts`: Contains sample data for the chart.
  - `types/index.ts`: Type definitions for the data structures used in the application.
  
- `public/`: Contains static files.
  - `index.html`: The main HTML file for the React application.

- `package.json`: Configuration file for npm, listing dependencies and scripts.

- `tsconfig.json`: TypeScript configuration file.

- `vite.config.ts`: Configuration file for Vite.

#### Copilot-Generated DataViz Demo Project Structure Usage

The Chart component can be customized by passing different data and configuration options. Refer to the documentation in the `src/components/Chart.tsx` file for more details on the available props.


### Google AI Studio

We can use Google's Gemini-powered AI Studio and give it the same prompt that we gave to Copilot.

> I want to start a simple data visualization demo project using React with ReCharts and preferably TypeScript and TSX.

Its first answer seemed lost forever, when I, after accepting to connect Google Drive, clicked on "Build" in the sidebar menu and then clicked "Chat" again. No code. Finally found the link (but no files) in my Drive. Apart from "Save to Drive", there's a "Share Prompt" link, both as small icons above the content, in the typical minimal material UI style lacking usability unless you are already familiar with the interface.

Above the results sections, there's a three-dot menu containing a "branch from here" command that fails due to lacking permissions. Where is the expected Google AI's code sandbox online IDE view?

It seems Google AI did not create the code in a windsurf vibe process, but gave us step-by-step instructions.
But it seems we didn't count on node.

```
Need to install the following packages:
create-vite@7.0.0
Ok to proceed? (y) y

npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'create-vite@7.0.0',
npm warn EBADENGINE   required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE   current: { node: 'v22.11.0', npm: '10.9.0' }
npm warn EBADENGINE }
```

No problem, just try `nvm install node && nvm use node`. Now using node v24.2.0 (npm v1.4.2) and trying again.

The create-vite wizard scaffolds a new project into a subfolder of the same name, just like Copilot had done. I will move everything back to the main directory and restore my personal README notes before proceeding with the same commands as before:

- `npm install`
- `npm run dev`

Voilà! No apparent error, VITE v7.0.2 ready in 166ms running on http://localhost:5173/ showing a cute colorful logo animation titled "Vite + React: count is 0. Edit src/App.tsx and save to test HMR. Click an the Vite and React logos to learn more." Advantage: Google!

The generated code even has an `eslint` configuration, but not `.gitignore` yet. To be fair, nobody said that I should commit the code at this stage yet. But let's add this file to prevent another useless commit of the `node_modules` directory. Copilot (invoked with Ctrl+I for inline chat) can create one, and so can Gemini, without antipatterns like a "Node modules" comment above the `node_modules/` line. Both are overly verbose, containing yarn, npm, and pnpm (Copilot) files in the same project, plus obscure details like `lerna-debug.log*` (Gemini) and `*.sublime-workspace` (Copilot), although I only mentioned VSCode, WebStorm, Mac, Windows, and Linux.

Questions: is this a native node server? How can I start and stop it? Let's consult the generated README file! React + TypeScript + Vite: This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. No server information. Control-C in the current terminal does the job.

Proceeding with the installation instructions, ...

See branch `gemini-demo`:

### Tutorials

after reading and watching tutorials and playing with the AI-generated code above,
this is the demo code created by a software developer in `human-demo`.

### Synopsis, Synergies, Takeaways (so far)

How do the generated examples differ?
What can we learn about different strategies?
What happens when we merge all branches? But why should we merge broken code that doesn't pass our quality guidelines?

What is left of the different approaches?
What are practices and common pitfalls?
Jetbrains AI's "find problems" action tell us?

### Testing and Linting

- Why did no AI try test-driven development?
- Why didn't it setup linters and code style configration?

Copilot: Linters and code style tools (like ESLint and Prettier) are not always included by default in basic project scaffolding, especially when using AI assistants or some quickstart templates. Their setup often requires additional configuration and user preferences (e.g., specific rules, formatting style).

- Can we use AI to add tests retroactively?

#### Jest vs. Vitest

We could use testing framework like Jest or Vitest
and start by writing simple tests for your components or data logic before implementing them.

#### Cypress vs. Playwright

What about end-to-end tests using Cypress?
Cypress is a great choice for end-to-end (E2E) testing in React projects. It allows you to simulate real user interactions and verify that your app works as expected in the browser.

## Conclusion

...

## Appendix: Vite + React Scaffold Documentation Expanding the ESLint configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> aa8f6cb (add scaffold by create-vite react-ts)
