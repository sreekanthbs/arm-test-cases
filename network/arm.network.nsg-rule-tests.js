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
var testprefix = 'arm-network-nsg-rule-tests';
var createdGroups = [];
var createdNSGs = [];
var createdNSGRules = [];
var groupName, nsgName, nsgRule,
	groupPrefix = 'xplatTestGCreate',
	nsgPrefix = 'xplatTestNsg',
	nsgRulePrefix = 'xplatTestNsgRule',
	location="West US";

describe('arm', function () {
  describe('network', function () {
	var networkconfig = 'networkConfig.json';
    var suite;

    before(function (done) {
      suite = new CLITest(testprefix);
	  suite.setupTest(function() {
		  groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  nsgName = suite.generateId(nsgPrefix, createdNSGs, suite.isMocked);
		  nsgRule = suite.generateId(nsgRulePrefix, createdNSGRules, suite.isMocked);
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

    describe('nsg rule', function () {
		it('create', function (done) {
			createGroup(function(){
				createNSG(function() {
					var cmd = util.format('network nsg rule create ').split(' ');
					suite.execute(cmd,  function (result) {
						result.exitStatus.should.equal(0);
						done();
					});
				});
			});
		});
		
		it('show', function (done) {
		  suite.execute('network nsg rule show %s %s %s --json', groupName, nsgName, nsgRule, function (result) {
			result.exitStatus.should.equal(0);
			var allresources = JSON.parse(result.text);
				allresources.name.should.equal(nsgName);
          
			done();
			});
		});
		
		
		it('list', function (done) {
		  suite.execute('network nsg rule list %s %s --json',groupName, nsgName, function (result) {
			  result.exitStatus.should.equal(0);
			  var allResources = JSON.parse(result.text);
			  allResources.some(function (res) {
				return res.name === nsgRule;
			  }).should.be.true;
			  done();
			});
		});
	  
	  
		it('delete', function (done) {
		  suite.execute('network nsg rule delete %s %s %s --quiet', groupName, nsgName, nsgRule, function (result) {
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
	function createNSG(callback) {
		suite.execute('network nsg rule create %s %s %s --json', groupName, nsgName, nsgRule, function (result) {
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