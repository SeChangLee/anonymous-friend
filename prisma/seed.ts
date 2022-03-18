import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 샘플 데이터 삽입
async function main() {
  const allUsers = await prisma.member
    .findMany
    //   {
    //   include: {
    //     memberId: true;
    //     email: true;
    //     createDate: true;
    //   },
    // }
    ();
  // console.log(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
