import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import GenderData from "@/components/charts/gender";
import TotalCount from "@/components/charts/total-count";
import Interactions from "@/components/charts/interaction";
import Impact from "@/components/charts/impact";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
       
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Telangana Sampark Dashboard</Balancer>
        </motion.h1>
        
        
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl  grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <TotalCount />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>

 
    </Layout>
  );
}


const features = [
  {
    title: "42+ lakh Voters",
     demo: <TotalCount />,
    large: true,
  },
  {
    title: "Gender ratio",
    
    demo: <GenderData />,
  },
  {
    title: "40 Interactions this month",
    demo: <Interactions />,
  },
  {
    title: "Impact",
    demo: <Impact />,
  },
  {
    title: "Best Cadre of week",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">Rajiv Reddy</span>
        <span className="font-mono font-semibold">Nikhil Mehra</span>
        <span className="font-mono font-semibold">Sahil Popli</span>
        <span className="font-mono font-semibold">Ram Mudiraaj</span>
        <span className="font-mono font-semibold">Hussain Khan</span>
        <span className="font-mono font-semibold">Shivam Yadav</span>
      </div>
    ),
  },
];
