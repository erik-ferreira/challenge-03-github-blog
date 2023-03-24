import {
  CaretLeft,
  ArrowSquareIn,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from "phosphor-react";
import remarkGfm from "remark-gfm";
import { toast } from "react-toastify";
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
    try {
      setLoadingPosts(true);
      const response = await api.get<PostProps>(
        `/repos/Shopify/react-native-skia/issues/${params.numberIssue}`
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

              {post && (
                <Link to="">
                  Ver no Github
                  <ArrowSquareIn size={16} />
                </Link>
              )}
            </div>

            <h1>{post?.title}</h1>

            <Footer>
              <li>
                <GithubLogo size={18} />
                cameronwll
              </li>

              {post && (
                <>
                  <li>
                    <CalendarBlank size={18} />
                    Há 1 dia
                  </li>

                  <li>
                    <ChatCircle size={18} />5 comentários
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
      )}
    </main>
  );
}
