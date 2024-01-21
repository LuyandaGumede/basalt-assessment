# dictionary-api
Numbers API Request:

The Lambda function starts by making a request to the Numbers API (https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true) using the axios library.
The API responds with information about a historical event that occurred on the specified date (June 21 in this case).
Extracting the First Word:

The Lambda function extracts the first word from the "text" field of the Numbers API response. This is achieved by splitting the text into an array of words and taking the first element.
Urban Dictionary API Request:

The extracted first word is then used as a parameter to make a request to the Urban Dictionary API (https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=<firstWord>).
The Urban Dictionary API responds with definitions and other information related to the provided term.
Constructing the Response:

The Lambda function constructs a response message using the extracted first word and the definition obtained from the Urban Dictionary API.
The response message is formatted as: "The definition of <firstWord> is: <urbanDictionaryDefinition>".
Final Lambda Response:

The Lambda function returns a JSON response with the constructed definition message. If there are any errors during the process, it returns an error message.
In summary, the Lambda function combines information from the Numbers API and Urban Dictionary API to provide a response that includes the first word and its definition in a specific format. It acts as a bridge between these two APIs and formats the data for a more user-friendly response.


How to run the lambda locally

![](/Users/lgumede/IdeaProjects/side projects/basalt/sam-app/img/runconfiguration.png)

Output:
![](/Users/lgumede/IdeaProjects/side projects/basalt/sam-app/img/output.png)

