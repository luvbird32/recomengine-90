import { Card } from "@/components/ui/card";

export function OpenApiDocs() {
  const openApiSpec = {
    openapi: "3.0.0",
    info: {
      title: "Recommendation Engine API",
      version: "1.0.0",
      description: "API for generating and managing personalized recommendations"
    },
    paths: {
      "/recommendations": {
        get: {
          summary: "Get recommendations",
          description: "Retrieve personalized recommendations for a user",
          parameters: [
            {
              name: "userId",
              in: "query",
              required: true,
              schema: { type: "string" }
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 10 }
            }
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      recommendations: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: { type: "string" },
                            title: { type: "string" },
                            score: { type: "number" },
                            type: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/feedback": {
        post: {
          summary: "Submit recommendation feedback",
          description: "Submit user feedback for a recommendation",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    recommendationId: { type: "string" },
                    userId: { type: "string" },
                    rating: { type: "number" },
                    feedback: { type: "string" }
                  },
                  required: ["recommendationId", "userId", "rating"]
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Feedback submitted successfully"
            }
          }
        }
      },
      "/recommendations/mutuals": {
        get: {
          summary: "Get mutual-based recommendations",
          description: "Retrieve recommendations based on mutual interests and connections",
          parameters: [
            {
              name: "userId",
              in: "query",
              required: true,
              schema: { type: "string" }
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 5 }
            }
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      recommendations: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            userId: { type: "string" },
                            mutualScore: { type: "number" },
                            sharedInterests: {
                              type: "array",
                              items: { type: "string" }
                            },
                            sharedConnections: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/recommendations/content-based": {
        get: {
          summary: "Get content-based recommendations",
          description: "Retrieve recommendations based on content similarity and features",
          parameters: [
            {
              name: "contentId",
              in: "query",
              required: true,
              schema: { type: "string" }
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 5 }
            }
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      recommendations: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: { type: "string" },
                            similarity: { type: "number" },
                            features: {
                              type: "array",
                              items: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      securitySchemes: {
        apiKey: {
          type: "apiKey",
          in: "header",
          name: "X-API-Key"
        }
      }
    },
    security: [
      { apiKey: [] }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <p>
          Our API follows the OpenAPI 3.0 specification. You can use this documentation to understand the available endpoints,
          request/response formats, and authentication requirements.
        </p>
      </div>
      
      <Card className="p-4 bg-gray-50">
        <pre className="overflow-auto max-h-[600px] text-sm">
          {JSON.stringify(openApiSpec, null, 2)}
        </pre>
      </Card>

      <div className="prose max-w-none">
        <h3>Using the API</h3>
        <ul>
          <li>All API requests must include your API key in the X-API-Key header</li>
          <li>Responses are returned in JSON format</li>
          <li>Rate limits: 1000 requests per minute per API key</li>
        </ul>
      </div>
    </div>
  );
}
