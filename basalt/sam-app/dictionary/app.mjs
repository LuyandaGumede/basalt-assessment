/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

import axios from 'axios';

export const lambdaHandler = async (event, context) => {
    try {
        const numbersApiResponse = await axios.get('https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true', {
            headers: {
                'X-RapidAPI-Key': 'ebdc007d1amsh94503e66bc57d12p1911aejsn8ce1a3d30a36',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        });

        // Extract the first word from the "text" field
        const firstWord = numbersApiResponse.data.text.split(' ')[0];

        // Use the first word as a parameter for the Urban Dictionary API
        const urbanDictionaryResponse = await axios.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${encodeURIComponent(firstWord)}`, {
            headers: {
                'X-RapidAPI-Key': 'ebdc007d1amsh94503e66bc57d12p1911aejsn8ce1a3d30a36',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        });

        // Construct the desired response
        const definitionResponse = `The definition of "${firstWord}" is: ${urbanDictionaryResponse.data.list[0].definition}`;

        const lambdaResponse = {
            statusCode: 200,
            body: JSON.stringify({
                definition: definitionResponse,
            }),
        };

        return lambdaResponse.body;
    } catch (error) {
        console.error('Error:', error);

        const errorResponse = {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal Server Error',
            }),
        };

        return errorResponse.body;
    }
};




