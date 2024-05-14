import 'dotenv/config'
import * as Joi from 'joi'

interface EnvVars {
    PORT: number;
    PRODUCTS_MS_HOST: string;
    PRODUCTS_MS_PORT: number;
    ORDERS_MS_HOST: string;
    ORDERS_MS_PORT: number;
}

const envsSchema = Joi.object({
    PORT: Joi.number().required(),
    PRODUCTS_MS_HOST: Joi.string().required(),
    PRODUCTS_MS_PORT: Joi.number().required(),
    ORDERS_MS_HOST: Joi.string().required(),
    ORDERS_MS_PORT: Joi.number().required(),

})
.unknown(true)

const {error, value} = envsSchema.validate(process.env)

if(error){
    throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value

export const envs = {
    port: envVars.PORT,
    productsMsHost: envVars.PRODUCTS_MS_HOST,
    productsMsPort: envVars.PRODUCTS_MS_PORT,
    ordersMsHost: envVars.ORDERS_MS_HOST,
    ordersMsPort: envVars.ORDERS_MS_PORT
}