package main

import (
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response events.APIGatewayProxyResponse

// Handler is your Lambda function handler
func Handler(request events.APIGatewayProxyRequest) (Response, error) {
	// Define the response message structure
	message := map[string]string{
		"message": "Hello World",
	}

	// Convert the message to JSON
	messageBytes, err := json.Marshal(message)
	if err != nil {
		return Response{StatusCode: 500}, err
	}

	// Return the response in the format expected by API Gateway
	return Response{
		StatusCode: 200,
		Body:       string(messageBytes),
		Headers:    map[string]string{"Content-Type": "application/json"},
	}, nil
}

func main() {
	lambda.Start(Handler)
}
