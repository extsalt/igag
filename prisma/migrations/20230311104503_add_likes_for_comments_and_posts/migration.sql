-- CreateTable
CREATE TABLE "likesOnPost" (
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likesOnPost_pkey" PRIMARY KEY ("postId","userId")
);

-- CreateTable
CREATE TABLE "likesOnComment" (
    "commentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likesOnComment_pkey" PRIMARY KEY ("commentId","userId")
);

-- CreateIndex
CREATE INDEX "likesOnPost_postId_idx" ON "likesOnPost"("postId");

-- CreateIndex
CREATE INDEX "likesOnPost_userId_idx" ON "likesOnPost"("userId");

-- CreateIndex
CREATE INDEX "likesOnComment_commentId_idx" ON "likesOnComment"("commentId");

-- CreateIndex
CREATE INDEX "likesOnComment_userId_idx" ON "likesOnComment"("userId");

-- CreateIndex
CREATE INDEX "tagsOnPost_postId_idx" ON "tagsOnPost"("postId");

-- CreateIndex
CREATE INDEX "tagsOnPost_tagId_idx" ON "tagsOnPost"("tagId");

-- AddForeignKey
ALTER TABLE "likesOnPost" ADD CONSTRAINT "likesOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likesOnPost" ADD CONSTRAINT "likesOnPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likesOnComment" ADD CONSTRAINT "likesOnComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likesOnComment" ADD CONSTRAINT "likesOnComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
