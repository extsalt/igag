/*
  Warnings:

  - You are about to drop the `likesOnComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `likesOnPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "likesOnComment" DROP CONSTRAINT "likesOnComment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "likesOnComment" DROP CONSTRAINT "likesOnComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "likesOnPost" DROP CONSTRAINT "likesOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "likesOnPost" DROP CONSTRAINT "likesOnPost_userId_fkey";

-- DropTable
DROP TABLE "likesOnComment";

-- DropTable
DROP TABLE "likesOnPost";

-- CreateTable
CREATE TABLE "userInteractionsOnPosts" (
    "like" BOOLEAN NOT NULL DEFAULT true,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userInteractionsOnPosts_pkey" PRIMARY KEY ("postId","userId")
);

-- CreateTable
CREATE TABLE "userInteractionsOnComments" (
    "like" BOOLEAN NOT NULL DEFAULT true,
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userInteractionsOnComments_pkey" PRIMARY KEY ("commentId","userId")
);

-- CreateIndex
CREATE INDEX "userInteractionsOnPosts_postId_idx" ON "userInteractionsOnPosts"("postId");

-- CreateIndex
CREATE INDEX "userInteractionsOnPosts_userId_idx" ON "userInteractionsOnPosts"("userId");

-- CreateIndex
CREATE INDEX "userInteractionsOnComments_commentId_idx" ON "userInteractionsOnComments"("commentId");

-- CreateIndex
CREATE INDEX "userInteractionsOnComments_userId_idx" ON "userInteractionsOnComments"("userId");

-- AddForeignKey
ALTER TABLE "userInteractionsOnPosts" ADD CONSTRAINT "userInteractionsOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionsOnPosts" ADD CONSTRAINT "userInteractionsOnPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionsOnComments" ADD CONSTRAINT "userInteractionsOnComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userInteractionsOnComments" ADD CONSTRAINT "userInteractionsOnComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
