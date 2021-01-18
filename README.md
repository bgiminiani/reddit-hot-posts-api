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
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=bgiminiani%2Freddit-hot-posts&uri=%7B%22_type%22%3A%22export%22%2C%22__export_format%22%3A4%2C%22__export_date%22%3A%222021-01-18T09%3A03%3A49.950Z%22%2C%22__export_source%22%3A%22insomnia.desktop.app%3Av2020.2.2%22%2C%22resources%22%3A%5B%7B%22_id%22%3A%22req_741b881d971148ba9e9e5a6db61c57d3%22%2C%22authentication%22%3A%7B%7D%2C%22body%22%3A%7B%7D%2C%22created%22%3A1610626118059%2C%22description%22%3A%22%22%2C%22headers%22%3A%5B%5D%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A-1610651634259.5%2C%22method%22%3A%22POST%22%2C%22modified%22%3A1610680584657%2C%22name%22%3A%22Create%22%2C%22parameters%22%3A%5B%5D%2C%22parentId%22%3A%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22settingRebuildPath%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingStoreCookies%22%3Atrue%2C%22url%22%3A%22%7B%7B%20base_url%20%20%7D%7D%2Fhotposts%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%22created%22%3A1610680574983%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1610680574983%2C%22modified%22%3A1610680574983%2C%22name%22%3A%22reddit_api%22%2C%22parentId%22%3A%22wrk_382e661580d442dd932efa4015b059c5%22%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22wrk_382e661580d442dd932efa4015b059c5%22%2C%22created%22%3A1610414211405%2C%22description%22%3A%22%22%2C%22modified%22%3A1610414211405%2C%22name%22%3A%22Winnin%20Desafio%22%2C%22parentId%22%3Anull%2C%22scope%22%3Anull%2C%22_type%22%3A%22workspace%22%7D%2C%7B%22_id%22%3A%22req_4fde7b2e181640d68459785ff81370be%22%2C%22authentication%22%3A%7B%7D%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22initialDate%5C%22%3A%20%5C%222018-10-03%2003%3A48%3A21%5C%22%2C%5Cn%5Ct%5C%22finalDate%5C%22%3A%20%5C%222021-01-18%2004%3A57%3A10%5C%22%2C%5Cn%5Ct%5C%22orderBy%5C%22%3A%20%5C%22comments%5C%22%5Cn%7D%22%7D%2C%22created%22%3A1610680595786%2C%22description%22%3A%22%22%2C%22headers%22%3A%5B%7B%22id%22%3A%22pair_30b43e951a674207b42c15e21422fe82%22%2C%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%7D%5D%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A-1610637163897.75%2C%22method%22%3A%22GET%22%2C%22modified%22%3A1610948267072%2C%22name%22%3A%22List%22%2C%22parameters%22%3A%5B%5D%2C%22parentId%22%3A%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22settingRebuildPath%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingStoreCookies%22%3Atrue%2C%22url%22%3A%22%7B%7B%20base_url%20%20%7D%7D%2Fhotposts%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_0333d03fc77d4d6cae0cb7028a70f5fb%22%2C%22authentication%22%3A%7B%7D%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22orderBy%5C%22%3A%20%5C%22ups%5C%22%5Cn%7D%22%7D%2C%22created%22%3A1610718144835%2C%22description%22%3A%22%22%2C%22headers%22%3A%5B%7B%22id%22%3A%22pair_30b43e951a674207b42c15e21422fe82%22%2C%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%7D%5D%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A-1610629928716.875%2C%22method%22%3A%22GET%22%2C%22modified%22%3A1610948185995%2C%22name%22%3A%22List%20Users%22%2C%22parameters%22%3A%5B%5D%2C%22parentId%22%3A%22fld_1bd8717fe68e47e795de431c278b04a3%22%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22settingRebuildPath%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingStoreCookies%22%3Atrue%2C%22url%22%3A%22%7B%7B%20base_url%20%20%7D%7D%2Fhotusers%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22env_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%22color%22%3Anull%2C%22created%22%3A1610414211479%2C%22data%22%3A%7B%7D%2C%22dataPropertyOrder%22%3Anull%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1610414211479%2C%22modified%22%3A1610414211479%2C%22name%22%3A%22Base%20Environment%22%2C%22parentId%22%3A%22wrk_382e661580d442dd932efa4015b059c5%22%2C%22_type%22%3A%22environment%22%7D%2C%7B%22_id%22%3A%22jar_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%22cookies%22%3A%5B%7B%22creation%22%3A%222021-01-12T01%3A22%3A26.544Z%22%2C%22domain%22%3A%22reddit.com%22%2C%22expires%22%3A%222023-01-12T01%3A22%3A26.000Z%22%2C%22extensions%22%3A%5B%22SameSite%3DNone%22%5D%2C%22hostOnly%22%3Afalse%2C%22id%22%3A%229050450170117208%22%2C%22key%22%3A%22loid%22%2C%22lastAccessed%22%3A%222021-01-12T01%3A22%3A26.544Z%22%2C%22maxAge%22%3A63071999%2C%22path%22%3A%22%2F%22%2C%22secure%22%3Atrue%2C%22value%22%3A%2200000000009s201dpm.2.1610414545748.Z0FBQUFBQmZfUG5TRllhckJyZGhRTFJDVnB5Q3Y1ZERFbVNUS1ZZMmx2WGhnZmdLeUFGVVBPdjRoYVhlRkU3UGJZclRSZVF1Z05qdVhJYjRNWURkWVZNQllvc2JBUi11bUptTHlNMkxJNWpYVllselZtbkZOaThyNXFyRHhTRlcwRmdvSE5PblhqMG0%22%7D%2C%7B%22creation%22%3A%222021-01-12T01%3A22%3A26.545Z%22%2C%22domain%22%3A%22reddit.com%22%2C%22expires%22%3A%222021-01-15T10%3A30%3A40.000Z%22%2C%22extensions%22%3A%5B%22SameSite%3DNone%22%5D%2C%22hostOnly%22%3Afalse%2C%22id%22%3A%2237634313439428624%22%2C%22key%22%3A%22session_tracker%22%2C%22lastAccessed%22%3A%222021-01-15T08%3A30%3A40.775Z%22%2C%22maxAge%22%3A7199%2C%22path%22%3A%22%2F%22%2C%22secure%22%3Atrue%2C%22value%22%3A%22EaNaJN09fBEk0pgBGP.0.1610699440143.Z0FBQUFBQmdBVkt3MERPY0JKamtsaG9KU0NwckRSaDFpTGlBSlRBRkdjSjliOFZWSkZNUVI2eUh4dC1lbVlJbmxXRUhYcTVNRk5SZGhTSzhEZFAxYjZEYXEtR3pUZ2RIUHdkWmN6WlhYeTQ2WTAwY1YwalFhbm00Q2N3WmZySjZwR25MbDk1a0FsTUg%22%7D%2C%7B%22creation%22%3A%222021-01-12T01%3A22%3A26.546Z%22%2C%22domain%22%3A%22reddit.com%22%2C%22extensions%22%3A%5B%22SameSite%3DNone%22%5D%2C%22hostOnly%22%3Afalse%2C%22id%22%3A%2218030789918581624%22%2C%22key%22%3A%22csv%22%2C%22lastAccessed%22%3A%222021-01-12T01%3A22%3A26.546Z%22%2C%22maxAge%22%3A63072000%2C%22path%22%3A%22%2F%22%2C%22secure%22%3Atrue%2C%22value%22%3A%221%22%7D%2C%7B%22creation%22%3A%222021-01-12T01%3A22%3A26.547Z%22%2C%22domain%22%3A%22reddit.com%22%2C%22hostOnly%22%3Afalse%2C%22id%22%3A%228244663445141507%22%2C%22key%22%3A%22edgebucket%22%2C%22lastAccessed%22%3A%222021-01-12T01%3A22%3A26.547Z%22%2C%22maxAge%22%3A63071999%2C%22path%22%3A%22%2F%22%2C%22secure%22%3Atrue%2C%22value%22%3A%22b5aZXUlxjrTHlLH8TM%22%7D%5D%2C%22created%22%3A1610414211480%2C%22modified%22%3A1610699440775%2C%22name%22%3A%22Default%20Jar%22%2C%22parentId%22%3A%22wrk_382e661580d442dd932efa4015b059c5%22%2C%22_type%22%3A%22cookie_jar%22%7D%2C%7B%22_id%22%3A%22spc_13fd8deacb17462bb5d64c0108180819%22%2C%22contentType%22%3A%22yaml%22%2C%22contents%22%3A%22%22%2C%22created%22%3A1610414211411%2C%22fileName%22%3A%22Winnin%20Desafio%22%2C%22modified%22%3A1610414211411%2C%22parentId%22%3A%22wrk_382e661580d442dd932efa4015b059c5%22%2C%22_type%22%3A%22api_spec%22%7D%2C%7B%22_id%22%3A%22env_f413fc7a262a45ddaad26931a13e3c67%22%2C%22color%22%3A%22%237d69cb%22%2C%22created%22%3A1610626023076%2C%22data%22%3A%7B%22base_url%22%3A%22http%3A%2F%2Flocalhost%3A3334%22%7D%2C%22dataPropertyOrder%22%3A%7B%22%26%22%3A%5B%22base_url%22%5D%7D%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1610626023076%2C%22modified%22%3A1610626088586%2C%22name%22%3A%22dev%22%2C%22parentId%22%3A%22env_aedffce79f7f139b5ac096103026a74f67e49dc8%22%2C%22_type%22%3A%22environment%22%7D%5D%7D)

  


