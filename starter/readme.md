# PROJECT_NAME
> PROJECT_DESCRIPTION

[![Build Status](https://travis-ci.org/PROJECT_ORG/PROJECT_SLUG.svg?branch=master)](https://travis-ci.org/PROJECT_ORG/PROJECT_SLUG)
[![Renovate badge](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovateapp.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Installation
1. Clone the repository `git clone git@github.com:PROJECT_ORG/PROJECT_SLUG.git`.
1. Install dependencies `npm install`.
1. Build the code `npm run build`.
1. Run migrations `npm run migrate`.
1. Start the server `npm start`.

### Development
1. Follow [the installation procedure](#installation).
1. Make your changes to the "src" directory.
1. Build the code `npm run build`.
1. Test the code `npm test`.
1. Run the server `npm start`.

### Docker
You can use the steps below to install and run the project.

- Create a ".env" file using the ".env.example" file in this Github repository.
- Pull the image from DockerHub `docker pull PROJECT_ORG/PROJECT_SLUG:master`.
- Run the image in a container `docker run -d -p 8080:80 --env-file .env PROJECT_ORG/PROJECT_SLUG:master`.
