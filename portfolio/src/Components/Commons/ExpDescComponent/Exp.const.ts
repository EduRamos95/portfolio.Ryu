import { IconSkill } from "../../../Const/skills.const";
import { WorkData } from "./Exp.model";

export const work3:WorkData = {
    company: "DevStream",
    job: "Front-End Developer",
    dateStart: "Oct 2023",
    dateEnd: "Feb 2024",
    descriptions: [
        "Implementé un diseño completamente responsive en la aplicación web mediante el uso de media queries en SCSS y Bootstrap.",
        "Convertí los diseños proporcionados por Figma en código funcional, asegurando la coherencia visual y la fidelidad al diseño",
        "Resolví problemas en el código heredado al aplicar buenas prácticas de programación y mejorar la legibilidad del mismo.",
        "Garanticé la integridad de las funcionalidades existentes durante el proceso de mejoras."
    ],
    stack: [IconSkill.angular]
}

export const work2:WorkData = {
    company: "MDP Consulting",
    job: "Full-Stack Developer",
    dateStart: "Apr 2023",
    dateEnd: "Sep 2023",
    descriptions: [
        "Desarrollé aplicaciones web utilizando Angular, mejorando la interfaz de usuario de forma moderna y funcional.",
        "Colaboré con el equipo de backend para desarrollar API RestFull y microservicios en Java con Springboot, garantizando un flujo de datos eficiente y seguro.",
        "Participé en el proceso de revisión de código y colaboré en el desarrollo ágil (SCRUM), lo que resultó en entregas puntuales y de calidad.",
        "Realicé pruebas unitarias con Jasmine, Karma, Mockito y Junit."
    ],
    stack: [
        IconSkill.angular,
        IconSkill.jasmine,
        IconSkill.java,
        IconSkill.mongodb,
    ]
}

export const work1:WorkData = {
    company: "Core Capital",
    job: "Full-Stack Developer",
    dateStart: "Feb 2023",
    dateEnd: "Mar 2023",
    descriptions: [
        "Desarrollo de un sistema para administrar documentos, reduciendo en 30% el tiempo de su búsqueda.",
        "Implementación almacenamiento en la nube con S3 Amazon, incrementando la seguridad del documento debido a las url con tiempo limitado controlando el acceso a la información"
    ],
    stack: [
        IconSkill.typescript,
        IconSkill.react,
        IconSkill.nodejs,
        IconSkill.expressjs,
        IconSkill.prisma,
        IconSkill.postgresql
    ]
}