// menuData.ts — Official Full Menu Data for Taco Loco Cantina Mexicana Berlin

export interface MenuItem {
  nr?: number | string;
  name: string;
  price: string;
  desc?: string;
  descEn?: string;
  dietary?: string;
  badge?: string;
  spice?: number;
  subPrices?: { label: string; price: string }[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  icon?: string;
  badge?: string;
  items: MenuItem[];
}

export const fullMenu: MenuCategory[] = [
  {
    id: 'hausgemachte-getraenke',
    title: 'Hausgemachte Getränke',
    subtitle: 'Homemade Drinks — Frisch zubereitete erfrischende Cantina-Kreationen',
    note: 'Diese Getränke werden frisch für Sie zubereitet · These drinks are freshly prepared for you',
    icon: '🍹',
    items: [
      { nr: 260, name: 'Limo Cilantro', price: '5,90 €', desc: 'Koriander, Ingwer, Limetten, Zuckersirup, Mineralwasser', descEn: 'Coriander, ginger, lime, sugar syrup, mineral water', badge: 'FRISCH', dietary: 'Vegan' },
      { nr: 261, name: 'Limo Albahaca', price: '5,90 €', desc: 'Basilikumblüten, Zitronengras, Limettenblüten, brauner Zucker, Gurken, Ginger Beer', descEn: 'Basil flowers, lemongrass, lime flowers, brown sugar, cucumber, ginger beer', badge: 'BELIEBT', dietary: 'Vegan' },
      { nr: 262, name: 'Limo Naranjas', price: '5,90 €', desc: 'Orangen, Minze, Ingwer, Limetten, brauner Zucker, Schweppes Wild Berry', descEn: 'Oranges, mint, ginger, limes, brown sugar, Schweppes Wild Berry', badge: 'FRUCHTIG', dietary: 'Vegan' },
      { nr: 263, name: 'Limo Mango', price: '5,90 €', desc: 'Mangopüree, Ananas, Limetten, Zitronengras, brauner Zucker, Sprite', descEn: 'Mango puree, pineapple, lime, lemongrass, brown sugar, Sprite', badge: '★ TIPP', dietary: 'Vegan' },
      { nr: 264, name: 'Pueblas Fresa', price: '5,90 €', desc: 'Erdbeerpüree, Basilikum, Limettenblüten, Schweppes Wild Berry', descEn: 'Strawberry puree, basil, lime blossoms, Schweppes Wild Berry', badge: 'BEERIG', dietary: 'Vegan' },
      { nr: 265, name: 'Acapulco Tamarindo', price: '5,90 €', desc: 'Tamarinde, Minze, Koriander, Zuckersirup, Mineralwasser', descEn: 'Tamarind, mint, coriander, sugar syrup, mineral water', badge: 'MEXIKANISCH', dietary: 'Vegan' },
      { nr: 266, name: 'Santa Catarina', price: '5,90 €', desc: 'Frische Aloe Vera, Chiasamen, Bio Honig, Mineralwasser', descEn: 'Fresh aloe vera, chia seeds, organic honey, mineral water', badge: 'SUPERFOOD', dietary: 'Vegetarisch' },
      { nr: 267, name: 'Wild Berry', price: '5,90 €', desc: 'Frische Aloe Vera, Chiasamen, Schweppes Wild Berry', descEn: 'Fresh aloe vera, chia seeds, Schweppes Wild Berry', badge: 'ERFRISCHEND', dietary: 'Vegan' },
    ]
  },
  {
    id: 'suppen',
    title: 'Suppen & Eintöpfe',
    subtitle: 'Soups & Mexican Stews — Alle Suppen werden mit zwei Tortilla Broten serviert',
    note: 'Alle Suppen werden mit zwei Tortilla Brote serviert · All soups are served with two tortilla breads',
    icon: '🥣',
    items: [
      { nr: 1, name: 'Sopa de Verdura', price: '6,90 €', desc: 'Gemüsesuppe mit verschiedenem Gemüse', descEn: 'Vegetable soup with various vegetables', dietary: 'Vegan', badge: 'VEGAN 🌱' },
      { nr: 2, name: 'Sopa de Tortilla', price: '6,90 €', desc: 'Tomatensuppe mit Fetakäse und Guacamole', descEn: 'Tomato soup with feta cheese and guacamole', dietary: 'Vegetarisch', badge: 'VEGGIE' },
      { nr: 3, name: 'Chilli con Carne', price: '8,90 €', desc: 'Mexikanischer Eintopf mit Rinderhackfleisch, Bohnen, Mais und Jalapeños', descEn: 'Mexican stew with ground beef, beans, corn and jalapeños', spice: 2, badge: 'KLASSIKER' },
      { nr: 4, name: 'Chilli con Carne y Queso', price: '9,90 €', desc: 'Mexikanischer Eintopf mit Rinderhackfleisch, Bohnen, Mais, Jalapeños und mit Käse überbacken', descEn: 'Mexican stew with ground beef, beans, corn, jalapeños and gratinated with cheese', spice: 2, badge: '★ FAVORIT' },
    ]
  },
  {
    id: 'salate',
    title: 'Salate',
    subtitle: 'Salads — Knackig frische Salate, serviert in der Tortillaschale oder mit zwei Tortillas',
    icon: '🥗',
    items: [
      { nr: 10, name: 'Ensalada Mixta', price: '9,90 €', desc: 'Gemischter Salat mit hausgemachtem Dressing, Schafskäse, Croutons und Kaktusstreifen, serviert in einer Tortillaschale', descEn: 'Mixed salad with homemade dressing, sheep’s cheese, croutons and cactus strips, served in a tortilla bowl', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE 🌱' },
      { nr: 11, name: 'Caesar Chicken Salat', price: '11,90 €', desc: 'Gemischter Salat mit gegrillten Hähnchenbruststreifen, Caesar-Dressing, Parmesan und Croutons, mit zwei Tortillas serviert', descEn: 'Mixed salad with grilled chicken breast strips, Caesar dressing, parmesan and croutons, served with two tortillas', badge: 'BELIEBT' },
      { nr: 12, name: 'Avocado Chicken Salat', price: '12,90 €', desc: 'Gegrillte Hähnchenbruststreifen auf frischer Avocado mit Tomaten, Gurken, Paprika, roten Zwiebeln, Olivenöl und frischem Zitronensaft, in Tortillaschale', descEn: 'Grilled chicken breast strips on fresh avocado with tomatoes, cucumbers, peppers, red onions, olive oil and fresh lemon juice, served in a tortilla bowl', badge: '★ EMPFEHLUNG' },
      { nr: 13, name: 'Ensalada Ranchero', price: '14,90 €', desc: 'Gegrillte argentinische Rindersteakstreifen mit Eisbergsalat, Tomaten, Gurken, Paprika, Oliven, Kaktusstreifen und hausgemachter Sauce nach Chefkoch Art, mit zwei Tortillas', descEn: 'Grilled Argentinian beef steak strips with iceberg lettuce, tomatoes, cucumbers, peppers, olives, cactus strips and homemade chef-style sauce, with two tortillas', badge: 'STEAK SALAD' },
      { nr: 14, name: 'Ensalada Camarones', price: '14,90 €', desc: 'Gegrillte bangladeschische Garnelen mit diversen Blattsalaten, Tomaten, Gurken, Paprika, Oliven und exotischem Obst, mit zwei Tortillas serviert', descEn: 'Grilled Bangladeshi shrimp with various lettuces, tomatoes, cucumbers, peppers, olives and exotic fruit, served with two tortillas', badge: 'SEAFOOD 🦐' },
    ]
  },
  {
    id: 'vorspeisen',
    title: 'Vorspeisen & Nachos',
    subtitle: 'Starters — Perfekt zum Teilen und für den perfekten Start',
    note: 'Wir empfehlen unseren Guacamole, Sauerrahm und Salsa Dip dazu zu bestellen · We recommend ordering our guacamole, sour cream and salsa dip with it',
    icon: '🥑',
    items: [
      { nr: 19, name: 'Chips con Guacamole, Salsa, California Dip', price: '9,90 €', desc: 'Knusprige Mais Tortilla Schale gefüllt mit Nachos, dazu Guacamole, Salsa und California Dip', descEn: 'Crispy corn tortilla shell filled with nachos, served with guacamole, salsa and California dip', dietary: 'Vegetarisch', badge: '★ FAVORIT' },
      { nr: 20, name: 'Mexico Patatas', price: '10,90 €', desc: 'Backkartoffel gefüllt mit Chilli con Carne und Cheddar-Mozzarella-Mix mit Käse überbacken, serviert mit Salatgarnitur und Sauerrahm', descEn: 'Baked potato filled with chilli con carne and cheddar-mozzarella mix, gratinated with cheese, served with salad garnish and sour cream' },
      { nr: 21, name: 'Mega Nachos Mixtos', price: '15,90 €', desc: 'Mais Tortilla Chips mit Tomaten, Zwiebeln, Koriander, Jalapeños, Hähnchenfleisch und Rinderhackfleisch, dazu Salsa', descEn: 'Corn tortilla chips with tomatoes, onions, cilantro, jalapeños, chicken and ground beef, with salsa', badge: 'MEGA PORTION' },
      { nr: 22, name: 'Nachos con Queso', price: '10,90 €', desc: 'Mais Tortilla Chips mit Käse überbacken und dazu Salsa Sauce', descEn: 'Corn tortilla chips baked with cheese, served with salsa sauce', dietary: 'Vegetarisch' },
      { nr: 23, name: 'Nachos de Luxe', price: '12,90 €', desc: 'Mais Tortilla Chips mit Hähnchenfleisch oder Hackfleisch, dazu Jalapeños und Salsa Sauce', descEn: 'Corn tortilla chips with chicken or minced meat, jalapeños, avocado and sour cream' },
      { nr: 24, name: 'Diablitos Vegetarisch', price: '10,90 €', desc: 'Jalapeños gefüllt mit Cheddarkäse, serviert mit Salat und zwei Saucen', descEn: 'Jalapeños stuffed with cheddar cheese, served with salad and two sauces', dietary: 'Vegetarisch', spice: 2, badge: 'HOT 🌶️' },
      { nr: 25, name: 'Chicken Wings', price: '11,90 €', desc: 'Hähnchenflügel mit Barbeque Sauce und Salat', descEn: 'Chicken wings with barbecue sauce and salad' },
      { nr: 26, name: 'Tacos Mexicana', price: '9,90 €', desc: '2 knusprige Mais Tortilla Schalen gefüllt mit Pico de Gallo und mit Käse überbacken', descEn: '2 crispy corn tortilla shells filled with pico de gallo and gratinated with cheese', dietary: 'Vegetarisch / Vegan mögl.' },
      { nr: 27, name: 'Tacos con Pollo / Carne', price: '11,90 €', desc: '2 knusprige Mais Tortilla Schalen gefüllt mit Rinderhackfleisch oder Hähnchenfleisch', descEn: '2 crispy corn tortilla shells filled with ground beef or chicken' },
      { nr: 28, name: 'Taco-Loco Mix Platte (Für 2 Personen)', price: '21,90 €', desc: '6 knusprige Mais Tortilla Schalen gefüllt mit Rinderhackfleisch, Hähnchenfleisch und Pico de Gallo, serviert mit Salat', descEn: '6 crispy corn tortilla shells filled with ground beef, chicken and pico de gallo, with salad', badge: 'FÜR 2 PERSONEN ★' },
    ]
  },
  {
    id: 'unsere-spezialitaeten',
    title: 'Unsere Spezialitäten',
    subtitle: 'Our Specialities — Einzigartige Spezialitäten mit frischen Zutaten und traditionellen Rezepten',
    note: 'Genießen Sie unsere einzigartigen Spezialitäten, die mit frischen Zutaten und traditionellen Rezepten zubereitet werden · Enjoy our unique specialties prepared with fresh ingredients',
    icon: '🇲🇽',
    items: [
      { nr: 35, name: 'Alambre de Vegetariano', price: '14,90 €', desc: 'Verschieden gewürfelte Gemüsesorten in einer typisch mexikanischen Jalapeño-Cheddar-Cheese Sauce, serviert mit drei Tortillas und Salat', descEn: 'Various diced vegetables in a typical Mexican jalapeño-cheddar-cheese sauce, served with three tortillas and salad', dietary: 'Vegetarisch', badge: 'VEGGIE ★' },
      { nr: 36, name: 'Soja Verde', price: '16,90 €', desc: 'Soja Schnitzelstreifen in einer würzigen Sauce aus grünen Tomaten, Kürbiskernen und Sesam nach mexikanischer Art, dazu Reis und Salat', descEn: 'Soy schnitzel strips in a spicy Mexican-style sauce made from green tomatoes, pumpkin seeds and sesame, with rice and salad', dietary: 'Vegan', badge: 'VEGAN 🌱' },
      { nr: 37, name: 'Mole Rojo', price: '15,90 €', desc: 'Mexikanisches Nationalgericht mit Hähnchenbrustfilet in einer würzigen Sauce aus Schokolade und Erdnüssen, dazu Reis und Salat', descEn: 'Mexican national dish with chicken breast fillet in a spicy sauce of chocolate and peanuts, served with rice and salad', badge: 'NATIONALGERICHT ★' },
      { nr: 38, name: 'Arroz con Pollo', price: '14,90 €', desc: 'Reispfanne mit Hähnchen, Paprika, Zwiebeln, frischem Koriander und Ranchera Sauce, serviert mit Sauerrahm und Salat', descEn: 'Rice pan with chicken, peppers, onions, fresh cilantro and ranchera sauce, served with sour cream and salad', badge: 'KLASSIKER' },
      { nr: 39, name: 'Pechugas Picante', price: '15,90 €', desc: 'Gegrilltes Hähnchenbrustfilet mit Chipotle Mais Sahnesauce, serviert mit Pommes Frites und Salat', descEn: 'Grilled chicken breast fillet with chipotle corn cream sauce, served with French fries and salad', spice: 1 },
      { nr: 40, name: 'Pollo Verde', price: '15,90 €', desc: 'Hähnchenbruststreifen in einer würzigen Sauce aus grünen Tomaten, Kürbiskernen und Sesam nach mexikanischer Art, dazu Reis und Salat', descEn: 'Chicken breast strips in a spicy Mexican-style sauce of green tomatoes, pumpkin seeds, sesame, with rice and salad' },
      { nr: 41, name: 'Pollo con Piña', price: '15,90 €', desc: 'Hähnchenbruststreifen mit Ananas und gebratenem Gemüse in einer exotischen Sahne Sauce nach Chefkoch Art, serviert mit Reis und Salat', descEn: 'Chicken breast strips with pineapple and fried vegetables, in an exotic chef-style cream sauce, with rice and salad', badge: 'FRUCHTIG-CREMIG' },
      { nr: 42, name: 'Menta con Pollo', price: '15,90 €', desc: 'Gebratene Hähnchenbruststreifen mit spezieller Minze-Tomaten Sauce dazu Champignons, Zwiebeln und Honig Cherry Tomaten, serviert mit Reis und Salat', descEn: 'Fried chicken breast strips with a special mint-tomato sauce, mushrooms, onions and honey cherry tomatoes, with rice and salad' },
      { nr: 43, name: 'Alambre de Pollo', price: '15,90 €', desc: 'Hähnchenbruststreifen in einer typisch mexikanischen Jalapeño-Cheddar-Cheese Sauce, serviert mit drei Tortillas und Salat', descEn: 'Chicken breast strips in a typical Mexican jalapeño cheddar cheese sauce, served with three tortillas and salad', badge: 'BELIEBT' },
      { nr: 44, name: 'Lomo Saltado', price: '18,90 €', desc: 'Gebratene Rindfleischstreifen mit Zwiebeln, Paprika und Champignons in Tomatensauce, serviert mit Pommes Frites und einem gemischten Salat', descEn: 'Fried beef strips with onions, peppers and mushrooms in tomato sauce, served with French fries and a mixed salad', badge: 'HERZHAFT' },
      { nr: 45, name: 'Frijoles de Carne', price: '18,90 €', desc: 'Argentinische Rinderhüftstreifen mit jungen Prinzessin Bohnen, Mais, Kidneybohnen und Pico de Gallo in einer exotischen Tomaten Chillisauce, serviert mit Reis und Salat', descEn: 'Argentinian beef sirloin strips with young princess beans, corn, kidney beans and pico de gallo in an exotic tomato chili sauce, with rice and salad', spice: 2, badge: '★ EMPFEHLUNG' },
    ]
  },
  {
    id: 'fisch-spezialitaeten',
    title: 'Fisch Spezialitäten',
    subtitle: 'Fish Specialities — Genießen Sie die Frische des Meeres ein Fest für alle Sinne',
    note: 'Genießen Sie die Frische des Meeres – ein Fest für alle Sinne · Enjoy the freshness of the sea',
    icon: '🐟',
    items: [
      { nr: 50, name: 'Salmón a la Mexicana', price: '17,90 €', desc: 'Lachsfilet in einer Kräuter Sahnesauce nach Chefkoch Art aus Pico de Gallo, serviert mit Reis und Salat', descEn: 'Salmon fillet in a chef-style herb cream sauce made from pico de gallo, served with rice and salad', badge: 'LACHS' },
      { nr: 51, name: 'Camarones a la Cubana', price: '18,90 €', desc: 'Gegrillte Garnelen mit Zwiebeln, Knoblauch und Paprika in einer leichten und pikanten Tomatensauce, serviert mit Reis und Salat', descEn: 'Grilled shrimp with onions, garlic and peppers in a light and spicy tomato sauce, served with rice and salad', spice: 1, badge: 'GARNELEN 🦐' },
      { nr: 52, name: 'Salmón a la Tequila', price: '18,90 €', desc: 'Lachsfilet vom Lavagrill in Tequila Koriander Sauce, serviert mit gebratenen Kartoffelstreifen und Salat', descEn: 'Salmon fillet from the lava grill in tequila coriander sauce, served with fried potato strips and salad', badge: 'TEQUILA SAUCE ★' },
      { nr: 53, name: 'Huachinango a la Veracruz', price: '16,90 €', desc: 'Rotbarschfilet nach Veracruz Art mit Tomaten, Zwiebeln, Kapern, Oliven und Jalapeños, serviert mit Reis und Salat', descEn: 'Veracruz-style redfish fillet with tomatoes, onions, capers, olives and jalapeños, served with rice and salad', spice: 1 },
      { nr: 54, name: 'Camarones a la Diabla', price: '18,90 €', desc: '6 Scampis gebraten in einer Chipotle Spezialsauce, dazu Reis, Bohnen, Fetakäse, Avocado und Salat', descEn: '6 scampi fried in a special chipotle sauce, with rice, beans, feta cheese, avocado and salad', spice: 3, badge: 'FEURIG HEISS 🌶️' },
      { nr: 55, name: 'Taco Loco Mix Fischteller (Für 2 Personen)', price: '45,90 €', desc: 'Zwei gegrillte Lachsfilets Alaska 180g, zwei gegrillte bangladeschische Scampi, zwei gegrillte Rotbarschfilets und zwei Zanderfilets in einer speziellen Sauce nach Chefkoch Art, serviert mit Pommes Frites und Salat', descEn: 'Two grilled salmon fillets Alaska 180g, two grilled Bangladeshi scampi, two grilled redfish fillets and two zander fillets in a special chef-style sauce, with French fries and salad', badge: 'FISCHPLATTE FÜR 2 ★' },
    ]
  },
  {
    id: 'fajitas',
    title: 'Fajitas',
    subtitle: 'Brutzelnd heiß in der Pfanne serviert mit Guacamole, Sauerrahm, Salsa Picante & 4 Tortillas',
    note: 'Alle Fajita Gerichte werden mit gegrillten saftigen Fleischstreifen, Zwiebeln, Knoblauch und Paprika in einer heißen Pfanne serviert, dazu Guacamole, Sauerrahm, Salsa Picante und 4 Tortillas',
    icon: '🥘',
    items: [
      { nr: 60, name: 'Fajita Amazona', price: '16,90 €', desc: 'Mit verschiedenem gegrilltem Gemüse in Kräuterbutter geschwenkt', descEn: 'With various grilled vegetables tossed in herb butter', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE 🌱' },
      { nr: 61, name: 'Fajita Pollo', price: '18,90 €', desc: 'Mit saftig gegrillten Hähnchenbruststreifen', descEn: 'With grilled chicken breast strips', badge: '★ BESTSELLER' },
      { nr: 62, name: 'Fajita Carne', price: '19,90 €', desc: 'Mit gegrillten argentinischen Rinderhüftenstreifen', descEn: 'With grilled Argentinian beef sirloin strips', badge: 'ARGENTINISCHES RIND' },
      { nr: 63, name: 'Fajita Camarones', price: '20,90 €', desc: 'Mit gegrillten Großgarnelen in feiner Knoblauch-Kräutermarinade', descEn: 'With grilled king prawns in garlic-herb marinade', badge: 'GROSSGARNELEN 🦐' },
    ]
  },
  {
    id: 'tacos-eintoepfe',
    title: 'Tacos & Mexikanische Eintöpfe',
    subtitle: 'Tacos & Mexican Stews — Authentische Tacospezialitäten mit Käse überbacken',
    icon: '🌮',
    items: [
      { nr: 65, name: 'Taco Loco', price: '16,90 €', desc: 'Gebratene Zucchini, Auberginen, Tomaten, Paprika, Zwiebel- und Champignonstreifen in einer Kräuter-Tomatensauce, überbacken mit Käse, dazu 4 Maistortillas, Guacamole, Salsa Picante und Sauerrahm', descEn: 'Fried zucchini, eggplant, tomatoes, peppers, onions and mushroom strips in a herb-tomato sauce, gratinated with cheese, with 4 corn tortillas, guacamole, salsa picante and sour cream', dietary: 'Vegetarisch / Vegan mögl.', badge: '★ HAUS-SPEZIALITÄT' },
      { nr: 66, name: 'Tacos de Pollo', price: '17,90 €', desc: 'Gebratene Hähnchenbruststreifen mit Zwiebeln in einer exotischen Sauce nach Chefkoch Art, mit Käse überbacken, dazu 4 Weizenmehltortillas, Guacamole, Salsa Picante und Sauerrahm', descEn: 'Fried chicken breast strips with onions in an exotic chef-style sauce, gratinated with cheese, with 4 flour tortillas, guacamole, salsa picante and sour cream', badge: 'BELIEBT' },
      { nr: 67, name: 'Tacos de Mexicana de Marisco', price: '17,90 €', desc: 'Garnelen und Meeresfrüchte in einer exotischen Sauce nach Chefkoch Art, mit Zwiebeln und Paprika, dazu 4 Weizenmehltortillas, Guacamole, Sauerrahm und Salsa Picante', descEn: 'Shrimp and seafood in an exotic chef-style sauce with onions and peppers, served with 4 flour tortillas, guacamole, sour cream and salsa picante', badge: 'SEAFOOD' },
      { nr: 68, name: 'Tacos al Pastor', price: '19,90 €', desc: 'Gebratene Rinderhüftsteakstreifen, Paprika, Zwiebeln, Bohnen, Fetakäse und Salsa Verde, serviert mit Reis und Salat', descEn: 'Fried sirloin steak strips, peppers, onions, beans, feta cheese and salsa verde, served with rice and salad', spice: 2, badge: '★ TOP SELLER' },
    ]
  },
  {
    id: 'quesadillas',
    title: 'Quesadillas',
    subtitle: 'Zwei gegrillte Weizenmehltortillas mit 3 verschiedenen Käsesorten gefüllt',
    note: 'Zwei gegrillte Weizenmehltortillas mit 3 verschiedenen Käsesorten gefüllt, dazu 2 Saucen nach Wahl und Salatbeilage · Two grilled flour tortillas filled with 3 kinds of cheese, 2 sauces and salad',
    icon: '🧀',
    items: [
      { nr: 70, name: 'Quesadilla Amazona', price: '12,90 €', desc: 'Mit verschiedenem Gemüse und herzhaftem Dreikäse-Mix', descEn: 'With various vegetables and three kinds of melted cheese', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE 🌱' },
      { nr: 71, name: 'Quesadilla Pollo', price: '13,90 €', desc: 'Mit saftigem Hähnchenfleisch und Käse', descEn: 'With chicken and melted cheese', badge: '★ BESTSELLER' },
      { nr: 72, name: 'Quesadilla Carne', price: '14,90 €', desc: 'Mit gewürztem Rinderhackfleisch und Käse', descEn: 'With minced beef and cheese' },
      { nr: 73, name: 'Quesadilla Mixtos', price: '14,90 €', desc: 'Mit Hähnchenfleisch und Hackfleisch kombiniert', descEn: 'With chicken and minced meat mixed', badge: 'MIXTO' },
    ]
  },
  {
    id: 'enchiladas',
    title: 'Enchiladas',
    subtitle: 'Zwei gerollte Maismehltortillas mit Tomatensauce und Käse überbacken',
    note: 'Zwei gerollte Maismehltortillas mit Tomatensauce und Käse überbacken, mit Bohnenpüree und Reis, dazu zwei Saucen und eine Salatbeilage · Two rolled cornmeal tortillas gratinated with cheese, bean puree, rice, 2 sauces and salad',
    icon: '🌶️',
    items: [
      { nr: 75, name: 'Enchilada Vegetariana', price: '13,90 €', desc: 'Gefüllt mit buntem Gemüse und mit Käse überbacken', descEn: 'Filled with vegetables and gratinated with cheese', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE 🌱' },
      { nr: 76, name: 'Enchilada Pollo', price: '14,90 €', desc: 'Gefüllt mit zartem Hähnchenfleisch und mit Käse überbacken', descEn: 'Filled with chicken and gratinated with cheese', badge: 'BELIEBT' },
      { nr: 77, name: 'Enchilada Carne', price: '15,90 €', desc: 'Gefüllt mit Rinderhackfleisch und mit Käse überbacken', descEn: 'Filled with ground beef and gratinated with cheese' },
      { nr: 78, name: 'Enchilada Mixtos', price: '18,90 €', desc: 'Gefüllt mit 1x Hähnchenfleisch, 1x Rinderhackfleisch, 1x Vegetarisch und mit Käse überbacken', descEn: 'Filled with 1x chicken, 1x minced beef, 1x vegetarian and gratinated with cheese', badge: '★ DREIER-KOMBI' },
    ]
  },
  {
    id: 'burritos',
    title: 'Burritos & Combos',
    subtitle: 'Große gerollte Weizenmehltortilla, gefüllt mit Bohnenpüree und Reis',
    note: 'Große gerollte Weizenmehltortilla, gefüllt mit Bohnenpüree und Reis, mit Tomatensauce und Käse überbacken, dazu zwei Saucen und Salatbeilage · Large rolled flour tortilla filled with bean puree, rice, tomato sauce and cheese',
    icon: '🌯',
    items: [
      { nr: 80, name: 'Burrito Vegetariano', price: '13,90 €', desc: 'Mit verschiedenem Gemüse gefüllt und mit Käse überbacken', descEn: 'Filled with various vegetables and baked with cheese', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE 🌱' },
      { nr: 81, name: 'Burrito Pollo', price: '14,90 €', desc: 'Mit saftigem Hähnchenfleisch gefüllt und mit Käse überbacken', descEn: 'Filled with chicken and baked with cheese', badge: 'KLASSIKER' },
      { nr: 82, name: 'Burrito Picadillo', price: '15,90 €', desc: 'Mit würzigem Rinderhackfleisch gefüllt und mit Käse überbacken', descEn: 'Filled with ground beef and baked with cheese', spice: 2 },
      { nr: 83, name: 'Tres Amigos', price: '17,90 €', desc: '1 Taco mit Rinderhackfleisch, 1 Taco mit Hähnchenfleisch und 1 Enchilada mit Gemüse, alles mit Käse überbacken, dazu Reis, Bohnen, Sauerrahm und Salat', descEn: '1 taco with ground beef, 1 taco with chicken and 1 enchilada with vegetables, all gratinated with cheese, with rice, beans, sour cream and salad', badge: '★ BESTSELLER COMBO' },
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    subtitle: 'Mexikanisch-kalifornische Nudelkreationen aus dem Ofen',
    icon: '🍝',
    items: [
      { nr: 87, name: 'Publa Summer', price: '13,90 €', desc: 'Makkaroni mit verschiedenem Gemüse, grünen Oliven und Jalapeños in Chefkochsauce nach kalifornischer Art', descEn: 'Macaroni with various vegetables, green olives and jalapeños in California-style chef sauce', dietary: 'Vegetarisch / Vegan mögl.', badge: 'VEGGIE' },
      { nr: 88, name: 'Macaroni la Alaska', price: '14,90 €', desc: 'Makkaroni mit Lachsfiletstücken, Lauch und Pinienkernen in einer Sahnesauce nach kanadischer Art', descEn: 'Macaroni with salmon fillet pieces, leeks and pine nuts in a Canadian-style cream sauce', badge: 'LACHS' },
      { nr: 89, name: 'Macaroni de Mexicana', price: '15,90 €', desc: 'Makkaroni mit Rinderhackfleisch und Hähnchenfleisch in einer Tomatensauce und mit Mozzarella-Cheddar-Cheese überbacken', descEn: 'Macaroni with tomato sauce, minced beef, chicken and baked with mozzarella-cheddar cheese', badge: 'ÜBERBACKEN' },
    ]
  },
  {
    id: 'steaks',
    title: 'Steaks vom Lavagrill',
    subtitle: 'Steaks (Alle Steaks 200g) — Saftig, perfekt gegrillt und zart',
    note: 'Genießen Sie unsere saftigen Steaks, perfekt gegrillt und zart – ein Hochgenuss für Fleischliebhaber · All steaks 200g',
    icon: '🥩',
    items: [
      { nr: 90, name: 'Rumpsteak (200g)', price: '22,90 €', desc: 'Argentinisches Rumpsteak vom Grill mit Kräuterbutter, serviert mit Folienkartoffel oder Country Potatoes, Sauerrahmsauce und Salat', descEn: 'Grilled Argentinian rump steak with herb butter, served with baked potatoes or country potatoes, sour cream sauce and salad', badge: 'RUMPSTEAK' },
      { nr: 91, name: 'Hüftsteak (200g)', price: '21,90 €', desc: 'Argentinisches Hüftsteak vom Grill mit Kräuterbutter, serviert mit Folienkartoffel oder Country Potatoes, Sauerrahmsauce und Salat', descEn: 'Grilled Argentinian sirloin steak with herb butter, served with baked potatoes or country potatoes, sour cream sauce and salad' },
      { nr: 92, name: 'Steak Champignons (Rumpsteak 200g)', price: '23,90 €', desc: 'Argentinisches Rumpsteak vom Grill mit Kräutern in Champignonsauce, serviert mit Pommes Frites oder Kartoffelecken und Salat', descEn: 'Grilled Argentinian rump steak with herbs in mushroom sauce, served with French fries or potato wedges and salad', badge: '★ EMPFEHLUNG' },
      { nr: 93, name: 'Steak Ranchero (Hüftsteak 200g)', price: '22,90 €', desc: 'Argentinisches Hüftsteak vom Grill mit typisch mexikanischer Habanero Tomatensauce, serviert mit Pommes Frites oder Kartoffelecken und Salat', descEn: 'Grilled Argentinian sirloin steak with typical Mexican habanero tomato sauce, served with French fries or potato wedges and salad', spice: 2, badge: 'HABANERO 🌶️' },
      { nr: 94, name: 'Steak Mexicana (Rumpsteak 200g)', price: '23,90 €', desc: 'Argentinisches Rumpsteak vom Grill mit gebratenen Zwiebeln, Knoblauch, Paprika und Jalapeños, serviert mit Pommes Frites und Salat', descEn: 'Grilled Argentinian rump steak with fried onions, garlic, peppers and jalapeños, served with French fries and salad', spice: 2 },
      { nr: 95, name: 'Kotelett de Texas', price: '23,90 €', desc: 'Gegrilltes Lammkotelett mit jungen Prinzessbohnen und Zwiebeln nach Ranchero Art, serviert mit frittierten Kartoffeln und Salat', descEn: 'Grilled lamb chop with baby beans and onions Ranchero style, served with fried potatoes and salad', badge: 'LAMMKOTELETT' },
      { nr: 96, name: 'Taco Loco Grillteller (Für 2 Personen)', price: '50,90 €', desc: 'Rumpsteak, Hähnchenbrust, Lammkotelett und ein Burrito Verdura, dazu Salat, Dips und frittierte Kartoffeln', descEn: 'Rump steak, chicken breast, lamb chop and a burrito verdura, with salad, dips and fried potatoes', badge: 'GRILLPLATTE FÜR 2 ★' },
    ]
  },
  {
    id: 'burger',
    title: 'Burger & Kids Menu',
    subtitle: 'Saftige Burger mit Pommes Frites oder Kartoffelecken & Gerichte für die Kleinen',
    icon: '🍔',
    items: [
      { nr: 100, name: 'Chicken Burger', price: '13,90 €', desc: 'Gegrilltes Hähnchenbrustfilet mit Eisbergsalat, Tomaten, Sauergurken und hausgemachter Burgersauce, mit Pommes Frites oder Kartoffelecken', descEn: 'Grilled chicken breast fillet with iceberg lettuce, tomatoes, pickles and homemade burger sauce, with French fries or potato wedges' },
      { nr: 101, name: 'Chilli Cheese Burger', price: '13,90 €', desc: '180g saftiges Rindfleisch mit Eisbergsalat, knackigen Zwiebeln, Tomaten, Sauergurken, feurigen Jalapeños, doppeltem Cheddar Cheese und hausgemachter Burgersauce, mit Pommes Frites oder Kartoffelecken', descEn: '180g juicy beef with iceberg lettuce, crunchy onions, tomatoes, pickles, fiery jalapeños, double cheddar cheese and homemade burger sauce', spice: 2, badge: 'HOT CHEDDAR' },
      { nr: 102, name: 'Weltmeister Burger (360g Doppel-Burger)', price: '17,90 €', desc: '360g Doppel-Burger mit knusprigem Speck, doppeltem Cheddar Cheese, Eisbergsalat, knackigen Zwiebeln, Tomaten, Sauergurken und hausgemachter Burgersauce, mit Pommes Frites oder Kartoffelecken', descEn: '360g double burger with crispy bacon, double cheddar cheese, iceberg lettuce, crunchy onions, tomatoes, pickles and homemade burger sauce', badge: '★ 360g RIESENBURGER' },
      { nr: 105, name: 'Kid Pechugas (Kids Menu)', price: '9,90 €', desc: 'Gegrilltes Hähnchenbrustfilet, serviert mit Pommes Frites und Salat', descEn: 'Grilled chicken breast fillet, served with French fries and salad', badge: 'KIDS' },
      { nr: 106, name: 'Junior Burger (Kids Menu)', price: '11,90 €', desc: '180g saftiges Rindfleisch mit Eisberg, Tomaten und Gurken, serviert mit Pommes Frites', descEn: '180g juicy beef with iceberg, tomatoes and cucumbers, served with French fries', badge: 'KIDS' },
      { nr: 107, name: 'Chicken Nuggets (Kids Menu)', price: '10,90 €', desc: 'Sechs Chicken Nuggets, serviert mit Pommes Frites', descEn: 'Six chicken nuggets, served with French fries', badge: 'KIDS' },
    ]
  },
  {
    id: 'beilagen',
    title: 'Beilagen & Extras',
    subtitle: 'Sides & Dips — Extra Portionen nach Wunsch',
    icon: '🍟',
    items: [
      { nr: 110, name: 'Tortilla', price: '3,00 €', desc: 'Extra Portion Tortillas', dietary: 'Vegan' },
      { nr: 111, name: 'Kartoffelecken', price: '3,00 €', desc: 'Knusprige Country Potatoes', dietary: 'Vegan' },
      { nr: 112, name: 'Pommes Frites', price: '3,00 €', desc: 'Goldgelb frittierte Pommes', dietary: 'Vegan' },
      { nr: 113, name: 'Arroz (Mexikanischer Reis)', price: '3,00 €', desc: 'Würziger mexikanischer Cantina-Reis', dietary: 'Vegan' },
      { nr: 114, name: 'Frijoles (Bohnen)', price: '2,50 €', desc: 'Traditionelles Bohnenmus', dietary: 'Vegan' },
      { nr: 115, name: 'Guacamole', price: '2,50 €', desc: 'Frische hausgemachte Avocadocreme', dietary: 'Vegan', badge: '★ FRISCH' },
      { nr: 116, name: 'Salsa Picante', price: '2,50 €', desc: 'Feurige hausgemachte Salsa', dietary: 'Vegan', spice: 2 },
      { nr: 117, name: 'Sauerrahm', price: '2,50 €', desc: 'Kühler cremiger Sauerrahm', dietary: 'Vegetarisch' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts & Eis',
    subtitle: 'Süße mexikanische Verführungen für den perfekten Abschluss',
    note: 'Wir freuen uns, Ihnen den Tag zu versüßen · We are pleased to sweeten your day',
    icon: '🍨',
    items: [
      { nr: 490, name: 'Churros', price: '5,90 €', desc: 'Frittierter Weizenmehl-Teig mit Zimt, Zucker und Schokoladensoße, serviert mit Vanille Bourbon Eis', descEn: 'Deep-fried wheat flour dough with cinnamon, sugar and chocolate sauce, served with vanilla bourbon ice cream', badge: '★ SIGNATURE DESSERT', dietary: 'Vegetarisch' },
      { nr: 491, name: 'Crêpes', price: '5,90 €', desc: 'Crêpes mit Sahne, Schokoladen- oder Karamellsoße', descEn: 'Crepes with cream, chocolate or caramel sauce', dietary: 'Vegetarisch' },
      { nr: 492, name: 'Apfelstrudel', price: '5,50 €', desc: 'Apfelstrudel mit warmer Vanillesoße', descEn: 'Apple strudel with vanilla sauce', dietary: 'Vegetarisch' },
      { nr: 493, name: 'Helado Taco Loco', price: '5,90 €', desc: '3 Eiskugeln mit Vanille, Erdbeer, Schokolade, serviert mit exotischen Früchten und Sahne', descEn: '3 ice cream scoops with vanilla, strawberry, chocolate, served with exotic fruits with cream', dietary: 'Vegetarisch' },
    ]
  },
  {
    id: 'alkoholfreie-cocktails',
    title: 'Alkoholfreie Cocktails',
    subtitle: 'Mocktails (Alle 8,90 €) — Fruchtige und erfrischende Kreationen ohne Alkohol',
    icon: '🍹',
    items: [
      { nr: 501, name: 'Coconut Kiss', price: '8,90 €', desc: 'Kokossirup, Ananassaft, Sahne', badge: 'CREMIG' },
      { nr: 502, name: 'Bora Bora Brew', price: '8,90 €', desc: 'Grenadine, Ananassaft, Ginger Ale', badge: 'FRUCHTIG' },
      { nr: 503, name: 'Mosquito', price: '8,90 €', desc: 'Frische Minze, brauner Zucker, Limetten, Ginger Ale', badge: 'MINZIG-FRISCH' },
      { nr: 504, name: 'Ipanema', price: '8,90 €', desc: 'Limette, brauner Zucker, Limetten, Ginger Ale', badge: '★ TIPP' },
      { nr: 505, name: 'Amazonas', price: '8,90 €', desc: 'Erdbeer-, Kokos-, Maracujasirup, Zitronensaft, Limettensaft, Ananassaft, Orangensaft', badge: 'EXOTISCH' },
      { nr: 506, name: 'Fresa', price: '8,90 €', desc: 'Erdbeersirup, Kokossirup, Sahne, Ananassaft' },
      { nr: 507, name: 'Blue', price: '8,90 €', desc: 'Limettensaft, Zitronensaft, Ananassaft, Blue Curaçao Sirup, Mangosirup', badge: 'FARBENFROH' },
      { nr: 508, name: 'Mango Kiss', price: '8,90 €', desc: 'Ananassaft, Sahne, Mangosirup, Kokossirup', badge: 'MANGO' },
    ]
  },
  {
    id: 'classic-cocktails',
    title: 'Classic Cocktails',
    subtitle: 'Meisterhaft gemixte Barklassiker & Cantina-Spezialitäten',
    icon: '🍸',
    items: [
      { nr: 510, name: 'Mexicana', price: '8,90 €', desc: 'Tequila, Limettensaft, Zitronensaft, Triple Sec, Erdbeersirup und Ananassaft', badge: 'MEXIKANISCH' },
      { nr: 511, name: 'Cosmopolitan', price: '7,90 €', desc: 'Vodka, Cointreau, Limettensaft, Grenadine und Cranberry Juice' },
      { nr: 512, name: 'Latin Lover', price: '7,90 €', desc: 'Tequila, Cachaça, Zitronensaft, Limettensaft und Ananassaft' },
      { nr: 513, name: 'Watermelon Man', price: '7,90 €', desc: 'Wodka, Wassermelonenpüree, Limettensaft', badge: 'FRUCHTIG' },
      { nr: 514, name: 'Tequila Sunrise', price: '8,90 €', desc: 'Tequila, Orangensaft und Grenadinesirup', badge: 'KLASSIKER' },
      { nr: 515, name: 'Sex on the Beach', price: '7,90 €', desc: 'Vodka, Pfirsichlikör, Zitronensaft, Wassermelonenlikör, Limettensaft, Grenadine, Orangensaft und Ananassaft' },
      { nr: 516, name: 'Touchdown', price: '8,90 €', desc: 'Gin, Vodka, Apricot Brandy, Zitronensaft, Limettensaft und Maracujanektar' },
      { nr: 517, name: 'Moonlight', price: '8,90 €', desc: 'Gin, Tonic Water, Limettensaft' },
      { nr: 518, name: 'Mai Tai', price: '9,90 €', desc: 'Weißer Rum, Old Pascas 73%, Triple Sec, Zitronensaft, Limettensaft, Mandelsirup und Ananassaft', badge: 'STARK 73%' },
      { nr: 519, name: 'Hurricane', price: '8,90 €', desc: 'Weißer Rum, brauner Rum, Zitronensaft, Limettensaft, Maracujasirup, Ananassaft und Orangensaft' },
      { nr: 520, name: 'Zombi', price: '9,90 €', desc: 'Weißer Rum, brauner Rum, Old Pascas 73%, Cherry Brandy, Zitronensaft, Lime Juice, Grenadine und Orangensaft', badge: 'POWER DRINK' },
      { nr: 521, name: 'Long Island Iced Tea', price: '9,90 €', desc: 'Vodka, Gin, weißer Rum, Triple Sec, Zitronensaft, Limettensaft, Orangensaft und Cola', badge: '★ BESTSELLER' },
      { nr: 522, name: 'Caipirinha', price: '7,90 €', desc: 'Cachaça, Limetten, brauner Zucker und Soda', badge: 'KLASSIKER' },
      { nr: 523, name: 'Erdbeer Caipirinha', price: '7,90 €', desc: 'Cachaça, Erdbeeren, Limetten, Zucker' },
      { nr: 524, name: 'Mojito', price: '7,90 €', desc: 'Weißer Rum, Minze, Limettensaft, Zucker, Soda Wasser', badge: '★ TOP FAVORIT' },
      { nr: 525, name: 'Erdbeer Mojito', price: '7,90 €', desc: 'Weißer Rum, Erdbeeren, Minze, Limettensaft, Zucker, Soda Wasser' },
      { nr: 526, name: 'Whiskey Sour', price: '8,90 €', desc: 'Bourbon Whiskey, Lime Juice, Zitronensaft, Zuckersirup, Triple Sec und Soda' },
      { nr: 527, name: 'Hemingway Sour', price: '8,90 €', desc: 'Rum, Grapefruitsaft, Maraschino-Likör, Limettensaft' },
      { nr: 528, name: 'White Russian', price: '8,90 €', desc: 'Vodka, Kaffeelikör, Sahne' },
      { nr: 529, name: 'Taco Loco Cocktail', price: '8,90 €', desc: 'Vodka, Southern Comfort, Grenadine, Orangensaft, Ananassaft und Zitronensaft', badge: '★ SIGNATURE DRINK' },
    ]
  },
  {
    id: 'cocktails-mit-sahne',
    title: 'Cocktails mit Sahne',
    subtitle: 'Cream & Colada Cocktails — Cremig, süß und exotisch',
    icon: '🥥',
    items: [
      { nr: 530, name: 'Mexican Colada', price: '8,90 €', desc: 'Tequila, Limettensaft, Orangenlikör, Kokoscreme, Ananassaft', badge: 'TEQUILA COLADA' },
      { nr: 531, name: 'Swimmingpool', price: '7,90 €', desc: 'Wodka, Blue Curacao, Ananassaft, Sahne', badge: 'BLAU & CREMIG' },
      { nr: 532, name: 'Piña Colada', price: '7,90 €', desc: 'Rum, Kokoscreme, Ananassaft', badge: 'KLASSIKER' },
      { nr: 533, name: 'Mango Colada', price: '7,90 €', desc: 'Rum, Mangopüree, Kokoscreme, Ananassaft' },
      { nr: 534, name: 'Baileys Colada', price: '8,90 €', desc: 'Baileys Irish Cream, Kokoscreme, Ananassaft', badge: 'BAILEYS' },
      { nr: 535, name: 'Copacabana', price: '7,90 €', desc: 'Rum, Limettensaft, Zuckersirup, Soda Wasser' },
      { nr: 536, name: 'Taco Loco Colada', price: '8,90 €', desc: 'Tequila, Kokoscreme, Ananassaft', badge: '★ SIGNATURE' },
      { nr: 537, name: 'Erdbeer Colada', price: '7,90 €', desc: 'Rum, Erdbeeren, Kokoscreme, Ananassaft' },
    ]
  },
  {
    id: 'margaritas-longdrinks',
    title: 'Margaritas & Longdrinks',
    subtitle: 'Eiskalte Margaritas & beliebte Longdrinks',
    icon: '🍋',
    items: [
      { nr: 538, name: 'Fresa Margarita', price: '8,90 €', desc: 'Tequila, Erdbeerpüree oder Erdbeersirup, Limettensaft', badge: 'ERDBEERE' },
      { nr: 539, name: 'Mango Margarita', price: '8,90 €', desc: 'Tequila, Mangopüree oder Mangosirup, Limettensaft', badge: 'MANGO' },
      { nr: 540, name: 'Classic Margarita', price: '8,90 €', desc: 'Tequila, Limettensaft, Triple Sec mit Salzrand', badge: '★ DER KLASSIKER' },
      { nr: 541, name: 'Maracuja Margarita', price: '8,90 €', desc: 'Tequila, Passionsfruchtsaft oder -sirup, Limettensaft', badge: 'MARACUJA' },
      { nr: 542, name: 'Cuba Libre', price: '7,90 €', desc: 'Rum, Cola, Limettensaft' },
      { nr: 543, name: 'Whiskey Cola', price: '7,90 €', desc: 'Whiskey und Cola' },
      { nr: 544, name: 'Campari Orange', price: '7,90 €', desc: 'Campari und Orangensaft' },
      { nr: 545, name: 'Campari Soda', price: '7,90 €', desc: 'Campari und Soda Wasser' },
      { nr: 546, name: 'Aperol Spritz', price: '7,90 €', desc: 'Aperol, Prosecco und Soda Wasser', badge: 'BELIEBT' },
      { nr: 547, name: 'Gin Tonic', price: '7,90 €', desc: 'Gin und Tonic Water mit einer Limettenscheibe' },
      { nr: 548, name: 'Bacardi Cola', price: '7,90 €', desc: 'Bacardi Rum und Cola' },
      { nr: 549, name: 'Jägerbomb', price: '7,90 €', desc: 'Jägermeister und Red Bull' },
      { nr: 550, name: 'Vodka Lemon / Orange / RedBull', price: '7,90 €', desc: 'Vodka mit Bitter Lemon, Orangensaft oder Red Bull' },
      { nr: 551, name: 'Ramazzotti Ginger Ale', price: '7,90 €', desc: 'Ramazzotti, Ginger Ale' },
    ]
  },
  {
    id: 'milchgetraenke-lassi',
    title: 'Milchgetränke & Lassi',
    subtitle: 'Hausgemachte Shakes & cremige Lassis (0,4L — 5,90 €)',
    icon: '🥛',
    items: [
      { nr: 270, name: 'Mango Lassi (0,4L)', price: '5,90 €', desc: 'Cremiger hausgemachter Joghurt-Drink mit Mango', badge: '★ BELIEBT' },
      { nr: 271, name: 'Avocado Minz Lassi (0,4L)', price: '5,90 €', desc: 'Frische Avocado, Minze und Joghurt' },
      { nr: 272, name: 'Dattel Nuss Lassi (0,4L)', price: '5,90 €', desc: 'Süße Datteln und gemahlene Nüsse mit Joghurt' },
      { nr: 273, name: 'Natur Minz Lassi (0,4L)', price: '5,90 €', desc: 'Erfrischender Naturjoghurt mit frischer Minze' },
      { nr: 274, name: 'Milchshake Vanille (0,4L)', price: '5,90 €', desc: 'Cremiger Vanille-Milchshake' },
      { nr: 275, name: 'Milchshake Schoko (0,4L)', price: '5,90 €', desc: 'Reichhaltiger Schokoladen-Milchshake' },
      { nr: 276, name: 'Milchshake Erdbeer (0,4L)', price: '5,90 €', desc: 'Fruchtiger Erdbeer-Milchshake' },
      { nr: 277, name: 'Milchshake Mango (0,4L)', price: '5,90 €', desc: 'Exotischer Mango-Milchshake' },
      { nr: 278, name: 'Milchshake Dattel (0,4L)', price: '5,90 €', desc: 'Orientalisch inspirierter Dattel-Milchshake' },
    ]
  },
  {
    id: 'softdrinks-saefte',
    title: 'Soft Drinks & Säfte',
    subtitle: 'Erfrischende alkoholfreie Getränke & Fruchtsäfte',
    icon: '🥤',
    items: [
      { nr: 200, name: 'Coca-Cola', price: '3,20 €', desc: '0,3L: 3,20 € · 0,4L: 4,20 €', subPrices: [{ label: '0,3L', price: '3,20 €' }, { label: '0,4L', price: '4,20 €' }] },
      { nr: 202, name: 'Coca-Cola Zero', price: '3,20 €', desc: '0,3L: 3,20 € · 0,4L: 4,20 €', subPrices: [{ label: '0,3L', price: '3,20 €' }, { label: '0,4L', price: '4,20 €' }] },
      { nr: 204, name: 'Fanta', price: '3,20 €', desc: '0,3L: 3,20 € · 0,4L: 4,20 €', subPrices: [{ label: '0,3L', price: '3,20 €' }, { label: '0,4L', price: '4,20 €' }] },
      { nr: 206, name: 'Sprite', price: '3,20 €', desc: '0,3L: 3,20 € · 0,4L: 4,20 €', subPrices: [{ label: '0,3L', price: '3,20 €' }, { label: '0,4L', price: '4,20 €' }] },
      { nr: 208, name: 'Spezi', price: '3,20 €', desc: '0,3L: 3,20 € · 0,4L: 4,20 €', subPrices: [{ label: '0,3L', price: '3,20 €' }, { label: '0,4L', price: '4,20 €' }] },
      { nr: 210, name: 'Bitter Lemon', price: '3,60 €', desc: '0,3L: 3,60 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,60 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 212, name: 'Ginger Ale', price: '3,60 €', desc: '0,3L: 3,60 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,60 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 214, name: 'Malztrunk', price: '4,10 €', desc: 'Flasche 0,33L' },
      { nr: 215, name: 'Energy Drink', price: '4,10 €', desc: 'Dose 0,25L' },
      { nr: 220, name: 'VIO Naturell / Medium (0,25L)', price: '3,90 €', desc: 'Flasche 0,25L' },
      { nr: 221, name: 'VIO Naturell / Medium (0,75L)', price: '7,90 €', desc: 'Flasche 0,75L' },
      { nr: 225, name: 'Apfelsaft / Saftschorle', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 227, name: 'Ananassaft', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 229, name: 'Bananenfruchtsaft', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 231, name: 'KiBa (Kirsch Banane)', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 233, name: 'Kirschnektar', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 235, name: 'Mango Nektar', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 237, name: 'Maracujanektar', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 239, name: 'Orangensaft', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
      { nr: 241, name: 'Saftschorle nach Wahl', price: '3,50 €', desc: '0,3L: 3,50 € · 0,4L: 4,60 €', subPrices: [{ label: '0,3L', price: '3,50 €' }, { label: '0,4L', price: '4,60 €' }] },
    ]
  },
  {
    id: 'bier-aperitifs',
    title: 'Bier, Aperitifs & Heißgetränke',
    subtitle: 'Gezapftes Bier, mexikanische Flaschenbiere, Kaffeespezialitäten & Tee',
    icon: '🍺',
    items: [
      { nr: 310, name: 'Krombacher vom Fass', price: '4,10 €', desc: '0,3L: 4,10 € · 0,5L: 5,90 €', subPrices: [{ label: '0,3L', price: '4,10 €' }, { label: '0,5L', price: '5,90 €' }] },
      { nr: 312, name: 'Corona Flasche', price: '4,90 €', desc: 'Mexikanisches Premium-Lager mit frischer Limette', badge: 'MEXIKO 🇲🇽' },
      { nr: 313, name: 'Heineken Flasche', price: '4,90 €', desc: '0,33L Flasche' },
      { nr: 314, name: 'Hefeweizen Hell Flasche', price: '5,50 €', desc: '0,5L Flasche' },
      { nr: 315, name: 'Hefeweizen Dunkel Flasche', price: '5,50 €', desc: '0,5L Flasche' },
      { nr: 316, name: 'Gespritztes Bier (Cola / Sprite)', price: '5,50 €', desc: '0,5L' },
      { nr: 317, name: 'Clausthaler Alkoholfrei Flasche', price: '4,10 €', desc: '0,33L Flasche' },
      { nr: 318, name: 'Corona Alkoholfrei Flasche', price: '4,90 €', desc: '0,33L Flasche alkoholfrei' },
      { nr: 319, name: 'Hefeweizen Alkoholfrei', price: '5,50 €', desc: '0,5L Flasche' },
      { nr: 320, name: 'Aperol (0,4cl)', price: '4,90 €', desc: 'Aperitif 0,4cl' },
      { nr: 321, name: 'Campari (0,4cl)', price: '4,90 €', desc: 'Aperitif 0,4cl' },
      { nr: 322, name: 'Martini Blanco / Rosso / Dry (0,4cl)', price: '4,90 €', desc: '0,4cl' },
      { nr: 290, name: 'Kaffee', price: '3,20 €', desc: 'Tasse frisch gebrühter Kaffee' },
      { nr: 291, name: 'Espresso', price: '2,90 €', desc: 'Einfacher Espresso' },
      { nr: 292, name: 'Doppelter Espresso', price: '3,50 €', desc: 'Doppelter Espresso' },
      { nr: 293, name: 'Espresso Macchiato', price: '3,50 €', desc: 'Espresso mit Milchschaum' },
      { nr: 294, name: 'Cappuccino', price: '3,90 €', desc: 'Klassischer Cappuccino' },
      { nr: 295, name: 'Milchkaffee', price: '5,50 €', desc: 'Großer Milchkaffee' },
      { nr: 296, name: 'Latte Macchiato', price: '5,50 €', desc: 'Im hohen Glas serviert' },
      { nr: 297, name: 'Latte Macchiato Aroma', price: '6,90 €', desc: 'Mit Aroma nach Wahl' },
      { nr: 298, name: 'Eiskaffee', price: '6,90 €', desc: 'Kalter Kaffee mit Vanilleeis & Sahne', badge: 'SOMMER' },
      { nr: 300, name: 'Teeauswahl im Glas', price: '2,80 €', desc: 'Earl Grey, Darjeeling, Hagebutte, Pfefferminze, Grüner Tee mit Zitrone oder Kamille' },
      { nr: 306, name: 'Frischer Pfefferminztee', price: '3,90 €', desc: 'Mit frischen Minzblättern zubereitet' },
      { nr: 307, name: 'Frischer Ingwer-Pfefferminztee', price: '4,90 €', desc: 'Mit frischem Ingwer & Minze' },
    ]
  },
  {
    id: 'weine-spirituosen',
    title: 'Offene Weine, Tequilas & Spirituosen',
    subtitle: 'Erlesene Weine, Premium Tequilas, Kräuterliköre & Whiskeys',
    icon: '🍷',
    items: [
      { nr: 330, name: 'Riesling (Pfalz, trocken)', price: '6,90 €', desc: '0,2L: 6,90 € · 0,5L: 15,90 € · 0,75L: 23,90 €', subPrices: [{ label: '0,2L', price: '6,90 €' }, { label: '0,5L', price: '15,90 €' }, { label: '0,75L', price: '23,90 €' }] },
      { nr: 333, name: 'Chardonnay (Frankreich, trocken)', price: '6,90 €', desc: '0,2L: 6,90 € · 0,5L: 15,90 € · 0,75L: 23,90 €', subPrices: [{ label: '0,2L', price: '6,90 €' }, { label: '0,5L', price: '15,90 €' }, { label: '0,75L', price: '23,90 €' }] },
      { nr: 336, name: 'Pinot Grigio (Italien, halbtrocken)', price: '5,90 €', desc: '0,2L: 5,90 € · 0,5L: 13,90 € · 0,75L: 21,90 €', subPrices: [{ label: '0,2L', price: '5,90 €' }, { label: '0,5L', price: '13,90 €' }, { label: '0,75L', price: '21,90 €' }] },
      { nr: 339, name: 'Spätburgunder Rosé (Kaiserstuhl, trocken)', price: '5,90 €', desc: '0,2L: 5,90 € · 0,5L: 13,90 € · 0,75L: 21,90 €', subPrices: [{ label: '0,2L', price: '5,90 €' }, { label: '0,5L', price: '13,90 €' }, { label: '0,75L', price: '21,90 €' }] },
      { nr: 343, name: 'Merlot (USA, trocken)', price: '6,90 €', desc: '0,2L: 6,90 € · 0,5L: 15,90 € · 0,75L: 23,90 €', subPrices: [{ label: '0,2L', price: '6,90 €' }, { label: '0,5L', price: '15,90 €' }, { label: '0,75L', price: '23,90 €' }] },
      { nr: 346, name: 'Tempranillo (Spanien, trocken)', price: '6,90 €', desc: '0,2L: 6,90 € · 0,5L: 15,90 € · 0,75L: 23,90 €', subPrices: [{ label: '0,2L', price: '6,90 €' }, { label: '0,5L', price: '15,90 €' }, { label: '0,75L', price: '23,90 €' }] },
      { nr: 342, name: 'Champagner Drappier Brut, Reims', price: '35,00 €', desc: '0,75L Flasche' },
      { nr: 349, name: 'Prosecco (0,1L)', price: '4,90 €', desc: '0,1L Glas' },
      { nr: 360, name: 'Jose Cuervo Especial Tequila (0,2cl)', price: '3,90 €', desc: 'Mexikanischer Tequila Gold', badge: 'TEQUILA' },
      { nr: 361, name: 'Jose Cuervo Blanco Tequila (0,2cl)', price: '3,90 €', desc: 'Mexikanischer Tequila Silber', badge: 'TEQUILA' },
      { nr: 362, name: 'Sauza Gold / Silver Tequila (0,2cl)', price: '3,90 €', desc: '0,2cl' },
      { nr: 363, name: 'Havana Club 3 Jahre alt (0,2cl)', price: '4,90 €', desc: 'Kubanischer Rum' },
      { nr: 367, name: 'Bombay Sapphire Dry Gin (0,2cl)', price: '4,90 €', desc: 'Premium Gin' },
      { nr: 370, name: 'Johnnie Walker Red Label', price: '4,90 €', desc: '0,2cl: 4,90 € · 0,4cl: 6,90 €', subPrices: [{ label: '0,2cl', price: '4,90 €' }, { label: '0,4cl', price: '6,90 €' }] },
      { nr: 374, name: 'Jim Beam Bourbon', price: '4,90 €', desc: '0,2cl: 4,90 € · 0,4cl: 6,90 €', subPrices: [{ label: '0,2cl', price: '4,90 €' }, { label: '0,4cl', price: '6,90 €' }] },
      { nr: 378, name: 'Rémy Martin Cognac', price: '5,50 €', desc: '0,2cl: 5,50 € · 0,4cl: 6,90 €', subPrices: [{ label: '0,2cl', price: '5,50 €' }, { label: '0,4cl', price: '6,90 €' }] },
    ]
  }
];
