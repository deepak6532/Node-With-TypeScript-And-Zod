// swaggerOptions.ts
export const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "CMS API",
        version: "1.0.0",
        description: "A simple CRUD API for User  management",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./Router/userrouter.ts"],  // Path to your route files with Swagger comments
  };

  

// student swagger 
// swaggerOptions2.ts

// export const swaggerOptions2 = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "CMS API",
//         version: "1.0.0",
//         description: "A simple CRUD API for Student management",
//       },
//       servers: [
//         {
//           url: "http://localhost:3000",
//         },
//       ],
//     },
//     apis: ["./Router/studentrouter.ts"],  // Path to your route files with Swagger comments
//   };

  