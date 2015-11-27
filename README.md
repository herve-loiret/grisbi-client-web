# grisbi-client-web

**This project is in early development !**

## Description
Grisbi-Client-Web is the client part of [grisbi-server-java](https://github.com/herve-loiret/grisbi-server-java).

## Features
- display the synthesis page
- list all accounts
- display all transactions of an account
- display all sub-transaction of an account
- auto-completion of categories
- auto-completion of parties


## Screeshot

Here are some screenshots of the early version :

![screenshot home page](https://github.com/herve-loiret/grisbi-client-web/blob/master/screenshot/ss_synthesis.png?raw=true "Home page")
![screenshot accounts](https://github.com/herve-loiret/grisbi-client-web/blob/master/screenshot/ss_account_list.png?raw=true "Accounts list")
![screenshot account page](https://github.com/herve-loiret/grisbi-client-web/blob/master/screenshot/ss_porte_monnaie.png?raw=true "Account page")

## Roadmap
Theses features are not implemented yet :
- save new transaction
- make an authentication system
- manage categories
- manages parties

## Build & development

### Prerequies 

Install Nodejs : https://nodejs.org/en/

Install grunt-cli :
`sudo npm install -g grunt-cli`
Install bower : 
`npm install -g bower`

### Install dependencies 

`npm install`

`npm install phantomjs`

`bower install`

`grunt serve` 

## Testing

Running `grunt test` will run the unit tests with karma.
