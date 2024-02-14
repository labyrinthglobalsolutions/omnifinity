# Use an official Node.js image as a base image
FROM node:20-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy all project files to the working directory
COPY . .

# Build your frontend application (adjust the build command based on your frontend setup)
RUN npm run build

# Expose the port that the app will run on (use the port your app is configured to run on)
EXPOSE 3006

# Command to run the application
CMD ["npm", "start"]
