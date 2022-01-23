# Calendar App- Palash

Watch Live at : [Palash - Calendar](https://calendar-palash.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/c98c9691-d038-4776-9c25-d4775e0c90b6/deploy-status)](https://app.netlify.com/sites/calendar-palash/deploys)
This is a sample app that displays a calendar which is similar in style to Apple style calendar building with the following technology stack:

- Typescript for type checking
- Angular 12 for Front-end
- Scss for styling and animations

## Highlights

- The application follows the route of calendar/[year] and displays the year view for the passed year. If an invalid year is passed, the application renders the result for current year.
- Wrong route is handled through a 404 page.
- A date change component is developed which allows to move to next / previous and current date.
- The style is responsive and can be viewed on different resolutions.

## Views

Two views have been developed :

- Years View - Displays months / dates for a year and for next ~2 years \_ _(configurable)_ \_
- Month View - Displays one month in a year

## Screenshots

![](/doc/ui/desktop-year.png)
![](/doc/ui/desktop-month.png)
![](/doc/ui/mobile-year.png)
![](/doc/ui/mobile-month.png)

## Suggested Improvements

- Days and Weeks view : Not completed due to lack of time, can be progressed further
- Components Enhancements : The date change selector can be moved to a seprate component
- Unit / Cross Browser Testing : Test cases can be matured with time

## How to setup

```
Step : 1 - Clone the repository and change directory to root (Node >=10 should be installed)
Step : 2 - Install node modules using npm i or yarn install
Step : 3 - Serve the app locally using npm start or yarn start
Step : 4 - Pass the year in the route calendar/[year] for the year you want to view the calendar for
```
