# Use an official Node.js image as a base image
FROM node:20-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy all project files to the working directory
COPY . .

# Expose the port that the app will run on (use the port your app is configured to run on)
EXPOSE 4000

# Command to run the application
CMD ["node", "server.js"]
