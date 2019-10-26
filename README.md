# Yelp Pages

Author: Mikhail Goudz

A project utilizing the Yelp API allowing the users to search for businesses with 3 of the following facets (term, location, and price). The search then routes the user to a details page showing helpful information about the business such as the Yelp rating, phone number, etc.. 
User can also see the business loaction on Google Maps (done using the Google Maps API).
User also has the mechanism of adding and removing Yelp pages to a favorites page.

## Time Spent

* class time and rewatching lecture video uploaded by the instructer : 8 Hours
* coding required stories : 4-5 Hours
* Optionals and extras : 1 Hour

## Gif Walk Through

<a href = "https://user-images.githubusercontent.com/43256526/67610098-6a50e000-f745-11e9-8103-78fcd7171288.gif"><img src="https://user-images.githubusercontent.com/43256526/67610098-6a50e000-f745-11e9-8103-78fcd7171288.gif"/></a>

## Adding API Keys

If you clone this project and want to run it, it is required of you too create 2 custom files in the config folder,
firebase.js aswell as googlemaps.js and the following code.

exports.config = {

    firebase: {
        apiKey: "API KEY",
        authDomain: "ember-yelp-project.firebaseapp.com",
        databaseURL: "https://ember-yelp-project.firebaseio.com",
        projectId: "ember-yelp-project",
        storageBucket: "ember-yelp-project.appspot.com",
        messagingSenderId: "77004909010",
        appId: "1:77004909010:web:1b58adcb34871a6358400b"
      }
}



exports.config ={


    maps: {
        
            libraries: ['places', 'geometry'],
            key: "API KEY", // Using .env files in this example
            // client: 'gme-your-unique-google-client-id',
            // channel: 'my-google-map-api-channel',
            //AIzaSyChSz5VEoCjju4Fk5zX8P45tE7yhaKuvUw
            version: '3.38',
            language: 'us',
            protocol: 'https'
          
    }
}







## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-apollo-example`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
