import {Settings,Animation} from './Controller.js';
export function initialize_key_events(){
    
    document.addEventListener("keydown", function(event){
        if(event.key==="w"){
            event.preventDefault();
              Settings(Animation["Jump"]);
              let image=document.querySelector(".character_image");
              image.style.webkitAnimationPlayState = "running";
        }

    });

}