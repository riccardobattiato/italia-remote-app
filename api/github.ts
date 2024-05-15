import { Company, GetRepoContentsPathResponse } from "@/types/api";
import { request } from "@octokit/request";

async function getRepoContents(): Promise<GetRepoContentsPathResponse> {
  return await request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "italiaremote",
    repo: "awesome-italia-remote",
    path: "/data",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

// If the content is a directory, the response will be an array of objects,
// one object for each item in the directory.
// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28
async function downloadJsons(data: GetRepoContentsPathResponse["data"]) {
  if (!Array.isArray(data)) throw new Error("Data should be a folder");
  else {
    const requests = data
      .filter((el) => el.download_url)
      .map((el) => fetch(el.download_url as string));

    const responses = await Promise.all(requests);

    return await Promise.all(responses.map((el) => el.json()));
  }
}

export async function getCompanies(): Promise<Company[]> {
  // 1. Fetch repo contents
  const repoContents = await getRepoContents();

  // 2. Download each JSON
  const jsons = downloadJsons(repoContents.data);

  return jsons;
}
