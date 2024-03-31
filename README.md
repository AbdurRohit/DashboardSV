# Admin dashboard for News


# Installation guide

In the project directory, you can run:
### `npm install`

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

# Dashboard 

## Activity: 
Provides quick access to key
metrics and functionalities of the admin panel. This could include user activity, content statistics, and quick links to manage news feeds, view performance reports,top performed news, top shared news, top commented news, etc.
![Main Page](./images/image101.png)

## Trending News
Top 3 trending news. Comparing the views count.
![alt text](./images/Trending.png)

## Add News
Add title, Content, ./images/image and Video for new news.
![alt text](./images/image.png)

### Mobile preview
A mobile preview screen, enabling
administrators/sub-editors/content writers to see how the news feed will appear on mobile devices before publishing.
![alt text](./images/image-1.png)

## News report
A bar graph ploted with detailed analysis with views as respect to the news catagory.
![alt text](./images/image-2.png)

## Manage content 
All uploaded news with options to view analytics, edit, and delete the news.

### News analytics
![alt text](./images/image-3.png)

### Edit uploaded news
![alt text](./images/image-5.png)

# Code structure
Used Context API to pass the news data among all the components.
![alt text](./images/Code1.png)

Seperate components and pages. Using `useContext` inside child component to recive the array and passing `updateArray` functions to update the array as needed.
![alt text](./images/Code2.png)

# API call
Inside the App.js file cahange the rows data array with a `fetch API` call and from backend and change the value parameters. 


