-- CreateTable
CREATE TABLE "Test" (
    "memberId" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "nickname" TEXT,
    "mbti" TEXT,
    "birthday" TEXT,
    "gender" TEXT,
    "stateId" INTEGER,
    "emailCertKey" TEXT,
    "emailCertDate" TIMESTAMP(3) NOT NULL,
    "withdrawalApplyDate" TIMESTAMP(3) NOT NULL,
    "createDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("memberId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_email_key" ON "Test"("email");
