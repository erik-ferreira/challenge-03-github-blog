import { ReactNode, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

import { PostProps } from "../components/Post";

interface PostRequest {
  items: PostProps[];
}

interface DetailsPost extends PostProps {
  comments: number;
}

interface PostsContextType {
  posts: PostProps[];
  loadingPosts: boolean;

  post: DetailsPost | null;
  loadingPost: boolean;

  loadDataOnePost: (numberIssue?: string) => void;
  loadPosts: (search?: string) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostsProviderProps {
  children: ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const [post, setPost] = useState<DetailsPost | null>(null);
  const [loadingPost, setLoadingPost] = useState(false);

  async function loadPosts(search?: string) {
    try {
      setLoadingPosts(true);
      const response = await api.get<PostRequest>(
        `/search/issues?q=${
          search || ""
        }%20repo:erik-ferreira/challenge-03-github-blog`
      );

      if (response.status === 200) {
        setPosts(response.data?.items);
      }
    } catch (error) {
      toast.error("Não foi possível carregar a lista de posts.");
    } finally {
      setLoadingPosts(false);
    }
  }

  async function loadDataOnePost(numberIssue?: string) {
    try {
      setLoadingPost(true);
      const response = await api.get<DetailsPost>(
        `/repos/erik-ferreira/challenge-03-github-blog/issues/${numberIssue}`
      );

      if (response.status === 200) {
        setPost(response.data);
      }
    } catch (error) {
      toast.error("Não foi possível carregar o post.");
    } finally {
      setLoadingPost(false);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        loadingPosts,
        post,
        loadingPost,
        loadDataOnePost,
        loadPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
