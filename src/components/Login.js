import React from 'react';


function Login({ nombre, email, imagen }) {
  return (
    <div className="border rounded p-3">
      <section className="vh-100" style={{ background: "linear-gradient(to right, #0dca93, #0ea57e, #178268, #1d5f50)" }}>
        <div className="container py-5 h-100"style={{height: "fit-content"}} >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" ,height: "fit-content" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-4 d-none d-md-block" style={{height:"auto"}} >
                    <img src="https://images.pexels.com/photos/9770971/pexels-photo-9770971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="login form" className="img-fluid rounded" style={{ borderRadius: "1rem 0 0 1rem", width: "100%", height: "100%", objectFit: "cover"}} />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-4 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Bienvenida/o </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Ingrese su correo corporativo y contraseña</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">Ingrese su Correo</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27">Ingrese su contraseña</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <a href='/MiReciclaje'><button className="btn btn-dark btn-lg btn-block" type="button">Entrar</button></a>
                        </div>

                        <a className="small text-muted" href="/vistaempresauno">¿Olvidó su contraseña?</a>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Login;
