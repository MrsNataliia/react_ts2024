import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number()
        .min(1)
        .messages({
            "number.min": "min value is 1"
        }),
    title: Joi.string()
        .pattern(/[A-Za-zА-Яа-яЁё]/)
        .messages({
            "string.pattern.base": "use only letters"
        }),
    body: Joi.string()
        .pattern(/\D/)
        .messages({
            "string.min": "numbers aren`t allowed"
        })
})

