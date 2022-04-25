import Title from "./Title";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="mx-auto  projects mb-32">
      <Title
        title={"choose an apartment"}
        subtitle={"apartment"}
        items={"center"}
      />
      <div className="grid grid-cols-3 mt-8 gap-20 p-3">
        <div className='project_item_1'>
          <div className=" mb-6 relative ">
            <Image
              src={"/img/project/img_1.jpg"}
              alt="project"
              layout="responsive"
              width={384}
              height={256}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Senior Apartments</h2>
          <button className="uppercase text-sm tracking-widest font-medium">
            explore
          </button>
        </div>
        <div className="project_item_2">
          <div className=" mb-6 relative">
            <Image
              src={"/img/project/img_2.jpg"}
              alt="project"
              layout="responsive"
              width={384}
              height={256}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Senior Apartments</h2>
          <button className="uppercase text-sm tracking-widest font-medium">
            explore
          </button>
        </div>
        <div className="project_item_3">
          <div className=" mb-6 relative">
            <Image
              src={"/img/project/img_3.jpg"}
              alt="project"
              layout="responsive"
              width={384}
              height={256}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Senior Apartments</h2>
          <button className="uppercase text-sm tracking-widest font-medium">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
