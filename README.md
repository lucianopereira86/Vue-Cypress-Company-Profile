![titulo](/docs/titulo.JPG)

# Vue Cypress Company Profile

Example of a company website built with Vue and unit tests with Cypress

## Technologies:

- [Vue](https://vuejs.org/)
- [Cypress](https://www.cypress.io/)
- [Vue-ApexCharts](https://apexcharts.com/docs/vue-charts/)
- [Vuelidate](https://github.com/vuelidate/vuelidate)
- [Vuex](https://vuex.vuejs.org/)
- [vue-router](https://router.vuejs.org/)
- [vue-the-mask](https://github.com/vuejs-tips/vue-the-mask)

## Objective

This project shows a simple flux of pages containing informations about a fictional company and how to make unit tests by using Cypress.

## How to run this project

Install the dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

Access the website at:

```batch
http://localhost:8080/
```

The nav bar and the footer are just empty backgrounds. There's only content in the Company Data and Company Page screens.

![vue01](/docs/vue01.JPG)

The Company Data screen shows a form with the fields: Company Name, Company Spend, Company Spend Ability Min, Company Spend Ability Max and Notes.

![vue02](/docs/vue02.JPG)

By clicking on the Notes field, a modal shows up allowing for the user to type data and to add it to the Notes field content.

![vue03](/docs/vue03.JPG)

The Company Page screen shows multiple data about the company, such as summary, activities, similar companies and spend history.  
All the data are contained inside Vuex store. The chart is created with the ApexCharts plugin.

![vue04](/docs/vue04.JPG)

## Cypress

Now let's test our application automatically.
Inside the "/cypress/integration" folder are the test scripts to be executed.
While keeping the application running, open the Cypress Browser with this command in another terminal:

```batch
npm run cypress
```

It will list the test files inside the "/cypress/integration" folder.

![cypress01](/docs/cypress01.JPG)

Click on "companydata.spec.js" option to open the test window and wait for the result. No interation will be needed.

![cypress02](/docs/cypress02.JPG)