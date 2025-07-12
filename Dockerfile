# Step 1: Use an official Node.js base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN yarn

# Step 4: Copy all source code into the container
COPY . .

# Step 5: Expose the port your app runs on
EXPOSE 3000

# Step 6: Define the command to run your app
CMD ["yarn", "dev"]
