import {
  CaretLeft,
  ArrowSquareIn,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from "phosphor-react";
import { useEffect } from "react";
import remarkGfm from "remark-gfm";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { Link, useParams } from "react-router-dom";

import { LoadingSpinner } from "../../components/LoadingSpinner";

import { usePosts } from "../../context/PostsContext";
import { useProfile } from "../../context/ProfileContext";

import { ContainerPost, Info, Footer, Content } from "./styles";

export function Post() {
  const params = useParams();
  const { profile } = useProfile();
  const { post, loadDataOnePost, loadingPost } = usePosts();

  const createdAtFormat = post
    ? formatDistanceToNow(new Date(post?.created_at), {
        addSuffix: true,
        locale: ptBR,
      })
    : "";

  useEffect(() => {
    loadDataOnePost(params?.numberIssue);
  }, [params]);

  return loadingPost ? (
    <LoadingSpinner />
  ) : (
    <ContainerPost>
      <Info>
        <div>
          <Link to="/">
            <CaretLeft size={16} />
            Voltar
          </Link>

          {post && (
            <Link to="">
              Ver no Github
              <ArrowSquareIn size={16} />
            </Link>
          )}
        </div>

        <h1>{post?.title}</h1>

        <Footer>
          {profile && (
            <li>
              <GithubLogo size={18} />
              {profile.name}
            </li>
          )}

          {post && (
            <>
              <li>
                <CalendarBlank size={18} />
                {createdAtFormat}
              </li>

              <li>
                <ChatCircle size={18} />
                {post?.comments} comentários
              </li>
            </>
          )}
        </Footer>
      </Info>

      <Content>
        <ReactMarkdown
          children={post?.body || ""}
          remarkPlugins={[remarkGfm]}
        />
      </Content>
    </ContainerPost>
  );
}
