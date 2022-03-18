import { GetServerSideProps } from "next";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

// npx prisma generate
// 왜 테이블 생성, 수정, 삭제 한게 바로 적용이 안됨?
// prisma.test ... 일정 시간 동안 남아있는듯?
// vs code 종료했다가 다시 키면 됨
// db 재연결 해야하나?

export default function Home() {
  return (
    <div>
      <img src="/vercel.svg" />
      <h4 className="text-3xl font-bold underline">Hello Home!</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const encryPassword = await bcrypt.hash("1234", 10);
  console.log(encryPassword);
  console.log(await bcrypt.compare("1234", encryPassword));

  const prisma = new PrismaClient();

  const allUsers = await prisma.member.findMany();

  return { props: {} };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const allUsers = await prisma.member
//     .findMany
//     //   {
//     //   include: {
//     //     memberId: true,
//     //     email: true,
//     //     createDate: true,
//     //   },
//     // }
//     ();
//   console.log(allUsers);
//   return { props: {} };
//   // return { props: { allUsers } };
// };
