import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class MyStack extends cdk.Stack {
  public readonly apiEndpoint: string;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.PROVIDED_AL2,
      code: lambda.Code.fromAsset('./lambda/function.zip'),
      handler: 'bootstrap',
    });
    
    // Define the API Gateway with a GET method
    const api = new apigateway.RestApi(this, 'ApiGateway', {
      restApiName: 'HelloWorldService',
      deployOptions: {
        stageName: 'prod',
      },
    });

    const helloIntegration = new apigateway.LambdaIntegration(helloLambda);
    api.root.addMethod('GET', helloIntegration); // Add GET method

    // Output the API Gateway endpoint URL
    this.apiEndpoint = api.url;
  }
}

const app = new cdk.App();
const stack = new MyStack(app, 'MyStack');

// Output the API Gateway endpoint URL after deployment
new cdk.CfnOutput(stack, 'ApiEndpoint', {
  value: stack.apiEndpoint,
});
