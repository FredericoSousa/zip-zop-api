# Zip Zop API

### API built in [Node.js](https://nodejs.org/) to send Whatsapp messages

## Getting Started

Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install the dependecies.

```bash
npm intall
```

or

```bash
yarn
```

## Setting the .env file

If you want to run the api on a port other than 3000, set .env file like this:

```env
#PORTA DA API
APP_PORT = THE_PORT_YOU_WANT

#URL DO MERCADO LIVRE
APP_URL = http://THE_API_URL
```

## Runnig the API

To run the api you must run the start script usin [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

```bash
npm start
```

or

```bash
yarn start
```

## Using the API

To send a message make a **POST** request for the **/messages** route with a body like this:

```json
{
	"to": "whatsapp_phone_number",
	"message": "Hello World!"
}
```

Response example:

```json
{
	"sent": true
}
```

# Author

### [Frederico Sousa](http://github.com/fredericosousa)