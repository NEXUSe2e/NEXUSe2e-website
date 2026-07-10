export interface Version {
  version: string
  md5: string
  sha256: string
  download?: string
  changes: string[]
  knownIssues?: string[]
}
