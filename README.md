# Next Clerk Mongo Template

This is a template for a Next Js application with Clerk authentication and MongoDB and Typescript.
Along with it, it includes Shadcn usage as well 
(no need to bunx shadcn init anymore LOL)


## Features

- Clerk Auth
- MongoDB
- Middeware
- Error handling
- Typesafe

## Installation

1. Clone the repository `git clone https://github.com/subhadeeproy3902/next-clerk-mongo-template.git` or download the zip file.
2. Open the project in your favorite code editor.
3. Navigate to the project directory `cd next-clerk-mongo-template`.
4. Create a `.env` file in the frontend directory and add the following environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= <Your Clerk Publishable Key>

CLERK_SECRET_KEY= <Your Clerk Secret Key>

MONGO_URI= <Your MongoDB connection string>

WEBHOOK_SECRET= <Your Webhook secret>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
<b>NOTE</b> : Create then get the Webhook secret from Clerk Dashboad. For more information. Read [Clerk Webhook Docs](https://clerk.com/docs/integrations/webhooks/overview)
Also do select `user` in the filter box

![alt text](https://i.postimg.cc/SKQDQTLN/image.png)

4. Start the development server `npm run dev` or `yarn dev` or `pnpm dev` or `bun dev`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Working

1. The user can sign up with email and password or with Google or with any other auth providers as per your clerk setup. The Credentials are stored in Clerk and the user data is stored in MongoDB.

3. The user will be redirected to the respective dashboard page.

4. The user can sign out from the dashboard page and will be redirected to the home page (`/`).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Where to Contact

- [Subhadeep Roy](https://www.linkedin.com/in/subhadeeproy3902/)

## Support

If you like the project, give a star ⭐ to the repository and share it with others. Also you can use this as a template too for your works as well
