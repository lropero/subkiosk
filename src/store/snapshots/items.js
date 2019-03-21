const items = {
  items: [
    {
      id: '1',
      name: 'Black Forest Ham',
      description: 'Black Forest Ham sandwich is classic. Just add your own flavor. Oh, and it’s one of eight six-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '2',
      name: 'Chicken & Bacon Ranch Melt',
      description: 'The Chicken & Bacon Ranch Melt sandwich is packed with tender all-white meat chicken with seasoning and marinade, savory bacon, melty Montery cheddar cheese…and toasted. Aw yeah.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '3',
      name: 'Cold Cut Combo',
      description: 'The Cold Cut Combo sandwich with ham, salami, and bologna (all turkey based) is a long-time Subway® favorite. Yeah. It’s that good.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '4',
      name: 'Italian B.M.T.®',
      description: 'The Italian B.M.T.® sandwich is filled with Genoa salami, spicy pepperoni, and Black Forest Ham. Big. Meaty. Tasty. Get it.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '5',
      name: 'Meatball Marinara',
      description: 'The Meatball Marinara sandwich is drenched in irresistible marinara sauce, sprinkled with Parmesan cheese, topped with whatever you want (no judgement) and perfectly toasted just for you.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '6',
      name: 'Oven Roasted Chicken',
      description: 'The Oven Roasted Chicken sandwich is warm, with savory chicken on freshly baked bread with your choice of veggies. Oh, and it’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '7',
      name: 'Roast Beef',
      description: 'Our Roast Beef sandwich has lean, sliced beef piled up high, then topped with crisp, crunchy veggies. Oh, and it’s one of eight six-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '8',
      name: 'Rotisserie-Style Chicken',
      description: 'Our Rotisserie-Style Chicken sandwich is made with tender, hand-pulled chicken. All that, and it’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '9',
      name: 'Spicy Italian',
      description: 'Our Spicy Italian sandwich is a combo of pepperoni and Genoa salami. Pile on cheese, crunchy veggies, and finish it with your favorite sauce. Or don’t. Your call.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '10',
      name: 'Steak & Cheese',
      description: 'Our Steak & Cheese sandwich is where warm, delicious steak gets topped with melty cheesiness. Get crazy with veggies and sauces to make it what you want.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '11',
      name: 'Subway Club®',
      description: 'Enjoy a low-fat flavor feast of premium sliced turkey breast, lean roast beef and tasty Black Forest ham. Oh, and it’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories. Not too shabby.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '12',
      name: 'Sweet Onion Chicken Teriyaki',
      description: 'Our Sweet Onion Chicken Teriyaki sandwich is stuffed with teriyaki-glazed chicken strips topped with our own fat-free sweet onion sauce. All that, and it’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '13',
      name: 'Classic Tuna',
      description: 'Our Tuna sandwich is simply delish. Flaked tuna blended with mayo, topped with your choice of veggies. Make it what you want ™.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '14',
      name: 'Turkey Breast',
      description: 'You’ll never go wrong with a savory Turkey Breast sandwich. Our premium sliced turkey breast is simply delish. Make it what you want with crunchy veggies and more. And, it’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '15',
      name: 'Veggie Delite®',
      description: 'The Veggie Delite®sandwich is crispy, crunchy, vegetarian perfection. Pile on the veggies any which way you want! It’s one of eight 6-inch Fresh Fit™ subs with two servings of crisp veggies on freshly baked bread for under 400 calories.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '16',
      name: 'Black Forest Ham',
      description: 'The Black Forest Ham chopped salad is a flavorful way to enjoy a Subway® favorite. Sliced ham, lettuce, and a pile of your favorite veggies - all tossed with your choice of dressing.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '17',
      name: 'Chicken & Bacon Ranch',
      description: 'The Chicken & Bacon Ranch Melt chopped salad has tender all-white meat chicken with seasoning and marinade, topped with Monterey cheddar cheese, and bacon. All on top of crunchy greens and your choice of dressing. Aw yeah.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '18',
      name: 'Cold Cut Combo',
      description: 'The Cold Cut Combo chopped salad has ham, salami, and bologna (all turkey-based) tossed together with crisp lettuce and your favorite veggies. Mix it up with whatever dressing you love best.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '19',
      name: 'Italian B.M.T.®',
      description: 'The Italian B.M.T.® chopped salad is the salad version of our popular sub. Crisp greens topped with Genoa salami, spicy pepperoni, and Black Forest ham. Meaty deliciousness, all in a salad.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '20',
      name: 'Meatball Marinara',
      description: 'The Meatball Marinara chopped salad is the ultimate cravings crusher. Hot Italian-style meatballs in marinara sauce and a sprinkle of Parmesan cheese, all sitting on top of your favorite greens and veggies. Yes!',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '21',
      name: 'Oven Roasted Chicken',
      description: 'The Oven Roasted Chicken chopped salad has warm, savory chicken tossed together with crisp greens and any veggies you want. Your favorite sandwich, just in salad form.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '22',
      name: 'Roast Beef',
      description: 'Our Roast Beef chopped salad has lean, sliced beef tossed with crisp greens, and any veggies that you love. Mix in your favorite dressing while you’re at it. Day made.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '23',
      name: 'Rotisserie-Style Chicken',
      description: 'The Rotisserie-Style Chicken chopped salad stars warm, tender, hand-pulled chicken tossed with crisp greens … and any other veggies and dressings you crave.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '24',
      name: 'Spicy Italian',
      description: 'Our Spicy Italian chopped salad is a combo of pepperoni and Genoa salami. Basically, the ideal Italian sub, but transformed into a salad. Genius, right?',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '25',
      name: 'Steak & Cheese',
      description: 'The Steak & Cheese chopped salad starts with crisp greens, but gets to the next level with warm, delicious steak topped with cheese. Dreams do come true.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '26',
      name: 'Subway Club®',
      description: 'Our premium sliced turkey breast, lean roast beef and tasty Black Forest ham…all tossed with crunchy lettuce and your choice of tasty veggies. It’s the Subway Club® chopped salad, and it’s amazing.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '27',
      name: 'Sweet Onion Chicken Teriyaki',
      description: 'Enjoy our Sweet Onion Chicken Teriyaki flavors on a chopped salad. Tender teriyaki-glazed chicken strips topped with fat-free sweet onion sauce over crisp greens and a generous pile of veggies. Flavor like whoa.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '28',
      name: 'Tuna',
      description: 'Our Tuna chopped salad is simply delish. Flaked tuna mixed with mayo, riding high on top of a bed of crisp lettuce and veggies. Classic for a reason.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '29',
      name: 'Turkey Breast',
      description: 'The Turkey Breast chopped salad is a go-to salad choice. Our premium sliced turkey breast, tossed together with lettuce, crunchy veggies and whatever dressing does it for you. Simply the best.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '30',
      name: 'Veggie Delite®',
      description: 'Enjoy the simpler things? The Veggie Delite® chopped salad is simply delish. A pile of your favorite veggies, finished with the dressing of your choice. Crisp. Delicious. All for you.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '31',
      name: 'Musselman’s Apple Sauce',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '32',
      name: 'Chips',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '33',
      name: 'Cookies',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '34',
      name: '1% Low Fat Milk',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '35',
      name: 'Honest Kids®',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '36',
      name: 'Coca Cola® Fountain Sodas',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '37',
      name: 'Simply Apple®',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '38',
      name: 'Simply Orange®',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '39',
      name: 'Simply Lemonade®',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '40',
      name: 'Fuze® Fresh Brewed Iced Tea',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '41',
      name: 'Dasani® Bottled Water',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '42',
      name: 'Gatorade®',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '43',
      name: 'vitaminwater XXX',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '44',
      name: 'X2 Sport Energy: Fruit Punch',
      description: 'A better for you drink that gives you the energy you want without the guilt. X2 Sport has no artificial ingredients and includes caffeine from green tea, coconut water for hydration, and only 9 grams of sugar!',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '45',
      name: 'X2 All-Natural Energy: Strawberry Kiwi/Raspberry',
      description: 'A better for you drink that gives you the energy you want without the guilt. X2 is all natural, with no artificial ingredients, less sugar, caffeine from green tea, pure honey and non-carbonated!',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '46',
      name: 'Coffee',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '47',
      name: 'New Sesame-Ginger Glazed Chicken',
      description: 'The new Sesame-Ginger Glazed Chicken Signature Wrap is loaded with a double portion of savory rotisserie-style chicken mixed with a sweet ginger-sesame glaze. We then add Monterey cheddar, spinach, cucumber, red onions and roll it all up in a delicious spinach wrap.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '48',
      name: 'New Sweet N’ Smoky Steak & Guac',
      description: 'The new Sweet N’ Smoky Steak & Guac Signature Wrap is a combination of flavors you’ve been craving. A double portion of steak, sweet Guajillo Mesquite Sauce and creamy guacamole. All in a tomato basil wrap with jalapeños, veggies, and Monterey cheddar cheese.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '49',
      name: 'Chipotle Southwest Steak & Cheese',
      description: 'Saddle up with this delicious tomato basil wrap jam-packed with a double portion of steak and topped with your favorite Tex-Mex flavors like Monterey cheddar, guacamole, jalapeños, lettuce, tomatoes, red onion, green peppers and Chipotle Southwest sauce.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '50',
      name: 'Savory Rotisserie-Style Chicken Caesar',
      description: 'Who can resist the classic combination of a delicious Spinach wrap filled with a double portion of tender rotisserie-style chicken topped with Monterey cheddar, Parmesan cheese, lettuce, tomatoes and Savory Caesar sauce? No one. That’s who.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '51',
      name: 'Turkey, Bacon & Guacamole',
      description: 'The name says it all. A delicious tomato basil wrap filled with a double portion of our premium sliced turkey breast and smoky applewood bacon. And then topped with provolone cheese, guacamole, lettuce, tomatoes, red onions, and ranch sauce.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '52',
      name: 'Black Forest Ham',
      description: 'Black Forest Ham Signature Wrap is packed with a double portion of ham packed into a tomato basil wrap with lettuce, spinach, tomatoes, cucumbers, green peppers and red onions. Definitely delish.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '53',
      name: 'Chicken & Bacon Ranch Melt',
      description: 'The Chicken & Bacon Ranch Melt Signature Wrap is a tomato basil wrap with a double portion of tender, all-white meat chicken with seasoning and marinade, bacon, and topped with Monterey cheddar cheese. Aww yeah.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '54',
      name: 'Cold Cut Combo',
      description: 'Can’t decide what kind of meat you want? Get three at once on a delicious tomato basil wrap. Stacked with a double portion of turkey-based meats including ham, salami, and bologna. Enjoy it with lettuce, tomatoes, cucumbers, green peppers, and red onions.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '55',
      name: 'Italian B.M.T.®',
      description: 'The Italian B.M.T.® Signature Wrap tastes great on a tomato basil wrap. It’s filled with a double portion of Genoa salami, spicy pepperoni, and Black Forest ham topped with lettuce, tomatoes, cucumbers, green peppers, and red onions. So tasty.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '56',
      name: 'Meatball Marinara',
      description: 'Our Meatball Marinara Signature Wrap is a double portion of Italian-style meatballs in irresistible marinara sauce, with Parmesan cheese, in a tomato basil wrap. Get yourself one.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '57',
      name: 'Oven Roasted Chicken',
      description: 'The Oven Roasted Chicken Signature Wrap is a fan favorite featuring a double portion of the oven roasted chicken you love, on a delicious spinach wrap. Top it with lettuce, tomatoes, cucumbers, spinach, crisp green peppers, and red onions.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '58',
      name: 'Roast Beef',
      description: 'Our Roast Beef Signature Wrap has a double portion of sliced beef all tucked into a spinach wrap and topped with lettuce, tomatoes, spinach, cucumbers, green peppers, and red onions. Get it wrapped.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '59',
      name: 'Rotisserie-Style Chicken',
      description: 'Your taste buds will love the Rotisserie-Style Chicken Signature Wrap. It’s a double portion of tender, hand-pulled rotisserie-style chicken in a spinach wrap, stuffed with crisp lettuce, spinach, juicy tomatoes, cucumbers, green peppers, and red onions.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '60',
      name: 'Spicy Italian',
      description: 'Feeling spicy? Grab a Spicy Italian Signature Wrap. It’s a double portion of spicy pepperoni and Genoa salami on a tomato basil wrap. Topped with lettuce, tomatoes, cucumbers, green peppers and red onions…it’s a pretty delicious meal.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '61',
      name: 'Subway Club®',
      description: 'The Subway Club® Signature Wrap is a delish double portion of our premium sliced turkey breast, lean roast beef and tasty Black Forest ham in a spinach wrap. Get tready for a flavor explosion. Boom.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '62',
      name: 'Sweet Onion Chicken Teriyaki',
      description: 'The Sweet Onion Chicken Teriyaki Signature Wrap is a double portion of tender teriyaki-glazed, all-white meat chicken strips, raised without antibiotics, with seasoning and marinade topped with our fat-free sweet onion sauce. Wrap it up in a tomato basil wrap with lettuce, spinach, tomatoes, cucumbers, green peppers, and red onions. Get ready for a big bite of awesome.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '63',
      name: 'Tuna',
      description: 'Our tasty Tuna Signature Wrap is completely cravable. It has a double serving of flaked tuna mixed with mayo in a tomato basil wrap. Then it gets topped with any crunchy veggies you want.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '64',
      name: 'Turkey Breast',
      description: 'Our Turkey Breast Signature Wrap is a go-to. With a double portion of our premium sliced turkey in a spinach wrap. Made just for you with crunchy veggies and sauces.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '65',
      name: 'Veggie Delite®',
      description: 'The Veggie Delite® Signature Wrap has a double portion of the fresh veggies you love. All wrapped in a flavorful spinach wrap with lettuce, tomatoes, spinach, green peppers, cucumbers, and red onions. It’s one bold, crunchy flavor combo.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '66',
      name: 'Bacon, Egg & Cheese',
      description: 'Start your day in a sizzlin’ way with bacon, egg, and melty cheese on freshly toasted flatbread (or whatever you like). Pile on your favorite veggies and sauce. Start the day right.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '67',
      name: 'Black Forest Ham, Egg & Cheese',
      description: 'Enjoy savory Black Forest ham, melted cheese, and egg - all on your favorite bread. Add your choice of veggies for a tasty way to start the day. Hello, delicious.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '68',
      name: 'Steak, Egg & Cheese',
      description: 'No matter what side of the bed you wake up on, you’ll love this. Yummy egg with tender and delicious steak covered in melty cheese. That’s one beautiful breakfast.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '69',
      name: 'Egg & Cheese',
      description: 'A classic for a reason. Our Egg and Cheese is simply delicious. Enjoy a fluffy egg omelet with melted cheese. Try it toasted - It’s unbeatable.',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '70',
      name: 'Black Forest Ham Mini for Kids',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '71',
      name: 'Roast Beef Mini for Kids',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '72',
      name: 'Turkey Breast Mini for Kids',
      price: Math.floor(Math.random() * 7) + 0.99
    },
    {
      id: '73',
      name: 'Veggie Delite® Mini for Kids',
      price: Math.floor(Math.random() * 7) + 0.99
    }
  ]
}

export default items