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
  
  Create Hot Posts:
  ```
  curl --request POST \
  --url http://localhost:3334/hotposts
  ```
  
  List Hot Posts: 
  ```
  curl --request GET \
  --url http://localhost:3334/hotposts \
  --header 'content-type: application/json' \
  --data '{
	"initialDate": "2018-10-03 03:48:21",
	"finalDate": "2021-01-18 04:57:10",
	"orderBy": "comments"
}'
  ```
  
  List Hot Users
  ```
  curl --request GET \
  --url http://localhost:3334/hotusers \
  --header 'content-type: application/json' \
  --data '{
	"orderBy": "ups"
}'
```
