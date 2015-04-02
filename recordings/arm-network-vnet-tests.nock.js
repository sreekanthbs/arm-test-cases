[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '350738eaf02b8301b500a18683f1e5e9',
  date: 'Thu, 02 Apr 2015 12:47:43 GMT',
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
  'x-ms-request-id': '350738eaf02b8301b500a18683f1e5e9',
  date: 'Thu, 02 Apr 2015 12:47:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate2531?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate2531' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-request-id': '7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'x-ms-correlation-request-id': '7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124742Z:7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:42 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate2531?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate2531' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-request-id': '7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'x-ms-correlation-request-id': '7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124742Z:7d2eb63f-a57c-44a3-b05b-44460d4c0097',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:42 GMT',
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
  'x-ms-request-id': 'cfa9dd56c36c87558a853bd5674a2590',
  date: 'Thu, 02 Apr 2015 12:47:44 GMT',
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
  'x-ms-request-id': 'cfa9dd56c36c87558a853bd5674a2590',
  date: 'Thu, 02 Apr 2015 12:47:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate2531?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531\",\"name\":\"xplatTestGCreate2531\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '83a70817-164c-4f32-9a6e-abff4aa34b13',
  'x-ms-correlation-request-id': '83a70817-164c-4f32-9a6e-abff4aa34b13',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124747Z:83a70817-164c-4f32-9a6e-abff4aa34b13',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreate2531?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531\",\"name\":\"xplatTestGCreate2531\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '83a70817-164c-4f32-9a6e-abff4aa34b13',
  'x-ms-correlation-request-id': '83a70817-164c-4f32-9a6e-abff4aa34b13',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124747Z:83a70817-164c-4f32-9a6e-abff4aa34b13',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:46 GMT',
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
  'x-ms-request-id': '6c5b0492b8ab8571b032d2cec31b9d48',
  date: 'Thu, 02 Apr 2015 12:47:49 GMT',
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
  'x-ms-request-id': '6c5b0492b8ab8571b032d2cec31b9d48',
  date: 'Thu, 02 Apr 2015 12:47:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e7306e5c-0411-4f35-a65d-297b9efeae38',
  'x-ms-correlation-request-id': 'e7306e5c-0411-4f35-a65d-297b9efeae38',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124749Z:e7306e5c-0411-4f35-a65d-297b9efeae38',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:48 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e7306e5c-0411-4f35-a65d-297b9efeae38',
  'x-ms-correlation-request-id': 'e7306e5c-0411-4f35-a65d-297b9efeae38',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124749Z:e7306e5c-0411-4f35-a65d-297b9efeae38',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:47:48 GMT',
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
  'x-ms-request-id': '09103225e04e8355acad6bf2efe5ba9a',
  date: 'Thu, 02 Apr 2015 12:47:51 GMT',
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
  'x-ms-request-id': '09103225e04e8355acad6bf2efe5ba9a',
  date: 'Thu, 02 Apr 2015 12:47:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"0b795145-20aa-4730-aa0b-5024e448b26b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'c2f698db-4b48-47f6-878e-162c7a3b5c06',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c2f698db-4b48-47f6-878e-162c7a3b5c06?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e42a4069-eb12-4e61-84d5-461032b1c0a4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124757Z:e42a4069-eb12-4e61-84d5-461032b1c0a4',
  date: 'Thu, 02 Apr 2015 12:47:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"0b795145-20aa-4730-aa0b-5024e448b26b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '514',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'c2f698db-4b48-47f6-878e-162c7a3b5c06',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c2f698db-4b48-47f6-878e-162c7a3b5c06?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e42a4069-eb12-4e61-84d5-461032b1c0a4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124757Z:e42a4069-eb12-4e61-84d5-461032b1c0a4',
  date: 'Thu, 02 Apr 2015 12:47:57 GMT',
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
  'x-ms-request-id': 'e64ea3b883048b1cb299f361578073d8',
  date: 'Thu, 02 Apr 2015 12:48:08 GMT',
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
  'x-ms-request-id': 'e64ea3b883048b1cb299f361578073d8',
  date: 'Thu, 02 Apr 2015 12:48:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c2f698db-4b48-47f6-878e-162c7a3b5c06?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60e9b7f6-6548-4aee-b8f0-8fe456ace7cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'e0559d36-00c6-4392-be6c-31c5069e2a99',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124810Z:e0559d36-00c6-4392-be6c-31c5069e2a99',
  date: 'Thu, 02 Apr 2015 12:48:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/c2f698db-4b48-47f6-878e-162c7a3b5c06?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60e9b7f6-6548-4aee-b8f0-8fe456ace7cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'e0559d36-00c6-4392-be6c-31c5069e2a99',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124810Z:e0559d36-00c6-4392-be6c-31c5069e2a99',
  date: 'Thu, 02 Apr 2015 12:48:09 GMT',
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
  'x-ms-request-id': '3b735249d34e8642a10dd7ac9addfd4c',
  date: 'Thu, 02 Apr 2015 12:48:11 GMT',
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
  'x-ms-request-id': '3b735249d34e8642a10dd7ac9addfd4c',
  date: 'Thu, 02 Apr 2015 12:48:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"edae0137-7340-4225-b695-41dcc72af442\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edae0137-7340-4225-b695-41dcc72af442"',
  'x-ms-request-id': '39c0d000-11ab-4038-9143-d2838a50f56f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': 'a2a91beb-e397-4134-82c1-62989f6fa636',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124813Z:a2a91beb-e397-4134-82c1-62989f6fa636',
  date: 'Thu, 02 Apr 2015 12:48:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"edae0137-7340-4225-b695-41dcc72af442\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edae0137-7340-4225-b695-41dcc72af442"',
  'x-ms-request-id': '39c0d000-11ab-4038-9143-d2838a50f56f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': 'a2a91beb-e397-4134-82c1-62989f6fa636',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124813Z:a2a91beb-e397-4134-82c1-62989f6fa636',
  date: 'Thu, 02 Apr 2015 12:48:12 GMT',
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
  'x-ms-request-id': 'dd3250f9bc0b878eacfdf5c0081e123c',
  date: 'Thu, 02 Apr 2015 12:48:14 GMT',
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
  'x-ms-request-id': 'dd3250f9bc0b878eacfdf5c0081e123c',
  date: 'Thu, 02 Apr 2015 12:48:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"edae0137-7340-4225-b695-41dcc72af442\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edae0137-7340-4225-b695-41dcc72af442"',
  'x-ms-request-id': '64c656f6-a48d-40cf-a899-6b18f3d6e125',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': 'bf4e2428-a83c-44ab-9a22-84ddc22e990a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124816Z:bf4e2428-a83c-44ab-9a22-84ddc22e990a',
  date: 'Thu, 02 Apr 2015 12:48:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"edae0137-7340-4225-b695-41dcc72af442\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edae0137-7340-4225-b695-41dcc72af442"',
  'x-ms-request-id': '64c656f6-a48d-40cf-a899-6b18f3d6e125',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': 'bf4e2428-a83c-44ab-9a22-84ddc22e990a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124816Z:bf4e2428-a83c-44ab-9a22-84ddc22e990a',
  date: 'Thu, 02 Apr 2015 12:48:15 GMT',
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
  'x-ms-request-id': '12a15b792e448486a168cbdb7c98d809',
  date: 'Thu, 02 Apr 2015 12:48:17 GMT',
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
  'x-ms-request-id': '12a15b792e448486a168cbdb7c98d809',
  date: 'Thu, 02 Apr 2015 12:48:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e3e753ea-4bab-4eff-a9da-632720aaf8a7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e3e753ea-4bab-4eff-a9da-632720aaf8a7?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3bfff0f5-8c1a-47d8-aca1-7ab902a2feae',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124819Z:3bfff0f5-8c1a-47d8-aca1-7ab902a2feae',
  date: 'Thu, 02 Apr 2015 12:48:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e3e753ea-4bab-4eff-a9da-632720aaf8a7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e3e753ea-4bab-4eff-a9da-632720aaf8a7?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3bfff0f5-8c1a-47d8-aca1-7ab902a2feae',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124819Z:3bfff0f5-8c1a-47d8-aca1-7ab902a2feae',
  date: 'Thu, 02 Apr 2015 12:48:18 GMT',
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
  'x-ms-request-id': '2aabf851cb7a8dd386c54040a50a6f39',
  date: 'Thu, 02 Apr 2015 12:48:30 GMT',
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
  'x-ms-request-id': '2aabf851cb7a8dd386c54040a50a6f39',
  date: 'Thu, 02 Apr 2015 12:48:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e3e753ea-4bab-4eff-a9da-632720aaf8a7?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a5daacdd-0e62-4a72-b93c-eae487e56e09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '39606717-947b-4bb1-a3b0-663d957dcc44',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124832Z:39606717-947b-4bb1-a3b0-663d957dcc44',
  date: 'Thu, 02 Apr 2015 12:48:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e3e753ea-4bab-4eff-a9da-632720aaf8a7?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a5daacdd-0e62-4a72-b93c-eae487e56e09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '39606717-947b-4bb1-a3b0-663d957dcc44',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124832Z:39606717-947b-4bb1-a3b0-663d957dcc44',
  date: 'Thu, 02 Apr 2015 12:48:31 GMT',
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
  'x-ms-request-id': '0f16e14c821b8e4e897447cac6b90d67',
  date: 'Thu, 02 Apr 2015 12:48:34 GMT',
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
  'x-ms-request-id': '0f16e14c821b8e4e897447cac6b90d67',
  date: 'Thu, 02 Apr 2015 12:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '4b76ae6c-772b-40ce-a757-cd794422d324',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '74e06652-8093-443e-b34e-04b84fcb4641',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124835Z:74e06652-8093-443e-b34e-04b84fcb4641',
  date: 'Thu, 02 Apr 2015 12:48:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '4b76ae6c-772b-40ce-a757-cd794422d324',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '74e06652-8093-443e-b34e-04b84fcb4641',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124835Z:74e06652-8093-443e-b34e-04b84fcb4641',
  date: 'Thu, 02 Apr 2015 12:48:35 GMT',
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
  'x-ms-request-id': '3b3207f98aa18e908d8ef1d132fb7501',
  date: 'Thu, 02 Apr 2015 12:48:37 GMT',
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
  'x-ms-request-id': '3b3207f98aa18e908d8ef1d132fb7501',
  date: 'Thu, 02 Apr 2015 12:48:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '07b56d14-fd90-4b0d-b824-d8e7ba6bc793',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'bad52208-4656-460a-b30c-113bd56c0df2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124838Z:bad52208-4656-460a-b30c-113bd56c0df2',
  date: 'Thu, 02 Apr 2015 12:48:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '07b56d14-fd90-4b0d-b824-d8e7ba6bc793',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-correlation-request-id': 'bad52208-4656-460a-b30c-113bd56c0df2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124838Z:bad52208-4656-460a-b30c-113bd56c0df2',
  date: 'Thu, 02 Apr 2015 12:48:37 GMT',
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
  'x-ms-request-id': '4ea596da5f998b908087edb576baf095',
  date: 'Thu, 02 Apr 2015 12:48:39 GMT',
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
  'x-ms-request-id': '4ea596da5f998b908087edb576baf095',
  date: 'Thu, 02 Apr 2015 12:48:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestVnet7742\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n      \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/12\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"10.0.1.0\"\r\n          ]\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9933c643-f380-4cdf-8eb4-a3328ea1f37a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'a6a4bf2f-d375-45ad-9415-2c55b8fd8a6e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124841Z:a6a4bf2f-d375-45ad-9415-2c55b8fd8a6e',
  date: 'Thu, 02 Apr 2015 12:48:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestVnet7742\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n      \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/12\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"10.0.1.0\"\r\n          ]\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9933c643-f380-4cdf-8eb4-a3328ea1f37a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'a6a4bf2f-d375-45ad-9415-2c55b8fd8a6e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124841Z:a6a4bf2f-d375-45ad-9415-2c55b8fd8a6e',
  date: 'Thu, 02 Apr 2015 12:48:41 GMT',
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
  'x-ms-request-id': '836f2e5cc2aa8bf0ace497d6c99a671d',
  date: 'Thu, 02 Apr 2015 12:48:43 GMT',
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
  'x-ms-request-id': '836f2e5cc2aa8bf0ace497d6c99a671d',
  date: 'Thu, 02 Apr 2015 12:48:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '4df13cfc-5cdf-4b2e-aa8a-fd317ac8267b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': '3fc60618-aa2c-4872-ad82-7bd420c422a1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124844Z:3fc60618-aa2c-4872-ad82-7bd420c422a1',
  date: 'Thu, 02 Apr 2015 12:48:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet7742\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/Microsoft.Network/virtualNetworks/xplatTestVnet7742\",\r\n  \"etag\": \"W/\\\"5ed375a6-a351-440d-8e62-549696d8e93c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.1.0\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '515',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5ed375a6-a351-440d-8e62-549696d8e93c"',
  'x-ms-request-id': '4df13cfc-5cdf-4b2e-aa8a-fd317ac8267b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': '3fc60618-aa2c-4872-ad82-7bd420c422a1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124844Z:3fc60618-aa2c-4872-ad82-7bd420c422a1',
  date: 'Thu, 02 Apr 2015 12:48:44 GMT',
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
  'x-ms-request-id': '75a8d862995c868aa80f48ff40e0245c',
  date: 'Thu, 02 Apr 2015 12:48:46 GMT',
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
  'x-ms-request-id': '75a8d862995c868aa80f48ff40e0245c',
  date: 'Thu, 02 Apr 2015 12:48:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'dd66b404-ce1a-4865-a687-cbd08f173124',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f80df0cc-34d9-459d-845b-f16e72d90765',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124850Z:f80df0cc-34d9-459d-845b-f16e72d90765',
  date: 'Thu, 02 Apr 2015 12:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreate2531/providers/microsoft.network/virtualnetworks/xplatTestVnet7742?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'dd66b404-ce1a-4865-a687-cbd08f173124',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f80df0cc-34d9-459d-845b-f16e72d90765',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124850Z:f80df0cc-34d9-459d-845b-f16e72d90765',
  date: 'Thu, 02 Apr 2015 12:48:49 GMT',
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
  'x-ms-request-id': '534124865a3e80dca097eb2139687826',
  date: 'Thu, 02 Apr 2015 12:49:02 GMT',
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
  'x-ms-request-id': '534124865a3e80dca097eb2139687826',
  date: 'Thu, 02 Apr 2015 12:49:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2d4aa4d5-7022-4c98-9335-40a7a8b406c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '3d1ee483-1a5e-4f69-a23a-fab6519db169',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124903Z:3d1ee483-1a5e-4f69-a23a-fab6519db169',
  date: 'Thu, 02 Apr 2015 12:49:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/dd66b404-ce1a-4865-a687-cbd08f173124?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2d4aa4d5-7022-4c98-9335-40a7a8b406c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '3d1ee483-1a5e-4f69-a23a-fab6519db169',
  'x-ms-routing-request-id': 'EASTASIA:20150402T124903Z:3d1ee483-1a5e-4f69-a23a-fab6519db169',
  date: 'Thu, 02 Apr 2015 12:49:03 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate2531','xplatTestVnet7742'];};