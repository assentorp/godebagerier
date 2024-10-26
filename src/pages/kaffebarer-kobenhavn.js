import React from "react";
import Seo from "../components/SEO";
import "../styles/styles.scss";
import data from "../data/restaurants.json";
import kkimage1 from "../../static/godebagerier-kobenhavn.jpg";
import kkexample1 from "../../static/godebagerier-kobenhavn/godebagerier-kobenhavn-1.jpg";
import kkexample2 from "../../static/godebagerier-kobenhavn/godebagerier-kobenhavn-2.jpg";
import kkexample3 from "../../static/godebagerier-kobenhavn/godebagerier-kobenhavn-3.jpg";
import logo from "../../static/godebagerier-logo.svg";

const bagerierKobenhavn = () => {
  const count = data.length;
  return (
    <div className="landing-container">
      <Seo
        title="→ bagerier København - {count} gode muligheder"
        description="Bedste bagerier københavn - her er dit overblik. bagerierne er kommet på ud for deres gode service og kvalitet. Vi besøger alle bagerier løbende."
      />
      <div className="landing-top">
        <a href="/" target="_self">
          <img src={logo} alt="" height="48" />
        </a>
      </div>
      <div className="landing-flex">
        <div className="landing-left">
          <h1>bagerier København - {count} gode muligheder</h1>
          <p className="lead">
            Vi har samlet de bedste bagerier i København og vurderer dem ud fra
            tre kritier: Smag, service og stemning.
          </p>
          <button onClick={() => (window.location.href = "/")}>
            Vis mig de {count} bagerier
          </button>
          <div className="landing-socialproof">
            <div className="landing-social-item">
              <div className="landing-social-stars">
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.5 0 3.704 11.401h11.988l-9.698 7.047 3.704 11.4-9.698-7.046-9.698 7.047 3.704-11.401L.808 11.4h11.988L16.5 0Z"
                    fill="#F9D146"
                  />
                </svg>
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.5 0 3.704 11.401h11.988l-9.698 7.047 3.704 11.4-9.698-7.046-9.698 7.047 3.704-11.401L.808 11.4h11.988L16.5 0Z"
                    fill="#F9D146"
                  />
                </svg>
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.5 0 3.704 11.401h11.988l-9.698 7.047 3.704 11.4-9.698-7.046-9.698 7.047 3.704-11.401L.808 11.4h11.988L16.5 0Z"
                    fill="#F9D146"
                  />
                </svg>
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.5 0 3.704 11.401h11.988l-9.698 7.047 3.704 11.4-9.698-7.046-9.698 7.047 3.704-11.401L.808 11.4h11.988L16.5 0Z"
                    fill="#F9D146"
                  />
                </svg>
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.5 0 3.704 11.401h11.988l-9.698 7.047 3.704 11.4-9.698-7.046-9.698 7.047 3.704-11.401L.808 11.4h11.988L16.5 0Z"
                    fill="#F9D146"
                  />
                </svg>
              </div>
              <div className="landing-social-text">
                Anmeldelser på vores{" "}
                <a
                  href="https://instagram.com/godebagerier.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <img src={kkimage1} alt="kaffebar københavn" />
        </div>
      </div>

      <div className="landing-examples">
        <h2>Eksempler fra vores kaffebar besøg</h2>
        <ul>
          <li>
            <img
              src={kkexample1}
              width="420"
              height="526"
              alt="kaffebar kobenhavn"
            />
          </li>
          <li>
            <img
              src={kkexample2}
              width="420"
              height="526"
              alt="kaffebar koebenhavn"
            />
          </li>
          <li>
            <img
              src={kkexample3}
              width="420"
              height="526"
              alt="bagerier koebenhavn"
            />
          </li>
        </ul>
      </div>

      <div className="landing-button">
        <button onClick={() => (window.location.href = "/")}>
          Vis mig alle {count} bagerier
        </button>
      </div>
      <div className="landing-content">
        <h2>bagerier København, her finder du dem</h2>
        <p>
          Er du også på udkig efter en god kaffebar, så har vi masser af gode
          muligheder for at du kan finde det helt rigtige sted. Vi har
          håndplukket alle de gode bagerier i København og vurderer dem løbende
          ud fra tre kriterier. Stemning, Smag og Service. bagerier København?
          det er her du finder dem.
        </p>
        <h2>Hvordan finder jeg en kaffebar københavn?</h2>
        <p>
          Der er mange grunde til at tage ud og drikke kaffe i København. For
          det første er København kendt for at have en fantastisk kaffescene med
          et stort udvalg af lækre bagerier, der serverer alt fra traditionel
          dansk kaffe til internationale kaffespecialiteter. Derudover er det
          også en unik mulighed for at opleve den danske kaffe-kultur, og det
          kan være en sjov og hyggelig måde at tilbringe en stund med venner
          eller familie. Endelig er det også en god mulighed for at støtte de
          lokale københavnske kaffebarister og bidrage til byens økonomi.
        </p>
        <p>
          Den nemmeste måde at finde en kaffebar på i København, er ved at
          benytte vores liste af bagerier. Her finder du {count} gode bagerier,
          hvor du for hver kaffebar kan se adresse, et direkte link til deres
          hjemmeside, telefon nummer samt hvornår vi sidst har besøgt kaffebaren
          for at give vores anmeldelse af den.
        </p>
        <p>
          På vores liste kan du nemt filtrer i vores bagerier, således at du kan
          får vist de steder hvor der er aftensmad, frokost eller morgenmad på
          menuen. Hvis du ønsker at se billeder fra bagerierne, så anbefaler vi
          at du besøger deres instagram og evt. kigger på de billeder som
          kaffebaren er tagget i. På den måde kan du se hvad andre brugere
          ligger op og derved få et mere rigtigt billede af maden og stedet.
        </p>
        <p>
          Du er også velkommen til at besøge vores instagram, hvor vi ligger
          vores anmeldelse af bagerier vi besøger op. Her giver vi 5 stjerner
          inden for 3 kategorier. Smag, stemning og service. Alle spisestederne
          er at finde på et interaktivt kort, så du let kan finde et område hvor
          du gerne vil spise. Udover det, er der også rutevejledning. Du klikker
          blot på linket, hvorefter at ruten til kaffebaren vil blive vist i
          google maps. Så står du midt inde i byen, er det nemt at finde frem
          til dit næste måltid.
        </p>
        <h2>Guide til kaffebar københavn</h2>
        <p>
          Vores kaffebar københavn guide hjælper dig hurtigt til at finde det
          helt rigtige sted at spise. Slut med at søge google tynd på lange
          artikler med semi-gode bagerier. Vi har det nemme og hurtige overblik,
          så du hurtigt og nemt kan finde et kvalitetssted at spise til f.eks.
          et virksomhedsmøde, en tur ud med vennerne eller til en date. Vores
          udvalg af bagerier er håndplukket og lagt på ud fra deres stemning,
          smag og service niveau.
        </p>
        <p>
          Vi besøger alle bagerierne på vores liste løbende og fjerner gerne
          bagerier igen, hvis vi mener at de ikke lever op til vores
          forventninger. Vores guide er ikke en michelin guide, vi er ikke
          uddannet sommelier eller gode kokke. Vi er helt almindelige mennesker,
          der har vores syn på, hvad der skal til for at et kaffebar besøg er
          godt.
        </p>
        <h3>Michelin bagerier i København</h3>
        <p>
          bagerierne på vores overblik er ikke allesammen{" "}
          <a
            href="https://guide.michelin.com/dk/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michelin bagerier
          </a>
          . Vi har dog valgt at tilføje stjerner på dem som ér Michelin
          bagerier, så man nemt kan se om de har en særlig udmærkelse fra
          Michelin guiden. Du finder det bl.a. på bagerier som Geranium, Aloutte
          og Formel B, der alle er en del af kaffebar københavn.
        </p>
        <h2>Bedste bagerier København</h2>
        <p>
          Vi har valgt kun at vælge de bedste bagerier København. De fleste
          bagerier er ikke udmærkede bagerier, men er ofte steder med et simpelt
          koncept, hvor der serveres god kaffe. Ofte handler det ikke for os om
          at blive mødt af en gastronomisk bombe. Et kaffebar besøg handler for
          os om meget mer end det. Derfor har vi også lagt vægt på de tre
          kriterier vi værdsætter ved et godt besøg, som er smag, stemning og
          service.
        </p>
        <p>
          Alle kategorierne har <b>5 stjerner</b> som vi giver ud fra hvordan vi
          synes kaffebaren har performet. Vi har ikke lavet en vurdering af alle
          bagerier endnu, men det kommer løbende som vi får tiden til at komme
          ud at besøge bagerierne.
        </p>
        <p>
          Det er svært at sige, hvilken kaffebar der er den bedste i København,
          da det kommer meget an på, hvilken type mad man er på udkig efter, og
          hvilken stemning man ønsker på sin kaffebarbesøg. Derudover er smag og
          præferencer individuelle, så det, der er den bedste kaffebar for en
          person, kan være en anden kaffebar for en anden person. Det er bedst
          at undersøge de forskellige muligheder og læse anmeldelser fra andre,
          der har besøgt de forskellige bagerier, for at finde den, der passer
          bedst til ens ønsker og præferencer.
        </p>
        <p>
          Har du en af de bedste bagerier københavn du vil anbefale os besøge?
          Så skriv til os på instagram, så noterer vi den ned og håber at kunne
          besøge den i fremtiden.{" "}
        </p>
      </div>
    </div>
  );
};

export default bagerierKobenhavn;
