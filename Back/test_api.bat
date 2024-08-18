@echo off
setlocal enabledelayedexpansion

:: Create a directory to store responses
mkdir responses

:: Send GET request
echo Sending GET request...
curl -X GET http://localhost:3000/todos/1 > responses/get_response.json

:: Send POST request
echo Sending POST request...
curl -X POST http://localhost:3000/todos ^
     -H "Content-Type: application/json" ^
     -d "{\"id\": 1, \"title\": \"New Todo\"}" ^
     > responses/post_response.json

:: Send PATCH request
echo Sending PATCH request...
curl -X PATCH http://localhost:3000/todos/1 ^
     -H "Content-Type: application/json" ^
     -d "{\"title\": \"Updated Title\"}" ^
     > responses/patch_response.json

:: Send PUT request
echo Sending PUT request...
curl -X PUT http://localhost:3000/todos/1 ^
     -H "Content-Type: application/json" ^
     -d "{\"id\": 1, \"title\": \"Replaced Todo\"}" ^
     > responses/put_response.json

:: Send DELETE request
echo Sending DELETE request...
curl -X DELETE http://localhost:3000/todos/1 > responses/delete_response.json

echo Requests completed. Responses saved in 'responses' directory.
