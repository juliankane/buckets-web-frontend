import { CognitoUserPool } from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: 'us-east-1_E5QqPg4Pi',
    ClientId: '3ngi33a8p005nb4hsr84nmva0c',
};
  
export default new CognitoUserPool(poolData);