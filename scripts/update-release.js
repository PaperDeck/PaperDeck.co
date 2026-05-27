import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"
const outputPath = resolve("src/data/release.json")
export const apiUrl =
  "https://api.github.com/repos/PaperDeck/PaperDeck/releases/latest"

const response = await fetch(apiUrl)

if (!response.ok) {
  throw new Error(
    `Failed to fetch latest release: ${response.status} ${response.statusText}`,
  )
}

const release = await response.json()
const content = `${JSON.stringify(release, null, 2)}\n`

await writeFile(outputPath, content, "utf8")

console.log(`Updated ${outputPath} to release version ${release.tag_name}`)
