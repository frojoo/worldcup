import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });
    //랜덤하게 섞기, 기본 가나다 순은 sort(); 내가 정한 순서로는 return 1; 역순은 return -1;

    console.log(shuffleAnimalData);
  }, []);

  return <div>Worldcup</div>;
};

export default Worldcup;
