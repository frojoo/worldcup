import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState(animalData);

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });
    //랜덤하게 섞기, 기본 가나다 순은 sort(); 내가 정한 순서로는 return 1; 역순은 return -1;

    setShuffleAnimal(shuffleAnimalData);
  }, []);

  useEffect(() => {
    console.log(shuffleAnimal[0]);
  }, [shuffleAnimal]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal && (
        <>
          <AnimalCard animal={shuffleAnimal[0]} />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard animal={shuffleAnimal[1]} />
        </>
      )}
    </div>
  );
};

export default Worldcup;
