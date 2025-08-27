import { TBlogpost } from "@/types/global.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createBlog, getAllBlogs, getSingleBlog } from "./blog.function";

// ! for getting all blogs
export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["all-blogs"],
    queryFn: async () => await getAllBlogs(),
  });
};

// ! for getting single blog post
export const useGetSingleBlogs = (slug: string) => {
  return useQuery({
    queryKey: ["single-blog", slug],
    queryFn: async ({ queryKey }) => {
      const slug = queryKey[1] as string;

      return await getSingleBlog(slug);
    },
    enabled: !!slug,
  });
};

// ! for creating blog
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async (payload: TBlogpost) => await createBlog(payload),
    onSuccess: () => {
      toast.success("Blog created successfully");
      queryClient.invalidateQueries({
        queryKey: ["all-blogs"],
      });
    },
  });
};
