import { NameSkill, IconSkill } from './../../../Const/skills.const';
import { IconName, ProjectData } from './ProjectCard.model';

// ENTORNO
const bash: IconName = { name: NameSkill.bash, icon: IconSkill.bash };
const linux: IconName = { name: NameSkill.linux, icon: IconSkill.linux };
const git: IconName = { name: NameSkill.git, icon: IconSkill.git };

// FRONT
const html5: IconName = { name: NameSkill.html5, icon: IconSkill.html5 };
const css3: IconName = { name: NameSkill.css3, icon: IconSkill.css3 };
const sass: IconName = { name: NameSkill.sass, icon: IconSkill.sass };
const bootstrap: IconName = { name: NameSkill.bootstrap, icon: IconSkill.bootstrap };
const tailwind: IconName = { name: NameSkill.tailwind, icon: IconSkill.tailwind };
const react: IconName = { name: NameSkill.react, icon: IconSkill.react };
const angular: IconName = { name: NameSkill.angular, icon: IconSkill.angular };
const nextjs: IconName = { name: NameSkill.nextjs, icon: IconSkill.nextjs };
const jasmine: IconName = { name: NameSkill.jasmine, icon: IconSkill.jasmine };

// BOTH
const javascript: IconName = { name: NameSkill.javascript, icon: IconSkill.javascript };
const typescript: IconName = { name: NameSkill.typescript, icon: IconSkill.typescript };

// BACK
const c: IconName = { name: NameSkill.c, icon: IconSkill.c };
const python: IconName = { name: NameSkill.python, icon: IconSkill.python };
const java: IconName = { name: NameSkill.java, icon: IconSkill.java };
const nodejs: IconName = { name: NameSkill.nodejs, icon: IconSkill.nodejs };
const expressjs: IconName = { name: NameSkill.expressjs, icon: IconSkill.expressjs };
const flask: IconName = { name: NameSkill.flask, icon: IconSkill.flask };

// ORM
const prisma: IconName = { name: NameSkill.prisma, icon: IconSkill.prisma };

// DATABASE
const mysql: IconName = { name: NameSkill.mysql, icon: IconSkill.mysql };
const postgresql: IconName = { name: NameSkill.postgresql, icon: IconSkill.postgresql };
const mongodb: IconName = { name: NameSkill.mongodb, icon: IconSkill.mongodb };

// HERRAMIENTAS
const figma: IconName = { name: NameSkill.figma, icon: IconSkill.figma };
const ilustrator: IconName = { name: NameSkill.ilustrator, icon: IconSkill.ilustrator };
const postman: IconName = { name: NameSkill.postman, icon: IconSkill.postman };
const vim: IconName = { name: NameSkill.vim, icon: IconSkill.vim };
const vscode: IconName = { name: NameSkill.vscode, icon: IconSkill.vscode };
const intellijidea: IconName = { name: NameSkill.intellijidea, icon: IconSkill.intellijidea };


export const ProjectAirBnbClone:ProjectData = {
    title: 'AirBnb Clone',
    content: `Desarrollé un clon del sitio web AirBnB desde cero.
              El proyecto incluyó el diseño, desarrollo y despliegue de la aplicación.`,
    github: 'https://github.com/EduRamos95/holbertonschool-AirBnB_clone_v4',
    demo: '',
    descriptions: [],
    stack: [html5,css3,javascript,python,flask,mysql],
    front: [html5, css3, javascript],
    back: [python, flask],
    orm: [],
    db: [mysql],
    img: ["AirBnb/AirBnbClone_v1.png"]
}

export const ProjectSimpleShell:ProjectData = {
    title: 'Simple Shell',
    content: 'Desarrollé un intérprete de línea de comandos en C que emula el shell UNIX. Admite múltiples comandos en modo interactivo y no interactivo.',
    github: 'https://github.com/EduRamos95/holbertonschool-simple_shell',
    demo: '',
    descriptions: [],
    stack: [bash, c],
    front: [],
    back: [bash, c],
    orm: [],
    db: [],
}
