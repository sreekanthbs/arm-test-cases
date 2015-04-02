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
var testprefix = 'arm-cli-vm-create-tests';
var groupPrefix = 'xplatTestGCreate';
var createdGroups = [];
var createdVms = [];
var createdVnets = [];
var groupName, timeout,
	dnsPrefix,location="West US",
	vmPrefix = 'xplattestvm',
	vNetPrefix = 'xplattestvnet',
	nicName = 'xplatnic1',
	VMImage = 'ad072bd3082149369c449ba5832401ae__Windows-Server-Remote-Desktop-Session-Host-on-Windows-Server-2012-R2-20140514-1852',
	storageAccount ='xplatstorage2',
	storageCont= 'xplatstoragecont1',
	osdiskvhd= 'xpaltVhd1',
	subnetName ='xplattestsubnet1',
	publicipName= 'xplatpip1',
	publicipdns= 'xplatpipdns',
	username = 'azureuser',
	password ='Brillio@2015';
// var requiredEnvironment = [{
  // name: 'AZURE_VM_TEST_LOCATION',
  // defaultValue: 'West US'
// }];

describe('arm', function () {
  describe('azure', function () {
    var suite, retry = 5;
	testUtil.TIMEOUT_INTERVAL = 5000;
    before(function (done) {
      suite = new CLITest(testprefix);
	  // suite.setupTest(function() {
		  // dnsPrefix = groupPrefix.toLowerCase();
		  // groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  // vmPrefix = suite.generateId(vmPrefix, createdVms, suite.isMocked);
		  // vNetPrefix = suite.generateId(vNetPrefix, createdVnets, suite.isMocked);
		  // publicipdns = suite.get
		  // //location = process.env.AZURE_VM_TEST_LOCATION;
		  // console.log(groupName + ' ' + vmPrefix + ' ' + vNetPrefix);
		  // //console.log('before groupname ' + groupName)
		  // done();
	  // });
	  
	   suite.setupTest(function() {
		  //dnsPrefix = groupPrefix.toLowerCase();
		  //groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
		  vmPrefix = 'armvmtest151';
		  groupName = 'armresgrptest1';
		  //location = process.env.AZURE_VM_TEST_LOCATION;
		  //console.log('loc ' ,location);
		  //console.log('before each groupname ' + groupName)
		  timeout = suite.isMocked ? 0 : testUtil.TIMEOUT_INTERVAL;
		  done();
	  });
      //suite.setupSuite(done);
    });

    after(function (done) {
		// deleteUsedGroup(function() {
			// suite.teardownSuite(done);
		// });
		
		// single 
		suite.teardownSuite(done);
    });

    beforeEach(function (done) {
	 
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('vm', function () {
		
		it('Stop and start', function(done) {
        //createVM(function() {
		 
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
        var cmd = util.format('vm restart %s %s --json', groupName, vmPrefix).split(' ');
        testUtil.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
		
      // it('create', function (done) {
		// createGroup(function(){
			// console.log('vm create %s %s %s %s %s -u %s -p %s -q %s -o %s -r %s -c %s -d %s -f %s -g %s -j %s -k %s -i %s -n %s --json', 
						  // groupName, vmPrefix, nicName, '"West US"', '"Windows"', username, password, VMImage, storageAccount, 
						  // storageCont, 'None', osdiskvhd, vNetPrefix, '10.0.0.0/16', subnetName, '10.0.0.0/24',
						  // publicipName, vmPrefix);
			// suite.execute('vm create %s %s %s %s %s -u %s -p %s -q %s -o %s -r %s -c %s -d %s -f %s -g %s -j %s -k %s -i %s -n %s --json', 
						  // groupName, vmPrefix, nicName, 'West US', 'Windows', username, password, VMImage, storageAccount, 
						  // storageCont, 'None', osdiskvhd, vNetPrefix, '10.0.0.0/16', subnetName, '10.0.0.0/24',
						  // publicipName, vmPrefix, function (result) {
			  
			  // result.exitStatus.should.equal(0);
			  // done();
			// });
			
		// });
        
      // });
	  
	  // it('show', function (done) {
		  // suite.execute('network publicip show %s %s --json', groupName, 'armpublicip2', function (result) {
          // result.exitStatus.should.equal(0);
		  // //console.log('network publicip show %s %s --json', groupName, 'armpublicip2'); 
		  // //console.log(result.text);
		  
		  // var allResources = JSON.parse(result.text);
		  // allResources.name.should.equal('armpublicip2');
          
			// done();
			// });
		// });
		
		// it('list', function (done) {
		  // suite.execute('network publicip list %s --json', groupName, function (result) {
		  // //console.log('delete publicip passed');
          // result.exitStatus.should.equal(0);
		  // var allResources = JSON.parse(result.text);
          // allResources.some(function (res) {
            // return res.name === 'armpublicip2';
          // }).should.be.true;
		  // done();
		// });
	  // });
	  
	  
		// it('delete', function (done) {
		  // suite.execute('network publicip delete %s %s --quiet', groupName, 'armpublicip2', function (result) {
		  // //console.log('delete publicip passed');
          // result.exitStatus.should.equal(0);
		  // done();
		// });
	  // });
	  
    });
	
	function createGroup(callback) {
		//console.log('groupName ' + groupName);
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
		  //console.log('delete group pass');
          result.exitStatus.should.equal(0);
		  callback();
		});
    }
  });
});