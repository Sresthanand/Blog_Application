Create an env file like env.example to set up environment variables. You can include variables like MONGOURI2 for the MongoDB URI, EMAIL and EMAIL_PASS for email configuration, JWT_EXPIRE for JWT token expiration time, and SERVER_URL for the hosted address of your frontend server.

Set up the MongoDB URI in the utils/db.js file. You can use the MONGOURI2 variable from the env.example file or directly put the link of your MongoDB cluster.

Start the server by running node server.js in the root application directory. This will start the server and establish a connection to the MongoDB database.

Open a new terminal and navigate to the client directory using the cd client command.

Start the React application by running npm start. This will load the React app and open it in your default web browser.

By following these steps, you should be able to start the server and the React application successfully. Make sure to set up the environment variables correctly and configure the MongoDB URI according to your specific setup.