import {
  CaretLeft,
  ArrowSquareIn,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from "phosphor-react";
import remarkGfm from "remark-gfm";
import { toast } from "react-toastify";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link, useParams } from "react-router-dom";

import { PostProps } from "../../components/Post";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { useProfile } from "../../context/ProfileContext";

import { api } from "../../services/api";

import { ContainerPost, Info, Footer, Content } from "./styles";

interface DetailsPost extends PostProps {
  comments: number;
}

export function Post() {
  const params = useParams();
  const { profile } = useProfile();

  const [post, setPost] = useState<DetailsPost | null>(null);
  const [loadingPost, setLoadingPosts] = useState(false);

  const createdAtFormat = post
    ? formatDistanceToNow(new Date(post?.created_at), {
        addSuffix: true,
        locale: ptBR,
      })
    : "";

  async function loadDataPost() {
    try {
      setLoadingPosts(true);
      const response = await api.get<DetailsPost>(
        `/repos/erik-ferreira/challenge-03-github-blog/issues/${params.numberIssue}`
      );

      if (response.status === 200) {
        setPost(response.data);
      }
    } catch (error) {
      toast.error("Não foi possível carregar o post.");
    } finally {
      setLoadingPosts(false);
    }
  }

  useEffect(() => {
    loadDataPost();
  }, []);

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
