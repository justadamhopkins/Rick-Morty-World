## Running the project

First, install the node modules

```bash
yarn
```

Then, run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Overview

This project was built using NextJS, Typescript and CSS-IN-JS. I used Jest and React testing library for unit testing. Finally, the Atomic design principle design pattern was followed when building out UI components. I also included eslint, prettier and pre commit hooks for linting.

## Whats done

- Two custom rest api endpoints developed following the types found in the boilerplate
  - One api fetches the core character information for the homepage.
  - One api fetches the single character information including origin, location and episode info.
- Homepage UI complete
- Character page UI part complete.
- Unit tests done for all components.
- Path aliases implemented using Typescript.
- Build pipeline implemented using Vercel. The mini app can be found hosted [here](https://rick-morty-world.vercel.app).
- Folder structure fleshed out to give you an idea as to how i would structure an app.

## What i would do to finish the app

- Finish out UI components for characters page.
- Add integration tests for my custom api endpoints.
- Add Cypress E2E tests for pages and Cypress visual regression tests for pages.
- Improve and flesh out a full design system using css variables.
- Update the characters api endpoint to consume a query param name to fetch either Rick or Morty characters.
- Add more complex Framer motion animations using variants. Route transitions, staggered children for homepage etc.
- Implement a React context for storing mass character list information for Rick and Morty. This could fetch all alive rick characters on the server and then in background on the client we could fetch Morty. This would allow us to transition between character lists on home page using a combination of context and local state in components creating a smoother experience for the user.
