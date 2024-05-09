import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, SignUpSchemaType } from "../zod/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../services/auth.service";


const SignUp: FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data: SignUpSchemaType) => {
        console.log(data)
        const response = await authService.signup(data);
        console.log(response,"user register")

    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                    className="input"
                    placeholder="firstName"
                    {...register("firstName")}
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
                <br />
                <input
                    className="input"
                    placeholder="lastName"
                    {...register("lastName")}
                />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                <br />

                <input
                    className="input"
                    placeholder="username"
                    {...register("username")}
                />
                {errors.username && <span>{errors.username.message}</span>}
                <br />

                <input
                    className="input"
                    placeholder="email"
                    {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <br />

                <input
                    className="input"
                    placeholder="password"
                    {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <br />

                <button type="submit">submit!</button>
            </form>


        </div>
    );
}

export default SignUp;