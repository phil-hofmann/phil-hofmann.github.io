// Obfuscation deters simple scrapers; it is not encryption.
const encodedRecipient = "bWFpbEBwaGlsaG9mbWFubi5kZQ==";

export function getContactUrl(): string {
  return `mailto:${atob(encodedRecipient)}`;
}
