import React from "react"
import "./About.css"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <main className="about-main">
          <h1 className="about-title">About</h1>
          <div className="section-about-subheader">
            <h3>
              Kokribranders is an independent brand design agency in Lagos
              Nigeria.
            </h3>
            <h3>
              We are a visionary group of Futurists, Strategists, Designers and
              Realisers.
            </h3>
            <h3>
              By understanding, imagining and expressing change, we create
              simpler, lighter, more desirable ideas for the future. We design
              for life.
            </h3>
          </div>
          <section className="section-about-grid">
            <div className="section-about-sub-content">
              <h5>At Kokribranders you will meet</h5>
            </div>
            <div className="section-expertise-grid-wrap">
              <article className="section-expertise-grid-box">
                <h4>Futurists</h4>
                <h5>
                  Who look at how the world is changing and explore the big
                  shifts that are shaping our lives.
                </h5>
                <h5>They inform and inspire all our thinking.</h5>
              </article>
              <article className="section-expertise-grid-box">
                <h4>Strategists</h4>
                <h5>
                  Who build on this knowledge and define how brands can connect
                  with our changing needs and desires.
                </h5>
                <h5>They focus and unlock our creativity.</h5>
              </article>
              <article className="section-expertise-grid-box">
                <h4>Designers</h4>
                <h5>
                  Who create uniquely desirable experiences that move brands
                  forward with a positive impact on our lives.
                </h5>
                <h5>They express and bring to life our big ideas.</h5>
              </article>
              <article className="section-expertise-grid-box">
                <h4>Realisers</h4>
                <h5>
                  Who develop the ultimate design outcomes that progress our
                  lives and take us to a better future.
                </h5>
                <h5>They advance and realise our solutions.</h5>
              </article>
            </div>
          </section>
          <div className="award-content-wrap">
            <div className="section-award-header">
              <div className="section-award-title">
                <h2>Awards</h2>
              </div>
            </div>
            <div className="section-award-subheader">
              <p>
                Our unique approach to designing for life has resulted in a host
                of global creative awards as has seen us win prestigious design
                effectiveness awards for the past 20 consecutive years.
              </p>
            </div>
            <div className="award-list">
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Design Effectiveness Award.svg"
                    className=""
                    alt="Design Effectiveness Award"
                  />
                </div>
                <p>
                  The DBA Design
                  <br />
                  Effectiveness Award
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Cannes Lion.svg"
                    className=""
                    alt="Cannes Lion"
                  />
                </div>
                <p>
                  The Cannes Lion
                  <br />
                  International Festival of Creativity
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_D&amp;AD.svg"
                    className=""
                    alt="D&amp;AD"
                  />
                </div>
                <p>D&amp;AD Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Sunday Times.svg"
                    className=""
                    alt="Sunday Times"
                  />
                </div>
                <p>
                  The Sunday Times
                  <br />
                  Best Small Companies to Work for
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Red Dot.svg"
                    className=""
                    alt="Red Dot"
                  />
                </div>
                <p>Red Dot Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Dieline Awards.svg"
                    className=""
                    alt="Dieline Awards"
                  />
                </div>
                <p>
                  The Dieline Package
                  <br />
                  Design Awards
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Danish Design Awards.svg"
                    className=""
                    alt="Danish Design Awards"
                  />
                </div>
                <p>Danish Design Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Design Week Awards.svg"
                    className=""
                    alt="Design Week Awards"
                  />
                </div>
                <p>Design Week Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Pentawards.svg"
                    className=""
                    alt="Pentawards"
                  />
                </div>
                <p>Pentawards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_American Graphic Design Awards.svg"
                    className=""
                    alt="American Graphic Design Awards"
                  />
                </div>
                <p>
                  GDUSA
                  <br />
                  American Graphic Design Awards
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Mobius Awards.svg"
                    className=""
                    alt="Mobius Awards"
                  />
                </div>
                <p>The Mobius Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_London International Awards.svg"
                    className=""
                    alt="London International Awards"
                  />
                </div>
                <p>
                  The London
                  <br />
                  International Awards
                </p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Creative Circle.svg"
                    className=""
                    alt="Creative Circle"
                  />
                </div>
                <p>Creative Circle Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_German Design.svg"
                    className=""
                    alt="German Design"
                  />
                </div>
                <p>German Design Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_New York Festivals.svg"
                    className=""
                    alt="New York Festivals"
                  />
                </div>
                <p>New York Festival Awards</p>
              </div>
              <div className="award-list-item">
                <div className="award-logo">
                  <img
                    src="https://www.pearlfisher.com/wp-content/themes/pearlfisher/public/images/awards/PearlfisherWebsite_Awards_FlatGraphics_Fab Awards.svg"
                    className=""
                    alt="Fab Awards"
                  />
                </div>
                <p>The FAB Awards</p>
              </div>
            </div>
          </div>
          <div className="dont-content-wrap">
            <div className="section-dont-header">
              <div className="section-dont-title">
                <h2>Three things we don't do</h2>
              </div>
            </div>
            <div className="section-award-subheader">
              <p>
                Unethical work. Unpaid work. Unjustness. <br />
                Here's why:
              </p>
            </div>
            <section className="section-dont-grid">
              <div className="section-dont-grid-wrap">
                <article className="section-dont-grid-box">
                  <h4>Unethical work</h4>
                  <p>
                    We inspire our teams and partners to create a more
                    sustainable and ethical future for everyone. We won't work
                    with anyone that isn't truthful about their brand, is
                    wilfully harming life, enforcing hardship or damaging the
                    environment. We believe in responsibly designing to make our
                    planet and peoples' lives better, not compromising them.
                  </p>
                </article>
                <article className="section-dont-grid-box">
                  <h4>Unpaid work</h4>
                  <p>
                    We offer our clients world-className, original and
                    sustainable brand-building solutions. We don't offer free
                    creative pitches – or free exclusivity. It's simply not good
                    business for anyone. We believe that the most professional,
                    valuable and effective work is built on the foundation of
                    close collaboration, reciprocal partnership and deep
                    understanding.
                  </p>
                </article>
                <article className="section-dont-grid-box">
                  <h4>Unjustness</h4>
                  <p>
                    We foster a welcoming, diverse and inclusive workplace
                    culture where everyone is treated with respect and dignity.
                    Each of us thrive when everyone feels valued for who they
                    are, regardless of gender, race, religion, social className,
                    disability, sexual orientation or background. We leave no
                    room for discrimination of any kind because we believe we
                    have a unique opportunity and obligation to design more
                    equitable ways of living and working.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </main>
        <div className="section-people">
          <div className="section-people-header">
            <div className="section-people-title">
              <h2>People</h2>
            </div>
          </div>
          <section className="section-people-grid">
            {Array.from({ length: 10 }).map((_, i) => (
              <article className="section-people-grid-box location-13 person-normal">
                <Link
                  to="/people/jonathan-ford/"
                  className="person-wrap"
                  title="Jonathan Ford -  Founding Partner &amp; Group Creative Director"
                >
                  <div
                    className="person-image-1"
                    style={{
                      backgroundImage: `url("https://cdn.pearlfisher.com/2019/10/Jonno.jpg")`,
                    }}
                  ></div>
                  <div
                    className="person-image-2"
                    style={{
                      backgroundImage: `url("https://cdn.pearlfisher.com/2019/10/Jonno.jpg")`,
                    }}
                  ></div>
                  <div className="person-shade"></div>
                  <div className="person-info">
                    <h5 className="p-name">Jonathan Ford</h5>
                    <span className="p-title">
                      Founding Partner &amp; Group Creative Director
                    </span>
                    <span className="p-location">London</span>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
