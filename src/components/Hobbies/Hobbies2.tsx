import HOBBIES from "../../assets/hobbies/hobbies.jpg";
import MUSIC from "../../assets/hobbies/music_production.jpg";
import FRIENDS from "../../assets/hobbies/friends.jpg";
import TRAVEL from "../../assets/hobbies/traveling.jpg";
import WORKOUT from "../../assets/hobbies/workout.jpg";
import { motion } from "framer-motion";

export const imgs = [HOBBIES, MUSIC, WORKOUT, TRAVEL, FRIENDS];

const Hobbies2 = () => {
  return (
    <div className="relative min-h-[90svh] overflow-hidden bg-slate-800 py-8">
      <motion.div
        className="flex h-full cursor-grab items-center active:cursor-grabbing"
        drag="x"
      >
        <Images />
      </motion.div>
    </div>
  );
};

const Images = () => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[90svh] w-full shrink-0 rounded-xl bg-slate-700 object-cover"
          />
        );
      })}
    </>
  );
};

export default Hobbies2;
