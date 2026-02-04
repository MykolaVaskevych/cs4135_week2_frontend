# Frontend

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)
[![CI](https://github.com/MykolaVaskevych/cs4135_week2_frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/MykolaVaskevych/cs4135_week2_frontend/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/node-22-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-7-purple.svg)](https://vite.dev/)

React + Vite frontend with Playwright E2E tests.

## Quick Start

```bash
npm install
npm run dev
```

Runs on http://localhost:5173

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test:e2e` | Run Playwright E2E tests |

## Pre-commit Hooks

This project uses Husky + lint-staged. On commit, ESLint runs with `--fix` on staged JS/TS files.

Hooks install automatically via `npm install` (prepare script).

## E2E Trace Viewer

Upload Playwright trace files (.zip) to view detailed test execution traces:

https://trace.playwright.dev/
