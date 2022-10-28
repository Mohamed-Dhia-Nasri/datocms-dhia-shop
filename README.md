# Getting Started

This project is created to demonstrate how to create a React ecommerce using Snipcart and DatoCMS.

Read the full tutorial on [DatoCMS blog](https://www.datocms.com/blog/react-ecommerce-tutorial)

To see the fully working example you need to register on Snipcart and get your Snipcart public API key.

## Deploy the demo with DatoCMS

You can install this demo right away by clicking on this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/ecommerce-react-snipcart:main)

The wizard will create a new DatoCMS project, will clone the demo repository on your GitHub, and will deploy it on Netlify or Vercel.

### Deploying to Netlify

For the demo to work you need to go in your Netlify project > settings > build & deploy > environment variables, and create a new env variable called "REACT_APP_SNIPCART_API_KEY". Paste in the value field the key you find in your Snipcart project > account settings > API keys > public API key.

### Deploying to Vercel

For the demo to work you need to go in your Vercel project > settings > environment variables, and create a new variable called "REACT_APP_SNIPCART_API_KEY". Paste in the value field the key you find in your Snipcart project > account settings > API keys > public API key.

# Development

## Install from Github

[![Clone DatoCMS project](https://dashboard.datocms.com/clone/button.svg)](https://dashboard.datocms.com/deploy?repo=https%3A%2F%2Fgithub.com%2Fdatocms%2Fecommerce-demo-react-snipcart)

## Register on Snipcart

Register on Snipcart and provide your REACT_APP_SNIPCART_API_KEY in your `.env.local` file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
