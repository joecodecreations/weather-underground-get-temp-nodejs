# Weather-underground-get-temp-nodejs controller
## Getting Started
Download files to project directory


In the terminal or command line navigate to the directory

```
cd ./path/to/directory
```

Install dependencies
```
NPM install
```

## How to use
**Update API Key**

Head over to weatherunderground.com and get an API key to use. Update the api in ./controllers/weather.js

Update location preference and save.

run in command prompt by typing

```
node index.js
```

or simply

```
node .
````

## Additions

This is only a piece of this code. Since there are a limited amount of free calls per day through the API I would store these values in a mongodb using mongoose every 3 minutes and then return the value from the database each time the user would visit the website.


If that code interest you, let me know and I will add it. 



## Authors
**Joseph Sanchez** [Github](https://github.com/joecodecreations)
