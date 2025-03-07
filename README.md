<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## CONSULTA CON DATOS 
INSERT INTO donante (nombre, tipo_donante, contacto, ubicacion, notas_adicionales) 
VALUES 
('Google', 'empresa', 'contacto@google.com', 'California, USA', 'Programa de donaciones anuales'),
('Microsoft', 'empresa', 'contacto@microsoft.com', 'Washington, USA', 'Iniciativa de impacto social'),
('Amazon', 'empresa', 'contacto@amazon.com', 'Seattle, USA', 'Apoyo a comunidades desfavorecidas'),
('Apple', 'empresa', 'contacto@apple.com', 'California, USA', 'Donaciones a programas educativos'),
('Tesla', 'empresa', 'contacto@tesla.com', 'California, USA', 'Energía renovable y filantropía'),
('Facebook', 'empresa', 'contacto@facebook.com', 'Menlo Park, USA', 'Apoyo a educación digital'),
('SpaceX', 'empresa', 'contacto@spacex.com', 'Hawthorne, USA', 'Desarrollo tecnológico para ayuda humanitaria'),
('Netflix', 'empresa', 'contacto@netflix.com', 'Los Gatos, USA', 'Donaciones a la industria del cine independiente'),
('Coca-Cola', 'empresa', 'contacto@coca-cola.com', 'Atlanta, USA', 'Donaciones a proyectos ambientales'),
('Nike', 'empresa', 'contacto@nike.com', 'Oregón, USA', 'Apoyo a jóvenes deportistas'),

('Juan Pérez', 'individual', 'juan.perez@email.com', 'Ciudad A', 'Donador ocasional'),
('María González', 'individual', 'maria.gonzalez@email.com', 'Ciudad B', 'Apoya causas infantiles'),
('Carlos Ramírez', 'individual', 'carlos.ramirez@email.com', 'Ciudad C', 'Donador frecuente'),
('Laura Torres', 'individual', 'laura.torres@email.com', 'Ciudad D', 'Apoya causas ambientales'),
('Pedro Fernández', 'individual', 'pedro.fernandez@email.com', 'Ciudad E', 'Donador anónimo'),
('Ana López', 'individual', 'ana.lopez@email.com', 'Ciudad F', 'Colabora con bancos de alimentos'),
('José Martínez', 'individual', 'jose.martinez@email.com', 'Ciudad G', 'Apoya programas educativos'),
('Sofía Herrera', 'individual', 'sofia.herrera@email.com', 'Ciudad H', 'Voluntaria en ONG'),
('Ricardo Díaz', 'individual', 'ricardo.diaz@email.com', 'Ciudad I', 'Ayuda en emergencias'),
('Elena Rojas', 'individual', 'elena.rojas@email.com', 'Ciudad J', 'Donadora activa en su comunidad');


INSERT INTO beneficiario (nombre, tipo, contacto, ubicacion, necesidades) 
VALUES 
('Comedor Social Esperanza', 'organización', 'contacto@comedoresperanza.org', 'Ciudad A', 'Necesita alimentos y utensilios'),
('Hogar de Niños Felices', 'organización', 'info@hogarfelices.org', 'Ciudad B', 'Requiere ropa y útiles escolares'),
('Centro de Salud Comunitario', 'organización', 'contacto@saludcomunitaria.org', 'Ciudad C', 'Medicinas y equipos médicos'),
('Escuela Rural Futuro', 'organización', 'info@escuelafuturo.org', 'Ciudad D', 'Materiales educativos y becas');


INSERT INTO donacion_beneficiario ("donanteIdDonante1", "beneficiarioIdBeneficiario", cantidad_asignada, estado_entrega) 
VALUES 
-- Comedor Social Esperanza
(2, 1, 500.00, 'pendiente'),  -- Google
(2, 1, 450.00, 'pendiente'),  -- Microsoft
(3, 1, 700.00, 'pendiente'),  -- Amazon
(4, 1, 650.00, 'pendiente'),  -- Apple
(11, 1, 200.00, 'pendiente'), -- Juan Pérez

-- Hogar de Niños Felices
(5, 2, 800.00, 'pendiente'),  -- Tesla
(6, 2, 600.00, 'pendiente'),  -- Facebook
(7, 2, 550.00, 'pendiente'),  -- SpaceX
(12, 2, 250.00, 'pendiente'), -- María González
(13, 2, 300.00, 'pendiente'), -- Carlos Ramírez

-- Centro de Salud Comunitario
(8, 3, 900.00, 'pendiente'),  -- Netflix
(9, 3, 750.00, 'pendiente'),  -- Coca-Cola
(10, 3, 500.00, 'pendiente'), -- Nike
(14, 3, 350.00, 'pendiente'), -- Laura Torres
(15, 3, 400.00, 'pendiente'), -- Pedro Fernández

-- Escuela Rural Futuro
(16, 4, 600.00, 'pendiente'), -- Ana López
(17, 4, 450.00, 'pendiente'), -- José Martínez
(18, 4, 550.00, 'pendiente'), -- Sofía Herrera
(19, 4, 700.00, 'pendiente'), -- Ricardo Díaz
(20, 4, 800.00, 'pendiente'); -- Elena Rojas

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
