# Squid App - React.js

This project was completed by the below contributors for Ziroh Labs under the mentorship of Lengdon Baruah. [Link](https://squid-app-yfz8f.ondigitalocean.app/).

## Contributors: (Amity University Kolkata)

Ananya Malay Kumar Roy | B.Tech (CSE)
Anuj Kumar Pandey | B.Tech (CSE)
Shreya Dayma | B.Tech (CSE)
Hitaishi Roy | B.Tech (AI)
Abhimanyu Bhowmik | B.Tech (AI)


### About the App

This Digital Ocean Cloud File System API was build using React JS and DigitalOcean Spaces. It in a front end web application that has the following functionalities: Upload, Delete, Download and Share

#### Upload:
This function is to upload a file to your digital ocean account.

#### Download:
This function is used to download and previously uploaded file from digital ocean account.

#### Delete:
This function helps to delete any file from digital ocean account.

#### Share:
Share function helps user to share any file with others.

## STEPS to use the project:
1. Create a DigitalOcean account
2. Create your own space from the 'Spaces' option in the left hand tab
3. From the 'API' section in the left hand tab -> go to the OAuth application tab, create a registered OAuth application
4. View the contents, to find your "Client ID" and "Client Secret"

      ### AUTHORIZATION:
      1. Click on the 'Authenticate' button -> go to the authentication page where you have to Sign in to your Digital Ocean account,
          to get your 'Client ID' and 'Redirect URL'
      2. To get the 'Access Token' click on the'Get Token' button on the UI
      
      ### DELETING A FILE:
      1. Write the name of the file in the Text Box which you wish to delete
      2. Click on the 'Delete' button on the UI
      3. If there comes a 'Success' message in the console on the right hand tab -> the file has been successfully deleted from the DIgitalOcean spaces

      ### UPLOAD:
      1. Click on the 'Upload' button in the UI
      2. 'Example.txt' file shall be uploaded to your DigitalOcean spaces
      3. If there comes a 'Success' message in the console on the right hand tab ->the file has been successfully uploaded

      ### DOWNLOAD:
      1. Write the name of the file in the Text Box which you wish to download
      2. Click on the 'Download' button on the UI
      3. 'Allow' permission asked for in the pop-up message

      ### SHARE:
      1. Write the name of the file in the Text Box which you wish to share
      2. Click on the 'Share' button on the UI
      3. The link of the mentioned file will be copied to your clipboard
      4. Yo can see a message : "Copied to Clipboard"

      ### REFRESH TOKEN GENERATION:
      This token is needed in case the access token is expired.
      1. Click on the'Refresh Token' button in the UI
      2. New token will be updated via React-hook in all the functions of the app.



