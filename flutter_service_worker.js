'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5eb44c4933f9e3a76ff3bd86934204b9",
".git/config": "84e0d0a036872c92b718b6b36bc6934a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bcc9ad33cfb03758de853ad1d64bf2dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3491c819e133360e1d718bc4da58270",
".git/logs/refs/heads/main": "e6e88244ed75e0454629926c9bf20fc7",
".git/logs/refs/remotes/origin/main": "222e9b5ad544578aea8a08792688c0bb",
".git/objects/05/7f7f4870dd18de78e4096e11361696a7427a66": "fc58c3a6ca1e6278f3ada0438491685c",
".git/objects/05/a74ef1052130cf832e4d68b452f3bde0d660bd": "a62c3510394805db1a14c6f80edbf5eb",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/9ec8797b069be7a25df54f59b41e6cf02e8998": "6ed7939313ffba869b635e060d37b7b3",
".git/objects/11/099b3191600ace00f1610e663748b6aff214ec": "d7abe1e2214d7c6d3582a8e5da7451e6",
".git/objects/16/87ef60a21489bb7b370e98bdb2fcb9c03ef73b": "2cbf982511f0df95f02920efbdea5547",
".git/objects/17/9fd1b0062398d1bab4a3530841d30388166ea9": "80c178444a6dca479ffd86215914820e",
".git/objects/1b/7fdd069d395c1a3897b4ba257355c6ff05bd30": "399448d9aa5421bbc505048f354b7a05",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/c5e0f6c55812447ccb4072c4705121ae958ed7": "c08008bd71567ffe1a94a47362188d7f",
".git/objects/2a/1c3156890db28187613710fa0dd29675e2c37a": "c56435f8d9bdca6f485ffc65cf5f9b4d",
".git/objects/2a/c6b90ff35a151b384746dd550902269d280ccc": "add2231ff50ae1538912c73b3c78c8e5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/c3a1e2c3691a58680d81857e88d824ec1e1d96": "58cbd6933db37877741c497700cde19e",
".git/objects/30/e709cdd94d8c9109a5017768acdfcdcdf7a3a2": "e23067e9b5dc78fdf93830a5cc5f3161",
".git/objects/32/67bc0887f16d9f03ff24d061d48c2a01133dad": "37acf1568d7927995d25480297fb4b61",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/3a/62312b3df4bfb6a42e8104921d0ecb1ed9623e": "45b9a190afb2d85bb790aca70083b6f9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/c8db3e46ceff49ab2ef915e2ff0cb98499dfd8": "37d7322e203a27d5b5825dbcb884fddc",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/9b5a6e474bbd817dde144d1aa44ddd28a78a09": "9ed6d2a03991a4b514eb717790c2e134",
".git/objects/44/ab1d522112cd2f5dc800418e532dcca83bb4f3": "f2cbca7c8402b4f2db85c780d60bca68",
".git/objects/44/ea7422747631487b01f0d52157ab1e4c21bfbe": "8bc6fdd33e366510adecb6b0f9924ff6",
".git/objects/48/226c8479a9dcea7764252f3ef6ed6853c553b9": "b60c9764ab12c5a3d97e524f0adb69e6",
".git/objects/50/794420a85efacf0ca6ce902a7159ad33fcc8f7": "c6d1303ae096fff7c514eebc37c8c348",
".git/objects/50/f62abb9e1a54a5e346d69c4cd142e772de4cb0": "183c8bce492d76764bfb7547ced7c43f",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/bc1df1880225324b89187ed1179b9dc8e88be0": "e9e719e58dcd02108f891b4054730c68",
".git/objects/5c/8499ecba279c13d6e2fd8797b1c82cc6518335": "e0220a617c6be930668e3b8acb2de5a8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/a5e67b9d33c91d8c2559b77b54864552a35f9b": "94dbf7972a02d903caa43df94162e7fb",
".git/objects/65/5eac21f965bb53c41dd8e6118865f3ad51e8e8": "ddc4eb68e768c718e5917e491eabf6ec",
".git/objects/68/fc7fbf16a0b736fbff2810748f15501a1002f9": "a9db1cf4a858f8574c719329940298bc",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/6b/0c9bb4205f67cb703d212356c490690e6d0d41": "cab2605d7cb68ec73edbd80c2774caab",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/4ab1b702a4ccee610f287fc1e12c2b46d9953c": "bc6198b11521cd599fa9690c06e1b6bd",
".git/objects/6c/f1194fb4d0fa3aec37e7f8d5478beae4d70982": "735ea335c6f3352a2cef10a6dee63c07",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/db1c59f4adacc84b774bc18c752bd06d07cc56": "f19a8bc0d2fc92abaddb31af21594585",
".git/objects/74/f019876bdb00dba83020e6952cfcf257be035a": "1eae24ea64028a95180f882297f7587a",
".git/objects/7b/1b5678a7131a9533cf77fd26b58d4ac09b4b41": "d827b8357b823ad25bd3d22cb923f773",
".git/objects/7b/6182c202db80798be7d9903dfccea4a30cb245": "82b00a941f19acc96d2723a5ac58553e",
".git/objects/7c/3bf1e6cc9a95746ed86ae95b4bd3304c9c5edc": "60b6f7282a8dc2a60f2c15242e6a91c8",
".git/objects/7c/3c77a9affd7987c91f67fa2fbaf6fc26cd6182": "d500026f1958e9e254b61bdc5b6146a1",
".git/objects/84/8fba1e4d875ff30ff6efbfea22cb720249a1bc": "1658c63203a658c6cbe8cffecc38617d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/18e50f186dc7b9b3a4e5f317e6e2fa0187de83": "7f4fddbbc9cc9e4b5acde4bd3f944254",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a8e427176e9d9b570693ffb0117764b7cc4d45": "286db7e5a7606f45dcccc576fa01e0b4",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/8c246a64cffee7f86b9438cea840c303d45b42": "87476c833b79423f86583aebbf0c64da",
".git/objects/9b/cc259c25cc62b44b8d935807d104beb673a506": "95e0dbdba55d7b481907fda6bbaf1f2d",
".git/objects/9e/e3fcb04d5bb572baa332f5f6e7fca7a90cfce3": "51044d30fa91917086bdaf2923e7f4ab",
".git/objects/a1/898d1a974c24e4a089941e8b0eb9ebcc6f164f": "7862d6c74edc77beff116264dc261d94",
".git/objects/a5/2de2df119e518d2f4a98cd01dd6724e05249d8": "0bda783c8468e802716e042e00b195d2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/cc047a47e31dddf44d0bb5937c8c5db09a98c0": "78397ce3893abd214d476fd713cde07e",
".git/objects/ad/802ac16ae9ef8d08a34767b41bb3b4eccdd952": "b2c461dfe5fb94b7d4f3b8b84d0318c0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/491f19c1672b1993a173aac56bf2d4c47cadbd": "2ff475c03ef262927b0ccdd9fd3a06d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/1dad2dd89f956a9f1be6042bbbdbac56a308ea": "cb820b5c52ab9ab20de6febf86026060",
".git/objects/bc/2d084794f7246dd43c6e9f9b67aabec4a5d9fe": "7f88b4b9cf5628082b8d1fa275d5759d",
".git/objects/bd/10d6d910fff2becf022b1c29db8887d8829dea": "a4dd38dff124a7eaabe18aca111f7529",
".git/objects/bd/7075e4a3b79df7a3f776722d2df35e475703d4": "41ee95f75910c756464a604700693c2b",
".git/objects/bf/7d89f78dd5ebd55088125d512114e9cf1645a6": "089baefd2630b97f032ec492f94f02a0",
".git/objects/c4/88f6de4a6817b2d5f1cd99fc88b5ce074314bc": "d84263254e810d46c9e34f9568c7d1ea",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cc/8f163f6a756bc8806736d02bb6dee3249af33c": "bcf1b3f2aeacb1b932d6c9d2e22d4653",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/77546a82708afcd05c16dc7c32c4a8f0370d26": "e997d9a39c6a86833f97774f367f2d02",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/81c1d66cbf3577707fe94e2c2b139af1245fa9": "9883c772cc1af00650aa79b90af35730",
".git/objects/e3/01b23568b20cf7b40831c085e5f4c53f32dce9": "cea1a53a03635a1b0dd993426523cb47",
".git/objects/e4/80833755fb03efd22ea0df23a0d440e65707f2": "063bf5ddb83ef4b07696d7bb789f4373",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/3430d80b938e15cc8ef141e9abf6d203246a20": "d36217482f24e0a3db8128bdb1b0c363",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/bb0140230254400fb4e28d665026130c49ed00": "2cdbfb65bda036056fbbfb1f96263b29",
".git/objects/f9/5620d3c4fa8cb1b8fb566913866c554b477725": "38175b9549e9fc225bf6cf367fe9ed26",
".git/objects/fb/38eb6ad1c6a46a5b1e7bb80ecf0496b6084d4b": "033a53aff2800d43bc3a9f0e4b636da5",
".git/objects/fc/9a462816fd560c9b1f5f1c6b9f4809561c7fd4": "03fcb6906e80c210866a6e046c3ed5b9",
".git/refs/heads/main": "ce7f510d3ca0839eb8e6248c6bbd76bf",
".git/refs/remotes/origin/main": "ce7f510d3ca0839eb8e6248c6bbd76bf",
"assets/AssetManifest.bin": "2aeefd78d4663a317e2cef734e3ed3c6",
"assets/AssetManifest.bin.json": "9ffbef112be80189cb043d6c0cc7bea5",
"assets/AssetManifest.json": "9c52e9d830a5e6cbfbda67feaa16684b",
"assets/assets/Animations/Developer/developer.json": "e91d42e0a24b2f1c0bbe149492d6837c",
"assets/assets/Fonts/Public%2520Sans/Black.ttf": "b077539826769b3d78f2eed49c934b69",
"assets/assets/Fonts/Public%2520Sans/Bold.ttf": "9fc9c1206d8e20f39769a6f3b36fd8b7",
"assets/assets/Fonts/Public%2520Sans/Extra_Bold.ttf": "fabb198c07b75b1c1536b9db5c1bd46b",
"assets/assets/Fonts/Public%2520Sans/Medium.ttf": "80840e462a09263d0e9833565df34cfd",
"assets/assets/Fonts/Public%2520Sans/Regular.ttf": "18f93d6b04b3f0303d3b3f4cd2d64e96",
"assets/assets/Fonts/Public%2520Sans/Semi_Bold.ttf": "9903b8962526b688e7df03f2f9c7dfa7",
"assets/assets/Icons/App%2520Logo/App%2520Logo.svg": "3131b7204dcdee9a2447fc1053a3b9ec",
"assets/assets/Icons/Arrows/check-arrow.svg": "21286adb6e45ed4aa3c6b58339fa9cd1",
"assets/assets/Icons/Arrows/circle-arrow.svg": "684e27e722f60eb8a051b410e0e259f7",
"assets/assets/Icons/Arrows/down-arrow.svg": "7bc4c6d7d4e97be5ee9fa31bffb58e02",
"assets/assets/Icons/Arrows/left-arrow.svg": "cd6b04e3d3338d2667913c85607e4e15",
"assets/assets/Icons/Arrows/send-arrow.svg": "d0863a389c4d40f3488b34dd5e913a1c",
"assets/assets/Icons/Social/contact-us.svg": "b07a457b8835e119237b5c9b96ca24a3",
"assets/assets/Icons/Social/email.svg": "c7ac896a0355e767147d13973d2ff132",
"assets/assets/Icons/Social/whatsapp.svg": "04101176406810fe1d0b2ecfe2a85b3f",
"assets/assets/Icons/Technologies/dart.svg": "fd22c80778a291c124e1535973d17b5d",
"assets/assets/Icons/Technologies/firebase.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/Icons/Technologies/flutter.svg": "fb9e82f4de3bbd9bbf23f8af17199313",
"assets/assets/Icons/Technologies/git.svg": "ebf013e6e0f14c3462c3de35bc173f08",
"assets/assets/Icons/Technologies/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/Icons/Technologies/stack.png": "d579abaaa36ce051e3f29b3f6a7d3653",
"assets/assets/Icons/Technologies/supabase.svg": "357c209cd8c6fa1c20761fe5486aac22",
"assets/assets/Images/App%2520Logo/app_logo.webp": "66cb657108632e98d603ad25e706cdb6",
"assets/assets/Images/Background/background_banner.webp": "96b72a83ef34fc889fc446c325ec164b",
"assets/assets/Images/Background/user_background_banner.webp": "96b72a83ef34fc889fc446c325ec164b",
"assets/assets/Images/Developer/developer.png": "7e3ff8ab9eb1289ebd8e86eecffe3acd",
"assets/assets/Images/Projects/DJ/connect-with-dj.webp": "dfe929021fd3ac6cd7c2116713cc0c1f",
"assets/assets/Images/Projects/DJ/dj-app-photo.webp": "2afdae5e29d4533b18ffc261656c645e",
"assets/assets/Images/Projects/DJ/features-screen.webp": "ede831f8044cc9f731abfc1305534534",
"assets/assets/Images/Projects/DJ/how-it-works.webp": "d6db6ef163aeb0ac426fadd373372423",
"assets/assets/Images/Projects/dj-app-photo.webp": "2afdae5e29d4533b18ffc261656c645e",
"assets/assets/Images/Projects/portfolio-shox-app.webp": "bf3d20bb076e65b44427291dda12586d",
"assets/FontManifest.json": "e3313630ef36a23f427de826c94cce42",
"assets/fonts/MaterialIcons-Regular.otf": "217bba2a208ba60607aa9ac24e27f72b",
"assets/NOTICES": "8f0780b9a898f8169d7ff43f7d4d5787",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "b54e69344ee216664cd3a014af72bca7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "89515b38981e6d6e49f2cf3137e6ec34",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3056d59f1ae72e3753db6f51d5ec3d93",
"/": "3056d59f1ae72e3753db6f51d5ec3d93",
"main.dart.js": "61c20d909aef5fd5c5fe4e1b0be7bd0e",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"README.md": "37e72ed3e8f1b8f13142170a1295908c",
"version.json": "0c5d4888f97bea561baede5e4ca63ba5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
