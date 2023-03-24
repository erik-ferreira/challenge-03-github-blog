import * as zod from "zod";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Profile } from "../../components/Profile";
import { Post, PostProps } from "../../components/Post";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { api } from "../../services/api";

import {
  ContainerHome,
  InfoPublications,
  Search,
  Input,
  ButtonSearch,
  ContentPosts,
} from "./styles";

interface PostRequest {
  items: PostProps[];
}

const searchPostFormSchema = zod.object({
  search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchPostFormSchema>;

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchPostFormSchema),
    defaultValues: {
      search: "",
    },
  });

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

  function handleSearchPost(data: SearchFormInputs) {
    loadPosts(data.search);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <ContainerHome>
      <Profile />

      <InfoPublications>
        <h2>Publicações</h2>

        <span>{posts.length} publicações</span>
      </InfoPublications>

      <Search onSubmit={handleSubmit(handleSearchPost)}>
        <Input placeholder="Buscar conteúdo" {...register("search")} />

        <ButtonSearch>
          <MagnifyingGlass size={20} />
          Pesquisar
        </ButtonSearch>
      </Search>

      {loadingPosts ? (
        <LoadingSpinner />
      ) : (
        <ContentPosts>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </ContentPosts>
      )}
    </ContainerHome>
  );
}
