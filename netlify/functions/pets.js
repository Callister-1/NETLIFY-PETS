const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "callister".toUpperCase()
  }
}

module.exports = { handler }
