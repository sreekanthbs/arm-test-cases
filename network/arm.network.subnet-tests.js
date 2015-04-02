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
var testprefix = 'arm-network-subnet-tests';
var vnetPrefix = 'xplatTestVnet';     
var subnetprefix ='xplatTestSubnet';   
var createdGroups = [];
var groupName,
	groupPrefix = 'xplatTestGCreate',
	dnsPrefix,
	tag='tag1;',
	location='westus';
	
	

describe('arm', function () {
	describe('network vnet', function () {
			var suite;

			before(function (done) {
			  suite = new CLITest(testprefix);
			  suite.setupTest(function() {				  
					groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
					vnetPrefix = suite.generateId(vnetPrefix, createdGroups, suite.isMocked);
					subnetprefix = suite.generateId(subnetprefix,createdGroups, suite.isMocked);
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

    describe('subnet', function () {
			it('create', function (done) {
				createGroup(function(){
					createVnet(function(){
							
						var cmd = util.format('network vnet subnet create %s %s %s ',groupName,vnetPrefix,subnetprefix ).split(' ');
						suite.execute(cmd,  function (result) {
						result.exitStatus.should.equal(0);
						done();
						});
					
					});
				});
			});      
				
			it('list', function (done) {
						suite.execute('network vnet subnet list %s %s --json',groupName,vnetPrefix ,function (result) {
							  result.exitStatus.should.equal(0);
							  var allResources = JSON.parse(result.text);
							allResources.some(function (res) {
							return res.name === subnetprefix;
								}).should.be.true;
							  done();
						});					
			});

			it('set', function (done) {
				suite.execute('network vnet subnet set -e 10.0.1.0/24 %s %s %s --json', groupName, vnetPrefix,subnetprefix, function (result) {
					 result.exitStatus.should.equal(0);
					 done();
				});
			});
		 
			it('show', function (done) {
				 suite.execute('network vnet subnet show %s %s %s --json ',groupName,vnetPrefix,subnetprefix,function (result) {
					 result.exitStatus.should.equal(0);
					 var allresources = JSON.parse(result.text);
					 allresources.name.should.equal(subnetprefix) ;
					 done();
				 });
			 });
		
		
			it('delete', function (done) {
					suite.execute('network vnet subnet delete %s %s %s --quiet', groupName, vnetPrefix,subnetprefix,function (result) {
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
			var cmd = util.format('network vnet create %s %s %s -a 10.0.0.0/12 -d 10.0.1.0 ',groupName,vnetPrefix,location).split(' ');
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