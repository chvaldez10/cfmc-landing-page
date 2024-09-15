# Calgary Filipino Methodist Church Landing Page 🖥️

This is the web project for the Calgary Filipino Methodist Church (CFMC) Landing Page, utilizing Next.js 14, Supabase, TypeScript, and Tailwind CSS.

## Deploy on Vercel 🌐

A beta version of the landing page is deployed on Vercel at [CFMC Landing Page](https://cfmc-web-app.vercel.app/). You can access the release notes [here](https://cfmc-web-app.vercel.app/resources/release-notes).

## Getting Started 🚀

To begin, clone the repository and change the directory to the web-app folder:

```bash
git clone https://github.com/chvaldez10/cfmc-landing-page.git
cd web-app
```

Install all node modules:

```bash
npm install
```

Create an `.env.local` file under the frontend project directory with the following content:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Run the development server:

```bash
npm run dev
```

Build for production environment:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

## Docker 🐳

To run the Docker container:

```bash
docker compose up --build
```

## Learn More 📚

Visit our Facebook page: [CFMC Facebook](https://www.facebook.com/calgaryfilipino.methodistchurch)

## Contribute 💻

If you would like to contribute, please branch off the main branch using a common naming convention. For example, use "feat/add-footer" for feature additions.
