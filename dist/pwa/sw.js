if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const r=e=>s(e,d),b={module:{uri:d},exports:f,require:r};i[d]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(a(...e),f)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"chess-web"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutLayout.05fb739b.js",revision:"d168a5046c90e70b549b61648e4b08a1"},{url:"assets/AboutLayout.12c341b5.css",revision:"4877ed2e3a43bed04b3a83b2a84812f8"},{url:"assets/AboutPage.5f599107.js",revision:"b39fe0e7a5e62ae91314dff5e285bbe2"},{url:"assets/AboutPage.b7d16c28.css",revision:"72f814b2f3ada10401dc7dedff844d6f"},{url:"assets/AccordionItem.08e3026a.css",revision:"f1afd70b3eceea8a01c26d19c7be37e6"},{url:"assets/AccordionItem.dfdd69f5.js",revision:"79cd57bb1ca9333fc8db9f957c2e61a7"},{url:"assets/ErrorNotFound.a285d8dd.js",revision:"cdd3c7fdc63d5fc4b589956d60a31f8f"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.3aa13442.css",revision:"a84ee2edfb5b46135a28a6383a2d6209"},{url:"assets/index.db886113.js",revision:"a0cbf08a463c071ada907eb9d9fc4759"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/logo.c55df972.png",revision:"dbf94c1c5bb0c5da393d5a092428808b"},{url:"assets/MainLayout.15af87ef.css",revision:"2e255899ac76a9a3ccafa7c3f4eadb23"},{url:"assets/MainLayout.d887ec75.js",revision:"5acff2b4a7275dab3a3cbb12fecdb211"},{url:"assets/MobileNavBar.4dd00c79.js",revision:"2ea6abffc43e27184b42e6e4a4d96314"},{url:"assets/MobileNavBar.827ca3b3.css",revision:"c525d37f227b4daaacb01e7aeb36a31e"},{url:"assets/QItemLabel.a4265979.js",revision:"b586ce9996f240e368e12c6d9a76c21c"},{url:"favicon.ico",revision:"389898d6685c07e5e8475612c7d03095"},{url:"icons/apple-icon-120x120.png",revision:"2524c5ce13dc8468e8bde4723400657e"},{url:"icons/apple-icon-152x152.png",revision:"3973c2181f4e945f691b09620b4b278c"},{url:"icons/apple-icon-167x167.png",revision:"57a34cdfff1f687163d071fa16244c71"},{url:"icons/apple-icon-180x180.png",revision:"cc95c04a84a9f48f2cf22830e0daeba4"},{url:"icons/github-mark-white.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"icons/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"icons/icon-128x128.png",revision:"d9cee026ba062be515ea967c7b52ba0b"},{url:"icons/icon-192x192.png",revision:"20043c029a69d3e7a80541b2c3caf263"},{url:"icons/icon-256x256.png",revision:"1eeec8889a2639131aa80977e922957d"},{url:"icons/icon-384x384.png",revision:"ecdf3822711e24dfa9be72a649ea407b"},{url:"icons/icon-512x512.png",revision:"62ada49275b83e701db383f4b41eab55"},{url:"icons/ms-icon-144x144.png",revision:"6e5b65fa9d5a3b30cba3ff558895e13a"},{url:"icons/safari-pinned-tab.svg",revision:"41ef26d6a62d38115344ae3cd94c39d2"},{url:"img/b_king_card_dark.png",revision:"1aa4db22931c0489638b1f156a737c8d"},{url:"img/b_king_card_light.png",revision:"09ed3ae217af009b7dfca71902700d67"},{url:"img/board_green_static.png",revision:"a660c1e4f0d85d898b7511f175170458"},{url:"img/board_green.png",revision:"b0749ba665f4d92076f64207e5b84b01"},{url:"img/pieces/B_BISHOP_D_H.svg",revision:"8e84de1494e399f31895095a9f2a8094"},{url:"img/pieces/B_BISHOP_D.svg",revision:"d13729ef061dfabddf0b4486f843e214"},{url:"img/pieces/B_BISHOP_L_H.svg",revision:"af433db6bf70d92e1c229a6917e7aaee"},{url:"img/pieces/B_BISHOP_L.svg",revision:"4706a38daa151c86025419dfb61032ea"},{url:"img/pieces/B_BISHOP.svg",revision:"e15b0ee207ce4573e666b87181d9e1a0"},{url:"img/pieces/B_KING_D_H.svg",revision:"f05b769465c1b480239f59d6b91fef31"},{url:"img/pieces/B_KING_D.svg",revision:"b03b151cd12b09159ed420c6270ef1ea"},{url:"img/pieces/B_KING_L_H.svg",revision:"4ca4094638ebf5b3f078ff47274d9a62"},{url:"img/pieces/B_KING_L.svg",revision:"3faef8f0f825cf07f4f23230d688aa4a"},{url:"img/pieces/B_KING.svg",revision:"8805b9ad76d4f1221ec00427c248fb3a"},{url:"img/pieces/B_KNIGHT_D_H.svg",revision:"e10162d3978ebb950535708352432a7a"},{url:"img/pieces/B_KNIGHT_D.svg",revision:"be3ab0b78dc6f10a4d1f6856ce356336"},{url:"img/pieces/B_KNIGHT_L_H.svg",revision:"a5c0247df789d43337c50e63cb5f0a11"},{url:"img/pieces/B_KNIGHT_L.svg",revision:"1cd73e83c146c556afa9ef8a7570f40d"},{url:"img/pieces/B_KNIGHT.svg",revision:"c4efa472dda0b437e482ff980be3432a"},{url:"img/pieces/B_PAWN_D_H.svg",revision:"7b0bdd31aee53ccdae42c74563fbc294"},{url:"img/pieces/B_PAWN_D.svg",revision:"fd68327cad380fbd06838bcc583466ae"},{url:"img/pieces/B_PAWN_L_H.svg",revision:"fe8f0b3351ebdf49dc044ac4bd6e7c22"},{url:"img/pieces/B_PAWN_L.svg",revision:"3c99fda0ccea1d3993aa10289787ca23"},{url:"img/pieces/B_PAWN.svg",revision:"3460a4dbabeb6229b5265e3c3fe2f89f"},{url:"img/pieces/B_QUEEN_D_H.svg",revision:"648e3279c0664636a1db34d8c449e7b7"},{url:"img/pieces/B_QUEEN_D.svg",revision:"d59def31930b3b223759cda866689c2b"},{url:"img/pieces/B_QUEEN_L_H.svg",revision:"31efd06c58c1ded2ecaf90924ccef1e3"},{url:"img/pieces/B_QUEEN_L.svg",revision:"eaf3a4ac19d2702df10cf412196b283b"},{url:"img/pieces/B_QUEEN.svg",revision:"883cb67d56866c66744c758c313925d3"},{url:"img/pieces/B_ROOK_D_H.svg",revision:"38b6f6600e16f4484dbe2bf2bab14b28"},{url:"img/pieces/B_ROOK_D.svg",revision:"6c7ca9a120f7882a16c59444d5785fcd"},{url:"img/pieces/B_ROOK_L_H.svg",revision:"703065759d3d351cc07a76b954123bf6"},{url:"img/pieces/B_ROOK_L.svg",revision:"27609a566d1688eadc543fec59d0ae2e"},{url:"img/pieces/B_ROOK.svg",revision:"04e3c6522825889c03b0bfea1daa5494"},{url:"img/pieces/EMPTY_D_H.svg",revision:"996862ae025fa5ce85d684e5390fd37a"},{url:"img/pieces/EMPTY_D.svg",revision:"ccc8c18bfe71bf7c1119d15a312f7965"},{url:"img/pieces/EMPTY_L_H.svg",revision:"6cfbff5cd351c28193ee22bffb1341f3"},{url:"img/pieces/EMPTY_L.svg",revision:"8d51184bf2391bf05f5755c16fd0fbf4"},{url:"img/pieces/W_BISHOP_D_H.svg",revision:"eb7f2fba3b288639ae9bb03450548f71"},{url:"img/pieces/W_BISHOP_D.svg",revision:"bd0f94dfd4cb6dd7abde2f7198375e0f"},{url:"img/pieces/W_BISHOP_L_H.svg",revision:"6ffd5cf60a05ad9c45543f43a29e871a"},{url:"img/pieces/W_BISHOP_L.svg",revision:"cd38ce30bd2e55c6f16f2772d21f3983"},{url:"img/pieces/W_BISHOP.svg",revision:"8fc8c11506ad59de57fdbec7c65f6a69"},{url:"img/pieces/W_KING_D_H.svg",revision:"2e56e56d9d5b7dc0a6503b28469f166e"},{url:"img/pieces/W_KING_D.svg",revision:"565834817f7519ed2a28c9ad14fc82b6"},{url:"img/pieces/W_KING_L_H.svg",revision:"ac5494e6e6c669a7af6698dcf5c398f5"},{url:"img/pieces/W_KING_L.svg",revision:"b6a0828804f8fefba360bb2d8a84b472"},{url:"img/pieces/W_KING.svg",revision:"4020a2b01363a0a87912f8ede70b2b51"},{url:"img/pieces/W_KNIGHT_D_H.svg",revision:"d40afeb048d6490ef5bdaa4f39bb7b9b"},{url:"img/pieces/W_KNIGHT_D.svg",revision:"39f599c692eca387ae4199a436b680be"},{url:"img/pieces/W_KNIGHT_L_H.svg",revision:"2a3da7dd27ad7de87c777554c574a295"},{url:"img/pieces/W_KNIGHT_L.svg",revision:"353dcd56e5f41a9e2ac4c9737bf30070"},{url:"img/pieces/W_KNIGHT.svg",revision:"1c61396622bfc5579272cfa45ecefa55"},{url:"img/pieces/W_PAWN_D_H.svg",revision:"153decd3fb3a36e5e9596cab64edf57f"},{url:"img/pieces/W_PAWN_D.svg",revision:"a429721590da337bd6be61d29c483bd4"},{url:"img/pieces/W_PAWN_L_H.svg",revision:"757d0d8baad820dec9a92f27bb7e7b8a"},{url:"img/pieces/W_PAWN_L.svg",revision:"739c4793e78189ebbfa89e64ff72d4cf"},{url:"img/pieces/W_PAWN.svg",revision:"41ef26d6a62d38115344ae3cd94c39d2"},{url:"img/pieces/W_QUEEN_D_H.svg",revision:"0e53e0f215450a62ca1ff8716d7f1278"},{url:"img/pieces/W_QUEEN_D.svg",revision:"7796526dd675156db2df699f3d50a89d"},{url:"img/pieces/W_QUEEN_L_H.svg",revision:"ec74fb0597e04a5d049a460b5d3277d5"},{url:"img/pieces/W_QUEEN_L.svg",revision:"1f125422ca144eaba56b10aff1ee17b4"},{url:"img/pieces/W_QUEEN.svg",revision:"f6eaba69c7798dddcae04b8dceceb10b"},{url:"img/pieces/W_ROOK_D_H.svg",revision:"b480e52c744dd8ffa1acd396e3e0b958"},{url:"img/pieces/W_ROOK_D.svg",revision:"d206acbe342ef8f8e9791e992daadefd"},{url:"img/pieces/W_ROOK_L_H.svg",revision:"0ee8d3989882b6768d08257b9392c6d8"},{url:"img/pieces/W_ROOK_L.svg",revision:"28c4e501898a97455f846de346799108"},{url:"img/pieces/W_ROOK.svg",revision:"708bdc1557c515973eaeb15bae0b3904"},{url:"img/W_B_KING.png",revision:"179303a6cccb5a31b4068b3f1e41dcd3"},{url:"img/w_king_card_dark.png",revision:"392c81ad8f4e2026ed2152c523b27020"},{url:"img/w_king_card_light.png",revision:"e1a517503281e311d6fd5be692f6f613"},{url:"index.html",revision:"e429ecc365e21fbf1efe20cc98bf4ef2"},{url:"manifest.json",revision:"449ae26d6dcfeed8c15d414016045142"},{url:"sounds/capture.mp3",revision:"37492b77267dc81390a1975a1974cb11"},{url:"sounds/check.mp3",revision:"73abf8cb37d49273447dc35ed2bfdb39"},{url:"sounds/move.mp3",revision:"65946e4b785d6a5a2ddfe8b06099e38b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));