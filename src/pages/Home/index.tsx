import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

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

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const filteredPost = [];

  async function loadPosts() {
    const response = await api.get<PostRequest>(
      "/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge"
    );

    setPosts(response.data?.items);
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

        <Search>
          <Input placeholder="Buscar conteúdo" />
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
