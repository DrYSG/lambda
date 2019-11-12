const handler = async (event) => {
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from YSG Lambda!'),
      event: event.key9
  };
  return response;
};


exports.handler = handler