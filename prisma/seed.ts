import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.test
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
