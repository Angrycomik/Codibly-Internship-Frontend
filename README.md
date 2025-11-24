# Codibly Internship Task - Frontend

This is a Next.js application made as a task for Codibly Internship 2025. It serves as the UI for visualizing energy data and optimal charging window, obtained from API.

## Hosting

The application is deployed on Vercel.

**App**: https://codibly-internship-frontend.vercel.app/

*It will display loading window while backend on Render is waking up (1-2 min)*

## Overview

The application interacts with the backend API to provide two main features:

Energy Mix Dashboard: Visualizes the energy generation mix for the current day and upcoming days using interactive Pie Charts.

Optimal Charging Window Calculator: Allows users to input a duration (1-6 hours) to calculate the best time window for charging.

## Tech Stack

- **Next.js**
- **React**
- **Typescript**
- **MUI**
- **Jest**

## Running

To run the application locally:

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:3000`.

## Testing

The project includes unit and integration tests using Jest Testing Library.

To run the tests:

```bash
npm run test
```
