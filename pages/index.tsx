import { GetServerSideProps } from "next";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <div>
      <h4 className="text-3xl font-bold underline">Hello Home!</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allUsers = await prisma.test
    .findMany
    //   {
    //   include: {
    //     memberId: true,
    //     email: true,
    //     createDate: true,
    //   },
    // }
    ();
  console.log(allUsers);
  return { props: {} };
  // return { props: { allUsers } };
};
