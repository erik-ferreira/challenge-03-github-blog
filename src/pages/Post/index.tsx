import {
  CaretLeft,
  ArrowSquareIn,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from "phosphor-react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { PostProps } from "../../components/Post";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { api } from "../../services/api";

import { ContainerPost, Info, Footer, Content } from "./styles";

export function Post() {
  const params = useParams();

  const [post, setPost] = useState<PostProps | null>(null);
  const [loadingPost, setLoadingPosts] = useState(false);

  async function loadDataPost() {
    setLoadingPosts(true);
    const response = await api.get<PostProps>(
      `/repos/Shopify/react-native-skia/issues/${params.numberIssue}`
    );

    setPost(response.data);
    setLoadingPosts(false);
  }

  useEffect(() => {
    loadDataPost();
  }, []);

  return (
    <main>
      {loadingPost ? (
        <LoadingSpinner />
      ) : (
        <ContainerPost>
          <Info>
            <div>
              <Link to="/">
                <CaretLeft size={16} />
                Voltar
              </Link>

              <Link to="">
                Ver no Github
                <ArrowSquareIn size={16} />
              </Link>
            </div>

            <h1>{post?.title}</h1>

            <Footer>
              <li>
                <GithubLogo size={18} />
                cameronwll
              </li>

              <li>
                <CalendarBlank size={18} />
                Há 1 dia
              </li>

              <li>
                <ChatCircle size={18} />5 comentários
              </li>
            </Footer>
          </Info>

          <Content>
            <ReactMarkdown
              children={post?.body || ""}
              remarkPlugins={[remarkGfm]}
            />
          </Content>
        </ContainerPost>
      )}
    </main>
  );
}
