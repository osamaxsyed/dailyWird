export interface Dhikr {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  repetitions: number;
  category: 'morning' | 'evening';
}

export const adhkarData: Dhikr[] = [
  {
    id: '1',
    arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ ٭ اللَّهُ الصَّمَدُ ٭ لَمْ يَلِدْ وَلَمْ يُولَدْ ٭ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
    transliteration: `Qul Huwa Allāhu aḥad. Allāhu al-Ṣamad. Lam yalid wa lam yūlad. Wa lam yakun lahu kufuwan aḥad.`,
    translation: `Say, 'He is God the One, God the eternal. He begot no one nor was He begotten. No one is comparable to Him.'`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '2',
    arabic: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ٭ مِن شَرِّ مَا خَلَقَ ٭ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٭ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ٭ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
    transliteration: `Qul aʿūdhu bi rabb il-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharri il-naffathāti fil ʿuqad. Wa min sharri ḥāsidin idhā ḥasad.`,
    translation: `Say [Prophet], 'I seek refuge with the Lord of daybreak against the harm in what He has created, the harm in the night when darkness gathers, the harm in witches when they blow on knots, the harm in the envier when he envies.'`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '3',
    arabic: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ٭ مَلِكِ النَّاسِ ٭ إِلَٰهِ النَّاسِ ٭ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ٭ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ٭ مِنَ الْجِنَّةِ وَالنَّاسِ`,
    transliteration: `Qul aʿūdhu bi rabb il-nās. Maliki il-nās. Ilāh il-nās. Min sharri al-waswās al-khannās. Al-ladhī yuwaswisu fī ṣudūr al-nās. Min al-jinnati wa al-nās.`,
    translation: `Say, 'I seek refuge with the Lord of people, the Controller of people, the God of people, against the harm of the slinking whisperer—who whispers into the hearts of people—whether they be jinn or people.'`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '4',
    arabic: `رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ`,
    transliteration: `Rabbī ʿaudhu bika min al-hamāzat al-shayaṭīni wa ʿaudhu bika Rabbī an yaḥdurūn.`,
    translation: `'Lord, I take refuge with You from the goadings of the evil ones; I seek refuge with You, Lord, so that they may not come near me.'`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '5',
    arabic: `أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ ٭ فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ ٭ وَمَن يَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ لَا بُرْهَانَ لَهُ بِهِ فَإِنَّمَا حِسَابُهُ عِندَ رَبِّهِ إِنَّهُ لَا يُفْلِحُ الْكَافِرُونَ ٭ وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ`,
    transliteration: `Afaḥasibtum annamā khalaqnākum ʿabathan wa annakum ilaynā lā turjaʿūn. Fa taʿālā Allāh ul-Malik ul-Ḥaqq, lā ilāha illā Huwa Rabb ul-ʿArsh il-Karīm. Wa man yadʿu maʿ Allāhi ilāhan ākhara lā burhāna lahu bihi, faʾinnamā ḥisābuhu ʿinda Rabbih, innahu lā yufliḥ ul-kāfirūn. Wa qul Rabb ighfir warḥam wa anta khayr ul-rāḥimīn.`,
    translation: `Did you think We had created you in vain, and that you would not be brought back to Us? Exalted be God, the true King, there is no god but Him, the Lord of the Glorious Throne! Whoever prays to another god alongside Him—a god for whose existence he has no evidence—will face his reckoning with his Lord. Those who reject the truth will not prosper. Say [Prophet], 'Lord, forgive and have mercy: You are the most merciful of all.'`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '6',
    arabic: `فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ ٭ وَلَهُ الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ ٭ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا وَكَذَٰلِكَ تُخْرَجُونَ`,
    transliteration: `Fasubḥān Allāhi ḥīna tumsūna wa ḥīna tuṣbiḥūn. Wa lahu ul-ḥamdu fi al-samāwāti wa al-arḍi wa ʿashīyyan wa ḥīna tuẓhirūn. Yukhrij ul-ḥayya min al-mayyiti wa yukhrij ul-mayyita min al-ḥayyi wa yuḥyī il-arḍa baʿda mawtihā, wa kathālika tukhrajūn.`,
    translation: `So celebrate God's glory in the evening, in the morning—praise is due to Him in the heavens and the earth—in the late afternoon, and at midday. He brings the living out of the dead and the dead out of the living. He gives life to the earth after death, and you will be brought out in the same way.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '7',
    arabic: `أَعُوذُ بِاللهِ السَّمِيعِ العَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ`,
    transliteration: `Aʿūdhu billāhi al-Samīʿ al-ʿAlīm min al-shayṭān al-rajīm.`,
    translation: `I seek refuge in Allah, the All-Hearing, the All-Knowing, from the rejected Devil.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '8',
    arabic: `لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ ۚ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ ٭ هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ ٭ هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ٭ هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ ۚ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ`,
    transliteration: `Lo anzalnā hādhā al-Qurʾāna ʿalā jabalin laraʾāytahu khāshiʿan mutaṣaddiʿan min khashyat Illāh, wa tilk al-amthālu naḍribuhā liʾl-nāsi laʿalahum yatafakkarūn. Huwa Allāhu alladhī lā ilāha illā Hu, ʿālim ul-ghaybi wa al-shahādati Huwa al-Raḥmān ul-Raḥīm. Huwa Allāhu alladhī lā ilāha illā Huwa al-Malik ul-Quddūs ul-Salām ul-Muʾmin ul-Muhaymin ul-ʿAzīz ul-Jabbār ul-Mutakabbir, subḥān Allāhi ʿammā yushrikūn. Huwa Allāh ul-Khāliq ul-Bāriʾ ul-Muṣawwir, lahu ul-asmāʾ ul-ḥusnā, yusabbiḥu lahu ma fī il-samāwāti wa al-arḍi wa Huwa al-ʿAzīz ul-Ḥakīm.`,
    translation: `If We had sent this Qur'an down to a mountain, you [Prophet] would have seen it humbled and split apart in its awe of God: We offer people such illustrations so that they may reflect. He is God: there is no god other than Him. It is He who knows what is hidden as well as what is in the open, He is the Lord of Mercy, the Giver of Mercy. He is God: there is no god other than Him, the Controller, the Holy One, Source of Peace, Granter of Security, Guardian over all, the Almighty, the Compeller, the Truly Great; God is far above anything they consider to be His partner. He is God: the Creator, the Originator, the Shaper. The best names belong to Him. Everything in the heavens and earth glorifies Him: He is the Almighty, the Wise.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '9',
    arabic: `سَلَامٌ عَلَىٰ نُوحٍ فِي الْعَالَمِينَ ٭ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ ٭ إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ`,
    transliteration: `Salāmun ʿalā Nūḥin fi al-ʿālamīn. Innā kadhalika najzi al-muḥsinīn. Innahu min ʿibādina al-muʾminīn.`,
    translation: `'Peace be upon Noah among all the nations!' This is how We reward those who do good: he was truly one of Our faithful servants.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '10',
    arabic: `أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ`,
    transliteration: `Aʿūdhu bikalimāt Illāhi al-tāmmāti min sharri mā khalaq.`,
    translation: `I seek refuge in the complete words of Allah from the evil in what He has created.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '11',
    arabic: `بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ`,
    transliteration: `Bismillāh alladhī lā yaḍurru maʿ ismihi shayyʾun fil-arḍi wa lā fī al-samāʾi wa huwa al-Samīʿ ul-ʿAlīm.`,
    translation: `In the Name of Allah, with whose Name nothing on earth or in heaven can harm, and He is the All-Hearing, the All-Knowing.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '12',
    arabic: `اللَّهُمَّ إِنِّي أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ، فَأَتْمِمْ نِعْمَتَكَ عَلَيَّ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَةِ`,
    transliteration: `Allāhumma innī aṣbaḥtu minka fī niʿmatin wa ʿāfiyatin wa sitr, faʾatmim niʿmataka ʿalayya wa ʿāfiyataka wa sitraka fi al-dunyā wa al-ākhīrah.`,
    translation: `O Allah! As morning comes upon me, I dwell in your favor, well-being, and protection; so complete Your favor upon me, Your well-being, and Your protection in this world and the next.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '13',
    arabic: `اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ`,
    transliteration: `Allāhumma innī aṣbaḥtu ushhiduka, wa ushhidu ḥamalata ʿarshika wa malāʾikataka wa jamīʿa khalqik, annaka anta Allāhu lā ilāha illā anta waḥdaka lā sharīka lak, wa anna Sayyidanā Muḥammadan ʿabduka wa rasūluk.`,
    translation: `O Allah! As morning comes upon me, I bear witness before You, the Bearers of Your Throne, Your angels, and all Your creation—that You are Allah, there is no god but You, alone with no partners, and that our master Muhammad is Your slave and messenger.`,
    repetitions: 4,
    category: 'morning'
  },
  {
    id: '14',
    arabic: `الحَمْدُ لِلهِ رَبِّ العَالَمِينَ، حَمْداً يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ`,
    transliteration: `Al-ḥamdu lillāhi Rabb il-ʿālamīn, ḥamdan yuwāfī niʿamahu wa yukāfiʾu mazīdah.`,
    translation: `Praise belongs to Allah, Lord of the Worlds—praise that is adequate to His favors and equal to His increase.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '15',
    arabic: `آمَنْتُ بِاللهِ العَظِيمِ، وَكَفَرْتُ بِالجِبْتِ وَالطَّاغُوتِ، وَاسْتَمْسَكْتُ بِالعُرْوَةِ الوُثْقَى، لَا انْفِصَامَ لَهَا وَاللهُ سَمِيعٌ عَلِيمٌ`,
    transliteration: `Āmantu billāh il-ʿAẓīm, wa kafartu bil jibti wa al-ṭāghūt, wastamsaktu bil ʿurwat il-wuthqā, lanfiṣāma lahā wa Allāhu Samīʿun ʿAlīm.`,
    translation: `I believe in Allah the Almighty, and I denounce all idols and false gods, and I grasp the firmest handhold that never breaks, and Allah is All-Hearing, All-Knowing.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '16',
    arabic: `رَضِيتُ بِاللهِ رَبَّاً، وَبِالإِسْلامِ دِيناً، وَبِسَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ نَبِيّاً وَرَسُولاً`,
    transliteration: `Raḍītu billāhi Rabba, wa bil Islāmi dīnā, wa bi Sayyidinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallama nabīyyan wa rasūlā.`,
    translation: `I am content with Allah as Lord, with Islam as religion, and with our master Muhammad (Allah's peace and mercy be upon him) as Prophet and Messenger.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '17',
    arabic: `حَسْبِيَ اللهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ`,
    transliteration: `Ḥasbī Allāhu lā ilāha illā Huwa ʿalayhi tawakkaltu wa Huwa Rabb ul-ʿarsh il-ʿaẓīm.`,
    translation: `Allah is enough for me: there is no god but Him; I put my trust in Him; He is Lord of the Mighty Throne.`,
    repetitions: 7,
    category: 'morning'
  },
  {
    id: '18',
    arabic: `اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلِّمْ`,
    transliteration: `Allāhumma ṣalli ʿalā Sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi wa sallim.`,
    translation: `O Allah! Bestow mercy upon our master Muhammad, his Family and Companions, and give them peace.`,
    repetitions: 10,
    category: 'morning'
  },
  {
    id: '19',
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فُجَاءَةِ الخَيْرِ، وَأَعُوذُ بِكَ مِنْ فُجَاءَةِ الشَّرِّ`,
    transliteration: `Allāhumma innī asʾaluka min fujāʾat il-khayr, wa aʿūdhu bika min fujāʾat il-sharr.`,
    translation: `O Allah! I ask You for sudden good and seek Your protection from sudden evil.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '20',
    arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ`,
    transliteration: `Allāhumma anta Rabbī lā ilāha illā ant, khalaqtanī wa anā ʿabduk, wa anā ʿalā ʿahdika wa waʿdika ma astaṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt, abūʾu laka bi niʿmatika ʿalayya wa abūʾu bi dhanbī, faghfir lī, faʾinnahu lā yaghfir ul-dhunūba illā ant.`,
    translation: `O Allah! You are my Lord, there is no god but You, You created me and I am Your slave. I uphold Your pledge and promise as well as I can; I seek Your protection against the evil that I have done; I acknowledge Your favors upon me and I acknowledge my sin, so forgive me, for none forgives sin except You.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '21',
    arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ`,
    transliteration: `Allāhumma anta Rabbī lā ilāha illā ant, ʿalayka tawakkaltu wa anta Rabb ul-ʿarsh il-ʿaẓīm.`,
    translation: `O Allah! You are my Lord, there is no god but You. Upon You I rely, and You are the Lord of the Glorious Throne.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '22',
    arabic: `مَا شَاءَ اللهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ`,
    transliteration: `Mā shāʾ Allāhu kān, wa mā lam yashaʾ lam yakun, wa lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿĀẓīm.`,
    translation: `Whatever Allah wills is, and what He does not will is not; and there is no power or ability except by Allah, the Most High, the Almighty.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '23',
    arabic: `أَعْلَمُ أَنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ اللهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا`,
    transliteration: `Aʿlamu anna Allāha ʿalā kulli shayyʾin qadīr wa anna Allāha qad aḥāṭa bi kulli shayyʾin ʿilmā.`,
    translation: `I know that Allah has power over all things and that Allah encompasses all things in His knowledge.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '24',
    arabic: `اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ`,
    transliteration: `Allāhumma innī aʿūdhu bika min sharri nafsī, wa min sharri kulli dābbatin anta ākhidhun bi-nāṣīyatihā, inna Rabbī ʿalā ṣirāṭin mustaqīm.`,
    translation: `O Allah! I seek Your protection from the evil of my own self and from the evil of every creature on earth You have taken by the forelock; my Lord is on a straight path.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '25',
    arabic: `يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، وَمِنْ عَذَابِكَ أَسْتَجِيرُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي وَلَا إِلَى أَحَدٍ مِنْ خَلْقِكَ طَرْفَةَ عَيْنٍ`,
    transliteration: `Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth, wa min ʿadhābika astajīr, aṣliḥ lī shaʾnī kullah, wa lā takilnī ilā nafsī wa lā ilā aḥadan min khalqika ṭarfata ʿayn.`,
    translation: `O Ever-Living, O Sustainer! I call upon Your mercy for help and I seek refuge from Your punishment. Rectify all my affairs and do not entrust me to myself or to any of Your creation for even the blink of an eye.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '26',
    arabic: `اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ`,
    transliteration: `Allāhumma innī aʿūdhu bika min al-hammi wa al-ḥazan, wa aʿūdhu bika min al-ʿajzi wa al-kasal, wa aʿūdhu bika min al-jubni wa al-bukhl, wa aʿūdhu bika min ghalabat il-dayni wa qahr il-rijāl.`,
    translation: `O Allah! I seek refuge in You from sorrow and grief, from incapacity and sloth, from cowardice and miserliness, and I seek Your protection from overwhelming debt and the tyranny of men.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '27',
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ`,
    transliteration: `Allāhumma innī asʾaluk al-ʿāfiyah fī al-dunyā wa al-ākhīrah.`,
    translation: `O Allah! I ask You for well-being in this world and the hereafter.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '28',
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ وَالْمُعَافَاةَ الدَّائِمَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي`,
    transliteration: `Allāhumma innī asʾaluk al-ʿafū wa al-ʿāfiyah wa al-muʿāfāt al-dāʾimah fī dīnī wa dunyāya wa ahlī wa mālī.`,
    translation: `O Allah! I ask You for pardoning, well-being, and constant safety in my religion, worldly life, family, and possessions.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '29',
    arabic: `اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي`,
    transliteration: `Allāhumma ustur ʿawrātī wa āmin rawʿātī.`,
    translation: `O Allah! Cover my shame and calm my fears.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '30',
    arabic: `اللَّهُمَّ احْفَظْنِي مِنْ بَيْنَ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي`,
    transliteration: `Allāhumma aḥfaẓnī min bayna yadayya wa min khalfī, wa ʿan yamīnī wa ʿan shimālī wa min fawqī, wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.`,
    translation: `O Allah! Protect me from [the evil] in front of me and behind me, on my right and my left, and from above me—and I take refuge in Your Greatness from the unexpected harm from below me.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '31',
    arabic: `اللَّهُمَّ أَنْتَ خَلَقْتَنِي وَأَنْتَ تَهْدِينِي وَأَنْتَ تُطْعِمُنِي وَأَنْتَ تَسْقِينِي وَأَنْتَ تُمِيتُنِي وَأَنْتَ تُحْيِينِي، وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ`,
    transliteration: `Allāhumma anta khalaqtanī wa anta tahdīnī wa anta tuṭʿimunī wa anta tasqīnī wa anta tumītunī wa anta tuḥyīnī, wa anta ʿalā kulli shayyʾin qadīr.`,
    translation: `O Allah! You created me and You guide me, and You feed me and provide me with drink, and You cause me to die and You give me life, and You have power over all things.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '32',
    arabic: `أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلامِ وَعَلَى كَلِمَةِ الإِخْلاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ`,
    transliteration: `Aṣbaḥnā ʿalā fiṭrat il-Islām wa ʿalā kalimat il-ikhlāṣ wa ʿalā dīni nabīyyinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallim, wa ʿalā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna min al-mushrikīn.`,
    translation: `We have risen this morning on the original pattern of Islam, upon the Word of Sincerity, on the religion of our Prophet Muhammad (Allah's mercy and peace be upon him and his family), and upon the confession of Ibrāhīm, who was upright, a Muslim, and not an idolator.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '33',
    arabic: `اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَعَلَيْكَ نَتَوَكَّلُ وَإِلَيْكَ النُّشُورُ`,
    transliteration: `Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūt wa ʿalayka natawakkal wa ilayk al-nushūr.`,
    translation: `O Allah! By You we live to morning, and by You we live to evening, and by You we live and by You we die, and upon You we rely, and to You is the Resurrection.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '34',
    arabic: `أَصْبَحْنَا وَأَصْبَحَ المُلْكُ لِلهِ، وَالحَمْدُ لِلهِ رَبِّ العَالَمِينَ`,
    transliteration: `Aṣbaḥnā wa aṣbaḥ al-mulku lillāh, wa al-ḥamdu lillāhi Rabb il-ʿālamīn.`,
    translation: `Morning has risen upon us and all sovereignty is Allah's, and all praise belongs to Allah, Lord of the Worlds.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '35',
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا اليَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ`,
    transliteration: `Allāhumma innī asʾaluka khayra hādhā al-yawm, fatḥahu wa naṣrahu wa nūrahu wa barakatahu wa hudāh.`,
    translation: `O Allah! I ask You for the good of this day, its openings, victories, lights, blessings, and right-guidance.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '36',
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا اليَوْمِ وَخَيْرَ مَا فِيهِ، وَخَيْرَ مَا قَبْلَهُ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا اليَوْمِ وَشَرِّ مَا فِيهِ، وَشَرِّ مَا قَبْلَهُ وَشَرِّ مَا بَعْدَهُ`,
    transliteration: `Allāhumma innī asʾaluka khayra hādhā al-yawmi wa khayra mā fīh, wa khayra mā qablahu wa khayra mā baʿdah, wa aʿūdhu bika min sharri hādhā al-yawmi wa sharri mā fīh, wa sharri mā qablahu wa sharri mā baʿdah.`,
    translation: `O Allah! I ask You for the good of this day and the best of what is in it, and the best of what came before it and the best of what comes after it; and I seek refuge in You from the evil of this day and the worst of what is in it, and the worst of what came before it and the worst of what comes after it.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '37',
    arabic: `اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الحَمْدُ وَلَكَ الشُّكْرُ عَلَى ذَلِكَ`,
    transliteration: `Allāhumma mā aṣbaḥa bī min niʿmatin aw bi-aḥadin min khalqik, fa minka waḥdaka lā sharīka lak, falaka al-ḥamdu wa laka al-shukru ʿalā dhālik.`,
    translation: `O Allah! Whatever favors I, or any of Your creatures, received this morning, they come only from You; You have no partners, so to You belongs all praise and to You belongs all thanks.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '38',
    arabic: `سُبْحَانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَاءَ نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ`,
    transliteration: `Subḥān Allāhi wa bi-ḥamdihi ʿadada khalqihi wa riḍāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.`,
    translation: `Transcendent is Allah and praise belongs to Him—equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '39',
    arabic: `سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَاءَ نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ`,
    transliteration: `Subḥān Allāhi al-ʿAẓīmi wa bi-ḥamdihi ʿadada khalqihi wa riḍāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.`,
    translation: `Transcendent is Allah the Almighty, and praise belongs to Him—equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '40',
    arabic: `سُبْحَانَ اللهِ عَدَدَ مَا خَلَقَ فِي السَّمَاءِ، سُبْحَانَ اللهِ عَدَدَ مَا خَلَقَ فِي الأَرْضِ، سُبْحَانَ اللهِ عَدَدَ مَا بَيْنَ ذَلِكَ، سُبْحَانَ اللهِ عَدَدَ مَا هُوَ خَالِقٌ`,
    transliteration: `Subḥān Allāhi ʿadada mā khalaqa fīl-samāʾ, subḥān Allāhi ʿadad mā khalaqa fil-arḍ, subḥān Allāhi ʿadada mā bayna dhālik, subḥān Allāhi ʿadada mā Huwa khāliq.`,
    translation: `"Transcendent is Allah" equal to what He created in the heavens; "transcendent is Allah" equal to what He created on earth; "transcendent is Allah" equal to what is between them both; "transcendent is Allah" equal to whatever He creates.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '41',
    arabic: `الحَمْدُ لِلهِ عَدَدَ مَا خَلَقَ فِي السَّمَاءِ، الحَمْدُ لِلهِ عَدَدَ مَا خَلَقَ فِي الأَرْضِ، الحَمْدُ لِلهِ عَدَدَ مَا بَيْنَ ذَلِكَ، الحَمْدُ لِلهِ عَدَدَ مَا هُوَ خَالِقٌ`,
    transliteration: `Al-ḥamdu lillāhi ʿadada mā khalaqa fil-samāʾ, al-ḥamdu lillāhi ʿadada mā khalaqa fil-arḍ, al-ḥamdu lillāhi ʿadada mā bayna dhālik, al-ḥamdu lillāhi ʿadada mā Huwa khāliq.`,
    translation: `"All praise belongs to Allah" equal to what He created in the heavens; "all praise belongs to Allah" equal to what He created on earth; "all praise belongs to Allah" equal to what is between them both; "all praise belongs to Allah" equal to whatever He creates.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '42',
    arabic: `لَا إِلَهَ إِلَّا اللهُ عَدَدَ مَا خَلَقَ فِي السَّمَاءِ، لَا إِلَهَ إِلَّا اللهُ عَدَدَ مَا خَلَقَ فِي الأَرْضِ، لَا إِلَهَ إِلَّا اللهُ عَدَدَ مَا بَيْنَ ذَلِكَ، لَا إِلَهَ إِلَّا اللهُ عَدَدَ مَا هُوَ خَالِقٌ`,
    transliteration: `Lā ilāha illā Allāh ʿadada mā khalaqa fil-samāʾ, lā ilāha illā Allāh ʿadada mā khalaqa fil-arḍ, lā ilāha illā Allāh ʿadada mā bayna dhālik, lā ilāha illā Allāh ʿadada mā Huwa khāliq.`,
    translation: `"There is no god except Allah" equal to what He created in the heavens; "there is no god except Allah" equal to what He created on earth; "there is no god except Allah" equal to what is between them both; "there is no god except Allah" equal to whatever He creates.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '43',
    arabic: `اللهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي السَّمَاءِ، اللهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي الأَرْضِ، اللهُ أَكْبَرُ عَدَدَ مَا بَيْنَ ذَلِكَ، اللهُ أَكْبَرُ عَدَدَ مَا هُوَ خَالِقٌ`,
    transliteration: `Allāhu akbar ʿadada mā khalaqa fil-samāʾ, Allāhu akbar ʿadada mā khalaqa fil-arḍ, Allāhu akbar ʿadada mā bayna dhālik, Allāhu akbar ʿadada mā Huwa khāliq.`,
    translation: `"Allah is Greater" equal to what He created in the heavens; "Allah is Greater" equal to what He created on earth; "Allah is Greater" equal to what is between them both; "Allah is Greater" equal to whatever He creates.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '44',
    arabic: `لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ عَدَدَ مَا خَلَقَ فِي السَّمَاءِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ عَدَدَ مَا خَلَقَ فِي الأَرْضِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ عَدَدَ مَا بَيْنَ ذَلِكَ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ عَدَدَ مَا هُوَ خَالِقٌ`,
    transliteration: `Lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā khalaqa fil-samāʾ, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā khalaqa fil-arḍ, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā bayna dhālik, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā Huwa khāliq.`,
    translation: `"There is no power or ability except by Allah, the Most High, the Almighty" equal to what He created in the heavens; "There is no power or ability except by Allah, the Most High, the Almighty" equal to what He created on earth; "There is no power or ability except by Allah, the Most High, the Almighty" equal to what is between them both; "There is no power or ability except by Allah, the Most High, the Almighty" equal to whatever He creates.`,
    repetitions: 1,
    category: 'morning'
  },
  {
    id: '45',
    arabic: `لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّةٍ`,
    transliteration: `Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu ul-mulku wa lahu ul-ḥamdu, yuḥyī wa yumīt wa Huwa ʿalā kulli shayyʾin qadīr, ʿadada kulli dharratin alfa marrah.`,
    translation: `"There is no god except Allah, One without partner, all control and praise belong to Him, He gives life and death, and He has power over all things"—equal to every atom one thousand times over.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '46',
    arabic: `اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ مِفْتَاحِ بَابِ رَحْمَةِ اللهِ، عَدَدَ مَا فِي عِلْمِ اللهِ، صَلَاةً وَسَلَامًا دَائِمَيْنِ بِدَوَامِ مُلْكِ اللهِ، وَعَلَى آلِهِ وَصَحْبِهِ عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّةٍ`,
    transliteration: `Allāhumma ṣalli wa sallim ʿalā Sayyidinā Muḥammadin miftāḥi bāb raḥmat Illāh, ʿadada mā fī ʿilm Illāh, ṣalātan wa salāman dāʾimayni bi dawāmi mulk Illāh, wa ʿalā ālihi wa ṣaḥbihi ʿadada kulli dharratin alfa marrah.`,
    translation: `"O Allah! Bestow mercy and peace upon our master Muhammad, the key to Allah's Gates of Mercy—equal to that which is in Allah's knowledge—a mercy and peace that last as eternally as Allah's sovereignty, and upon his family and companions"—equal to every atom one thousand times over.`,
    repetitions: 3,
    category: 'morning'
  },
  {
    id: '47',
    arabic: `سُورَةُ الفَاتِحَة: ﴿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ٭ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ٭ الرَّحْمَٰنِ الرَّحِيمِ ٭ مَالِكِ يَوْمِ الدِّينِ ٭ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٭ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ٭ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ﴾`,
    transliteration: `Bismillāhi al-raḥmān il-raḥīm. Al‐ḥamdu lillāhi rabb il‐ʿālamīn. Al‐raḥmān il‐raḥīm. Māliki yawm il‐dīn. Iyyāka naʿbudu wa iyyāka nastaʿīn. Ihdinā al‐ṣirāṭ al‐mustaqīm. Ṣirāṭ alladhīna anʿamta ʿalayhim, ghary il‐maghḍūbi ʿalayhim wa lā al‐ḍāllīn.`,
    translation: `In the name of God, the Lord of Mercy, the Giver of Mercy! Praise belongs to God, Lord of the Worlds, the Lord of Mercy, the Giver of Mercy, Master of the Day of Judgment. It is You we worship; it is You we ask for help. Guide us to the straight path: the path of those You have blessed, those who incur no anger and who have not gone astray.`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '48',
    arabic: `آيَةُ الكُرْسِي: ﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾`,
    transliteration: `Allāhu lā ilāha illā hū al-ḥayy al-qayyūm, lā taʾkhudhuhu sinatun wa lā nawm, lahu mā fi al-samāwāti wa mā fil-arḍ, man dhal-ladhī yashfaʿu ʿindahu illā bi idhnnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yūḥīṭūna bi shayyʾin min ʿilmihi illā bimā shāʾ, wasiʿa kursīyyuhu al-samāwāti wal-arḍ, wa lā yaʾūduhu ḥifẓuhumā wa hūwa al-ʿalī ul-ʿaẓīm.`,
    translation: `God: there is no god but Him, the Ever Living, the Ever Watchful. Neither slumber nor sleep overtakes Him. All that is in the heavens and in the earth belongs to Him. Who is there that can intercede with Him except by His leave? He knows what is before them and what is behind them, but they do not comprehend any of His knowledge except what He wills. His throne extends over the heavens and the earth; it does not weary Him to preserve them both. He is the Most High, the Tremendous.`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '49',
    arabic: `﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ٭ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ﴾`,
    transliteration: `Āman al-rasūlu bimā unzila ilayhi min rabbihi wal-muʾminūn, kullun āmana billāhi wa malāʾikatihi wa kutubihi wa rusulih, lā nufarriqu bayna aḥadin min rusulih, wa qālū samaʿnā wa aṭaʿnā ghufrānaka rabbanā wa ilayka al-maṣīr. Lā yukallif ullāhu nafsan illā wusʿahā, lahā mā kasabat wa ʿalayhā mak tasabat, rabbanā lā tuʾākhidhnā in nasīnā aw akhṭaʾnā, rabbanā wa lā taḥmil ʿalaynā iṣran kamā ḥamaltahu ʿalā alladhīna min qablinā, rabbanā wa la tuḥammilnā ma lāā ṭāqata lanā bih, waʿfu ʿannā waghfir lanāā warḥamnāā, anta mawlānā fanṣurnā ʿalā al-qawm il-kāfirīn.`,
    translation: `The Messenger believes in what has been sent down to Him from his Lord, as do the faithful. They all believe in God, His angels, His scriptures, and His messengers. 'We make no distinction between any of His messengers,' they say, 'We hear and obey. Grant us Your forgiveness, our Lord. To You we all return!'— God does not burden any soul with more than it can bear: each gains whatever good it has done, and suffers its bad— 'Lord, do not take us to task if we forget or make mistakes. Lord, do not burden us as You burdened those before us. Lord, do not burden us with more than we have strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so help us against the disbelievers.'`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '50',
    arabic: `لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ`,
    transliteration: `Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulk wa lahu al-ḥamdu, yuḥyī wa yumīt, wa huwa ʿalā kulli shayʾin qadīr.`,
    translation: `There is no god but God; One without partner. All dominion is His and all praise. He gives life and He causes death, and He is Powerful over all things.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '51',
    arabic: `سُبْحَانَ اللهِ، وَالحَمْدُ لِلهِ، وَلَا إِلَهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ`,
    transliteration: `Subḥān Allāh, wal-ḥamdu lillāh, wa lā ilāha illā Allāh, wallāhu akbar.`,
    translation: `Glory belongs to God; praise belongs to God; there is no god but God; God is Greater.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '52',
    arabic: `سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحَانَ اللهِ العَظِيمِ`,
    transliteration: `Subḥān Allāhi wa bi ḥamdihi, subḥān Allāhi al-ʿaẓīm.`,
    translation: `Glory belongs to God with His Praise; Glory belongs to God, the Tremendous.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '53',
    arabic: `رَبَّنَا اغْفِرْ لَنَا وَتُبْ عَلَيْنَا، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ`,
    transliteration: `Rabbanā ighfir lanā wa tub ʿalaynā, innaka anta al-tawwāb ul-raḥīm.`,
    translation: `Our Lord, forgive us and relent towards us; truly, You are the Forgiver, the Merciful.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '54',
    arabic: `اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، اللَّهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ`,
    transliteration: `Allāhumma ṣalli ʿalā Muḥammad, Allāhumma ṣalli ʿalayhi wa sallim.`,
    translation: `O God, bestow mercy upon Muḥammad; O God bestow mercy upon him and peace!`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '55',
    arabic: `أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ`,
    transliteration: `Aʿūdhu bi kalimāt illāh al-tāmmāti min sharri mā khalaq.`,
    translation: `I seek refuge in God's complete words from the evil of what He has created.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '56',
    arabic: `رَضِينَا بِاللهِ رَبَّاً، وَبِالإِسْلامِ دِيناً، وَبِمُحَمَّدٍ نَبِيَّاً`,
    transliteration: `Raḍīnāā billāhi rabban, wa bil-islāmi dīnan, wa bi Muḥammadin nabiyyā.`,
    translation: `We are content with God as [our] Lord, with Islam as [our] religion, and with Muḥammad as [our] Prophet.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '57',
    arabic: `بِسْمِ اللهِ، وَالحَمْدُ لِلهِ، وَالخَيْرُ وَالشَّرُّ بِمَشِيئَةِ اللهِ`,
    transliteration: `Bismillāh, wal-ḥamdu lillāh, wal-khayru wal-sharru bi mashīʾat illāh.`,
    translation: `In the name of God, praise belongs to God, and good and evil are by the permission of God.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '58',
    arabic: `آمَنَّا بِاللهِ وَاليَوْمِ الآخِرِ، تُبْنَا إِلَى اللهِ بَاطِناً وَظَاهِراً`,
    transliteration: `Āmannāā billāhi wal-yawm il-ākhir, tubnāā ilāā Allāhi bāṭinan wa ẓāhir.`,
    translation: `We believe in God and the Last Day; we repent to God inwardly and outwardly.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '59',
    arabic: `يَا رَبَّنَا وَاعْفُ عَنَّا، وَامْحُ الَّذِي كَانَ مِنَّا`,
    transliteration: `Yā rabbanā waʿfu ʿannā, wamḥu alladhī kāna minnā.`,
    translation: `O Our Lord, pardon us, and wipe out whatever [sins] we have committed.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '60',
    arabic: `يَا ذَا الجَلالِ وَالإِكْرَامِ، أَمِتْنَا عَلَى دِينِ الإِسْلامِ`,
    transliteration: `Yā dhal-jalāli wal-ikrām, amitnā ʿalā dīn al-islām.`,
    translation: `O Possessor of Majesty and Honor, cause us to die upon the religion of Islām.`,
    repetitions: 7,
    category: 'evening'
  },
  {
    id: '61',
    arabic: `يَا قَوِيُّ يَا مَتِينُ، اِكْفِ شَرَّ الظَّالِمِينَ`,
    transliteration: `Yā qawiyyu yā matīn, ikfi sharr al-ẓālimīn.`,
    translation: `O Most Mighty, Most Authoritative One, protect us from the evil of the unjust!`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '62',
    arabic: `أَصْلَحَ اللهُ أُمُورَ المُسْلِمِينَ، صَرَفَ اللهُ شَرَّ المُؤْذِينَ`,
    transliteration: `Aṣlaḥ Allāhu umūr al-muslimīn, ṣaraf Allāhu sharr al-muʾdhīn.`,
    translation: `May God rectify the affairs of the Muslims, may God turn away the evil of the harmful.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '63',
    arabic: `يَا عَلِيُّ يَا كَبِيرُ، يَا عَلِيمُ يَا قَدِيرُ، يَا سَمِيعُ يَا بَصِيرُ، يَا لَطِيفُ يَا خَبِيرُ`,
    transliteration: `Yāā ʿaliyyu yā kabīr, yā ʿalīmu yā qadīr, yā samīʿu yā baṣīr, yā laṭīfu yā khabīr.`,
    translation: `O Most High, O the Most Great! O All-Knowing, O All-Powerful! O All-Hearing, O All-Seeing! O Most Gentle, O Most Aware!`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '64',
    arabic: `يَا فَارِجَ الهَمِّ، يَا كَاشِفَ الغَمِّ، يَا مَنْ لِعَبْدِهِ يَغْفِرُ وَيَرْحَمْ`,
    transliteration: `Yā fārij al-hamm, yā kāshif al-ghamm, yā man liʿabdihi yaghfir wa yarḥam.`,
    translation: `O dispeller of anxiety; O remover of grief; O One Who, to His servant, is Forgiving and Merciful.`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '65',
    arabic: `أَسْتَغْفِرُ اللهَ رَبَّ البَرَايَا، أَسْتَغْفِرُ اللهَ مِنَ الخَطَايَا`,
    transliteration: `Astaghfir ullāha rabb al-barāyā, astaghfir ullāha min al-khaṭāyā.`,
    translation: `I seek God's forgiveness, Lord of creation. I seek God's forgiveness from all mistakes.`,
    repetitions: 4,
    category: 'evening'
  },
  {
    id: '66',
    arabic: `لَا إِلَهَ إِلَّا اللهُ`,
    transliteration: `Lā ilāha illa Allāh.`,
    translation: `There is no god but God.`,
    repetitions: 50,
    category: 'evening'
  },
  {
    id: '67',
    arabic: `مُحَمَّدٌ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَشَرَّفَ وَكَرَّمَ وَمَجَّدَ وَعَظَّمَ، وَرَضِيَ اللهُ عَنْ أَهْلِ بَيْتِهِ الطَيِّبِينَ الطَّاهِرِينَ، وَأَصْحَابِهِ الأَخْيَارِ المُهْتَدِينَ، وَالتَّابِعِينَ لَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّينِ`,
    transliteration: `Muḥammadun rasūl Allāh, ṣalla Allāhu ʿalayhi wa sallam, wa sharrafa wa karram, wa majjada wa ʿaẓẓam, wa raḍī Allāhu ʿan ahli baytihi al-ṭayyibīn al-ṭāhirīn, wa aṣḥabihi al-akhyār al-muhtadīn, wa al-tābiʿīn lahum bi iḥsānin ilā yawm il-dīn.`,
    translation: `Muhammad is the Messenger of God, may God send His mercy and peace upon him, and honor and ennoble him, and glorify and exalt him—and may God be pleased with his family, the pure and good, and his chosen and guided companions, and those who follow them with excellence until the Day of Judgment.`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '68',
    arabic: `سُورَةُ الإِخْلَاصِ: ﴿قُلْ هُوَ اللَّهُ أَحَدٌ ٭ اللَّهُ الصَّمَدُ ٭ لَمْ يَلِدْ وَلَمْ يُولَدْ ٭ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾`,
    transliteration: `Qul Huwa Allāhu aḥad. Allāhu al-Ṣamad. Lam yalid wa lam yūlad. Wa lam yakun lahu kufuwan aḥad.`,
    translation: `Say, 'He is God the One, God the eternal. He begot no one nor was He begotten. No one is comparable to Him.'`,
    repetitions: 3,
    category: 'evening'
  },
  {
    id: '69',
    arabic: `سُورَةُ الفَلَقِ: ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ٭ مِن شَرِّ مَا خَلَقَ ٭ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٭ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ٭ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾`,
    transliteration: `Qul aʿūdhu bi rabb il-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharri il-naffathāti fil ʿuqad. Wa min sharri ḥāsidin idhā ḥasad.`,
    translation: `Say [Prophet], 'I seek refuge with the Lord of daybreak against the harm in what He has created, the harm in the night when darkness gathers, the harm in witches when they blow on knots, the harm in the envier when he envies.'`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '70',
    arabic: `سُورَةُ النَّاسِ: ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ٭ مَلِكِ النَّاسِ ٭ إِلَٰهِ النَّاسِ ٭ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ٭ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ٭ مِنَ الْجِنَّةِ وَالنَّاسِ﴾`,
    transliteration: `Qul aʿūdhu bi rabb il-nās. Maliki il-nās. Ilāh il-nās. Min sharri al-waswās al-khannās. Al-ladhī yuwaswisu fī ṣudūr al-nās. Min al-jinnati wa al-nās.`,
    translation: `Say, 'I seek refuge with the Lord of people, the Controller of people, the God of people, against the harm of the slinking whisperer—who whispers into the hearts of people—whether they be jinn or people.'`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '71',
    arabic: `الفَاتِحَةُ إِلَى كَافَّةِ عِبَادِ اللهِ الصَّالِحِينَ، وَلِوَالِدِينَا، وَجَمِيعِ المُؤْمِنِينَ وَالمُؤْمِنَاتِ، وَالمُسْلِمِينَ وَالمُسْلِمَاتِ، أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمَهُمْ، وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَبَرَكَاتِهِمْ... وَإِلَى حَضْرَةِ النَّبِيِّ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمْ – الفَاتِحَة`,
    transliteration: `Al-Fātiḥa ilā kāffati ʿibād illāh al-ṣāliḥīn, wa liwālidīnā, wa jamīʿ al-muʾminīna wal-muʾmināt, wal-muslimīna wal-muslimāt, anna Allāha yaghfir lahum wa yarḥamuhum, wa yanfaʿuna bi asrārihim wa barakātihim... Wa ilā haḍrat al-Nabī Muḥammad ṣallā Allāhu ʿalayhi wa sallam – al-Fātiḥah`,
    translation: `The Fātiḥa to the souls of all the righteous servants of God, our parents, all the believing men and believing women, and Muslim men and Muslim women—that God forgives them and has mercy upon them and benefits us by their secrets and blessings. And to the venerable Prophet Muḥammad, God's mercy and peace be upon him. [Then recite the Fātiḥa].`,
    repetitions: 1,
    category: 'evening'
  },
  {
    id: '72',
    arabic: `اللَّهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالجَنَّةَ، وَنَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ`,
    transliteration: `Allāhumma innā nasʾaluka riḍāka wal-jannah, wa naʿūdhu bika min sakhaṭika wa al-nār.`,
    translation: `O God, we ask You for Your pleasure and Paradise, and we seek refuge in You from Your wrath and the Fire.`,
    repetitions: 3,
    category: 'evening'
  }
];

