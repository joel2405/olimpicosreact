import "./App.css";

function App() {
  return (
    <>
      <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-br/and" href="#myPage">
                Mari Sanchez
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#myPage">INICIO</a>
                </li>
                <li>
                  <a href="#band">LOGROS</a>
                </li>
                <li>
                  <a href="#tour">PARIS</a>
                </li>
                <li>
                  <a href="#contact">PODIO</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    MAS
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                    <li>
                      <a href="#">Extras</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-search"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src="https://www.elpais.com.co/resizer/v2/BJ3HYU4FJZALDNCFIB23SVFFOY.jpg?auth=2d3ee74fb5bd1a4a80ed85d2d011b697887be747b427e1e62eaeec5a5acde91c&smart=true&quality=75&width=1280&height=720"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                  Hasta la fecha, no existe una atleta conocida como María
                  Sánchez que haya competido en los Juegos Olímpicos de París
                  2024. Si tienes más información específica sobr/e el deporte o
                  el país al que pertenece, puedo ayudarte a buscar información
                  más detallada o crear un perfil biográfico basado en datos
                  generales.
                </p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fco%2Ffull%2FBCO_20240809_BCO_102396_mari-sa-e1723235548292.webp&width=470&height=352"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                  Los Juegos Olímpicos de París 2024 marcan la tercera vez que
                  la capital francesa alberga este evento, habiéndolo hecho
                  anteriormente en 1900 y 1924. Estos juegos son especialmente
                  significativos porque se celebr/an 100 años después de la
                  última vez que París fue sede olímpica.
                </p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://www.wradio.com.co/resizer/v2/CG246QRL35GYPAJWXZI7NM2BOY.jpg?auth=09f062d86cf748efa8c4c9d2bce7d99e49a8508a79cd1fd978b1a1723d5d3359&width=650&height=488&quality=70&smart=true"
                alt="Los Angeles"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                  París 2024 se enfoca en la sostenibilidad y la innovación.
                  Muchas de las competencias se llevarán a cabo en lugares
                  icónicos de la ciudad, como el Estadio de Francia, el Grand
                  Palais, y la Torre Eiffel. Además, los Juegos presentan nuevos
                  deportes como el br/eakdance, que hará su debut olímpico,
                  junto con otros deportes populares como el surf y el
                  skateboard.
                </p>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div id="band" className="container text-center">
          <h3>Mari Sanchez</h3>
          <p>
            <em></em>
          </p>
          <p>
          Hasta la fecha, no existe una atleta conocida como María Sánchez que
            haya competido en los Juegos Olímpicos de París 2024. Si tienes más
            información específica sobr/e el deporte o el país al que pertenece,
            puedo ayudarte a buscar información más detallada o crear un perfil
            biográfico basado en datos generales.          
            </p>

          <br />

          <div className="row">
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo" data-toggle="collapse">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV18v56oOA4bvARuqaZFv3Yq6Uka0XIMrkA&s"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />
              <div id="demo" className="collapse">
                <p>Pasión</p>
                <p>Fuerza</p>
                <p>Resiliencia</p>
              </div>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo2" data-toggle="collapse">
                <img
                  src="https://cdn.clarosports.com/clarosports/2024/08/53912996233-4945ba2c2a-o-1-153552-1024x576.jpg"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />

              <div id="demo2" className="collapse">
                <p>Determinación</p>
                <p>Persistencia</p>
                <p>Disciplina</p>
              </div>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo3" data-toggle="collapse">
                <img
                  src="https://periodicovirtual.com/content/images/2024/08/sanchez.jpg"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />
              <div id="demo3" className="collapse">
                <p>Esfuerzo</p>
                <p>Coraje</p>
                <p>Confianza</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2 className="text-center">PARIS FRANCIA</h2>
        <br />

        <div id="tour" className="bg-1">
          <div className="container">
            <h3 className="text-center"></h3>
            <p className="text-center">
              .<br />
            </p>

            <div className="row text-center">
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IBc_kzg3BvO-l3z_a5_5dTYvJTtucigk_g&s"
                    alt="Paris"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQFjfkpDfzVnEqGnT0FYQMmlsrSzUbCRsKQ&s"
                    alt="New York"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWq0-qGOuxrwHXTjDa0Hsigmjj2vdIBSH5Q&s"
                    alt="San Francisco"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <h4>
                    <span className="glyphicon glyphicon-lock"></span> Tickets
                  </h4>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="form-group">
                      <label for="psw">
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Tickets, $23 per person
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="psw"
                        placeholder="How many?"
                      />
                    </div>
                    <div className="form-group">
                      <label for="usrname">
                        <span className="glyphicon glyphicon-user"></span> Send
                        To
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usrname"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" className="btn btn-block">
                      Pay
                      <span className="glyphicon glyphicon-ok"></span>
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-danger btn-default pull-left"
                    data-dismiss="modal"
                  >
                    <span className="glyphicon glyphicon-remove"></span> Cancel
                  </button>
                  <p>
                    Need <a href="#">help?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
        <section id="competencias" className="competencias">
          <h2>Medallas</h2>
          <div className="container--tabs medallero">
            <div className="tab-content tab-content cont-clasificacion">
              <div id="tab-1" className="tab-pane active">
                <div className="data-table cf">
                  <table className="tabla-datos table-hover table-striped medallero">
                    <caption>Medallero París 2024</caption>
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" className="s-tleft">País</th>
                        <th scope="col"><i className="ico-olympics ico-gm"></i><span className="hidden-xs">Oro</span></th>
                        <th scope="col"><i className="ico-olympics ico-sm"></i><span className="hidden-xs">Plata</span></th>
                        <th scope="col"><i className="ico-olympics ico-bm"></i><span className="hidden-xs">Bronce</span></th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Estados Unidos</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/usa.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">40</span></td>
                        <td><span className="d-m">44</span></td>
                        <td><span className="d-m">42</span></td>
                        <td>126</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>China</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/chn.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">40</span></td>
                        <td><span className="d-m">27</span></td>
                        <td><span className="d-m">24</span></td>
                        <td>91</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Japón</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/jpn.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">20</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">13</span></td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Francia</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/fra.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">19</span></td>
                        <td><span className="d-m">13</span></td>
                        <td><span className="d-m">11</span></td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Gran Bretaña</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/gbr.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">18</span></td>
                        <td><span className="d-m">17</span></td>
                        <td><span className="d-m">18</span></td>
                        <td>53</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Corea del Sur</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/kor.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">14</span></td>
                        <td><span className="d-m">10</span></td>
                        <td><span className="d-m">12</span></td>
                        <td>36</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Italia</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/ita.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">11</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">17</span></td>
                        <td>40</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Alemania</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/ger.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">10</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">15</span></td>
                        <td>37</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/*      <img src="map.jpg" className="img-responsive" style="width:100%"/> */}
          <footer className="text-center">
            <a
              className="up-arrow"
              href="#myPage"
              data-toggle="tooltip"
              title="TO TOP"
            >
              <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <br />
            <br />
            <p>
              Bootstrap Theme Made By{" "}
              <a
                href="https://www.w3schools.com"
                data-toggle="tooltip"
                title="Visit w3schools"
              >
                www.w3schools.com
              </a>
            </p>
          </footer>

          {/*   <script>
   { $(document).ready(function(){
      // Initialize Tooltip
      $('[data-toggle="tooltip"]').tooltip(); 
      
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
  
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;
  
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
  
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    })}
    </script> */}
        </div>
      </div>
    </>
  );
}

export default App;
