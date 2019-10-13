## Intallation


Install Homebrew:

past this on your terminal window: 

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install mongodb:

paste this on your terminal window: 

`brew install mongodb`

Install Robo-3t

`brew cask install robo-3t`

Create a folder named `uploads` on the project root folder

Run `chmod 777 uploads` to make that folder readable and writable.

Run `yarn install` to install all dependencies.

Start mongo using:

`mongod --config /usr/local/etc/mongod.conf`

(after the last step, open a new terminal window, as the mongodb process will be running on the last window)

Open the Robo-3T app. Create a new connection (can use default values). Select the created connection and press the "Connect" button.

On the new terminal window run `yarn build`.

Finally run `node server.js`, open a browser window and go to http://localhost:3000/

## Running the Photo Album app

Clicking `All Photos` will show all the folders that have been uploaded to the gallery, along with their comments.

Clicking `Upload a Photo` on the nav bar will take you to a different page, where the user can first insert a comment, and then choose the file to be uploaded.


