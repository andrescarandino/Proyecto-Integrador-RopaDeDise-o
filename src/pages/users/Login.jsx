import { useForm } from "react-hook-form";
import { useRef } from "react";
import styles from '../../styles/users/login.module.css'


function Register() {
    
    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm();

    const onSubmit = handleSubmit(data => {

        reset()
    })

    const password = useRef(null);
    password.current = watch("password", "");

	return (
        <div className={styles.formContainer}>
            <form onSubmit={onSubmit}>
            <label>Email:</label>
            <input type="email" name="email"
                {...register("email" )}
                />

            <label>Contraseña:</label>
            <input type="password" name="password" 
                {...register("password")}
                />

            <button>Ingresar</button>
        </form>
        </div>
    )
}

export default Register;
