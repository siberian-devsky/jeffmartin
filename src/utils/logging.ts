
import winston from 'winston';

export const logging = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ 
            filename: 'error.log', 
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        })
    ]
});