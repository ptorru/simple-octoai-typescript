import { OctoAIClient } from "@octoai/sdk";

async function main() {
  const octoai = new OctoAIClient({
    apiKey: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNkMjMzOTQ5In0.eyJzdWIiOiJkNWMyYzBiYi0zOWVhLTQ0NDMtOGUzZS1mZDlkYTNhZTI3ZmIiLCJ0eXBlIjoidXNlckFjY2Vzc1Rva2VuIiwidGVuYW50SWQiOiIyZTc3YWU4Yy1iMWVlLTRjNWYtYmI1OC1kYjM5NGJmYWQzY2UiLCJ1c2VySWQiOiIwMGI2NmJkOS00N2NmLTQxZWEtOTE5NC01ZTFhZDE4YmJjNjMiLCJhcHBsaWNhdGlvbklkIjoiYTkyNmZlYmQtMjFlYS00ODdiLTg1ZjUtMzQ5NDA5N2VjODMzIiwicm9sZXMiOlsiRkVUQ0gtUk9MRVMtQlktQVBJIl0sInBlcm1pc3Npb25zIjpbIkZFVENILVBFUk1JU1NJT05TLUJZLUFQSSJdLCJhdWQiOiIzZDIzMzk0OS1hMmZiLTRhYjAtYjdlYy00NmY2MjU1YzUxMGUiLCJpc3MiOiJodHRwczovL2lkZW50aXR5Lm9jdG8uYWkiLCJpYXQiOjE3MTk2OTY1ODh9.c8kzwU-CSLMfBqelNcyKlZLw_6RvVmiTLU2LjJ-DCWvCaadVlUBYU4VULTTTEqHuiCak4eBDICPbnv1jQqYTi-qDhoJQ9C5n64u1o7n46g8bb2swT_RgOLFjba3yBrh9yTB3NY7Y7DuI0TC6Y8p2ZoNvmKg61cvSXA_WOQ49xBn3jgaNtQ3TSlLuLmiMzmNF-b-Uo1Ig06IdLlEWeHZkb1Vrp3it9024J8eMWUUD5thCYFcajwSqk3ddsHA6OY0RTg1SSP8G2eAXAsI87cj3Ya86mJC44K7BBQPU4H2ATDOQ968WWRblom69o4Skp9RhF7yXMEP9zbhfeOdPX2tVMw",
  });

  try {
    const result = await octoai.textGen.createChatCompletion({
      model: "meta-llama-3-8b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant. Keep your responses limited to one short paragraph if possible.",
        },
        {
          role: "user",
          content: "Write a blog about Seattle",
        },
      ],
    });

    console.log(result.choices[0].message.content);
  } catch (error) {
    console.error('Error creating chat completion:', error);
  }
}

main();
