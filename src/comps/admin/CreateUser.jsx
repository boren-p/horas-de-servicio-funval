import React from 'react';

const CreateUser = () => {
    return (
        <div className='border flex flex-col items-center justify-center p-2'>
            <h2>NUEVO USUARIO</h2>
        <form action="submit" className='border flex flex-col items-center justify-center p-2 gap-2 w-full'>
            <div className='flex items-center justify-center gap-2 w-full'>
                <div className='border flex flex-col items-center justify-center p-2 w-full'>
                    <input type="text" placeholder='nombre 1'/>
                    <input type="text" placeholder="apellido 1"/>
                    <input type="email" placeholder='email'/>
                </div>
                <div className='border flex flex-col items-center justify-center p-2 w-full'>
                    <input type="text" placeholder='nombre 2'/>
                    <input type="text" placeholder="apellido 2"/>
                    <input type="text" placeholder='contraseña'/>
                </div>
            </div>
            <select name="escuela" id="" className='border flex flex-col items-center justify-center p-2 w-full'>
                    <option value="escuela 1">escuela 1</option>
                    <option value="escuela 2">escuela 2</option>
                    <option value="escuela 3">escuela 3</option>
            </select>
            <div className=' flex items-center justify-center gap-2 w-full'>
                <div className='border flex flex-col items-center justify-center p-2 w-full'>
                    <select className="w-full" name="Pais" id="">
                        <option value="Pais 1">Pais 1</option>
                        <option value="Pais 2">Pais 2</option>
                        <option value="Pais 3">Pais 3</option>
                    </select>
                    <select className="w-full" name="Controller" id="">
                        <option value="Controller 1">Controller 1</option>
                        <option value="Controller 2">Controller 2</option>
                        <option value="Controller 3">Controller 3</option>
                    </select>
                </div>
                <div className='border flex flex-col items-center justify-center p-2 w-full'>
                    <select className="w-full" name="Rol" id="">
                        <option value="Rol 1">Rol 1</option>
                        <option value="Rol 2">Rol 2</option>
                        <option value="Rol 3">Rol 3</option>
                    </select>
                    <select className="w-full" name="Reclutier" id="">
                        <option value="Reclutier 1">Reclutier 1</option>
                        <option value="Reclutier 2">Reclutier 2</option>
                        <option value="Reclutier 3">Reclutier 3</option>
                    </select>
                </div>
            </div>
            <button action="submit" className='border flex flex-col items-center justify-center p-2 w-full'>CREAR USUARIO</button>
        </form>
        </div>
    );
} 

export default CreateUser;
