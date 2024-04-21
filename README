## Hello World!

**Hello World app in Go, deployed to AWS Lambda, responding to GET through an AWS API Gateway, implemented in Typescript over AWS CDK**

### Components

`/lambda/main.go`

Simple Hello World app in Golang, with JSON and HTTP Status Codes handling. It also includes a Lambda handler.

`stack.ts`

Implementation of App on Lambda, implementation of API Gateway.

`cdk.json`

Default config for CDK, modified to point to `stack.ts` for init.

`.github/workflows/actions.yml`

Workflow for Github Actions. It has two jobs: **CDK Diff**, which runs automatically on every commit to main, and **CDK Deploy**, which only runs on manual trigger from workflows.

Steps:

* Set up **node.js** v20
* Set up **Golang** v1.22.2
* Build Go application, rename it as `bootstrap`, and zip it into `function.zip`. This step is mandatory for this configuration.
* Install `aws-cdk`,  `aws-cdk-lib`, and  `ts-node` node packages, mandatory for CDK usage.
* Run `cdk diff`.
* Run `cdk deploy`, and save its outputs (API Gateway endpoint) into a file.
* Test endpoint's response running `curl -f` against the output on the previous step; if response is an error this job will finish as failed; if not, `Hello World!` will hopefully be printed in logs :)