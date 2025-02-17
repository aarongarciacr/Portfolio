import { motion } from "framer-motion";
import { SPRING_OPTION } from "./Hobbies";
import HOBBIES from "../../assets/hobbies/hobbies.jpg";
import MUSIC from "../../assets/hobbies/music_production.jpg";
import FRIENDS from "../../assets/hobbies/friends.jpg";
import TRAVEL from "../../assets/hobbies/traveling.jpg";
import WORKOUT from "../../assets/hobbies/workout.jpg";

export const imgs = [HOBBIES, MUSIC, WORKOUT, TRAVEL, FRIENDS];

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

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <>
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
              transition={SPRING_OPTION}
              className="aspect-video h-[90svh] w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
            />
            {hobbies.map((hobby, hobbyIdx) => {
              if (hobbyIdx === imgIndex && idx === imgIndex) {
                return (
                  <div
                    key={hobby.name}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-white"
                  >
                    <p className="mb-4 text-3xl font-bold">{hobby.name}</p>
                    <p className="max-w-2xl text-center text-xl">
                      {hobby.description}
                    </p>
                  </div>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
};

export default Images;
