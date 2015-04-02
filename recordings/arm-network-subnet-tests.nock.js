[function (nock) { 
var result = 
nock('http://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1427982304\",\"not_before\":\"1427978404\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDI3OTc4NDA0LCJuYmYiOjE0Mjc5Nzg0MDQsImV4cCI6MTQyNzk4MjMwNCwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwiYW1yIjpbInB3ZCJdLCJvaWQiOiJjMDcyMDdhNS01ZTM2LTQ3NzEtODAyZS0wZmJjMzM5M2JiOGUiLCJ1cG4iOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwiZ2l2ZW5fbmFtZSI6IlNyZWVrYW50aCIsImZhbWlseV9uYW1lIjoiQmFuZGFydSIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.QAHdKTkDNnf11GCIuvo5R9D7IUnYgPAq9BFD6NuCb5bYsBSANpN1emlwD7h-1I7HMrmGQ5D1VVP4SpqwEO6eP1YuV5WN1-kCrWk4PHS-Ii0V8EqhIXNssFNk-zd0cgHIaleKeaOQLp39by0ItRNQEDKyLhqs0HnUN5ufXrluuksUBAiTu48vwlSOpdNS9HNop8lYFtTMeVSJ7uWsgR8yVrZ5OAdXatIE4chm0ZQ--PBTss3vSEJ0N6I9BpcYUabL6F-BoihYPmcaMQekR5m5UyHnfOnSh1KtvBjRme4UbMPAdvPn4FBt9x55O5rhV2ZJrKCGZRb9cbN4x_qlpHTH3Q\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGDLXADhdjTbLQ-0yTUMFSaT7Qa9EykGVYthVOixMqJqTXAIIkwENBvVpJF9Q4G_3TZLy6X4-dADq6FBYRcegnUCMO_BbMoCN451aeMga40pqaBz9TvqALlXvbZKLZVmgm6NAvGWI8JeSyIqaBY8yBBlaaeabXf5zCzVc_ThDJLo8O7Xlm-ko0oMMsNEGs6JdXO4zAFL73SdV-c8gO-CUt3OWH1cngvWibEVqLLFzaMSIYJicU1QXGbE9Po-jf8KgDErEFuKHdgRyac58WKqbXf4qvfIC8zWy6l5nBS4Dc0p66cayS-3KxuziASJanJgoVNiya3btWCcDJAIZOCDZMCVMltflPaYuasCTv1ei01BxpdS0H9Hs_GNU_sOxLqNXVfkoB7yDruyHoB875Jx0C4jZ8S0IiwDtbglZLA3UnU9x1JV3Y8Dp-UQUcEmU0f2HtOd7mAd1QBvCPNKjcX9I7b7HF0GoYhIha1U-EsfkLqnZXwr8ufVu9ZoNlS8gSHYK9laaR0XY886RiSSz-Fl4a7UgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"28417787\",\"pwd_url\":\"https://portal.microsoftonline.com/ChangePassword.aspx\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '8197c274-12c4-42ac-b024-3ffa9cb6d899',
  'client-request-id': '3b5084eb-a6d7-4b35-a150-6760463082be',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 02 Apr 2015 12:45:03 GMT',
  connection: 'close',
  'content-length': '2915' });
 return result; },
function (nock) { 
var result = 
nock('https://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1427982304\",\"not_before\":\"1427978404\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDI3OTc4NDA0LCJuYmYiOjE0Mjc5Nzg0MDQsImV4cCI6MTQyNzk4MjMwNCwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwiYW1yIjpbInB3ZCJdLCJvaWQiOiJjMDcyMDdhNS01ZTM2LTQ3NzEtODAyZS0wZmJjMzM5M2JiOGUiLCJ1cG4iOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwiZ2l2ZW5fbmFtZSI6IlNyZWVrYW50aCIsImZhbWlseV9uYW1lIjoiQmFuZGFydSIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.QAHdKTkDNnf11GCIuvo5R9D7IUnYgPAq9BFD6NuCb5bYsBSANpN1emlwD7h-1I7HMrmGQ5D1VVP4SpqwEO6eP1YuV5WN1-kCrWk4PHS-Ii0V8EqhIXNssFNk-zd0cgHIaleKeaOQLp39by0ItRNQEDKyLhqs0HnUN5ufXrluuksUBAiTu48vwlSOpdNS9HNop8lYFtTMeVSJ7uWsgR8yVrZ5OAdXatIE4chm0ZQ--PBTss3vSEJ0N6I9BpcYUabL6F-BoihYPmcaMQekR5m5UyHnfOnSh1KtvBjRme4UbMPAdvPn4FBt9x55O5rhV2ZJrKCGZRb9cbN4x_qlpHTH3Q\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGDLXADhdjTbLQ-0yTUMFSaT7Qa9EykGVYthVOixMqJqTXAIIkwENBvVpJF9Q4G_3TZLy6X4-dADq6FBYRcegnUCMO_BbMoCN451aeMga40pqaBz9TvqALlXvbZKLZVmgm6NAvGWI8JeSyIqaBY8yBBlaaeabXf5zCzVc_ThDJLo8O7Xlm-ko0oMMsNEGs6JdXO4zAFL73SdV-c8gO-CUt3OWH1cngvWibEVqLLFzaMSIYJicU1QXGbE9Po-jf8KgDErEFuKHdgRyac58WKqbXf4qvfIC8zWy6l5nBS4Dc0p66cayS-3KxuziASJanJgoVNiya3btWCcDJAIZOCDZMCVMltflPaYuasCTv1ei01BxpdS0H9Hs_GNU_sOxLqNXVfkoB7yDruyHoB875Jx0C4jZ8S0IiwDtbglZLA3UnU9x1JV3Y8Dp-UQUcEmU0f2HtOd7mAd1QBvCPNKjcX9I7b7HF0GoYhIha1U-EsfkLqnZXwr8ufVu9ZoNlS8gSHYK9laaR0XY886RiSSz-Fl4a7UgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"28417787\",\"pwd_url\":\"https://portal.microsoftonline.com/ChangePassword.aspx\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '8197c274-12c4-42ac-b024-3ffa9cb6d899',
  'client-request-id': '3b5084eb-a6d7-4b35-a150-6760463082be',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 02 Apr 2015 12:45:03 GMT',
  connection: 'close',
  'content-length': '2915' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'da92e1efcb7c8f16913bae9f8746940c',
  date: 'Thu, 02 Apr 2015 12:45:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'da92e1efcb7c8f16913bae9f8746940c',
  date: 'Thu, 02 Apr 2015 12:45:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate4255?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate4255' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': 'c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'x-ms-correlation-request-id': 'c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124506Z:c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:06 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate4255?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate4255' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': 'c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'x-ms-correlation-request-id': 'c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124506Z:c8b445f8-75f0-49f4-b898-e62307ca48ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:06 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '78fc2d20f05480f78401db57675305ff',
  date: 'Thu, 02 Apr 2015 12:45:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '78fc2d20f05480f78401db57675305ff',
  date: 'Thu, 02 Apr 2015 12:45:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate4255?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255\",\"name\":\"xplatTestGCreate4255\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'x-ms-correlation-request-id': 'a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124511Z:a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate4255?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255\",\"name\":\"xplatTestGCreate4255\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'x-ms-correlation-request-id': 'a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124511Z:a6b4865c-5fec-4bef-b5cd-d311dc0a0fd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '834690f3f5258da7b4482753416e0d54',
  date: 'Thu, 02 Apr 2015 12:45:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '834690f3f5258da7b4482753416e0d54',
  date: 'Thu, 02 Apr 2015 12:45:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'aae7c406-a02f-439a-998f-ded4998e3d34',
  'x-ms-correlation-request-id': 'aae7c406-a02f-439a-998f-ded4998e3d34',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124514Z:aae7c406-a02f-439a-998f-ded4998e3d34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:13 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'aae7c406-a02f-439a-998f-ded4998e3d34',
  'x-ms-correlation-request-id': 'aae7c406-a02f-439a-998f-ded4998e3d34',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124514Z:aae7c406-a02f-439a-998f-ded4998e3d34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:45:13 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '12afd7b45126851cbbe67438bf109e79',
  date: 'Thu, 02 Apr 2015 12:45:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '12afd7b45126851cbbe67438bf109e79',
  date: 'Thu, 02 Apr 2015 12:45:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"a34e2fc3-b6cd-4d6d-9c2d-58844e83c9fd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '624c7f1b-525d-4a13-be5b-1c4de04e3024',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/624c7f1b-525d-4a13-be5b-1c4de04e3024?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '891ab292-34db-473c-afdb-7bcbb656c729',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124522Z:891ab292-34db-473c-afdb-7bcbb656c729',
  date: 'Thu, 02 Apr 2015 12:45:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"a34e2fc3-b6cd-4d6d-9c2d-58844e83c9fd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '624c7f1b-525d-4a13-be5b-1c4de04e3024',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/624c7f1b-525d-4a13-be5b-1c4de04e3024?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '891ab292-34db-473c-afdb-7bcbb656c729',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124522Z:891ab292-34db-473c-afdb-7bcbb656c729',
  date: 'Thu, 02 Apr 2015 12:45:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6415ba95395a837dbf7c7e7c9cc61fac',
  date: 'Thu, 02 Apr 2015 12:45:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6415ba95395a837dbf7c7e7c9cc61fac',
  date: 'Thu, 02 Apr 2015 12:45:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/624c7f1b-525d-4a13-be5b-1c4de04e3024?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5268c52e-d553-4ecc-8a74-afc4ed8f92f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '055d7404-0f81-43bd-9d0e-6879023279d0',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124535Z:055d7404-0f81-43bd-9d0e-6879023279d0',
  date: 'Thu, 02 Apr 2015 12:45:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/624c7f1b-525d-4a13-be5b-1c4de04e3024?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5268c52e-d553-4ecc-8a74-afc4ed8f92f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '055d7404-0f81-43bd-9d0e-6879023279d0',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124535Z:055d7404-0f81-43bd-9d0e-6879023279d0',
  date: 'Thu, 02 Apr 2015 12:45:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '439dbf2150418fb5b9c81883160f0a85',
  date: 'Thu, 02 Apr 2015 12:45:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '439dbf2150418fb5b9c81883160f0a85',
  date: 'Thu, 02 Apr 2015 12:45:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"76392cb8-c299-4124-91e2-78a5858f6e3a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76392cb8-c299-4124-91e2-78a5858f6e3a"',
  'x-ms-request-id': 'fa21c8ce-1791-4d51-80ef-5d9b57305ef3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '10492775-d360-4564-8fea-c400fb9f1314',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124538Z:10492775-d360-4564-8fea-c400fb9f1314',
  date: 'Thu, 02 Apr 2015 12:45:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"76392cb8-c299-4124-91e2-78a5858f6e3a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76392cb8-c299-4124-91e2-78a5858f6e3a"',
  'x-ms-request-id': 'fa21c8ce-1791-4d51-80ef-5d9b57305ef3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '10492775-d360-4564-8fea-c400fb9f1314',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124538Z:10492775-d360-4564-8fea-c400fb9f1314',
  date: 'Thu, 02 Apr 2015 12:45:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '265b6e6c7536881498ee679d39a2f7e4',
  date: 'Thu, 02 Apr 2015 12:45:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '265b6e6c7536881498ee679d39a2f7e4',
  date: 'Thu, 02 Apr 2015 12:45:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104 not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe066d55-6158-4f6a-aa76-5a637fb2efa4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'abf955a2-a553-47a2-9f76-fe57495146f1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124542Z:abf955a2-a553-47a2-9f76-fe57495146f1',
  date: 'Thu, 02 Apr 2015 12:45:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104 not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe066d55-6158-4f6a-aa76-5a637fb2efa4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'abf955a2-a553-47a2-9f76-fe57495146f1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124542Z:abf955a2-a553-47a2-9f76-fe57495146f1',
  date: 'Thu, 02 Apr 2015 12:45:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '257a50c4041c891fae5a22a862ba2c11',
  date: 'Thu, 02 Apr 2015 12:45:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '257a50c4041c891fae5a22a862ba2c11',
  date: 'Thu, 02 Apr 2015 12:45:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"76392cb8-c299-4124-91e2-78a5858f6e3a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76392cb8-c299-4124-91e2-78a5858f6e3a"',
  'x-ms-request-id': 'f763ae89-e04a-463d-85c9-ee25d66a8c3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': '1817d19a-a1c2-4bff-9887-7d61c174f30e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124545Z:1817d19a-a1c2-4bff-9887-7d61c174f30e',
  date: 'Thu, 02 Apr 2015 12:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet5003\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003\",\r\n  \"etag\": \"W/\\\"76392cb8-c299-4124-91e2-78a5858f6e3a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76392cb8-c299-4124-91e2-78a5858f6e3a"',
  'x-ms-request-id': 'f763ae89-e04a-463d-85c9-ee25d66a8c3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': '1817d19a-a1c2-4bff-9887-7d61c174f30e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124545Z:1817d19a-a1c2-4bff-9887-7d61c174f30e',
  date: 'Thu, 02 Apr 2015 12:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b0a6980f87df8139a943686bc1369ffb',
  date: 'Thu, 02 Apr 2015 12:45:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b0a6980f87df8139a943686bc1369ffb',
  date: 'Thu, 02 Apr 2015 12:45:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"f468c2d4-fe3c-42c4-ac38-adf4386f0ceb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1b0092d7-9266-4517-8308-80155e51a903',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/1b0092d7-9266-4517-8308-80155e51a903?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '030bb125-adee-4b74-8253-2176cd25adc9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124549Z:030bb125-adee-4b74-8253-2176cd25adc9',
  date: 'Thu, 02 Apr 2015 12:45:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"f468c2d4-fe3c-42c4-ac38-adf4386f0ceb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1b0092d7-9266-4517-8308-80155e51a903',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/1b0092d7-9266-4517-8308-80155e51a903?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '030bb125-adee-4b74-8253-2176cd25adc9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124549Z:030bb125-adee-4b74-8253-2176cd25adc9',
  date: 'Thu, 02 Apr 2015 12:45:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '78397e308cb68275a84d7f9a0e4f4c6b',
  date: 'Thu, 02 Apr 2015 12:46:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '78397e308cb68275a84d7f9a0e4f4c6b',
  date: 'Thu, 02 Apr 2015 12:46:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/1b0092d7-9266-4517-8308-80155e51a903?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2e1a0d39-adee-40c3-9d6e-20dee74095dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'bf66b949-c6b4-4d87-8332-1fd485507525',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124602Z:bf66b949-c6b4-4d87-8332-1fd485507525',
  date: 'Thu, 02 Apr 2015 12:46:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/1b0092d7-9266-4517-8308-80155e51a903?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2e1a0d39-adee-40c3-9d6e-20dee74095dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'bf66b949-c6b4-4d87-8332-1fd485507525',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124602Z:bf66b949-c6b4-4d87-8332-1fd485507525',
  date: 'Thu, 02 Apr 2015 12:46:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3d662c1686f482d3af294318f476d88c',
  date: 'Thu, 02 Apr 2015 12:46:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3d662c1686f482d3af294318f476d88c',
  date: 'Thu, 02 Apr 2015 12:46:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66"',
  'x-ms-request-id': 'd9c22148-9ee8-44a5-afcc-b4881a786752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31999',
  'x-ms-correlation-request-id': 'aac7608d-b966-4ace-b129-d1ff4badef3c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124605Z:aac7608d-b966-4ace-b129-d1ff4badef3c',
  date: 'Thu, 02 Apr 2015 12:46:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66"',
  'x-ms-request-id': 'd9c22148-9ee8-44a5-afcc-b4881a786752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31999',
  'x-ms-correlation-request-id': 'aac7608d-b966-4ace-b129-d1ff4badef3c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124605Z:aac7608d-b966-4ace-b129-d1ff4badef3c',
  date: 'Thu, 02 Apr 2015 12:46:05 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c72267270fc685d098149d7b593b7ea6',
  date: 'Thu, 02 Apr 2015 12:46:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c72267270fc685d098149d7b593b7ea6',
  date: 'Thu, 02 Apr 2015 12:46:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet3104\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n      \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/15\",\r\n        \"ipConfigurations\": []\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b817064-f596-4ad0-ae28-0d9498eeca6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': '7e3c033b-e2b0-4739-b34d-a148845739cb',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124609Z:7e3c033b-e2b0-4739-b34d-a148845739cb',
  date: 'Thu, 02 Apr 2015 12:46:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet3104\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n      \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/15\",\r\n        \"ipConfigurations\": []\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b817064-f596-4ad0-ae28-0d9498eeca6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': '7e3c033b-e2b0-4739-b34d-a148845739cb',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124609Z:7e3c033b-e2b0-4739-b34d-a148845739cb',
  date: 'Thu, 02 Apr 2015 12:46:09 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3b5547d9e1da81dc82bbde4640973afa',
  date: 'Thu, 02 Apr 2015 12:46:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3b5547d9e1da81dc82bbde4640973afa',
  date: 'Thu, 02 Apr 2015 12:46:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66"',
  'x-ms-request-id': 'af06dfb9-9363-4587-a662-b632bb06c026',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '48b0a796-658f-48df-b681-05d3a7eb46e9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124612Z:48b0a796-658f-48df-b681-05d3a7eb46e9',
  date: 'Thu, 02 Apr 2015 12:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/15\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95c7ef1b-c24a-45e0-ab43-717d3b9f5f66"',
  'x-ms-request-id': 'af06dfb9-9363-4587-a662-b632bb06c026',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '48b0a796-658f-48df-b681-05d3a7eb46e9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124612Z:48b0a796-658f-48df-b681-05d3a7eb46e9',
  date: 'Thu, 02 Apr 2015 12:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2aa66a22a13384fcb43facb31a711bf3',
  date: 'Thu, 02 Apr 2015 12:46:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2aa66a22a13384fcb43facb31a711bf3',
  date: 'Thu, 02 Apr 2015 12:46:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"ab775625-1e9a-4ce9-b18b-7754363b7210\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '12273b8b-7e8a-4ec1-975c-00bb697ee1a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12273b8b-7e8a-4ec1-975c-00bb697ee1a8?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a66fe5f0-9619-4e34-9127-be7a460da170',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124615Z:a66fe5f0-9619-4e34-9127-be7a460da170',
  date: 'Thu, 02 Apr 2015 12:46:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"ab775625-1e9a-4ce9-b18b-7754363b7210\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '12273b8b-7e8a-4ec1-975c-00bb697ee1a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12273b8b-7e8a-4ec1-975c-00bb697ee1a8?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a66fe5f0-9619-4e34-9127-be7a460da170',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124615Z:a66fe5f0-9619-4e34-9127-be7a460da170',
  date: 'Thu, 02 Apr 2015 12:46:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2416dd4460768522b1f79c439d009b67',
  date: 'Thu, 02 Apr 2015 12:46:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2416dd4460768522b1f79c439d009b67',
  date: 'Thu, 02 Apr 2015 12:46:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12273b8b-7e8a-4ec1-975c-00bb697ee1a8?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09fac4ff-ce2d-4b91-97de-224d4b9b2ab2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '499a7b42-1a4a-4fb3-a4b4-b62e8cefc5d9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124629Z:499a7b42-1a4a-4fb3-a4b4-b62e8cefc5d9',
  date: 'Thu, 02 Apr 2015 12:46:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12273b8b-7e8a-4ec1-975c-00bb697ee1a8?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09fac4ff-ce2d-4b91-97de-224d4b9b2ab2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '499a7b42-1a4a-4fb3-a4b4-b62e8cefc5d9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124629Z:499a7b42-1a4a-4fb3-a4b4-b62e8cefc5d9',
  date: 'Thu, 02 Apr 2015 12:46:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b0584bbd823f8b3b93b7a150bc3cb43c',
  date: 'Thu, 02 Apr 2015 12:46:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b0584bbd823f8b3b93b7a150bc3cb43c',
  date: 'Thu, 02 Apr 2015 12:46:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '2abb7a65-6542-4692-ba33-e6350c05c849',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '37fdf41c-b53b-4a00-a43c-a6e3b15eef52',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124632Z:37fdf41c-b53b-4a00-a43c-a6e3b15eef52',
  date: 'Thu, 02 Apr 2015 12:46:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '2abb7a65-6542-4692-ba33-e6350c05c849',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '37fdf41c-b53b-4a00-a43c-a6e3b15eef52',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124632Z:37fdf41c-b53b-4a00-a43c-a6e3b15eef52',
  date: 'Thu, 02 Apr 2015 12:46:31 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f0e3099c41c78488903393bb501dd398',
  date: 'Thu, 02 Apr 2015 12:46:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f0e3099c41c78488903393bb501dd398',
  date: 'Thu, 02 Apr 2015 12:46:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '4c731e79-d5f0-4184-80a1-17c15ffc128a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '03983428-f711-410f-8191-9b3d4d217af9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124635Z:03983428-f711-410f-8191-9b3d4d217af9',
  date: 'Thu, 02 Apr 2015 12:46:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '4c731e79-d5f0-4184-80a1-17c15ffc128a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '03983428-f711-410f-8191-9b3d4d217af9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124635Z:03983428-f711-410f-8191-9b3d4d217af9',
  date: 'Thu, 02 Apr 2015 12:46:34 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5fa968d296ff86a79e30c3ae7eb0526e',
  date: 'Thu, 02 Apr 2015 12:46:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5fa968d296ff86a79e30c3ae7eb0526e',
  date: 'Thu, 02 Apr 2015 12:46:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '8f713541-d06d-44a8-971a-57946f1b38c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '372f1cb8-df31-47ff-a196-cef3515ea477',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124638Z:372f1cb8-df31-47ff-a196-cef3515ea477',
  date: 'Thu, 02 Apr 2015 12:46:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet3104\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/Microsoft.Network/virtualNetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104\",\r\n  \"etag\": \"W/\\\"c9ea6ce4-de70-4b24-8cda-ed06eec740af\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"ipConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '413',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c9ea6ce4-de70-4b24-8cda-ed06eec740af"',
  'x-ms-request-id': '8f713541-d06d-44a8-971a-57946f1b38c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '372f1cb8-df31-47ff-a196-cef3515ea477',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124638Z:372f1cb8-df31-47ff-a196-cef3515ea477',
  date: 'Thu, 02 Apr 2015 12:46:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6c77314d1142818eae1f28d5566b06de',
  date: 'Thu, 02 Apr 2015 12:46:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6c77314d1142818eae1f28d5566b06de',
  date: 'Thu, 02 Apr 2015 12:46:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '431a4e73-2434-4023-8005-f0b6ac59210c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '161375ff-957c-4afc-9228-1bca72b6be71',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124641Z:161375ff-957c-4afc-9228-1bca72b6be71',
  date: 'Thu, 02 Apr 2015 12:46:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate4255/providers/microsoft.network/virtualnetworks/xplatTestVnet5003/subnets/xplatTestSubnet3104?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '431a4e73-2434-4023-8005-f0b6ac59210c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '161375ff-957c-4afc-9228-1bca72b6be71',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124641Z:161375ff-957c-4afc-9228-1bca72b6be71',
  date: 'Thu, 02 Apr 2015 12:46:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd97716dc28fc8268b2bfd0205b00c25d',
  date: 'Thu, 02 Apr 2015 12:46:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd97716dc28fc8268b2bfd0205b00c25d',
  date: 'Thu, 02 Apr 2015 12:46:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '199357c3-c453-43aa-86bf-afe4df141d9f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': '1867cb54-2fb3-4c92-a816-fbcfc9071f55',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124654Z:1867cb54-2fb3-4c92-a816-fbcfc9071f55',
  date: 'Thu, 02 Apr 2015 12:46:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/431a4e73-2434-4023-8005-f0b6ac59210c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '199357c3-c453-43aa-86bf-afe4df141d9f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': '1867cb54-2fb3-4c92-a816-fbcfc9071f55',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124654Z:1867cb54-2fb3-4c92-a816-fbcfc9071f55',
  date: 'Thu, 02 Apr 2015 12:46:54 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate4255','xplatTestVnet5003','xplatTestSubnet3104'];};