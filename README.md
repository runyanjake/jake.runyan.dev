# jake.runyan.dev
A personal website/blog, powered by the content-first &amp; react-based web framework Docusaurus.

### First Time Setup

1. Install some node version >=18

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

`nvm list-remote`

`nvm install 18.12.0`

2. Create node project, using classic theme

`npx create-docusaurus@latest website classic`

### Running the Project

1. Clone, and run `npm install` from the website directory.

2. Run locally with nvm

`cd website && npm run start`

3. Run as container with docker-compose

`docker-compose down && docker system prune -af && docker-compose build && docker-compose up -d && docker logs -f website`
