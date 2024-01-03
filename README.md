# Weather or Not
This was a group project. We created an app where you can input a city or town anywhere in the world and it will give you an hourly breakdown of the weather. We used this data to determine what you would need to wear or take with you when you leave the house for the day. We also used HighChart graphs to show data and Leaflet maps to see the location the user selected.


## The Project
Although I have done a lot of paired programming, this was my first group project. I was really happy with how we managed our first time working on one repo, and how we were able to divide the project into areas that could be worked on solely or paired. We would come together as a full group for our merges at the end of each day, and think this really helped us understand how to work better with GitHub. I'm happy with the overall look of the website - although it can be hard to find places where it's snowing to see our little penguin.


## What would I do differently or like to keep working on
- I think that the aesthetic of the page is really nice and stands out for a weather app, but in retrospect having a green colour scheme is not the most accessible. With more time, I would like to review the colour scheme to keep a similar feel but ensure accessibility for all users.
- The key for the project was altered to stick when open at the end of the project, so when the page scrolls down the key scrolls too. However, it scrolls behind or on top of some elements and I would like to fix this.
- I very recently found a bug relating to the number of days rendering and I intend to work on a fix for this in the coming weeks.

## Project screenshots
<figure>
  <img width="300" alt="Homepage" src="https://github.com/frasey/Weather_project/assets/129194569/47840f3f-386d-4b41-a8c8-b0351e358988">
  <figcaption>Hoempage</figcaption>
</figure>

## Prerequisites 
```
Node
API key
```
​
## API key
Get an API key from https://www.weatherapi.com. 
Add a .env file in the root folder with the following line:

'VITE_REACT_APP_API_KEY=< your_key >'
​
## Starting    
​
In folder, run:
```
npm i 
npm run dev 
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
