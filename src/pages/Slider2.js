import React, { useState } from "react";

function Slider2() {
  const [move, setMove] = useState(0);
  return (
    <div className="w-[100%] overflow-hidden h-[100vh] flex bg-slate-200">
      <div
        style={{ transform: `translateX(-${move}%)` }}
        className="w-[300%]  duration-1000 h-[100vh] flex"
      >
        <img
          className="w-[50%] h-[100vh] object-cover"
          src="https://cdn.pixabay.com/photo/2022/09/10/19/21/flower-7445617_640.jpg"
        ></img>
        <img
          className="w-[50%] h-[100vh] object-cover "
          src="https://us.123rf.com/450wm/allessuper/allessuper1908/allessuper190800066/130814291-sunbeams-shining-through-natural-forest-of-beech-trees-moss-is-covering-the-ground.jpg?ver=6"
        ></img>

        <img
          className="w-[50%] h-[100vh] object-cover"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        ></img>
        <img
          className="w-[50%] h-[100vh] object-cover"
          src="https://st3.depositphotos.com/29384342/33835/i/450/depositphotos_338351172-stock-photo-beautiful-view-nature-scene.jpg"
        ></img>

        <img
          className="w-[50%] h-[100vh] object-cover"
          src="https://st2.depositphotos.com/3446097/5819/i/450/depositphotos_58195973-stock-photo-loch-lomond-jetty-and-mountains.jpg"
        ></img>
        <img
          className="w-[50%] h-[100vh] object-cover"
          src="https://t3.ftcdn.net/jpg/02/69/17/14/360_F_269171416_QK2JL5X9kc4d4zazKEl82iZm7u6VEyvU.jpg"
        ></img>
      </div>
      <i
        onClick={() => move<200 ? setMove(move + 50):null }
        class="fa fa-long-arrow-right absolute right-[30px] text-[white] top-[50%] text-[30px]  "
        aria-hidden="true"
      ></i>
      <i
        onClick={() =>setMove(move - 50)}
        class="fa fa-long-arrow-left text-[30px] text-[white] absolute left-[20px] top-[50%] "
        aria-hidden="true"
      ></i>
    </div>
  );
}

export default Slider2;
