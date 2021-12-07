import React from "react";
import "./style.css";
import { Card, Container } from "react-bootstrap";
export default function Home() {
  return (
    <Container xs={12}>
      <Card border="dark">
        <Card.Header>Um breve Resumo sobre minha historia</Card.Header>
        <Card.Body>
          Tudo começou em 2016 quando estava terminando o colegial, e como todo
          bom adolecente não fazia ideia do que faria da minha vida
          profissional.
          <br />
          Comecei a pesquisar sobre as possibilidades que eu teria vocação para
          atuar, como sempre gostei muito de Computadores e tudo que relacionava
          a eles, nao tinha muita duvida que faria algo{" "}
          <b>relacionado ao mundo da TI</b>.<br />
          Foi assim que conheci o curso de Análise e Desenvolvimento de Sistemas
          (ADS), <b>foi amor à primeira vista</b>.
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>A grande ideia</Card.Header>
        <Card.Body>
          Esse portfólio tem como intuito, apresentar algumas{" "}
          <b>características pessoas</b> assim como contar um pouco de{" "}
          <b>minha história</b> até os momentos atuais, além de todas essas
          informações sobre minha pessoa até terá acesso a alguns de{" "}
          <b>meus repositórios no GitHub</b> que demonstra as minhas skills e
          meu progresso. Não se acanhe pode navegar pelos menus ai a cima!!!
        </Card.Body>
      </Card>
    </Container>
  );
}
