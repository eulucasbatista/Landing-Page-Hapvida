import React from 'react';
// import data
import { planos } from '../data';
const Overview = () => {
  
  const enviarForm = (event) =>{
    //var name = $('#grid-first-name').val();
    //event.target.name;

    console.log(event.target.name);
    event.preventDefault()  

  }
  // destructure overview data
  const { title } = planos;
  return (
    <section className='section' id="planForm">
    {/* title */}
    <h2
          className='h2 mb-10 lg:mb-16 text-center'
          data-aos='fade-up'
          data-aos-delay='300'
          id='Orcamento'
        >
          {title}
        </h2>
      <div className='container mx-auto'
        data-aos='fade-left'
        data-aos-offset='400' >
        <form className="w-full max-w-lg mx-auto" onSubmit={enviarForm}>
          <div className="flex flex-wrap -mx-3 mb-6 order-1 lg:order-2" data-oas='fade-left' data-aos-offset='300'>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nome
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="grid-first-name" type="text" placeholder="Antonio" />
              <p className="text-red-500 text-xs italic">Insira seu Nome</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Sobrenome
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Silva" />
              <p className="text-red-500 text-xs italic">Insira seu Sobrenome</p>
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-3 mb-2"> 
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Cidade
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="S??o Paulo" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Estado
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Acre</option>
                  <option>Alagoas</option>
                  <option>Amap??</option>
                  <option>Amazonas</option>
                  <option>Bahia</option>
                  <option>Cear??</option>
                  <option>Esp??rito Santo</option>
                  <option>Goi??s</option>
                  <option>Maranh??o</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                  <option>Minas Gerais</option>
                  <option>Par??</option>
                  <option>Para??ba</option>
                  <option>Paran??</option>
                  <option>Pernambuco</option>
                  <option>Piau??</option>
                  <option>Rio de Janeiro</option>
                  <option>Rio Grande do Norte</option>
                  <option>Rio Grande do Sul</option>
                  <option>Rond??nia</option>
                  <option>Roraima</option>
                  <option>Santa Catarina</option>
                  <option>S??o Paulo</option>
                  <option>Sergipe</option>
                  <option>Tocantins</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> 
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Telefone
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="(11) 00000-0000" />
            
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email" />
     
        <button className='btn btn-sm btn-outline hidden lg:flex aos-init aos-animate' type="submit">Simular plano</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )


};

export default Overview;
