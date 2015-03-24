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
var util = require('util');

var CLITest = require('../../../framework/arm-cli-test');
var testUtil = require('../../../util/util');
var utils = require('../../../../lib/util/utils');
var testprefix = 'arm-network-vnet-dnsserver-tests';
var vnetPrefix = 'xplatTestVnet';
var createdGroups = [];
var groupName,
	groupPrefix = 'xplatTestGCreate',
	dnsPrefix,
	location="West US",
	addressSpace='"10.0.1.0"',
	cidr='12',
	subnetStartIP='"10.0.1.0"',
	subnetName = 'armSubnet1',
	subnetCird='15',
	subnetDnsServer='"1.0.1.8"',
	tag='tag1;',
	vnetlocation='westus';

describe('arm', function () {
  describe('network', function () {
	var networkconfig = 'networkConfig.json';
    var suite;

    before(function (done) {
      suite = new CLITest(testprefix);
	  suite.setupTest(function() {
		  groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  vnetPrefix = suite.generateId(vnetPrefix, createdGroups, suite.isMocked);
		  done();
	  });
    });

    after(function (done) {
		 deleteVnet(function(){
			deleteUsedGroup(function(){
				suite.teardownSuite(done);
			});
			
		});
		
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

	
	
    describe('vnet', function () {
		it('dnsserver register', function (done) {
			createGroup(function(){
				createVnet(function(){
					var cmd = util.format('network vnet dnsserver register %s %s 10.0.0.0 ',groupName,vnetPrefix ).split(' ');
					suite.execute(cmd,  function (result) {
					result.exitStatus.should.equal(0);
					done();
					});
				
				});
			});
		});
		
		
		
		
		
		
		it('dnsserver list', function (done) {
					  suite.execute('network vnet dnsserver list %s %s --json',groupName,vnetPrefix ,function (result) {
						  result.exitStatus.should.equal(0);
						  var allResources = JSON.parse(result.text);
							allResources.name.should.equal(vnetPrefix);
						  done();
						});
					});

		 
		
			// it('list', function (done) {
					  // suite.execute('network vnet dnsserver list %s %s --json',groupName,vnetPrefix ,function (result) {
						  // result.exitStatus.should.equal(0);
						  // var allResources = JSON.parse(result.text);
						  // allResources.some(function (res) {
							// return res.name === vnetPrefix;
						  // }).should.be.true;
						  // done();
						// });
					// });
	  
	  
		it('dnsserver unregister', function (done) {
		  suite.execute('network vnet dnsserver unregister %s %s 10.0.0.0 --json',groupName,vnetPrefix ,function (result) {
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
	
	function createVnet(callback) {
			var cmd = util.format('network vnet create -e 10.0.1.0 --cidr %s --subnet-name %s --subnet-cidr %s --subnet-start-ip 10.0.1.0 -b 1.0.1.8 --tags %s %s %s %s', cidr,subnetName,subnetCird, tag, groupName, vnetPrefix, vnetlocation).split(' ');
				suite.execute(cmd,  function (result) {
					result.exitStatus.should.equal(0);
				   callback();
				});      
    }
	
	function deleteVnet(callback) {
		suite.execute('network vnet delete %s %s --quiet', groupName, vnetPrefix, function (result) {
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