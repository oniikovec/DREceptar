const RECIPES_DATA = [
  {
    title: 'ondrejovy-brioche-buns',
    items: [
      {
        id: 1,
        name: 'Ondřejovy Brioche Buns',
        url: 'ondrejovy-brioche-buns',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/dreceptar.appspot.com/o/brioche-buns.jpg?alt=media&token=fd041f09-6924-4b17-85a7-863039293ec7',
        createdAt: '14. 5. 2020',
        ingredients: [
          '1000 g hl. mouka na kynuté těsto (100 %)',
          '300 g vody 33°C (30 %)',
          '6x vejce M (30 %)',
          '200 g nemáslo (20 %)',
          '100 g cukr (10 %)',
          '20 g sůl (2 %)',
          '14 g sušené droždí (1,5 %)',
        ],
        instructions: [
          'Voda do mísy. Moc studená neaktivuje droždí, moc teplá zabije droždí. Ideál je 33°C.',
          `Vsypat droždí a rozpustit ve vodě jemným mícháním. Důležité! Po přidání každé ingredience se musí vše pořádně rozmíchat, aby vznikla jednotná hmota. V průběhu nepřidávat ani mouku ani vodu, vše se i tak spojí.`,
          'Přidat vejce a pečlivě rozmíchat.',
          'Přidat cukr a sůl a rozpustit.',
          'Přidat rozpuštěné máslo, ne moc teplé (max  36°C, pokud byla studená vajíčka a je např. zima, máslo může být teplejší, aby ohřálo zbytek těsta na ideální teplotu pro droždí), a pečlivě rozmíchat.',
          'Nakonec vsypat mouku a hníst v robotu aspoň 10 minut na rychlost 4.',
          'Kouli těsta vložíme do kryté nádoby a necháme kynout při pokojové teplotě.',
          'Po 30 min první stretch & fold.',
          'Po dalších 30 min druhý stretch & fold.',
          'Není podmínka. Těsto dáme do ledničky (4°C) a necháme zrát okolo 9 h. Každých 9°C dvojnásobí/půlí rychlost fermentace. Čím pomalejší kynutí, tím komplexnější chuť.',
          'Těsto vyndat z lednice a nechat 1 h při pokojové teplotě.',
          'Rozdělit na 20 stejných částí (95g, Amálka 50 g).',
          'Tvarování bulky. Přeložit ze všech stran, ohyby dolů a košíčkem z ruky dotahovat bulku kroužením po stole. Malíček a palec pořád na stole.',
          'Bulky nechat odpočinout cca 20 min, jemně rozplácnout, znovu přeložit a vytvarovat kroužením po stole znovu do tvaru bulky. Čím víc dotaženější budou, tím víc budou kynout nahoru a ne do stran.',
          'Naskládat na plech, přikrýt utěrkou, aby nezaschly a nechat vykynout 2 h – v teple! Dokud pořádně nevykynou, nepéct!', 
          'Po vykynutí jemně! a rovnoměrně potřít rozmíchaným vajíčkem s kapkou nemléka.',
          'Péct na 180°C (horkovzduch) cca 12 minut na střední pozici.',
          'Po vyndání z trouby nechat odpočinout pod utěrkou.',
        ]
      }
    ],
  },
  {
    title: 'ondrejova-pizza-napoletana',
    items: [
      {
        id: 2,
        name: 'Ondřejova Pizza Napoletana',
        url: 'ondrejova-pizza-napoletana',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/dreceptar.appspot.com/o/pizza.jpg?alt=media&token=45dfaab0-f1c8-490f-97a9-8bac2f764eae',
        createdAt: '25. 6. 2020',
        ingredients: [
          '800 g hl. mouka babišina na pizzu (100 %)', 
          '560 g voda (70 %)',
          '22 g sůl (2,75 %)',
          '1,6 g čerstvé droždí (0,2 %)',
        ],
        instructions: [
          'Do vody vsypat sůl a zcela rozmíchat.',
          'Přidat cca 10 % mouky a rozmíchat.',
          'Až nyní přidat rozdrobené droždí, pečlivě rozmíchat.',
          'Dosypat mouku a uhníst na rychlost 4 cca 5 minut.',
          'Nechat odpočinout 30 minut.',
          'Hníst dalších 20 minut a vybudovat pořádnou sílu těsta.',
          'Dokončit dotahováním koule na stole, do hladka. Zpočátku může trošku lepit, nepodsypávat ani nenamáčet!',
          'Finální stretch&fold a dotažení.',
          'Kouli vložíme do zakryté mísy a necháme v teplejším prostředí 1 hodinu kynout (moc nenakyne).',
          'Po hodině těsto vyklopíme a rozdělíme na jednotlivé pizzy. 6x 200 g menší osobní pizza + 1x Amálka 150 g.',
          'Vytvoříme pořádně dotažené "mozzarely", které naskládáme do nádoby na kynutí vysypané moukou. Pizzy poprášíme moukou a pečlivě zakryjeme, aby se tam nedostal žádný vzduch a neokoraly.',
          'Necháme fermentovat. Po 4 hodinách pokojového kynutí je těsto už použitelné. Po 24 h kynutí v lednici je ideální. V lednici uchovat maximálně 7 dní, záleží na vnitřní teplotě.',
          'Před pečením necháme 2 h v pokojové teplotě a stále zakryté.',
          'Pizzu tvarujeme tak, jak kynulo, vršek je vršek a spodek je spodek. Posypeme a podsypeme krupičkou/semolinou (už ne moukou!).',
          'Plochou prstů tvarujeme okraj, který nikdy nemačkáme, stejně tak moc nemačkáme střed. Když už víc mačkat nejde, bereme pizzu na pěsti a rozházíme si jí do požadované velikosti nebo ji vyfackujeme.',
          'Lopatu posypeme semolinou/krupicí a přehodíme na ní pizzu. Doroztáhneme do požadované velikosti. Ozdobíme a moc to nezdržujeme, aby se sugo nepropilo a tím nepřilepilo těsto k lopatě. Na okraje lehce oliváč. Čas od času můžeme těstem na lopatě pošoupnout.',
          'Otevřeme rozpálenou troubu na max (zapnutá alespoň hodinu před pečením), tím termostat začne troubu dohřívat, pizzu položíme na ocelový plát a necháme 60 s. Poté zašoupneme dovnitř a zavřeme. Po 120 s vyndaváme.',
          'Necháme odpočinout na mřížce a dosprejujeme oliváčem.',
        ],
        tips: [
          'Každých 9°C dvojnásobí/půlí rychlost fermentace, čím pomalejší kynutí, tím komplexnější chuť těsta.',
          'Když těsto při hnětení moc lepí, stačí chvíli počkat, nepřisypávat mouku!',
          'Při nízké teplotě bude pizza ještě před zhnědnutím suchá a tvrdá a sýr pustí vodu. A to nechceš.',
          'Nepředtvarovávat okraje, vzduch se pak nedostane do krusty.',
          'Na ocel nepošupovat, ale jen odtahovat k sobě, aby se pizza nesmrskla.',
          'Pozor na olej na lopatě.',
        ],
      }
    ],
  },
  {
    title: 'ondrejuv-sourdough-bread',
    items: [
      {
        id: 3,
        name: 'Ondřejův Sourdough Bread',
        url: 'ondrejuv-sourdough-bread',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/dreceptar.appspot.com/o/sourdough-bread.jpg?alt=media&token=a2f78416-b463-4160-b87c-317e418a4c8c',
        createdAt: '2. 1. 2020',
        ingredients: [
          '200 g hoven',
          '500 g vody'
        ],
        instructions: [
          'Zaprvné nekaďte při vaření',
          'Zadruhé vůbec nesmí jídlo přijít do styku s bordelem'
        ]
      }
    ],
  },
];

export default RECIPES_DATA;