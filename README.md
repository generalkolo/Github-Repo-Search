# Github Repo Search

Github Repo search is a React native application that enables users to search for top repositories on github using a keyword, they can then click on any repository of their choice to see more details about the repository. Users can then visit the repository github link or the owners github link also.

## Usage.

1. Launch Application

2. Search Repositories based on keyword

- Enter the key word you intend to search popular repositories (e.g Android, VS Code libraries, C#)
- Click on Search button.
  > NB: The `search` button would remain inactive till the searchy field is filled.

![search repo screen](./images/landing_page.jpg 'Search Page')

3. View Repository details.

- Once the results are returned from the search, a list of repositories would be displayed showing minial details of the repository mainly (an Avatar, Name, Date Created, Description, Language, )

![search results screen](./images/search_results.jpg 'Search results Page')

3. View Full Repositorhy details.

- Click on any of the interested repositories.
- The Repository full details would be displayed on the next screen as seen in the image below.

> NB: You can also click the two github repo links to open up the links on your default browser.

![repository details screen](./images/repo_details.jpg 'repository details Page')

## Project Setup

> NB: You must have expo installed on your system to be able to use this application and the expo client installed on either an IOS or Android device but in the event of neither you can run the application on an android emulator (e.g Genymotion) or IOS simulator.

- clone the Repository
- install the dependencies - `npm install` or `yarn install`
- run application - `expo start`
