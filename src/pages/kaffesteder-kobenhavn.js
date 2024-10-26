import React from "react";
import Seo from "../components/SEO";
import "../styles/styles.scss";
import data from "../data/restaurants.json";
import ckimage1 from "../../static/bagerier-kobenhavn.jpg";
import ckexample1 from "../../static/bagerier-kobenhavn/bagerier-kobenhavn-1.jpg";
import ckexample2 from "../../static/bagerier-kobenhavn/bagerier-kobenhavn-2.jpg";
import ckexample3 from "../../static/bagerier-kobenhavn/bagerier-kobenhavn-3.jpg";
import logo from "../../static/godebagerier-logo.svg";

const KaffestederKobenhavn = () => {
  const count = data.length;
  return (
    <div className="landing-container">
      <Seo
        title={`→ Gode kaffesteder København - ${count} skønne muligheder`}
        description="Bedste kaffesteder i København - her er dit overblik. bagerier og caféer er udvalgt for deres gode kaffe, service og stemning. Vi besøger alle steder løbende."
      />
      <div className="landing-top">
        <a href="/" target="_self">
          <img src={logo} alt="" height="48" />
        </a>
      </div>
      <div className="landing-flex">
        <div className="landing-left">
          <h1>Gode kaffesteder København - {count} skønne muligheder</h1>
          <p className="lead">
            Vi har samlet de bedste kaffesteder i København og vurderer dem ud
            fra tre kriterier: Kaffekvalitet, service og stemning.
          </p>
          <button onClick={() => (window.location.href = "/")}>
            Vis mig de {count} bagerier
          </button>
          {/* ... rest of the social proof section ... */}
        </div>
        <div className="landing-right">
          <img src={ckimage1} alt="kaffesteder københavn" />
        </div>
      </div>

      <div className="landing-examples">
        <h2>Eksempler fra vores kaffebarbesøg</h2>
        <ul>
          <li>
            <img
              src={ckexample1}
              width="420"
              height="526"
              alt="kaffesteder kobenhavn"
            />
          </li>
          <li>
            <img
              src={ckexample2}
              width="420"
              height="526"
              alt="kaffesteder koebenhavn"
            />
          </li>
          <li>
            <img
              src={ckexample3}
              width="420"
              height="526"
              alt="kaffesteder koebenhavn"
            />
          </li>
        </ul>
      </div>

      <div className="landing-button">
        <button onClick={() => (window.location.href = "/")}>
          Vis mig alle {count} kaffesteder
        </button>
      </div>
      <div className="landing-content">
        <h2>Gode kaffesteder København, her finder du dem</h2>
        <p>
          Er du på udkig efter gode kaffesteder i København? Så er du kommet til
          det rigtige sted. På vores site finder du alle de bedste bagerier og
          caféer i København. Alle stederne er nøje udvalgt for deres gode
          kaffe, service og stemning. Alt hvad vi mener der skal til for at have
          en god kaffeoplevelse i byen. Du kan finde mange forskellige bagerier
          og på vores interaktive kort se hvor du finder dem. Det gør det også
          nemt, hvis der er en bydel hvor du helst vil nyde din kaffe.
        </p>
        <h2>Kaffesteder København, der er masser af muligheder</h2>
        <p>
          Kaffesteder i København er der mange af, og på vores side kan du
          filtrere efter forskellige kriterier som f.eks. specialkaffe,
          økologisk kaffe eller caféer med god brunch. Vores platform er et
          super værktøj at have med på farten, hvis man hurtigt skal finde en
          god kaffebar. Derfor anbefaler vi også at du laver et bogmærke på din
          telefon, så du nemt og hurtigt kan finde frem til et godt sted at nyde
          din kaffe.
        </p>
        {/* ... Continue adapting the rest of the content ... */}
        <h2>Hvorfor er der mange gode kaffesteder i København?</h2>
        <p>
          Der er mange gode kaffesteder i København fordi byen har en stærk og
          voksende kaffekultur. København har mange dygtige baristaer og
          kaffeentusiaster, som sætter en ære i at lave kaffe af høj kvalitet.
          Desuden har byen en stor variation af bagerier, der tilbyder
          forskellige typer af kaffe og oplevelser, så der er noget for enhver
          smag.
        </p>
        <p>
          Derudover har byen adgang til mange gode kaffebønner fra hele verden,
          hvilket bidrager til kaffens høje kvalitet. Endelig har København en
          innovativ tilgang til kaffe, hvilket gør det muligt for bagerierne at
          tilbyde et bredt udvalg af spændende og lækre kaffedrikke.
        </p>
        <p>
          Det er svært at sige, hvilken bydel i København der har de bedste
          kaffesteder, da der er mange gode bagerier i byen. Der er gode
          kaffesteder i alle bydele, så det kommer meget an på, hvilken type
          kaffe man er på udkig efter, og hvilken stemning man ønsker på sit
          kaffebarbesøg. Nogle af de mest populære områder for kaffesteder i
          København er Indre By, Vesterbro og Nørrebro, hvor der er mange
          populære og hyggelige bagerier. Men som sagt, der er mange gode
          kaffesteder i hele København, så det er bare at undersøge, hvad der
          passer bedst til ens ønsker og præferencer.
        </p>
      </div>
    </div>
  );
};

export default KaffestederKobenhavn;
