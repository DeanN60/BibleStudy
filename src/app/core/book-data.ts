export class BookData {
  reference: string;
  text: string;
  source?: string;

  constructor(reference: string, text: string, source?: string) {
    this.reference = reference;
    this.text = text;
    if (source) {
      this.source = source;
    }
  }
}

export const fallbackBookData: BookData = {
  reference: "unknown",
  text: "no text available",
  source: "unknown"
}
