var bgm = document.getElementById("BGM1");

function BGM(){
    bgm.play();
    bgm.volume = 0.5;
    }
setInterval(BGM, 1);


let clickCounter = 0;
        const images = [document.getElementById('myImage1'), document.getElementById('myImage2'), document.getElementById('myImage3'), document.getElementById('myImage4'), document.getElementById('myImage5'), document.getElementById('myImage6')];
        const clickCountElement = document.getElementById('clickCount');

        // Function to handle fading images and incrementing counter
        function fadeAndIncrement() {
 	    function getRandomNumber(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
            clickCounter = getRandomNumber(1, images.length);
            if (clickCounter > images.length) {
                clickCounter = 1; // Reset counter to 1 if it exceeds the number of images
            }
            // Hide all images
            images.forEach(img => {
                img.style.opacity = '0';
            });
            // Show the image corresponding to the current counter value
            images[clickCounter - 1].style.opacity = '1';         	    
 
            clickCountElement.textContent = clickCounter;
        }
        // Call the function initially
        fadeAndIncrement();
        // Automatically trigger the function every 5 seconds
        setInterval(fadeAndIncrement, 1000);

/////////////////////////
let page = 1;
var initialization = 0;
var store_category_1 = 0;
var store_category_2 = 1;
const button = document.getElementById('Menu');
const main_title = document.getElementById('Main_Title');
const main_tagline = document.getElementById('Main_Tagline');
const menu_panel = document.getElementById('Menu_Panel');
const menu_home_bttn = document.getElementById('Menu_Home_Button');
const menu_store_bttn = document.getElementById('Menu_Store_Button');
const home_panel = document.getElementById('Home_Display_Container');
const home_top_label = document.getElementById('Home_Label');
const home_main_center_display = document.getElementById('Home_Center_Display');
const home_sidedisplay_1 = document.getElementById('Home_Side_Display_1');
const home_sidedisplay_2 = document.getElementById('Home_Side_Display_2');
const home_sidedisplay_3 = document.getElementById('Home_Side_Display_3'); 
const store_panel = document.getElementById('Store_Display_Container'); 
const store_top_label = document.getElementById('Store_Label'); 
const store_seller_1 = document.getElementById('Store_Seller_Button_1'); 
const store_seller_2 = document.getElementById('Store_Seller_Button_2'); 
const store_seller_3 = document.getElementById('Store_Seller_Button_3'); 
const store_seller_4 = document.getElementById('Store_Seller_Button_4'); 
const store_seller_5 = document.getElementById('Store_Seller_Button_5'); 
const store_voidship = document.getElementById('Store_Voidship_Button'); 
const store_resource = document.getElementById('Store_Resource_Button'); 
const store_technology = document.getElementById('Store_Technology_Button'); 
const store_item_slot_1 = document.getElementById('Store_Slot_1');
const store_item_slot_2 = document.getElementById('Store_Slot_2'); 
const store_item_slot_3 = document.getElementById('Store_Slot_3'); 
const store_item_slot_4 = document.getElementById('Store_Slot_4'); 
const store_item_slot_1_label = document.getElementById('Store_Slot_1_Label');
const store_item_slot_2_label = document.getElementById('Store_Slot_2_Label');
const store_item_slot_3_label = document.getElementById('Store_Slot_3_Label');
const store_item_slot_4_label = document.getElementById('Store_Slot_4_Label');

const audio = document.getElementById("myAudio");


function Main_Title_Entrance() {
		initialization = 1;
		main_title.classList.toggle('non_transparent');
		}	
function Main_Tagline_Entrance() {		
		main_tagline.classList.toggle('non_transparent');	
		initialization = 0;		
		}	
function Menu_Button_Entrance() {		
		button.classList.toggle('non_transparent');			
		}	
function Menu_Panel_Entrance() {		
		menu_panel.classList.toggle('semi_transparent');			
		}
function Menu_Home_Button_Entrance() {		
		menu_home_bttn.classList.toggle('non_transparent');			
		}			
function Menu_Store_Button_Entrance() {		
		menu_store_bttn.classList.toggle('non_transparent');			
		}			
function Home_Panel_Entrance() {
		home_panel.classList.toggle('semi_transparent');
		}		
function Home_Label_Entrance() {		
		home_top_label.classList.toggle('non_transparent');
		}	
function Home_Center_Panel_Entrance() {		
		home_main_center_display.classList.toggle('non_transparent');
		}
function Home_Bottom_Panel_Entrance() {		
		Home_Bottom_Display.classList.toggle('non_transparent');
		}
function Home_Side_Panel_1_Entrance() {		
		home_sidedisplay_1.classList.toggle('non_transparent');
		}
function Home_Side_Panel_2_Entrance() {		
		home_sidedisplay_2.classList.toggle('non_transparent');
		}
function Home_Side_Panel_3_Entrance() {		
		home_sidedisplay_3.classList.toggle('non_transparent');
		}
function Store_Panel_Entrance() {		
		store_panel.classList.toggle('semi_transparent');
		}
function Store_Label_Entrance() {		
		store_top_label.classList.toggle('semi_transparent');
		}
function Store_Seller_1_Entrance() {		
		store_seller_1.classList.toggle('semi_transparent');
		}
function Store_Seller_2_Entrance() {		
		store_seller_2.classList.toggle('semi_transparent');
		}
function Store_Seller_3_Entrance() {		
		store_seller_3.classList.toggle('semi_transparent');
		}
function Store_Seller_4_Entrance() {		
		store_seller_4.classList.toggle('semi_transparent');
		}
function Store_Seller_5_Entrance() {		
		store_seller_5.classList.toggle('semi_transparent');
		}
function Store_Voidship_Entrance() {		
		store_voidship.classList.toggle('semi_transparent');
		}				
function Store_Resource_Entrance() {		
		store_resource.classList.toggle('semi_transparent');
		}	
function Store_Technology_Entrance() {		
		store_technology.classList.toggle('semi_transparent');
		}		
		
function Store_Slot_1_Entrance() {		
		store_item_slot_1.classList.toggle('non_transparent');
		}
function Store_Slot_2_Entrance() {		
		store_item_slot_2.classList.toggle('non_transparent');
		}
function Store_Slot_3_Entrance() {		
		store_item_slot_3.classList.toggle('non_transparent');
		}
function Store_Slot_4_Entrance() {		
		store_item_slot_4.classList.toggle('non_transparent');
		}
		
		
setTimeout(Menu_Button_Entrance, 500);
setTimeout(Main_Title_Entrance, 1000);
setTimeout(Main_Tagline_Entrance, 1500);


button.addEventListener('click', function(){
	if (button.classList.contains('non_transparent')){
		setTimeout(Menu_Button_Entrance, 0);
		setTimeout(Menu_Panel_Entrance, 0);
		setTimeout(Menu_Home_Button_Entrance, 250);	
		setTimeout(Menu_Store_Button_Entrance, 500);		
		} else {
		setTimeout(Menu_Button_Entrance, 0);
		setTimeout(Menu_Panel_Entrance, 500);
		setTimeout(Menu_Home_Button_Entrance, 250);	
		setTimeout(Menu_Store_Button_Entrance, 0);	
		}
	})

menu_home_bttn.addEventListener('click', function(){
		setTimeout(Menu_Panel_Entrance, 284);
		setTimeout(Menu_Home_Button_Entrance, 142);
		setTimeout(Menu_Store_Button_Entrance, 0);
		page = 8;

		setTimeout(Main_Title_Entrance, 284);
		setTimeout(Main_Tagline_Entrance, 426);
		button.style.zIndex = 0;
		
		setTimeout(Home_Panel_Entrance, 142);
		setTimeout(Home_Label_Entrance, 284);	
		setTimeout(Home_Center_Panel_Entrance, 426);
		setTimeout(Home_Bottom_Panel_Entrance, 568);				
		setTimeout(Home_Side_Panel_1_Entrance, 710);	
		setTimeout(Home_Side_Panel_2_Entrance, 852);
		setTimeout(Home_Side_Panel_3_Entrance, 1000);
	})
	
menu_store_bttn.addEventListener('click', function(){
		setTimeout(Menu_Panel_Entrance, 284);
		setTimeout(Menu_Home_Button_Entrance, 142);
		setTimeout(Menu_Store_Button_Entrance, 0);
		page = 18;

		setTimeout(Main_Title_Entrance, 284);
		setTimeout(Main_Tagline_Entrance, 426);
		button.style.zIndex = 0;
		
		setTimeout(Store_Panel_Entrance, 142);
		setTimeout(Store_Label_Entrance, 284);
		setTimeout(Store_Seller_1_Entrance, 426);	
		setTimeout(Store_Seller_2_Entrance, 568);
		setTimeout(Store_Seller_3_Entrance, 710);
		setTimeout(Store_Seller_4_Entrance, 852);
		setTimeout(Store_Seller_5_Entrance, 1000);	
		setTimeout(Store_Voidship_Entrance, 300);	
		setTimeout(Store_Resource_Entrance, 600);
		setTimeout(Store_Technology_Entrance, 900);				
	})
function store_rendering_1(){
		function Change_Slot_1(){
			if (store_category_2 == 1){
				store_item_slot_1.style.backgroundImage = "url('Voidship/FA-11.png')";
				store_item_slot_1_label.textContent = 'FA-11';
					}
			if (store_category_2 == 2){
				store_item_slot_1.style.backgroundImage = "url('Resources/Cerulean Ore.png')";
				store_item_slot_1_label.textContent = 'Cerulean Ore';
					}
			if (store_category_2 == 3){
				store_item_slot_1.style.backgroundImage = "url('Technology/LX-1 Droid.png')";
				store_item_slot_1_label.textContent = 'LX-1 Droid';
					}
				}	
		function Change_Slot_2(){
			if (store_category_2 == 1){
				store_item_slot_2.style.backgroundImage = "url('Voidship/B-01.png')";
				store_item_slot_2_label.textContent = 'B-01';
					}
			if (store_category_2 == 2){
				store_item_slot_2.style.backgroundImage = "url('Resources/Gold Bar.png')";
				store_item_slot_2_label.textContent = 'Gold Bar';
					}
			if (store_category_2 == 3){
				store_item_slot_2.style.backgroundImage = "url('Technology/Legionnaire MKV.png')";
				store_item_slot_2_label.textContent = 'Legionnaire MKV';
					}
				}
		function Change_Slot_3(){
			if (store_category_2 == 1){
				store_item_slot_3.style.backgroundImage = "url('Voidship/XF-01.png')";
				store_item_slot_3_label.textContent = 'XF-01';
					}
			if (store_category_2 == 2){
				store_item_slot_3.style.backgroundImage = "url('Resources/Emerald.png')";
				store_item_slot_3_label.textContent = 'Emerald';
					}
			if (store_category_2 == 3){
				store_item_slot_3.style.backgroundImage = "url('Technology/Alpha I Supra.png')";
				store_item_slot_3_label.textContent = 'Alpha I Supra';
					}
				}
		function Change_Slot_4(){
			if (store_category_2 == 1){
				store_item_slot_4.style.backgroundImage = "url('Voidship/F-01.png')";
				store_item_slot_4_label.textContent = 'F-01';
					}
			if (store_category_2 == 2){
				store_item_slot_4.style.backgroundImage = "url('Resources/Ruby.png')";
				store_item_slot_4_label.textContent = 'Ruby';
					}
			if (store_category_2 == 3){
				store_item_slot_4.style.backgroundImage = "url('Technology/Graviton Beam.png')";
				store_item_slot_4_label.textContent = 'Graviton Beam';
					}
				}
		if (store_item_slot_1.classList.contains('non_transparent')){		
			setTimeout(Store_Slot_1_Entrance, 0);
			setTimeout(Store_Slot_2_Entrance, 100);
			setTimeout(Store_Slot_3_Entrance, 100);
			setTimeout(Store_Slot_4_Entrance, 200);
			
			
			setTimeout(Store_Slot_1_Entrance, 300);
			setTimeout(Store_Slot_2_Entrance, 400);
			setTimeout(Store_Slot_3_Entrance, 400);
			setTimeout(Store_Slot_4_Entrance, 500);
			setTimeout(Change_Slot_1, 300)
			setTimeout(Change_Slot_2, 400)
			setTimeout(Change_Slot_3, 400)
			setTimeout(Change_Slot_4, 500)
			} else {
				setTimeout(Change_Slot_1, 0)
				setTimeout(Change_Slot_2, 100)
				setTimeout(Change_Slot_3, 100)
				setTimeout(Change_Slot_4, 200)
				setTimeout(Store_Slot_1_Entrance, 0);
				setTimeout(Store_Slot_2_Entrance, 100);
				setTimeout(Store_Slot_3_Entrance, 100);
				setTimeout(Store_Slot_4_Entrance, 200);
				}
	}
function store_rendering_2(){
		function Change_Slot_1(){
			if (store_category_2 == 1){
				store_item_slot_1.style.backgroundImage = "url('Voidship/FA-12.png')";
				store_item_slot_1_label.textContent = 'FA-12';
					}
			if (store_category_2 == 2){
				store_item_slot_1.style.backgroundImage = "url('Resources/Azure Crystal.png')";
				store_item_slot_1_label.textContent = 'Azure Crystal';
					}
			if (store_category_2 == 3){
				store_item_slot_1.style.backgroundImage = "url('Technology/Computer System.png')";
				store_item_slot_1_label.textContent = 'Computer System';
					}
				}
		function Change_Slot_2(){
			if (store_category_2 == 1){
				store_item_slot_2.style.backgroundImage = "url('Voidship/XF-02.png')";
				store_item_slot_2_label.textContent = 'XF-02';
					}
			if (store_category_2 == 2){
				store_item_slot_2.style.backgroundImage = "url('Resources/Titanium Rods.png')";
				store_item_slot_2_label.textContent = 'Ti-Metal Rods';
					}
			if (store_category_2 == 3){
				store_item_slot_2.style.backgroundImage = "url('Technology/Energy Core.png')";
				store_item_slot_2_label.textContent = 'Energy Core';
					}
				}
		function Change_Slot_3(){
			if (store_category_2 == 1){
				store_item_slot_3.style.backgroundImage = "url('Voidship/D-01.png')";
				store_item_slot_3_label.textContent = 'D-01';
					}
			if (store_category_2 == 2){
				store_item_slot_3.style.backgroundImage = "url('Resources/Copper Sheet.png')";
				store_item_slot_3_label.textContent = 'Cu-Metal Sheet';
					}
			if (store_category_2 == 3){
				store_item_slot_3.style.backgroundImage = "url('Technology/Fuel Tank.png')";
				store_item_slot_3_label.textContent = 'Fuel Tank';
					}
				}
		function Change_Slot_4(){
			if (store_category_2 == 1){
				store_item_slot_4.style.backgroundImage = "url('Voidship/C-05.png')";
				store_item_slot_4_label.textContent = 'C-05';
					}
			if (store_category_2 == 2){
				store_item_slot_4.style.backgroundImage = "url('Resources/Tungsten Sheet.png')";
				store_item_slot_4_label.textContent = 'W-Metal Sheet';
					}
			if (store_category_2 == 3){
				store_item_slot_4.style.backgroundImage = "url('Technology/Terminus Drill.png')";
				store_item_slot_4_label.textContent = 'Terminus Drill';
					}
				}
		if (store_item_slot_1.classList.contains('non_transparent')){
			setTimeout(Store_Slot_1_Entrance, 0);
			setTimeout(Store_Slot_2_Entrance, 100);
			setTimeout(Store_Slot_3_Entrance, 100);
			setTimeout(Store_Slot_4_Entrance, 200);
						
			setTimeout(Store_Slot_1_Entrance, 300);
			setTimeout(Store_Slot_2_Entrance, 400);
			setTimeout(Store_Slot_3_Entrance, 400);
			setTimeout(Store_Slot_4_Entrance, 500);
			setTimeout(Change_Slot_1, 300)
			setTimeout(Change_Slot_2, 400)
			setTimeout(Change_Slot_3, 400)
			setTimeout(Change_Slot_4, 500)
			} else {
				setTimeout(Change_Slot_1, 0)
				setTimeout(Change_Slot_2, 100)
				setTimeout(Change_Slot_3, 100)
				setTimeout(Change_Slot_4, 200)
				setTimeout(Store_Slot_1_Entrance, 0);
				setTimeout(Store_Slot_2_Entrance, 100);
				setTimeout(Store_Slot_3_Entrance, 100);
				setTimeout(Store_Slot_4_Entrance, 200);
				}
	}
function store_rendering_3(){
		function Change_Slot_1(){
			if (store_category_2 == 1){
				store_item_slot_1.style.backgroundImage = "url('Voidship/IA-01.png')";
				store_item_slot_1_label.textContent = 'IA-01';
					}
			if (store_category_2 == 2){
				store_item_slot_1.style.backgroundImage = "url('Resources/Silver Bar.png')";
				store_item_slot_1_label.textContent = 'Silver Bar';
					}
			if (store_category_2 == 3){
				store_item_slot_1.style.backgroundImage = "url('Technology/J-02.png')";
				store_item_slot_1_label.textContent = 'J-02';
					}
				}
		function Change_Slot_2(){
			if (store_category_2 == 1){
				store_item_slot_2.style.backgroundImage = "url('Voidship/DA-01.png')";
				store_item_slot_2_label.textContent = 'DA-01';
					}
			if (store_category_2 == 2){
				store_item_slot_2.style.backgroundImage = "url('Resources/Oil.png')";
				store_item_slot_2_label.textContent = 'Oil';
					}	
			if (store_category_2 == 3){
				store_item_slot_2.style.backgroundImage = "url('Technology/Nova Plating.png')";
				store_item_slot_2_label.textContent = 'Nova Plating';
					}
				}
		function Change_Slot_3(){
			if (store_category_2 == 1){			
				store_item_slot_3.style.backgroundImage = "url('Voidship/CT-01.png')";
				store_item_slot_3_label.textContent = 'CT-01';
					}
			if (store_category_2 == 2){
				store_item_slot_3.style.backgroundImage = "url('Resources/Silicon.png')";
				store_item_slot_3_label.textContent = 'Silicon';
					}
			if (store_category_2 == 3){
				store_item_slot_3.style.backgroundImage = "url('Technology/Type-G Crate.png')";
				store_item_slot_3_label.textContent = 'Type-G Crate';
					}
				}
		function Change_Slot_4(){
			if (store_category_2 == 1){	
				store_item_slot_4.style.backgroundImage = "url('Voidship/IA-02.png')";
				store_item_slot_4_label.textContent = 'IA-02';
					}
			if (store_category_2 == 2){
				store_item_slot_4.style.backgroundImage = "url('Resources/Quartz.png')";
				store_item_slot_4_label.textContent = 'Quartz';
					}	
			if (store_category_2 == 3){
				store_item_slot_4.style.backgroundImage = "url('Technology/Legionnaire MKI.png')";
				store_item_slot_4_label.textContent = 'Legionnaire MKI';
					}
				}
		if (store_item_slot_1.classList.contains('non_transparent')){
			setTimeout(Store_Slot_1_Entrance, 0);
			setTimeout(Store_Slot_2_Entrance, 100);
			setTimeout(Store_Slot_3_Entrance, 100);
			setTimeout(Store_Slot_4_Entrance, 200);
			
			setTimeout(Store_Slot_1_Entrance, 300);
			setTimeout(Store_Slot_2_Entrance, 400);
			setTimeout(Store_Slot_3_Entrance, 400);
			setTimeout(Store_Slot_4_Entrance, 500);
			setTimeout(Change_Slot_1, 300)
			setTimeout(Change_Slot_2, 400)
			setTimeout(Change_Slot_3, 400)
			setTimeout(Change_Slot_4, 400)
			} else {
				setTimeout(Change_Slot_1, 0)
				setTimeout(Change_Slot_2, 100)
				setTimeout(Change_Slot_3, 100)
				setTimeout(Change_Slot_4, 200)
				setTimeout(Store_Slot_1_Entrance, 0);
				setTimeout(Store_Slot_2_Entrance, 100);
				setTimeout(Store_Slot_3_Entrance, 100);
				setTimeout(Store_Slot_4_Entrance, 200);
				}
	}
function store_rendering_4(){
		function Change_Slot_1(){
			if (store_category_2 == 1){	
				store_item_slot_1.style.backgroundImage = "url('Voidship/S-01.png')";
				store_item_slot_1_label.textContent = 'S-01';
					}
			if (store_category_2 == 2){
				store_item_slot_1.style.backgroundImage = "url('Resources/Water.png')";
				store_item_slot_1_label.textContent = 'Water(Alk)';
					}	
			if (store_category_2 == 3){
				store_item_slot_1.style.backgroundImage = "url('Technology/Power Cell.png')";
				store_item_slot_1_label.textContent = 'Power Cell';
					}	
				}
		function Change_Slot_2(){
			if (store_category_2 == 1){	
				store_item_slot_2.style.backgroundImage = "url('Voidship/CA-01.png')";
				store_item_slot_2_label.textContent = 'CA-01';
					}
			if (store_category_2 == 2){
				store_item_slot_2.style.backgroundImage = "url('Resources/Pyratite.png')";
				store_item_slot_2_label.textContent = 'Pyratite';
					}
			if (store_category_2 == 3){
				store_item_slot_2.style.backgroundImage = "url('Technology/Solar Panel.png')";
				store_item_slot_2_label.textContent = 'Solar Panel';
					}
				}
		function Change_Slot_3(){
			if (store_category_2 == 1){	
				store_item_slot_3.style.backgroundImage = "url('Voidship/CB-01.png')";
				store_item_slot_3_label.textContent = 'CB-01';
					}
			if (store_category_2 == 2){
				store_item_slot_3.style.backgroundImage = "url('Resources/Carbon Plate.png')";
				store_item_slot_3_label.textContent = 'Carbon Plate';
					}
			if (store_category_2 == 3){
				store_item_slot_3.style.backgroundImage = "url('Technology/Lunar Water.png')";
				store_item_slot_3_label.textContent = 'Lunar Water';
					}
				}
		function Change_Slot_4(){
			if (store_category_2 == 1){	
				store_item_slot_4.style.backgroundImage = "url('Voidship/FI-01.png')";
				store_item_slot_4_label.textContent = 'FI-01';
					}
			if (store_category_2 == 2){
				store_item_slot_4.style.backgroundImage = "url('Resources/Veritium Crystal.png')";
				store_item_slot_4_label.textContent = 'Veritium Crystal';
					}
			if (store_category_2 == 3){
				store_item_slot_4.style.backgroundImage = "url('Technology/Neutron Core.png')";
				store_item_slot_4_label.textContent = 'Neutron Core';
					}
				}
		if (store_item_slot_1.classList.contains('non_transparent')){
			setTimeout(Store_Slot_1_Entrance, 0);
			setTimeout(Store_Slot_2_Entrance, 100);
			setTimeout(Store_Slot_3_Entrance, 100);
			setTimeout(Store_Slot_4_Entrance, 200);
			
			setTimeout(Store_Slot_1_Entrance, 300);
			setTimeout(Store_Slot_2_Entrance, 400);
			setTimeout(Store_Slot_3_Entrance, 400);
			setTimeout(Store_Slot_4_Entrance, 500);
			setTimeout(Change_Slot_1, 300)
			setTimeout(Change_Slot_2, 400)
			setTimeout(Change_Slot_3, 400)
			setTimeout(Change_Slot_4, 400)
			} else {
				setTimeout(Change_Slot_1, 0)
				setTimeout(Change_Slot_2, 100)
				setTimeout(Change_Slot_3, 100)
				setTimeout(Change_Slot_4, 100)
				setTimeout(Store_Slot_1_Entrance, 0);
				setTimeout(Store_Slot_2_Entrance, 100);
				setTimeout(Store_Slot_3_Entrance, 100);
				setTimeout(Store_Slot_4_Entrance, 200);
				}
	}
function store_rendering_5(){
		function Change_Slot_1(){
			if (store_category_2 == 1){	
				store_item_slot_1.style.backgroundImage = "url('Voidship/C-01.png')";
				store_item_slot_1_label.textContent = 'C-01';
					}
			if (store_category_2 == 2){
				store_item_slot_1.style.backgroundImage = "url('Resources/Neodymium Magnet.png')";
				store_item_slot_1_label.textContent = 'Nd-Magnet';
					}
			if (store_category_2 == 3){
				store_item_slot_1.style.backgroundImage = "url('Technology/Neutron Battery.png')";
				store_item_slot_1_label.textContent = 'Neutron Battery';
					}
				}
		function Change_Slot_2(){
			if (store_category_2 == 1){
				store_item_slot_2.style.backgroundImage = "url('Voidship/C-02.png')";
				store_item_slot_2_label.textContent = 'C-02';
					}
			if (store_category_2 == 2){
				store_item_slot_2.style.backgroundImage = "url('Resources/Mercury.png')";
				store_item_slot_2_label.textContent = 'Mercury';
					}
			if (store_category_2 == 3){
				store_item_slot_2.style.backgroundImage = "url('Technology/J-01.png')";
				store_item_slot_2_label.textContent = 'J-01';
					}
				}
		function Change_Slot_3(){
			if (store_category_2 == 1){
				store_item_slot_3.style.backgroundImage = "url('Voidship/C-03.png')";
				store_item_slot_3_label.textContent = 'C-03';
					}
			if (store_category_2 == 2){
				store_item_slot_3.style.backgroundImage = "url('Resources/Iron Bar.png')";
				store_item_slot_3_label.textContent = 'Iron Bar';
					}
			if (store_category_2 == 3){
				store_item_slot_3.style.backgroundImage = "url('Technology/Durasteel.png')";
				store_item_slot_3_label.textContent = 'Durasteel';
					}
				}
		function Change_Slot_4(){
			if (store_category_2 == 1){
				store_item_slot_4.style.backgroundImage = "url('Voidship/C-04.png')";
				store_item_slot_4_label.textContent = 'C-04';
					}
			if (store_category_2 == 2){
				store_item_slot_4.style.backgroundImage = "url('Resources/Graphite.png')";
				store_item_slot_4_label.textContent = 'Graphite';
					}
			if (store_category_2 == 3){
				store_item_slot_4.style.backgroundImage = "url('Technology/Hyperion.png')";
				store_item_slot_4_label.textContent = 'R-01 Hyperion';
					}
				}
		if (store_item_slot_1.classList.contains('non_transparent')){
			setTimeout(Store_Slot_1_Entrance, 0);
			setTimeout(Store_Slot_2_Entrance, 100);
			setTimeout(Store_Slot_3_Entrance, 100);
			setTimeout(Store_Slot_4_Entrance, 200);
			
			setTimeout(Store_Slot_1_Entrance, 300);
			setTimeout(Store_Slot_2_Entrance, 400);
			setTimeout(Store_Slot_3_Entrance, 400);
			setTimeout(Store_Slot_4_Entrance, 500);
			setTimeout(Change_Slot_1, 300)
			setTimeout(Change_Slot_2, 400)
			setTimeout(Change_Slot_3, 400)
			setTimeout(Change_Slot_4, 500)
			} else {
				setTimeout(Change_Slot_1, 0)
				setTimeout(Change_Slot_2, 100)
				setTimeout(Change_Slot_3, 100)
				setTimeout(Change_Slot_4, 200)
				setTimeout(Store_Slot_1_Entrance, 0);
				setTimeout(Store_Slot_2_Entrance, 100);
				setTimeout(Store_Slot_3_Entrance, 100);
				setTimeout(Store_Slot_4_Entrance, 200);
				}
	}
store_voidship.addEventListener('click', function(){
	store_category_2 = 1;
	if (store_category_1 == 1) store_rendering_1();
	if (store_category_1 == 2) store_rendering_2();
	if (store_category_1 == 3) store_rendering_3();
	if (store_category_1 == 4) store_rendering_4();
	if (store_category_1 == 5) store_rendering_5();
	})
store_resource.addEventListener('click', function(){
	store_category_2 = 2;
	if (store_category_1 == 1) store_rendering_1();
	if (store_category_1 == 2) store_rendering_2();
	if (store_category_1 == 3) store_rendering_3();
	if (store_category_1 == 4) store_rendering_4();
	if (store_category_1 == 5) store_rendering_5();
	})
store_technology.addEventListener('click', function(){
	store_category_2 = 3;
	if (store_category_1 == 1) store_rendering_1();
	if (store_category_1 == 2) store_rendering_2();
	if (store_category_1 == 3) store_rendering_3();
	if (store_category_1 == 4) store_rendering_4();
	if (store_category_1 == 5) store_rendering_5();
	})
store_seller_1.addEventListener('click', function(){
	store_category_1 = 1;
	store_rendering_1();
	})
store_seller_2.addEventListener('click', function(){
	store_category_1 = 2;
	store_rendering_2();
	})
store_seller_3.addEventListener('click', function(){
	store_category_1 = 3;
	store_rendering_3();
	})
	
store_seller_4.addEventListener('click', function(){
	store_category_1 = 4;
	store_rendering_4();
	})

store_seller_5.addEventListener('click', function(){
	store_category_1 = 5;
	store_rendering_5();
	})

document.addEventListener('wheel', function(event){	
	if (initialization == 0) {
		if (event.deltaY < 5){
			if (page == 1){
				setTimeout(Menu_Button_Entrance, 142);
				setTimeout(Main_Title_Entrance, 284);
				setTimeout(Main_Tagline_Entrance, 426);
				button.style.zIndex = 2;
				}
			if (page == 5){
				setTimeout(Home_Panel_Entrance, 1000);
				setTimeout(Home_Label_Entrance, 852);	
				setTimeout(Home_Center_Panel_Entrance, 710);
				setTimeout(Home_Bottom_Panel_Entrance, 568);				
				setTimeout(Home_Side_Panel_1_Entrance, 426);	
				setTimeout(Home_Side_Panel_2_Entrance, 284);
				setTimeout(Home_Side_Panel_3_Entrance, 142);
				}
			if (page == 10){
				setTimeout(Home_Panel_Entrance, 142);
				setTimeout(Home_Label_Entrance, 284);	
				setTimeout(Home_Center_Panel_Entrance, 426);
				setTimeout(Home_Bottom_Panel_Entrance, 568);				
				setTimeout(Home_Side_Panel_1_Entrance, 710);	
				setTimeout(Home_Side_Panel_2_Entrance, 852);
				setTimeout(Home_Side_Panel_3_Entrance, 1000);	
				}
			if (page == 15){
				setTimeout(Store_Panel_Entrance, 1000);
				setTimeout(Store_Label_Entrance, 852);
				setTimeout(Store_Seller_1_Entrance, 710);
				setTimeout(Store_Seller_2_Entrance, 568);
				setTimeout(Store_Seller_3_Entrance, 426);
				setTimeout(Store_Seller_4_Entrance, 284);
				setTimeout(Store_Seller_5_Entrance, 142);
				setTimeout(Store_Voidship_Entrance, 700);
				setTimeout(Store_Resource_Entrance, 400);
				setTimeout(Store_Technology_Entrance, 100);	
				if (store_item_slot_1.classList.contains('non_transparent')){
					setTimeout(Store_Slot_1_Entrance, 0);
					}			
				if (store_item_slot_2.classList.contains('non_transparent')){
					setTimeout(Store_Slot_2_Entrance, 250);
					}
				if (store_item_slot_3.classList.contains('non_transparent')){
					setTimeout(Store_Slot_3_Entrance, 250);
					}
				if (store_item_slot_4.classList.contains('non_transparent')){
					setTimeout(Store_Slot_4_Entrance, 500);
					}
				}
			if (page == 20){
				setTimeout(Store_Panel_Entrance, 142);
				setTimeout(Store_Label_Entrance, 284);
				setTimeout(Store_Seller_1_Entrance, 426);	
				setTimeout(Store_Seller_2_Entrance, 568);
				setTimeout(Store_Seller_3_Entrance, 710);
				setTimeout(Store_Seller_4_Entrance, 852);
				setTimeout(Store_Seller_5_Entrance, 1000);
				setTimeout(Store_Voidship_Entrance, 300);
				setTimeout(Store_Resource_Entrance, 600);
				setTimeout(Store_Technology_Entrance, 900);	
				}
			if (page > 0) page -= 1;
				
			}
		if (event.deltaY > 5){	
			if (page == 1){
				setTimeout(Menu_Button_Entrance, 142);
				setTimeout(Main_Title_Entrance, 284);
				setTimeout(Main_Tagline_Entrance, 426);
				button.style.zIndex = 0;
				}
			if (page == 5){
				setTimeout(Home_Panel_Entrance, 142);
				setTimeout(Home_Label_Entrance, 284);	
				setTimeout(Home_Center_Panel_Entrance, 426);
				setTimeout(Home_Bottom_Panel_Entrance, 568);				
				setTimeout(Home_Side_Panel_1_Entrance, 710);	
				setTimeout(Home_Side_Panel_2_Entrance, 852);
				setTimeout(Home_Side_Panel_3_Entrance, 1000);
				}
			if (page == 10){
				setTimeout(Home_Panel_Entrance, 1000);
				setTimeout(Home_Label_Entrance, 852);	
				setTimeout(Home_Center_Panel_Entrance, 710);
				setTimeout(Home_Bottom_Panel_Entrance, 568);				
				setTimeout(Home_Side_Panel_1_Entrance, 426);	
				setTimeout(Home_Side_Panel_2_Entrance, 284);
				setTimeout(Home_Side_Panel_3_Entrance, 142);			
				}
			if (page == 15){
				setTimeout(Store_Panel_Entrance, 142);
				setTimeout(Store_Label_Entrance, 284);
				setTimeout(Store_Seller_1_Entrance, 426);	
				setTimeout(Store_Seller_2_Entrance, 568);
				setTimeout(Store_Seller_3_Entrance, 710);
				setTimeout(Store_Seller_4_Entrance, 852);
				setTimeout(Store_Seller_5_Entrance, 1000);	
				setTimeout(Store_Voidship_Entrance, 300);
				setTimeout(Store_Resource_Entrance, 600);		
				setTimeout(Store_Technology_Entrance, 900);	
				}
			if (page == 20){
				setTimeout(Store_Panel_Entrance, 1000);
				setTimeout(Store_Label_Entrance, 852);
				setTimeout(Store_Seller_1_Entrance, 710);
				setTimeout(Store_Seller_2_Entrance, 568);
				setTimeout(Store_Seller_3_Entrance, 426);
				setTimeout(Store_Seller_4_Entrance, 284);
				setTimeout(Store_Seller_5_Entrance, 142);
				setTimeout(Store_Voidship_Entrance, 700);
				setTimeout(Store_Resource_Entrance, 400);
				setTimeout(Store_Technology_Entrance, 100);	
				if (store_item_slot_1.classList.contains('non_transparent')){
					setTimeout(Store_Slot_1_Entrance, 0);
					}
				if (store_item_slot_2.classList.contains('non_transparent')){
					setTimeout(Store_Slot_2_Entrance, 250);
					}
				if (store_item_slot_3.classList.contains('non_transparent')){
					setTimeout(Store_Slot_3_Entrance, 250);
					}
				if (store_item_slot_4.classList.contains('non_transparent')){
					setTimeout(Store_Slot_4_Entrance, 500);
					}
				}
			page += 1;	
					
		}
	}
})


