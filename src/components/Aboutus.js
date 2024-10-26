import React from "react";
import Textpage from "../components/Textpage";
import majbritt_m from "../../static/majbritt.png";
import assentorp from "../../static/peter.png";

const Aboutus = ({ state, toggle }) => {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  return (
    <div className="aboutus">
      <div>
        <h1>Gode bagerier i København</h1>
        <h2>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#6F4E37"
            >
              <path d="M8.327 6.205a1.602 1.602 0 1 1 0-3.205 1.602 1.602 0 0 1 0 3.205zm7.325 0a1.602 1.602 0 1 1 0-3.205 1.602 1.602 0 0 1 0 3.205zm4.326 6.89c.092.366-.114.755-.48.847-.069.023-.115.023-.184.023a.708.708 0 0 1-.663-.504L17.483 9.09v1.854l1.305 4.876h-1.305v5.494H16.11v-5.494h-.916v5.494h-1.373v-5.494h-1.305l1.305-4.876V9.09s-1.19 4.44-1.214 4.44a.707.707 0 0 1-.435.413c-.068.023-.114.023-.183.023a.708.708 0 0 1-.664-.504L10.158 9.09v12.224H8.785v-7.096h-.916v7.096H6.495V9.089l-1.167 4.395a.708.708 0 0 1-.664.504c-.069 0-.114 0-.16-.046-.39-.092-.572-.504-.48-.87l1.281-4.83a1.16 1.16 0 0 1 .206-.366 3.822 3.822 0 0 1 1.58-1.007c.389-.138.8-.206 1.236-.206.435 0 .847.068 1.236.228.595.207 1.144.55 1.58 1.008.09.091.16.229.205.366l.641 2.38.641-2.403a1.16 1.16 0 0 1 .206-.366 3.822 3.822 0 0 1 1.58-1.007c.389-.138.801-.206 1.236-.206.435 0 .847.068 1.236.228.595.207 1.145.55 1.58 1.008.091.091.16.229.206.366l1.304 4.83z" />
            </svg>
          </span>
          <span>Hvem er vi?</span>
        </h2>
        <ul>
          <li>
            <img
              src={majbritt_m}
              alt="Majbritt Assentorp"
              width="80"
              height="80"
            />
            <div className="info">
              <strong>Majbritt Assentorp</strong>
              <div className="title">Head of Marketing hos Dea Kudibal</div>
            </div>
          </li>
          <li>
            <img src={assentorp} alt="Peter Assentorp" width="80" height="80" />
            <div className="info">
              <strong>Peter Assentorp</strong>
              <div className="title">
                Freelance{" "}
                <a
                  href="https://tosider.dk"
                  title="UI / UX Designer"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline"
                >
                  {" "}
                  UI / UX Designer
                </a>
                , Co-Founder{" "}
                <a
                  href="https://sportmonda.dk"
                  title="Fodboldtrøjer med tryk"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline"
                >
                  sportmonda.dk
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="description">
          <p>
            Dette er vores univers af gode bagerier i København. bagerierne er
            vurderet ud fra tre kriterier, som vi personligt værdsætter ved en
            god kaffeoplevelse: atmosfære, kaffekvalitet og service.
          </p>
          <br />
          <br />
          <h3>Atmosfære</h3>
          <p>
            At bagerier har en god atmosfære er vigtigt for at man kan nyde sin
            kaffe fuldt ud. God atmosfære er for os kendetegnet ved at man kan
            se kaffebaren har gjort sig umage med indretningen. Atmosfæren er
            det ekstra lag til oplevelsen af hele kaffeuniverset – hvad enten
            det er for at skabe en simpel og uformel stemning eller der er tale
            om et luksuriøst og komfortabelt interiør.
          </p>
          <br />
          <br />
          <h3>Kaffekvalitet</h3>
          <p>
            God kaffe er kernen i vores vurdering. Kaffen skal have en rig smag,
            være veltilberedt og gerne overraske vores smagsløg positivt. Vi
            værdsætter kvalitetsbønner, korrekt brygning og et lækkert finish på
            både espresso-baserede drikke og filterkaffe.
          </p>

          <br />
          <br />
          <h3>Service</h3>
          <p>
            Den rette barista kan løfte hele kaffeoplevelsen. Er han/hun venlig,
            kyndig om kaffe og opmærksom på kunderne, er det noget vi lægger
            stor vægt på.
          </p>

          <p>
            En god kaffebar er for os en kaffebar, der formår at levere på alle
            tre elementer – uanset om det er til en hurtig espresso eller en
            lang hyggestund med en kop filterkaffe, så er vi vilde med, når folk
            gør sig umage!
          </p>

          <p>
            Listen inkluderer bagerier fra bl.a. Frederiksberg, Østerbro,
            Nørrebro, Vesterbro, Amager og selvfølgelig Indre by. Vores liste er
            lavet på baggrund af gode bagerier, vi i de seneste år har besøgt og
            ser frem til løbende at genbesøge. Vi genbesøger ofte for altid at
            kunne holde jer opdateret med vores personlige bud på den skarpeste
            liste over bagerier i København.
          </p>

          <p>
            Hver gang vi genbesøger et sted, vil I få en kort update fra besøget
            på vores Instagram og en vurdering af de tre kriterier i
            kaffebønner. 1 kaffebønne vil være et farvel til listen, og 5
            kaffebønner er toppen!
          </p>

          <p>
            Vi håber, I kan finde inspiration til jeres næste kaffebarbesøg i
            København.
          </p>

          <p>&nbsp;</p>
        </div>
      </div>
      <Textpage />
    </div>
  );
};

export default Aboutus;
