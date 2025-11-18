# PowerSemiotics

Power Semiotics Official WebSite

## Development

### Formatting and Linting

Install dependencies:

```bash
npm install
```

Format HTML and JavaScript files:

```bash
npm run format
```

Lint JavaScript files:

```bash
npm run lint
```

### Run Locally

Launch a simple static server to preview the site:

```bash
npm start
```

Then open [http://localhost:8080/neurologia-autoevaluacion.html](http://localhost:8080/neurologia-autoevaluacion.html) or [http://localhost:8080/gastroenterologia-autoevaluacion.html](http://localhost:8080/gastroenterologia-autoevaluacion.html) in your browser.

### Variables de entorno

1. Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

2. Edita `.env` y asigna tu clave de OpenAI:

```bash
OPENAI_API_KEY=tu_clave_openai
```

El servidor leerá esta clave al iniciarse para comunicarse con la API de OpenAI.

### Naming Conventions

All directories and files use **kebab-case** (lowercase words separated by hyphens).
This keeps URLs consistent and easy to read.

## Merge guidance for neurologia exam page
To avoid manual merge decisions when syncing changes to `neurologia/examen-neurologico-parte-2.html` and its supporting package manifests, the repository now ships with a `.gitattributes` file that forces Git to keep the version from the feature branch. If you intentionally need the other side of the merge, run `git checkout --theirs` (or `--ours`) manually before committing.
