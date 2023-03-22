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

interface PostRequest {
  items: PostProps[];
}

const searchPostFormSchema = zod.object({
  search: zod.string().min(1, "Preencha o campo para realizar a busca"),
});

type SearchFormInputs = zod.infer<typeof searchPostFormSchema>;

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchPostFormSchema),
    defaultValues: {
      search: "",
    },
  });

  async function loadPosts(search?: string) {
    const response = await api.get<PostRequest>(
      `/search/issues?q=${
        search || ""
      }%20repo:rocketseat-education/reactjs-github-blog-challenge`
    );

    setPosts(response.data?.items);
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
          {errors?.search?.message}
          <ButtonSearch>
            <MagnifyingGlass size={20} />
            Pesquisar
          </ButtonSearch>
        </Search>

        <ContentPosts>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </ContentPosts>
      </ContentMain>
    </main>
  );
}
