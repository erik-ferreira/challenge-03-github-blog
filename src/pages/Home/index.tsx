import { Profile } from "../../components/Profile";

import {
  ContentMain,
  InfoPublications,
  Input,
  ContentPosts,
  Post,
} from "./styles";

export function Home() {
  return (
    <main>
      <ContentMain>
        <Profile />

        <InfoPublications>
          <h2>Publicações</h2>

          <span>6 publicações</span>
        </InfoPublications>

        <Input placeholder="Buscar conteúdo" />

        <ContentPosts>
          <Post href="">
            <article>
              <div>
                <h2>JavaScript data types and data structures</h2>
                <span>Há 1 dia</span>
              </div>

              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </article>
          </Post>

          <Post href="">
            <article>
              <div>
                <h2>JavaScript data types and data structures</h2>
                <span>Há 1 dia</span>
              </div>

              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </article>
          </Post>

          <Post href="">
            <article>
              <div>
                <h2>JavaScript data types and data structures</h2>
                <span>Há 1 dia</span>
              </div>

              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </article>
          </Post>

          <Post href="">
            <article>
              <div>
                <h2>JavaScript data types and data structures</h2>
                <span>Há 1 dia</span>
              </div>

              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn.
              </p>
            </article>
          </Post>
        </ContentPosts>
      </ContentMain>
    </main>
  );
}
