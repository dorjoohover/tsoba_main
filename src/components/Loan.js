import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";
const Loans = () => {
  return (
    <div className="loans relative">
      <div className="relative z-30">
        <Title
          title={"Мэдээллийн төрлүүд"}
          subtitle={"зээл"}
          items={"center"}
          color={"white"}
        />
      </div>
      <span className="absolute inset-0 bg_color"></span>
      <div className="flex items-center justify-center relative z-30 mt-12">
        <Link href={"/loans/internal"}>
          <div className="mr-24 loan_grid cursor-pointer">
            <div className=" relative">
              <Image
                src={"/img/smile01.jpg"}
                alt="loan"
                layout="responsive"
                width={500}
                height={320}
              />
            </div>
            <div className="px-6 py-8 bg-white">
              <h5 className="text_primary_color uppercase mb-2">
                <b> зээл</b>
              </h5>
              <h2 className="capitalize font-bold text-3xl tracking-wider mb-6 font-medium">
                гадаадад оршин суугаа харилцагч
              </h2>
              <p>
                Дэлгэрэнгүй <ArrowRightAlt />
              </p>
            </div>
          </div>
        </Link>
        <Link href="/loans/external">
          <div className="loan_grid cursor-pointer">
            <div className=" relative">
              <Image
                src={"/img/smile01.jpg"}
                alt="loan"
                layout="responsive"
                width={500}
                height={320}
              />
            </div>
            <div className="px-6 py-8 bg-white">
              <h5 className="text_primary_color uppercase mb-2">
                <b> зээл</b>
              </h5>
              <h2 className="capitalize font-bold text-3xl tracking-wider mb-6 font-medium">
                дотоодод оршин суугаа харилцагч
              </h2>
              <p>Дэлгэрэнгүй <ArrowRightAlt /></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Loans;
