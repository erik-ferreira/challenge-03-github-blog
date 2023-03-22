import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { PostContainer } from "./styles";

export interface PostProps {
  title: string;
  body: string | null;
  created_at: string;
  number: number;
}

interface PostComponentProps {
  post: PostProps;
}

export function Post({ post }: PostComponentProps) {
  const createdAtFormat = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
    locale: ptBR,
  });
  const bodyFormat = post.body?.substring(0, 340) || "";

  return (
    <PostContainer to={`/post/${post.number}`}>
      <article>
        <div>
          <h2>{post.title}</h2>
          <span>{createdAtFormat}</span>
        </div>

        <p>{bodyFormat}</p>
      </article>
    </PostContainer>
  );
}
