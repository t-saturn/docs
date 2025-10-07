import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fácil de usar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Docusaurus fue diseñado desde cero para ser fácil de instalar y usar para obtener tu sitio web funcionando rápidamente.</>,
  },
  {
    title: "Foco en lo que importa",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus le permite enfocar sus documentos y nosotros nos encargamos de los demás. Mueva sus documentos a la carpeta <code>docs</code>.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Extienda o personalice su diseño de sitio web reutilizando React. Docusaurus puede ser extendido mientras se reutiliza el mismo encabezado y pie de página.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
