import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  //onClick으로 인자를 줄때 2차 함수: e에서 선택한 동물을 받아온 값인 v를 새로운 함수에 줌
  const onClickChoice = (V) => () => {
    setChoice(choice + 2);
    // [기존에 선택된 요소들, 새로 추가한 동물(V)] ...은 스프레드 문법, 배열을 하나씩 나열 하기 위해
    setNextRound([...nextRound, V]);
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });
    //랜덤하게 섞기, 기본 가나다 순은 sort(); 내가 정한 순서로는 return 1; 역순은 return -1;

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(nextRound), [nextRound]);
  useEffect(() => {
    if (choice === end) {
      //넥스트라운드에 담긴 동물들을 셔플 애니멀로 옮긴다.
      setShuffleAnimal(nextRound);
      //넥스트라운드 초기화([])
      setNextRound([]);
      //16강 -> 8강 -> 4강 -> 결승
      setEnd(end / 2);
      //초이스 0
      setChoice(0);
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
              <div>VS</div>
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
