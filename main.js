let messages = [
  /* Array of 300 messages*/
  " You are my motivation, my muse, the one person I would never want to lose at any cost. I love you with all my heart because you have made life worth living every day.",

  " Every time I see your face, I cannot help but feel so blessed that you have graced me with your love. You are my dream come true and I will always cherish you forever.",

  " You are the most beautiful creature ever to have lived in this world, your eyes are like the night sky, your lips as sweet as candy, and your voice is more melodic than any song ever written. You are simply perfection itself and I love you.",
  " Out of every day, in every way, I get better and better because you are always by my side. I love you.",

  " You have brought so much joy to my life, I don’t know where I would be without you. You illuminate my days and brighten up all the dark spots. I love you.",

  " I will love you until the stars no longer shine in the sky. I will love you as each new day dawns. I will love you until the end of time itself.",

  " My dearest, I don’t know where I would be without your love. You bring out the best in me and give me strength when I am feeling low. You are everything that is right in this world. I love you.",
  "You are my shining star, my beautiful angel, and my amazing queen. You are the most wonderful person that I have ever met and the best thing that has ever happened to me. I cherish you always",

  "I don’t feel so close to heaven when we are together. Just being in your presence makes me think I can touch the sky. You are the reason why I want to live life to the fullest",

  "Your voice is like an angel’s song. You are the most beautiful creature that I have ever laid my eyes upon. You are perfect in every way. I love everything about you",

  "I try to list your best qualities and still cannot do justice to your magnificence. You are the love of my life and my reason for everything that I do. I cherish you forever and always",

  "Let us love each day as if there was no tomorrow because today is the day I have found you. You are the one that I want to be with from here on out",

  "When you smiled at me for the first time, I felt like I was flying higher than any bird. When you kissed me for the first time, I felt like I was drowning in a sea of pure bliss. When you embraced me for the first time, I felt truly blessed to have your love",

  "You are my whole world. Those three words are not enough to describe my love for you. There just aren’t enough words to describe how wonderful you make me feel",

  "I feel your love in each and every touch. Every time I see you, I feel warm inside, like the sun shining down upon me. I love you with all of my heart and soul",

  "Every time I think about you my heart skips more than a few beats. Your eyes, your smile, your hair, everything is beautiful to me. I want to hold you close each and every night when we go to sleep",

  "I never thought that I could ever fall in love like this again. You are so kind, so loving and so understanding. Your eyes show me the light at the end of the tunnel.",

  "I never believed in true love until I met you. Now I see that there is an absolute, never-ending love out there. It’s beautiful. I want you to be my partner in crime",

  "You are the first thing that I think of when I wake up and the last thing that I think of before I fall asleep. You are on my mind constantly. There is no escape from the fact that I love you",

  "I don’t want a life without you in it. Each day I spend away from you is a torment. I need you by my side. I want you by my side. You complete me",

  "In your eyes, I see something that I’ve never seen before. It’s love and it’s looking directly at me. I will never hurt you, I will be there for you no matter what happens and I will always give you the support that you need and deserve",

  "Every day I want to be with you. Every month I need to be by your side. Every year I yearn to hold you tightly in my arms. You are my world",

  "For you, I would do anything. I would walk a thousand miles. I would swim a raging river. I would climb to the highest mountain and jump off just because you were asked me to",

  "You are the most special person in my life and I want you to know that you are loved more than words can describe",

  "I can’t imagine spending one day without you by my side. I need you with me",

  "My life was a dark tunnel before you came into it. Everything changed once I saw you for the first time. Now, each day is brighter and more colorful",

  "We make a good team, you and me. You have brought new meaning into my life and for that I will always be grateful to you",

  "Meeting you was fate, becoming your friend was a choice but falling in love with you was out of my control",

  "My heart beats for you, my life depends on you and my blood flows because of you. I love you. Everything I am is because of you",

  "I don’t want the world. I just want you to be mine",
  "You are my special angel sent from up above. I love you",
  //];
  //let short_messages = [
  "You light up my world with your presence.",
  "Our friendship is a treasure I hold close to my heart.",
  "In the story of my life, you're the most beautiful chapter.",
  "Your smile is my daily dose of happiness.",
  "Being with you is like a beautiful dream that never ends.",
  "You're not just a friend; you're my confidant and partner in crime.",
  "Your laughter is the melody of my happiest moments.",
  "With you, every day is an adventure filled with joy and laughter.",
  "Thank you for being my rock, my support, and my best friend.",
  "Your kindness and warmth make the world a better place.",
  "I cherish the countless memories we've created together.",
  "Your friendship is the greatest gift I've ever received.",
  "In a garden full of flowers, you're the most exquisite bloom.",
  "With you, even the simplest moments become extraordinary.",
  "Our friendship is a bond that grows stronger with each passing day.",
  "You are the sunshine that brightens my darkest days.",
  "In the journey of life, having you by my side makes it worthwhile.",
  "You're the missing piece that completes the puzzle of my happiness.",
  "Your presence adds color to the canvas of my life.",
  "With you, every moment is a beautiful memory in the making.",
  "You make ordinary days extraordinary just by being in them.",
  "Our friendship is a symphony of love and understanding.",
  "You're not just a friend; you're family I chose for myself.",
  "Every day spent with you is a day well-lived and full of love.",
  "Your strength and resilience inspire me to be a better person.",
  "You're my confidant, my partner in crime, and my greatest support.",
  "Our friendship is the anchor that keeps me grounded.",
  "With you, every hurdle becomes a stepping stone to success.",
  "You're the reason my heart smiles every day.",
  "In the book of my life, you have the most highlighted pages.",
  "Your friendship is the greatest blessing I've ever received.",
  "You have a way of making everything brighter with your presence.",
  "Your friendship is the glue that holds my life together.",
  "Thank you for being the constant in my ever-changing life.",
  "You're my partner in silliness, my co-conspirator in laughter.",
  "Our friendship is the kind that movies are made about.",
  "You're the melody in the soundtrack of my happiest memories.",
  "With you, even the mundane becomes a magical adventure.",
  "Your wisdom and guidance are my beacons in the journey of life.",
  "You're the anchor that keeps me steady in the storms of life.",
  "Thank you for being the friend who walks beside me through it all.",
  "Your presence makes the world a brighter and happier place.",
  "You're the friend I can always count on, no matter what.",
  "Our friendship is a beautiful tapestry woven with threads of love.",
  "With you, every moment is a celebration of friendship.",
  "Your friendship is the compass that guides me in the right direction.",
  "You're not just a friend; you're the family I choose for myself.",
  "Every day with you is a new page in the adventure of our friendship.",
  "Thank you for being the friend who knows me better than I know myself.",
  "Your laughter is the sweetest melody that plays in my heart.",
  "In the dance of life, you're my favorite partner.",
  "You're the sunshine that brightens even the gloomiest days.",
  "Our friendship is a journey I cherish and look forward to every day.",
  "Your kindness is a beacon of light in the darkness of the world.",
  "You're the friend who turns ordinary moments into extraordinary memories.",
  "With you, every challenge becomes an opportunity for growth.",
  "Your friendship is the most precious gift I've ever received.",
  "Thank you for being the friend who shares both my joys and sorrows.",
  "You're the missing piece that completes the puzzle of my happiness.",
  "Your love and support are the pillars of our beautiful friendship.",
  "You're the friend who makes my world a better and brighter place.",
  "In the tapestry of life, you're the thread that adds color and vibrancy.",
  "With you, every day is an adventure filled with laughter and joy.",
  "Your friendship is the anchor that keeps me grounded in the storm.",
  "You're the reason my heart smiles, even on the toughest days.",
  "Our friendship is the kind that grows stronger with each passing day.",
  "Your presence is a gift that makes every moment more special.",
  "Thank you for being the friend who makes life's journey worthwhile.",
  "You're the friend who turns ordinary days into extraordinary moments.",
  "Your wisdom and understanding are the treasures of our friendship.",
  "With you, every moment becomes a cherished memory.",
  "You're the sunshine that brightens the darkest corners of my life.",
  "In the melody of life, your friendship is the sweetest tune.",
  "Your laughter is the soundtrack of my happiest memories.",
  "Thank you for being the friend who makes my heart sing with joy.",
  "You're the friend who walks beside me through every twist and turn.",
  "With you, every day is a new chapter in the book of our friendship.",
  "Your friendship is the compass that guides me in the right direction.",
  "You're the anchor that keeps me steady in the storms of life.",
  "Thank you for being the friend who knows me inside out.",
  "Your laughter is the sweetest melody that plays in my heart.",
  "In the dance of life, you're my favorite partner.",
  "You're the sunshine that brightens even the gloomiest days.",
  "Our friendship is a journey I cherish and look forward to every day.",
  "Your kindness is a beacon of light in the darkness of the world.",
  "You're the friend who turns ordinary moments into extraordinary memories.",
  "With you, every challenge becomes an opportunity for growth.",
  "Your friendship is the most precious gift I've ever received.",
  "Thank you for being the friend who shares both my joys and sorrows.",
  "You're the missing piece that completes the puzzle of my happiness.",
  "Your love and support are the pillars of our beautiful friendship.",
  "You're the friend who makes my world a better and brighter place.",
  "In the tapestry of life, you're the thread that adds color and vibrancy.",
  "With you, every day is an adventure filled with laughter and joy.",
  "Our friendship is the kind that grows stronger with each passing day.",
  "Your presence is a gift that makes every moment more special.",
  "Thank you for being the friend who makes life's journey worthwhile.",
];

let dad_jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I only know 25 letters of the alphabet. I don't know y.",
  "What do you call fake spaghetti? An impasta.",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I only know a great joke about construction, but I'm still working on that one.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why don't eggs tell each other secrets? Because they might crack up.",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why do chicken coops only have two doors? Because if they had four, they’d be a chicken sedan.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to be a baker because I kneaded dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was going to be really surprised on her birthday. She still isn't.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "Why don't eggs tell each other secrets? Because they might crack up.",
  "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why do chicken coops only have two doors? Because if they had four, they’d be a chicken sedan.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to be a baker because I kneaded dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was going to be really surprised on her birthday. She still isn't.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why don't eggs tell each other secrets? Because they might crack up.",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why do chicken coops only have two doors? Because if they had four, they’d be a chicken sedan.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to be a baker because I kneaded dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was going to be really surprised on her birthday. She still isn't.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to play piano by ear, but now I use my hands and fingers.",
  "Why don't eggs tell each other secrets? Because they might crack up.",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why do chicken coops only have two doors? Because if they had four, they’d be a chicken sedan.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to be a baker because I kneaded dough.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was going to be really surprised on her birthday. She still isn't.",
];

let motivationMessage = [
  "Believe you can and you're halfway there.",
  "Your attitude determines your direction.",
  "The only way to do great work is to love what you do.",
  "Dream big, work hard, stay focused.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You are never too old to set another goal or to dream a new dream.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Success is not in what you have, but who you are.",
  "The only person you are destined to become is the person you decide to be.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive for progress, not perfection.",
  "The only place where success comes before work is in the dictionary.",
  "Your time is limited, don't waste it living someone else's life.",
  "It always seems impossible until it's done.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not just about making money. It's about making a difference.",
  "The only person you are destined to become is the person you decide to be.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Believe you can and you're halfway there.",
  "Your attitude determines your direction.",
  "It does not matter how slowly you go, as long as you do not stop.",
  "The only way to do great work is to love what you do.",
  "Dream big, work hard, stay focused.",
  "Success is not in what you have, but who you are.",
  "The only place where success comes before work is in the dictionary.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive for progress, not perfection.",
  "The only person you are destined to become is the person you decide to be.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your time is limited, don't waste it living someone else's life.",
  "It always seems impossible until it's done.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not just about making money. It's about making a difference.",
  "The only person you are destined to become is the person you decide to be.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Believe you can and you're halfway there.",
  "Your attitude determines your direction.",
  "It does not matter how slowly you go, as long as you do not stop.",
  "The only way to do great work is to love what you do.",
  "Dream big, work hard, stay focused.",
  "Success is not in what you have, but who you are.",
  "The only place where success comes before work is in the dictionary.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive for progress, not perfection.",
  "The only person you are destined to become is the person you decide to be.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your time is limited, don't waste it living someone else's life.",
  "It always seems impossible until it's done.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not just about making money. It's about making a difference.",
  "The only person you are destined to become is the person you decide to be.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "Believe you can and you're halfway there.",
  "Your attitude determines your direction.",
  "It does not matter how slowly you go, as long as you do not stop.",
  "The only way to do great work is to love what you do.",
  "Dream big, work hard, stay focused.",
  "Success is not in what you have, but who you are.",
  "The only place where success comes before work is in the dictionary.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Strive for progress, not perfection.",
  "The only person you are destined to become is the person you decide to be.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your time is limited, don't waste it living someone else's life.",
  "It always seems impossible until it's done.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not just about making money. It's about making a difference.",
  "The only person you are destined to become is the person you decide to be.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",

  // Hope Quotes
  "Hope is the anchor of the soul.",
  "Keep your head high, keep your chin up, and most importantly, keep smiling.",
  "Hope is the only thing stronger than fear.",
  "Difficulties in life are intended to make us better, not bitter.",
  "Believe you can and you're halfway there.",
  "Hope is being able to see that there is light despite all of the darkness.",
  "Don't lose hope. When the sun goes down, the stars come out.",
  "Every cloud has a silver lining.",
  "Hope is a waking dream.",
  "Where there is hope, there is faith. Where there is faith, miracles happen.",
  // ... (Add 40 more hope quotes)

  // Do Not Give Up Quotes
  "Fall seven times, stand up eight.",
  "The only way to do great work is to love what you do.",
  "Your hardest times often lead to the greatest moments of your life.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "You are never too old to set another goal or to dream a new dream.",
  "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  // ... (Add 40 more do not give up quotes)

  // Be Happy Quotes
  "Happiness is not by chance but by choice.",
  "The best way to cheer yourself up is to try to cheer somebody else up.",
  "Do more things that make you forget to check your phone.",
  "Be so happy that when others look at you, they become happy too.",
  "The secret of being happy is accepting where you are in life and making the most out of every day.",
  "The purpose of our lives is to be happy.",
  "Happiness is not a destination; it is a way of life.",
  "Smile at strangers and you just might change a life.",
  "Do what makes your soul shine.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",

  "Happiness is a journey, not a destination.",
  "The only thing that will make you happy is being happy with who you are.",
  "Happiness is not out there, it's in you.",
  "Do what makes you happy, be with who makes you smile.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The key to being happy is knowing you have the power to choose what to accept and what to let go.",
  "Happiness is an inside job.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "Happiness is letting go of what you think your life is supposed to look like.",
  "The happiest people don't have the best of everything, they just make the best of everything.",
  "You don't need a reason to be happy, just a choice.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Learn to let go. That is the key to happiness.",
  "Happiness is not by chance, but by choice.",
  "The purpose of our lives is to be happy.",
  "Happiness is when what you think, what you say, and what you do are in harmony.",
  "The more you praise and celebrate your life, the more there is in life to celebrate.",
  "If you want to be happy, be.",
  "Happiness is not a goal; it is a by-product.",
  "Count your age by friends, not years. Count your life by smiles, not tears.",
  "The secret of happiness is not in doing what one likes, but in liking what one does.",
  "Be happy with what you have. Be excited about what you want.",
  "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
  "The best way to cheer yourself up is to try to cheer somebody else up.",
  "Happiness is not something you postpone for the future; it is something you design for the present.",
  "Don't cry because it's over, smile because it happened.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The purpose of our lives is to be happy.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "Happiness is a warm puppy.",
  "Happiness is a state of mind. It's just according to the way you look at things.",
  "Happiness is not having what you want. It's wanting what you have.",
  "The best way to predict the future is to create it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "The only way to do great work is to love what you do.",
  "Be kind whenever possible. It is always possible.",
  "Don't count the days, make the days count.",
  "The secret to happiness is freedom... And the secret to freedom is courage.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "Don't let yesterday take up too much of today.",
  "The best way to predict your future is to create it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It is not how much we have, but how much we enjoy, that makes happiness.",
  "The best preparation for tomorrow is doing your best today.",
  "Happiness is not a goal; it is a by-product.",
  "Happiness is not a goal; it is a by-product.",
  "Don't cry because it's over, smile because it happened.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The purpose of our lives is to be happy.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Happiness is a journey, not a destination.",
  "The purpose of our lives is to be happy.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The key to being happy is knowing you have the power to choose what to accept and what to let go.",
  "Happiness is an inside job.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "Happiness is letting go of what you think your life is supposed to look like.",
  "The happiest people don't have the best of everything, they just make the best of everything.",
  "You don't need a reason to be happy, just a choice.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Learn to let go. That is the key to happiness.",
  "Happiness is not by chance, but by choice.",
  "The purpose of our lives is to be happy.",
  "Happiness is when what you think, what you say, and what you do are in harmony.",
  "The more you praise and celebrate your life, the more there is in life to celebrate.",
  "If you want to be happy, be.",
  "Happiness is not a goal; it is a by-product.",
  "Count your age by friends, not years. Count your life by smiles, not tears.",
  "The secret of happiness is not in doing what one likes, but in liking what one does.",
  "Be happy with what you have. Be excited about what you want.",
  "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
  "The best way to cheer yourself up is to try to cheer somebody else up.",
  "Happiness is not something you postpone for the future; it is something you design for the present.",
  "Don't cry because it's over, smile because it happened.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

function displayRandomMessage() {
  // Get a random index from the messages array
  var randomIndex = Math.floor(Math.random() * messages.length);
  //var randomIndexTwo = Math.floor(Math.random() * messages.length);

  // Display the random message
  document.getElementById("messageDisplay").innerHTML = messages[randomIndex];
  //document.getElementById("messageDisplayShort").innerHTML = messages[randomIndexTwo];
}
displayRandomMessage();

function motivationMessageDisplay() {
  // Get a random index from the messages array
  var motivation = Math.floor(Math.random() * motivationMessage.length);

  // Display the random message
  document.getElementById("motivationMessage").innerHTML =
    motivationMessage[motivation];
}
motivationMessageDisplay();

function dadJoke() {
  // Get a random index from the messages array
  var joke = Math.floor(Math.random() * dad_jokes.length);

  // Display the random message
  document.getElementById("dadjoke").innerHTML = dad_jokes[joke];
}
// Initial display
dadJoke();
// Display a random message every 7 hours

//display random message when the body loads
//document.body.addEventListener("load", displayRandomMessageShort);
//document.body.addEventListener("load", displayRandomMessage);

// Uncomment the line below if you want to stop displaying messages after a certain time (e.g., 5 minutes)
// setTimeout(() => clearInterval(messageInterval), 300000); // 300,000 milliseconds = 5 minutes
/*
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
getJoke();*/

function getNewContent() {
  //getJoke();
  displayRandomMessage();
  //displayRandomMessageShort();
  dadJoke();
  motivationMessageDisplay();
}

btn.addEventListener("click", getNewContent);

//light and dark mode
function dark() {
  //get each element then style them
  let messageOne = document.getElementById("messageDisplay");
  let messageTwo = document.getElementById("motivationMessage");
  let clickBtn = document.getElementById("btn");
  let jokeBtn = document.getElementById("dadjoke");
  let realBtn = document.getElementById("button");
  //let arr = [messageOne, messageTwo, clickBtn, jokeBtn];

  messageOne.style.backgroundColor = "black";
  messageTwo.style.backgroundColor = "black";
  clickBtn.style.backgroundColor = "black";
  clickBtn.style.color = "white";
  realBtn.style.backgroundColor = "black";
  realBtn.style.color = "white";
  messageOne.style.color = "white";
  messageTwo.style.color = "white";
  jokeBtn.style.backgroundColor = "black";
  jokeBtn.style.color = "white";
  document.body.style.backgroundColor = "black";
  messageOne.style.boxShadow =
    "-2px -2px 3px rgba(94, 104, 121, 0.945), 2px 2px 3spx #ffffff";
}
//make background image her picture in ASCI
console.log(dad_jokes.length);
