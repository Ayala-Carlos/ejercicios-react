import React from 'react';

// 1. Botón Primario
export const BotonPrimario = () => <button className="btn btn-primary">Guardar Cambios</button>;

// 2. Botón de Peligro (Outline)
export const BotonPeligro = () => <button className="btn btn-outline-danger">Eliminar Registro</button>;

// 3. Input de Texto
export const InputTexto = () => <input type="text" className="form-control" placeholder="Escribe tu nombre..." />;

// 4. Input Password
export const InputPassword = () => <input type="password" className="form-control" placeholder="Contraseña" />;

// 5. Select (Lista Desplegable)
export const SelectPais = () => (
  <select className="form-select">
    <option>Selecciona un país</option>
    <option value="1">México</option>
    <option value="2">España</option>
    <option value="3">Argentina</option>
  </select>
);

// 6. Checkbox
export const CheckboxTerminos = () => (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="check1" />
    <label className="form-check-label" htmlFor="check1">Acepto los términos</label>
  </div>
);

// 7. Radio Buttons
export const RadioGenero = () => (
  <div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="genero" id="r1" />
      <label className="form-check-label" htmlFor="r1">Masculino</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="genero" id="r2" />
      <label className="form-check-label" htmlFor="r2">Femenino</label>
    </div>
  </div>
);

// 8. Alerta Success
export const AlertaExito = () => <div className="alert alert-success">¡Datos enviados correctamente!</div>;

// 9. Alerta Warning
export const AlertaAviso = () => <div className="alert alert-warning">Tu suscripción expirará pronto.</div>;

// 10. Card de Producto
export const CardProducto = () => (
  <div className="card" style={{ width: '100%' }}>
    <div className="card-body">
      <h5 className="card-title">Smartphone X</h5>
      <p className="card-text">Cámara de 108MP y batería de larga duración.</p>
      <button className="btn btn-sm btn-info text-white">Ver más</button>
    </div>
  </div>
);

// 11. Badge (Notificación)
export const BadgeMensajes = () => <span className="badge bg-danger rounded-pill">9+ Mensajes</span>;

// 12. Barra de Progreso Azul
export const ProgressAzul = () => (
  <div className="progress mt-2">
    <div className="progress-bar w-50" role="progressbar">50% Cargado</div>
  </div>
);

// 13. Barra de Progreso Animada
export const ProgressAnimada = () => (
  <div className="progress mt-2">
    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success w-75" role="progressbar">Procesando...</div>
  </div>
);

// 14. Spinner (Loading)
export const SpinnerCargando = () => <div className="spinner-border text-primary" role="status"></div>;

// 15. List Group (Lista)
export const ListaTareas = () => (
  <ul className="list-group">
    <li className="list-group-item">Tarea 1</li>
    <li className="list-group-item active">Tarea 2 (Completada)</li>
    <li className="list-group-item">Tarea 3</li>
  </ul>
);

// 16. Breadcrumb (Migas de pan)
export const MigasPan = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="#">Inicio</a></li>
      <li className="breadcrumb-item active">Configuración</li>
    </ol>
  </nav>
);

// 17. Botón con Spinner (Estado de carga)
export const BotonCargando = () => (
  <button className="btn btn-primary" disabled>
    <span className="spinner-grow spinner-grow-sm me-2"></span>Enviando...
  </button>
);

// 18. Card con Imagen
export const CardImagen = () => (
  <div className="card">
    <img src="https://picsum.photos/200/100" className="card-img-top" alt="random" />
    <div className="card-body"><p className="card-text">Imagen aleatoria vía API.</p></div>
  </div>
);

// 19. Paginación
export const PaginacionSimple = () => (
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
  </ul>
);

// 20. Tooltip/Texto de ayuda
export const TextoAyuda = () => <small className="form-text text-muted">Nunca compartiremos tu correo.</small>;