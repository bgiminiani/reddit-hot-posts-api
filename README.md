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
<<<<<<< HEAD
  Create Hot Posts:
  ```
  curl --request POST \
  --url http://localhost:3334/hotposts
  ```
=======
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=%2F%2F%2020210118061544%20%2F%2F%20https%3A%2F%2Fraw.githubusercontent.com%2Fbgiminiani%2Freddit-hot-posts-api%2Fmain%2Freddit-hot-posts.json%20%20%7B%20%20%20%22_type%22%3A%20%22export%22%2C%20%20%20%22__export_format%22%3A%204%2C%20%20%20%22__export_date%22%3A%20%222021-01-18T09%3A03%3A49.950Z%22%2C%20%20%20%22__export_source%22%3A%20%22insomnia.desktop.app%3Av2020.2.2%22%2C%20%20%20%22resources%22%3A%20%5B%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22req_741b881d971148ba9e9e5a6db61c57d3%22%2C%20%20%20%20%20%20%20%22authentication%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22body%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22created%22%3A%201610626118059%2C%20%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22headers%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22isPrivate%22%3A%20false%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%20-1610651634259.5%2C%20%20%20%20%20%20%20%22method%22%3A%20%22POST%22%2C%20%20%20%20%20%20%20%22modified%22%3A%201610680584657%2C%20%20%20%20%20%20%20%22name%22%3A%20%22Create%22%2C%20%20%20%20%20%20%20%22parameters%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%20%20%20%20%20%20%20%22settingDisableRenderRequestBody%22%3A%20false%2C%20%20%20%20%20%20%20%22settingEncodeUrl%22%3A%20true%2C%20%20%20%20%20%20%20%22settingFollowRedirects%22%3A%20%22global%22%2C%20%20%20%20%20%20%20%22settingRebuildPath%22%3A%20true%2C%20%20%20%20%20%20%20%22settingSendCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22settingStoreCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22url%22%3A%20%22%7B%7B%20base_url%20%20%7D%7D%2Fhotposts%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22request%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%20%20%20%20%20%20%20%22created%22%3A%201610680574983%2C%20%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22environment%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22environmentPropertyOrder%22%3A%20null%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%20-1610680574983%2C%20%20%20%20%20%20%20%22modified%22%3A%201610680574983%2C%20%20%20%20%20%20%20%22name%22%3A%20%22reddit_api%22%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22wrk_382e661580d442dd932efa4015b059c5%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22request_group%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22wrk_382e661580d442dd932efa4015b059c5%22%2C%20%20%20%20%20%20%20%22created%22%3A%201610414211405%2C%20%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22modified%22%3A%201610414211405%2C%20%20%20%20%20%20%20%22name%22%3A%20%22Winnin%20Desafio%22%2C%20%20%20%20%20%20%20%22parentId%22%3A%20null%2C%20%20%20%20%20%20%20%22scope%22%3A%20null%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22workspace%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22req_4fde7b2e181640d68459785ff81370be%22%2C%20%20%20%20%20%20%20%22authentication%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22body%22%3A%20%7B%20%20%20%20%20%20%20%20%20%22mimeType%22%3A%20%22application%2Fjson%22%2C%20%20%20%20%20%20%20%20%20%22text%22%3A%20%22%7B%5Cn%5Ct%5C%22initialDate%5C%22%3A%20%5C%222018-10-03%2003%3A48%3A21%5C%22%2C%5Cn%5Ct%5C%22finalDate%5C%22%3A%20%5C%222021-01-18%2004%3A57%3A10%5C%22%2C%5Cn%5Ct%5C%22orderBy%5C%22%3A%20%5C%22comments%5C%22%5Cn%7D%22%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22created%22%3A%201610680595786%2C%20%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22headers%22%3A%20%5B%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22pair_30b43e951a674207b42c15e21422fe82%22%2C%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Content-Type%22%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22application%2Fjson%22%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22isPrivate%22%3A%20false%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%20-1610637163897.75%2C%20%20%20%20%20%20%20%22method%22%3A%20%22GET%22%2C%20%20%20%20%20%20%20%22modified%22%3A%201610948267072%2C%20%20%20%20%20%20%20%22name%22%3A%20%22List%22%2C%20%20%20%20%20%20%20%22parameters%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%20%20%20%20%20%20%20%22settingDisableRenderRequestBody%22%3A%20false%2C%20%20%20%20%20%20%20%22settingEncodeUrl%22%3A%20true%2C%20%20%20%20%20%20%20%22settingFollowRedirects%22%3A%20%22global%22%2C%20%20%20%20%20%20%20%22settingRebuildPath%22%3A%20true%2C%20%20%20%20%20%20%20%22settingSendCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22settingStoreCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22url%22%3A%20%22%7B%7B%20base_url%20%20%7D%7D%2Fhotposts%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22request%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22req_0333d03fc77d4d6cae0cb7028a70f5fb%22%2C%20%20%20%20%20%20%20%22authentication%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22body%22%3A%20%7B%20%20%20%20%20%20%20%20%20%22mimeType%22%3A%20%22application%2Fjson%22%2C%20%20%20%20%20%20%20%20%20%22text%22%3A%20%22%7B%5Cn%5Ct%5C%22orderBy%5C%22%3A%20%5C%22ups%5C%22%5Cn%7D%22%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22created%22%3A%201610718144835%2C%20%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22headers%22%3A%20%5B%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22pair_30b43e951a674207b42c15e21422fe82%22%2C%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Content-Type%22%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22application%2Fjson%22%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22isPrivate%22%3A%20false%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%20-1610629928716.875%2C%20%20%20%20%20%20%20%22method%22%3A%20%22GET%22%2C%20%20%20%20%20%20%20%22modified%22%3A%201610948185995%2C%20%20%20%20%20%20%20%22name%22%3A%20%22List%20Users%22%2C%20%20%20%20%20%20%20%22parameters%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%20%20%20%20%20%20%20%22settingDisableRenderRequestBody%22%3A%20false%2C%20%20%20%20%20%20%20%22settingEncodeUrl%22%3A%20true%2C%20%20%20%20%20%20%20%22settingFollowRedirects%22%3A%20%22global%22%2C%20%20%20%20%20%20%20%22settingRebuildPath%22%3A%20true%2C%20%20%20%20%20%20%20%22settingSendCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22settingStoreCookies%22%3A%20true%2C%20%20%20%20%20%20%20%22url%22%3A%20%22%7B%7B%20base_url%20%20%7D%7D%2Fhotusers%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22request%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22env_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%20%20%20%20%20%20%20%22color%22%3A%20null%2C%20%20%20%20%20%20%20%22created%22%3A%201610414211479%2C%20%20%20%20%20%20%20%22data%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22dataPropertyOrder%22%3A%20null%2C%20%20%20%20%20%20%20%22isPrivate%22%3A%20false%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%201610414211479%2C%20%20%20%20%20%20%20%22modified%22%3A%201610414211479%2C%20%20%20%20%20%20%20%22name%22%3A%20%22Base%20Environment%22%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22wrk_382e661580d442dd932efa4015b059c5%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22environment%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22jar_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%20%20%20%20%20%20%20%22cookies%22%3A%20%5B%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22creation%22%3A%20%222021-01-12T01%3A22%3A26.544Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22domain%22%3A%20%22reddit.com%22%2C%20%20%20%20%20%20%20%20%20%20%20%22expires%22%3A%20%222023-01-12T01%3A22%3A26.000Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22extensions%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%22SameSite%3DNone%22%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%20%20%20%20%22hostOnly%22%3A%20false%2C%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229050450170117208%22%2C%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22loid%22%2C%20%20%20%20%20%20%20%20%20%20%20%22lastAccessed%22%3A%20%222021-01-12T01%3A22%3A26.544Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22maxAge%22%3A%2063071999%2C%20%20%20%20%20%20%20%20%20%20%20%22path%22%3A%20%22%2F%22%2C%20%20%20%20%20%20%20%20%20%20%20%22secure%22%3A%20true%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%2200000000009s201dpm.2.1610414545748.Z0FBQUFBQmZfUG5TRllhckJyZGhRTFJDVnB5Q3Y1ZERFbVNUS1ZZMmx2WGhnZmdLeUFGVVBPdjRoYVhlRkU3UGJZclRSZVF1Z05qdVhJYjRNWURkWVZNQllvc2JBUi11bUptTHlNMkxJNWpYVllselZtbkZOaThyNXFyRHhTRlcwRmdvSE5PblhqMG0%22%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22creation%22%3A%20%222021-01-12T01%3A22%3A26.545Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22domain%22%3A%20%22reddit.com%22%2C%20%20%20%20%20%20%20%20%20%20%20%22expires%22%3A%20%222021-01-15T10%3A30%3A40.000Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22extensions%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%22SameSite%3DNone%22%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%20%20%20%20%22hostOnly%22%3A%20false%2C%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2237634313439428624%22%2C%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22session_tracker%22%2C%20%20%20%20%20%20%20%20%20%20%20%22lastAccessed%22%3A%20%222021-01-15T08%3A30%3A40.775Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22maxAge%22%3A%207199%2C%20%20%20%20%20%20%20%20%20%20%20%22path%22%3A%20%22%2F%22%2C%20%20%20%20%20%20%20%20%20%20%20%22secure%22%3A%20true%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22EaNaJN09fBEk0pgBGP.0.1610699440143.Z0FBQUFBQmdBVkt3MERPY0JKamtsaG9KU0NwckRSaDFpTGlBSlRBRkdjSjliOFZWSkZNUVI2eUh4dC1lbVlJbmxXRUhYcTVNRk5SZGhTSzhEZFAxYjZEYXEtR3pUZ2RIUHdkWmN6WlhYeTQ2WTAwY1YwalFhbm00Q2N3WmZySjZwR25MbDk1a0FsTUg%22%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22creation%22%3A%20%222021-01-12T01%3A22%3A26.546Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22domain%22%3A%20%22reddit.com%22%2C%20%20%20%20%20%20%20%20%20%20%20%22extensions%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%22SameSite%3DNone%22%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%20%20%20%20%22hostOnly%22%3A%20false%2C%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2218030789918581624%22%2C%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22csv%22%2C%20%20%20%20%20%20%20%20%20%20%20%22lastAccessed%22%3A%20%222021-01-12T01%3A22%3A26.546Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22maxAge%22%3A%2063072000%2C%20%20%20%20%20%20%20%20%20%20%20%22path%22%3A%20%22%2F%22%2C%20%20%20%20%20%20%20%20%20%20%20%22secure%22%3A%20true%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%221%22%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%20%20%7B%20%20%20%20%20%20%20%20%20%20%20%22creation%22%3A%20%222021-01-12T01%3A22%3A26.547Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22domain%22%3A%20%22reddit.com%22%2C%20%20%20%20%20%20%20%20%20%20%20%22hostOnly%22%3A%20false%2C%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%228244663445141507%22%2C%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22edgebucket%22%2C%20%20%20%20%20%20%20%20%20%20%20%22lastAccessed%22%3A%20%222021-01-12T01%3A22%3A26.547Z%22%2C%20%20%20%20%20%20%20%20%20%20%20%22maxAge%22%3A%2063071999%2C%20%20%20%20%20%20%20%20%20%20%20%22path%22%3A%20%22%2F%22%2C%20%20%20%20%20%20%20%20%20%20%20%22secure%22%3A%20true%2C%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22b5aZXUlxjrTHlLH8TM%22%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%5D%2C%20%20%20%20%20%20%20%22created%22%3A%201610414211480%2C%20%20%20%20%20%20%20%22modified%22%3A%201610699440775%2C%20%20%20%20%20%20%20%22name%22%3A%20%22Default%20Jar%22%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22wrk_382e661580d442dd932efa4015b059c5%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22cookie_jar%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22spc_13fd8deacb17462bb5d64c0108180819%22%2C%20%20%20%20%20%20%20%22contentType%22%3A%20%22yaml%22%2C%20%20%20%20%20%20%20%22contents%22%3A%20%22%22%2C%20%20%20%20%20%20%20%22created%22%3A%201610414211411%2C%20%20%20%20%20%20%20%22fileName%22%3A%20%22Winnin%20Desafio%22%2C%20%20%20%20%20%20%20%22modified%22%3A%201610414211411%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22wrk_382e661580d442dd932efa4015b059c5%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22api_spec%22%20%20%20%20%20%7D%2C%20%20%20%20%20%7B%20%20%20%20%20%20%20%22_id%22%3A%20%22env_f413fc7a262a45ddaad26931a13e3c67%22%2C%20%20%20%20%20%20%20%22color%22%3A%20%22%237d69cb%22%2C%20%20%20%20%20%20%20%22created%22%3A%201610626023076%2C%20%20%20%20%20%20%20%22data%22%3A%20%7B%20%20%20%20%20%20%20%20%20%22base_url%22%3A%20%22http%3A%2F%2Flocalhost%3A3334%22%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22dataPropertyOrder%22%3A%20%7B%20%20%20%20%20%20%20%20%20%22%26%22%3A%20%5B%20%20%20%20%20%20%20%20%20%20%20%22base_url%22%20%20%20%20%20%20%20%20%20%5D%20%20%20%20%20%20%20%7D%2C%20%20%20%20%20%20%20%22isPrivate%22%3A%20false%2C%20%20%20%20%20%20%20%22metaSortKey%22%3A%201610626023076%2C%20%20%20%20%20%20%20%22modified%22%3A%201610626088586%2C%20%20%20%20%20%20%20%22name%22%3A%20%22dev%22%2C%20%20%20%20%20%20%20%22parentId%22%3A%20%22env_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%20%20%20%20%20%20%20%22_type%22%3A%20%22environment%22%20%20%20%20%20%7D%20%20%20%5D%20%7D)

  

>>>>>>> a5e8e5327cda9a97b603734bd8174280a46efc73

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