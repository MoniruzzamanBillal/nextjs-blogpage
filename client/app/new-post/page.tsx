"use client";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlog } from "@/hooks/blog.hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type TPostFormInputs = {
  title: string;
  content: string;
  brief: string;
  author: string;
};

const AddBlog = () => {
  const router = useRouter();

  const [editorContent, setEditorContent] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<TPostFormInputs>();

  const { mutateAsync: cerateBlogFn } = useCreateBlog();

  // ! Handle form submission
  const handleAddPost = async (data: TPostFormInputs) => {
    if (!editorContent) {
      toast.error("Enter post content!!!");
      return;
    }

    const slug = data?.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const payload = {
      slug,
      content: editorContent,
      author: data?.author,
      brief: data?.brief,
      title: data?.title,
    };

    const result = await cerateBlogFn(payload);

    if (result?.success) {
      router.push("/");
    }
  };

  return (
    <div className="mainContainer min-h-screen py-5 bg-gray-100 ">
      <Wrapper>
        {/* top buttom  */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>

        {/* form  */}

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Write New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleAddPost)} className="space-y-6">
              {/* Author */}
              <div>
                <Label
                  htmlFor="author"
                  className="block text-sm font-medium mb-1"
                >
                  Author
                </Label>
                <Input
                  id="author"
                  type="text"
                  {...register("author", {
                    required: "Author name is required",
                  })}
                  className={`w-full p-2 border rounded-md ${
                    errors.author ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Author's name"
                />
                {errors.author && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.author.message}
                  </p>
                )}
              </div>

              {/* Title */}
              <div>
                <Label
                  htmlFor="title"
                  className="block text-sm font-medium mb-1"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className={`w-full p-2 border rounded-md ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter post title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* project content  */}
              <div>
                <Label htmlFor="content">Content</Label>
                <div className="  " id="content">
                  <Editor
                    apiKey="839jg3t3v8ly10h2npu8z6wcxk4nrn27w701bnyaxz30h0oo"
                    value={editorContent}
                    onEditorChange={(newValue) => setEditorContent(newValue)}
                    init={{
                      height: 400,
                      plugins: "lists link image table code help",
                      toolbar:
                        "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | code",
                    }}
                  />
                </div>
              </div>

              {/* Brief */}
              <div>
                <Label
                  htmlFor="brief"
                  className="block text-sm font-medium mb-1"
                >
                  Brief
                </Label>
                <Textarea
                  id="brief"
                  rows={4}
                  {...register("brief", { required: "Brief is required" })}
                  className={`w-full p-2 border rounded-md ${
                    errors.brief ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Write a short summary of the post"
                />
                {errors.brief && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.brief.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit Post"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Wrapper>
    </div>
  );
};

export default AddBlog;
