/*
  Warnings:

  - You are about to drop the `userInteractionsOnComments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userInteractionsOnPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userInteractionsOnComments" DROP CONSTRAINT "userInteractionsOnComments_commentId_fkey";

-- DropForeignKey
ALTER TABLE "userInteractionsOnComments" DROP CONSTRAINT "userInteractionsOnComments_userId_fkey";

-- DropForeignKey
ALTER TABLE "userInteractionsOnPosts" DROP CONSTRAINT "userInteractionsOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "userInteractionsOnPosts" DROP CONSTRAINT "userInteractionsOnPosts_userId_fkey";

-- DropTable
DROP TABLE "userInteractionsOnComments";

-- DropTable
DROP TABLE "userInteractionsOnPosts";

-- CreateTable
CREATE TABLE "usersInteractionOnPosts" (
    "like" BOOLEAN NOT NULL DEFAULT true,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usersInteractionOnPosts_pkey" PRIMARY KEY ("postId","userId")
);

-- CreateTable
CREATE TABLE "usersInteractionOnComments" (
    "like" BOOLEAN NOT NULL DEFAULT true,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usersInteractionOnComments_pkey" PRIMARY KEY ("commentId","userId")
);

-- CreateIndex
CREATE INDEX "usersInteractionOnPosts_postId_idx" ON "usersInteractionOnPosts"("postId");

-- CreateIndex
CREATE INDEX "usersInteractionOnPosts_userId_idx" ON "usersInteractionOnPosts"("userId");

-- CreateIndex
CREATE INDEX "usersInteractionOnComments_commentId_idx" ON "usersInteractionOnComments"("commentId");

-- CreateIndex
CREATE INDEX "usersInteractionOnComments_userId_idx" ON "usersInteractionOnComments"("userId");

-- AddForeignKey
ALTER TABLE "usersInteractionOnPosts" ADD CONSTRAINT "usersInteractionOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersInteractionOnPosts" ADD CONSTRAINT "usersInteractionOnPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersInteractionOnComments" ADD CONSTRAINT "usersInteractionOnComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersInteractionOnComments" ADD CONSTRAINT "usersInteractionOnComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
