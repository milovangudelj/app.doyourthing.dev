-- CreateTable
CREATE TABLE "profiles" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "avatar_url" TEXT,
    "website" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
