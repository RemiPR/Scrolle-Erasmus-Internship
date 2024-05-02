# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /users/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY src/ .

# Expose the port your application uses
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
