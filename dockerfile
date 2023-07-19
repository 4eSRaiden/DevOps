# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /devops

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.js (or your main file) when the container launches
CMD [ "node", "index.js" ]
