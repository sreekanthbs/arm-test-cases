[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '56c44b80ab0884ef84ba52cca613b94b',
  date: 'Thu, 02 Apr 2015 10:44:21 GMT',
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
  'x-ms-request-id': '56c44b80ab0884ef84ba52cca613b94b',
  date: 'Thu, 02 Apr 2015 10:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'x-ms-correlation-request-id': '2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104424Z:2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:44:23 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'x-ms-correlation-request-id': '2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104424Z:2bcb62d9-2a70-47ed-9bf1-1c85732ceb03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:44:23 GMT',
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
  'x-ms-request-id': 'f300e7776e92819ca507e71c6351805e',
  date: 'Thu, 02 Apr 2015 10:44:28 GMT',
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
  'x-ms-request-id': 'f300e7776e92819ca507e71c6351805e',
  date: 'Thu, 02 Apr 2015 10:44:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fd6fbe34-b78e-4c53-be26-eadf6d3cfdeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'dc42157b-7cae-450b-880e-ac519574fc58',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104436Z:dc42157b-7cae-450b-880e-ac519574fc58',
  date: 'Thu, 02 Apr 2015 10:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fd6fbe34-b78e-4c53-be26-eadf6d3cfdeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'dc42157b-7cae-450b-880e-ac519574fc58',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104436Z:dc42157b-7cae-450b-880e-ac519574fc58',
  date: 'Thu, 02 Apr 2015 10:44:36 GMT',
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
  'x-ms-request-id': '44c0303a4f4c88e396ef376db6717d92',
  date: 'Thu, 02 Apr 2015 10:44:39 GMT',
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
  'x-ms-request-id': '44c0303a4f4c88e396ef376db6717d92',
  date: 'Thu, 02 Apr 2015 10:44:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'x-ms-correlation-request-id': '333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104441Z:333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:44:41 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3056?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'x-ms-correlation-request-id': '333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104441Z:333416ed-56c9-483c-8c1c-a7357d5d7fa7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:44:41 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB3056','LB-Probe781'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'dc69c8d14a6484b6afbf4591b4edadc6',
  date: 'Thu, 02 Apr 2015 10:49:38 GMT',
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
  'x-ms-request-id': 'dc69c8d14a6484b6afbf4591b4edadc6',
  date: 'Thu, 02 Apr 2015 10:49:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2edff989-7148-4986-9a84-f2eb3464079a',
  'x-ms-correlation-request-id': '2edff989-7148-4986-9a84-f2eb3464079a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104941Z:2edff989-7148-4986-9a84-f2eb3464079a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:49:40 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2edff989-7148-4986-9a84-f2eb3464079a',
  'x-ms-correlation-request-id': '2edff989-7148-4986-9a84-f2eb3464079a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104941Z:2edff989-7148-4986-9a84-f2eb3464079a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:49:40 GMT',
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
  'x-ms-request-id': '718ed4345aad899cbc4161597c1d77fe',
  date: 'Thu, 02 Apr 2015 10:49:44 GMT',
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
  'x-ms-request-id': '718ed4345aad899cbc4161597c1d77fe',
  date: 'Thu, 02 Apr 2015 10:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB2552\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552\",\r\n  \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36724537-8a37-45d9-829b-36ebf5c35fe5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36724537-8a37-45d9-829b-36ebf5c35fe5?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a78ab8f6-1197-4885-beba-d57e7fc6d777',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104951Z:a78ab8f6-1197-4885-beba-d57e7fc6d777',
  date: 'Thu, 02 Apr 2015 10:49:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB2552\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552\",\r\n  \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36724537-8a37-45d9-829b-36ebf5c35fe5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36724537-8a37-45d9-829b-36ebf5c35fe5?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a78ab8f6-1197-4885-beba-d57e7fc6d777',
  'x-ms-routing-request-id': 'EASTASIA:20150402T104951Z:a78ab8f6-1197-4885-beba-d57e7fc6d777',
  date: 'Thu, 02 Apr 2015 10:49:50 GMT',
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
  'x-ms-request-id': '3481608b16028ea681667ec75ccb2752',
  date: 'Thu, 02 Apr 2015 10:50:04 GMT',
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
  'x-ms-request-id': '3481608b16028ea681667ec75ccb2752',
  date: 'Thu, 02 Apr 2015 10:50:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36724537-8a37-45d9-829b-36ebf5c35fe5?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '114b4f3a-0271-4ede-92d0-fe5b799b6d83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '9b78c792-8cd2-4988-886a-8716e84a140d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105008Z:9b78c792-8cd2-4988-886a-8716e84a140d',
  date: 'Thu, 02 Apr 2015 10:50:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36724537-8a37-45d9-829b-36ebf5c35fe5?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '114b4f3a-0271-4ede-92d0-fe5b799b6d83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '9b78c792-8cd2-4988-886a-8716e84a140d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105008Z:9b78c792-8cd2-4988-886a-8716e84a140d',
  date: 'Thu, 02 Apr 2015 10:50:08 GMT',
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
  'x-ms-request-id': 'bf51715cf29d8526a96db9fff0561aa4',
  date: 'Thu, 02 Apr 2015 10:50:12 GMT',
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
  'x-ms-request-id': 'bf51715cf29d8526a96db9fff0561aa4',
  date: 'Thu, 02 Apr 2015 10:50:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2552\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552\",\r\n  \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0a4039b3-3b69-44b4-8b5b-66b9dd71adef"',
  'x-ms-request-id': 'f42e8558-11d4-4dde-8a17-746c6258e7c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '11fa929a-72fe-4af4-af69-46e04d18f22d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105015Z:11fa929a-72fe-4af4-af69-46e04d18f22d',
  date: 'Thu, 02 Apr 2015 10:50:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2552?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2552\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552\",\r\n  \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2552/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"0a4039b3-3b69-44b4-8b5b-66b9dd71adef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0a4039b3-3b69-44b4-8b5b-66b9dd71adef"',
  'x-ms-request-id': 'f42e8558-11d4-4dde-8a17-746c6258e7c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': '11fa929a-72fe-4af4-af69-46e04d18f22d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105015Z:11fa929a-72fe-4af4-af69-46e04d18f22d',
  date: 'Thu, 02 Apr 2015 10:50:15 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB2552','LB-Probe4513'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '59aa82df4c8a85e0aabb7a8ca46ecc04',
  date: 'Thu, 02 Apr 2015 10:50:48 GMT',
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
  'x-ms-request-id': '59aa82df4c8a85e0aabb7a8ca46ecc04',
  date: 'Thu, 02 Apr 2015 10:50:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'x-ms-correlation-request-id': 'b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105050Z:b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:50:50 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'x-ms-correlation-request-id': 'b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105050Z:b78b1282-7e43-43be-8b0c-0ccd49a0ff39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:50:50 GMT',
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
  'x-ms-request-id': '8e6780e9081f81bf95324d5ae1f71dbe',
  date: 'Thu, 02 Apr 2015 10:50:54 GMT',
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
  'x-ms-request-id': '8e6780e9081f81bf95324d5ae1f71dbe',
  date: 'Thu, 02 Apr 2015 10:50:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '788ac5d3-3d21-49e3-adc4-fa670cfa8b4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f4cee217-df17-4e84-bf3b-039909335f1f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105101Z:f4cee217-df17-4e84-bf3b-039909335f1f',
  date: 'Thu, 02 Apr 2015 10:51:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '788ac5d3-3d21-49e3-adc4-fa670cfa8b4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'f4cee217-df17-4e84-bf3b-039909335f1f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105101Z:f4cee217-df17-4e84-bf3b-039909335f1f',
  date: 'Thu, 02 Apr 2015 10:51:00 GMT',
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
  'x-ms-request-id': '6d1e175b580585f29804e9f1cf8b62f6',
  date: 'Thu, 02 Apr 2015 10:51:04 GMT',
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
  'x-ms-request-id': '6d1e175b580585f29804e9f1cf8b62f6',
  date: 'Thu, 02 Apr 2015 10:51:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '19a7dce1-c690-46c7-a579-5275dc233797',
  'x-ms-correlation-request-id': '19a7dce1-c690-46c7-a579-5275dc233797',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105106Z:19a7dce1-c690-46c7-a579-5275dc233797',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:51:05 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2517?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '19a7dce1-c690-46c7-a579-5275dc233797',
  'x-ms-correlation-request-id': '19a7dce1-c690-46c7-a579-5275dc233797',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105106Z:19a7dce1-c690-46c7-a579-5275dc233797',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:51:05 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB2517','LB-Probe6234'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '18b7b09deb428609809dc519d0fedf56',
  date: 'Thu, 02 Apr 2015 10:54:38 GMT',
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
  'x-ms-request-id': '18b7b09deb428609809dc519d0fedf56',
  date: 'Thu, 02 Apr 2015 10:54:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'x-ms-correlation-request-id': '82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105440Z:82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:54:39 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'x-ms-correlation-request-id': '82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105440Z:82c10194-6af6-4af6-add6-d2ec7d6c2ccf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 10:54:39 GMT',
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
  'x-ms-request-id': 'cfe8a1ecdd1180548616ad4559ac8ff1',
  date: 'Thu, 02 Apr 2015 10:54:42 GMT',
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
  'x-ms-request-id': 'cfe8a1ecdd1180548616ad4559ac8ff1',
  date: 'Thu, 02 Apr 2015 10:54:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB8086\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086\",\r\n  \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a83289a1-a8b2-4385-8e6b-ea48149dcd39',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a83289a1-a8b2-4385-8e6b-ea48149dcd39?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5d1ed1d5-b4cd-41ad-ac1f-70cb6897591a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105450Z:5d1ed1d5-b4cd-41ad-ac1f-70cb6897591a',
  date: 'Thu, 02 Apr 2015 10:54:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB8086\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086\",\r\n  \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a83289a1-a8b2-4385-8e6b-ea48149dcd39',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a83289a1-a8b2-4385-8e6b-ea48149dcd39?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5d1ed1d5-b4cd-41ad-ac1f-70cb6897591a',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105450Z:5d1ed1d5-b4cd-41ad-ac1f-70cb6897591a',
  date: 'Thu, 02 Apr 2015 10:54:49 GMT',
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
  'x-ms-request-id': '88307fcc36fb80fc9c8bef9856098a69',
  date: 'Thu, 02 Apr 2015 10:55:03 GMT',
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
  'x-ms-request-id': '88307fcc36fb80fc9c8bef9856098a69',
  date: 'Thu, 02 Apr 2015 10:55:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a83289a1-a8b2-4385-8e6b-ea48149dcd39?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15344f18-9d2c-469e-ba58-8047f9b585e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '56aa6b67-782d-4136-a68c-5be0ea15158e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105505Z:56aa6b67-782d-4136-a68c-5be0ea15158e',
  date: 'Thu, 02 Apr 2015 10:55:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a83289a1-a8b2-4385-8e6b-ea48149dcd39?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '15344f18-9d2c-469e-ba58-8047f9b585e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '56aa6b67-782d-4136-a68c-5be0ea15158e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T105505Z:56aa6b67-782d-4136-a68c-5be0ea15158e',
  date: 'Thu, 02 Apr 2015 10:55:04 GMT',
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
  'x-ms-request-id': 'e298a99a755f8d8b8bb39afb0949ddb8',
  date: 'Thu, 02 Apr 2015 11:02:53 GMT',
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
  'x-ms-request-id': 'e298a99a755f8d8b8bb39afb0949ddb8',
  date: 'Thu, 02 Apr 2015 11:02:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB8086\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086\",\r\n  \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"65c213af-4f92-4ccf-ac79-9e806da89869"',
  'x-ms-request-id': 'f5312de6-4e02-48b7-a53a-ea112fb0738c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'e3fa3018-0fd4-4098-bfcd-fbff643b8db7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110255Z:e3fa3018-0fd4-4098-bfcd-fbff643b8db7',
  date: 'Thu, 02 Apr 2015 11:02:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8086?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB8086\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086\",\r\n  \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB8086/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"65c213af-4f92-4ccf-ac79-9e806da89869\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"65c213af-4f92-4ccf-ac79-9e806da89869"',
  'x-ms-request-id': 'f5312de6-4e02-48b7-a53a-ea112fb0738c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'e3fa3018-0fd4-4098-bfcd-fbff643b8db7',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110255Z:e3fa3018-0fd4-4098-bfcd-fbff643b8db7',
  date: 'Thu, 02 Apr 2015 11:02:54 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB8086','LB-Probe71'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e4983db770138f0188eb817ad8cdcd1e',
  date: 'Thu, 02 Apr 2015 11:08:56 GMT',
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
  'x-ms-request-id': 'e4983db770138f0188eb817ad8cdcd1e',
  date: 'Thu, 02 Apr 2015 11:08:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'x-ms-correlation-request-id': '8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110858Z:8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:08:58 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'x-ms-correlation-request-id': '8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110858Z:8bb9fc47-add1-4ca9-86ab-bc91bfe768bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:08:58 GMT',
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
  'x-ms-request-id': 'e33e07a30e94839e9de3fb4128586c23',
  date: 'Thu, 02 Apr 2015 11:09:02 GMT',
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
  'x-ms-request-id': 'e33e07a30e94839e9de3fb4128586c23',
  date: 'Thu, 02 Apr 2015 11:09:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a881a494-b6ae-4e2f-a5f5-883ce98ed406',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ae3da403-f844-4c52-81df-3b4dbb186ac8',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110910Z:ae3da403-f844-4c52-81df-3b4dbb186ac8',
  date: 'Thu, 02 Apr 2015 11:09:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a881a494-b6ae-4e2f-a5f5-883ce98ed406',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ae3da403-f844-4c52-81df-3b4dbb186ac8',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110910Z:ae3da403-f844-4c52-81df-3b4dbb186ac8',
  date: 'Thu, 02 Apr 2015 11:09:09 GMT',
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
  'x-ms-request-id': 'ef92af4038e083878c6bcb9972a066be',
  date: 'Thu, 02 Apr 2015 11:09:13 GMT',
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
  'x-ms-request-id': 'ef92af4038e083878c6bcb9972a066be',
  date: 'Thu, 02 Apr 2015 11:09:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'x-ms-correlation-request-id': '9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110915Z:9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:09:15 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB8118?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'x-ms-correlation-request-id': '9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T110915Z:9d776bb1-3ec2-4c1f-890f-00fb68a9ee4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:09:15 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB8118','LB-Probe4471'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b3b087f8a8838e2cb558f7f31964df57',
  date: 'Thu, 02 Apr 2015 11:20:29 GMT',
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
  'x-ms-request-id': 'b3b087f8a8838e2cb558f7f31964df57',
  date: 'Thu, 02 Apr 2015 11:20:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'x-ms-correlation-request-id': '7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112031Z:7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:20:30 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'x-ms-correlation-request-id': '7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112031Z:7e9a1825-3024-4a0b-86a9-5344570f1db1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:20:30 GMT',
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
  'x-ms-request-id': '92e419c73d588a159478075bd41a2947',
  date: 'Thu, 02 Apr 2015 11:20:33 GMT',
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
  'x-ms-request-id': '92e419c73d588a159478075bd41a2947',
  date: 'Thu, 02 Apr 2015 11:20:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd916719a-965c-435e-9659-a2feb4bb27eb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d916719a-965c-435e-9659-a2feb4bb27eb?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e28d72b2-c724-4709-acff-b4aef2637bcc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112041Z:e28d72b2-c724-4709-acff-b4aef2637bcc',
  date: 'Thu, 02 Apr 2015 11:20:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd916719a-965c-435e-9659-a2feb4bb27eb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d916719a-965c-435e-9659-a2feb4bb27eb?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e28d72b2-c724-4709-acff-b4aef2637bcc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112041Z:e28d72b2-c724-4709-acff-b4aef2637bcc',
  date: 'Thu, 02 Apr 2015 11:20:40 GMT',
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
  'x-ms-request-id': 'e71d051b83ab88039294b89d0cf34650',
  date: 'Thu, 02 Apr 2015 11:20:54 GMT',
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
  'x-ms-request-id': 'e71d051b83ab88039294b89d0cf34650',
  date: 'Thu, 02 Apr 2015 11:20:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d916719a-965c-435e-9659-a2feb4bb27eb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78f80589-cd6b-4ca5-a55e-23654d1b3c3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': 'c9799c4d-1fe7-431d-bf8b-33fcd0133abd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112056Z:c9799c4d-1fe7-431d-bf8b-33fcd0133abd',
  date: 'Thu, 02 Apr 2015 11:20:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d916719a-965c-435e-9659-a2feb4bb27eb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78f80589-cd6b-4ca5-a55e-23654d1b3c3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': 'c9799c4d-1fe7-431d-bf8b-33fcd0133abd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112056Z:c9799c4d-1fe7-431d-bf8b-33fcd0133abd',
  date: 'Thu, 02 Apr 2015 11:20:56 GMT',
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
  'x-ms-request-id': '3fc7b4f475c98072a84e55d10f788ea1',
  date: 'Thu, 02 Apr 2015 11:21:00 GMT',
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
  'x-ms-request-id': '3fc7b4f475c98072a84e55d10f788ea1',
  date: 'Thu, 02 Apr 2015 11:21:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"436aa288-a3b4-47e1-9f31-526b46cd0181"',
  'x-ms-request-id': '3ac726c5-b5d6-4b31-9f2d-bb62071fb7e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '7b3a16c3-9a43-4e5c-ba81-394acc4967e4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112102Z:7b3a16c3-9a43-4e5c-ba81-394acc4967e4',
  date: 'Thu, 02 Apr 2015 11:21:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"436aa288-a3b4-47e1-9f31-526b46cd0181\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"436aa288-a3b4-47e1-9f31-526b46cd0181"',
  'x-ms-request-id': '3ac726c5-b5d6-4b31-9f2d-bb62071fb7e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '7b3a16c3-9a43-4e5c-ba81-394acc4967e4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112102Z:7b3a16c3-9a43-4e5c-ba81-394acc4967e4',
  date: 'Thu, 02 Apr 2015 11:21:02 GMT',
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
  'x-ms-request-id': '6bf5c7b7fc388b078bed4801f3bc7ffd',
  date: 'Thu, 02 Apr 2015 11:21:04 GMT',
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
  'x-ms-request-id': '6bf5c7b7fc388b078bed4801f3bc7ffd',
  date: 'Thu, 02 Apr 2015 11:21:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe1350\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/probes/LB-Probe1350\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '235b010b-9487-4378-8e3f-19f98747dc4f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/235b010b-9487-4378-8e3f-19f98747dc4f?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '94d5f41b-c843-47ac-a57f-579cdbf8a0c2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112106Z:94d5f41b-c843-47ac-a57f-579cdbf8a0c2',
  date: 'Thu, 02 Apr 2015 11:21:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe1350\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/probes/LB-Probe1350\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '235b010b-9487-4378-8e3f-19f98747dc4f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/235b010b-9487-4378-8e3f-19f98747dc4f?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '94d5f41b-c843-47ac-a57f-579cdbf8a0c2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112106Z:94d5f41b-c843-47ac-a57f-579cdbf8a0c2',
  date: 'Thu, 02 Apr 2015 11:21:06 GMT',
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
  'x-ms-request-id': '99dd8ea1189a83e9b49d734bfb0b6c9c',
  date: 'Thu, 02 Apr 2015 11:21:19 GMT',
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
  'x-ms-request-id': '99dd8ea1189a83e9b49d734bfb0b6c9c',
  date: 'Thu, 02 Apr 2015 11:21:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/235b010b-9487-4378-8e3f-19f98747dc4f?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73027937-8d36-4141-96af-09b376502d0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '698bd4f2-2837-4340-ab25-81e002da4c90',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112121Z:698bd4f2-2837-4340-ab25-81e002da4c90',
  date: 'Thu, 02 Apr 2015 11:21:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/235b010b-9487-4378-8e3f-19f98747dc4f?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73027937-8d36-4141-96af-09b376502d0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '698bd4f2-2837-4340-ab25-81e002da4c90',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112121Z:698bd4f2-2837-4340-ab25-81e002da4c90',
  date: 'Thu, 02 Apr 2015 11:21:20 GMT',
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
  'x-ms-request-id': '964fd276b3bc85edb80ef5209d50ae67',
  date: 'Thu, 02 Apr 2015 11:21:23 GMT',
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
  'x-ms-request-id': '964fd276b3bc85edb80ef5209d50ae67',
  date: 'Thu, 02 Apr 2015 11:21:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe1350\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/probes/LB-Probe1350\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9d975058-8f0b-4c7f-a000-9292368be5fa"',
  'x-ms-request-id': '7293c5db-b028-4247-9d8f-97db8596f63e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '2809644d-3388-4a09-bb6a-0de75af6408f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112126Z:2809644d-3388-4a09-bb6a-0de75af6408f',
  date: 'Thu, 02 Apr 2015 11:21:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB3820?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB3820\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820\",\r\n  \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe1350\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB3820/probes/LB-Probe1350\",\r\n        \"etag\": \"W/\\\"9d975058-8f0b-4c7f-a000-9292368be5fa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9d975058-8f0b-4c7f-a000-9292368be5fa"',
  'x-ms-request-id': '7293c5db-b028-4247-9d8f-97db8596f63e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '2809644d-3388-4a09-bb6a-0de75af6408f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112126Z:2809644d-3388-4a09-bb6a-0de75af6408f',
  date: 'Thu, 02 Apr 2015 11:21:26 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB3820','LB-Probe1350'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8b468c42bef18ed0b9280ebd8f25f183',
  date: 'Thu, 02 Apr 2015 11:27:27 GMT',
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
  'x-ms-request-id': '8b468c42bef18ed0b9280ebd8f25f183',
  date: 'Thu, 02 Apr 2015 11:27:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cb9cd612-7225-422c-8247-8bf48d455fb3',
  'x-ms-correlation-request-id': 'cb9cd612-7225-422c-8247-8bf48d455fb3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112729Z:cb9cd612-7225-422c-8247-8bf48d455fb3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:28 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'cb9cd612-7225-422c-8247-8bf48d455fb3',
  'x-ms-correlation-request-id': 'cb9cd612-7225-422c-8247-8bf48d455fb3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112729Z:cb9cd612-7225-422c-8247-8bf48d455fb3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:28 GMT',
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
  'x-ms-request-id': '69e0f6986ce78d83b61190e06ba51af1',
  date: 'Thu, 02 Apr 2015 11:27:32 GMT',
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
  'x-ms-request-id': '69e0f6986ce78d83b61190e06ba51af1',
  date: 'Thu, 02 Apr 2015 11:27:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62af218a-085a-4da1-9b61-4e601d71fbed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8c995718-6493-4252-9aef-3c70ab780b89',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112740Z:8c995718-6493-4252-9aef-3c70ab780b89',
  date: 'Thu, 02 Apr 2015 11:27:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62af218a-085a-4da1-9b61-4e601d71fbed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8c995718-6493-4252-9aef-3c70ab780b89',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112740Z:8c995718-6493-4252-9aef-3c70ab780b89',
  date: 'Thu, 02 Apr 2015 11:27:39 GMT',
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
  'x-ms-request-id': '2ff708a70dd08c03aedd005a1f17707a',
  date: 'Thu, 02 Apr 2015 11:27:43 GMT',
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
  'x-ms-request-id': '2ff708a70dd08c03aedd005a1f17707a',
  date: 'Thu, 02 Apr 2015 11:27:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'x-ms-correlation-request-id': '6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112745Z:6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:44 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'x-ms-correlation-request-id': '6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112745Z:6e42c88e-2dd1-45fc-bcab-fb117c0481ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:44 GMT',
  connection: 'close',
  'content-length': '69' });
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
  'x-ms-request-id': '110fee87c5138d3e9b72705afc8ed706',
  date: 'Thu, 02 Apr 2015 11:27:48 GMT',
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
  'x-ms-request-id': '110fee87c5138d3e9b72705afc8ed706',
  date: 'Thu, 02 Apr 2015 11:27:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fc452d34-32e5-4812-b44d-3c995bb42429',
  'x-ms-correlation-request-id': 'fc452d34-32e5-4812-b44d-3c995bb42429',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112750Z:fc452d34-32e5-4812-b44d-3c995bb42429',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:49 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB4031?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fc452d34-32e5-4812-b44d-3c995bb42429',
  'x-ms-correlation-request-id': 'fc452d34-32e5-4812-b44d-3c995bb42429',
  'x-ms-routing-request-id': 'EASTASIA:20150402T112750Z:fc452d34-32e5-4812-b44d-3c995bb42429',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:27:49 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB4031','LB-Probe2993'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2bf7ce60cd3d87e2b0f9cb65f34d86f0',
  date: 'Thu, 02 Apr 2015 11:30:55 GMT',
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
  'x-ms-request-id': '2bf7ce60cd3d87e2b0f9cb65f34d86f0',
  date: 'Thu, 02 Apr 2015 11:30:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8904d847-4d06-4c75-b899-ff61e03db730',
  'x-ms-correlation-request-id': '8904d847-4d06-4c75-b899-ff61e03db730',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113057Z:8904d847-4d06-4c75-b899-ff61e03db730',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:30:56 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8904d847-4d06-4c75-b899-ff61e03db730',
  'x-ms-correlation-request-id': '8904d847-4d06-4c75-b899-ff61e03db730',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113057Z:8904d847-4d06-4c75-b899-ff61e03db730',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:30:56 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1427977858\",\"not_before\":\"1427973958\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDI3OTczOTU4LCJuYmYiOjE0Mjc5NzM5NTgsImV4cCI6MTQyNzk3Nzg1OCwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwiYW1yIjpbInB3ZCJdLCJvaWQiOiJjMDcyMDdhNS01ZTM2LTQ3NzEtODAyZS0wZmJjMzM5M2JiOGUiLCJ1cG4iOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwiZ2l2ZW5fbmFtZSI6IlNyZWVrYW50aCIsImZhbWlseV9uYW1lIjoiQmFuZGFydSIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.QephhLTdXfN6BEi12V7QpXtfUDzFmaz9tTXALUnMlDMXAABWL5azTCda_ctKu0MUCwx9AUbvL62U3iJBN5H4OoiuJy-WnJlJk1o19Hu2kiHbuXeXR-Lgcp-GYzOFUp13E04lm8DtPiWLviVvhFEzFcBpIGJP69OX6uw9w6rTKcRT1Iyv6D1f_BTy7K3Q1vjNx-R3X8a8_HrFS3HIL3lSeTZmiCnarrixF0PjjjN4Nc4IHoMy27XhjaOMe4mRT2djOsth1EnWPTrTMOJazmKBhTQFE670xcFdegsMQDC1yGptqg2TRu2QpQ5_sv4HoFsX7GvUgMi4CGw17eeL1RXwVw\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGLutJEw_Rqp38_ukaJlSoVVKcm7Hebxy4w84fdfh-2SKm0lJV043Fb21pN_sj5gPSWjQFdEk9N6ZJ4Nx3izbtoOxbRB2FanCavMYBulMWdis-Tzb1lUXmqp5o9bOKxytsSZnvP6N6NRci3bf5lm-ZKGQeWkTLVIZCh_haQarUq-B76wKAslad_JgvVrrNZm1Cpu6-Mf5zIr4h8NhsBfQCHJGXeEJTygJ4RV3czojpzgouhIZ4ZB73zug5ML-HhJbNK3U2qmGxXWPdb3B_8ngwxUpeKomSO0B_qFFmS99rqW_-TolL0V-EvOm-akA5t2B8dYweUgz9_9c1y1pAt_J1jdBEEEHA7D722LlzI44b3heScBwsOJ-pvtbVY30R9YK7a1ycP3xOVZbYeMROo3rvIeA7EHrcnuKNcyUFedsrLDApyzyuUKTTqZvDus70O0qbPm1WfPsHGCYYYaguqVQk5l6ptXlja0qoVUsDi0UKxVe01IpipQWpJkC83SIMaMAu0_uNTThgRORcaAWY9GG8xUgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"28422233\",\"pwd_url\":\"https://portal.microsoftonline.com/ChangePassword.aspx\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '9c033ba7-0a3f-485a-975d-7908fdbb50d7',
  'client-request-id': '5d5bbe9a-7e36-4f8d-8d1a-708095efaa84',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 02 Apr 2015 11:30:56 GMT',
  connection: 'close',
  'content-length': '2915' });
 return result; },
function (nock) { 
var result = 
nock('https://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1427977858\",\"not_before\":\"1427973958\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDI3OTczOTU4LCJuYmYiOjE0Mjc5NzM5NTgsImV4cCI6MTQyNzk3Nzg1OCwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwiYW1yIjpbInB3ZCJdLCJvaWQiOiJjMDcyMDdhNS01ZTM2LTQ3NzEtODAyZS0wZmJjMzM5M2JiOGUiLCJ1cG4iOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwiZ2l2ZW5fbmFtZSI6IlNyZWVrYW50aCIsImZhbWlseV9uYW1lIjoiQmFuZGFydSIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.QephhLTdXfN6BEi12V7QpXtfUDzFmaz9tTXALUnMlDMXAABWL5azTCda_ctKu0MUCwx9AUbvL62U3iJBN5H4OoiuJy-WnJlJk1o19Hu2kiHbuXeXR-Lgcp-GYzOFUp13E04lm8DtPiWLviVvhFEzFcBpIGJP69OX6uw9w6rTKcRT1Iyv6D1f_BTy7K3Q1vjNx-R3X8a8_HrFS3HIL3lSeTZmiCnarrixF0PjjjN4Nc4IHoMy27XhjaOMe4mRT2djOsth1EnWPTrTMOJazmKBhTQFE670xcFdegsMQDC1yGptqg2TRu2QpQ5_sv4HoFsX7GvUgMi4CGw17eeL1RXwVw\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGLutJEw_Rqp38_ukaJlSoVVKcm7Hebxy4w84fdfh-2SKm0lJV043Fb21pN_sj5gPSWjQFdEk9N6ZJ4Nx3izbtoOxbRB2FanCavMYBulMWdis-Tzb1lUXmqp5o9bOKxytsSZnvP6N6NRci3bf5lm-ZKGQeWkTLVIZCh_haQarUq-B76wKAslad_JgvVrrNZm1Cpu6-Mf5zIr4h8NhsBfQCHJGXeEJTygJ4RV3czojpzgouhIZ4ZB73zug5ML-HhJbNK3U2qmGxXWPdb3B_8ngwxUpeKomSO0B_qFFmS99rqW_-TolL0V-EvOm-akA5t2B8dYweUgz9_9c1y1pAt_J1jdBEEEHA7D722LlzI44b3heScBwsOJ-pvtbVY30R9YK7a1ycP3xOVZbYeMROo3rvIeA7EHrcnuKNcyUFedsrLDApyzyuUKTTqZvDus70O0qbPm1WfPsHGCYYYaguqVQk5l6ptXlja0qoVUsDi0UKxVe01IpipQWpJkC83SIMaMAu0_uNTThgRORcaAWY9GG8xUgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"28422233\",\"pwd_url\":\"https://portal.microsoftonline.com/ChangePassword.aspx\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '9c033ba7-0a3f-485a-975d-7908fdbb50d7',
  'client-request-id': '5d5bbe9a-7e36-4f8d-8d1a-708095efaa84',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 02 Apr 2015 11:30:56 GMT',
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
  'x-ms-request-id': 'b6c91b73465c80ff8ef485612270733a',
  date: 'Thu, 02 Apr 2015 11:30:59 GMT',
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
  'x-ms-request-id': 'b6c91b73465c80ff8ef485612270733a',
  date: 'Thu, 02 Apr 2015 11:30:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '57907eed-2f57-4a59-b7a0-344b20c38648',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'c3b21bc6-6bf9-4934-976f-94729b0182ef',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113107Z:c3b21bc6-6bf9-4934-976f-94729b0182ef',
  date: 'Thu, 02 Apr 2015 11:31:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '57907eed-2f57-4a59-b7a0-344b20c38648',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'c3b21bc6-6bf9-4934-976f-94729b0182ef',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113107Z:c3b21bc6-6bf9-4934-976f-94729b0182ef',
  date: 'Thu, 02 Apr 2015 11:31:06 GMT',
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
  'x-ms-request-id': '3ec390a861c7896eb6754fa819acce12',
  date: 'Thu, 02 Apr 2015 11:31:09 GMT',
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
  'x-ms-request-id': '3ec390a861c7896eb6754fa819acce12',
  date: 'Thu, 02 Apr 2015 11:31:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'x-ms-correlation-request-id': '9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113110Z:9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:10 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'x-ms-correlation-request-id': '9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113110Z:9c51d118-da06-4ab8-b96a-5219ce4faf2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:10 GMT',
  connection: 'close',
  'content-length': '69' });
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
  'x-ms-request-id': '6c33f06c1a1384ec8ca2cabbf1441b47',
  date: 'Thu, 02 Apr 2015 11:31:12 GMT',
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
  'x-ms-request-id': '6c33f06c1a1384ec8ca2cabbf1441b47',
  date: 'Thu, 02 Apr 2015 11:31:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'x-ms-correlation-request-id': '4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113113Z:4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:12 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB583?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'x-ms-correlation-request-id': '4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113113Z:4912d7dd-fc30-49cb-b6a3-e4b6e320301f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:12 GMT',
  connection: 'close',
  'content-length': '69' });
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
  'x-ms-request-id': 'bf94a56b2ca38b3fae70a1815bdc57fb',
  date: 'Thu, 02 Apr 2015 11:31:15 GMT',
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
  'x-ms-request-id': 'bf94a56b2ca38b3fae70a1815bdc57fb',
  date: 'Thu, 02 Apr 2015 11:31:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/publicIPAddresses/%2Fsubscriptions%2Fbfb5e0bf-124b-4d0c-9352-7c0a9f4d9948%2FresourceGroups%2Farmresgrptest1%2Fproviders%2FMicrosoft.Network%2FpublicIPAddresses%2FarmLBsuperip/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'x-ms-correlation-request-id': '3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113116Z:3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:15 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/publicIPAddresses/%2Fsubscriptions%2Fbfb5e0bf-124b-4d0c-9352-7c0a9f4d9948%2FresourceGroups%2Farmresgrptest1%2Fproviders%2FMicrosoft.Network%2FpublicIPAddresses%2FarmLBsuperip/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'x-ms-correlation-request-id': '3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113116Z:3421cc13-ad87-4cfd-aa99-53dbabb6243b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:31:15 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB583','LB-Probe6292'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ff7fa6a77be183e39498699407f53182',
  date: 'Thu, 02 Apr 2015 11:36:58 GMT',
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
  'x-ms-request-id': 'ff7fa6a77be183e39498699407f53182',
  date: 'Thu, 02 Apr 2015 11:36:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'x-ms-correlation-request-id': '4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113659Z:4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:36:58 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'x-ms-correlation-request-id': '4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113659Z:4644acd9-60e0-4ac2-9b1f-024b29d8cadc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:36:58 GMT',
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
  'x-ms-request-id': '3d31c11de94683d2b344084e7887e6e6',
  date: 'Thu, 02 Apr 2015 11:37:01 GMT',
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
  'x-ms-request-id': '3d31c11de94683d2b344084e7887e6e6',
  date: 'Thu, 02 Apr 2015 11:37:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e2b40b24-0116-450a-ac43-ccceef6d9336',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e2b40b24-0116-450a-ac43-ccceef6d9336?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': 'a2b12907-a00c-468e-ab24-12c11f271ea2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113706Z:a2b12907-a00c-468e-ab24-12c11f271ea2',
  date: 'Thu, 02 Apr 2015 11:37:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e2b40b24-0116-450a-ac43-ccceef6d9336',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e2b40b24-0116-450a-ac43-ccceef6d9336?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': 'a2b12907-a00c-468e-ab24-12c11f271ea2',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113706Z:a2b12907-a00c-468e-ab24-12c11f271ea2',
  date: 'Thu, 02 Apr 2015 11:37:06 GMT',
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
  'x-ms-request-id': 'd45816265a518015acb2100021c631c5',
  date: 'Thu, 02 Apr 2015 11:37:19 GMT',
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
  'x-ms-request-id': 'd45816265a518015acb2100021c631c5',
  date: 'Thu, 02 Apr 2015 11:37:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e2b40b24-0116-450a-ac43-ccceef6d9336?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ddf49cb-26da-42ad-8a9a-7a1f307f4b59',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '7d346fb0-143d-4a99-be57-6db3bd2b2e15',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113720Z:7d346fb0-143d-4a99-be57-6db3bd2b2e15',
  date: 'Thu, 02 Apr 2015 11:37:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e2b40b24-0116-450a-ac43-ccceef6d9336?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ddf49cb-26da-42ad-8a9a-7a1f307f4b59',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '7d346fb0-143d-4a99-be57-6db3bd2b2e15',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113720Z:7d346fb0-143d-4a99-be57-6db3bd2b2e15',
  date: 'Thu, 02 Apr 2015 11:37:20 GMT',
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
  'x-ms-request-id': '7911d596744d8f0190ce46b655a66723',
  date: 'Thu, 02 Apr 2015 11:37:23 GMT',
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
  'x-ms-request-id': '7911d596744d8f0190ce46b655a66723',
  date: 'Thu, 02 Apr 2015 11:37:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"650c4582-5610-4b22-aa64-3c1672c7e5be"',
  'x-ms-request-id': '5e641938-8d1b-46a1-be07-5463d005472c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '156717f7-f1b1-4b31-be67-9a09efdd7843',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113724Z:156717f7-f1b1-4b31-be67-9a09efdd7843',
  date: 'Thu, 02 Apr 2015 11:37:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"650c4582-5610-4b22-aa64-3c1672c7e5be\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"650c4582-5610-4b22-aa64-3c1672c7e5be"',
  'x-ms-request-id': '5e641938-8d1b-46a1-be07-5463d005472c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '156717f7-f1b1-4b31-be67-9a09efdd7843',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113724Z:156717f7-f1b1-4b31-be67-9a09efdd7843',
  date: 'Thu, 02 Apr 2015 11:37:24 GMT',
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
  'x-ms-request-id': '5133e6cd6d4f81e5a35cb0cafb6bed5e',
  date: 'Thu, 02 Apr 2015 11:37:27 GMT',
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
  'x-ms-request-id': '5133e6cd6d4f81e5a35cb0cafb6bed5e',
  date: 'Thu, 02 Apr 2015 11:37:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3e192912-c874-4a4c-ba5d-09248de6f94c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/3e192912-c874-4a4c-ba5d-09248de6f94c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '53e699f4-38d1-42e6-aebe-e7c7dc5aa0d4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113729Z:53e699f4-38d1-42e6-aebe-e7c7dc5aa0d4',
  date: 'Thu, 02 Apr 2015 11:37:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3e192912-c874-4a4c-ba5d-09248de6f94c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/3e192912-c874-4a4c-ba5d-09248de6f94c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '53e699f4-38d1-42e6-aebe-e7c7dc5aa0d4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113729Z:53e699f4-38d1-42e6-aebe-e7c7dc5aa0d4',
  date: 'Thu, 02 Apr 2015 11:37:28 GMT',
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
  'x-ms-request-id': '42310620b9f583bf800f50e4828f22e6',
  date: 'Thu, 02 Apr 2015 11:37:41 GMT',
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
  'x-ms-request-id': '42310620b9f583bf800f50e4828f22e6',
  date: 'Thu, 02 Apr 2015 11:37:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/3e192912-c874-4a4c-ba5d-09248de6f94c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3df8e624-7fd4-450f-83e3-c5e0d3386f7b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'ee9fd3b0-27e2-4a20-bdf3-28408e0a6422',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113743Z:ee9fd3b0-27e2-4a20-bdf3-28408e0a6422',
  date: 'Thu, 02 Apr 2015 11:37:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/3e192912-c874-4a4c-ba5d-09248de6f94c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3df8e624-7fd4-450f-83e3-c5e0d3386f7b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'ee9fd3b0-27e2-4a20-bdf3-28408e0a6422',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113743Z:ee9fd3b0-27e2-4a20-bdf3-28408e0a6422',
  date: 'Thu, 02 Apr 2015 11:37:43 GMT',
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
  'x-ms-request-id': 'd3d13597550e89c78ad343314d93f212',
  date: 'Thu, 02 Apr 2015 11:37:44 GMT',
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
  'x-ms-request-id': 'd3d13597550e89c78ad343314d93f212',
  date: 'Thu, 02 Apr 2015 11:37:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"02444d52-a8ca-4761-ae69-abc9186b335e"',
  'x-ms-request-id': 'f5e50ae0-db65-467f-9d6b-016b1b899f88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '8bdba066-90a2-4858-9f30-6777ea7f489d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113746Z:8bdba066-90a2-4858-9f30-6777ea7f489d',
  date: 'Thu, 02 Apr 2015 11:37:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"02444d52-a8ca-4761-ae69-abc9186b335e"',
  'x-ms-request-id': 'f5e50ae0-db65-467f-9d6b-016b1b899f88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '8bdba066-90a2-4858-9f30-6777ea7f489d',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113746Z:8bdba066-90a2-4858-9f30-6777ea7f489d',
  date: 'Thu, 02 Apr 2015 11:37:46 GMT',
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
  'x-ms-request-id': 'fed11f2a04da82009ca6c5a341a8873c',
  date: 'Thu, 02 Apr 2015 11:37:48 GMT',
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
  'x-ms-request-id': 'fed11f2a04da82009ca6c5a341a8873c',
  date: 'Thu, 02 Apr 2015 11:37:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"02444d52-a8ca-4761-ae69-abc9186b335e"',
  'x-ms-request-id': '1710f4c9-5693-46e8-92f6-d7fc41d2e7e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': '109ab07d-55ad-44c4-86d6-db6259d7e9bf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113750Z:109ab07d-55ad-44c4-86d6-db6259d7e9bf',
  date: 'Thu, 02 Apr 2015 11:37:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"02444d52-a8ca-4761-ae69-abc9186b335e\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"02444d52-a8ca-4761-ae69-abc9186b335e"',
  'x-ms-request-id': '1710f4c9-5693-46e8-92f6-d7fc41d2e7e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-correlation-request-id': '109ab07d-55ad-44c4-86d6-db6259d7e9bf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113750Z:109ab07d-55ad-44c4-86d6-db6259d7e9bf',
  date: 'Thu, 02 Apr 2015 11:37:49 GMT',
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
  'x-ms-request-id': 'f3a1ffcca656813393d3ccfd9390eebd',
  date: 'Thu, 02 Apr 2015 11:37:52 GMT',
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
  'x-ms-request-id': 'f3a1ffcca656813393d3ccfd9390eebd',
  date: 'Thu, 02 Apr 2015 11:37:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'efb5745e-2a2b-4dac-ae38-0b14d035f6d3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/efb5745e-2a2b-4dac-ae38-0b14d035f6d3?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'f2382c88-8da6-4a8b-b182-0bafbc0c996e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113754Z:f2382c88-8da6-4a8b-b182-0bafbc0c996e',
  date: 'Thu, 02 Apr 2015 11:37:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'efb5745e-2a2b-4dac-ae38-0b14d035f6d3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/efb5745e-2a2b-4dac-ae38-0b14d035f6d3?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'f2382c88-8da6-4a8b-b182-0bafbc0c996e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113754Z:f2382c88-8da6-4a8b-b182-0bafbc0c996e',
  date: 'Thu, 02 Apr 2015 11:37:53 GMT',
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
  'x-ms-request-id': '158ff973d776852b98b124852ada43b1',
  date: 'Thu, 02 Apr 2015 11:38:06 GMT',
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
  'x-ms-request-id': '158ff973d776852b98b124852ada43b1',
  date: 'Thu, 02 Apr 2015 11:38:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/efb5745e-2a2b-4dac-ae38-0b14d035f6d3?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e766dc0-9a7f-4f75-b1f8-0cbbd60d0bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': 'dcc61cb0-7636-48c4-92c3-96b6f9f802da',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113808Z:dcc61cb0-7636-48c4-92c3-96b6f9f802da',
  date: 'Thu, 02 Apr 2015 11:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/efb5745e-2a2b-4dac-ae38-0b14d035f6d3?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e766dc0-9a7f-4f75-b1f8-0cbbd60d0bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': 'dcc61cb0-7636-48c4-92c3-96b6f9f802da',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113808Z:dcc61cb0-7636-48c4-92c3-96b6f9f802da',
  date: 'Thu, 02 Apr 2015 11:38:08 GMT',
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
  'x-ms-request-id': '4c7c155bd44086839db7675c564910ce',
  date: 'Thu, 02 Apr 2015 11:38:11 GMT',
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
  'x-ms-request-id': '4c7c155bd44086839db7675c564910ce',
  date: 'Thu, 02 Apr 2015 11:38:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1f98ec66-daae-40cf-b456-bc3dc96b747f"',
  'x-ms-request-id': '325c4771-7725-40b9-8370-d597336db44d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': '16c89574-16ac-4624-a65a-15c52e09472c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113813Z:16c89574-16ac-4624-a65a-15c52e09472c',
  date: 'Thu, 02 Apr 2015 11:38:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe3716\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/probes/LB-Probe3716\",\r\n        \"etag\": \"W/\\\"1f98ec66-daae-40cf-b456-bc3dc96b747f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1f98ec66-daae-40cf-b456-bc3dc96b747f"',
  'x-ms-request-id': '325c4771-7725-40b9-8370-d597336db44d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': '16c89574-16ac-4624-a65a-15c52e09472c',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113813Z:16c89574-16ac-4624-a65a-15c52e09472c',
  date: 'Thu, 02 Apr 2015 11:38:12 GMT',
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
  'x-ms-request-id': 'e2efe2042140866faccb1b5505dceb0f',
  date: 'Thu, 02 Apr 2015 11:38:15 GMT',
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
  'x-ms-request-id': 'e2efe2042140866faccb1b5505dceb0f',
  date: 'Thu, 02 Apr 2015 11:38:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"9138f399-cc99-4c7f-a2c3-aa564a961871\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9138f399-cc99-4c7f-a2c3-aa564a961871\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '71438a5a-7adc-44c1-9604-74ef0ecc24bd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113817Z:71438a5a-7adc-44c1-9604-74ef0ecc24bd',
  date: 'Thu, 02 Apr 2015 11:38:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB9103?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB9103\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103\",\r\n  \"etag\": \"W/\\\"9138f399-cc99-4c7f-a2c3-aa564a961871\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB9103/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"9138f399-cc99-4c7f-a2c3-aa564a961871\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '71438a5a-7adc-44c1-9604-74ef0ecc24bd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113817Z:71438a5a-7adc-44c1-9604-74ef0ecc24bd',
  date: 'Thu, 02 Apr 2015 11:38:16 GMT',
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
  'x-ms-request-id': '263cfb56c6d984d4887c2729eac152b9',
  date: 'Thu, 02 Apr 2015 11:38:29 GMT',
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
  'x-ms-request-id': '263cfb56c6d984d4887c2729eac152b9',
  date: 'Thu, 02 Apr 2015 11:38:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6823165e-8719-42cb-924d-f6cd9461791f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': 'd3b5ce85-d767-4cae-ab07-5e8dfb7223a5',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113831Z:d3b5ce85-d767-4cae-ab07-5e8dfb7223a5',
  date: 'Thu, 02 Apr 2015 11:38:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5aebf617-b69a-4cb4-b5fa-4f6d623f1f4c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6823165e-8719-42cb-924d-f6cd9461791f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': 'd3b5ce85-d767-4cae-ab07-5e8dfb7223a5',
  'x-ms-routing-request-id': 'EASTASIA:20150402T113831Z:d3b5ce85-d767-4cae-ab07-5e8dfb7223a5',
  date: 'Thu, 02 Apr 2015 11:38:30 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB9103','LB-Probe3716'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8d3d7352021d807eb66836e438731778',
  date: 'Thu, 02 Apr 2015 11:42:12 GMT',
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
  'x-ms-request-id': '8d3d7352021d807eb66836e438731778',
  date: 'Thu, 02 Apr 2015 11:42:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'x-ms-correlation-request-id': 'c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114214Z:c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:13 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'x-ms-correlation-request-id': 'c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114214Z:c3579fc4-e92d-48fa-97b9-e552d9468cc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:13 GMT',
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
  'x-ms-request-id': 'fe6e5808cc2685b78fa08cacb0193047',
  date: 'Thu, 02 Apr 2015 11:42:16 GMT',
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
  'x-ms-request-id': 'fe6e5808cc2685b78fa08cacb0193047',
  date: 'Thu, 02 Apr 2015 11:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e3a5f49a-0766-43fe-8552-80da3e5b52df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b2f30584-ca3c-4a31-877c-194397ac6b2e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114224Z:b2f30584-ca3c-4a31-877c-194397ac6b2e',
  date: 'Thu, 02 Apr 2015 11:42:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPAddressInUse\",\r\n    \"message\": \"Public IP address is in use.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e3a5f49a-0766-43fe-8552-80da3e5b52df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b2f30584-ca3c-4a31-877c-194397ac6b2e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114224Z:b2f30584-ca3c-4a31-877c-194397ac6b2e',
  date: 'Thu, 02 Apr 2015 11:42:24 GMT',
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
  'x-ms-request-id': '599138bf83068598b79d0d8357c75f6d',
  date: 'Thu, 02 Apr 2015 11:42:26 GMT',
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
  'x-ms-request-id': '599138bf83068598b79d0d8357c75f6d',
  date: 'Thu, 02 Apr 2015 11:42:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e30cf86f-373a-408e-9e05-af96459f323e',
  'x-ms-correlation-request-id': 'e30cf86f-373a-408e-9e05-af96459f323e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114227Z:e30cf86f-373a-408e-9e05-af96459f323e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:27 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e30cf86f-373a-408e-9e05-af96459f323e',
  'x-ms-correlation-request-id': 'e30cf86f-373a-408e-9e05-af96459f323e',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114227Z:e30cf86f-373a-408e-9e05-af96459f323e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:27 GMT',
  connection: 'close',
  'content-length': '69' });
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
  'x-ms-request-id': '0ba1db9188ff8270b9febcdda770f983',
  date: 'Thu, 02 Apr 2015 11:42:30 GMT',
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
  'x-ms-request-id': '0ba1db9188ff8270b9febcdda770f983',
  date: 'Thu, 02 Apr 2015 11:42:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'x-ms-correlation-request-id': '68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114231Z:68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:30 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'x-ms-correlation-request-id': '68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114231Z:68a9c3d9-c0b0-4902-9078-6c7d9acbc4d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:30 GMT',
  connection: 'close',
  'content-length': '69' });
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
  'x-ms-request-id': 'cf463f2e116d8081a5491d7af2766207',
  date: 'Thu, 02 Apr 2015 11:42:32 GMT',
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
  'x-ms-request-id': 'cf463f2e116d8081a5491d7af2766207',
  date: 'Thu, 02 Apr 2015 11:42:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'x-ms-correlation-request-id': 'b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114233Z:b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:33 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB596?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'x-ms-correlation-request-id': 'b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114233Z:b890c0ae-7bf4-4ca4-9ac3-ec11eae3b568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:42:33 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; }][function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f8e67150ba9a87eaa509eb50446fe1bb',
  date: 'Thu, 02 Apr 2015 11:43:51 GMT',
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
  'x-ms-request-id': 'f8e67150ba9a87eaa509eb50446fe1bb',
  date: 'Thu, 02 Apr 2015 11:43:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b61cf371-3196-48f6-8078-aaba9f7a5215',
  'x-ms-correlation-request-id': 'b61cf371-3196-48f6-8078-aaba9f7a5215',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114353Z:b61cf371-3196-48f6-8078-aaba9f7a5215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:43:52 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b61cf371-3196-48f6-8078-aaba9f7a5215',
  'x-ms-correlation-request-id': 'b61cf371-3196-48f6-8078-aaba9f7a5215',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114353Z:b61cf371-3196-48f6-8078-aaba9f7a5215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 11:43:52 GMT',
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
  'x-ms-request-id': '1c92f08547098c7aad21501e4622f596',
  date: 'Thu, 02 Apr 2015 11:43:55 GMT',
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
  'x-ms-request-id': '1c92f08547098c7aad21501e4622f596',
  date: 'Thu, 02 Apr 2015 11:43:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7e9406fb-3bd2-46d5-bc17-4c701e718d96',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/7e9406fb-3bd2-46d5-bc17-4c701e718d96?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '95cdc4b3-5684-4216-bb2e-a6fb79dacd65',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114402Z:95cdc4b3-5684-4216-bb2e-a6fb79dacd65',
  date: 'Thu, 02 Apr 2015 11:44:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7e9406fb-3bd2-46d5-bc17-4c701e718d96',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/7e9406fb-3bd2-46d5-bc17-4c701e718d96?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '95cdc4b3-5684-4216-bb2e-a6fb79dacd65',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114402Z:95cdc4b3-5684-4216-bb2e-a6fb79dacd65',
  date: 'Thu, 02 Apr 2015 11:44:01 GMT',
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
  'x-ms-request-id': '584f98503d7b8d059fdd016d31f1b042',
  date: 'Thu, 02 Apr 2015 11:44:14 GMT',
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
  'x-ms-request-id': '584f98503d7b8d059fdd016d31f1b042',
  date: 'Thu, 02 Apr 2015 11:44:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/7e9406fb-3bd2-46d5-bc17-4c701e718d96?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e6c603b-05fa-4a5e-8c2f-14e99a3c5537',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': 'a4008d91-1ee6-4ee2-97f0-ee4c7a1015b6',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114415Z:a4008d91-1ee6-4ee2-97f0-ee4c7a1015b6',
  date: 'Thu, 02 Apr 2015 11:44:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/7e9406fb-3bd2-46d5-bc17-4c701e718d96?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e6c603b-05fa-4a5e-8c2f-14e99a3c5537',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': 'a4008d91-1ee6-4ee2-97f0-ee4c7a1015b6',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114415Z:a4008d91-1ee6-4ee2-97f0-ee4c7a1015b6',
  date: 'Thu, 02 Apr 2015 11:44:15 GMT',
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
  'x-ms-request-id': 'a899375bc02c8835941b3a2524c89233',
  date: 'Thu, 02 Apr 2015 11:44:17 GMT',
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
  'x-ms-request-id': 'a899375bc02c8835941b3a2524c89233',
  date: 'Thu, 02 Apr 2015 11:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8829e42-cfed-492f-90d7-537cbbbc0b1c"',
  'x-ms-request-id': '77826b30-2f4f-4635-90cc-6e85ed88badf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '1cc7ee1d-7acb-427d-90e0-2e9f95fcc1bf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114418Z:1cc7ee1d-7acb-427d-90e0-2e9f95fcc1bf',
  date: 'Thu, 02 Apr 2015 11:44:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"e8829e42-cfed-492f-90d7-537cbbbc0b1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e8829e42-cfed-492f-90d7-537cbbbc0b1c"',
  'x-ms-request-id': '77826b30-2f4f-4635-90cc-6e85ed88badf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': '1cc7ee1d-7acb-427d-90e0-2e9f95fcc1bf',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114418Z:1cc7ee1d-7acb-427d-90e0-2e9f95fcc1bf',
  date: 'Thu, 02 Apr 2015 11:44:18 GMT',
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
  'x-ms-request-id': 'dd0d49d6d8658dc99175d316c60d10f0',
  date: 'Thu, 02 Apr 2015 11:44:20 GMT',
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
  'x-ms-request-id': 'dd0d49d6d8658dc99175d316c60d10f0',
  date: 'Thu, 02 Apr 2015 11:44:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd4d3e5ec-ab16-4834-acde-8b10cbbe3158',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d4d3e5ec-ab16-4834-acde-8b10cbbe3158?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '1607bcf2-6112-43ff-bcbd-c96c63055025',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114422Z:1607bcf2-6112-43ff-bcbd-c96c63055025',
  date: 'Thu, 02 Apr 2015 11:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd4d3e5ec-ab16-4834-acde-8b10cbbe3158',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d4d3e5ec-ab16-4834-acde-8b10cbbe3158?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '1607bcf2-6112-43ff-bcbd-c96c63055025',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114422Z:1607bcf2-6112-43ff-bcbd-c96c63055025',
  date: 'Thu, 02 Apr 2015 11:44:21 GMT',
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
  'x-ms-request-id': 'd77ee7f8519183cebd975751020aeb22',
  date: 'Thu, 02 Apr 2015 11:44:34 GMT',
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
  'x-ms-request-id': 'd77ee7f8519183cebd975751020aeb22',
  date: 'Thu, 02 Apr 2015 11:44:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d4d3e5ec-ab16-4834-acde-8b10cbbe3158?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c50e4872-795a-411b-a9d3-ed01ff92afb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31984',
  'x-ms-correlation-request-id': '8361bf45-20ce-4f51-a739-b322d928e2a8',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114436Z:8361bf45-20ce-4f51-a739-b322d928e2a8',
  date: 'Thu, 02 Apr 2015 11:44:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d4d3e5ec-ab16-4834-acde-8b10cbbe3158?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c50e4872-795a-411b-a9d3-ed01ff92afb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31984',
  'x-ms-correlation-request-id': '8361bf45-20ce-4f51-a739-b322d928e2a8',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114436Z:8361bf45-20ce-4f51-a739-b322d928e2a8',
  date: 'Thu, 02 Apr 2015 11:44:35 GMT',
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
  'x-ms-request-id': 'e10bd3d6e2c78b269f0bd1bd2b6c9a0c',
  date: 'Thu, 02 Apr 2015 11:44:37 GMT',
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
  'x-ms-request-id': 'e10bd3d6e2c78b269f0bd1bd2b6c9a0c',
  date: 'Thu, 02 Apr 2015 11:44:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0247ba7-2780-4ec1-8b57-7d4603ddd873"',
  'x-ms-request-id': 'e739e998-3ac8-4e94-9d63-f0259e2c8528',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '9b0b0a99-a205-4033-95cc-b9b1706f6ab0',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114439Z:9b0b0a99-a205-4033-95cc-b9b1706f6ab0',
  date: 'Thu, 02 Apr 2015 11:44:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0247ba7-2780-4ec1-8b57-7d4603ddd873"',
  'x-ms-request-id': 'e739e998-3ac8-4e94-9d63-f0259e2c8528',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '9b0b0a99-a205-4033-95cc-b9b1706f6ab0',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114439Z:9b0b0a99-a205-4033-95cc-b9b1706f6ab0',
  date: 'Thu, 02 Apr 2015 11:44:39 GMT',
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
  'x-ms-request-id': 'a2c1be9171d584638165bf553148f809',
  date: 'Thu, 02 Apr 2015 11:44:41 GMT',
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
  'x-ms-request-id': 'a2c1be9171d584638165bf553148f809',
  date: 'Thu, 02 Apr 2015 11:44:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0247ba7-2780-4ec1-8b57-7d4603ddd873"',
  'x-ms-request-id': '025d17ab-84ac-4362-8ca7-5b12c527987e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '481d611e-4d1a-4e9d-8d77-12485252a6a5',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114442Z:481d611e-4d1a-4e9d-8d77-12485252a6a5',
  date: 'Thu, 02 Apr 2015 11:44:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"a0247ba7-2780-4ec1-8b57-7d4603ddd873\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0247ba7-2780-4ec1-8b57-7d4603ddd873"',
  'x-ms-request-id': '025d17ab-84ac-4362-8ca7-5b12c527987e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '481d611e-4d1a-4e9d-8d77-12485252a6a5',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114442Z:481d611e-4d1a-4e9d-8d77-12485252a6a5',
  date: 'Thu, 02 Apr 2015 11:44:42 GMT',
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
  'x-ms-request-id': 'cd99dc1097dc885c9b7179c8daa2fca8',
  date: 'Thu, 02 Apr 2015 11:44:45 GMT',
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
  'x-ms-request-id': 'cd99dc1097dc885c9b7179c8daa2fca8',
  date: 'Thu, 02 Apr 2015 11:44:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '84e761e1-c2fd-4d11-a3c2-65dce8280d81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/84e761e1-c2fd-4d11-a3c2-65dce8280d81?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '02fb125e-ba4e-4c73-a5a7-f785e4ff0c47',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114446Z:02fb125e-ba4e-4c73-a5a7-f785e4ff0c47',
  date: 'Thu, 02 Apr 2015 11:44:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '84e761e1-c2fd-4d11-a3c2-65dce8280d81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/84e761e1-c2fd-4d11-a3c2-65dce8280d81?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '02fb125e-ba4e-4c73-a5a7-f785e4ff0c47',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114446Z:02fb125e-ba4e-4c73-a5a7-f785e4ff0c47',
  date: 'Thu, 02 Apr 2015 11:44:46 GMT',
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
  'x-ms-request-id': '27dbf10520958badbbda70009a4ce5fb',
  date: 'Thu, 02 Apr 2015 11:44:58 GMT',
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
  'x-ms-request-id': '27dbf10520958badbbda70009a4ce5fb',
  date: 'Thu, 02 Apr 2015 11:44:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/84e761e1-c2fd-4d11-a3c2-65dce8280d81?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '35505a55-a853-4da5-becf-33f6749ca4df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31983',
  'x-ms-correlation-request-id': '4cd52423-fb04-462e-a9a8-b1db2c1b6653',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114500Z:4cd52423-fb04-462e-a9a8-b1db2c1b6653',
  date: 'Thu, 02 Apr 2015 11:44:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/84e761e1-c2fd-4d11-a3c2-65dce8280d81?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '35505a55-a853-4da5-becf-33f6749ca4df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31983',
  'x-ms-correlation-request-id': '4cd52423-fb04-462e-a9a8-b1db2c1b6653',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114500Z:4cd52423-fb04-462e-a9a8-b1db2c1b6653',
  date: 'Thu, 02 Apr 2015 11:44:59 GMT',
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
  'x-ms-request-id': '08721f3ed91c8714bc44b20f9530bf62',
  date: 'Thu, 02 Apr 2015 11:45:02 GMT',
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
  'x-ms-request-id': '08721f3ed91c8714bc44b20f9530bf62',
  date: 'Thu, 02 Apr 2015 11:45:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"394c3340-2e00-47bf-af30-d5d024c85fc9"',
  'x-ms-request-id': '54b291f5-d57a-47b5-b537-f2193e4570da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '92104ed7-2e7c-45b2-b26c-ab5132a8e6dd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114504Z:92104ed7-2e7c-45b2-b26c-ab5132a8e6dd',
  date: 'Thu, 02 Apr 2015 11:45:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5149\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/probes/LB-Probe5149\",\r\n        \"etag\": \"W/\\\"394c3340-2e00-47bf-af30-d5d024c85fc9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"394c3340-2e00-47bf-af30-d5d024c85fc9"',
  'x-ms-request-id': '54b291f5-d57a-47b5-b537-f2193e4570da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '92104ed7-2e7c-45b2-b26c-ab5132a8e6dd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114504Z:92104ed7-2e7c-45b2-b26c-ab5132a8e6dd',
  date: 'Thu, 02 Apr 2015 11:45:03 GMT',
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
  'x-ms-request-id': '6ceae06f2c9e8c52a4a64a845c3387f4',
  date: 'Thu, 02 Apr 2015 11:45:06 GMT',
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
  'x-ms-request-id': '6ceae06f2c9e8c52a4a64a845c3387f4',
  date: 'Thu, 02 Apr 2015 11:45:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"61868935-e8e2-4119-991e-fb1336263d93\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"61868935-e8e2-4119-991e-fb1336263d93\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a8b9847c-bea9-4627-9c2a-3ca9e623a83d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a8b9847c-bea9-4627-9c2a-3ca9e623a83d?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1af78d28-d180-4b54-befd-0fc44e7ba597',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114508Z:1af78d28-d180-4b54-befd-0fc44e7ba597',
  date: 'Thu, 02 Apr 2015 11:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB5843?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5843\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843\",\r\n  \"etag\": \"W/\\\"61868935-e8e2-4119-991e-fb1336263d93\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB5843/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"61868935-e8e2-4119-991e-fb1336263d93\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a8b9847c-bea9-4627-9c2a-3ca9e623a83d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a8b9847c-bea9-4627-9c2a-3ca9e623a83d?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1af78d28-d180-4b54-befd-0fc44e7ba597',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114508Z:1af78d28-d180-4b54-befd-0fc44e7ba597',
  date: 'Thu, 02 Apr 2015 11:45:07 GMT',
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
  'x-ms-request-id': '6dd9ca8723208cc5b81f1df9664db54c',
  date: 'Thu, 02 Apr 2015 11:45:20 GMT',
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
  'x-ms-request-id': '6dd9ca8723208cc5b81f1df9664db54c',
  date: 'Thu, 02 Apr 2015 11:45:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a8b9847c-bea9-4627-9c2a-3ca9e623a83d?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efd96ea7-a0e2-411d-a18a-ee6bae456d1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'd958b36b-bf3b-4c38-b2f5-e57f94f2ea26',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114522Z:d958b36b-bf3b-4c38-b2f5-e57f94f2ea26',
  date: 'Thu, 02 Apr 2015 11:45:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/a8b9847c-bea9-4627-9c2a-3ca9e623a83d?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efd96ea7-a0e2-411d-a18a-ee6bae456d1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'd958b36b-bf3b-4c38-b2f5-e57f94f2ea26',
  'x-ms-routing-request-id': 'EASTASIA:20150402T114522Z:d958b36b-bf3b-4c38-b2f5-e57f94f2ea26',
  date: 'Thu, 02 Apr 2015 11:45:22 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB5843','LB-Probe5149'];};[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .put('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.208 (rd_rdfe_stable.150324-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'db7e9ec81b4d8b3eaf21f63e3a622ec0',
  date: 'Thu, 02 Apr 2015 12:50:48 GMT',
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
  'x-ms-request-id': 'db7e9ec81b4d8b3eaf21f63e3a622ec0',
  date: 'Thu, 02 Apr 2015 12:50:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'x-ms-correlation-request-id': '51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125049Z:51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:50:48 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'x-ms-correlation-request-id': '51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125049Z:51f59e11-5523-4a45-82cf-556b1f3e4b02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Apr 2015 12:50:48 GMT',
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
  'x-ms-request-id': '73e01deed4288bcc846f9f9059842b0f',
  date: 'Thu, 02 Apr 2015 12:50:50 GMT',
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
  'x-ms-request-id': '73e01deed4288bcc846f9f9059842b0f',
  date: 'Thu, 02 Apr 2015 12:50:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '66b7d980-e9cf-49db-9991-abbbc5e7f220',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/66b7d980-e9cf-49db-9991-abbbc5e7f220?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '472c4546-29d0-446f-a90f-c23d117c5ac9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125056Z:472c4546-29d0-446f-a90f-c23d117c5ac9',
  date: 'Thu, 02 Apr 2015 12:50:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '66b7d980-e9cf-49db-9991-abbbc5e7f220',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/66b7d980-e9cf-49db-9991-abbbc5e7f220?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '472c4546-29d0-446f-a90f-c23d117c5ac9',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125056Z:472c4546-29d0-446f-a90f-c23d117c5ac9',
  date: 'Thu, 02 Apr 2015 12:50:56 GMT',
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
  'x-ms-request-id': '38dbc1242dd68c7cb06fb563f2edb838',
  date: 'Thu, 02 Apr 2015 12:51:07 GMT',
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
  'x-ms-request-id': '38dbc1242dd68c7cb06fb563f2edb838',
  date: 'Thu, 02 Apr 2015 12:51:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/66b7d980-e9cf-49db-9991-abbbc5e7f220?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4946042-a437-480b-a0d6-93817d7e9adb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '64ba0a3c-3712-4114-8a73-98d4e3bfeb47',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125109Z:64ba0a3c-3712-4114-8a73-98d4e3bfeb47',
  date: 'Thu, 02 Apr 2015 12:51:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/66b7d980-e9cf-49db-9991-abbbc5e7f220?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4946042-a437-480b-a0d6-93817d7e9adb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': '64ba0a3c-3712-4114-8a73-98d4e3bfeb47',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125109Z:64ba0a3c-3712-4114-8a73-98d4e3bfeb47',
  date: 'Thu, 02 Apr 2015 12:51:09 GMT',
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
  'x-ms-request-id': 'd97c31834cf38ce4ad82e835030e2ec5',
  date: 'Thu, 02 Apr 2015 12:51:11 GMT',
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
  'x-ms-request-id': 'd97c31834cf38ce4ad82e835030e2ec5',
  date: 'Thu, 02 Apr 2015 12:51:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf7a93e9-8c61-4e51-9240-a6039c84f37a"',
  'x-ms-request-id': '572941e1-f464-4e84-9c2f-21e9e3635b85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '273ebf1c-4205-40c3-8001-cac2065467fe',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125112Z:273ebf1c-4205-40c3-8001-cac2065467fe',
  date: 'Thu, 02 Apr 2015 12:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"cf7a93e9-8c61-4e51-9240-a6039c84f37a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf7a93e9-8c61-4e51-9240-a6039c84f37a"',
  'x-ms-request-id': '572941e1-f464-4e84-9c2f-21e9e3635b85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '273ebf1c-4205-40c3-8001-cac2065467fe',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125112Z:273ebf1c-4205-40c3-8001-cac2065467fe',
  date: 'Thu, 02 Apr 2015 12:51:12 GMT',
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
  'x-ms-request-id': '0af731b794b18c28b2386d2792369b51',
  date: 'Thu, 02 Apr 2015 12:51:13 GMT',
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
  'x-ms-request-id': '0af731b794b18c28b2386d2792369b51',
  date: 'Thu, 02 Apr 2015 12:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e854e982-23cb-47cc-a925-997e93272819',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e854e982-23cb-47cc-a925-997e93272819?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f7ac3f75-800b-4341-ab44-62649a1f1d28',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125115Z:f7ac3f75-800b-4341-ab44-62649a1f1d28',
  date: 'Thu, 02 Apr 2015 12:51:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e854e982-23cb-47cc-a925-997e93272819',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e854e982-23cb-47cc-a925-997e93272819?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f7ac3f75-800b-4341-ab44-62649a1f1d28',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125115Z:f7ac3f75-800b-4341-ab44-62649a1f1d28',
  date: 'Thu, 02 Apr 2015 12:51:15 GMT',
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
  'x-ms-request-id': 'da2eeca2e65e86cf84ee768bfa2327d5',
  date: 'Thu, 02 Apr 2015 12:51:27 GMT',
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
  'x-ms-request-id': 'da2eeca2e65e86cf84ee768bfa2327d5',
  date: 'Thu, 02 Apr 2015 12:51:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e854e982-23cb-47cc-a925-997e93272819?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e5ca8a63-d8a2-48ef-bf49-e633731a26a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '22ea63b0-f442-4050-9aa7-1e161777b79b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125128Z:22ea63b0-f442-4050-9aa7-1e161777b79b',
  date: 'Thu, 02 Apr 2015 12:51:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/e854e982-23cb-47cc-a925-997e93272819?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e5ca8a63-d8a2-48ef-bf49-e633731a26a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-correlation-request-id': '22ea63b0-f442-4050-9aa7-1e161777b79b',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125128Z:22ea63b0-f442-4050-9aa7-1e161777b79b',
  date: 'Thu, 02 Apr 2015 12:51:28 GMT',
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
  'x-ms-request-id': 'fa5262c5194a819b9b627347d63993d9',
  date: 'Thu, 02 Apr 2015 12:51:31 GMT',
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
  'x-ms-request-id': 'fa5262c5194a819b9b627347d63993d9',
  date: 'Thu, 02 Apr 2015 12:51:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d853f4da-91b6-43e4-928a-cb78ed3bef74"',
  'x-ms-request-id': '3db52719-49f6-4590-a5f9-00ea12d59997',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': 'c4479640-919f-4d14-94fd-e981ef5e8bf4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125131Z:c4479640-919f-4d14-94fd-e981ef5e8bf4',
  date: 'Thu, 02 Apr 2015 12:51:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d853f4da-91b6-43e4-928a-cb78ed3bef74"',
  'x-ms-request-id': '3db52719-49f6-4590-a5f9-00ea12d59997',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31997',
  'x-ms-correlation-request-id': 'c4479640-919f-4d14-94fd-e981ef5e8bf4',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125131Z:c4479640-919f-4d14-94fd-e981ef5e8bf4',
  date: 'Thu, 02 Apr 2015 12:51:31 GMT',
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
  'x-ms-request-id': '338c949a3e758380963edb452b6671de',
  date: 'Thu, 02 Apr 2015 12:51:33 GMT',
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
  'x-ms-request-id': '338c949a3e758380963edb452b6671de',
  date: 'Thu, 02 Apr 2015 12:51:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d853f4da-91b6-43e4-928a-cb78ed3bef74"',
  'x-ms-request-id': '4415e21b-50e4-444e-8633-946d25d5309b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': 'e4eec325-604e-4664-9abf-14f3498e97ec',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125134Z:e4eec325-604e-4664-9abf-14f3498e97ec',
  date: 'Thu, 02 Apr 2015 12:51:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"d853f4da-91b6-43e4-928a-cb78ed3bef74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d853f4da-91b6-43e4-928a-cb78ed3bef74"',
  'x-ms-request-id': '4415e21b-50e4-444e-8633-946d25d5309b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-correlation-request-id': 'e4eec325-604e-4664-9abf-14f3498e97ec',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125134Z:e4eec325-604e-4664-9abf-14f3498e97ec',
  date: 'Thu, 02 Apr 2015 12:51:33 GMT',
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
  'x-ms-request-id': 'cc5fe1ad575f88dc88d1012c346a0661',
  date: 'Thu, 02 Apr 2015 12:51:36 GMT',
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
  'x-ms-request-id': 'cc5fe1ad575f88dc88d1012c346a0661',
  date: 'Thu, 02 Apr 2015 12:51:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd31a52a6-dcb9-49d7-87cd-bd8e585d4028',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125137Z:d31a52a6-dcb9-49d7-87cd-bd8e585d4028',
  date: 'Thu, 02 Apr 2015 12:51:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd31a52a6-dcb9-49d7-87cd-bd8e585d4028',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125137Z:d31a52a6-dcb9-49d7-87cd-bd8e585d4028',
  date: 'Thu, 02 Apr 2015 12:51:37 GMT',
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
  'x-ms-request-id': '8ee3b89ae976853d8592147acdde42cb',
  date: 'Thu, 02 Apr 2015 12:51:49 GMT',
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
  'x-ms-request-id': '8ee3b89ae976853d8592147acdde42cb',
  date: 'Thu, 02 Apr 2015 12:51:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f0a0736-087c-4fff-8c27-26245dc38abd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '1d91f23c-c3b8-49b0-bbc9-4a55c5c22ef3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125150Z:1d91f23c-c3b8-49b0-bbc9-4a55c5c22ef3',
  date: 'Thu, 02 Apr 2015 12:51:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cc6a8c8d-9f80-41e8-a6f8-2653e6f6570b?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f0a0736-087c-4fff-8c27-26245dc38abd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '1d91f23c-c3b8-49b0-bbc9-4a55c5c22ef3',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125150Z:1d91f23c-c3b8-49b0-bbc9-4a55c5c22ef3',
  date: 'Thu, 02 Apr 2015 12:51:50 GMT',
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
  'x-ms-request-id': '219107199fa284adab758c00f4048efb',
  date: 'Thu, 02 Apr 2015 12:51:53 GMT',
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
  'x-ms-request-id': '219107199fa284adab758c00f4048efb',
  date: 'Thu, 02 Apr 2015 12:51:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"11084c33-48ec-4664-a8f7-ee525d15a8aa"',
  'x-ms-request-id': 'cb771283-8626-4b4a-9897-4eba988fb5fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': 'b059e2bc-32fd-4f79-b866-f64457874ccd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125153Z:b059e2bc-32fd-4f79-b866-f64457874ccd',
  date: 'Thu, 02 Apr 2015 12:51:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe5050\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/probes/LB-Probe5050\",\r\n        \"etag\": \"W/\\\"11084c33-48ec-4664-a8f7-ee525d15a8aa\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 3321,\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1679',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"11084c33-48ec-4664-a8f7-ee525d15a8aa"',
  'x-ms-request-id': 'cb771283-8626-4b4a-9897-4eba988fb5fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31994',
  'x-ms-correlation-request-id': 'b059e2bc-32fd-4f79-b866-f64457874ccd',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125153Z:b059e2bc-32fd-4f79-b866-f64457874ccd',
  date: 'Thu, 02 Apr 2015 12:51:53 GMT',
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
  'x-ms-request-id': '0c2a78f48efb83039d7c2f2323eb914b',
  date: 'Thu, 02 Apr 2015 12:51:55 GMT',
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
  'x-ms-request-id': '0c2a78f48efb83039d7c2f2323eb914b',
  date: 'Thu, 02 Apr 2015 12:51:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"51c33f07-25b7-410a-b0a8-27ea0a6333cd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"51c33f07-25b7-410a-b0a8-27ea0a6333cd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0c859092-a570-4c1f-b30e-d59e22da7c13',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0c859092-a570-4c1f-b30e-d59e22da7c13?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '2273490b-2ea0-4428-9fc9-dc582ab87428',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125157Z:2273490b-2ea0-4428-9fc9-dc582ab87428',
  date: 'Thu, 02 Apr 2015 12:51:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/microsoft.network/loadBalancers/armEmptyLB2555?api-version=2014-12-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB2555\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555\",\r\n  \"etag\": \"W/\\\"51c33f07-25b7-410a-b0a8-27ea0a6333cd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/loadBalancers/armEmptyLB2555/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"51c33f07-25b7-410a-b0a8-27ea0a6333cd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip\"\r\n          },\r\n          \"loadBalancingRules\": [],\r\n          \"inboundNatRules\": [],\r\n          \"outboundNatRules\": []\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"West US\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0c859092-a570-4c1f-b30e-d59e22da7c13',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0c859092-a570-4c1f-b30e-d59e22da7c13?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '2273490b-2ea0-4428-9fc9-dc582ab87428',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125157Z:2273490b-2ea0-4428-9fc9-dc582ab87428',
  date: 'Thu, 02 Apr 2015 12:51:56 GMT',
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
  'x-ms-request-id': '859744e17ab885e1b50a92e9bf0aac64',
  date: 'Thu, 02 Apr 2015 12:52:08 GMT',
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
  'x-ms-request-id': '859744e17ab885e1b50a92e9bf0aac64',
  date: 'Thu, 02 Apr 2015 12:52:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0c859092-a570-4c1f-b30e-d59e22da7c13?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cad5b1a8-0bef-4d6d-9304-d695496560e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '8da73b6e-be9c-4acc-9734-e57b0b7e6b52',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125210Z:8da73b6e-be9c-4acc-9734-e57b0b7e6b52',
  date: 'Thu, 02 Apr 2015 12:52:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0c859092-a570-4c1f-b30e-d59e22da7c13?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cad5b1a8-0bef-4d6d-9304-d695496560e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': '8da73b6e-be9c-4acc-9734-e57b0b7e6b52',
  'x-ms-routing-request-id': 'EASTASIA:20150402T125210Z:8da73b6e-be9c-4acc-9734-e57b0b7e6b52',
  date: 'Thu, 02 Apr 2015 12:52:09 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armEmptyLB2555','LB-Probe5050'];};