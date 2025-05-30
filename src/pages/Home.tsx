import { Logo } from "@assets/index";
import { BucketCard } from "@components/BucketCard";
import { Link } from "react-router-dom";


export default function Home(){
    return (
        // Dev Note: Change Containers xd
        <>
        <div className="flex flex-col h-screen ml-auto overflow-y-auto mr-auto w-[80rem] max-w-[90%] space-y-30">
            <div className="flex">
                <div className="flex max-w-[42rem] items-center justify-between ">
                    <div>
                        <h1 className="font-sarif-sans sarif-sans font-bold text-text-heading text-[3rem] tracking-wider">
                            Organize easy.
                        </h1>
                        <p className="flex pt-4 space-x-6 text-[2rem]">
                            <span className="w-6 text-right">1.</span>
                            <span className="ml-2">Make a bucket</span>
                        </p>
                        <p className="flex space-x-6 text-[2rem]">
                            <span className="w-6 text-right">2.</span>
                            <span className="ml-2">Invite your friends</span>
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Logo className="w-32 h-32 " />
                    </div>
                </div>


                <div className="py-6 px-30 flex items-center gap-3 flex-col sm:flex-row">
                    <Link to="/register"
                        className=" bg-bucket-blue text-white text-[25px] rounded-lg p-3 hover:bg-bucket-blue/60 transition ease-in shadow-lg">
                        Get started with your bucket
                
                    </Link>
                    <Link to="/register"
                        className=" bg-bucket-pink text-white text-[25px] rounded-lg p-3 hover:bg-bucket-pink/60 transition ease-in shadow-lg">
                        Download the app
                
                    </Link>
                </div>
                
            </div>

            <div className="py-6 mt-4 flex items-center gap-6 flex-col sm:flex-row">
                <BucketCard name="My buckets got Lorem" 
                        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates 
                            praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                            Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doloremque blanditiis 
                            rerum error beatae unde!`}>
                </BucketCard>

                <BucketCard name="Hey, so does mine!" description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates 
                            praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                            Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doloremque blanditiis 
                            rerum error beatae unde!`}>

                </BucketCard>


                <BucketCard name=":("  description={`ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates 
                            praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                            Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doque blanditiis 
                            rerum error beatae unde!`}>

                </BucketCard>


            </div>



        </div>
        </>
    )
}