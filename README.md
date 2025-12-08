# React + TypeScript 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

=======

# LinkPack - URL Shortener Service

A robust and efficient URL shortener service built with Java and Spring Boot. LinkPack allows you to transform long URLs into short, manageable links while providing comprehensive analytics.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Click Analytics**: Track total clicks for each shortened link
- **Timestamps**: Monitor creation time and access times
- **RESTful API**: Clean and intuitive API endpoints
- **Spring Boot**: Built with Java and Spring Boot framework
- **Data Persistence**: Secure storage of URLs and analytics data

## Tech Stack

- **Backend**: Java, Spring Boot
- **Database**: (Configure your preferred database)
- **Build Tool**: Maven
- **API Documentation**: Spring REST Docs/Swagger

## API Endpoints

### Shorten URL

```
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://example.com/very-long-url-path"
}
```

Response:

```json
{
  "shortUrl": "https://yourdomain.com/abc123",
  "originalUrl": "https://example.com/very-long-url-path",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Get URL Analytics

```
GET /api/analytics/{shortCode}
```

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6+
- Your preferred database (H2, MySQL, PostgreSQL, etc.)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/linkpack.git
cd linkpack
```

2. Configure database in `application.properties`

```properties
spring.datasource.url=your_database_url
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Build the application

```bash
mvn clean install
```

4. Run the application

```bash
mvn spring-boot:run
```

## Usage

1. Start the application
2. Use the `/api/shorten` endpoint to create short URLs
3. Share the generated short URL
4. Monitor clicks and analytics through `/api/analytics/{shortCode}`

