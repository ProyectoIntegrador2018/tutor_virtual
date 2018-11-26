
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/MainComponent');

require('./components/Content/Cursos/Cursos');
require('./components/Content/Cursos/Cursos_New');
require('./components/SubNavbars/Curso_Sub');

require('./components/Content/Alumnos/Alumnos');
require('./components/Content/Alumnos/Alumnos_New');
require('./components/SubNavbars/Alumnos_Sub');

require('./components/Content/Estructura_Academica/Estructura');
require('./components/Content/Estructura_Academica/Estructura_New');

require('./components/Content/Grupos/Grupos');
require('./components/Content/Grupos/Grupos_New');
require('./components/SubNavbars/Grupos_Sub');

require('./components/Content/Tutores/Tutores');
require('./components/Content/Tutores/Tutores_New');
require('./components/SubNavbars/Tutores_Sub');
