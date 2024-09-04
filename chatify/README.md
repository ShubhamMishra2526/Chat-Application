This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

"Dependencies used";

"dependencies": {
"@headlessui/react": "^2.1.3",
"@next-auth/prisma-adapter": "^1.0.7",
"@prisma/client": "^5.19.0",
"@tailwindcss/forms": "^0.5.7",
"axios": "^1.7.5",
"bcrypt": "^5.1.1",
"clsx": "^2.1.1",
"date-fns": "^3.6.0",
"lodash": "^4.17.21",
"next": "^14.2.7",
"next-auth": "^4.24.7",
"next-cloudinary": "^6.11.0",
"next-superjson-plugin": "^0.6.3",
"pusher": "^5.2.0",
"pusher-js": "^8.4.0-rc2",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-hook-form": "^7.53.0",
"react-hot-toast": "^2.4.1",
"react-icons": "^5.3.0",
"react-select": "^5.8.0",
"react-spinners": "^0.14.1",
"zustand": "^4.5.5"
},
"devDependencies": {
"@types/bcrypt": "^5.0.2",
"@types/lodash": "^4.17.7",
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"eslint": "^8",
"eslint-config-next": "14.2.7",
"postcss": "^8",
"prisma": "^5.19.0",
"tailwindcss": "^3.4.1",
"typescript": "^5"
}

For project setup create a ".env" file and make sure to add these variables and their values :-

DATABASE_URL= connect your mongodb atlas cluster
NEXTAUTH_SECRET="NEXTAUTH_SECRET"

GITHUB_ID= enter your github id
GITHUB_SECRET= enter your github secret key

GOOGLE_CLIENT_ID= go to google cloud create an account and find the id
GOOGLE_CLIENT_SECRET= enter secret key

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY= create a pusher account and enter key and app id
PUSHER_APP_ID=
