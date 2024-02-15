# Use an official Apache image as a base image
FROM httpd:2.4-alpine

# Set the working directory inside the container
WORKDIR /usr/local/apache2/htdocs

# Copy the built frontend files into the default Apache serving directory
COPY build/ .

# Expose the port that the Apache server will run on (port 80 by default)
EXPOSE 80
