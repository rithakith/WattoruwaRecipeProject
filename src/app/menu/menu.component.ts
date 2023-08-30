import { Component,OnInit } from '@angular/core';
import { Menu_items } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: Menu_items[] =[

    new Menu_items('Finger  Millet Roti',' Finger millet roti, a gluten-free flatbread made from finger millet flour, is rich in nutrients and is often enjoyed with diverse accompaniments for a wholesome and flavorful meal.','https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTgzNDA5NjUzNTQ2MjMwODIy/ragi-chapati-finger-millet-roti-recipe.webp',3,'20-25'),
    new Menu_items('Finger Millet Rolls','Finger millet pittu is a traditional Sri Lankan  dish where finger millet flour is steamed with grated coconut, resulting in a textured and nutritious delicacy enjoyed with various curries and chutneys','https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.6435-9/106453102_229512072103630_1849202586740054677_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=512d91&_nc_ohc=F1HhecxTjykAX8Krrjq&_nc_ht=scontent.fcmb8-1.fna&oh=00_AfD2NDQGybqCx3V8OmG7wNNPrQiLXQiWyP0Cf_2M_e5t3Q&oe=64FB3AE3',4,'30-35'),
    new Menu_items('Vegetable Ghee Rice','Vegetable ghee rice is a aromatic  dish where basmati rice is cooked with spices, vegetables, and a blend of ghee and oil, offering a delightful and aromatic meal. Perfect as a main course or side dish with curries','https://www.ticklingpalates.com/wp-content/uploads/2022/03/vegetable-ghee-rice.jpg',5,'35-40'),

  ]
  desserts: Menu_items[]=[
    new Menu_items('Ginger Pudding(inguru pudima)','This ginger pudding is made with ginger juice. The mixture will solidify after sitting for a few minutes to give you a super soft and wobbly pudding','https://img.delicious.com.au/Dw1-fnzf/w1200/del/2020/06/sticky-ginger-pudding-133537-2.jpg',2,'15-20'),
    new Menu_items('Pineapple Upside Down(annasi udu yatikuru)','An easy to make  classic upside down pineapple recipe which is also perfect when served warmly.','https://media.istockphoto.com/id/1371159045/photo/creamy-cake-with-pineapple.webp?b=1&s=170667a&w=0&k=20&c=cwX5-R-Hg71MdajRnarD4UBKSXxttNHJZ0dfpPq1vUM=',3,'20-25'),
    new Menu_items('Watalappan','Watalappan is a super easy-to-make steamed dessert that needs a few simple ingredients and less preparation','https://www.dailylife.lk/kitchen/watalappan/images/watalappan.jpg',4,'24-30'),
  ]
  drinks: Menu_items[]=[
    new Menu_items('Coconut Milk Porridge','Coconut milk porridge is a creamy and comforting dish made by simmering rice or grains in luscious coconut milk, offering a delightful blend of smooth texture and subtle sweetness—a nourishing and soothing treat enjoyed across various cultures.','https://i0.wp.com/sarahjayhealing.com/wp-content/uploads/2020/10/Kola-Kanda-herbal-porridge.jpg?resize=2048%2C1356&ssl=1',5,'60'),
    new Menu_items('Finger Millet Flour Porridge','Finger millet flour porridge is a wholesome and nutritious dish created by cooking finely ground finger millet in water or milk, resulting in a hearty and energy-boosting meal with a nutty flavor profile ','https://thumbs.dreamstime.com/b/ragi-porridge-sweet-ragi-malt-india-ragi-porridge-sweet-ragi-malt-java-healthy-nutritional-drink-made-organic-finger-millet-190005946.jpg?w=768',4,'40-50'),
    new Menu_items('Bael Fruit Drink','Bael fruit drink, derived from the ripe fruit of the bael tree, is a refreshing and natural beverage with a unique sweet-tangy flavor, known for its cooling properties and potential health benefits','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfpWUeraIeN-dvT6F2wJvh2RhlO0b8uE6xg&usqp=CAU',4,'35-40'),
  ]
  constructor(){

}
ngOnInit(): void {
    
}
}
