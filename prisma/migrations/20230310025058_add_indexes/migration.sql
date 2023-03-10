-- DropIndex
DROP INDEX "posts_id_userId_likes_dislikes_commentsCount_idx";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "noIfCommentsCreated" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "comments_id_idx" ON "comments"("id");

-- CreateIndex
CREATE INDEX "comments_userId_idx" ON "comments"("userId");

-- CreateIndex
CREATE INDEX "comments_postId_idx" ON "comments"("postId");

-- CreateIndex
CREATE INDEX "posts_id_idx" ON "posts"("id");

-- CreateIndex
CREATE INDEX "posts_userId_idx" ON "posts"("userId");

-- CreateIndex
CREATE INDEX "posts_likes_idx" ON "posts"("likes");

-- CreateIndex
CREATE INDEX "posts_dislikes_idx" ON "posts"("dislikes");

-- CreateIndex
CREATE INDEX "posts_commentsCount_idx" ON "posts"("commentsCount");

-- CreateIndex
CREATE INDEX "tags_id_idx" ON "tags"("id");

-- CreateIndex
CREATE INDEX "tags_slug_idx" ON "tags"("slug");

-- CreateIndex
CREATE INDEX "users_id_idx" ON "users"("id");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");
