/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');

var CLITest = require('../../../framework/arm-cli-test');
var testUtil = require('../../../util/util');
var utils = require('../../../../lib/util/utils');
var testprefix = 'arm-network-lb-probe-tests';
var groupPrefix = 'xplatTestGCreate';
var createdGroups = [];
var groupName = 'armresgrptest1',dnsPrefix, protocol= 'http', port ='80', path ='healthcheck.aspx', interval = '5', count = '2',
	publicipName = '/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armresgrptest1/providers/Microsoft.Network/publicIPAddresses/armLBsuperip',
	LBName = 'armEmptyLB',
	LBProbe = 'LB-Probe',
	location="West US";
// var requiredEnvironment = [{
  // name: 'AZURE_VM_TEST_LOCATION',
  // defaultValue: 'West US'
// }];

describe('arm', function () {
  describe('network', function () {
    var suite;
    before(function (done) {
      suite = new CLITest(testprefix);
	  suite.setupTest(function() {
		  //dnsPrefix = groupPrefix.toLowerCase();
		  //groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  // publicipName = suite.generateId(publicipName, null);
		   LBName = suite.generateId(LBName, null);
		   LBProbe = suite.generateId(LBProbe, null);
		  done();
	  });
    });

    after(function (done) {
		deleteLB ( function() {
			//deleteUsedGroup(function() {
				suite.teardownSuite(done);  
			//});
		});
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('lb probe', function () {
      it('create', function (done) {
		//createGroup(function(){
			createLB (function(){
				suite.execute('network lb probe create %s %s %s -t %s -r %s -p %s -e %s -u %s  --json', groupName, LBName, LBProbe, protocol, port, path, interval,count, function (result) {
				  result.exitStatus.should.equal(0);
				  done();
				});
			});
			
			
		//});
        
      });
	  
	  
		it('list', function (done) {
		  suite.execute('network lb probe list %s %s --json', groupName,LBName, function (result) {
          result.exitStatus.should.equal(0);
		  var allResources = JSON.parse(result.text);
          allResources.some(function (res) {
            return res.name === LBProbe;
          }).should.be.true;
		  done();
		});
	  });
	  it('set', function (done) {
		  suite.execute('network lb probe set %s %s %s  -t tcp -r 3321 --json', groupName,LBName,LBProbe, function (result) {
          result.exitStatus.should.equal(0);
		  done();
		});
	  });
	  
		it('delete', function (done) {
		  suite.execute('network lb probe delete %s %s %s --quiet --json', groupName, LBName,LBProbe, function (result) {
          result.exitStatus.should.equal(0);
		  done();
		});
	  });
	  
    });
	
	function createGroup(callback) {
        suite.execute('group create %s --location %s --json', groupName, location, function (result) {
          result.exitStatus.should.equal(0);
		  callback();
		});
    }

	function createLB(callback){
		suite.execute('network lb create %s %s %s -p %s --json', groupName, LBName, location, publicipName,  function (result) {
			  result.exitStatus.should.equal(0);
			  callback();
			});
	}
	function deleteLB(callback) {
		suite.execute('network lb delete %s %s --quiet --json',groupName, LBName, function (result) {
			  result.exitStatus.should.equal(0);
			  callback();
			});
	}
	function deleteUsedGroup(callback) {
     suite.execute('group delete %s --quiet', groupName, function (result) {
          result.exitStatus.should.equal(0);
		  callback();
		});
    }
  });
});