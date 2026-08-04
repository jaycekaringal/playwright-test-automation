# Playwright TypeScript Automation

This repository contains Playwright + TypeScript automation for the Practice Software Testing demo application.

## Documentation

- Practice Software Testing documentation: https://testsmith-io.github.io/practice-software-testing/#/
- Playwright documentation: https://playwright.dev/docs/intro

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Chromium:
   ```bash
   npx playwright install chromium
   ```
3. Create a local `.env` file from the example:
   ```bash
   copy .env.example .env
   ```
   Use the documented default accounts from the Practice Software Testing documentation.

## Environment variables

The repository uses `.env` for local credentials. The file is intentionally ignored by Git and should never be committed.

For GitHub, prefer GitHub Actions secrets or repository/environment secrets instead of storing the values in the repository. This keeps the credentials hidden and avoids storing them in plain text.

## Run tests

```bash
npm test
```

```bash
npm run test:headed
```

## Project structure

- `tests/` contains Playwright specs
- `tests/steps/` contains BDD-style step definitions
- `tests/pages/` contains object-oriented page objects
- `tests/features/` contains feature files
