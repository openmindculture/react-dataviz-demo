# React DataViz Demo

**I wanted to start a simple data visualization demo project using React with ReCharts and preferably TypeScript and TSX.** I also wanted to use evaluate AI assistants and learn new skills. Here is what I learned in July 2025.

Abstract:
- GitHub Copilot, much like Windsurf, is overhyped and not ready for production code generation.
- GitHub Copilot undermines privacy protection by requesting unreasonably extensive permissions, including write access to all repositories.
- IDEs are a matter of taste. VSCode is free to use and has a compact, but sometimes confusing UI. 
- Jetbrains AI's strength are context actions like finding possible problems.
- Google (Gemini) AI is not error-free either. It is still the most useful AI assistant that I tested.
- AI Studio did not create code but provided step-by-step instructions using create-vite react-ts.

## Deploy to GitHub Pages

Build the React App to the `build` directory:

- `npm run build`

Push to the `main` branch. We don't use a distinct `gh-pages` branch here. Once deployment is complete, your React app will be available at `https://<your-username>.github.io/<repository-name>/` so in this case:

https://openmindculture.github.io/react-dataviz-demo/

## Notes, TODOs, Takeaways, Documentation

Sources: medium, [recharts.org](https://recharts.org/), ai.dev, DEV.to, [openmindculture](https://github.com/openmindculture), [jengostone](https://github.com/jengostonejs), Google Gemini, Jetbrains AI, Wikipedia, TODO create a GitHub page for interview-style documentation and sharing developer experience and link it in a one of the matching recent DEV posts

![Jengo Mwamba Stone: to React Berlin article cover with React code snippets in front of Berlin Central station](public/react-berlin-jengo.jpg)

## Interview with Jengo Stone, React Dev

ALthough AI tools "are getting scary good at HTML/CSS/React" and AI tools can write tests, AI mostly benefits unexperienced developers lacking knowledge and experience. AI assistants often fail to understand assumptions or don't understand your requirements. AI assistants based on large-language models excel at processing text, but fail to understand existing code and generate production-level code without introducing bugs. Prompt-based image generation is likely to produce low-quality output. Instead of learning how to prompt better, people should focus on their strengths and use both AI and human experts when quality matters.

Even so-called project-wide understanding tools often rely on indexing and retrieval and can't keep a comprehensive, real-time map of the growing implicit context they create, making them prone to miss subtle, dynamic interactions or the intended architectural flow. AI is often excellent at generating the first 70% of a solution, i.e. the common patterns, the basic setup. But it falls short finishing the last 30%: the precise integration, the edge cases, the adherence to specific business logic, and the debugging. Worse, AI often struggles even with the initial, seemingly simple setups of modern applications like those scaffolded by create-vite react-ts.

Peer and inter-file Dependencies, evolving templates and best practices, and implicit understanding of how development environments, bundlers, and compilers actually work together, is limited to pattern replication, not semantic validation against a live system. AI is missing last 30% not only in a project context, but for each and every task. That nvolves getting the configuration exactly right, ensuring all tooling integrates perfectly, and anticipating runtime environment specifics.

### GitHub Copilot in Microsoft VisualStudio Code

GitHub Copilot is said to be very popular among solo developers, freelancers, students, and open-source contributors. Its core strength are real-time, context-aware code suggestions as you type. It can "sometimes produce generic or repetitive code that needs refinement" like in this project.

See branch `copilot-demo`:

 - Copilot created boilerplate code in a nested sub-folder with the same project name.
 - Copilot did not properly resolve peer dependencies.
 - Copilot did not include the expected `@vitejs/plugin-react` dependency.
 - Copilot did not create a `.gitingore` file.
 - Copilot's instructions and its code did not create a working project.
 - Even after obvious fixes, there is no working application running on localhost.
 - Despite being unsuable, its low-quality output still counts against my subscription plan's "AI usage".
 - Copilot urges the user to log in and requests unreasonably extensive permissions, including write access to all repositories.
 - **Conclusion: Copilot, much like Windsurf, is overhyped and not ready for production. Copilot undermines privacy protection. Don't use Copilot!**

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

- `npm create vite@latest my-recharts-demo -- --template react-ts`

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

See branch `gemini-demo` (merged)

#### Next Steps & Further Exploration

> This simple project is a great foundation. Here's what you could do next:
> - Fetch Data from an API: Replace the static financialData with data fetched using fetch or a library like axios.
> - Explore Other Chart Types: Recharts offers Pie Charts, Radar Charts, Area Charts, and more.
> - Add Interactivity: Create filters (e.g., dropdowns) to change the data displayed in the charts.
> - Custom Tooltips: Customize the look and content of the tooltips for a richer user experience.
> - Loading & Error States: Show a loading spinner while fetching data and an error message if the API call fails.

### Jetbrains AI

Jetbrains AI can generate unit tests and find problems in existing code. It is supposed to help understand complex code sections and generate documentation.

While it has failed to understand and explain legacy code in PHP and WordPress applications with global CSS, maybe it will perform much better analyzing and improving a modern AI-generated TypeScript application. JetBrains AI's Deep IDE Integration is a huge pro for modern code using type information, AST (Abstract Syntax Tree) analysis, and code structure.

TODO

### Tutorials

After reading and watching tutorials and playing with the AI-generated code above,
this is the demo code created by a software developer in `human-demo`. To be fair, Gemini's commented step-by-step instructions were my first ReCharts tutorial, and I can't empty my mind or travel back in time to compare. But I've got questions and concerns.

- Verify load time and accessibility using aXe/WAVE, Lighthouse, and keyboard navigation!
- Verify responsive web design, add responsive container if necessary!
- Hosting options for a related client project?
- Accessible animation options?
- Any other ideas for "interactivity"?
- Explore Charting Options like pie charts, tree maps, what else?

However, I have consulted other tutorials and documentations, like

- https://refine.dev/blog/recharts/#how-to-make-recharts-responsive-for-different-screen-sizes
- AI: https://dev.to/googleai/from-prompt-to-deployed-app-in-less-than-2-minutes-dh3

### Synopsis, Synergies, Takeaways (so far)

How do the generated examples differ?
What can we learn about different strategies?
What happens when we merge all branches? But why should we merge broken code that doesn't pass our quality guidelines?

What is left of the different approaches?
What are practices and common pitfalls?
Jetbrains AI's "find problems" action tell us?

TODO: Jetbrains AI usage

Inline chat, which is allowed to modify code directly, is called "generate code ..." as a context action. How to make it apply the code that was previously suggested in a "find problems" context action that generated lengthy answers in the chat window, so verbose that it scrolled down too quickly to read? How to make inline code generator produce the same code quality as the find problems chat action?
TODO

### Synopsis, Synergies, Takeaways (so far)

How do the generated examples differ?
What can we learn about different strategies?
What happens when we merge all branches? But why should we merge broken code that doesn't pass our quality guidelines?

What is left of the different approaches?
What are practices and common pitfalls?
Jetbrains AI's "find problems" action tell us?

### Testing and Linting

- Why did no AI try test-driven development?
- Why didn't Copilot at least setup linters and code style configration?

Copilot: Linters and code style tools (like ESLint and Prettier) are not always included by default in basic project scaffolding, especially when using AI assistants or some quickstart templates. Their setup often requires additional configuration and user preferences (e.g., specific rules, formatting style).

- Can we use AI to add tests retroactively?

#### Jest vs. Vitest

We could use testing framework like Jest or Vitest
and start by writing simple tests for your components or data logic before implementing them.

**Jest** is a mature and comprehensive JavaScript testing framework, originally developed by Facebook, and it is widely adopted, especially in the React community. Jest is said to be heavier, slower, and more opiniated and used to lack support for ECMAScript Modules (ESM), the official, standardized module system for JavaScript, introduced in ES2015 (ES6), using `import` and `export` statements. Node's CommonJS (CJS) module system used `require` and `module.exports`.

Vite's Architecture: Vite is built from the ground up to leverage native ESM. Both Vite and ESM work beautifully with TypeScript. While Cypress's internal architecture historically leaned more towards CommonJS, modern versions of Cypress support both TypeScript and ESM.

**Vitest** is fast, lightweight, simple, and leverages Vite's Hot Module Replacement (HMR). Vitest handles ESM and TypeScript out-of-the-box with no additional configuration, a significant advantage for modern JavaScript projects. Vitest is designed to be highly compatible with Jest's API.

Conclusion: it makes sense to choose Vitest in a modern Vite project.

#### Cypress vs. Playwright

What about end-to-end tests using Cypress?
Cypress is a great choice for end-to-end (E2E) testing in React projects. It allows you to simulate real user interactions and verify that your app works as expected in the browser.

Cypress is highly focused on web application testing and debugging. Cypress tests are written exclusively in JavaScript or TypeScript. Playwright supports all modern browser rendering engines on Windows, Linux, and macOS. Playwright has robust, built-in support for parallel test execution across multiple browsers, contexts, or even worker processes, significantly speeding up test suites. Cypress is renowned for its excellent developer experience. It offers a live, interactive test runner, real-time reloading, automatic waiting, and time-travel debugging.

Conclusion: no need for Playwright unless we need cross-browser testing.

### Stack Decisions Recap

When I had researched suitable, simple charting solutions, ReCharts seemed a clear recommendation. What were possible alternatives?

ReCharts is a component-based charting library built specifically for React and its declarative nature. Built on top of D3.js internally, ReCharts abstracts away the complexities of D3.

#### ReCharts vs. Refine

You absolutely should use Recharts with TypeScript if you're building a React application where type safety, maintainability, and developer experience are important. Recharts provides its own type definitions, no need to install a separate types package. Your IDE will provide correct autocompletion for ReCharts components.

#### ReCharts vs. HighCharts

Recharts and Highcharts follow completely different approaches concerning their syntax and API, driven by their fundamental design philosophies. They are not compatible in terms of direct code reuse or API patterns.

ReCharts components are simple, declarative, and highly composable, allowing you to mix and match different chart elements easily to create custom visualizations.

ReCharts is open-source and completely free to use for any project, commercial or personal, under the MIT license.

HighCharts allows for more customization for highly specialized charts, and it does not depend on React. Due to its vast feature set, Highcharts can have a larger bundle size compared to more focused libraries. Highcharts is not free for commercial use. You need to purchase a commercial license, which can be a significant cost for businesses.

Highcharts provides robust keyboard navigation for charts out-of-the-box when the accessibility module (`accessibility.js`) is enabled. Highcharts automatically adds appropriate ARIA (Accessible Rich Internet Applications) roles and attributes to the SVG elements of the chart. The accessibility module can automatically generate a basic text description of the chart, including its type, axes, and series, which can be modified by developers. Highcharts generally has built-in support for operating system high contrast modes and handles zooming and responsiveness well. Highcharts offers a cutting-edge sonification module ("Audio Charts") that allows users to experience data as sound.

#### ReCharts Performance, Speed, Accessibility, and Cross-Browser Compatibility

Recharts is generally good enough for modern browsers and can achieve WCAG compliance, but with some important caveats and considerations, especially for performance and accessibility. Like any SVG-based charting library, Recharts can face performance bottlenecks when dealing with very large datasets (tens of thousands or hundreds of thousands of data points or more). Prevent unnecessary re-renders of chart components and data transformations and use memoization `React.memo, useMemo` to improve performance. Disabling animations (`isAnimationActive={false}`) can significantly improve performance.  If possible, aggregate data on the server-side before sending it to the frontend. For real-time or frequently updating data, control the update rate using debouncing/throttling.

ReCharts is not fully accessible out-of-the-box! While Recharts provides the building blocks for charts, it does not inherently guarantee full WCAG compliance without additional effort from the developer. Charts are complex visual elements, and making them accessible requires careful consideration beyond just rendering them. Ensure color contrast. Provide a text-based alternative for the chart's content. This might be a simple alt attribute for a static image of the chart (if you're converting it) or, more commonly, a hidden data table. Ensure that interactive elements within your chart (like tooltips, clickable segments) are focusable and operable using only the keyboard (Tab, Enter, Space keys). This often requires custom implementation on top of Recharts' components.

Scalability/Responsiveness: Charts should remain readable and usable when zoomed in (up to 200% without assistive technology, WCAG 1.4.4). `ResponsiveContainer` in Recharts helps with general responsiveness, but text and element sizing within the chart also need to be considered.




## Conclusion

We have verified that ReCharts can be used quickly, and Google AI served as a tutorial replacement, while Copilot wasted useless time.

### AI on AI

Final words and explanations, quoted and praphrased from Google Gemini:

#### Why AI Coding Assistants Struggle

My developer experience with JetBrains AI, Copilot, and Windsurf seems to be very common and highlights the current limitations of AI code assistants, especially when dealing with real-world, complex development scenarios. LLMs are powerful pattern matchers, but they struggle with deep contextual understanding in the way a human developer does. They don't inherently understand business logic, architectural decisions made years ago, or the implicit knowledge of developer teams or communities. Global variables, hooks and actions might be too implicit to understand. Global CSS is notoriously difficult for even humans to manage because changes in one place can have unintended side effects everywhere. An AI sees a CSS rule but doesn't "know" which parts of the HTML it's supposed to affect or what the intended visual outcome is.

Even tools like Windsurf that aim for "project-wide understanding" still rely on techniques like embedding and retrieval that can miss crucial nuances in a messy, older codebase.

Modern TypeScript applications, especially those built with frameworks like React, Angular, or Vue, tend to be more modular, use clear component structures, and follow more consistent patterns (e.g., explicit imports, type definitions). This structure makes it much easier for an AI to parse, understand relationships, and generate coherent code. The code is often "cleaner" and closer to the patterns the AI was heavily trained on.

Copilot and Windsurf generating "faulty code which is hard to fix" is a direct result of overconfidently not knowing what they don't know. The AI might provide a syntactically correct snippet, but it doesn't fit the actual logic, it uses non-existent methods (hallucinations), or it introduces subtle bugs because it misinterpreted the intent or the wider system. Current AI assistants primarily operate on static code. They don't run the code, observe its behavior, or interact with a debugger. They can't see stack traces, variable values at runtime, or how data flows through a live application.

AI models are only as good as the data they're trained on. If the training data contains problematic, outdated, or insecure code, the AI might perpetuate those issues. Public codebases, while vast, also contain a lot of imperfect code.

#### Why Google AI Studio did not Code, but Teach

Google AI Studio can both provide "step-by-step do-it-yourself instructions" and perform "agent-like" code generation. However, both options are offered as different types of tools, both powered by Google's AI, but designed for different tasks:
- Google AI Studio (your prompt) acted as a knowledgeable tutor.
- Project IDX (the dev.to article), now known as Firebase Studio, acted as an agent-like code generator.

Based on the article "From Prompt to Deployed App in Less Than 2 Minutes," Google AI Studio's Code Assistant, powered by Gemini 2.5, outlines a step-by-step plan for designing and developing an AI-enabled application. This plan details the approach, including analyzing concepts, refining input, and outlining API integrations. After this planning phase, the Code Assistant automatically generates a structured web application project and even performs automated error correction without user intervention. This automated generation and error correction aligns with the "agent-like" behavior, where the AI is actively creating and refining the code.

Firebase Studio (formerly Project IDX) is an online integrated development environment (IDE) developed by Google. It's cloud-based and designed to help developers build multiplatform applications with AI assistance. It's built on Visual Studio Code (Code OSS), so it should feel familiar to many developers.

- https://gemini.google.com/ #  (Google Gemini - The Conversational AI)
- https://aistudio.google.com/ # (Google AI Studio - The Prompt Engineering and Model Prototyping Platform)
- https://studio.firebase.google.com (IDX or Firebase Studio - The AI-Powered Cloud IDE)

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
