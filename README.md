# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on the device's screen size
- See hover states for all interactive elements
- View an IP address's location and basic info on the map
- Search for any IP address or domain and see its location and key details

### Screenshot

![screenshot](/screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/guilherme-filipini/ip-address-tracker)
- Live Site URL: [Live Demo](https://guilherme-filipini.github.io/ip-address-tracker)

## My process

### Built with

- Semantic HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Leaflet.js
- Mobile-first workflow
- API: [IP Geolocation API by IPify](https://geo.ipify.org/)

### What I learned

- How to consume public APIs with dynamic input using `fetch`
- How to render maps with Leaflet.js
- DOM manipulation based on API response
- Handling element layering using `z-index` and `position` in a responsive layout

```js
fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
  .then(response => response.json())
  .then(data => {
    showMap(data.location.lat, data.location.lng);
  });
```

### Continued development

- Implement automatic IP detection on initial page load
- Improve accessibility (ARIA labels, keyboard navigation)
- Adjust layout for very small screen sizes
- Add visual feedback for invalid IP input

### Useful resources

- [Leaflet.js Docs](https://leafletjs.com/) – for interactive map rendering
- [IPify Geolocation API](https://geo.ipify.org/) – to get IP/location data
- [Bootstrap Docs](https://getbootstrap.com/) – for responsive layout

## Author

- GitHub – [@guilherme-filipini](https://github.com/guilherme-filipini)
- Frontend Mentor – [@guilherme-filipini](https://www.frontendmentor.io/profile/guilherme-filipini)

## Acknowledgments

This project was built as part of a Frontend Mentor challenge to improve API integration and JavaScript mapping library skills.
