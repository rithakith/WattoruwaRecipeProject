import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [

    {
        id: '1', name: 'Finger  Millet Roti', imagePath: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTgzNDA5NjUzNTQ2MjMwODIy/ragi-chapati-finger-millet-roti-recipe.webp', description: ' Finger millet roti, a gluten-free flatbread made from finger millet flour, is rich in nutrients and is often enjoyed with diverse accompaniments for a wholesome and flavorful meal.', favorite: true, stars: 3, ingredients: ['Finger millet flour-150g', 'Sorghum flour-100g', 'Water(As necessary)', 'Salt'], methods: ['Sieve the flour', 'Combine everything and mix into a soft dough and leave for ½ hour', 'Heat the clay frying pan and flatten the dough thinly', 'Sear both sides slightly on the frying pan and remove from the fire'], tags: ['Pregnancy', 'Obesity', 'Dengue']
        , calorieAmount: '500 calories',cookTime: '25'
    },

    { id: '2', name: 'Finger Millet Rolls', imagePath: 'https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.6435-9/106453102_229512072103630_1849202586740054677_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=512d91&_nc_ohc=F1HhecxTjykAX8Krrjq&_nc_ht=scontent.fcmb8-1.fna&oh=00_AfD2NDQGybqCx3V8OmG7wNNPrQiLXQiWyP0Cf_2M_e5t3Q&oe=64FB3AE3', description: 'Finger millet pittu is a traditional Sri Lankan  dish where finger millet flour is steamed with grated coconut, resulting in a textured and nutritious delicacy enjoyed with various curries and chutneys.', favorite: false, stars: 3, ingredients: ['Kurakkan flour-250g', 'Scraped coconut-100g', 'Sugar-1 tbs', 'Water(As necessary)', 'Salt'], methods: ['Combine and mix everything together,Sprinkling some water to form crumbs', 'Pack the crumbs sternly into a cylindrical steamer and steam until cooked', 'Then cut the contents into equal portions and serve'], tags: ['Pregnancy', 'Obesity'], calorieAmount: '600 calories' ,cookTime: '25'},

    { id: '3', name: 'Vegetable Ghee Rice', imagePath: 'https://www.ticklingpalates.com/wp-content/uploads/2022/03/vegetable-ghee-rice.jpg', description: 'Vegetable ghee rice is a aromatic  dish where basmati rice is cooked with spices, vegetables, and a blend of ghee and oil, offering a delightful and aromatic meal. Perfect as a main course or side dish with curries.', favorite: true, stars: 3, ingredients: ['Samba Rice-500g', 'Stock-4 Cups', 'Vegetable Ghee-2 tbs', 'Panda leaf-1', 'Sliced red onion-30g', 'Cinnamon-1”', 'Pepper seed-5 nos', 'Cardamom-2 pods', 'Cloves-2 pods', 'Curry Leaves-1 tbs-'], methods: ['Wash rice and leave it to drain', 'Warm vegetable ghee and add sliced red onion, curry leaves to fry', 'Add rice and fry for about two minutes', 'Add salt to meat stock, mis and thereafter combine everything with rice', 'Meanwhile gather panda leaf, cinnamon,cloves and cardamom to a bundle in thin clothe and leave with rice and close the lid tightly', 'When rice is sufficiently boiled, remove the bundle', 'Empty the rice on a platter , garnish and serve'], tags: ['Pregnancy'], calorieAmount: '700 calories',cookTime: '25' },

    { id: '4', name: 'Sour Clay Pot Fish', imagePath: 'https://www.islandsmile.org/wp-content/uploads/2022/04/IMG_5965-1152x1536.webp', description: 'Sour clay pot fish is a Southeast Asian delicacy where fish is cooked with tamarind, herbs, and spices in a clay pot, resulting in tender and flavorful bites that capture the essence of traditional cooking.', favorite: false, stars: 3, ingredients: ['Fish-200g', 'Sliced Ginger-1/4 tbs', 'Ground gamboge-15g', 'Cinnamon-1/4”', 'Green chillie-2 pods', 'Panda leaves-1/4”', 'Pepper powder-2 tbs', 'Water-1 Cup', 'Shredded curry leaves-1 tbs', 'Sliced garlic-1/2 tbs', 'Salt'], methods: ['Wash and cut the fish', 'Grind all ingredients except fish', 'Add the mixture to the fish', 'Add water and cook in low fire until the water evaporates'], tags: ['Diabetics'], calorieAmount: '650 calories' ,cookTime: '25'},

    { id: '5', name: 'Salt Crushed Prawn Dish', imagePath: 'https://salu-salo.com/wp-content/uploads/2017/06/Salted-Prawns-2.jpg.webp', description: 'Salt-crushed prawn dish features succulent prawns coated in a mixture of crushed salt and aromatic spices, creating a flavorful crust when cooked—a savory delicacy that tantalizes the taste buds with its delightful texture and taste. ', favorite: false, stars: 3, ingredients: ['Normal size prawns-400g', 'Salt-15g', 'Barbecue sticks-8 nos'], methods: ['Remove the heads of prawns and wash', 'And fix on the the barbecue bar', 'Mix with salt diluted in a little amount of water', 'Warm the grilled plate and spread the prawns', 'Barbecue for few minutes'], tags: ['Pregnancy', 'Cholesterol'], calorieAmount: '800 calories',cookTime: '25' },

    { id: '6', name: 'Chicken Devil Curry', imagePath: 'https://cookerybay.com/wp-content/uploads/2022/08/chicken-devil-1536x1062.jpg', description: 'Chicken Devil Curry, a fiery dish from Sri Lanka, combines tender chicken pieces with a rich blend of spices, coconut milk, and tamarind, resulting in a bold and flavorful curry that offers a perfect balance of heat and depth of flavor. ', favorite: false, stars: 3, ingredients: ['Chicken-250g', 'Chopped garlic-1 tbs', 'Capsicum-40g', 'Chopped ginger-1/2 tbs', 'Big onions-40g', 'Turmeric-1/2 tbs', 'Tomato wedged-40g', 'Chillie pieces-1/2 tbs', 'Leeks-30g', 'Coconut oil-1 cup', 'Chopped onions-20g', 'Cinnamon-1/4”', 'Green chillie quarterly cut-4 pods', 'Panda leaf-1/4”', 'Shredded curry leaves-1 tbs', 'Black pepper pieces-1tbs', 'Salt'], methods: ['Remove the bone and cut the chicken to small pieces', 'Mix with turmeric and salt and half boil in oil', 'Cross cut capsicum In to ¼” size and big onions to ¾” pieces and leeks ½” long', 'Place a pan and add oil to fry chopped onions, panda leaves, curry leaves and cinnamon until its brown', 'Add ginger, garlic, chilly pieces, chicken and salt and mix well', 'Then mis with big onion, leeks, green chilli and tomatoes and pepper and half boil in low fire'], tags: ['Pregnancy', 'Dengue'], calorieAmount: '900 calories',cookTime: '25' },

    { id: '7', name: 'Nymphaea lotus rice', imagePath: 'https://img-global.cpcdn.com/recipes/79407ef594192221/1360x964cq70/lotus-seed-rice-recipe-main-photo.webp', description: ' Nymphaea lotus rice" is a type of food made from the seeds of the Nymphaea lotus plant. The seeds are processed to create a rice-like grain that can be cooked and eaten. It is a unique and nutritious option for meals.',favorite:true,stars:3,ingredients:['Oolu rice- 500g','Water - 10 cups', 'Salt'],methods:['Wash strain, add water and salt and put to boil','Cook until the seeds are split','Then drain and simmer a littile until it’s done'],tags: ['Pregnancy','Obesity','Gastritis', 'Diabetes']  ,calorieAmount:'300 calories',cookTime:'30'},

    {
        id: '8', name: 'String Hoppers', imagePath: 'https://harischandramills.com/wp-content/uploads/2018/06/3-2.jpg', description: 'String hoppers are thin, delicate noodles made from rice flour, shaped into small nests or discs. They are a common dish in South Asian cuisine. These noodles are steamed and served as a versatile base for various curries, sauces, or coconut-based dishes. ', favorite: true, stars: 4, ingredients: ['Roasted rice flour-500g', 'Water(As necessary', 'Salt'], methods: ['Add salt to flour and slowly add luke warm water and work into a soft dough', 'Place sufficient amount of dough in a string hopper mold and press the plunger to squeeze onto hopper mats', 'Place the mats in a steamer and steam until the string hoppers are well cooked', 'Remove the string hoppers from the steamer and serve'], tags: ['Diabetes', 'Gastritis']
        , calorieAmount: ' 150 calories', cookTime: '60'
    },


    {
        id: '9', name: 'Grilled vegetable salad', imagePath: 'https://www.prouditaliancook.com/wp-content/uploads/2014/04/spring-sal6.jpg ', description: ' Grilled vegetable salad is a flavorful dish featuring charred vegetables like peppers, zucchini, and eggplant. Mixed with fresh greens and a light dressing, it creates a balanced and nutritious meal.', favorite: false, stars: 3, ingredients: ['Carrot-50g', 'Bell pepper-25g', 'Pumpkin-50g', 'Corn oile-4tbsp', 'Brinjal-50g', 'Powdered pepper-1tbsp', 'Ladies-finger(tender)-50g', 'Big onions-50g', 'Long beans-50g', 'Salt'], methods: ['Cut carrots,brinjals and pumpkin lengthwise', 'Cut off both ends of the ladies finger', 'Cut long beans in to 4in pieces and split', 'Similarly split bell pepper and big onions quarterly', 'Mix all with oil,salt and pepper', 'Heat pan and add ingredients separately until they are golden brown', 'After grilling arrange all in a pleasant order and serve with tamarind sauce'], tags: ['High blood pressure', 'Cholesterol', 'Obesity', 'Pregnancy']
        , calorieAmount: ' 200 calories', cookTime: '25'
    },





    {
        id: '10', name: 'Tender Jack fruit Salad', imagePath: 'https://farm9.staticflickr.com/8165/7183288902_62c2826f8d.jpg', description: ' Jackfruit salad combines ripe jackfruit with fruits like pineapple and mango. A sweet and tangy dressing enhances the tropical flavors, creating a delightful and exotic dish.', favorite: true, stars: 3, ingredients: ['Tender jack fruit pieces-200g', 'Capsicum-25g', 'Slightly ripe mango-100g', 'Pepper pieces-1tbsp', 'Big onions-50g', 'Peanut(split-roasted)-50g', 'Salt'], methods: ['Boil tender jackfruit and cut to small pieces', 'Cut mango pieces accordingly', 'Remove capsicum seeds and cut them into squares', 'Cut big onions', 'Mix will curry leave sambol and serve'],tags: ['Diabetes','High blood pressure','Pregnancy']
            , calorieAmount: '150 calories', cookTime: '20'},




    { id: '11', name: 'Vegetable soup', imagePath: 'https://www.saltandlavender.com/wp-content/uploads/2021/03/chicken-vegetable-soup-recipe-2-1024x1536.jpg ', description: ' Vegetable soup is a comforting and nutritious dish made by simmering a variety of fresh vegetables in flavorful broth. The result is a warm and hearty blend that is both wholesome and delicious. ',favorite:true,stars:4,ingredients:[ 'arrots - 100g','Barley - 25g','Leeks - 50g', 'Butter - 10g','Potatoes - 50g','Water - 1 litre', 'Celery - 50g','Pepper - 10 seeds','Dhal - 50g', 'Big onions- 50g','Beans - 50g','Salt'],methods:['Boil dhal and barley in water', 'Clean and wash carrots, leeks and celery', 'Take potatoes separately and cut them', 'Then slice the remaining vegetables', 'Warm butter on a oan and add onions, carrot, beans, celery, potatoes and leeks to fry a little', 'Pour boiled water and add pepper seeds and boil in low fire', 'Then remove the pepper seeds and sieve the content to mash or blender', 'Add everything into water and put to boil', 'Remove surfacing foam and add salt'],tags: ['Dengue','Gastritis','Obesity']
    , calorieAmount: ' 500 calories', cookTime: '50'},













{
    id: '6', name: 'Vegetable rice dish', imagePath: 'https://veenaazmanov.com/wp-content/uploads/2018/06/One-Pot-Vegetable-Rice-2.jpg ', description: ' This is a nutritious blend of fluffy rice and vibrant vegetables, sautéed with aromatic spices. This versatile dish stands alone as a wholesome meal or pairs perfectly with proteins. A harmonious medley of textures and flavors for a satisfying dining experience.', favorite:true, stars: 4, ingredients: ['Samba Rice-500g', 'Turmeric-1/4 tbsp', 'Carrot-25g', 'Butter-3tbsp', 'Leeks-25g', 'Cabbage-25g', 'Celery-10g', 'Salt'], methods: ['Cook rice in the normal way', 'Cut carrots,leeks,cabbage and celery', 'Warm butter in a pan adding carrots and celery', 'When they are halfway boiling add turmeric, leeks and cabbage', 'Add salt for taste and leave for a minute to fry', 'Add the boiled rice and mix and remove'], tags: ['Cholesterol', 'Obesity', 'Pregnancy']
        , calorieAmount: '600 calories', cookTime: '50'
},









{
    id: '7', name: 'Milk Rice', imagePath: 'https://limitlessspice.com/wp-content/uploads/2022/03/kiribath-g14f0f1d3c_1920.jpg', description: 'Milk rice, a comforting classic, combines the richness of rice with the creamy essence of milk. Simmered to a velvety consistency and often sweetened with a touch of sugar, it offers a warm and indulgent treat. This dish transcends breakfast and dessert, delivering a simple yet delightful experience for all occasions. ', favorite: true, stars: 3, ingredients: ['Raw rice-500g', 'Thick coconut milk-500ml', 'Water-1400ml', 'Salt'], methods: ['Wash the rice', 'Add water and boil', 'When rice is done and dry add thick coconut milk and stir well and close the lid', 'Reduce the heat and leave to dry', 'Remove from the fire and spread and flatten milk rice on tray or a plank about 1 inch thickness', 'Let it cool and cut the spread with a blunt knife into a diamond shape and serve with accompanies'], tags: ['High blood pressure', 'Pregnancy']
        , calorieAmount: ' 700 calories', cookTime: '1 hour'
},

{
    id: '8', name: 'Omelette Curry', imagePath: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Mudaliar_Style_Omelette_Curry_Recipe.jpg ', description: ' Omelette curry is a delectable dish featuring tender omelette slices nestled in a flavorful curry sauce. The curry is typically made with aromatic spices, tomatoes, and onions, creating a harmonious blend of textures and tastes. This unique combination offers a satisfying meal that bridges the gap between traditional omelettes and savory curries, making it a delightful choice for those seeking something different and delicious.', favorite: false, stars: 2, ingredients: ['Eggs-6', 'Roasted green gram powder-100g', 'Sliced onions-50g', 'Coconut oil-1tbsp', 'Green chillies cut-4g', 'Salt'], methods: ['Combine eggs with onions ,curry leaves,salt and green chillies and beat thoroughly', 'Place wok on fire ,add oil and let to warm', 'Then add the egg mixure, and fry both sides', 'Combine everything except thick milk and simmer and later add thick milk also to make a thick gravy', 'Then cut the omlette into diamond shape and add to the same curry mixture ', 'Add the omlette pieces and boil well'], tags: ['Pregnancy', 'High blood pressure']
        , calorieAmount: '400 calories', cookTime: '30'
},
{
    id: '9', name: 'Dhal Temper', imagePath: 'https://www.loveandotherspices.com/wp-content/uploads/2020/03/RedLentilDal-Post.jpg ', description: ' Dal tempered is a comforting lentil dish known for its aromatic and robust flavors. Cooked lentils are infused with a tempering of spices like cumin, mustard seeds, and aromatic herbs like curry leaves. This technique enhances the dish with a tantalizing aroma and a burst of savory taste. The resulting dal is a wholesome and satisfying option that pairs perfectly with rice or bread, offering a delightful balance of textures and seasonings in every bite.', favorite: true, stars: 3, ingredients: ['Dhal-200g', 'Turmeric-1/2tbsp', 'Shredde onions-30g', 'Lime juice-1tbsp', 'Sliced green chilie-4 pods', 'Coconut oil-2tbsp', 'Sliced garlic-2tbsp', 'Water-2 cups', 'Shredded curry-1tbsp', 'Panda leaf-1/4”', 'Chilie flakes-6g', 'Cinnamon-1/4”', 'Roasted fenugreek-1/2tbdp', 'Mustard seeds-2g', 'Salt'], methods: ['Clean dhal,wash and drain off water', 'Place a vessel,add oil,warm up,add mustard and when it splits add onions,garlic,green chilies,oanda,curry leaves and cinnamon and fry till golden brown', 'Then add fenugreek,chilie flakes and turmeric and fry a little', 'Then add salt and dhal with 2 cups of water and boil in low fire', 'Remove and add lime juice'], tags: ['Hogh blood pressure', 'Cholesterol', 'Obesity', 'Pregnanacy']
        , calorieAmount: '400  calories', cookTime: '40'
},
]

export const sample_tags: Tag[] = [
    { name: 'Diabetics', count: 1 },
    { name: 'Gastritis', count:3 },
    { name: 'High blood pressure', count:4 },
    { name: 'Cholesterol', count:4},
    { name: 'Dengue', count: 3 },
    { name: 'Obesity', count: 7},
    { name: 'Pregnancy', count:11 }
]