import * as zod from "zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Profile } from "../../components/Profile";
import { Post, PostProps } from "../../components/Post";

import { api } from "../../services/api";

import {
  ContentMain,
  InfoPublications,
  Search,
  Input,
  ButtonSearch,
  ContentPosts,
} from "./styles";
import { LoadingSpinner } from "../../components/LoadingSpinner";

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
    setLoadingPosts(true);
    const response = await api.get<PostRequest>(
      `/search/issues?q=${search || ""}%20repo:Shopify/react-native-skia`
    );

    setPosts(response.data?.items);
    setLoadingPosts(false);
  }

  function handleSearchPost(data: SearchFormInputs) {
    loadPosts(data.search);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main>
      <ContentMain>
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
      </ContentMain>
    </main>
  );
}
