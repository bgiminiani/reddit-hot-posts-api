# SUB REDDIT HOT POSTS API 

The api aims to read the artificial subreddit hot posts on a daily basis and save them in an SQL database.
It offers two endpoints: one for hotposts and one for hotusers

---
## Requirements 

* git
* node.js(v12.14.1)
* yarn
* docker

---
## Main application dependencies:
* Node / Express
* Typescript
* Postgres / TypeORM
* node-cron
---

## Setup

  ```
  $ git clone git@github.com:bgiminiani/reddit-hot-posts-api.git
  ```

  
  ```
  $ cd reddit-hot-posts-api/
  ```

  ```
  $ yarn
  ```

  ```
  $ docker run --name hotposts-postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=reddit-hotposts -p 5432:5432 -d postgres
  ```

  ```
  $ yarn typeorm migration:run
  ```

  ```
  $ yarn start
  ```
  ---
  ## API DOCUMENTATION

  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=reddit-hot-posts-api&uri=https%3A%2F%2Fgithub.com%2Fbgiminiani%2Freddit-hot-posts-api)

  


