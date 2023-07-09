import PageContent from "../../components/pagecontent";
import { A } from "@solidjs/router";

function RegisterPage() { 

  function onsubmit(event: any){
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
	  alert(JSON.stringify(dataObject));
  }

  return (
    <>
      <PageContent>
        <form id="my-form" onsubmit={onsubmit} class="flex flex-col w-full h-max max-w-md gap-3 m-6">
          <div class="flex flex-col pb-6 text-center gap-1">
           <p class="text-slate-100 text-2xl font-bold">Criar nova conta</p>
           <p class="text-slate-400 text-sm font-semibold">Preencha os campos para continuar</p>
          </div>
          <div class="flex flex-col w-full h-max max-w-md gap-3">
            <input name="email" placeholder="E-mail" class="rounded-2xl h-12 text-slate-100 bg-slate-700 text-sm px-4 font-semibold"  />
            <input name="password" type="password" placeholder="Senha" class="rounded-2xl text-slate-100 h-12 bg-slate-700 text-sm px-4 font-semibold" />
          </div>
          <div class="flex w-full flex-col sm:flex-row justify-center align-center gap-3 pt-3">
            <button type="submit" class="w-full md:w-1/2 bg-purple-500 text-slate-100 text-sm font-bold rounded-2xl h-12 p-3">
              Cadastrar
            </button>
            <button disabled type="button" class="cursor-not-allowed flex w-full md:w-1/2 justify-center align-center gap-2 bg-slate-100 text-sm font-bold rounded-2xl h-12 p-3">
              <img class="h-full" src="/google.svg" />
              <p class="h-full flex items-center text-sm text-slate-800">Entre com o google</p>
            </button>
          </div>
          <div class="flex w-full mt-2 gap-2 justify-center">
            <p class="text-slate-100 text-sm font-semibold">Já possui conta?</p>
            <A href="/" class="text-purple-400 text-sm font-semibold">Faça login</A>
          </div>
        </form>
      </PageContent>
    </>
  )
}

export default RegisterPage
