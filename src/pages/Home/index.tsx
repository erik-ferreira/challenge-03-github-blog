import { Profile } from "../../components/Profile";

import { ContentMain, InfoPublications, Input } from "./styles";

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
      </ContentMain>
    </main>
  );
}
