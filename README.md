# Introduction 
A REST API with JSON server

## Install all dependencies
```
npm install
```

## To get the API running 

```
json-server file.js
```

## Getting data
Get id 0
```
http://localhost:3000/file/0
```

Request the record where the property is equal to Sebastian
```
http://localhost:3000/file?first_name=Sebastian
```

Full text search across all properties
```
http://localhost:3000/file?q=thetextyouwanttofind
```

## Resources  
Originally read https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d to get this up and running.

Watch this video https://www.youtube.com/watch?v=x3NAo8zqdmo. The javascript code from the article for using faker is wrong and throws errors. The javascript files in the repository here have been fixed. 

Learn about Faker and how to generate dummy data quickly https://github.com/marak/Faker.js/.

Read https://www.npmjs.com/package/json-server which shows more useful documentation.
