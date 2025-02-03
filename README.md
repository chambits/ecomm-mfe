# simple-ecomm-mfe

Micro-frontend architecture using React and Webpack Module Federation

## Setup

1. Clone the repository
2. Run `npm install` in each folder
3. Run `npm run start` in each folder

open port localhost:8080 in browser and you should see the main page

## Notes

- The main page is the host application
- The products page and cart page are micro frontends
- The products page and cart page are completely independent on port 8001 and 8002
- The products page and cart page are completely decoupled from the main page
