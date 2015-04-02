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
var testprefix = 'arm-cli-vm-stopstart-tests';
var groupPrefix = 'xplatTestGCreate';
var createdGroups = [];
var createdVms = [];
var createdNics = [];
var createdStorages = [];
var createdStrgcnts = [];
var createdVhds = [];
var createdVnets = [];
var createdSubnets = [];
var createdIps = [];
var createdDns = [];

var groupName, timeout,
	vmPrefix = 'xplattestvm',
	nicName = 'xplattestnic',
	location = 'East US',
	os = 'Windows',
	username = 'azureuser',
	password = 'Brillio@2015' ,
	VMImage = 'ad072bd3082149369c449ba5832401ae__Windows-Server-Remote-Desktop-Session-Host-on-Windows-Server-2012-R2-20140514-1852',
	storageAccount = 'xplatteststorage',
	storageCont= 'xplatteststoragecnt',
	osdiskvhd= 'xplattestvhd',	
	vNetPrefix = 'xplattestvnet',
	subnetName = 'xplattestsubnet',
	publicipName= 'xplattestip',
	dnsPrefix = 'xplattestdns' ;

describe('arm', function () {
	describe('compute', function () {
	
		var suite, retry = 5;
		testUtil.TIMEOUT_INTERVAL = 5000;

		before(function (done) {
		  suite = new CLITest(testprefix);
		  suite.setupTest(function() {	
			  timeout = suite.isMocked ? 0 : testUtil.TIMEOUT_INTERVAL;		  
			  groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);	  
			  vmPrefix = suite.generateId(vmPrefix, createdVms, suite.isMocked);
			  nicName = suite.generateId(nicName, createdNics, suite.isMocked);
			  storageAccount = suite.generateId(storageAccount, createdStorages, suite.isMocked);
			  storageCont = suite.generateId(storageCont, createdStrgcnts, suite.isMocked);
			  osdiskvhd = suite.generateId(osdiskvhd, createdVhds, suite.isMocked);
			  vNetPrefix = suite.generateId(vNetPrefix, createdVnets, suite.isMocked);	
			  subnetName = suite.generateId(subnetName, createdSubnets, suite.isMocked);
			  publicipName = suite.generateId(publicipName, createdIps, suite.isMocked);
			  dnsPrefix = suite.generateId(dnsPrefix, createdDns, suite.isMocked);		  
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

		describe('vm', function () {
			it('create', function (done) {
				createGroup(function(){
					console.log('group ' + groupName + ' vm ' +  vmPrefix);
					var cmd = util.format('vm create %s %s %s eastus Windows -u %s -p %s -q %s -o %s -r %s -c %s -d %s -f %s -g %s -j %s -k %s -i %s -n %s --json', 
								groupName, vmPrefix, nicName, username, password, VMImage, storageAccount, 
								storageCont, 'None', osdiskvhd, vNetPrefix, '10.0.0.0/16', subnetName, '10.0.0.0/24',
								publicipName, dnsPrefix).split(' ');
								
					suite.execute(cmd,  function (result) {
						result.exitStatus.should.equal(0);
						done();
					});
				});
			});
					
		it('Stop and start', function(done) {
        //createVM(function() {
		  console.log('group ' + groupName + ' vm ' +  vmPrefix);
          var cmd = util.format('vm stop %s %s --json', groupName, vmPrefix).split(' ');
          testUtil.executeCommand(suite, retry, cmd, function(result) {
			  console.log(result);
            result.exitStatus.should.equal(0);
            setTimeout(function() {
              cmd = util.format('vm start %s %s --json', groupName, vmPrefix).split(' ');
              testUtil.executeCommand(suite, retry, cmd, function(result) {
				console.log(result);
                result.exitStatus.should.equal(0);
                done();
              });
            }, timeout);
          });
        //});
      });
	  
	  // VM Restart
      it('Restart', function(done) {
		console.log('group ' + groupName + ' vm ' +  vmPrefix);
        var cmd = util.format('vm restart %s %s --json', groupName, vmPrefix).split(' ');
        testUtil.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
		  
	});
	
		function createGroup(callback) {
			suite.execute('group create %s --location %s --json', groupName,location, function (result) {
			  result.exitStatus.should.equal(0);
			  callback();
			});
		}
	
		function deleteUsedGroup(callback) {
			suite.execute('vm delete %s %s --quiet', groupName,vmPrefix, function (result) {
				result.exitStatus.should.equal(0);
				
				suite.execute('group delete %s --quiet', groupName, function (result) {
					result.exitStatus.should.equal(0);
					callback();
				});
				
			});
			
			
		}
	});
});