//import aws sdk
const AWS = require('aws-sdk');

//configure region
AWS.config.update({region:"us-east-2"}); //updates arguments region, maxRetries, logger

//EC2 instance class
const ec2 = new AWS.EC2();

describeEC2();

//describe EC2 instance details
function describeEC2(){
    return new Promise((resolve,reject)=>{
        /*var params = {
            DryRun: true || false,
            Filters: [
              {
                Name: 'STRING_VALUE',
                Values: [
                  'STRING_VALUE',
                  
                ]
              },              
            ],
            InstanceIds: [
              'STRING_VALUE',             
            ],
            MaxResults: 0,
            NextToken: 'STRING_VALUE'
          };*/
          ec2.describeInstances({}, function(err, data) {
            if (err){
                console.log(err, err.stack); // an error occurred
                //reject(err);
            }
            else{
                console.log(data);           // successful response
                //resolve()
            }
          });
    });
};
