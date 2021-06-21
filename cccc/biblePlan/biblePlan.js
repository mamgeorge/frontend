/*
	require does not come with your standard JavaScript; you must use: <script src='anyFile.js'></script>
	const parser = require( 'C:/servers/nodejs/resources/PapaParse-5.0.2/papaparse.min.js' );
	import only works with ES6
	import parser from 'C:/servers/nodejs/resources/PapaParse-5.0.2/papaparse.min.js' ;
*/

const linkBGW = 'https://www.biblegateway.com/passage/?search=' ;
const linkBLU = 'https://www.blueletterbible.org/'; // + 'niv' + '/jhn/1/1/p1';
const version = 'NIV';
const linkURL = linkBGW;

const studyTips = {

	'strategies': [
		'try two readings: one in the morning, one in the evening',
		'in the morning read from the Poetry ( Job, Psalms, Proverbs, SOS, Ecclesiates )',
		'be faithful, but avoid accumulating reading; better to skip or restart',
		'review after each book for a day',
		'never worry about catching up but be serious about being faithful',
		'try different versions for harder texts',
		'take notes ; find connections',
		'do not overwhelm yourself, but do not be sloppy ( Matt 11:28-30 )',
		'avoid commentaries unless they complement' ,
	// ] , 'creativity': [
		'draw pictures for the psalms you read',
		'set passages to music',
		'make outlines, make pictures',
		'take notes in different colors',
		'confirm maps and charts not follow them',
		'always include family',
		'use synergies ( plans movies that match topic when possible )',
		'review chapters as a game',
	// ] , 'change': [
		'be willing to discuss what you’ve learned',
		'look for what God is doing',
		'pray for change, look for meaning',
		'pray for motivation, let God inspire & lead you',
	// ] , 'change': [
		'use a Bible reading plan',
		'read your Bible even when you don’t feel like it',
		'do NOT get down on yourself if you skip a devotional time',
		'read your Bible with others to learn more in community',
		'do not skip devotional Bible reading for Christian books',
		'use a commentary, but only if it helps your reading practice',
		'ask a godly mentor about his or her Bible reading methods',
		'increase your faith in the Bible by actually reading it, NOT by reading books ABOUT the Bible',
		'do not avoid the Old Testament... there is lots of treasures to be found there',
		'do not avoid Revelation... it is more encouraging than you think',
		'use a study Bible',
		'use a Bible reading app',
		'use your best energy for your Bible reading time',
		'do not mistake a desire to read the Bible for actually reading the Bible',
		'pray and ask God for help when you struggle with your discipline',
		'if you have struggled with Bible reading, just start today',
		'meditate on what you read after you read it',
		'try listening to your Bible; or reading without any chapter or verse references',
		'pick one book of the Bible and read it several times',
		'pray before, during, and after you read',
		'bible reading should make you grateful, loving, humble; NOT self righteous',
		'share what you learn about the Bible with others',
		'consider reading what Augustine, Calvin, Spurgeon, and other dead guys said about the Bible in the past to inspire you in the present',
		'be sure to practice good interpretation methods to avoid misunderstanding',
		'never stop reading'
	]
}

const readingPlan = [
	'Jan 01/01 , John 001, Gen 01-03',
	'Jan 01/02 , John 002, Gen 04-06',
	'Jan 01/03 , John 003, Gen 07-09',
	'Jan 01/04 , John 004, Gen 10-12',
	'Jan 01/05 , John 005, Gen 13-15',
	'Jan 01/06 , John 006, Gen 16-18',
	'Jan 01/07 , John 007, Gen 19-21',
	'Jan 01/08 , John 008, Gen 22-24',
	'Jan 01/09 , John 009, Gen 25-27',
	'Jan 01/10 , John 010, Gen 28-30',
	'Jan 01/11 , John 011, Gen 31-33',
	'Jan 01/12 , John 012, Gen 34-36',
	'Jan 01/13 , John 013, Gen 37-39',
	'Jan 01/14 , John 014, Gen 40-42',
	'Jan 01/15 , John 015, Gen 43-45',
	'Jan 01/16 , John 016, Gen 46-48',
	'Jan 01/17 , John 017, Gen 49-50',
	'Jan 01/18 , John 018, -',
	'Jan 01/19 , John 019, Exo 01-03',
	'Jan 01/20 , John 020, Exo 04-06',
	'Jan 01/21 , John 021, Exo 07-09',
	'Jan 01/22 , - , Exo 10-12',
	'Jan 01/23 , Psa 001 , Exo 13-15',
	'Jan 01/24 , Psa 002 , Exo 16-18',
	'Jan 01/25 , Psa 003 , Exo 19-21',
	'Jan 01/26 , Psa 004 , Exo 22-24',
	'Jan 01/27 , Psa 005 , Exo 25-27',
	'Jan 01/28 , Psa 006 , Exo 28-30',
	'Jan 01/29 , Psa 007 , Exo 31-33',
	'Jan 01/30 , Psa 008 , Exo 34-36',
	'Jan 01/31 , Psa 009 , Exo 37-39',
	'Feb 02/01 , Psa 010 , Exo 40',
	'Feb 02/02 , Psa 011 , -',
	'Feb 02/03 , Psa 012 , Lev 01-03',
	'Feb 02/04 , Psa 013 , Lev 04-06',
	'Feb 02/05 , Psa 014 , Lev 07-09',
	'Feb 02/06 , Psa 015 , Lev 10-12',
	'Feb 02/07 , Psa 016 , Lev 13-15',
	'Feb 02/08 , Psa 017 , Lev 16-18',
	'Feb 02/09 , Psa 018 , Lev 19-21',
	'Feb 02/10 , Psa 019 , Lev 22-24',
	'Feb 02/11 , Psa 020 , Lev 25-27',
	'Feb 02/12 , Psa 021 , -',
	'Feb 02/13 , Psa 022 , Num 01-03',
	'Feb 02/14 , Psa 023 , Num 04-06',
	'Feb 02/15 , Psa 024 , Num 07-09',
	'Feb 02/16 , Psa 025 , Num 10-12',
	'Feb 02/17 , Psa 026 , Num 13-15',
	'Feb 02/18 , Psa 027 , Num 16-18',
	'Feb 02/19 , Psa 028 , Num 19-21',
	'Feb 02/20 , Psa 029 , Num 22-24',
	'Feb 02/21 , Psa 030 , Num 25-27',
	'Feb 02/22 , Psa 031 , Num 28-30',
	'Feb 02/23 , Psa 032 , Num 31-33',
	'Feb 02/24 , Psa 033 , Num 34-36',
	'Feb 02/25 , Psa 034 , -',
	'Feb 02/26 , Psa 035 , Deu 01-03',
	'Feb 02/27 , Psa 036 , Deu 04-06',
	'Feb 02/28 , Psa 037 , Deu 07-09',
	'Mar 03/01 , Psa 038 , Deu 10-12',
	'Mar 03/02 , Psa 039 , Deu 13-15',
	'Mar 03/03 , Psa 040 , Deu 16-18',
	'Mar 03/04 , Psa 041 , Deu 19-21',
	'Mar 03/05 , Psa 042 , Deu 22-24',
	'Mar 03/06 , Psa 043 , Deu 25-27',
	'Mar 03/07 , Psa 044 , Deu 28-30',
	'Mar 03/08 , Psa 045 , Deu 31-33',
	'Mar 03/09 , Psa 046 , Deu 34',
	'Mar 03/10 , Psa 047 , -',
	'Mar 03/11 , Psa 048 , Josh 01-03',
	'Mar 03/12 , Psa 049 , Josh 04-06',
	'Mar 03/13 , Psa 050 , Josh 07-09',
	'Mar 03/14 , Psa 051 , Josh 10-12',
	'Mar 03/15 , Psa 052 , Josh 13-15',
	'Mar 03/16 , Psa 053 , Josh 16-18',
	'Mar 03/17 , Psa 054 , Josh 19-21',
	'Mar 03/18 , Psa 055 , Josh 22-24',
	'Mar 03/19 , Psa 056 , -',
	'Mar 03/20 , Psa 057 , Judg 01-03',
	'Mar 03/21 , Psa 058 , Judg 04-06',
	'Mar 03/22 , Psa 059 , Judg 07-09',
	'Mar 03/23 , Psa 060 , Judg 10-12',
	'Mar 03/24 , Psa 061 , Judg 13-15',
	'Mar 03/25 , Psa 062 , Judg 16-18',
	'Mar 03/26 , Psa 063 , Judg 19-21',
	'Mar 03/27 , Psa 064 , -',
	'Mar 03/28 , Psa 065 , Ruth 01-03',
	'Mar 03/29 , Psa 066 , Ruth 04',
	'Mar 03/30 , Psa 067 , -',
	'Mar 03/31 , Psa 068 , 1Sam 01-03',
	'Apr 04/01 , Psa 069 , 1Sam 04-06',
	'Apr 04/02 , Psa 070 , 1Sam 07-09',
	'Apr 04/03 , Psa 071 , 1Sam 10-12',
	'Apr 04/04 , Psa 072 , 1Sam 13-15',
	'Apr 04/05 , Psa 073 , 1Sam 16-18',
	'Apr 04/06 , Psa 074 , 1Sam 19-21',
	'Apr 04/07 , Psa 075 , 1Sam 22-24',
	'Apr 04/08 , Psa 076 , 1Sam 25-27',
	'Apr 04/09 , Psa 077 , 1Sam 28-30',
	'Apr 04/10 , Psa 078 , 1Sam 31',
	'Apr 04/11 , Psa 079 , -',
	'Apr 04/12 , Psa 080 , 2Sam 01-03',
	'Apr 04/13 , Psa 081 , 2Sam 04-06',
	'Apr 04/14 , Psa 082 , 2Sam 07-09',
	'Apr 04/15 , Psa 083 , 2Sam 10-12',
	'Apr 04/16 , Psa 084 , 2Sam 13-15',
	'Apr 04/17 , Psa 085 , 2Sam 16-18',
	'Apr 04/18 , Psa 086 , 2Sam 19-21',
	'Apr 04/19 , Psa 087 , 2Sam 22-24',
	'Apr 04/20 , Psa 088 , -',
	'Apr 04/21 , Psa 089 , 1Kin 01-03',
	'Apr 04/22 , Psa 090 , 1Kin 04-06',
	'Apr 04/23 , Psa 091 , 1Kin 07-09',
	'Apr 04/24 , Psa 092 , 1Kin 10-12',
	'Apr 04/25 , Psa 093 , 1Kin 13-15',
	'Apr 04/26 , Psa 094 , 1Kin 16-18',
	'Apr 04/27 , Psa 095 , 1Kin 19-21',
	'Apr 04/28 , Psa 096 , 1Kin 22',
	'Apr 04/29 , Psa 097 , -',
	'Apr 04/30 , Psa 098 , 2Kin 01-03',
	'May 05/01 , Psa 099 , 2Kin 04-06',
	'May 05/02 , Psa 100 , 2Kin 07-09',
	'May 05/03 , Psa 101 , 2Kin 10-12',
	'May 05/04 , Psa 102 , 2Kin 13-15',
	'May 05/05 , Psa 103 , 2Kin 16-18',
	'May 05/06 , Psa 104 , 2Kin 19-21',
	'May 05/07 , Psa 105 , 2Kin 22-24',
	'May 05/08 , Psa 106 , 2Kin 25',
	'May 05/09 , Psa 107 , -',
	'May 05/10 , Psa 108 , 1Chr 01-03',
	'May 05/11 , Psa 109 , 1Chr 04-06',
	'May 05/12 , Psa 110 , 1Chr 07-09',
	'May 05/13 , Psa 111 , 1Chr 10-12',
	'May 05/14 , Psa 112 , 1Chr 13-15',
	'May 05/15 , Psa 113 , 1Chr 16-18',
	'May 05/16 , Psa 114 , 1Chr 19-21',
	'May 05/17 , Psa 115 , 1Chr 22-24',
	'May 05/18 , Psa 116 , 1Chr 25-27',
	'May 05/19 , Psa 117 , 1Chr 28-29',
	'May 05/20 , Psa 118 , -',
	'May 05/21 , Psa 119:001-008 paragraph <span style = "font-size:10pt;" >#01 א aleph	</span>, 2Chr 01-03',
	'May 05/22 , Psa 119:009-016 paragraph <span style = "font-size:10pt;" >#02 ב beth		</span>, 2Chr 04-06',
	'May 05/23 , Psa 119:017-024 paragraph <span style = "font-size:10pt;" >#03 ג gimel	</span>, 2Chr 07-09',
	'May 05/24 , Psa 119:025-032 paragraph <span style = "font-size:10pt;" >#04 ד daleth	</span>, 2Chr 10-12',
	'May 05/25 , Psa 119:033-040 paragraph <span style = "font-size:10pt;" >#05 ה he		</span>, 2Chr 13-15',
	'May 05/26 , Psa 119:041-048 paragraph <span style = "font-size:10pt;" >#06 ו vav		</span>, 2Chr 16-18',
	'May 05/27 , Psa 119:049-056 paragraph <span style = "font-size:10pt;" >#07 ז zayin	</span>, 2Chr 19-21',
	'May 05/28 , Psa 119:057-064 paragraph <span style = "font-size:10pt;" >#08 ח heth	</span>, 2Chr 22-24',
	'May 05/29 , Psa 119:065-072 paragraph <span style = "font-size:10pt;" >#09 ט teth	</span>, 2Chr 25-27',
	'May 05/30 , Psa 119:073-080 paragraph <span style = "font-size:10pt;" >#10 י yodh		</span>, 2Chr 28-30',
	'May 05/31 , Psa 119:081-088 paragraph <span style = "font-size:10pt;" >#11 כ kaph		</span>, 2Chr 31-33',
	'Jun 06/01 , Psa 119:089-096 paragraph <span style = "font-size:10pt;" >#12 ל lamedh	</span>, 2Chr 34-36',
	'Jun 06/02 , Psa 119:097-104 paragraph <span style = "font-size:10pt;" >#13 מ mem		</span>, -',
	'Jun 06/03 , Psa 119:105-112 paragraph <span style = "font-size:10pt;" >#14 נ nun		</span>, Ezra 01-03',
	'Jun 06/04 , Psa 119:113-120 paragraph <span style = "font-size:10pt;" >#15 ס samekh	</span>, Ezra 04-06',
	'Jun 06/05 , Psa 119:121-128 paragraph <span style = "font-size:10pt;" >#16 ע ayin		</span>, Ezra 07-09',
	'Jun 06/06 , Psa 119:129-136 paragraph <span style = "font-size:10pt;" >#17 פ pe		</span>, Ezra 10',
	'Jun 06/07 , Psa 119:137-144 paragraph <span style = "font-size:10pt;" >#18 צ tsadhe	</span>, -',
	'Jun 06/08 , Psa 119:145-152 paragraph <span style = "font-size:10pt;" >#19 ק qoph	</span>, Neh 01-03',
	'Jun 06/09 , Psa 119:153-160 paragraph <span style = "font-size:10pt;" >#20 ר resh		</span>, Neh 04-06',
	'Jun 06/10 , Psa 119:161-168 paragraph <span style = "font-size:10pt;" >#21 ש shin	</span>, Neh 07-09',
	'Jun 06/11 , Psa 119:169-176 paragraph <span style = "font-size:10pt;" >#22 ת tav		</span>, Neh 10-12',
	'Jun 06/12 , Psa 120 , Neh 13',
	'Jun 06/13 , Psa 121 , -',
	'Jun 06/14 , Psa 122 , Esth 01-03',
	'Jun 06/15 , Psa 123 , Esth 04-06',
	'Jun 06/16 , Psa 124 , Esth 07-09',
	'Jun 06/17 , Psa 125 , Esth 10',
	'Jun 06/18 , Psa 126 , -',
	'Jun 06/19 , Psa 127 , Job 01-03',
	'Jun 06/20 , Psa 128 , Job 04-06',
	'Jun 06/21 , Psa 129 , Job 07-09',
	'Jun 06/22 , Psa 130 , Job 10-12',
	'Jun 06/23 , Psa 131 , Job 13-15',
	'Jun 06/24 , Psa 132 , Job 16-18',
	'Jun 06/25 , Psa 133 , Job 19-21',
	'Jun 06/26 , Psa 134 , Job 22-24',
	'Jun 06/27 , Psa 135 , Job 25-27',
	'Jun 06/28 , Psa 136 , Job 28-30',
	'Jun 06/29 , Psa 137 , Job 31-33',
	'Jun 06/30 , Psa 138 , Job 34-36',
	'Jul 07/01 , Psa 139 , Job 37-39',
	'Jul 07/02 , Psa 140 , Job 40-42',
	'Jul 07/03 , Psa 141 , -',
	'Jul 07/04 , Psa 142 , Ecc 01-03',
	'Jul 07/05 , Psa 143 , Ecc 04-06',
	'Jul 07/06 , Psa 144 , Ecc 07-09',
	'Jul 07/07 , Psa 145 , Ecc 10-12',
	'Jul 07/08 , Psa 146 , -',
	'Jul 07/09 , Psa 147 , SOS 01-03',
	'Jul 07/10 , Psa 148 , SOS 04-06',
	'Jul 07/11 , Psa 149 , SOS 07-08',
	'Jul 07/12 , Psa 150 , -',
	'Jul 07/13 , - , Isa 01-03',
	'Jul 07/14 , Matt 001, Isa 04-06',
	'Jul 07/15 , Matt 002, Isa 07-09',
	'Jul 07/16 , Matt 003, Isa 10-12',
	'Jul 07/17 , Matt 004, Isa 13-15',
	'Jul 07/18 , Matt 005, Isa 16-18',
	'Jul 07/19 , Matt 006, Isa 19-21',
	'Jul 07/20 , Matt 007, Isa 22-24',
	'Jul 07/21 , Matt 008, Isa 25-27',
	'Jul 07/22 , Matt 009, Isa 28-30',
	'Jul 07/23 , Matt 010, Isa 31-33',
	'Jul 07/24 , Matt 011, Isa 34-36',
	'Jul 07/25 , Matt 012, Isa 37-39',
	'Jul 07/26 , Matt 013, Isa 40-42',
	'Jul 07/27 , Matt 014, Isa 43-45',
	'Jul 07/28 , Matt 015, Isa 46-48',
	'Jul 07/29 , Matt 016, Isa 49-51',
	'Jul 07/30 , Matt 017, Isa 52-54',
	'Jul 07/31 , Matt 018, Isa 55-57',
	'Aug 08/01 , Matt 019, Isa 58-60',
	'Aug 08/02 , Matt 020, Isa 61-63',
	'Aug 08/03 , Matt 021, Isa 64-66',
	'Aug 08/04 , Matt 022, -',
	'Aug 08/05 , Matt 023, Jer 01-03',
	'Aug 08/06 , Matt 024, Jer 04-06',
	'Aug 08/07 , Matt 025, Jer 07-09',
	'Aug 08/08 , Matt 026, Jer 10-12',
	'Aug 08/09 , Matt 027, Jer 13-15',
	'Aug 08/10 , Matt 028, Jer 16-18',
	'Aug 08/11 , - , Jer 19-21',
	'Aug 08/12 , Pro 001 , Jer 22-24',
	'Aug 08/13 , Pro 002 , Jer 25-27',
	'Aug 08/14 , Pro 003 , Jer 28-30',
	'Aug 08/15 , Pro 004 , Jer 31-33',
	'Aug 08/16 , Pro 005 , Jer 34-36',
	'Aug 08/17 , Pro 006 , Jer 37-39',
	'Aug 08/18 , Pro 007 , Jer 40-42',
	'Aug 08/19 , Pro 008 , Jer 43-45',
	'Aug 08/20 , Pro 009 , Jer 46-48',
	'Aug 08/21 , Pro 010 , Jer 49-50',
	'Aug 08/22 , Pro 011 , Jer 51-52',
	'Aug 08/23 , Pro 012 , -',
	'Aug 08/24 , Pro 013 , Lam 01-03',
	'Aug 08/25 , Pro 014 , Lam 04-05',
	'Aug 08/26 , Pro 015 , -',
	'Aug 08/27 , Pro 016 , Eze 01-03',
	'Aug 08/28 , Pro 017 , Eze 04-06',
	'Aug 08/29 , Pro 018 , Eze 07-09',
	'Aug 08/30 , Pro 019 , Eze 10-12',
	'Aug 08/31 , Pro 020 , Eze 13-15',
	'Sep 09/01 , Pro 021 , Eze 16-18',
	'Sep 09/02 , Pro 022 , Eze 19-21',
	'Sep 09/03 , Pro 023 , Eze 22-24',
	'Sep 09/04 , Pro 024 , Eze 25-27',
	'Sep 09/05 , Pro 025 , Eze 28-30',
	'Sep 09/06 , Pro 026 , Eze 31-33',
	'Sep 09/07 , Pro 027 , Eze 34-36',
	'Sep 09/08 , Pro 028 , Eze 37-39',
	'Sep 09/09 , Pro 029 , Eze 40-42',
	'Sep 09/10 , Pro 030 , Eze 43-45',
	'Sep 09/11 , Pro 031 , Eze 46-48',
	'Sep 09/12 , - , -',
	'Sep 09/13 , Mark 001, Dan 01-03',
	'Sep 09/14 , Mark 002, Dan 04-06',
	'Sep 09/15 , Mark 003, Dan 07-09',
	'Sep 09/16 , Mark 004, Dan 10-12',
	'Sep 09/17 , Mark 005, -',
	'Sep 09/18 , Mark 006, Hos 01-03',
	'Sep 09/19 , Mark 007, Hos 04-06',
	'Sep 09/20 , Mark 008, Hos 07-09',
	'Sep 09/21 , Mark 009, Hos 10-12',
	'Sep 09/22 , Mark 010, Hos 13-14',
	'Sep 09/23 , Mark 011, Joel 01-03',
	'Sep 09/24 , Mark 012, Amos 01-03',
	'Sep 09/25 , Mark 013, Amos 04-06',
	'Sep 09/26 , Mark 014, Amos 07-09',
	'Sep 09/27 , Mark 015, Obad 01',
	'Sep 09/28 , Mark 016, -',
	'Sep 09/29 , - , Jon 01-04',
	'Sep 09/30 , Pro 001 , Mic 01-03',
	'Oct 10/01 , Pro 002 , Mic 04-06',
	'Oct 10/02 , Pro 003 , Mic 07',
	'Oct 10/03 , Pro 004 , Nah 01-03',
	'Oct 10/04 , Pro 005 , Hab 01-03',
	'Oct 10/05 , Pro 006 , -',
	'Oct 10/06 , Pro 007 , Zeph 01-03',
	'Oct 10/07 , Pro 008 , Hag 01-02',
	'Oct 10/08 , Pro 009 , Zach 01-03',
	'Oct 10/09 , Pro 010 , Zach 04-06',
	'Oct 10/10 , Pro 011 , Zach 07-09',
	'Oct 10/11 , Pro 012 , Zach 10-12',
	'Oct 10/12 , Pro 013 , Zach 13-14',
	'Oct 10/13 , Pro 014 , Mal 01-04',
	'Oct 10/14 , Pro 015 , -',
	'Oct 10/15 , Pro 016 , Acts 01-03',
	'Oct 10/16 , Pro 017 , Acts 04-06',
	'Oct 10/17 , Pro 018 , Acts 07-09',
	'Oct 10/18 , Pro 019 , Acts 10-12',
	'Oct 10/19 , Pro 020 , Acts 13-15',
	'Oct 10/20 , Pro 021 , Acts 16-18',
	'Oct 10/21 , Pro 022 , Acts 19-21',
	'Oct 10/22 , Pro 023 , Acts 22-24',
	'Oct 10/23 , Pro 024 , Acts 25-27',
	'Oct 10/24 , Pro 025 , Acts 28',
	'Oct 10/25 , Pro 026 , -',
	'Oct 10/26 , Pro 027 , Rom 01-03',
	'Oct 10/27 , Pro 028 , Rom 04-06',
	'Oct 10/28 , Pro 029 , Rom 07-09',
	'Oct 10/29 , Pro 030 , Rom 10-12',
	'Oct 10/30 , Pro 031 , Rom 13-15',
	'Oct 10/31 , - , Rom 16',
	'Nov 11/01 , Luke 001, -',
	'Nov 11/02 , Luke 002, 1Cor 01-03',
	'Nov 11/03 , Luke 003, 1Cor 04-06',
	'Nov 11/04 , Luke 004, 1Cor 07-09',
	'Nov 11/05 , Luke 005, 1Cor 10-12',
	'Nov 11/06 , Luke 006, 1Cor 13-15',
	'Nov 11/07 , Luke 007, 1Cor 16',
	'Nov 11/08 , Luke 008, -',
	'Nov 11/09 , Luke 009, 2Cor 01-03',
	'Nov 11/10 , Luke 010, 2Cor 04-06',
	'Nov 11/11 , Luke 011, 2Cor 07-09',
	'Nov 11/12 , Luke 012, 2Cor 10-12',
	'Nov 11/13 , Luke 013, 2Cor 13',
	'Nov 11/14 , Luke 014, -',
	'Nov 11/15 , Luke 015, Gal 01-03',
	'Nov 11/16 , Luke 016, Gal 04-06',
	'Nov 11/17 , Luke 017, Eph 01-03',
	'Nov 11/18 , Luke 018, Eph 04-06',
	'Nov 11/19 , Luke 019, Phil 01-04',
	'Nov 11/20 , Luke 020, Col 01-04',
	'Nov 11/21 , Luke 021, 1Thes 01-03',
	'Nov 11/22 , Luke 022, 1Thes 04-05',
	'Nov 11/23 , Luke 023, 2Thes 01-03',
	'Nov 11/24 , Luke 024, 1Tim 01-03',
	'Nov 11/25 , - , 1Tim 04-06',
	'Nov 11/26 , Pro 001 , 2Tim 01-04',
	'Nov 11/27 , Pro 002 , Titu 01-03',
	'Nov 11/28 , Pro 003 , Phle 01',
	'Nov 11/29 , Pro 004 , -',
	'Nov 11/30 , Pro 005 , Heb 01-03',
	'Dec 12/01 , Pro 006 , Heb 04-06',
	'Dec 12/02 , Pro 007 , Heb 07-09',
	'Dec 12/03 , Pro 008 , Heb 10-12',
	'Dec 12/04 , Pro 009 , Heb 13',
	'Dec 12/05 , Pro 010 , -',
	'Dec 12/06 , Pro 011 , Jam 01-03',
	'Dec 12/07 , Pro 012 , Jam 04-05',
	'Dec 12/08 , Pro 013 , 1Pet 01-03',
	'Dec 12/09 , Pro 014 , 1Pet 04-05',
	'Dec 12/10 , Pro 015 , 2Pet 01-03',
	'Dec 12/11 , Pro 016 , 1John 01-03',
	'Dec 12/12 , Pro 017 , 1John 04-05',
	'Dec 12/13 , Pro 018 , 2John 01',
	'Dec 12/14 , Pro 019 , 3John 01',
	'Dec 12/15 , Pro 020 , Jude 01',
	'Dec 12/16 , Pro 021 , -',
	'Dec 12/17 , Pro 022 , Rev 01-03',
	'Dec 12/18 , Pro 023 , Rev 04-06',
	'Dec 12/19 , Pro 024 , Rev 07-09',
	'Dec 12/20 , Pro 025 , Rev 10-12',
	'Dec 12/21 , Pro 026 , Rev 13-15',
	'Dec 12/22 , Pro 027 , Rev 16-18',
	'Dec 12/23 , Pro 028 , Rev 19-21',
	'Dec 12/24 , Pro 029 , Rev 22',
	'Dec 12/25 , Pro 030 , -',
	'Dec 12/26 , Pro 031 , -',
	'Dec 12/27 , - , -',
	'Dec 12/28 , - , -',
	'Dec 12/29 , - , -',
	'Dec 12/30 , - , -',
	'Dec 12/31 , - , -'
] ;

function tipster( ) {
	//
	const tipVal = Math.floor( Math.random( ) * studyTips.strategies.length );
	const anyTips = ' ' + studyTips.strategies[ tipVal ] + ' ' ;
	document.getElementById( 'studyTips' ).innerHTML = anyTips;
}

function getUtilDayFromDate( dateVal ) {
	//
	// https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
	if ( dateVal == null || dateVal == '' ) { dateVal = new Date( ); }
	const dateBeg = new Date( dateVal.getFullYear( ), 0, 0 );
	const dateTmp = dateBeg.getTimezoneOffset( ) - dateVal.getTimezoneOffset( ) ;
	const dateDif = ( dateVal - dateBeg ) + dateTmp * 60 * 1000 ;
	const dayScnd = 1000 * 60 * 60 * 24;
	const daysVal = Math.floor( dateDif / dayScnd );
	return daysVal;
}

function getUtilLeapYear( fullYear ) {
	//
	return ( fullYear % 100 === 0 ) ? ( fullYear % 400 === 0 ) : ( fullYear % 4 === 0 );
}

function getUtilPad( number , width , symbol ) {
	//
	symbol = symbol || '0';
	width = width || 3;
	number = number + '';
	return number.length >= width ? number: new Array( width - number.length + 1 ).join( symbol ) + number;
}

function parseMainSummary( ) {
	//
	let txtHtml = '<table class="table table-fixed"><tbody>';
	let txtItem = '', linkMrn = '', linkMrnHref = '', linkEve = '', colors = ''; dctr = 0;
	let daysVal = getUtilDayFromDate( new Date( ) ) ;
	const yearVal = new Date( ).getFullYear( ) ;
	const isLeapYear = getUtilLeapYear( yearVal );
	//
	for( var ictr = 0; ictr < readingPlan.length; ictr++ )
	{
		++dctr;
		txtItem = readingPlan[ ictr ].split( ',' );
		linkMrnHref = txtItem[1];
		if ( txtItem[1].startsWith( ' Psa 119' ) ) { linkMrnHref = txtItem[1].substring( 0 , 17 ); }
		linkMrn = linkURL + linkMrnHref + '&version=' + version;
		linkEve = linkURL + txtItem[2] + '&version=' + version;
		//
		if ( ictr >= 000 && ictr < 081 ) { colors = 'info'; }
		if ( ictr >= 081 && ictr < 173 ) { colors = 'success'; }
		if ( ictr >= 173 && ictr < 270 ) { colors = 'warning'; }
		if ( ictr >= 270 && ictr < 356 ) { colors = 'danger'; }
		if ( ictr >= 356 && ictr < 366 ) { colors = 'info'; }
		if ( ictr == (daysVal-1) ) { colors = 'active'; }
		//
		txtHtml += '<tr class = "' + colors + '" id = ' + ictr + ' tabindex = ' + ictr + ' >'
			+ '<th class = "col-xs-2" >' + txtItem[0] + '</th>'
			+ '<td class = "col-xs-2" >' + getUtilPad( dctr ) + '</td>'
			+ '<td class = "col-xs-4" >'
				+ '<a class = "blink" href = "' + linkMrn + '" target = "_blank" >'
				+ txtItem[1] + '</a></td>'
			+ '<td class = "col-xs-2" >'
				+ '<a class = "blink" href = "' + linkEve + '" target = "_blank" >'
				+ txtItem[2] + '</a></td>'
			+ '</tr>';
		//
		if( isLeapYear && ictr==58 ) {
			//
			++dctr;
			txtHtml += '<tr class = "' + colors + '" id = ' + ictr + ' tabindex = ' + ictr + ' >'
				+ '<th class = "col-xs-2" >Feb 02/29</th>'
				+ '<td class = "col-xs-2" >' + getUtilPad( dctr ) + '</td>'
				+ '<td class = "col-xs-4" ><a class = "blink" href = "" target = "_blank" >-</a></td>'
				+ '<td class = "col-xs-2" ><a class = "blink" href = "" target = "_blank" >-</a></td>'
				+ '</tr>';
		}
	}
	txtHtml += 	'</tbody></table>';
	//
	document.getElementById( 'planDates' ).innerHTML = txtHtml;
	document.getElementById( daysVal-1 ).focus( );
	tipster( );
}

function parseExpand( ) {
	//
	let txtHtml = '<table class = "table table-fixed table-bordered table-condensed" >'
		+ '<thead><tr>'
		+ '<th class = "eline" ></th>'
		+ '<th class = "col-xs-1" >date</th>'
		+ '<th class = "col-xs-1" >day</th>'
		+ '<th class = "col-xs-1" >morning</th>'
		+ '<th class = "col-xs-1" >evening</th>'

		+ '<th class = "eline" ></th>'
		+ '<th class = "col-xs-1" >date</th>'
		+ '<th class = "col-xs-1" >day</th>'
		+ '<th class = "col-xs-1" >morning</th>'
		+ '<th class = "col-xs-1" >evening</th>'

		+ '<th class = "eline" ></th>'
		+ '<th class = "col-xs-1" >date</th>'
		+ '<th class = "col-xs-1" >day</th>'
		+ '<th class = "col-xs-1" >morning</th>'
		+ '<th class = "col-xs-1" >evening</th>'
		+ '</tr></thead><tbody>';
	//
	const yearVal = new Date( ).getFullYear( ) ;
	let isLeapYear = getUtilLeapYear( yearVal );
	for( var ictr = 1; ictr < readingPlan.length; ) {
		//
		txtHtml += '<tr class = "" id = "' + ictr + '" tabindex = "' + ictr + '" >';
		txtHtml += parseExpandLine( isLeapYear, ictr ); ictr++;
		txtHtml += parseExpandLine( isLeapYear, ictr ); ictr++;
		txtHtml += parseExpandLine( isLeapYear, ictr ); ictr++;
		if( isLeapYear && ictr==61 ) { ictr=60; isLeapYear=false; }
		txtHtml += '</tr>';
	}
	txtHtml += '</tbody></table>';
	//
	document.getElementById( 'planExpand' ).innerHTML = txtHtml;
}

function parseExpandLine( isLeapYear, ictr ) {
	//
	let txtLine = '', txtItem = '', linkMrn = '', linkMrnHref = '', linkEve = '', colors = '';
	let dctr = ictr;
	//
	txtItem = readingPlan[ ictr-1 ].split( ',' );
	linkMrnHref = txtItem[1];
	if ( txtItem[1].startsWith( ' Psa 119' ) ) { linkMrnHref = txtItem[1].substring( 0 , 17 ); }
	linkMrn = linkURL + linkMrnHref + '&version=' + version;
	linkEve = linkURL + txtItem[2] + '&version=' + version;
	//
	if ( ictr >= 000 && ictr < 081 ) { colors = 'info'; }
	if ( ictr >= 081 && ictr < 173 ) { colors = 'success'; }
	if ( ictr >= 173 && ictr < 270 ) { colors = 'warning'; }
	if ( ictr >= 270 && ictr < 356 ) { colors = 'danger'; }
	if ( ictr >= 356 && ictr < 366 ) { colors = 'info'; }
	//
	if( isLeapYear && ictr<61 ) { dctr = ictr; } else { dctr = ictr + 1; }
	if( isLeapYear && ictr==60 ) {
		//
		txtLine += '<th class = "eline" ></th>'
		+ '<th class = "col-xs-1 ' + colors + '" >Feb 09/29</th>'
		+ '<td class = "col-xs-1 ' + colors + '" >' + getUtilPad( dctr ) + '</td>'
		+ '<td class = "col-xs-1 ' + colors + '" ><a class = "blink" href = "" target = "_blank" >-</a></td>'
		+ '<td class = "col-xs-1 ' + colors + '" ><a class = "blink" href = "" target = "_blank" >-</a></td>';
	} else {
		//
		txtLine += '<th class = "eline" ></th>'
		+ '<th class = "col-xs-1 ' + colors + '" >' + txtItem[0] + '</th>'
		+ '<td class = "col-xs-1 ' + colors + '" >' + getUtilPad( dctr ) + '</td>'
		+ '<td class = "col-xs-1 ' + colors + '" >'
			+ '<a class = "blink" href = "' + linkMrn + '" target = "_blank" >'
			+ linkMrnHref + '</a></td>'
		+ '<td class = "col-xs-1 ' + colors + '" >'
			+ '<a class = "blink" href = "' + linkEve + '" target = "_blank" >'
			+ txtItem[2] + '</a></td>';
	}
	return txtLine;
}
// ----