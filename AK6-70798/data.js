const stops = [
  {
    lat: 52.859897,
    lng: -104.601097,
    start: "8/25/2025 16:06",
    end: "10/7/2025 19:01",
    duration: "43Day2Hour55Minute"
  },
  {
    lat: 52.857888,
    lng: -104.603010,
    start: "10/7/2025 20:05",
    end: "10/7/2025 20:12",
    duration: "7Minute"
  },
  {
    lat: 52.860083,
    lng: -104.600895,
    start: "10/7/2025 20:15",
    end: "10/7/2025 20:21",
    duration: "7Minute"
  },
  {
    lat: 52.866603,
    lng: -104.594632,
    start: "10/7/2025 20:24",
    end: "10/7/2025 20:53",
    duration: "29Minute"
  },
  {
    lat: 52.859835,
    lng: -104.611785,
    start: "10/7/2025 20:59",
    end: "10/7/2025 21:07",
    duration: "8Minute"
  },
  {
    lat: 52.866423,
    lng: -104.594745,
    start: "10/7/2025 21:14",
    end: "10/7/2025 21:20",
    duration: "5Minute"
  },
  {
    lat: 52.866515,
    lng: -104.594807,
    start: "10/7/2025 21:20",
    end: "10/7/2025 22:17",
    duration: "57Minute"
  },
  {
    lat: 52.866358,
    lng: -104.594887,
    start: "10/7/2025 22:27",
    end: "10/7/2025 22:52",
    duration: "25Minute"
  },
  {
    lat: 52.986800,
    lng: -104.096473,
    start: "10/7/2025 23:32",
    end: "10/8/2025 1:03",
    duration: "1Hour30Minute"
  },
  {
    lat: 52.848147,
    lng: -104.045510,
    start: "10/8/2025 1:28",
    end: "10/8/2025 2:20",
    duration: "52Minute"
  },
  {
    lat: 52.866363,
    lng: -104.594663,
    start: "10/8/2025 3:18",
    end: "10/8/2025 5:28",
    duration: "2Hour10Minute"
  },
  {
    lat: 52.859868,
    lng: -104.600920,
    start: "10/8/2025 5:33",
    end: "10/8/2025 5:38",
    duration: "5Minute"
  },
  {
    lat: 52.986860,
    lng: -104.096463,
    start: "10/8/2025 6:18",
    end: "10/8/2025 8:09",
    duration: "1Hour51Minute"
  },
  {
    lat: 52.980100,
    lng: -104.277148,
    start: "10/8/2025 8:35",
    end: "10/8/2025 8:42",
    duration: "7Minute"
  },
  {
    lat: 52.859845,
    lng: -104.600980,
    start: "10/8/2025 9:19",
    end: "10/8/2025 9:27",
    duration: "8Minute"
  },
  {
    lat: 52.866552,
    lng: -104.594705,
    start: "10/8/2025 9:30",
    end: "10/8/2025 10:04",
    duration: "34Minute"
  },
  {
    lat: 52.866573,
    lng: -104.594628,
    start: "10/8/2025 10:16",
    end: "10/8/2025 12:06",
    duration: "1Hour50Minute"
  },
  {
    lat: 52.853538,
    lng: -104.591170,
    start: "10/8/2025 12:11",
    end: "10/8/2025 13:30",
    duration: "1Hour18Minute"
  },
  {
    lat: 52.986890,
    lng: -104.096438,
    start: "10/8/2025 14:25",
    end: "10/8/2025 15:57",
    duration: "1Hour33Minute"
  },
  {
    lat: 52.847872,
    lng: -104.046972,
    start: "10/8/2025 16:21",
    end: "10/8/2025 16:53",
    duration: "32Minute"
  },
  {
    lat: 52.848217,
    lng: -104.045410,
    start: "10/8/2025 16:55",
    end: "10/8/2025 17:15",
    duration: "20Minute"
  },
  {
    lat: 52.866373,
    lng: -104.594640,
    start: "10/8/2025 17:52",
    end: "10/8/2025 18:17",
    duration: "25Minute"
  },
  {
    lat: 52.866345,
    lng: -104.594618,
    start: "10/8/2025 18:18",
    end: "10/8/2025 18:38",
    duration: "21Minute"
  },
  {
    lat: 52.866317,
    lng: -104.594592,
    start: "10/8/2025 18:44",
    end: "10/9/2025 8:59",
    duration: "14Hour16Minute"
  },
  {
    lat: 52.866308,
    lng: -104.594598,
    start: "10/9/2025 9:00",
    end: "10/9/2025 13:53",
    duration: "4Hour53Minute"
  },
  {
    lat: 52.859577,
    lng: -104.601202,
    start: "10/9/2025 14:05",
    end: "10/9/2025 14:13",
    duration: "8Minute"
  },
  {
    lat: 52.966497,
    lng: -104.180852,
    start: "10/9/2025 18:46",
    end: "10/9/2025 19:12",
    duration: "26Minute"
  },
  {
    lat: 52.848288,
    lng: -104.045332,
    start: "10/9/2025 19:39",
    end: "10/9/2025 19:57",
    duration: "18Minute"
  },
  {
    lat: 52.847793,
    lng: -104.047345,
    start: "10/9/2025 20:03",
    end: "10/9/2025 20:44",
    duration: "41Minute"
  },
  {
    lat: 52.848315,
    lng: -104.045358,
    start: "10/9/2025 20:45",
    end: "10/9/2025 21:09",
    duration: "24Minute"
  },
  {
    lat: 52.966362,
    lng: -104.181053,
    start: "10/9/2025 21:41",
    end: "10/9/2025 22:28",
    duration: "47Minute"
  },
  {
    lat: 52.860070,
    lng: -104.601112,
    start: "10/9/2025 23:22",
    end: "10/9/2025 23:33",
    duration: "12Minute"
  },
  {
    lat: 52.866532,
    lng: -104.594772,
    start: "10/9/2025 23:46",
    end: "10/10/2025 1:23",
    duration: "1Hour37Minute"
  },
  {
    lat: 52.966443,
    lng: -104.180892,
    start: "10/10/2025 2:00",
    end: "10/10/2025 2:49",
    duration: "49Minute"
  },
  {
    lat: 52.866330,
    lng: -104.594725,
    start: "10/10/2025 3:35",
    end: "10/10/2025 3:59",
    duration: "25Minute"
  },
  {
    lat: 52.859875,
    lng: -104.600925,
    start: "10/10/2025 4:07",
    end: "10/10/2025 6:55",
    duration: "2Hour48Minute"
  },
  {
    lat: 52.966398,
    lng: -104.181132,
    start: "10/10/2025 7:39",
    end: "10/10/2025 8:27",
    duration: "47Minute"
  },
  {
    lat: 52.966393,
    lng: -104.181097,
    start: "10/10/2025 8:27",
    end: "10/10/2025 9:28",
    duration: "1Hour1Minute"
  },
  {
    lat: 52.866587,
    lng: -104.594745,
    start: "10/10/2025 10:04",
    end: "10/10/2025 13:24",
    duration: "3Hour19Minute"
  },
  {
    lat: 52.966385,
    lng: -104.181033,
    start: "10/10/2025 14:03",
    end: "10/10/2025 15:39",
    duration: "1Hour36Minute"
  },
  {
    lat: 52.848210,
    lng: -104.045548,
    start: "10/10/2025 16:05",
    end: "10/10/2025 16:54",
    duration: "49Minute"
  },
  {
    lat: 52.847882,
    lng: -104.047050,
    start: "10/10/2025 16:59",
    end: "10/10/2025 17:34",
    duration: "35Minute"
  },
  {
    lat: 52.866625,
    lng: -104.594702,
    start: "10/10/2025 18:38",
    end: "10/10/2025 20:35",
    duration: "1Hour56Minute"
  },
  {
    lat: 52.859808,
    lng: -104.611808,
    start: "10/10/2025 20:45",
    end: "10/10/2025 21:40",
    duration: "55Minute"
  },
  {
    lat: 52.855687,
    lng: -104.595305,
    start: "10/10/2025 21:43",
    end: "10/10/2025 21:49",
    duration: "6Minute"
  },
  {
    lat: 52.866563,
    lng: -104.594702,
    start: "10/10/2025 22:02",
    end: "10/10/2025 23:45",
    duration: "1Hour43Minute"
  },
  {
    lat: 52.853315,
    lng: -104.590632,
    start: "10/10/2025 23:51",
    end: "10/11/2025 0:05",
    duration: "14Minute"
  },
  {
    lat: 52.966380,
    lng: -104.181145,
    start: "10/11/2025 0:43",
    end: "10/11/2025 1:15",
    duration: "32Minute"
  },
  {
    lat: 52.848068,
    lng: -104.045387,
    start: "10/11/2025 2:05",
    end: "10/11/2025 3:00",
    duration: "56Minute"
  },
  {
    lat: 52.860042,
    lng: -104.601028,
    start: "10/11/2025 3:41",
    end: "10/11/2025 4:51",
    duration: "1Hour10Minute"
  },
  {
    lat: 52.860013,
    lng: -104.600965,
    start: "10/11/2025 5:00",
    end: "10/11/2025 5:05",
    duration: "5Minute"
  },
  {
    lat: 52.866543,
    lng: -104.594745,
    start: "10/11/2025 5:12",
    end: "10/11/2025 11:33",
    duration: "6Hour21Minute"
  },
  {
    lat: 52.848235,
    lng: -104.045538,
    start: "10/11/2025 13:41",
    end: "10/11/2025 14:20",
    duration: "39Minute"
  },
  {
    lat: 52.866610,
    lng: -104.594750,
    start: "10/11/2025 14:52",
    end: "10/11/2025 19:22",
    duration: "4Hour30Minute"
  },
  {
    lat: 52.966453,
    lng: -104.181070,
    start: "10/11/2025 20:52",
    end: "10/11/2025 23:45",
    duration: "2Hour54Minute"
  },
  {
    lat: 52.866370,
    lng: -104.594968,
    start: "10/12/2025 2:23",
    end: "10/12/2025 3:08",
    duration: "45Minute"
  },
  {
    lat: 52.859868,
    lng: -104.600923,
    start: "10/12/2025 3:11",
    end: "10/12/2025 5:53",
    duration: "2Hour42Minute"
  },
  {
    lat: 52.986895,
    lng: -104.411250,
    start: "10/12/2025 6:33",
    end: "10/12/2025 6:39",
    duration: "6Minute"
  },
  {
    lat: 52.859878,
    lng: -104.600932,
    start: "10/12/2025 7:26",
    end: "10/12/2025 7:40",
    duration: "14Minute"
  },
  {
    lat: 52.866607,
    lng: -104.594678,
    start: "10/12/2025 7:43",
    end: "10/12/2025 8:29",
    duration: "45Minute"
  },
  {
    lat: 52.866733,
    lng: -104.594695,
    start: "10/12/2025 11:39",
    end: "10/12/2025 16:50",
    duration: "5Hour11Minute"
  },
  {
    lat: 52.872282,
    lng: -104.616577,
    start: "10/12/2025 16:54",
    end: "10/13/2025 13:53",
    duration: "20Hour58Minute"
  },
  {
    lat: 52.861907,
    lng: -104.608110,
    start: "10/13/2025 14:11",
    end: "10/14/2025 11:20",
    duration: "21Hour9Minute"
  },
  {
    lat: 52.861897,
    lng: -104.608295,
    start: "10/14/2025 11:24",
    end: "10/15/2025 5:16",
    duration: "17Hour51Minute"
  },
  {
    lat: 52.918003,
    lng: -104.180355,
    start: "10/15/2025 5:50",
    end: "10/15/2025 8:44",
    duration: "2Hour55Minute"
  },
  {
    lat: 52.861932,
    lng: -104.608268,
    start: "10/15/2025 9:15",
    end: "10/15/2025 13:59",
    duration: "4Hour44Minute"
  },
  {
    lat: 52.918007,
    lng: -104.180367,
    start: "10/15/2025 14:29",
    end: "10/15/2025 16:48",
    duration: "2Hour19Minute"
  },
  {
    lat: 52.861937,
    lng: -104.608338,
    start: "10/15/2025 17:19",
    end: "10/16/2025 2:40",
    duration: "9Hour21Minute"
  },
  {
    lat: 52.918042,
    lng: -104.180413,
    start: "10/16/2025 3:11",
    end: "10/16/2025 5:39",
    duration: "2Hour28Minute"
  },
  {
    lat: 52.861963,
    lng: -104.608270,
    start: "10/16/2025 6:12",
    end: "10/16/2025 9:07",
    duration: "2Hour55Minute"
  },
  {
    lat: 52.861752,
    lng: -104.608297,
    start: "10/16/2025 9:07",
    end: "10/16/2025 11:20",
    duration: "2Hour13Minute"
  },
  {
    lat: 52.862058,
    lng: -104.608380,
    start: "10/16/2025 11:20",
    end: "10/16/2025 12:21",
    duration: "1Hour1Minute"
  },
  {
    lat: 52.861918,
    lng: -104.608267,
    start: "10/16/2025 16:33",
    end: "10/17/2025 7:46",
    duration: "15Hour12Minute"
  },
  {
    lat: 52.872602,
    lng: -104.616850,
    start: "10/17/2025 7:53",
    end: "10/17/2025 8:06",
    duration: "12Minute"
  },
  {
    lat: 52.861930,
    lng: -104.608182,
    start: "10/17/2025 8:35",
    end: "10/17/2025 11:51",
    duration: "3Hour15Minute"
  },
  {
    lat: 52.917998,
    lng: -104.180383,
    start: "10/17/2025 12:20",
    end: "10/17/2025 13:56",
    duration: "1Hour36Minute"
  },
  {
    lat: 52.861875,
    lng: -104.608127,
    start: "10/17/2025 15:34",
    end: "10/17/2025 15:41",
    duration: "8Minute"
  },
  {
    lat: 52.861947,
    lng: -104.608425,
    start: "10/17/2025 15:46",
    end: "10/17/2025 16:20",
    duration: "34Minute"
  },
  {
    lat: 52.861918,
    lng: -104.608247,
    start: "10/17/2025 16:31",
    end: "10/17/2025 17:31",
    duration: "59Minute"
  },
  {
    lat: 52.865022,
    lng: -104.600972,
    start: "10/17/2025 17:40",
    end: "10/17/2025 17:51",
    duration: "11Minute"
  },
  {
    lat: 52.861938,
    lng: -104.608263,
    start: "10/17/2025 17:54",
    end: "10/17/2025 18:28",
    duration: "34Minute"
  },
  {
    lat: 52.917975,
    lng: -104.180400,
    start: "10/17/2025 19:02",
    end: "10/17/2025 19:36",
    duration: "34Minute"
  },
  {
    lat: 53.150622,
    lng: -104.319075,
    start: "10/17/2025 20:08",
    end: "10/17/2025 20:13",
    duration: "5Minute"
  },
  {
    lat: 52.861883,
    lng: -104.607987,
    start: "10/18/2025 2:19",
    end: "10/18/2025 8:57",
    duration: "6Hour38Minute"
  },
  {
    lat: 52.861775,
    lng: -104.608253,
    start: "10/18/2025 8:57",
    end: "10/18/2025 11:46",
    duration: "2Hour49Minute"
  },
  {
    lat: 53.150042,
    lng: -104.319200,
    start: "10/18/2025 12:26",
    end: "10/18/2025 14:13",
    duration: "1Hour47Minute"
  },
  {
    lat: 52.860848,
    lng: -104.614973,
    start: "10/18/2025 15:15",
    end: "10/18/2025 15:20",
    duration: "5Minute"
  },
  {
    lat: 52.861880,
    lng: -104.608075,
    start: "10/18/2025 15:23",
    end: "10/19/2025 0:44",
    duration: "9Hour21Minute"
  },
  {
    lat: 53.150210,
    lng: -104.319227,
    start: "10/19/2025 1:19",
    end: "10/19/2025 3:51",
    duration: "2Hour32Minute"
  },
  {
    lat: 52.861897,
    lng: -104.607960,
    start: "10/19/2025 4:34",
    end: "10/19/2025 7:35",
    duration: "3Hour1Minute"
  },
  {
    lat: 53.150160,
    lng: -104.319173,
    start: "10/19/2025 8:13",
    end: "10/19/2025 10:29",
    duration: "2Hour17Minute"
  },
  {
    lat: 52.861892,
    lng: -104.608168,
    start: "10/19/2025 11:21",
    end: "10/19/2025 17:15",
    duration: "5Hour54Minute"
  },
  {
    lat: 53.150153,
    lng: -104.319205,
    start: "10/19/2025 17:50",
    end: "10/19/2025 18:05",
    duration: "14Minute"
  },
  {
    lat: 52.872337,
    lng: -104.616657,
    start: "10/19/2025 21:00",
    end: "10/19/2025 21:06",
    duration: "6Minute"
  },
  {
    lat: 52.861888,
    lng: -104.608052,
    start: "10/19/2025 21:12",
    end: "10/20/2025 2:58",
    duration: "5Hour46Minute"
  },
  {
    lat: 53.150238,
    lng: -104.319085,
    start: "10/20/2025 4:18",
    end: "10/20/2025 6:28",
    duration: "2Hour10Minute"
  },
  {
    lat: 52.861955,
    lng: -104.608160,
    start: "10/20/2025 7:14",
    end: "10/20/2025 7:33",
    duration: "19Minute"
  },
  {
    lat: 52.872615,
    lng: -104.616848,
    start: "10/20/2025 7:43",
    end: "10/20/2025 8:23",
    duration: "40Minute"
  },
  {
    lat: 52.866607,
    lng: -104.594695,
    start: "10/20/2025 8:31",
    end: "10/20/2025 9:27",
    duration: "56Minute"
  },
  {
    lat: 52.852723,
    lng: -104.589440,
    start: "10/20/2025 9:32",
    end: "10/20/2025 9:38",
    duration: "6Minute"
  },
  {
    lat: 52.866372,
    lng: -104.594762,
    start: "10/20/2025 9:42",
    end: "10/20/2025 12:03",
    duration: "2Hour21Minute"
  },
  {
    lat: 52.866485,
    lng: -104.594817,
    start: "10/20/2025 12:05",
    end: "10/20/2025 12:13",
    duration: "7Minute"
  },
  {
    lat: 53.151342,
    lng: -104.319020,
    start: "10/20/2025 12:58",
    end: "10/20/2025 14:03",
    duration: "1Hour5Minute"
  },
  {
    lat: 52.866493,
    lng: -104.594752,
    start: "10/20/2025 15:48",
    end: "10/20/2025 15:54",
    duration: "5Minute"
  },
  {
    lat: 53.154492,
    lng: -104.319195,
    start: "10/20/2025 16:43",
    end: "10/20/2025 20:25",
    duration: "3Hour43Minute"
  },
  {
    lat: 53.103735,
    lng: -104.270083,
    start: "10/20/2025 21:04",
    end: "10/20/2025 21:09",
    duration: "6Minute"
  },
  {
    lat: 53.103653,
    lng: -104.156277,
    start: "10/20/2025 21:33",
    end: "10/20/2025 21:55",
    duration: "22Minute"
  },
  {
    lat: 53.103642,
    lng: -104.155458,
    start: "10/20/2025 22:05",
    end: "10/20/2025 22:12",
    duration: "7Minute"
  },
  {
    lat: 53.103640,
    lng: -104.155540,
    start: "10/20/2025 22:27",
    end: "10/20/2025 22:38",
    duration: "12Minute"
  },
  {
    lat: 52.856120,
    lng: -104.594435,
    start: "10/20/2025 23:41",
    end: "10/20/2025 23:48",
    duration: "7Minute"
  },
  {
    lat: 52.859888,
    lng: -104.600927,
    start: "10/21/2025 0:17",
    end: "10/21/2025 9:34",
    duration: "9Hour17Minute"
  },
  {
    lat: 53.104128,
    lng: -104.148250,
    start: "10/21/2025 10:11",
    end: "10/21/2025 11:27",
    duration: "1Hour16Minute"
  },
  {
    lat: 53.199790,
    lng: -105.760312,
    start: "10/21/2025 13:45",
    end: "10/21/2025 14:11",
    duration: "26Minute"
  },
  {
    lat: 53.187488,
    lng: -105.758510,
    start: "10/21/2025 14:15",
    end: "10/21/2025 14:22",
    duration: "8Minute"
  },
  {
    lat: 53.180348,
    lng: -105.754967,
    start: "10/21/2025 14:26",
    end: "10/21/2025 15:21",
    duration: "56Minute"
  },
  {
    lat: 53.182888,
    lng: -105.759580,
    start: "10/21/2025 15:23",
    end: "10/21/2025 15:28",
    duration: "5Minute"
  },
  {
    lat: 52.847715,
    lng: -104.046748,
    start: "10/21/2025 20:30",
    end: "10/21/2025 20:54",
    duration: "25Minute"
  },
  {
    lat: 52.848242,
    lng: -104.045367,
    start: "10/21/2025 20:55",
    end: "10/21/2025 21:48",
    duration: "53Minute"
  },
  {
    lat: 52.841422,
    lng: -104.052042,
    start: "10/21/2025 21:51",
    end: "10/21/2025 22:00",
    duration: "9Minute"
  },
  {
    lat: 52.842330,
    lng: -104.034880,
    start: "10/21/2025 22:02",
    end: "10/21/2025 22:07",
    duration: "5Minute"
  },
  {
    lat: 52.847810,
    lng: -104.047178,
    start: "10/21/2025 22:14",
    end: "10/22/2025 20:34",
    duration: "22Hour20Minute"
  },
  {
    lat: 52.859965,
    lng: -104.611740,
    start: "10/22/2025 20:34",
    end: "10/23/2025 20:35",
    duration: "1Day0Hour1Minute"
  },
  {
    lat: 52.866350,
    lng: -104.594933,
    start: "10/23/2025 20:35",
    end: "10/24/2025 20:37",
    duration: "1Day0Hour2Minute"
  },
  {
    lat: 52.868833,
    lng: -104.606353,
    start: "10/24/2025 20:37",
    end: "10/25/2025 20:41",
    duration: "1Day0Hour3Minute"
  },
  {
    lat: 52.859683,
    lng: -104.600815,
    start: "10/25/2025 20:43",
    end: "10/26/2025 10:19",
    duration: "13Hour36Minute"
  },
  {
    lat: 52.860855,
    lng: -104.602033,
    start: "10/26/2025 10:23",
    end: "10/26/2025 17:22",
    duration: "6Hour59Minute"
  },
  {
    lat: 52.859848,
    lng: -104.600952,
    start: "10/26/2025 17:22",
    end: "10/26/2025 19:22",
    duration: "2Hour0Minute"
  },
];
