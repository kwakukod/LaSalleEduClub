// ==========================================
// NAVIGATION & LAYOUT DATA (AUTOMATED CONFIG)
// ==========================================

const savedAwardYear = '2026';

const systemYearConfig = {
  scholarshipSeasonYear: '2026',
  recipientsClassYear: '2026',
  recipientsTitleYear: '2026',
  honoreesSeasonYear: '2026',
  judgesSeasonYear: '2026',
  escortsSeasonYear: '2026',
  announcementYear: '2027',
  applyTitleYear: '2027'
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'History', href: '#history' },
  { label: 'Scholarships', href: '#scholarships' },
  { label: 'Recipients', href: '#recipients' },
  { label: 'Honorees', href: '#honorees' },
  { label: 'Members', href: '#members' },
  { label: 'Apply', href: '#apply' }
];

const scholarships = [
  { name: 'Reverend J.M. Bradley Scholarship<br><small style="font-weight:400;color:#999">(Must be African American)</small>', amount: '$1,300' },
  { name: 'Reverend Glenn Raybon Civil Rights Scholarship<br><small style="font-weight:400;color:#999">(Sponsored by the LaSalle Educational Club)</small>', amount: '$1,000' },
  { name: 'Eric L. Jones "I Can" Memorial Scholarship', amount: '$1,000' },
  { name: 'Lexie M. Sanders Community Good Works Scholarship', amount: '$1,000' },
  { name: 'Edward "Pete" Ivey Education Scholarship', amount: '$1,000' },
  { name: 'LaSalle Educational Club Inc. Scholarship', amount: '$1,000' },
  { name: 'Nathan A. Dolson Jr. Leadership Scholarship', amount: '$800' },
  { name: 'LaSalle Educational Club Inc. Good Faith Scholarship', amount: '$600' },
  { name: 'Shalise Monet Carter Humanitarian Scholarship', amount: '$500' },
  { name: 'Theodore Williamson Education Scholarship', amount: '$500' },
  { name: 'Men Standing Strong Together Scholarship', amount: '$500' },
  { name: 'Niagara Falls NY Community Lion Club Scholarship', amount: '$500' },
  { name: 'Frontier Chapter No. 20 Eastern Star Education Scholarship', amount: '$500' },
  { name: 'Sadie Mae Martin/Willier Lee Martin Blacktop Scholarship', amount: '$500' },
  { name: 'Lillie P. Stephens Female Athletic Award', amount: '$500' },
  { name: 'Niagara Ministerial Council Award', amount: '$500' },
  { name: 'Kelab Sanders Jr. Brotherhood Scholarship', amount: '$400' },
  { name: 'Councilman Robert A. Anderson Jr. Memorial Scholarship', amount: '$300' },
  { name: 'Shalise Monet Carter Memorial Award', amount: '$200' },
  { name: 'LaSalle Educational Club Inc. Student Award', amount: '$200' },
  { name: 'Niagara Falls Future Advocate Award', amount: '$200' }
];

const recipients = [
  { name: 'Amayah Cowart', award: 'Reverend J.M. Bradley Scholarship', amount: '$1,300' },
  { name: 'Paul Roberston', award: 'Reverend Glenn Raybon Civil Rights Scholarship', amount: '$1,000' },
  { name: 'Kaleah Booker', award: 'Eric L. Jones "I Can" Memorial Scholarship', amount: '$1,000' },
  { name: 'Alivia Burkestone', award: 'Lexie M. Sanders Community Good Works Scholarship', amount: '$1,000' },
  { name: 'Jeffrey Thomas', award: 'Edward "Pete" Ivey Education Scholarship', amount: '$1,000' },
  { name: 'Claire Burke', award: 'LaSalle Educational Club Inc. Scholarship', amount: '$1,000' },
  { name: 'Harjyot Kaur', award: 'Nathan A. Dolson Jr. Leadership Scholarship', amount: '$800' },
  { name: 'Sophia Contento', award: 'LaSalle Educational Club Inc. Good Faith Scholarship', amount: '$600' },
  { name: 'Leo Nadrowski', award: 'Shalise Monet Carter Humanitarian Scholarship', amount: '$500' },
  { name: 'Kayvon Agee', award: 'Theodore Williamson Education Scholarship', amount: '$500' },
  { name: 'Jacob Yost', award: 'Men Standing Strong Together Scholarship', amount: '$500' },
  { name: 'Ella Contento', award: 'Niagara Falls NY Community Lion Club Scholarship', amount: '$500' },
  { name: 'Neveah Lohr', award: 'Frontier Chapter No. 20 Eastern Star Education Scholarship', amount: '$500' },
  { name: 'Serena Clark', award: 'Sadie Mae Martin/Willier Lee Martin Blacktop Scholarship', amount: '$500' },
  { name: 'Alexandra Ventry', award: 'Lillie P. Stephens Female Athletic Award', amount: '$500' },
  { name: 'Ethan Bullard', award: 'Niagara Ministerial Council Award', amount: '$500' },
  { name: 'Adam Rick', award: 'Kelab Sanders Jr. Brotherhood Scholarship', amount: '$400' },
  { name: 'Hajira Imram', award: 'Councilman Robert A. Anderson Jr. Memorial Scholarship', amount: '$300' },
  { name: 'Samarra Kochan', award: 'Shalise Monet Carter Memorial Award', amount: '$200' },
  { name: 'Stefania Tantillo', award: 'LaSalle Educational Club Inc. Student Award', amount: '$200' },
  { name: 'Jakaila Collins', award: 'Niagara Falls Future Advocate Award', amount: '$200' }
];

// ==========================================
// DYNAMIC DIRECTORIES LISTS
// ==========================================

const annualHonorees = [
  {
    award: 'Humanitarian Award',
    name: 'Minister Rick Dumas Sr.',
    icon: 'heart-handshake',
    bio: 'A lifelong community servant, sound engineer, and musician, Minister Dumas spent over two decades with the NFCSD and 15 years volunteering with Youth for Christ Ministries. Through his sound business, he serves area churches and key civic events like Juneteenth. He currently serves as Minister of Music and AV Tech for Potter’s House CCC and has been happily married for 44 years.'
  },
  {
    award: 'Educator Award',
    name: 'Angela Manella',
    icon: 'book-marked',
    bio: 'An experienced educational leader with over 30 years in education, Ms. Manella serves as Principal of Cataract Elementary School. A Niagara University and Buffalo State alumna, she has spent her career improving student outcomes, mentoring educators, and serving the Niagara Falls community. She is also a proud mother of four sons who all attended Niagara Falls City Schools.'
  },
  {
    award: 'Teacher of the Year Award',
    name: 'Lauren Falsetti',
    icon: 'award',
    bio: 'A lifelong resident and proud alumna of the district, Ms. Falsetti is in her 15th year with the NFCSD, currently teaching 2nd grade at Kalfas Elementary School. With degrees from Buffalo State and Niagara University, she brings global perspective and local dedication to her classroom. She is known for building resilient, confident students, and leading impactful initiatives like her student gardening club.'
  }
];

const scholarshipJudges = [
  'Dr. Robin Erwin',
  'Rev. Charles Walker III',
  'Stephanie W. Cowart',
  'Monica Hamilton',
  'Stephaine Huston'
];

const hostessesAndEscorts = [
  'Adrian McQueen',
  'Andrea Douglas',
  'Carretha Brown',
  'Clayburn Powell',
  'Gradycia Williams',
  'Sean Mapp',
  'Sondra Brown',
  'Stephanie Lee-Martin',
  'Stephon Lee',
  'Vincent Cauley'
];
