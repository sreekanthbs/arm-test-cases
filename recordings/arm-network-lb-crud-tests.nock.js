[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1fd0fbb07f888ea486cbe011918cb6d3',
  date: 'Thu, 02 Apr 2015 12:57:46 GMT',
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
  'x-ms-request-id': '1fd0fbb07f888ea486cbe011918cb6d3',
  date: 'Thu, 02 Apr 2015 12:57:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'x-ms-correlation-request-id': '6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125748Z:6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:57:48 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'x-ms-correlation-request-id': '6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125748Z:6568b3b7-d5d9-4d96-958d-a49b82fd1709',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:57:48 GMT',
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
  'x-ms-request-id': 'c8c43864578b8acabf2f1243d8bd2194',
  date: 'Thu, 02 Apr 2015 12:57:50 GMT',
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
  'x-ms-request-id': 'c8c43864578b8acabf2f1243d8bd2194',
  date: 'Thu, 02 Apr 2015 12:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cc7aa1cf-6f14-4f4a-8c40-8253c21edbec',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cc7aa1cf-6f14-4f4a-8c40-8253c21edbec?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '60c85177-bf02-43a2-b053-a2a9a13b2f1d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125758Z:60c85177-bf02-43a2-b053-a2a9a13b2f1d',
  date: 'Thu, 02 Apr 2015 12:57:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cc7aa1cf-6f14-4f4a-8c40-8253c21edbec',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cc7aa1cf-6f14-4f4a-8c40-8253c21edbec?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '60c85177-bf02-43a2-b053-a2a9a13b2f1d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125758Z:60c85177-bf02-43a2-b053-a2a9a13b2f1d',
  date: 'Thu, 02 Apr 2015 12:57:58 GMT',
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
  'x-ms-request-id': '02dc6b284c688dce95f7adb27ceba3a7',
  date: 'Thu, 02 Apr 2015 12:58:09 GMT',
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
  'x-ms-request-id': '02dc6b284c688dce95f7adb27ceba3a7',
  date: 'Thu, 02 Apr 2015 12:58:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cc7aa1cf-6f14-4f4a-8c40-8253c21edbec?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '81b74e3d-3e9f-4562-a671-6b17e9f111fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': '940fef97-e3c3-4515-bb83-2ce6446bce82',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125811Z:940fef97-e3c3-4515-bb83-2ce6446bce82',
  date: 'Thu, 02 Apr 2015 12:58:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cc7aa1cf-6f14-4f4a-8c40-8253c21edbec?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '81b74e3d-3e9f-4562-a671-6b17e9f111fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': '940fef97-e3c3-4515-bb83-2ce6446bce82',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125811Z:940fef97-e3c3-4515-bb83-2ce6446bce82',
  date: 'Thu, 02 Apr 2015 12:58:11 GMT',
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
  'x-ms-request-id': '95882b7f84048d889336852911757733',
  date: 'Thu, 02 Apr 2015 12:58:13 GMT',
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
  'x-ms-request-id': '95882b7f84048d889336852911757733',
  date: 'Thu, 02 Apr 2015 12:58:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"019cca2b-4d76-44a2-b8a5-3179bc81c22b"',
  'x-ms-request-id': '42d79e28-ae8f-48fc-82ef-2f0f91a78342',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '78b78db7-23b4-4ac6-8cb0-607825576475',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125815Z:78b78db7-23b4-4ac6-8cb0-607825576475',
  date: 'Thu, 02 Apr 2015 12:58:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"019cca2b-4d76-44a2-b8a5-3179bc81c22b"',
  'x-ms-request-id': '42d79e28-ae8f-48fc-82ef-2f0f91a78342',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '78b78db7-23b4-4ac6-8cb0-607825576475',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125815Z:78b78db7-23b4-4ac6-8cb0-607825576475',
  date: 'Thu, 02 Apr 2015 12:58:14 GMT',
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
  'x-ms-request-id': '047ff758b4228f389bface0347346c13',
  date: 'Thu, 02 Apr 2015 12:58:17 GMT',
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
  'x-ms-request-id': '047ff758b4228f389bface0347346c13',
  date: 'Thu, 02 Apr 2015 12:58:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armmylb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb\",\r\n      \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/mypublicip\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"East US\"\r\n    },\r\n    {\r\n      \"name\": \"xplattestlb5426\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n      \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb931308-8e30-49be-95a5-b37f2b78641d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '4cd28a23-bf57-4441-b934-fa44c4c51c34',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125819Z:4cd28a23-bf57-4441-b934-fa44c4c51c34',
  date: 'Thu, 02 Apr 2015 12:58:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armmylb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb\",\r\n      \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/mypublicip\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"East US\"\r\n    },\r\n    {\r\n      \"name\": \"xplattestlb5426\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n      \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb931308-8e30-49be-95a5-b37f2b78641d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '4cd28a23-bf57-4441-b934-fa44c4c51c34',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125819Z:4cd28a23-bf57-4441-b934-fa44c4c51c34',
  date: 'Thu, 02 Apr 2015 12:58:19 GMT',
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
  'x-ms-request-id': '1282ea50ad2c8edbac5d6b5d61ba93da',
  date: 'Thu, 02 Apr 2015 12:58:21 GMT',
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
  'x-ms-request-id': '1282ea50ad2c8edbac5d6b5d61ba93da',
  date: 'Thu, 02 Apr 2015 12:58:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"019cca2b-4d76-44a2-b8a5-3179bc81c22b"',
  'x-ms-request-id': '90aaa334-1f2e-426c-b605-45558121ea4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '092e8df8-82f8-4f3a-8cc5-3035248afe14',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125822Z:092e8df8-82f8-4f3a-8cc5-3035248afe14',
  date: 'Thu, 02 Apr 2015 12:58:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb5426\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426\",\r\n  \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb5426/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"019cca2b-4d76-44a2-b8a5-3179bc81c22b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"019cca2b-4d76-44a2-b8a5-3179bc81c22b"',
  'x-ms-request-id': '90aaa334-1f2e-426c-b605-45558121ea4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '092e8df8-82f8-4f3a-8cc5-3035248afe14',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125822Z:092e8df8-82f8-4f3a-8cc5-3035248afe14',
  date: 'Thu, 02 Apr 2015 12:58:22 GMT',
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
  'x-ms-request-id': 'c08058d0680680edbcbcf15f6c2792f8',
  date: 'Thu, 02 Apr 2015 12:58:24 GMT',
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
  'x-ms-request-id': 'c08058d0680680edbcbcf15f6c2792f8',
  date: 'Thu, 02 Apr 2015 12:58:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '01622c9c-32b0-4ed9-856f-4981eea2a6d2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd1cc2905-ad1d-436f-b4e3-8aa60fcba036',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125831Z:d1cc2905-ad1d-436f-b4e3-8aa60fcba036',
  date: 'Thu, 02 Apr 2015 12:58:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb5426?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '01622c9c-32b0-4ed9-856f-4981eea2a6d2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd1cc2905-ad1d-436f-b4e3-8aa60fcba036',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125831Z:d1cc2905-ad1d-436f-b4e3-8aa60fcba036',
  date: 'Thu, 02 Apr 2015 12:58:30 GMT',
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
  'x-ms-request-id': '5b5dd066d26b867f8b5627349c34f0b3',
  date: 'Thu, 02 Apr 2015 12:58:42 GMT',
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
  'x-ms-request-id': '5b5dd066d26b867f8b5627349c34f0b3',
  date: 'Thu, 02 Apr 2015 12:58:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '875129df-232f-4e58-b4ea-aa3bb1187355',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '585bfd64-d54d-4851-ae2a-fc2240f6f2e3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125845Z:585bfd64-d54d-4851-ae2a-fc2240f6f2e3',
  date: 'Thu, 02 Apr 2015 12:58:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/01622c9c-32b0-4ed9-856f-4981eea2a6d2?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '875129df-232f-4e58-b4ea-aa3bb1187355',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '585bfd64-d54d-4851-ae2a-fc2240f6f2e3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125845Z:585bfd64-d54d-4851-ae2a-fc2240f6f2e3',
  date: 'Thu, 02 Apr 2015 12:58:44 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplattestlb5426'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b943b1c3956284b8b10f5d3630655aab',
  date: 'Thu, 02 Apr 2015 12:59:07 GMT',
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
  'x-ms-request-id': 'b943b1c3956284b8b10f5d3630655aab',
  date: 'Thu, 02 Apr 2015 12:59:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1a993288-23d3-4fc0-a847-66923bad1000',
  'x-ms-correlation-request-id': '1a993288-23d3-4fc0-a847-66923bad1000',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125908Z:1a993288-23d3-4fc0-a847-66923bad1000',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:59:08 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '1a993288-23d3-4fc0-a847-66923bad1000',
  'x-ms-correlation-request-id': '1a993288-23d3-4fc0-a847-66923bad1000',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125908Z:1a993288-23d3-4fc0-a847-66923bad1000',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:59:08 GMT',
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
  'x-ms-request-id': '51d6168e267d856b98edca0986440975',
  date: 'Thu, 02 Apr 2015 12:59:10 GMT',
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
  'x-ms-request-id': '51d6168e267d856b98edca0986440975',
  date: 'Thu, 02 Apr 2015 12:59:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e19a86dd-a45d-4e5d-aee2-0018e83cee8f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e19a86dd-a45d-4e5d-aee2-0018e83cee8f?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'f3fb8b21-54b6-4726-8d09-d7b4052b13d3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125916Z:f3fb8b21-54b6-4726-8d09-d7b4052b13d3',
  date: 'Thu, 02 Apr 2015 12:59:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e19a86dd-a45d-4e5d-aee2-0018e83cee8f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e19a86dd-a45d-4e5d-aee2-0018e83cee8f?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'f3fb8b21-54b6-4726-8d09-d7b4052b13d3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125916Z:f3fb8b21-54b6-4726-8d09-d7b4052b13d3',
  date: 'Thu, 02 Apr 2015 12:59:15 GMT',
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
  'x-ms-request-id': 'c268b6e30b3684c787c206172c6e5e3e',
  date: 'Thu, 02 Apr 2015 12:59:28 GMT',
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
  'x-ms-request-id': 'c268b6e30b3684c787c206172c6e5e3e',
  date: 'Thu, 02 Apr 2015 12:59:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e19a86dd-a45d-4e5d-aee2-0018e83cee8f?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c93cfb7-3fcc-4073-b707-ff8927fc1d41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'cd4b5f15-0b14-4f73-b0e6-3be72dcc631d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125929Z:cd4b5f15-0b14-4f73-b0e6-3be72dcc631d',
  date: 'Thu, 02 Apr 2015 12:59:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e19a86dd-a45d-4e5d-aee2-0018e83cee8f?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c93cfb7-3fcc-4073-b707-ff8927fc1d41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'cd4b5f15-0b14-4f73-b0e6-3be72dcc631d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125929Z:cd4b5f15-0b14-4f73-b0e6-3be72dcc631d',
  date: 'Thu, 02 Apr 2015 12:59:29 GMT',
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
  'x-ms-request-id': 'a44a4083e7ba86d79f8e2a0d2b7b5ef9',
  date: 'Thu, 02 Apr 2015 12:59:31 GMT',
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
  'x-ms-request-id': 'a44a4083e7ba86d79f8e2a0d2b7b5ef9',
  date: 'Thu, 02 Apr 2015 12:59:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"114ddea0-99d7-4f94-aa4b-e79e783fa953"',
  'x-ms-request-id': 'b40d1159-5484-4222-8171-df5d1f066bc3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '37be3c87-5b81-4933-a10f-576fa2fe4c1c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125933Z:37be3c87-5b81-4933-a10f-576fa2fe4c1c',
  date: 'Thu, 02 Apr 2015 12:59:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"114ddea0-99d7-4f94-aa4b-e79e783fa953"',
  'x-ms-request-id': 'b40d1159-5484-4222-8171-df5d1f066bc3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '37be3c87-5b81-4933-a10f-576fa2fe4c1c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125933Z:37be3c87-5b81-4933-a10f-576fa2fe4c1c',
  date: 'Thu, 02 Apr 2015 12:59:33 GMT',
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
  'x-ms-request-id': 'f24a6d0cb8e18ff18c9019ec9d02cf96',
  date: 'Thu, 02 Apr 2015 12:59:34 GMT',
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
  'x-ms-request-id': 'f24a6d0cb8e18ff18c9019ec9d02cf96',
  date: 'Thu, 02 Apr 2015 12:59:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armmylb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb\",\r\n      \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/mypublicip\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"East US\"\r\n    },\r\n    {\r\n      \"name\": \"xplattestlb4131\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n      \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8939a9ea-03de-494f-b0d8-567b127182ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': 'e2d93d83-0a6c-43e7-ace1-d12071740126',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125936Z:e2d93d83-0a6c-43e7-ace1-d12071740126',
  date: 'Thu, 02 Apr 2015 12:59:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armmylb\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb\",\r\n      \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/armmylb/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"7d774c69-f140-43a3-960e-0be795b2ec59\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/mypublicip\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"East US\"\r\n    },\r\n    {\r\n      \"name\": \"xplattestlb4131\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n      \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"frontendIPConfigurations\": [\r\n          {\r\n            \"name\": \"LB-Frontend\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n            \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n              },\r\n              \"loadBalancingRules\": [],\r\n              \"inboundNatRules\": [],\r\n              \"outboundNatRules\": []\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8939a9ea-03de-494f-b0d8-567b127182ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': 'e2d93d83-0a6c-43e7-ace1-d12071740126',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125936Z:e2d93d83-0a6c-43e7-ace1-d12071740126',
  date: 'Thu, 02 Apr 2015 12:59:36 GMT',
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
  'x-ms-request-id': '8ee9a464a293823ba66686969b46b2c3',
  date: 'Thu, 02 Apr 2015 12:59:37 GMT',
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
  'x-ms-request-id': '8ee9a464a293823ba66686969b46b2c3',
  date: 'Thu, 02 Apr 2015 12:59:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"114ddea0-99d7-4f94-aa4b-e79e783fa953"',
  'x-ms-request-id': '456e776f-a126-4260-980d-2a23eff99bc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': 'c108eda6-243c-468f-8098-f45f24f748d7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125940Z:c108eda6-243c-468f-8098-f45f24f748d7',
  date: 'Thu, 02 Apr 2015 12:59:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb4131\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131\",\r\n  \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/loadBalancers/xplattestlb4131/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"114ddea0-99d7-4f94-aa4b-e79e783fa953\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/Microsoft.Network/publicIPAddresses/armpubliciptemp1\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"114ddea0-99d7-4f94-aa4b-e79e783fa953"',
  'x-ms-request-id': '456e776f-a126-4260-980d-2a23eff99bc0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': 'c108eda6-243c-468f-8098-f45f24f748d7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125940Z:c108eda6-243c-468f-8098-f45f24f748d7',
  date: 'Thu, 02 Apr 2015 12:59:40 GMT',
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
  'x-ms-request-id': '0658d1f8fb088cdea8a26d690f5e0b5f',
  date: 'Thu, 02 Apr 2015 12:59:42 GMT',
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
  'x-ms-request-id': '0658d1f8fb088cdea8a26d690f5e0b5f',
  date: 'Thu, 02 Apr 2015 12:59:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '764dbcee-40f4-465c-bb32-8257f49f57af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f9c9ac7c-befb-43c8-a43a-447a5f186edc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125948Z:f9c9ac7c-befb-43c8-a43a-447a5f186edc',
  date: 'Thu, 02 Apr 2015 12:59:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptemp1/providers/microsoft.network/loadBalancers/xplattestlb4131?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '764dbcee-40f4-465c-bb32-8257f49f57af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f9c9ac7c-befb-43c8-a43a-447a5f186edc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125948Z:f9c9ac7c-befb-43c8-a43a-447a5f186edc',
  date: 'Thu, 02 Apr 2015 12:59:48 GMT',
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
  'x-ms-request-id': '984f505ab0968db09fc853848850967d',
  date: 'Thu, 02 Apr 2015 12:59:59 GMT',
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
  'x-ms-request-id': '984f505ab0968db09fc853848850967d',
  date: 'Thu, 02 Apr 2015 12:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '88cbb010-496b-4531-8973-15271079f1fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31985',
  'x-ms-correlation-request-id': 'a5caae7b-2945-4323-89e4-3020f618fc8e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T130001Z:a5caae7b-2945-4323-89e4-3020f618fc8e',
  date: 'Thu, 02 Apr 2015 13:00:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/764dbcee-40f4-465c-bb32-8257f49f57af?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '88cbb010-496b-4531-8973-15271079f1fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31985',
  'x-ms-correlation-request-id': 'a5caae7b-2945-4323-89e4-3020f618fc8e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T130001Z:a5caae7b-2945-4323-89e4-3020f618fc8e',
  date: 'Thu, 02 Apr 2015 13:00:01 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplattestlb4131'];};