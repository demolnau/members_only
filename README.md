# Members Only

In this Odin Project Assignment, we are tasked with creating an exclusive clubhouse for members that can write anonymous posts. Within the clubhouse, members can see the author of the post, but outside the club someone cannot see the author.

## Getting Started

### Skeleton app

First, if you have not installed express yet, install it using the following code:

```
npm install express-generator -g
```

Then create a skeleton app for the members only suing the express app by running the code below:

```
express members_only --view=pug
cd members_only
npm install
npm install --save-dev nodemon mongoose dotenv express-async-handler luxon
```

### Models

To create the models that we will need for this assignment:

```
mkdir models/
touch models/user.js
touch models/message.js
```

### Controllers

To create the controllers that we will use for this assignment:

```
mkdir controllers/
touch controllers/userController.js
touch controllers/messageController.js
```

change the scripts section of the package.json file to the following:

```
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "SET DEBUG=members_only:* & npm run devstart"
  }
```

then to run the following line:

```
npm run serverstart
```
