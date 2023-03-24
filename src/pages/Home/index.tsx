import * as zod from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { usePosts } from "../../context/PostsContext";

import {
  ContainerHome,
  InfoPublications,
  Search,
  Input,
  ButtonSearch,
  ContentPosts,
} from "./styles";

const searchPostFormSchema = zod.object({
  search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchPostFormSchema>;

export function Home() {
  const { posts, loadingPosts, loadPosts } = usePosts();

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchPostFormSchema),
    defaultValues: {
      search: "",
    },
  });

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
