'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e38e3077135e813d190300b68c108221",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
".git/index": "834d2106a26c43e2cb0e4ee77d2febff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98da1fdd33b12cb7ea8a6bf792eb4293",
".git/logs/refs/heads/main": "3b9eb914cee4f65ee123a8746b16d19c",
".git/objects/01/4e6f0405ebb5af171c0e15448a783016a752da": "2ad1797d582207d55825ceb4360ec59a",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/2bdb2aec57a3263cdb459a69e07ac3ae9f9057": "63655a61515a4264ce505c4eeb225089",
".git/objects/02/f547fb6aafe49082256cc1c95b555ce5818074": "13b2fc6a33e49b7bbf4a8b54c86331e8",
".git/objects/0a/4b27d63741330b812c87fd5af8fa2b6c53e508": "eb0ebbcd50a32d8fb3d1ccb74ae6a071",
".git/objects/0b/85aa90e4ae0adcb18e63b4f067231cc5bb904d": "8d49d6d6ffb12d0d828d7ea33185c990",
".git/objects/0b/a23cef774f218481c734751ed7d3afb4969a5e": "cb0c3fc74d8c3b7544fbebd2d0d87fb2",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/11/4b52259a68de97262922a0c00bdcfa0ae61cdd": "a5a809fad19a878ce459eda0dc7a2054",
".git/objects/12/1dc033cb34582cce5a4b6a9e6af9849c5eea96": "3fc3dcecd64dd5b3be37223a0efe9bd4",
".git/objects/15/045edeadbb5375b97bc20e31c09839be9ac32a": "61f3c9f8eaf7ee59149bd24b640f96d4",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/17/7dc2ba63062c738d1d8644f6f3dd1b6e299b25": "e288d5dc15ddf63aaf592bd8a5097c57",
".git/objects/1a/a18338ae7471ea5a809b1b798c545b77d5e6b8": "8343f02da0c8dce765934e224bee4cd3",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/d16e315b1ba7ab3f7937788698537737fb52a9": "a840b4c0b3bf45e76551b791da70f64b",
".git/objects/27/d69ce4a5a373ab8138a9c5204f734457119cb1": "7a5a61acfa5d8adfd3bb4c90f89a4f5f",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/ee9012c495c426531b1ce35712accfeb9d1768": "c2f351a3d05f1a2f1b4c269ccaf2f19f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/36/451d14b8f6baf611885794e4bb547fc662ceaf": "bc8678c82df863b7bb5ef7f23ceb2c66",
".git/objects/37/d9b023ebe62d8c397e850ed34e1dc0e32366f3": "1d212389296738ba0e556b7e30fcdf5f",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/43/149ca60e85b7bfcf8443f2f619806b64237b05": "43e73db92dcc2075425b216f8066fc15",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b25e39f2d1d490bb60ac689350e4e976d7ed49": "f55c549cd6404d1790be75eb4466bf24",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/61/661d9eac43935054cc7958a5a788edca5f9c7f": "31ff50a89716a19cc672ff5c5f4d7db1",
".git/objects/63/9282d0c8e4b8c6a968d3f60b0c0a6b748933d4": "866689a624462594fff9a260389617a0",
".git/objects/68/5b6c0a5df972471842f64730daacb48d9c2c35": "2348debc16e3e8b2d0af8e572b515df9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/5e6f632adfa06e627889e5be36a497f3e910fb": "ac81eca0917c0b04d1c25b5754f6fb7b",
".git/objects/70/724c5972881848bfe5b55539ab1424583957fa": "0cbe225f1abd90b305a2fca80b6f290a",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/79/a87f83c822b6fb98ceae9dc0c95b8d9548b02b": "11c4a62569abdbacd8fe7e8f9bf9e7b7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/86/248dfac994bcf1be2e46ecd791932aed21ccbf": "e51784cc3355131f0b19d100f75f4b5f",
".git/objects/88/97f69b990b97c6bc658baa541493d02482e738": "9791a2826bf3f5cc3d8d4e5799d87bde",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/44350f485ab54b41eadc2e8c659c4c263e9357": "9ad4c2dadf5279112b0eb97a684b2c32",
".git/objects/8f/7943b1b5f7a6c2e402c095cac18ec6ad66e80d": "0448c2ae642975d2719d4c4364a1ef2f",
".git/objects/91/48af790112fe0cf83e34b8922b513012f6d14f": "1f2935961a82cbff6cf21e69c9c04b6b",
".git/objects/91/88bdd8fd0b962c1086acc25a26df7ceef2389c": "1c5bec0ab1c5711bf9ff35cc90bfbdd5",
".git/objects/93/e4e7886e76f063c22a0392bdd73925b304486a": "5ab8ca51a33445fee3f139ca137a5d3c",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/1bfa838b996fddfa397dcb15d30566121ee4e3": "74dbec3635ab0d3fd1c0eadb58a3488f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/a1043f4bf3020a0ff3a1c4e4e8d701620c08a3": "be4878e7fabba58604f78ecb9ee3b001",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/6b2877441db5eebe8aec14a0246f4f2ebf2d81": "d67dee5b4f141c3a531effc7355ab3fa",
".git/objects/a3/85443b9760af4eca1c857620bf4b0e185c1cf3": "562a6e72ab6a2ac68c45b69286933f05",
".git/objects/a4/4106cb72027944a5298c10da066c4b0039ba9e": "f0c47d37e24f40b1c262f3de256a8988",
".git/objects/a9/d912655a5609d584a41b6257c2d2638a2ff0d2": "b773af4d7ee116d07896836e51b7c45a",
".git/objects/ab/4f4e7c3b58804cfbda990a0090d1acd8ac38f0": "fe951c773568c7e42915f11b9b04901a",
".git/objects/ad/9fd301e6830560c346cb77f266b2d2f373f060": "c92fae34d24f96c077afa2feb90fcd73",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b1/24982f37bc2198467f3faf5e86a19b456fc2d0": "3c4aa8853ebe7ad3be2491bc20ff1545",
".git/objects/b3/e562ffe42f95262e5657c30cd7cd1f99f2a628": "eaeca32f571793314c618cc9e069f0ff",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/c2/40475832837eee40c2cf8afd0da5674f1aa0f9": "2ee0cd351fa7c783934accf040ae20fe",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d3/c762ca6b597c7ec7cd5944bd902c7fb49c9e3f": "ec8b4eba8d5b844d21cf2509f2734db8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/072e7e182e193b0ec50c0ffe116a67e61385cd": "231b0a7822c81c6978fb1f2ac77e6dbe",
".git/objects/df/7959ba834c665f6a5b1f32e7436aa67914a01c": "8a1fb4206fbbfdb089924c50519d872f",
".git/objects/e1/eeb30ab7747c70fd53f2845c0d1c3b5bdff04e": "d1e42edc2fbcb6cb023510a9545676b7",
".git/objects/e2/c6290724f4aba5708e0fc2ec58fd827f22e590": "e89a364ecb1110a15a296ca665e76120",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e3/eadfbf19b113188add60e1b2aa12bd2bfb5c76": "a963b47056b0ab686ffc51e704c0d906",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/59badd2d98ee8097d99093f25186512d671cd5": "2b222f06aed359b9dd5bdc0eefa0c841",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/9ba56a4c94f3ab8ca21648ec993f996c42200a": "48264dea8c6dcf4f3c8a66b1dd920f0a",
".git/objects/f9/b71d69e28f28d188048008d89f6d8a5f566d9b": "6c11b50c6659191c6274c8fdcf7e24bd",
".git/objects/fa/0e4ea59342b14eacf0cd50fcef1c740517f0b4": "fa7f9b5e12951b8052d23878cf12cf67",
".git/objects/fb/ddca2afc0e0940da9d401ef33ef8fac7d380a5": "ee20e59d7be0de05c3254045e519ed95",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/9122a49eada90af33d2ef8eea8e5f638958419": "5678def34007b65e199859b991958b34",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/ea8e7a1d9450e21f1819110fa12bfc04737d4c": "41b627d5cbd3cccc4ccb2a440c57f9ed",
".git/refs/heads/main": "e54025ea383af749b7a1b0106b7ed1ed",
"assets/AssetManifest.bin": "71d39a77d55acb3357e425b3e9fd3590",
"assets/AssetManifest.bin.json": "7e8d529454f3e992bbabe20d63c2f5d4",
"assets/AssetManifest.json": "91d25a0a97da200b836c6242664f61d6",
"assets/assets/images/background.png": "ce2274212bf44c76ac08693f523526ca",
"assets/assets/images/background1.png": "0a09ef30dbc9c80e823cd240da635ef3",
"assets/assets/images/backgroundcarrier.png": "45a6dd08ce63f065efdebfbb4a943f8e",
"assets/assets/images/backgroundheadlamp.png": "d6358f2becc6b8977e504014259a9264",
"assets/assets/images/backgroundhydropack.png": "37644888fad90323c76fd3b8a7489161",
"assets/assets/images/backgroundjacket.jpg": "7010ff40cf5056d19925a7101615b9b4",
"assets/assets/images/backgroundkomporportable.png": "72adbafc963a26f597abe013f2bb6d5c",
"assets/assets/images/backgroundsarungtangan.png": "c89924feb6ad509e366891ff4ed259f8",
"assets/assets/images/backgroundsepatu.png": "a79db03aa348c70c06093c7d0383ef87",
"assets/assets/images/backgroundsleepingbag.png": "676cd9d1c8b4b8454c76d6368753a76d",
"assets/assets/images/backgroundtenda.jpg": "4eebb8c2d1e1333d26d4f9e1a13ecee1",
"assets/assets/images/backgroundtrackingpole.png": "77523456864b84be206e477141451798",
"assets/assets/images/carrier.png": "27bd9dbf930ae7ab5d0d08784cd06b4c",
"assets/assets/images/carrier2.png": "a40d395f1e1bd7d9893814ddd241f97b",
"assets/assets/images/carrier60L.png": "e125ab44724f329f7c4c20329dd61f90",
"assets/assets/images/Diskon.png": "ded4f7019552d51d907d808cced8e1f2",
"assets/assets/images/fais.png": "20082e5680b6569acbe1d5d1e93af05c",
"assets/assets/images/Headlamp.png": "137cb0103038e43abf4fb7a16d1667db",
"assets/assets/images/Hydropack.png": "6fb68cf28b98ef50724e8ebe2aa6bab0",
"assets/assets/images/jacket1.png": "9808183407ddd54df638c61410b9df0a",
"assets/assets/images/jacket2.png": "d53f8e7c5b97e0d4569ff607eb95b0da",
"assets/assets/images/jacket3.png": "69effaa25d68cf9e1df94337c8994f5d",
"assets/assets/images/komporportable.png": "e9be718f52fd54c9cdf67bd34e610ae3",
"assets/assets/images/logo.png": "a0c2ca3cc58c32008a937a86b69f0e94",
"assets/assets/images/Mountain.png": "7707478946a72585af1861781b864785",
"assets/assets/images/Outdoor.png": "d9b2f3821a10b94338c81091b3cf7046",
"assets/assets/images/Sarungtangan.png": "45ed7127379975240793b5f627beed3b",
"assets/assets/images/Sepatu.png": "7d674fc6bd5a0153a374dca14b2896b8",
"assets/assets/images/Sepatu2.png": "c8dce0a9b7eb27c05ce74e0446b493cc",
"assets/assets/images/Sepatu3.png": "6a3bfa0350a70aa696d5bf64f473ad4c",
"assets/assets/images/Sepatu5.png": "56642e5957e850a01aa217de9395c3d5",
"assets/assets/images/sleepingbag.png": "97d10c46ea19d256e35a33026b2d6f58",
"assets/assets/images/Tenda.png": "8399f231b725dfac8a33471eafd02a5f",
"assets/assets/images/Tenda2.png": "5860f2b68b5c38d46ea61f9ec155b07d",
"assets/assets/images/trackingpole1.png": "018ef206e70d234c6feb4c92eb47caf6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "24e1d62b8b4f1d8e08ca6042776cfdea",
"assets/NOTICES": "b6f7552b4af601ea1a8e4c826cca2651",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "a0c2ca3cc58c32008a937a86b69f0e94",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "074a5fcba60e7daecc7201945947e922",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "a0c2ca3cc58c32008a937a86b69f0e94",
"index.html": "f7e3b6a51a8e095f835a101d7225dabc",
"/": "f7e3b6a51a8e095f835a101d7225dabc",
"main.dart.js": "f4365ab1e16db14eb6fbe452e9c08c5b",
"manifest.json": "dc28004f01cc4cec285a7cb67c46156b",
"version.json": "0253b4f5390261cb3679fc1177344210"};
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
