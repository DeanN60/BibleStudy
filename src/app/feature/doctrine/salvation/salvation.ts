import {Component} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {VerseData} from '@core/verse-data';

@Component({
  selector: 'app-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './salvation.html',
  styleUrl: './salvation.scss',
})
export class Salvation {
  rom_3_23 = new VerseData(
    "Romans 3:23",
    "23 For all have sinned, and come short of the glory of God;",
    "King James Version"
  );
  rom_3_10_18 = new VerseData(
    "Romans 3:10-18",
    "10 As it is written, There is none righteous, no, not one:" +
    "11 There is none that understandeth, there is none that seeketh after God." +
    "12 They are all gone out of the way, they are together become unprofitable; there is none that doeth good, no, not one." +
    "13 Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips:" +
    "14 Whose mouth is full of cursing and bitterness:" +
    "15 Their feet are swift to shed blood:" +
    "16 Destruction and misery are in their ways:" +
    "17 And the way of peace have they not known:" +
    "18 There is no fear of God before their eyes.",
    "King James Version"
  );
  rom_6_23 = new VerseData(
    "Romans 6:23",
    "23 For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
    "King James Version"
  );
  rom_5_8 = new VerseData(
    "Romans 5:8",
    "8 But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    "King James Version"
  );
  rom_10_9 = new VerseData(
    "Romans 10:9",
    "9 That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
    "King James Version"
  );
  rom_10_13 = new VerseData(
    "Romans 10:13",
    "13 For whosoever shall call upon the name of the Lord shall be saved.",
    "King James Version"
  );
  rom_5_1 = new VerseData(
    "Romans 5:1",
    "1 Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:",
    "King James Version"
  );
  rom_8_1 = new VerseData(
    "Romans 8:1",
    "1 There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
    "King James Version"
  );
  rom_8_38_39 = new VerseData(
    "Romans 8:38,39",
    "38 For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come," +
    "39 Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
    "King James Version"
  )


  rom_5_15 = new VerseData(
    "Romans 5:15",
    "15 But not as the offence, so also is the free gift. For if through the offence of one many be dead, much more the grace of God, and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many.",
    "King James Version"
  );
  rom_11_6 = new VerseData(
    "Romans 11:6",
    "6 And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work.",
    "King James Version"
  );
  eph_2_8 = new VerseData(
    "Ephesians 2:8",
    "8 For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
    "King James Version"
  );
}
