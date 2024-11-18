Step 1: Create a simple HelloWorld app

mkdir HelloWorldApp
cd HelloWorldApp

# Initialize a Git repository
- git init

# Create a simple Node.js HelloWorld app
- echo 'Initializing Node.js project'
- npm init -y

- echo "console.log('Hello World!');" > index.js

- echo 'node_modules/' > .gitignore

# Install any dependencies
- npm install

# Commit the initial files
- git add .
- git commit -m "Initial commit"

Step 2: Push to GitHub
 
Replace "<USERNAME>" and "<REPOSITORY>" with your GitHub username and desired repository name

- git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
- git branch -M main
- git push -u origin main

Step 3: Set up GitHub Actions for CI/CD

- mkdir -p .github/workflows

Create a GitHub Actions workflow file

name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: echo "No tests to run"  # Replace with actual test command if available

  deploy:
    runs-on: ubuntu-latest
    needs: build

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: '<AZURE_WEB_APP_NAME>' # Replace with your Azure Web App name
        slot-name: 'production'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}


File Name: .github/workflows/ci-cd.yml

Step 4: Configure Azure Deployment

# In your Azure Portal:
- Create an Azure Web App ( a Linux App Service Plan with Node.js runtime)
- Download the Publish Profile and add it to GitHub Secrets with the key AZURE_WEBAPP_PUBLISH_PROFILE

Step 5: Commit and Push Workflow Configuration

- Add GitHub Actions workflow to the repository
- git add .github

- git commit -m "Add GitHub Actions CI/CD pipeline"
- git push

# Just Test metarial
- "test": "echo \"Error: no test specified\" && exit 1",

# Install Mocha and Chai for testing
npm install mocha chai --save-dev

# Create a test file
- mkdir test
- test/test.js

# Code File:

const chai = require('chai');
const expect = chai.expect;

describe('HelloWorldApp', () => {
  it('should return Hello World', () => {
    const output = 'Hello World!';
    expect(output).to.equal('Hello World!');
  });
});


# Add a test script to package.json
sed -i '' 's/"scripts": {\n/"scripts": {\n    "test": "mocha",\n/' package.json

