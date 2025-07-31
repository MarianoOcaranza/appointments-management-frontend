"use client";
import { useState, useEffect } from "react";
import { BriefcaseMedical, CircleUser, ArrowLeft} from "lucide-react";
import PersonalInfo from "./PersonalInfo";

const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  return (
    <>
    {step == 1 && (
		<div className="bg-white shadow-md gap-3 p-4 rounded-md w-[90%] md:w-3/4 flex flex-col text-center">
			<h1 className='text-xl tracking-tighter font-extralight'>Por favor, seleccione una opción</h1>
			<div className='flex justify-around'>
				<div onClick={()=> {setRole("PROFESIONAL"); setStep(2)}} className='rounded-sm border hover:bg-purple-300 transition-color duration-300 cursor-pointer border-neutral-300 p-10 flex w-[49%] flex-col items-center'>
					<div className='bg-purple-200 p-3 rounded-full'>
						<BriefcaseMedical size={50} color={'#7e22ce'}/>
					</div>
					<h1>Registrarse como <b>PROFESIONAL</b></h1>
				</div>
				<div onClick={()=> {setRole("PACIENTE"); setStep(2)}} className='rounded-sm border hover:bg-blue-200 transition-color duration-300 cursor-pointer border-neutral-300 p-10 flex w-[49%] flex-col items-center'>
					<div className='bg-blue-100 p-3 rounded-full'>
						<CircleUser size={50} color={'#7a70ff'}/>
					</div>
					<h1>Registrarse como <b>PACIENTE</b></h1>
				</div>
			</div>
		</div>
    )}
	{step == 2 && (
		<form className={`shadow-lg rounded-xl p-6 w-[90vw] md:w-1/2 bg-white  ${role == 'PROFESIONAL' ? 'border-purple-200/50' : 'border-blue-300'} flex gap-4 flex-col border`}>
			<ArrowLeft className={`cursor-pointer ${role == 'PROFESIONAL' ? 'text-purple-500 hover:text-purple-700' : 'text-blue-500 hover:text-blue-800'} transition-colors`} onClick={() => { setStep(1); setRole(""); }}/>
			<PersonalInfo role={`${role == 'PROFESIONAL' ? 'profesional' : 'paciente'}`} textColor={`${role == 'PROFESIONAL' ? 'text-purple-700' : 'text-blue-500'}`} borderColor={`${role == 'PROFESIONAL' ? 'border-purple-300' : 'border-blue-400'}`}/>
						<button
				className={`p-2 ${role == 'PROFESIONAL' ? 'bg-indigo-500 hover:bg-indigo-700' : 'bg-emerald-400 hover:bg-emerald-600'}  text-white font-semibold rounded-md shadow-md transition-colors duration-300`}
				type="submit"
			>
				Siguiente
			</button>
		</form>
	)}
	</>
  );
};

export default Register;
