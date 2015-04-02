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
var testprefix = 'arm-network-publicip-tests';
var groupPrefix = 'xplatTestGCreate';
var createdGroups = [];
var groupName,
	dnsPrefix,location="West US";
// var requiredEnvironment = [{
  // name: 'AZURE_VM_TEST_LOCATION',
  // defaultValue: 'West US'
// }];

describe('arm', function () {
  describe('network', function () {
    var suite;
	var publicipName = 'armpublicip2';
    before(function (done) {
      suite = new CLITest(testprefix);
	  suite.setupTest(function() {
		  dnsPrefix = groupPrefix.toLowerCase();
		  groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  done();
	  });
    });

    after(function (done) {
		deleteUsedGroup(function() {
			suite.teardownSuite(done);
		});
		
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('publicip', function () {
      it('create', function (done) {
		createGroup(function(){
			suite.execute('network public-ip create %s %s --domain-name-label %s --location %s', groupName, publicipName, dnsPrefix, location,  function (result) {
			  result.exitStatus.should.equal(0);
			  done();
			});
			
		});
        
      });
	  
	  it('show', function (done) {
		  suite.execute('network public-ip show %s %s --json', groupName, publicipName, function (result) {
			result.exitStatus.should.equal(0);
			 
			var allResources = JSON.parse(result.text);
			allResources.name.should.equal(publicipName);
          
			done();
			});
		});
		
		it('list', function (done) {
		  suite.execute('network public-ip list %s --json', groupName, function (result) {
          result.exitStatus.should.equal(0);
		  var allResources = JSON.parse(result.text);
          allResources.some(function (res) {
            return res.name === publicipName;
          }).should.be.true;
		  done();
		});
	  });
	  
	  
		it('delete', function (done) {
		  suite.execute('network public-ip delete %s %s --quiet', groupName, publicipName, function (result) {
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
	// function deletePublicIP(callback) {
     // suite.execute('network publicip delete %s %s --quiet', groupName, 'armpublicip2', function (result) {
		  // console.log('delete publicip passed');
          // result.exitStatus.should.equal(0);
		  // callback();
		// });
    // }
	function deleteUsedGroup(callback) {
     suite.execute('group delete %s --quiet', groupName, function (result) {
          result.exitStatus.should.equal(0);
		  callback();
		});
    }
  });
});