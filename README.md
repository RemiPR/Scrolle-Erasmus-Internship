#  Turiba Erasmus Project "SCROLL"
Platform designed for education institutions by erasmus interns.

## Backend
Initially built with:
- Docker v26.0.0
- NodeJS v20

It is recommended to install these versions.
##### HOW TO RUN ON WINDOWS
1. Install Docker Desktop https://docs.docker.com/engine/install/
2. Install NodeJS https://nodejs.org/en/download
3. Launch Docker Desktop in order to start the Docker engine.
4. Navigate to the backend folder via bash terminal.
5. Run "docker compose up --build" or  "docker compose up --build -d" (to run in deatched state). 

Other help:
- Check what containers are running use Docker Desktop  or in bash terminal "docker ps".
- Stop all containers from running use CTRL+C in bash terminal or run "docker compose stop" if in detached state.
- Run containers again "docker compose start".
- Run containers again from scratch "docker compose up"
- Run containers when dockerfiles or compose files are changed "docker compose up --build"
- Completely remove containers "docker compose down"

