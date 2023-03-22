import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { Post, PostProps } from "../../components/Post";
import { Profile } from "../../components/Profile";

import { ContentMain, InfoPublications, Input, ContentPosts } from "./styles";

interface PostRequest {
  items: PostProps[];
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

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

        <Input placeholder="Buscar conteúdo" />

        <ContentPosts>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </ContentPosts>
      </ContentMain>
    </main>
  );
}

// https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge
