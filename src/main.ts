import {NestFactory} from '@nestjs/core';
import {AppModule} from "./app.module";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe())
    app.enableCors();

    await app.listen(PORT, () => console.log(`Server starts on ${PORT}`))


//    для работы по https:
//     const httpsOptions = {
//         key: fs.readFileSync('./secrets/private-key.pem'),
//         cert: fs.readFileSync('./secrets/public-certificate.pem'),
//     };
//     const app = await NestFactory.create(AppModule, {
//         httpsOptions,
//     });
//     await app.listen(3000);
}

start();
