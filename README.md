# React DataViz Demo

**I want to start a simple data visualization demo project using React with ReCharts and preferably TypeScript and TSX.** I also wanted to use evaluate AI assistants and learn new skills. Here is what I learned.

## Tutorials vs. AI assistance

### GitHub Copilot in Microsoft VisualStudio Code

See branch `copilot-demo`:

 - Copilot created boilerplate code in a nested sub-folder with the same project name.
 - Copilot did not properly resolve peer dependencies.
 - Copilot did not include the expected `@vitejs/plugin-react` dependency.
 - Copilot did not create a `.gitingore` file.
 - Copilot's instructions and its code did not create a working project.
 - Even after obvious fixes, there is no working application running on localhost.

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


### Google Gemini Studio

We can use Google Gemini Studio to create code in a windsurf vibe process. 

See branch `gemini-demo`:

 - ...

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