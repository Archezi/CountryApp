angular.module('app')
.controller('SampleController', ['$scope' , '$filter' , function($scope) {
 
  

  $scope.countries = [
 {
   "Number": 1,
   "COUNTRY": "European UnionEuropean Union",
   "AMOUNT": "$16.63 trillion",
   "DATE": 2012
 },
 {
   "Number": 2,
   "COUNTRY": "United StatesUnited States",
   "AMOUNT": "$15.68 trillion",
   "DATE": 2012
 },
 {
   "Number": 3,
   "COUNTRY": "ChinaChina",
   "AMOUNT": "$8.36 trillion",
   "DATE": 2012
 },
 {
   "Number": 4,
   "COUNTRY": "JapanJapan",
   "AMOUNT": "$5.96 trillion",
   "DATE": 2012
 },
 {
   "Number": 5,
   "COUNTRY": "GermanyGermany",
   "AMOUNT": "$3.40 trillion",
   "DATE": 2012
 },
 {
   "Number": 6,
   "COUNTRY": "FranceFrance",
   "AMOUNT": "$2.61 trillion",
   "DATE": 2012
 },
 {
   "Number": 7,
   "COUNTRY": "United KingdomUnited Kingdom",
   "AMOUNT": "$2.44 trillion",
   "DATE": 2012
 },
 {
   "Number": 8,
   "COUNTRY": "BrazilBrazil",
   "AMOUNT": "$2.25 trillion",
   "DATE": 2012
 },
 {
   "Number": 9,
   "COUNTRY": "RussiaRussia",
   "AMOUNT": "$2.01 trillion",
   "DATE": 2012
 },
 {
   "Number": 10,
   "COUNTRY": "ItalyItaly",
   "AMOUNT": "$2.01 trillion",
   "DATE": 2012
 },
 {
   "Number": 11,
   "COUNTRY": "IndiaIndia",
   "AMOUNT": "$1.84 trillion",
   "DATE": 2012
 },
 {
   "Number": 12,
   "COUNTRY": "CanadaCanada",
   "AMOUNT": "$1.82 trillion",
   "DATE": 2012
 },
 {
   "Number": 13,
   "COUNTRY": "AustraliaAustralia",
   "AMOUNT": "$1.52 trillion",
   "DATE": 2012
 },
 {
   "Number": 14,
   "COUNTRY": "SpainSpain",
   "AMOUNT": "$1.35 trillion",
   "DATE": 2012
 },
 {
   "Number": 15,
   "COUNTRY": "MexicoMexico",
   "AMOUNT": "$1.18 trillion",
   "DATE": 2012
 },
 {
   "Number": 16,
   "COUNTRY": "South KoreaSouth Korea",
   "AMOUNT": "$1.13 trillion",
   "DATE": 2012
 },
 {
   "Number": 17,
   "COUNTRY": "IndonesiaIndonesia",
   "AMOUNT": "$878.19 billion",
   "DATE": 2012
 },
 {
   "Number": 18,
   "COUNTRY": "TurkeyTurkey",
   "AMOUNT": "$789.26 billion",
   "DATE": 2012
 },
 {
   "Number": 19,
   "COUNTRY": "NetherlandsNetherlands",
   "AMOUNT": "$772.23 billion",
   "DATE": 2012
 },
 {
   "Number": 20,
   "COUNTRY": "Saudi ArabiaSaudi Arabia",
   "AMOUNT": "$711.05 billion",
   "DATE": 2012
 },
 {
   "Number": 21,
   "COUNTRY": "SwitzerlandSwitzerland",
   "AMOUNT": "$632.19 billion",
   "DATE": 2012
 },
 {
   "Number": 22,
   "COUNTRY": "SwedenSweden",
   "AMOUNT": "$525.74 billion",
   "DATE": 2012
 },
 {
   "Number": 23,
   "COUNTRY": "IranIran",
   "AMOUNT": "$514.06 billion",
   "DATE": 2011
 },
 {
   "Number": 24,
   "COUNTRY": "NorwayNorway",
   "AMOUNT": "$499.67 billion",
   "DATE": 2012
 },
 {
   "Number": 25,
   "COUNTRY": "PolandPoland",
   "AMOUNT": "$489.80 billion",
   "DATE": 2012
 },
 {
   "Number": 26,
   "COUNTRY": "BelgiumBelgium",
   "AMOUNT": "$483.71 billion",
   "DATE": 2012
 },
 {
   "Number": 27,
   "COUNTRY": "ArgentinaArgentina",
   "AMOUNT": "$470.53 billion",
   "DATE": 2012
 },
 {
   "Number": 28,
   "COUNTRY": "AustriaAustria",
   "AMOUNT": "$399.65 billion",
   "DATE": 2012
 },
 {
   "Number": 29,
   "COUNTRY": "South AfricaSouth Africa",
   "AMOUNT": "$384.31 billion",
   "DATE": 2012
 },
 {
   "Number": 30,
   "COUNTRY": "VenezuelaVenezuela",
   "AMOUNT": "$381.29 billion",
   "DATE": 2012
 },
 {
   "Number": 31,
   "COUNTRY": "ColombiaColombia",
   "AMOUNT": "$369.79 billion",
   "DATE": 2012
 },
 {
   "Number": 32,
   "COUNTRY": "ThailandThailand",
   "AMOUNT": "$365.97 billion",
   "DATE": 2012
 },
 {
   "Number": 33,
   "COUNTRY": "United Arab EmiratesUAE",
   "AMOUNT": "$348.59 billion",
   "DATE": 2011
 },
 {
   "Number": 34,
   "COUNTRY": "DenmarkDenmark",
   "AMOUNT": "$314.24 billion",
   "DATE": 2012
 },
 {
   "Number": 35,
   "COUNTRY": "MalaysiaMalaysia",
   "AMOUNT": "$303.53 billion",
   "DATE": 2012
 },
 {
   "Number": 36,
   "COUNTRY": "SingaporeSingapore",
   "AMOUNT": "$274.70 billion",
   "DATE": 2012
 },
 {
   "Number": 37,
   "COUNTRY": "ChileChile",
   "AMOUNT": "$268.19 billion",
   "DATE": 2012
 },
 {
   "Number": 38,
   "COUNTRY": "Hong KongHong Kong",
   "AMOUNT": "$263.26 billion",
   "DATE": 2012
 },
 {
   "Number": 39,
   "COUNTRY": "NigeriaNigeria",
   "AMOUNT": "$262.61 billion",
   "DATE": 2012
 },
 {
   "Number": 40,
   "COUNTRY": "IsraelIsrael",
   "AMOUNT": "$258.22 billion",
   "DATE": 2011
 },
 {
   "Number": 41,
   "COUNTRY": "EgyptEgypt",
   "AMOUNT": "$257.29 billion",
   "DATE": 2012
 },
 {
   "Number": 42,
   "COUNTRY": "PhilippinesPhilippines",
   "AMOUNT": "$250.18 billion",
   "DATE": 2012
 },
 {
   "Number": 43,
   "COUNTRY": "FinlandFinland",
   "AMOUNT": "$250.02 billion",
   "DATE": 2012
 },
 {
   "Number": 44,
   "COUNTRY": "GreeceGreece",
   "AMOUNT": "$249.10 billion",
   "DATE": 2012
 },
 {
   "Number": 45,
   "COUNTRY": "PakistanPakistan",
   "AMOUNT": "$231.18 billion",
   "DATE": 2012
 },
 {
   "Number": 46,
   "COUNTRY": "PortugalPortugal",
   "AMOUNT": "$212.45 billion",
   "DATE": 2012
 },
 {
   "Number": 47,
   "COUNTRY": "IrelandIreland",
   "AMOUNT": "$210.33 billion",
   "DATE": 2012
 },
 {
   "Number": 48,
   "COUNTRY": "IraqIraq",
   "AMOUNT": "$210.28 billion",
   "DATE": 2012
 },
 {
   "Number": 49,
   "COUNTRY": "AlgeriaAlgeria",
   "AMOUNT": "$207.96 billion",
   "DATE": 2012
 },
 {
   "Number": 50,
   "COUNTRY": "KazakhstanKazakhstan",
   "AMOUNT": "$200.48 billion",
   "DATE": 2012
 },
 {
   "Number": 51,
   "COUNTRY": "PeruPeru",
   "AMOUNT": "$196.96 billion",
   "DATE": 2012
 },
 {
   "Number": 52,
   "COUNTRY": "Czech RepublicCzech Republic",
   "AMOUNT": "$195.66 billion",
   "DATE": 2012
 },
 {
   "Number": 53,
   "COUNTRY": "UkraineUkraine",
   "AMOUNT": "$176.31 billion",
   "DATE": 2012
 },
 {
   "Number": 54,
   "COUNTRY": "QatarQatar",
   "AMOUNT": "$171.48 billion",
   "DATE": 2011
 },
 {
   "Number": 55,
   "COUNTRY": "RomaniaRomania",
   "AMOUNT": "$169.40 billion",
   "DATE": 2012
 },
 {
   "Number": 56,
   "COUNTRY": "New ZealandNew Zealand",
   "AMOUNT": "$167.35 billion",
   "DATE": 2012
 },
 {
   "Number": 57,
   "COUNTRY": "KuwaitKuwait",
   "AMOUNT": "$160.91 billion",
   "DATE": 2011
 },
 {
   "Number": 58,
   "COUNTRY": "VietnamVietnam",
   "AMOUNT": "$141.67 billion",
   "DATE": 2012
 },
 {
   "Number": 59,
   "COUNTRY": "HungaryHungary",
   "AMOUNT": "$125.51 billion",
   "DATE": 2012
 },
 {
   "Number": 60,
   "COUNTRY": "BangladeshBangladesh",
   "AMOUNT": "$115.61 billion",
   "DATE": 2012
 },
 {
   "Number": 61,
   "COUNTRY": "AngolaAngola",
   "AMOUNT": "$114.20 billion",
   "DATE": 2012
 },
 {
   "Number": 62,
   "COUNTRY": "Puerto RicoPuerto Rico",
   "AMOUNT": "$101.50 billion",
   "DATE": 2012
 },
 {
   "Number": 63,
   "COUNTRY": "MoroccoMorocco",
   "AMOUNT": "$95.98 billion",
   "DATE": 2012
 },
 {
   "Number": 64,
   "COUNTRY": "SlovakiaSlovakia",
   "AMOUNT": "$91.60 billion",
   "DATE": 2012
 },
 {
   "Number": 65,
   "COUNTRY": "EcuadorEcuador",
   "AMOUNT": "$84.04 billion",
   "DATE": 2012
 },
 {
   "Number": 66,
   "COUNTRY": "SyriaSyria",
   "AMOUNT": "$73.67 billion",
   "DATE": 2012
 },
 {
   "Number": 67,
   "COUNTRY": "OmanOman",
   "AMOUNT": "$69.97 billion",
   "DATE": 2011
 },
 {
   "Number": 68,
   "COUNTRY": "AzerbaijanAzerbaijan",
   "AMOUNT": "$68.73 billion",
   "DATE": 2012
 },
 {
   "Number": 69,
   "COUNTRY": "BelarusBelarus",
   "AMOUNT": "$63.27 billion",
   "DATE": 2012
 },
 {
   "Number": 70,
   "COUNTRY": "LibyaLibya",
   "AMOUNT": "$62.36 billion",
   "DATE": 2009
 },
 {
   "Number": 71,
   "COUNTRY": "CubaCuba",
   "AMOUNT": "$60.81 billion",
   "DATE": 2008
 },
 {
   "Number": 72,
   "COUNTRY": "Sri LankaSri Lanka",
   "AMOUNT": "$59.42 billion",
   "DATE": 2012
 },
 {
   "Number": 73,
   "COUNTRY": "Dominican RepublicDominican Rep.",
   "AMOUNT": "$58.95 billion",
   "DATE": 2012
 },
 {
   "Number": 74,
   "COUNTRY": "SudanSudan",
   "AMOUNT": "$58.77 billion",
   "DATE": 2012
 },
 {
   "Number": 75,
   "COUNTRY": "LuxembourgLuxembourg",
   "AMOUNT": "$57.12 billion",
   "DATE": 2012
 },
 {
   "Number": 76,
   "COUNTRY": "CroatiaCroatia",
   "AMOUNT": "$56.44 billion",
   "DATE": 2012
 },
 {
   "Number": 77,
   "COUNTRY": "UzbekistanUzbekistan",
   "AMOUNT": "$51.11 billion",
   "DATE": 2012
 },
 {
   "Number": 78,
   "COUNTRY": "BulgariaBulgaria",
   "AMOUNT": "$51.03 billion",
   "DATE": 2012
 },
 {
   "Number": 79,
   "COUNTRY": "GuatemalaGuatemala",
   "AMOUNT": "$50.54 billion",
   "DATE": 2012
 },
 {
   "Number": 80,
   "COUNTRY": "UruguayUruguay",
   "AMOUNT": "$49.06 billion",
   "DATE": 2012
 },
 {
   "Number": 81,
   "COUNTRY": "TunisiaTunisia",
   "AMOUNT": "$45.66 billion",
   "DATE": 2012
 },
 {
   "Number": 82,
   "COUNTRY": "SloveniaSlovenia",
   "AMOUNT": "$45.28 billion",
   "DATE": 2012
 },
 {
   "Number": 83,
   "COUNTRY": "Costa RicaCosta Rica",
   "AMOUNT": "$45.15 billion",
   "DATE": 2012
 },
 {
   "Number": 84,
   "COUNTRY": "MacauMacau",
   "AMOUNT": "$43.58 billion",
   "DATE": 2012
 },
 {
   "Number": 85,
   "COUNTRY": "EthiopiaEthiopia",
   "AMOUNT": "$43.13 billion",
   "DATE": 2012
 },
 {
   "Number": 86,
   "COUNTRY": "LebanonLebanon",
   "AMOUNT": "$42.95 billion",
   "DATE": 2012
 },
 {
   "Number": 87,
   "COUNTRY": "LithuaniaLithuania",
   "AMOUNT": "$42.09 billion",
   "DATE": 2012
 },
 {
   "Number": 88,
   "COUNTRY": "GhanaGhana",
   "AMOUNT": "$40.71 billion",
   "DATE": 2012
 },
 {
   "Number": 89,
   "COUNTRY": "SerbiaSerbia",
   "AMOUNT": "$37.49 billion",
   "DATE": 2012
 },
 {
   "Number": 90,
   "COUNTRY": "KenyaKenya",
   "AMOUNT": "$37.34 billion",
   "DATE": 2012
 },
 {
   "Number": 91,
   "COUNTRY": "PanamaPanama",
   "AMOUNT": "$36.25 billion",
   "DATE": 2012
 },
 {
   "Number": 92,
   "COUNTRY": "YemenYemen",
   "AMOUNT": "$35.65 billion",
   "DATE": 2012
 },
 {
   "Number": 93,
   "COUNTRY": "TurkmenistanTurkmenistan",
   "AMOUNT": "$33.68 billion",
   "DATE": 2012
 },
 {
   "Number": 94,
   "COUNTRY": "JordanJordan",
   "AMOUNT": "$31.24 billion",
   "DATE": 2012
 },
 {
   "Number": 95,
   "COUNTRY": "BahrainBahrain",
   "AMOUNT": "$29.04 billion",
   "DATE": 2011
 },
 {
   "Number": 96,
   "COUNTRY": "LatviaLatvia",
   "AMOUNT": "$28.32 billion",
   "DATE": 2012
 },
 {
   "Number": 97,
   "COUNTRY": "TanzaniaTanzania",
   "AMOUNT": "$28.25 billion",
   "DATE": 2012
 },
 {
   "Number": 98,
   "COUNTRY": "BoliviaBolivia",
   "AMOUNT": "$27.04 billion",
   "DATE": 2012
 },
 {
   "Number": 99,
   "COUNTRY": "ParaguayParaguay",
   "AMOUNT": "$25.50 billion",
   "DATE": 2012
 },
 {
   "Number": 100,
   "COUNTRY": "CameroonCameroon",
   "AMOUNT": "$24.98 billion",
   "DATE": 2012
 },
 {
   "Number": 101,
   "COUNTRY": "Cote d'IvoireCote d'Ivoire",
   "AMOUNT": "$24.68 billion",
   "DATE": 2012
 },
 {
   "Number": 102,
   "COUNTRY": "Trinidad and TobagoTrinidad+",
   "AMOUNT": "$23.99 billion",
   "DATE": 2012
 },
 {
   "Number": 103,
   "COUNTRY": "El SalvadorEl Salvador",
   "AMOUNT": "$23.86 billion",
   "DATE": 2012
 },
 {
   "Number": 104,
   "COUNTRY": "CyprusCyprus",
   "AMOUNT": "$22.98 billion",
   "DATE": 2012
 },
 {
   "Number": 105,
   "COUNTRY": "EstoniaEstonia",
   "AMOUNT": "$21.85 billion",
   "DATE": 2012
 },
 {
   "Number": 106,
   "COUNTRY": "ZambiaZambia",
   "AMOUNT": "$20.68 billion",
   "DATE": 2012
 },
 {
   "Number": 107,
   "COUNTRY": "UgandaUganda",
   "AMOUNT": "$19.88 billion",
   "DATE": 2012
 },
 {
   "Number": 108,
   "COUNTRY": "NepalNepal",
   "AMOUNT": "$19.41 billion",
   "DATE": 2012
 },
 {
   "Number": 109,
   "COUNTRY": "GabonGabon",
   "AMOUNT": "$18.66 billion",
   "DATE": 2012
 },
 {
   "Number": 110,
   "COUNTRY": "HondurasHonduras",
   "AMOUNT": "$18.53 billion",
   "DATE": 2012
 },
 {
   "Number": 111,
   "COUNTRY": "AfghanistanAfghanistan",
   "AMOUNT": "$18.03 billion",
   "DATE": 2011
 },
 {
   "Number": 112,
   "COUNTRY": "Democratic Republic of the CongoCongo, DR.",
   "AMOUNT": "$17.87 billion",
   "DATE": 2012
 },
 {
   "Number": 113,
   "COUNTRY": "Equatorial GuineaEqu. Guinea",
   "AMOUNT": "$17.70 billion",
   "DATE": 2012
 },
 {
   "Number": 114,
   "COUNTRY": "Bosnia and HerzegovinaBosnia and Herzegovina",
   "AMOUNT": "$17.05 billion",
   "DATE": 2012
 },
 {
   "Number": 115,
   "COUNTRY": "BruneiBrunei",
   "AMOUNT": "$16.95 billion",
   "DATE": 2012
 },
 {
   "Number": 116,
   "COUNTRY": "GeorgiaGeorgia",
   "AMOUNT": "$15.83 billion",
   "DATE": 2012
 },
 {
   "Number": 117,
   "COUNTRY": "Papua New GuineaPapua NG",
   "AMOUNT": "$15.65 billion",
   "DATE": 2012
 },
 {
   "Number": 118,
   "COUNTRY": "JamaicaJamaica",
   "AMOUNT": "$14.84 billion",
   "DATE": 2012
 },
 {
   "Number": 119,
   "COUNTRY": "MozambiqueMozambique",
   "AMOUNT": "$14.59 billion",
   "DATE": 2012
 },
 {
   "Number": 120,
   "COUNTRY": "BotswanaBotswana",
   "AMOUNT": "$14.41 billion",
   "DATE": 2012
 },
 {
   "Number": 121,
   "COUNTRY": "SenegalSenegal",
   "AMOUNT": "$14.16 billion",
   "DATE": 2012
 },
 {
   "Number": 122,
   "COUNTRY": "CambodiaCambodia",
   "AMOUNT": "$14.06 billion",
   "DATE": 2012
 },
 {
   "Number": 123,
   "COUNTRY": "Republic of the CongoCongo Rep.",
   "AMOUNT": "$13.68 billion",
   "DATE": 2012
 },
 {
   "Number": 124,
   "COUNTRY": "IcelandIceland",
   "AMOUNT": "$13.66 billion",
   "DATE": 2012
 },
 {
   "Number": 125,
   "COUNTRY": "AlbaniaAlbania",
   "AMOUNT": "$13.12 billion",
   "DATE": 2012
 },
 {
   "Number": 126,
   "COUNTRY": "NamibiaNamibia",
   "AMOUNT": "$13.07 billion",
   "DATE": 2012
 },
 {
   "Number": 127,
   "COUNTRY": "Channel IslandsChannel Islands",
   "AMOUNT": "$11.51 billion",
   "DATE": 2007
 },
 {
   "Number": 128,
   "COUNTRY": "ChadChad",
   "AMOUNT": "$11.02 billion",
   "DATE": 2012
 },
 {
   "Number": 129,
   "COUNTRY": "ZimbabweZimbabwe",
   "AMOUNT": "$10.81 billion",
   "DATE": 2012
 },
 {
   "Number": 130,
   "COUNTRY": "NicaraguaNicaragua",
   "AMOUNT": "$10.51 billion",
   "DATE": 2012
 },
 {
   "Number": 131,
   "COUNTRY": "MauritiusMauritius",
   "AMOUNT": "$10.49 billion",
   "DATE": 2012
 },
 {
   "Number": 132,
   "COUNTRY": "Burkina FasoBurkina Faso",
   "AMOUNT": "$10.44 billion",
   "DATE": 2012
 },
 {
   "Number": 133,
   "COUNTRY": "MaliMali",
   "AMOUNT": "$10.31 billion",
   "DATE": 2012
 },
 {
   "Number": 134,
   "COUNTRY": "MongoliaMongolia",
   "AMOUNT": "$10.27 billion",
   "DATE": 2012
 },
 {
   "Number": 135,
   "COUNTRY": "MadagascarMadagascar",
   "AMOUNT": "$9.98 billion",
   "DATE": 2012
 },
 {
   "Number": 136,
   "COUNTRY": "ArmeniaArmenia",
   "AMOUNT": "$9.91 billion",
   "DATE": 2012
 },
 {
   "Number": 137,
   "COUNTRY": "Republic of MacedoniaMacedonia Rep.",
   "AMOUNT": "$9.62 billion",
   "DATE": 2012
 },
 {
   "Number": 138,
   "COUNTRY": "South SudanSouth Sudan",
   "AMOUNT": "$9.34 billion",
   "DATE": 2012
 },
 {
   "Number": 139,
   "COUNTRY": "LaosLaos",
   "AMOUNT": "$9.30 billion",
   "DATE": 2012
 },
 {
   "Number": 140,
   "COUNTRY": "MaltaMalta",
   "AMOUNT": "$8.72 billion",
   "DATE": 2012
 },
 {
   "Number": 141,
   "COUNTRY": "The BahamasThe Bahamas",
   "AMOUNT": "$8.15 billion",
   "DATE": 2012
 },
 {
   "Number": 142,
   "COUNTRY": "HaitiHaiti",
   "AMOUNT": "$7.84 billion",
   "DATE": 2012
 },
 {
   "Number": 143,
   "COUNTRY": "BeninBenin",
   "AMOUNT": "$7.56 billion",
   "DATE": 2012
 },
 {
   "Number": 144,
   "COUNTRY": "MoldovaMoldova",
   "AMOUNT": "$7.25 billion",
   "DATE": 2012
 },
 {
   "Number": 145,
   "COUNTRY": "RwandaRwanda",
   "AMOUNT": "$7.10 billion",
   "DATE": 2012
 },
 {
   "Number": 146,
   "COUNTRY": "TajikistanTajikistan",
   "AMOUNT": "$6.99 billion",
   "DATE": 2012
 },
 {
   "Number": 147,
   "COUNTRY": "GuineaGuinea",
   "AMOUNT": "$6.77 billion",
   "DATE": 2012
 },
 {
   "Number": 148,
   "COUNTRY": "NigerNiger",
   "AMOUNT": "$6.57 billion",
   "DATE": 2012
 },
 {
   "Number": 149,
   "COUNTRY": "KyrgyzstanKyrgyzstan",
   "AMOUNT": "$6.47 billion",
   "DATE": 2012
 },
 {
   "Number": 150,
   "COUNTRY": "KosovoKosovo",
   "AMOUNT": "$6.24 billion",
   "DATE": 2012
 },
 {
   "Number": 151,
   "COUNTRY": "MonacoMonaco",
   "AMOUNT": "$6.07 billion",
   "DATE": 2011
 },
 {
   "Number": 152,
   "COUNTRY": "BermudaBermuda",
   "AMOUNT": "$5.56 billion",
   "DATE": 2011
 },
 {
   "Number": 153,
   "COUNTRY": "LiechtensteinLiechtenstein",
   "AMOUNT": "$4.83 billion",
   "DATE": 2009
 },
 {
   "Number": 154,
   "COUNTRY": "SurinameSuriname",
   "AMOUNT": "$4.74 billion",
   "DATE": 2012
 },
 {
   "Number": 155,
   "COUNTRY": "MalawiMalawi",
   "AMOUNT": "$4.26 billion",
   "DATE": 2012
 },
 {
   "Number": 156,
   "COUNTRY": "MontenegroMontenegro",
   "AMOUNT": "$4.23 billion",
   "DATE": 2012
 },
 {
   "Number": 157,
   "COUNTRY": "MauritaniaMauritania",
   "AMOUNT": "$4.20 billion",
   "DATE": 2012
 },
 {
   "Number": 158,
   "COUNTRY": "Isle of ManIsle of Man",
   "AMOUNT": "$4.08 billion",
   "DATE": 2007
 },
 {
   "Number": 159,
   "COUNTRY": "FijiFiji",
   "AMOUNT": "$3.88 billion",
   "DATE": 2012
 },
 {
   "Number": 160,
   "COUNTRY": "TogoTogo",
   "AMOUNT": "$3.81 billion",
   "DATE": 2012
 },
 {
   "Number": 161,
   "COUNTRY": "Sierra LeoneSierra Leone",
   "AMOUNT": "$3.80 billion",
   "DATE": 2012
 },
 {
   "Number": 162,
   "COUNTRY": "SwazilandSwaziland",
   "AMOUNT": "$3.75 billion",
   "DATE": 2012
 },
 {
   "Number": 163,
   "COUNTRY": "AndorraAndorra",
   "AMOUNT": "$3.71 billion",
   "DATE": 2008
 },
 {
   "Number": 164,
   "COUNTRY": "BarbadosBarbados",
   "AMOUNT": "$3.69 billion",
   "DATE": 2011
 },
 {
   "Number": 165,
   "COUNTRY": "French PolynesiaFr. Polynesia",
   "AMOUNT": "$3.45 billion",
   "DATE": 2000
 },
 {
   "Number": 166,
   "COUNTRY": "EritreaEritrea",
   "AMOUNT": "$3.09 billion",
   "DATE": 2012
 },
 {
   "Number": 167,
   "COUNTRY": "GuyanaGuyana",
   "AMOUNT": "$2.85 billion",
   "DATE": 2012
 },
 {
   "Number": 168,
   "COUNTRY": "New CaledoniaNew Caledonia",
   "AMOUNT": "$2.68 billion",
   "DATE": 2000
 },
 {
   "Number": 169,
   "COUNTRY": "ArubaAruba",
   "AMOUNT": "$2.58 billion",
   "DATE": 2011
 },
 {
   "Number": 170,
   "COUNTRY": "BurundiBurundi",
   "AMOUNT": "$2.47 billion",
   "DATE": 2012
 },
 {
   "Number": 171,
   "COUNTRY": "LesothoLesotho",
   "AMOUNT": "$2.45 billion",
   "DATE": 2012
 },
 {
   "Number": 172,
   "COUNTRY": "MaldivesMaldives",
   "AMOUNT": "$2.22 billion",
   "DATE": 2012
 },
 {
   "Number": 173,
   "COUNTRY": "Faeroe IslandsFaeroe Islands",
   "AMOUNT": "$2.20 billion",
   "DATE": 2009
 },
 {
   "Number": 174,
   "COUNTRY": "Central African RepublicCentral Africa",
   "AMOUNT": "$2.14 billion",
   "DATE": 2012
 },
 {
   "Number": 175,
   "COUNTRY": "San MarinoSan Marino",
   "AMOUNT": "$1.90 billion",
   "DATE": 2008
 },
 {
   "Number": 176,
   "COUNTRY": "Cape VerdeCape Verde",
   "AMOUNT": "$1.90 billion",
   "DATE": 2012
 },
 {
   "Number": 177,
   "COUNTRY": "BhutanBhutan",
   "AMOUNT": "$1.78 billion",
   "DATE": 2012
 },
 {
   "Number": 178,
   "COUNTRY": "LiberiaLiberia",
   "AMOUNT": "$1.77 billion",
   "DATE": 2012
 },
 {
   "Number": 179,
   "COUNTRY": "BelizeBelize",
   "AMOUNT": "$1.45 billion",
   "DATE": 2011
 },
 {
   "Number": 180,
   "COUNTRY": "East TimorEast Timor",
   "AMOUNT": "$1.29 billion",
   "DATE": 2012
 },
 {
   "Number": 181,
   "COUNTRY": "GreenlandGreenland",
   "AMOUNT": "$1.27 billion",
   "DATE": 2009
 },
 {
   "Number": 182,
   "COUNTRY": "Saint LuciaSaint Lucia",
   "AMOUNT": "$1.19 billion",
   "DATE": 2012
 },
 {
   "Number": 183,
   "COUNTRY": "Antigua and BarbudaAntigua and Barbuda",
   "AMOUNT": "$1.18 billion",
   "DATE": 2012
 },
 {
   "Number": 184,
   "COUNTRY": "SeychellesSeychelles",
   "AMOUNT": "$1.03 billion",
   "DATE": 2012
 },
 {
   "Number": 185,
   "COUNTRY": "Cayman IslandsCayman Islands",
   "AMOUNT": "$1.01 billion",
   "DATE": 1996
 },
 {
   "Number": 186,
   "COUNTRY": "Solomon IslandsSolomon Islands",
   "AMOUNT": "$1.01 billion",
   "DATE": 2012
 },
 {
   "Number": 187,
   "COUNTRY": "The GambiaThe Gambia",
   "AMOUNT": "$917.29 million",
   "DATE": 2012
 },
 {
   "Number": 188,
   "COUNTRY": "SomaliaSomalia",
   "AMOUNT": "$917.04 million",
   "DATE": 1990
 },
 {
   "Number": 189,
   "COUNTRY": "Guinea-BissauGuinea-Bissau",
   "AMOUNT": "$897.41 million",
   "DATE": 2012
 },
 {
   "Number": 190,
   "COUNTRY": "DjiboutiDjibouti",
   "AMOUNT": "$847.92 million",
   "DATE": 2007
 },
 {
   "Number": 191,
   "COUNTRY": "GrenadaGrenada",
   "AMOUNT": "$789.54 million",
   "DATE": 2012
 },
 {
   "Number": 192,
   "COUNTRY": "VanuatuVanuatu",
   "AMOUNT": "$785.36 million",
   "DATE": 2012
 },
 {
   "Number": 193,
   "COUNTRY": "Saint Kitts and NevisSt Kitts+",
   "AMOUNT": "$748.49 million",
   "DATE": 2012
 },
 {
   "Number": 194,
   "COUNTRY": "Saint Vincent and the GrenadinesSt Vincent+",
   "AMOUNT": "$712.59 million",
   "DATE": 2012
 },
 {
   "Number": 195,
   "COUNTRY": "SamoaSamoa",
   "AMOUNT": "$677.04 million",
   "DATE": 2012
 },
 {
   "Number": 196,
   "COUNTRY": "ComorosComoros",
   "AMOUNT": "$595.90 million",
   "DATE": 2012
 },
 {
   "Number": 197,
   "COUNTRY": "DominicaDominica",
   "AMOUNT": "$479.64 million",
   "DATE": 2012
 },
 {
   "Number": 198,
   "COUNTRY": "TongaTonga",
   "AMOUNT": "$471.59 million",
   "DATE": 2012
 },
 {
   "Number": 199,
   "COUNTRY": "Federated States of MicronesiaMicronesia",
   "AMOUNT": "$327.20 million",
   "DATE": 2012
 },
 {
   "Number": 200,
   "COUNTRY": "Sao Tome and PrincipeSoa Tome+",
   "AMOUNT": "$263.73 million",
   "DATE": 2012
 },
 {
   "Number": 201,
   "COUNTRY": "PalauPalau",
   "AMOUNT": "$228.42 million",
   "DATE": 2012
 },
 {
   "Number": 202,
   "COUNTRY": "Marshall IslandsMarshall Isl.",
   "AMOUNT": "$186.90 million",
   "DATE": 2012
 },
 {
   "Number": 203,
   "COUNTRY": "KiribatiKiribati",
   "AMOUNT": "$175.71 million",
   "DATE": 2012
 },
 {
   "Number": 204,
   "COUNTRY": "TuvaluTuvalu",
   "AMOUNT": "$36.87 million",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Group of 7 countries (G7) averageGroup of 7 countries (G7) average (profile)",
   "AMOUNT": "$4.85 trillion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Non-religious countries averageNon-religious countries average (profile)",
   "AMOUNT": "$1.80 trillion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "High income OECD countries averageHigh income OECD countries average (profile)",
   "AMOUNT": "$1.46 trillion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Cold countries averageCold countries average (profile)",
   "AMOUNT": "$1.03 trillion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Heavily indebted countries averageHeavily indebted countries average (profile)",
   "AMOUNT": "$969.38 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Emerging markets averageEmerging markets average (profile)",
   "AMOUNT": "$865.57 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Western Europe averageWestern Europe average (profile)",
   "AMOUNT": "$795.61 billion",
   "DATE": 2007
 },
 {
   "Number": null,
   "COUNTRY": "East Asia and Pacific averageEast Asia and Pacific average (profile)",
   "AMOUNT": "$719.45 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "NATO countries averageNATO average (profile)",
   "AMOUNT": "$679.75 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Eurozone averageEurozone average (profile)",
   "AMOUNT": "$679.36 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "European Union averageEuropean Union average (profile)",
   "AMOUNT": "$594.05 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "South Asia averageSouth Asia average (profile)",
   "AMOUNT": "$547.57 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Former British colonies averageFormer British colonies average (profile)",
   "AMOUNT": "$546.32 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Europe averageEurope average (profile)",
   "AMOUNT": "$466.94 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Christian countries averageChristian countries average (profile)",
   "AMOUNT": "$429.54 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Catholic countries averageCatholic countries average (profile)",
   "AMOUNT": "$378.05 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Religious countries averageReligious countries average (profile)",
   "AMOUNT": "$318.79 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "OPEC countries averageOPEC countries average (profile)",
   "AMOUNT": "$290.83 billion",
   "DATE": 2011
 },
 {
   "Number": null,
   "COUNTRY": "South and Central Asia averageSouth and Central Asia average (profile)",
   "AMOUNT": "$214.17 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Tourist destinations averageTourist destinations average (profile)",
   "AMOUNT": "$194.29 billion",
   "DATE": 2009
 },
 {
   "Number": null,
   "COUNTRY": "Middle Eastern and North Africa averageMiddle Eastern and North Africa average (profile)",
   "AMOUNT": "$192.70 billion",
   "DATE": 2011
 },
 {
   "Number": null,
   "COUNTRY": "Former Spanish colonies averageFormer Spanish colonies average (profile)",
   "AMOUNT": "$187.48 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Former Soviet republics averageFormer Soviet republics average (profile)",
   "AMOUNT": "$183.14 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Eastern Europe averageEastern Europe average (profile)",
   "AMOUNT": "$182.95 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Latin America and Caribbean averageLatin America and Caribbean average (profile)",
   "AMOUNT": "$165.84 billion",
   "DATE": 2011
 },
 {
   "Number": null,
   "COUNTRY": "Sparsely populated countries averageSparsely populated countries average (profile)",
   "AMOUNT": "$148.84 billion",
   "DATE": 2009
 },
 {
   "Number": null,
   "COUNTRY": "Muslim countries averageMuslim countries average (profile)",
   "AMOUNT": "$135.47 billion",
   "DATE": 2011
 },
 {
   "Number": null,
   "COUNTRY": "Hot countries averageHot countries average (profile)",
   "AMOUNT": "$134.84 billion",
   "DATE": 2011
 },
 {
   "Number": null,
   "COUNTRY": "Potential Future EU Members averagePotential Future EU Members average (profile)",
   "AMOUNT": "$111.33 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "failed states averagefailed states average (profile)",
   "AMOUNT": "$63.56 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Landlocked countries averageLandlocked countries average (profile)",
   "AMOUNT": "$58.09 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Former French colonies averageFormer French colonies average (profile)",
   "AMOUNT": "$32.91 billion",
   "DATE": 2012
 },
 {
   "Number": null,
   "COUNTRY": "Sub-Saharan Africa averageSub-Saharan Africa average (profile)",
   "AMOUNT": "$28.11 billion",
   "DATE": 2012
 }
];
    
    $scope.sortFild = 'Number';
    $scope.reverse = true;

}]);


















