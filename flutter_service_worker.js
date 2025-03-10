'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a72185796d5a439d0cbc3b77eefd97e1",
".git/config": "0d1e264f68f7046326503e816c3b7554",
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
".git/index": "1ed5afba011a68dc4c962043cd3b9e0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4291499809cd1f4ebba4d13f7de71445",
".git/logs/refs/heads/main": "53c9596a8c4c8bd54af8043b9524d45b",
".git/logs/refs/remotes/origin/main": "5c94d9ca4cf6bc0dbc9eef1fe22cd92c",
".git/objects/00/f09054b45bc3277f4d9b4adee2fb8c02e6b5ac": "52b7a8c283e5ad966e048752616b37ae",
".git/objects/02/b706c99f8ce2b7ccb6f834b1a84cd936c3519b": "827acdf3227623271c048ba1c1613328",
".git/objects/03/c096859b758d2a34f7c9a4a16e602ae00b9bd8": "e6f27b0406d737e4e53403c91bad156a",
".git/objects/05/7f7f4870dd18de78e4096e11361696a7427a66": "fc58c3a6ca1e6278f3ada0438491685c",
".git/objects/05/a74ef1052130cf832e4d68b452f3bde0d660bd": "a62c3510394805db1a14c6f80edbf5eb",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/87d9f5d3efb51ede19263c5b856a4de2794dfd": "5e322d90a5c30a77d84fc612e7bbf9b2",
".git/objects/08/9ec8797b069be7a25df54f59b41e6cf02e8998": "6ed7939313ffba869b635e060d37b7b3",
".git/objects/0b/959fc1b28eb9a0cb80f44c4f1d2fc1d5ccc515": "3a3a4e01ebffdcc366992e756a3ab21b",
".git/objects/0d/96da09ac5d9442c8aa7fdc10a08116e59b50b6": "58037af92cdeacf0bf3269d0e8c71856",
".git/objects/0e/d27034debbe1615179bfad151c4c9d1b1a9c47": "c964e41de5834c7cd6b4aeb9f906a19c",
".git/objects/13/6bf6f027": "96f72e109a9d0912be22365078edba6a",
".git/objects/13/b0e34dd5": "96f72e109a9d0912be22365078edba6a",
".git/objects/13/e66fe4dd": "96f72e109a9d0912be22365078edba6a",
".git/objects/13/f1d50ddc": "96f72e109a9d0912be22365078edba6a",
".git/objects/13/f88618b4": "96f72e109a9d0912be22365078edba6a",
".git/objects/14/63db31517dd7e6d22af23ce3bd94623f6ce623": "f368721cf52df2b450f669f902c8dbbd",
".git/objects/19/6a448f5467c768f6c566a70f650586acb0eedf": "ca66fc06cb101d5938512caa2feb94c1",
".git/objects/1b/7fdd069d395c1a3897b4ba257355c6ff05bd30": "399448d9aa5421bbc505048f354b7a05",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/c5e0f6c55812447ccb4072c4705121ae958ed7": "c08008bd71567ffe1a94a47362188d7f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/9e47665b41449ea2783f0fc8cde28a3f1dc885": "b005f1ebf006c99f5235960d0634dc83",
".git/objects/27/323b0cfa9bb656a99bcffff60790524c9b7ad4": "5127ccfcc1d78dca8ab230cf945f182a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/c6b90ff35a151b384746dd550902269d280ccc": "add2231ff50ae1538912c73b3c78c8e5",
".git/objects/2b/c278771821f1c841abe52191bc096540c1c7dd": "fde6de964378ae1e0e49ecf24ff5d101",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/448becf1effb3d68193e747587ed9559be614e": "de8b6d9b734f764fdd651c3f62fbfa1e",
".git/objects/2e/3dd09c6049ec7844bba9921b8f62624f236400": "cd05a025ec18a4f66f50e87271a6d87d",
".git/objects/2f/789d9a33fe6569fa012fe70b1c82d57db8a833": "a8b61fd418108702b36bba5480a0150e",
".git/objects/30/1f3ce1214ae0c986e83e9e00b154aac954655c": "84a3f356bd212ea8daabc526bda45c28",
".git/objects/30/c3a1e2c3691a58680d81857e88d824ec1e1d96": "58cbd6933db37877741c497700cde19e",
".git/objects/32/67bc0887f16d9f03ff24d061d48c2a01133dad": "37acf1568d7927995d25480297fb4b61",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/a05f6378714826236832a72b05f0a1b6bc45b0": "1bf9f435a85d4a8b8a58769ed1c5b66c",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/38/7b442ac3bb8b49b4d3a44a53701189ac16180f": "7b96088a17ac789f5f3e10ebdc9898e9",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/62312b3df4bfb6a42e8104921d0ecb1ed9623e": "45b9a190afb2d85bb790aca70083b6f9",
".git/objects/3b/9221123dca11efd96720349b1891f4c826556c": "a6664f179d1ce57071fcccf223dad91b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/c8db3e46ceff49ab2ef915e2ff0cb98499dfd8": "37d7322e203a27d5b5825dbcb884fddc",
".git/objects/3d/94251e1b04d7a7ba6a4424558ec26dd690d8b7": "d3d4fb38df4e758e62d27b14751ec7e4",
".git/objects/3e/2f6df784": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/72ab5068": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/7d1412a6": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/a20b7102": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/16efb0463119ee0dc65742bc8a90c04c1366f5": "afe9dbaeeca0e533846d996ccdf414e2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/9b5a6e474bbd817dde144d1aa44ddd28a78a09": "9ed6d2a03991a4b514eb717790c2e134",
".git/objects/42/969754e394a13b8666312b5337381abdde3907": "a4e60cde59efbe2335bf026ce24607a5",
".git/objects/43/93b00796135194cf195ec421474fd1fc6696de": "2a7503758da18459cf974aa3c5e01cb9",
".git/objects/44/5c8bb75bf1077d52ab421a33d3e2d67ec9b60d": "4f59a24dac359b646e958830a34e4f5b",
".git/objects/44/ab1d522112cd2f5dc800418e532dcca83bb4f3": "f2cbca7c8402b4f2db85c780d60bca68",
".git/objects/44/ea7422747631487b01f0d52157ab1e4c21bfbe": "8bc6fdd33e366510adecb6b0f9924ff6",
".git/objects/46/42e5633bceabd25f6445ad1b0741e84eb3ee68": "968c15eb5b67e29849871fc3feb04c6d",
".git/objects/48/226c8479a9dcea7764252f3ef6ed6853c553b9": "b60c9764ab12c5a3d97e524f0adb69e6",
".git/objects/4c/92df61063d57886edb99efef95944b5f0682a7": "0586e16fe0b0727134148395a827dc57",
".git/objects/4d/f7f8d4afcaef9ce1b3e7534d22d492fecf76ab": "2433b8f099cb8e229efb5627c477f96d",
".git/objects/4e/9a42d0e6d26164752fffe6ee7dd61d57f753f4": "a6c5a999efe5baa1f7ff7e80307dab2c",
".git/objects/4e/beb2c85a1c8e30860b00c76f08304d87551fb8": "19f0aca73adb7aebe6f1035e16ab017c",
".git/objects/4f/354a5a90df2de6704ce6705138fb560b7c76fd": "7bdc453313fd18f66f9787feb865c4ed",
".git/objects/50/f62abb9e1a54a5e346d69c4cd142e772de4cb0": "183c8bce492d76764bfb7547ced7c43f",
".git/objects/52/b6aee62f8994393db3f0e76692bbe1403022ea": "d739009fe7609cb58ba66d2eea677434",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/56/0db6458dffd91a420974aa79b5360f5170d31f": "da0b867d34b7900355c554f8073df904",
".git/objects/56/1376d2e6434ff08b018e5f535df3342366eba7": "84d3d79ea4ffc9bc2ab7563ed1b9f7a5",
".git/objects/56/be4c9ad84f2661afd2bb132af71aee5d833ebb": "650bfc696b172379480484a4ec9de3d4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/bc1df1880225324b89187ed1179b9dc8e88be0": "e9e719e58dcd02108f891b4054730c68",
".git/objects/5a/72c1ff665592e0e89aeb7e4f238ebaf25d1e2c": "f958529b945ae82a06d30ee6292ce084",
".git/objects/5a/d18496b21b45e2ccd7f726b4349b852f752282": "95517b178e8436da8e62fb1f74bc0365",
".git/objects/5a/d4baadb02e83c2e7d09e9e82906dcb8c947ad8": "10f1db0a77cd1fd5c532d87a91df287a",
".git/objects/5c/8499ecba279c13d6e2fd8797b1c82cc6518335": "e0220a617c6be930668e3b8acb2de5a8",
".git/objects/5f/9d071a86ae858f740e0c2838060a42a91f24a1": "457b8eb2cc6c5104dfbb4a5196a9d8d3",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/a5e67b9d33c91d8c2559b77b54864552a35f9b": "94dbf7972a02d903caa43df94162e7fb",
".git/objects/60/f75d264f9e991455add2478fa73c64b2093cef": "38666efee6f866907f419329d399abb9",
".git/objects/62/9b22eb06ac3563de36abfa7ea792f65af2c412": "fbcc3757f5b16a7e6c40ad7e37536f6e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/86e0d5c7c2369a36bb9fb402f0499671e41cae": "3b7e9eaab308164d5debd596012d4644",
".git/objects/65/ef23474fea1b25cbae461c1bcae3452b257d9d": "e04c45de96c93408759a47c0d434c34f",
".git/objects/66/a189700ceb2cc846c3eb7354839f61a00e5a7b": "e088b29a05a6eb85a358dcca9c614e17",
".git/objects/69/2e9ed510063f14cad71fb056a88a8c649ad925": "0e04dcf9d80bc0391c8d33dea5d8b3b2",
".git/objects/6a/492cc01b2b98f7abcfdd79621aa7ae71684d0e": "d615f77565a7be124a792500d9492e5e",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/6b/0c9bb4205f67cb703d212356c490690e6d0d41": "cab2605d7cb68ec73edbd80c2774caab",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/115ab3be82dd47a88e248607b8452bc51e43ff": "77045fbeb18c5423c42556b0775e1ca9",
".git/objects/6c/4ab1b702a4ccee610f287fc1e12c2b46d9953c": "bc6198b11521cd599fa9690c06e1b6bd",
".git/objects/6c/f1194fb4d0fa3aec37e7f8d5478beae4d70982": "735ea335c6f3352a2cef10a6dee63c07",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/80a1056fea1107f6632ab149e1fe709d42c209": "efc624ddfe857b5c2c56c06307876018",
".git/objects/70/450e4b1e60a182a72f52356f5eb5bc98d4d085": "aa52b0207bd87f934d42556864542ce4",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/db1c59f4adacc84b774bc18c752bd06d07cc56": "f19a8bc0d2fc92abaddb31af21594585",
".git/objects/74/f251bf5e090dc9f3168274ba0f445cc2335a94": "8f5ec1de8902ffe3e0321aba4abf1fbb",
".git/objects/77/54dc40f521cfb0f4a1f343228a21d58d33b94b": "bbc4e66b5758f38346fa6029d4cea334",
".git/objects/7b/1b5678a7131a9533cf77fd26b58d4ac09b4b41": "d827b8357b823ad25bd3d22cb923f773",
".git/objects/7b/6182c202db80798be7d9903dfccea4a30cb245": "82b00a941f19acc96d2723a5ac58553e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/3bf1e6cc9a95746ed86ae95b4bd3304c9c5edc": "60b6f7282a8dc2a60f2c15242e6a91c8",
".git/objects/7c/3c77a9affd7987c91f67fa2fbaf6fc26cd6182": "d500026f1958e9e254b61bdc5b6146a1",
".git/objects/7c/9ea1b3e0ef78868c1dd2d9f833099ed1a5bd96": "0b2b3456d8af4e533162ae6cc0bbc85b",
".git/objects/7e/01e5463fc0497970b2a202d65602e93cadfa25": "73bc5af5da28e474c3503b37900b47ea",
".git/objects/7e/f9651eab3976cc6482ef344362e32d69137c7a": "52e31054f83a826b1c06aeba3f18d5dc",
".git/objects/83/4b30d3e7cf79db1e29b20ad5b0ca4e175dbee3": "d3e607dac8ee34aefba0c8cc753a573f",
".git/objects/84/8fba1e4d875ff30ff6efbfea22cb720249a1bc": "1658c63203a658c6cbe8cffecc38617d",
".git/objects/84/9455a95d4617b216c7f12e945c2d428ece0c48": "5e6c3cd75cc59d9f2d0d07ff365b67f9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/df14bebf3607061b7a40cc3eef8df325b3e12d": "1977eb048e26b91e800492fc0e315157",
".git/objects/8a/3845f01e3910410f71b5f6190c6fd53bdbcad3": "b7afd0849d0b78cded37db1ab60a8cb1",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a8e427176e9d9b570693ffb0117764b7cc4d45": "286db7e5a7606f45dcccc576fa01e0b4",
".git/objects/8b/f560ed5c0c6fe69a9389f7bd635bce8066f9c9": "8346f29d1e851fdbaac9d962d267d399",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/8138b8c7d3c832bbc61b59526e9949f0fb32c5": "0a07f5713703b5c8b24653b7e2fa4c94",
".git/objects/8e/033b951af0cda62a6b644a26c29f67677bb30f": "08fd5cd633b487cf684171c022359ebb",
".git/objects/8e/4034094d74f4140be91424726a80ed3c09400d": "eb77bbf9c2edf0f2b937dede268cb964",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/fa6c2fc966191c31002afb8acf37b93c575764": "feb3b1944ab3afe3b23bb553ea72286e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/0f87c7e3507e3679c44fe4d091bc54d538e462": "63feb825ba137062ac82c050988dbdcd",
".git/objects/94/79c7e1298d9cf2a962d35e3cd7e1f34f8bc24d": "6c87f69fd8039c3fe55e20b379eb894a",
".git/objects/96/8c246a64cffee7f86b9438cea840c303d45b42": "87476c833b79423f86583aebbf0c64da",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/b3f9aaa1f1e2bb8475ab646ccd6597ee293f0e": "a78f60ed4be1df891c63bec2448a656b",
".git/objects/9b/cc259c25cc62b44b8d935807d104beb673a506": "95e0dbdba55d7b481907fda6bbaf1f2d",
".git/objects/9d/6160cae7cff8567c4f24f8a7341e5b02f37b4c": "870638714db17f35ebaf26e1afa3df2f",
".git/objects/9e/e3fcb04d5bb572baa332f5f6e7fca7a90cfce3": "51044d30fa91917086bdaf2923e7f4ab",
".git/objects/a0/67cbfafc16d01ee20003d5049e5c8d86694a00": "e1c68690bd571db239b0dacfc5215d47",
".git/objects/a1/898d1a974c24e4a089941e8b0eb9ebcc6f164f": "7862d6c74edc77beff116264dc261d94",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/8caf9d05674b00f5849f44f356222f7c189afb": "21c048eb0ef0332cb394f46d34d28556",
".git/objects/a8/d634dc547cbe97bb750571377550739f4a74c6": "e0ca1935e85954c97715bb994f963c6f",
".git/objects/aa/cc047a47e31dddf44d0bb5937c8c5db09a98c0": "78397ce3893abd214d476fd713cde07e",
".git/objects/ab/579e10716ae395a8184e7886c24a99e4805948": "95f28668dc8651bc391f8a9870515da7",
".git/objects/ab/b2f134df1d078c48c54d0069c01bd3b8ab1903": "fb64e660a9f0d5a0caacbd5224598d1e",
".git/objects/ad/802ac16ae9ef8d08a34767b41bb3b4eccdd952": "b2c461dfe5fb94b7d4f3b8b84d0318c0",
".git/objects/ae/6cd4878a65353bf3c3bba4da056d411612761d": "5b710919149d23d9cbd956b0183f2cc5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/c8ec76655cbcc2cfd00cd9b18fd1d351b14cf1": "23507b671de5c394c65296d228068cd3",
".git/objects/b5/483295805d62bbd7651eb22824b370721d8fc0": "9e739f3d1aca62b6be7132a8eee1b303",
".git/objects/b6/06629434ca97277f1a5db8d83665ab08eb5be5": "ac47643fa01d7f5d067e493e97264107",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/efa8b42cb62e43f9e403ccbf4388f908122b51": "8528688d9c4853bbe2a64e0658011a2d",
".git/objects/b8/0b8c71bf09be86c0bfd99976d2bcbd35fcc24a": "54c65d89cfef7c15070993090200e429",
".git/objects/b8/56bbb4936701556e78e8745d7dcca561910558": "20c1703d7cce04a39bfd819cc2eefe8f",
".git/objects/b9/0dc146e73b8cc4d82425ba671e71b11474c3ff": "ce7573ff1341c8a7d02cfcc9b00261aa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/412e304387bdbf829f35f91fcca60f1178623a": "1c52eeeb43f195213b7d487770e1704a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/ca3c041bbf11df51da2b01718dedaf3775771a": "6fdf526f41199fae89a540b70f8b6780",
".git/objects/bc/1dad2dd89f956a9f1be6042bbbdbac56a308ea": "cb820b5c52ab9ab20de6febf86026060",
".git/objects/bd/10d6d910fff2becf022b1c29db8887d8829dea": "a4dd38dff124a7eaabe18aca111f7529",
".git/objects/bd/7075e4a3b79df7a3f776722d2df35e475703d4": "41ee95f75910c756464a604700693c2b",
".git/objects/bf/7d89f78dd5ebd55088125d512114e9cf1645a6": "089baefd2630b97f032ec492f94f02a0",
".git/objects/bf/fa77ee1f4bb25df9d0d4209e758c97861ed87b": "1a39247079f6dfea5ac392e2e6e57306",
".git/objects/c0/671b4db22ece50f9ee8468edfc378233f9c4c0": "4c3c9832ac2d9f4cbd839d4aade9752c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/88f6de4a6817b2d5f1cd99fc88b5ce074314bc": "d84263254e810d46c9e34f9568c7d1ea",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/ab884c4f4831032a55aa18f238c1e081994f43": "93b0fbd12108494bb9d5265dac9b4cd1",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/40c004e427acd88b754aaf47c0a3da895088f6": "31b1eecd97c8ee3cee2bbc09238e9e9c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/69c33a3cf18cfec0542b23dad65ab4e62beaed": "4439c5a044bbcf572a8b947b9846aa24",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/8f163f6a756bc8806736d02bb6dee3249af33c": "bcf1b3f2aeacb1b932d6c9d2e22d4653",
".git/objects/cd/2720b068cba7c9ffbb560fd93d6641b70b0eac": "be7bbfec3332249c0f028b76fa0a3036",
".git/objects/cd/6d6e3bb967ccec88eef186e5e334ffd566c179": "83b6d49db97b045022117d40aecc6893",
".git/objects/ce/365565b0e84c568bf18a47f2670fb69cbfa50c": "d8863d76e0d4b89ae595ae782e107dc2",
".git/objects/cf/e80b133e4f7a1570c51ca48afb2b243532b741": "256dd6b393feac61743848dceca74352",
".git/objects/d2/3dd08aa904a2337d5088f27a9c1c4cf09bc84f": "0cefd2654b1448ad6be9051c679463ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5e2ae38cbd0684b3e8ecaeedc78d4d53d7ac19": "6c9603152707436b3aab53201319dc35",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/89c874230c7c4d262baf1830f7f0456446c174": "7c35c773d0adf979266bbf832b2759cc",
".git/objects/df/a1d40c660b3438a32fa68617e809b70a1c0680": "65705278d3dc4c689f23280f66218594",
".git/objects/e0/32ef5ffe84d1824444e24c5469344491ef02e9": "52ec578aa7e9117e00ce0e6ee1d23b81",
".git/objects/e0/e6167e7c64f1f5110f1fbd46f1930030f316eb": "daf025d8dfe3f332b8251fc6d7416f10",
".git/objects/e3/01b23568b20cf7b40831c085e5f4c53f32dce9": "cea1a53a03635a1b0dd993426523cb47",
".git/objects/e3/f2f6ffbdea31ff9ded0cf53351ac3be0357234": "ae4a9e2eeda6f53214d93ad433817a5a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/d043fdeb324fdd0daccc73b787214f7c5b62b4": "10e2da5da78e1306abe0ef782e8c4e46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/9ef64394252efd89198a4d5c17783b6d6eb8d8": "00c1258e6627e73f2dd560dca43f16ff",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/bb0140230254400fb4e28d665026130c49ed00": "2cdbfb65bda036056fbbfb1f96263b29",
".git/objects/f9/5620d3c4fa8cb1b8fb566913866c554b477725": "38175b9549e9fc225bf6cf367fe9ed26",
".git/objects/fb/38eb6ad1c6a46a5b1e7bb80ecf0496b6084d4b": "033a53aff2800d43bc3a9f0e4b636da5",
".git/objects/fc/9a462816fd560c9b1f5f1c6b9f4809561c7fd4": "03fcb6906e80c210866a6e046c3ed5b9",
".git/objects/fd/65b498d0ee7ce70a14b9bb2c8f1e857562ac7f": "86f61b2b16f7c83bf462e1cbd2306058",
".git/refs/heads/main": "c010b7e48f061b74f0f25c915bf61bb6",
".git/refs/remotes/origin/main": "c010b7e48f061b74f0f25c915bf61bb6",
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
"flutter_bootstrap.js": "c4913d0a7df7415292df6685c6f9e0ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3056d59f1ae72e3753db6f51d5ec3d93",
"/": "3056d59f1ae72e3753db6f51d5ec3d93",
"main.dart.js": "f2a10fd93f1cc219ff464f6ba5e8db3d",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"README.md": "37e72ed3e8f1b8f13142170a1295908c",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
