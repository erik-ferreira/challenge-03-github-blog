import { Link } from "react-router-dom";
import {
  CaretLeft,
  ArrowSquareIn,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from "phosphor-react";

import { ContainerPost, Info, Footer, Content } from "./styles";

export function Post() {
  return (
    <main>
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

          <h1>JavaScript data types and data structures</h1>

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
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>

          <p>
            Dynamic typing JavaScript is a loosely typed and dynamic language.
            Variables in JavaScript are not directly associated with any
            particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>

          <pre>
            let foo = 42; // foo is now a number {"\n"}
            foo = ‘bar’; // foo is now a string {"\n"}
            foo = true; // foo is now a boolean {"\n"}
          </pre>
        </Content>
      </ContainerPost>
    </main>
  );
}
