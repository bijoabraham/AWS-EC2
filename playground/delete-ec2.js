//import aws sdk
const AWS = require('aws-sdk');

//configure region
AWS.config.update({region:"us-east-2"}); //updates arguments region, maxRetries, logger

//EC2 instance class
const ec2 = new AWS.EC2();

terminateEC2();

//describe EC2 instance details
function terminateEC2(){
    var params = {
        InstanceIds: [ /* required */
          'i-027e2c10abeae29ab',
          'i-0c5ba364c961672ca',
          'i-0e42bbd6412189350'
          /* more items */
        ]//,
        //DryRun: true || false
      };
      ec2.terminateInstances(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
};
