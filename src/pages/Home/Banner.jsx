import team1 from '../../assets/team/team1.jpeg'
import team2 from '../../assets/team/team2.jpg'
import { easeInOut, motion } from "framer-motion";
const Banner = () => {
    return (
        <div className="hero  min-h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="md:flex-1">
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,

                        }}
                        src={team2}
                        className="max-w-sm w-full rounded-t-[40px] rounded-br-[40px] border-8 border-l-blue-400  roundel shadow-2xl" />
                    <motion.img
                        animate={{ x: [250, 200, 250] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,

                        }}
                        src={team1}
                        className="max-w-sm w-full rounded-lg shadow-2xl" />
                </div>
                <div className='md:flex-1'>
                    <motion.div
                        animate={{ y: [0, -40, 0], color: ['#fc03db', '#039dfc', '#9d03fc', '#03fcdb'] }}
                        transition={{
                            duration: 5,
                            delay: 1,
                            repeat: Infinity,
                            ease: easeInOut
                        }}
                    >
                        <h1

                            className="text-3xl font-bold">The Easiest Way
                            to <br /> Get Your New Job</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </motion.div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;