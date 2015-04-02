[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '301377c55bfe848e8fc515a129696f55',
  date: 'Thu, 02 Apr 2015 12:49:26 GMT',
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
  'x-ms-request-id': '301377c55bfe848e8fc515a129696f55',
  date: 'Thu, 02 Apr 2015 12:49:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate1505?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate1505' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-request-id': 'edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'x-ms-correlation-request-id': 'edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124927Z:edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:26 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate1505?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate1505' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-request-id': 'edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'x-ms-correlation-request-id': 'edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124927Z:edbf280e-2866-4633-af6d-fb0cde14ef3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:26 GMT',
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
  'x-ms-request-id': '721cc1b26d6682919ed2c766bc39357f',
  date: 'Thu, 02 Apr 2015 12:49:28 GMT',
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
  'x-ms-request-id': '721cc1b26d6682919ed2c766bc39357f',
  date: 'Thu, 02 Apr 2015 12:49:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate1505?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505\",\"name\":\"xplatTestGCreate1505\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'x-ms-correlation-request-id': 'ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124930Z:ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate1505?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505\",\"name\":\"xplatTestGCreate1505\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'x-ms-correlation-request-id': 'ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124930Z:ace7c975-30ad-45e0-afc6-ef11e47e5fce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:30 GMT',
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
  'x-ms-request-id': 'a59de91ceb7f84acb94f76080e1bf4ab',
  date: 'Thu, 02 Apr 2015 12:49:32 GMT',
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
  'x-ms-request-id': 'a59de91ceb7f84acb94f76080e1bf4ab',
  date: 'Thu, 02 Apr 2015 12:49:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6da53582-2c8d-4a20-a17a-634451c83555',
  'x-ms-correlation-request-id': '6da53582-2c8d-4a20-a17a-634451c83555',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124933Z:6da53582-2c8d-4a20-a17a-634451c83555',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:33 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6da53582-2c8d-4a20-a17a-634451c83555',
  'x-ms-correlation-request-id': '6da53582-2c8d-4a20-a17a-634451c83555',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124933Z:6da53582-2c8d-4a20-a17a-634451c83555',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:49:33 GMT',
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
  'x-ms-request-id': '35f9510f866e893ca4ca021b241c2f08',
  date: 'Thu, 02 Apr 2015 12:49:35 GMT',
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
  'x-ms-request-id': '35f9510f866e893ca4ca021b241c2f08',
  date: 'Thu, 02 Apr 2015 12:49:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"379b46a6-c3b6-491c-8be1-23232494fb0b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '48a4d163-f8e7-44cb-96ae-f4cd52cc4faa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/48a4d163-f8e7-44cb-96ae-f4cd52cc4faa?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a86985fb-0ddb-4a6b-bac5-f5c58121818a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124942Z:a86985fb-0ddb-4a6b-bac5-f5c58121818a',
  date: 'Thu, 02 Apr 2015 12:49:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"379b46a6-c3b6-491c-8be1-23232494fb0b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '48a4d163-f8e7-44cb-96ae-f4cd52cc4faa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/48a4d163-f8e7-44cb-96ae-f4cd52cc4faa?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a86985fb-0ddb-4a6b-bac5-f5c58121818a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124942Z:a86985fb-0ddb-4a6b-bac5-f5c58121818a',
  date: 'Thu, 02 Apr 2015 12:49:42 GMT',
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
  'x-ms-request-id': '2e0b75fb6db288729bef0fbea7c82fc1',
  date: 'Thu, 02 Apr 2015 12:49:53 GMT',
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
  'x-ms-request-id': '2e0b75fb6db288729bef0fbea7c82fc1',
  date: 'Thu, 02 Apr 2015 12:49:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/48a4d163-f8e7-44cb-96ae-f4cd52cc4faa?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '22943d3b-5b40-41dd-888b-534be941e676',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '491228d1-e394-4f83-a0b4-35b790850c44',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124955Z:491228d1-e394-4f83-a0b4-35b790850c44',
  date: 'Thu, 02 Apr 2015 12:49:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/48a4d163-f8e7-44cb-96ae-f4cd52cc4faa?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '22943d3b-5b40-41dd-888b-534be941e676',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '491228d1-e394-4f83-a0b4-35b790850c44',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124955Z:491228d1-e394-4f83-a0b4-35b790850c44',
  date: 'Thu, 02 Apr 2015 12:49:55 GMT',
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
  'x-ms-request-id': 'c9f7051f5bfb8b48ad71d13fcb001be2',
  date: 'Thu, 02 Apr 2015 12:49:56 GMT',
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
  'x-ms-request-id': 'c9f7051f5bfb8b48ad71d13fcb001be2',
  date: 'Thu, 02 Apr 2015 12:49:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf"',
  'x-ms-request-id': '4db53e9e-a5df-4a73-a7db-71e87cf08461',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': 'dbf9e002-4681-42e4-ba7f-bd3a2619dc1f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124958Z:dbf9e002-4681-42e4-ba7f-bd3a2619dc1f',
  date: 'Thu, 02 Apr 2015 12:49:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf"',
  'x-ms-request-id': '4db53e9e-a5df-4a73-a7db-71e87cf08461',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': 'dbf9e002-4681-42e4-ba7f-bd3a2619dc1f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124958Z:dbf9e002-4681-42e4-ba7f-bd3a2619dc1f',
  date: 'Thu, 02 Apr 2015 12:49:57 GMT',
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
  'x-ms-request-id': 'ae1f2cecd69f864cb01774cc86c46893',
  date: 'Thu, 02 Apr 2015 12:50:00 GMT',
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
  'x-ms-request-id': 'ae1f2cecd69f864cb01774cc86c46893',
  date: 'Thu, 02 Apr 2015 12:50:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip2\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n      \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"xplattestgcreate\",\r\n          \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"West US\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '652',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f05195f9-fffe-49c2-bb21-c357926f5007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '74be0db1-7f58-4d60-9589-d1465f984cc9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125001Z:74be0db1-7f58-4d60-9589-d1465f984cc9',
  date: 'Thu, 02 Apr 2015 12:50:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip2\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n      \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"xplattestgcreate\",\r\n          \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"West US\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '652',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f05195f9-fffe-49c2-bb21-c357926f5007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '74be0db1-7f58-4d60-9589-d1465f984cc9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125001Z:74be0db1-7f58-4d60-9589-d1465f984cc9',
  date: 'Thu, 02 Apr 2015 12:50:00 GMT',
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
  'x-ms-request-id': '480c3f1e642f83b89e591370ec6d8c4d',
  date: 'Thu, 02 Apr 2015 12:50:03 GMT',
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
  'x-ms-request-id': '480c3f1e642f83b89e591370ec6d8c4d',
  date: 'Thu, 02 Apr 2015 12:50:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf"',
  'x-ms-request-id': '8ee78ba6-8266-4712-bcde-df8d6d3117bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '2d9799ec-3809-475c-849c-66ee897e5a61',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125004Z:2d9799ec-3809-475c-849c-66ee897e5a61',
  date: 'Thu, 02 Apr 2015 12:50:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip2\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/Microsoft.Network/publicIPAddresses/armpublicip2\",\r\n  \"etag\": \"W/\\\"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestgcreate\",\r\n      \"fqdn\": \"xplattestgcreate.westus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b5aa45a1-ba54-4b71-a1a7-036cf8f940cf"',
  'x-ms-request-id': '8ee78ba6-8266-4712-bcde-df8d6d3117bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '2d9799ec-3809-475c-849c-66ee897e5a61',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125004Z:2d9799ec-3809-475c-849c-66ee897e5a61',
  date: 'Thu, 02 Apr 2015 12:50:04 GMT',
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
  'x-ms-request-id': '23c211b61bd2876eb0ada2826c1a4ddf',
  date: 'Thu, 02 Apr 2015 12:50:05 GMT',
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
  'x-ms-request-id': '23c211b61bd2876eb0ada2826c1a4ddf',
  date: 'Thu, 02 Apr 2015 12:50:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '481e56d2-7d5a-4b7d-8465-f82960a33bb7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125010Z:481e56d2-7d5a-4b7d-8465-f82960a33bb7',
  date: 'Thu, 02 Apr 2015 12:50:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate1505/providers/microsoft.network/publicIPAddresses/armpublicip2/?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '481e56d2-7d5a-4b7d-8465-f82960a33bb7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125010Z:481e56d2-7d5a-4b7d-8465-f82960a33bb7',
  date: 'Thu, 02 Apr 2015 12:50:10 GMT',
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
  'x-ms-request-id': 'a4016ded719b8011b96f8fe98a22a2f6',
  date: 'Thu, 02 Apr 2015 12:50:22 GMT',
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
  'x-ms-request-id': 'a4016ded719b8011b96f8fe98a22a2f6',
  date: 'Thu, 02 Apr 2015 12:50:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd23e8e36-7fbb-456f-aa7b-133021bc981d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '0a24faff-903c-4e49-ac63-0bd1473cd3af',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125023Z:0a24faff-903c-4e49-ac63-0bd1473cd3af',
  date: 'Thu, 02 Apr 2015 12:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/fd6f0d3b-3352-493a-bf1d-6ee4eef9dc6e?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd23e8e36-7fbb-456f-aa7b-133021bc981d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '0a24faff-903c-4e49-ac63-0bd1473cd3af',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125023Z:0a24faff-903c-4e49-ac63-0bd1473cd3af',
  date: 'Thu, 02 Apr 2015 12:50:23 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate1505'];};