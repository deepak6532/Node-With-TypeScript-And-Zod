import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./Router/studentrouter.ts']; // Path to your routes file

swaggerAutogen()(outputFile, endpointsFiles).then(() => {
  console.log('Swagger documentation generated!');
});
