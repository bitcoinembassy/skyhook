var Help = (function() {
  var qaMap = { };

  return {
    addQA : function(lang, question, answer) {
      if (!qaMap[lang]) {
        qaMap[lang] = new Array();
      } 
      qaMap[lang].push([question, answer]);
    },
  
    getQAList : function(lang) {
      return (qaMap[lang] ? qaMap[lang] : []);
    }
  };
})();

/* LANG: en */

Help.addQA("en",
  "What is bitcoin?",
  "Bitcoin is an open-source decentralized protocol. \
   It is also a unit of account within that protocol. \
   <br /><br /> \
   Learn more at bitcoin.org"
);


Help.addQA("en",
  "How do I use this vending machine?",
  "<b>New Users of Bitcoin</b> \
   <ol> \
     <li>Go to https://blockchain.info/wallet/new on your smartphone and set up a new bitcoin wallet.</li> \
     <li>After creating a new wallet and logging in, you'll see the QR code of your default bitcoin address under the \"Wallet Home\" section of your app.</li> \
     <li>Scan your QR code into Skyhook and verify that the addresses match by selecting YES when prompted.</li> \
     <li>Insert Cash</li> \
     <li>Buy Bitcoins</li> \
   </ol> \
   <b>Existing Users of Bitcoin</b> \
   <ol> \
     <li>Scan Your QR Code</li> \
     <li>Insert Cash</li> \
     <li>Buy Bitcoins</li> \
   </ol>"
);

Help.addQA("en",
  "How do I get a bitcoin wallet?",
  "While there are several options available, but we recommend blockchain.info's online wallet for new users. \
   <br /><br /> \
   Additionally we encourage Skyhook operators to offer bitcoin wallet solutions for new bitcoin users."
);

Help.addQA("en",
  "What is a QR code?",
  "QR or 'Quick Response' codes are machine-readable codes consisting of a grid of black and white squares, \
   typically used for storing URLs or other information for use on a smartphone."
);

Help.addQA("en",
  "How do I display my bitcoin address as a QR code?",
  "After logging in to https://blockchain.info/wallet, you'll see the QR code for your default bitcoin address on the \"Wallet Home\" page. \
  <br /><br /> \
  If you are using a wallet that doesn't support QR code generation you can copy your public bitcoin address and paste it into the following website in order to generate a QR code. \
  <br /><br /> \
  http://bitcoinqrcode.org/"
);

Help.addQA("en",
  "Is it safe?",
  "While the bitcoin protocol is safe and secure, incorrect use of a wallet may result in your bitcoins being lost or stolen. In order to understand how to properly secure your coins, please visit the website below. \
  <br /><br /> \
  http://bitcoin.org/en/you-need-to-know" 
);

Help.addQA("en",
  "What can I buy with bitcoins?",
  "Here's an article on the subject. http://btcpdx.com/buy"
);


/* LANG: fr  */


Help.addQA("fr",
  "Quel est Bitcoin?",
  "Bitcoin est un protocole décentralisé open-source . Il est également une unité de tenir compte dans ce protocole. \
  <br /><br /> \
  en savoir plus à bitcoin.org"
);

Help.addQA("fr",
  "Comment puis-je utiliser ce distributeur?",
  "<b>nouveaux utilisateurs de Bitcoin</b> \
   <ol> \
     <li>Aller à https://blockchain.info/wallet/new sur votre smartphone et mettre en place un nouveau portefeuille de bitcoin.</li> \
     <li>Après la création d' un nouveau portefeuille et connecté, vous verrez le code QR de votre adresse bitcoin par défaut dans la section \"Wallet Home\" de votre application.</li> \
     <li>Balayez votre code QR dans Skyhook et vérifier que le adresses correspondent en sélectionnant OUI lorsque vous êtes invité.</li> \
     <li>Insérez trésorerie</li> \
     <li>Acheter Bitcoins</li> \
   </ol> \
   <b>Les utilisateurs existants de Bitcoin</b> \
   <ol> \
     <li>Scannez votre QR Code</li> \
     <li>Insérez trésorerie</li> \
     <li>Acheter Bitcoins</li> \
   </ol>"
);

Help.addQA("fr",
  "Comment puis-je obtenir un portefeuille bitcoin?",
  "Bien qu'il existe plusieurs options disponibles , mais nous recommandons portefeuille en ligne de blockchain.info pour les nouveaux utilisateurs. \
  <br /><br /> \
  De plus, nous encourageons les opérateurs Skyhook pour offrir portefeuille bitcoin solutions pour les nouveaux utilisateurs de bitcoin."
);

Help.addQA("fr",
  "Qu'est-ce qu'un QR Code?",
  "QR ou codes de &#34;Quick Response&#34; sont des codes lisibles par machine \
  consistant en une grille de carrés noirs et blancs, généralement utilisé pour \
  stocker les URL ou d'autres informations pour une utilisation sur un smartphone."
);

Help.addQA("fr",
  "Comment puis-je afficher mon adresse bitcoin comme un code QR?",
  "Une fois connecté à https://blockchain.info/wallet , vous verrez le code QR pour votre bitcoin par défaut répondre sur la page &#34;Wallet Home&#34;. \
  <br /><br /> \
  Si vous utilisez un porte-monnaie qui ne supporte pas la génération de code QR \
  vous pouvez copier votre adresse bitcoin public et de le coller dans le texte suivant \
  site Web afin de générer un code QR. \
  <br /><br /> \
  http://bitcoinqrcode.org/"
);

Help.addQA("fr",
  "Est-il sécuritaire?",
  "Bien que le protocole de bitcoin est, une mauvaise utilisation sécuritaire d'un portefeuille \
  peut entraîner vos bitcoins perte ou de vol. Afin de comprendre comment sécuriser correctement \
  vos pièces de monnaie, s'il vous plaît visitez le site ci-dessous. \
  <br /><br /> \
  https://bitcoin.org/fr/vous-devez-savoir"
);

Help.addQA("fr",
  "Que puis-je acheter avec bitcoins?",
  "Voici un article sur le sujet. http://btcpdx.com/buy"
);



/* LANG: de */


Help.addQA("de",
  "Was ist Bitcoin?",
  "Bitcoin ist ein quelloffenes dezentralisiertes Protokoll. Au&szlig;erdem ist es eine Verrechnungseinheit innerhalb des Protokolls. \
  <br /><br /> \
  erfahre mehr auf bitcoin.org"
);

Help.addQA("de",
  "Wie verwende ich diesen Automaten?",
  "<b>Neue Bitcoin Anwender</b> \
   <ol> \
     <li>Gehe auf https://blockchain.info/wallet/new auf Deinem Smartphone und richte eine neue Bitcoin Wallet ein.</li> \
     <li>Nach dem Erstellen einer neuen Bitcoin Wallet und dem Login, siehst Du den QR Code deiner Standart-Wallet unter dem Reiter &quot;Wallet Home&quot;</li> \
     <li>Scanne deinen QR Code mit dem Skyhook Automaten und best&auml;tige die gescannte Adresse mit JA, wenn du dazu aufgefordert wirst.</li> \
     <li>Gebe Geldnoten ein</li> \
     <li>Kaufe Bitcoins</li> \
   </ol> \
   <b>Anwender mit Bitcoin-Wallet</b> \
   <ol> \
     <li>Scanne deinen QR Code</li> \
     <li>Gebe Geldnoten ein</li> \
     <li>Kaufe Bitcoins</li> \
   </ol>"
);

Help.addQA("de",
  "Wie bekomme ich eine Bitcoin Wallet?",
  "Es gibt eine Vielzahl verf&uuml;gbarer Anbietet, wir empfehlen jedoch blockchain.info&#39;s Online Wallet f&uuml;r neue Anwender. \
  <br /><br /> \
  Zus&auml;tzlich m&ouml;chten wir Betreibern von Skyhook Automaten nahelegen, neuen Bitcoin Anwendern proaktiv Bitcoin Wallets vorzuschlagen."
);

Help.addQA("de",
  "Was ist ein QR-Code?",
  "QR oder &quot;Quick Response&quot; Codes sind maschinenlesbare Codes, welche aus einem \
  Gitter schwarzer und weisser Rechtecke bestehen. Diese werden meistens verwendet, um URLs \
  oder andere Informationen f&uuml;r die Verwendung auf einem Smartphone zu speichern."
);

Help.addQA("de",
  "Wie zeige ich meine Bitcoin-Adresse als QR Code an?",
  "Nach dem Login auf https://blockchain.info/wallet, siehst du den QR Code f&uuml;r deine Standart Bitcoin-Wallet unter dem Reiter &quot;Wallet Home&quot;. \
  <br /><br /> \
  Wenn du eine Wallet verwendest, die das Generieren von QR Codes nicht unterst&uuml;tzt, \
  kannst du deine &ouml;ffentliche Bitcoin-Adresse auch kopieren und auf der nachfolgenden \
  Website einf&uuml;gen, um einen QR Code zu Erzeugen: \
  <br /><br /> \
  http://bitcoinqrcode.org/"
);

Help.addQA("de",
  "Ist es sicher?",
  "W&auml;hrend das Bitcoin Protokoll sicher und gesch&uuml;tzt ist, kann die fehlerhafte Verwendung \
  deiner Wallet zum Verlust oder Diebstahl deiner Bitcoins f&uuml;hren. Um mehr &uuml;ber den sicheren \
  Umgang mit deinen Bitcoins zu lernen, besuche die nachfolgende Website: \
  <br /><br /> \
  https://bitcoin.org/de/das-sollten-sie-wissen"
);

Help.addQA("de",
  "Was kann ich mit Bitcoins kaufen?",
  "Hier ist ein (englischsprachiger) Artikel zu diesem Thema: http://btcpdx.com/buy"
);


/* LANG: es */


Help.addQA("es",
  "¿Qué es bitcoin?",
  "Bitcoin es un protocolo descentralizado de código abierto. También es una unidad de tener en cuenta dentro de ese protocolo. \
  <br /><br /> \
  aprender más en bitcoin.org"
);

Help.addQA("es",
  "¿Cómo se utiliza esta máquina expendedora?",
  "<b>Nuevos usuarios de Bitcoin</b> \
   <ol> \
     <li>Ir a https://blockchain.info/wallet/new en su smartphone y configurar una nueva cartera bitcoin.</li> \
     <li>Después de crear una nueva cartera y entrar en él, verás el código QR de su por defecto la dirección bitcoin bajo la &#34;Wallet Home&#34; sección de su aplicación.</li> \
     <li>Escanear el código QR en Skyhook y verificar que el direcciones coinciden al seleccionar SÍ cuando se le solicite.</li> \
     <li>Inserte Efectivo</li> \
     <li>Comprar Bitcoins</li> \
   </ol> \
   <b>Los usuarios existentes de Bitcoin</b> \
   <ol> \
     <li>Explore su Código QR</li> \
     <li>Inserte Efectivo</li> \
     <li>Comprar Bitcoins</li> \
   </ol>"
);

Help.addQA("es",
  "¿Cómo consigo una billetera bitcoin?",
  "Si bien hay varias opciones disponibles, pero le recomendamos billetera en línea blockchain.info 's para los nuevos usuarios. \
  <br /><br /> \
  Además alentamos a los operadores de Skyhook para ofrecer billetera bitcoin soluciones para los nuevos usuarios de Bitcoin."
);

Help.addQA("es",
  "¿Qué es un código QR?",
  "QR o &#34;Quick Response&#34; códigos son códigos legibles por máquina \
  que consiste en una cuadrícula de cuadrados en blanco y negro, que se utiliza típicamente para \
  almacenar las direcciones URL o cualquier otra información para su uso en un teléfono inteligente."
);

Help.addQA("es",
  "¿Cómo puedo mostrar mi dirección bitcoin como un código QR?",
  "Tras iniciar sesión en https://blockchain.info/wallet, verás el código QR <200b><200b>para el bitcoin default abordar en el &#34;Wallet Home&#34; página. \
  <br /><br /> \
  Si está utilizando una billetera que no admite la generación de código QR \
  usted puede copiar su dirección bitcoin pública y pegarlo en la siguiente \
  página web con el fin de generar un código QR. \
  <br /><br /> \
  http://bitcoinqrcode.org/"
);

Help.addQA("es",
  "¿Es seguro?",
  "Si bien el protocolo de bitcoin es seguro y seguro uso, incorrecta de una cartera \
  puede dar lugar a tus bitcoins se pierden o son robados. Con el fin de entender \
  cómo proteger adecuadamente sus monedas, por favor visite el sitio Web más abajo. \
  <br /><br /> \
  https://bitcoin.org/es/debes-saber"
);

Help.addQA("es",
  "¿Qué puedo comprar con bitcoins?",
  "He aquí un artículo sobre el tema. http://btcpdx.com/buy"
);
