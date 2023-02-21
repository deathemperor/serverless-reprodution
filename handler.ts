export async function hello(event) {
  //
  return {
    statusCode: 200,
    message: "Go Serverless v3! Your function executed successfully!",
    input: event,
  };
}
