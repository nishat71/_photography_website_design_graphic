let config = {
    type:'loop',
    arrows:false,
    pagination:true,
    perPage: 3,
    focus:"center",
    perMove:1,
    easing:'ease',
    breakpoints:{
        991:{
            perPage: 1,
        },
        420:{
            perPage: 1,
        }
    }
};
new Splide( '._photography_blessed_work_slider',config ).mount();

let config1 = {
    type:'loop',
    arrows:false,
    pagination:false,
    perPage: 3,
    perMove:1,
    gap: 20,
    easing:'ease',
    breakpoints:{
        991:{
            perPage: 2,
        },
        767:{
            perPage: 1,
        },
        420:{
            perPage: 1,
        }
    }
   
};
new Splide( '._photography_features_2_slider',config1 ).mount();

let config2 = {
    type:'loop',
    arrows:true,
    pagination:false,
    perPage: 3,
    perMove:1,
    focus:"center",
    gap: 50,
    easing:'ease',
    breakpoints:{
        991:{
            perPage:2,
            gap: 20,
        },
        767:{
            perPage:1,
            gap: 0,
        },
        420:{
            gap:20,
            perPage:1,
        },
    }
};
new Splide( '._photography_blogs_all_photo_slider',config2 ).mount();

