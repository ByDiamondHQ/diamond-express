# Diamond Express

This is a node API built on top of Express.js that has a bunch of features on top to make building API's with node *fun* and *easy*.

## Features  

- ``config.ts`` is validated on startup to ensure you're not running the app with any missing variables
- Models are automatically loaded
- ``services/librarian.ts`` allows for full control of Records in a MongoDB database
- Uses a passwordless "magic email" authentication system
- Written in Typescript

## Setup

Ensure you have a ``PORT`` and ``DB_URL`` in ``app/config.ts`` otherwise the server will throw an error on startup.

```bash
npm install && npm run dev 
```

## Requirements

Node  
MongoDB