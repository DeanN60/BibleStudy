import { VerseData } from './verse-data';

describe('VerseData', () => {
  let ephesians2_8: VerseData;

  beforeEach(() => {
    ephesians2_8 = new VerseData(
      'Ephesians 2:8 LSB',
      '8 For by grace you have been saved through faith, and this not of yourselves, it is the gift of God;',
      'Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3918). 316 Publishing, Inc.. Kindle Edition.'
    );
  });

  it('should create an instance', () => {
    expect(ephesians2_8).toBeTruthy();
  });
});
