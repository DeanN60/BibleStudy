export class BookData {
  reference: string;
  verse: string;
  source?: string;

  constructor(reference: string, verse: string, source?: string) {
    this.reference = reference;
    this.verse = verse;
    if (source) {
      this.source = source;
    }
  }
}

export const fallbackBookData: BookData = {
  reference: "unknown",
  verse: "no verse available",
  source: "unknown"
}
