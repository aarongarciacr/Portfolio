import HOBBIES from "../../assets/hobbies/hobbies.jpg";
import MUSIC from "../../assets/hobbies/music_production.jpg";
import FRIENDS from "../../assets/hobbies/friends.jpg";
import TRAVEL from "../../assets/hobbies/traveling.jpg";
import WORKOUT from "../../assets/hobbies/workout.jpg";
import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Reveal } from "../Reveal";

const imgs = [HOBBIES, MUSIC, WORKOUT, TRAVEL, FRIENDS];
type Hobbies = {
  name: string;
  description: string;
};

const hobbies: Hobbies[] = [
  {
    name: "My Hobbies",
    description:
      "We understand that our jobs play a significant role in our lives, but it is equally important to set aside time for the activities we genuinely enjoy.",
  },
  {
    name: "Music Production",
    description:
      "I have been involved in music production since the age of 12, and I am pleased to say that I still enjoy dedicating time to creating music, whether for myself or others, whenever the opportunity arises.",
  },
  {
    name: "Work Out",
    description:
      "I prioritize maintaining a healthy lifestyle, especially after a recent accident that required surgery on both of my knees. This experience has motivated me to stay active, and I make it a point to regularly visit the gym to support my recovery and overall well-being.",
  },
  {
    name: "Travel",
    description:
      "Who doesn't love to travel? Exploring new places and experiencing different cultures is something I truly enjoy it speaks for itself!",
  },
  {
    name: "Quality Time",
    description:
      "I value spending quality time with my friends, as it allows me to relax, share great conversations, and create lasting memories. Socializing is an important part of my life, and I always make an effort to stay connected with the people who matter most to me.",
  },
];

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 7;

export const SPRING_OPTION = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Hobbies2 = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0); // Motion value to track the drag position

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-800 py-8">
      <motion.div
        className="flex h-full cursor-grab items-center active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTION}
        onDragEnd={onDragEnd}
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImageIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <div
            className="relative h-[90svh] w-full shrink-0 rounded-xl object-cover"
            key={idx}
          >
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              className="h-[90svh] w-full shrink-0 rounded-xl bg-slate-700 object-cover"
            />
            <motion.div
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              className="absolute inset-0 m-auto flex flex-col items-center justify-center rounded-xl bg-black/50 p-4 text-white"
            >
              <Reveal>
                <p className="mb-4 text-6xl font-bold">{hobbies[idx].name}</p>
              </Reveal>
              <Reveal>
                <p className="max-w-5xl text-center text-3xl">
                  {hobbies[idx].description}
                </p>
              </Reveal>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImageIndex,
}: {
  imgIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 pb-1">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Hobbies2;
