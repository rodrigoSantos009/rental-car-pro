export function Form() {


  return (
    <form action="" className="form">
      <div className="flex flex-col col-span-2 opacity-40">
        <label className="label-registration-form">Nome Completo*</label>
        <input
          disabled
          className="cursor-not-allowed input-registration-form"
          type="text"
          value="RODRIGO ****** ****** *****"
        />
      </div>
      <div className="flex flex-col opacity-40">
        <label className="label-registration-form">Nacionalidade*</label>
        <input
          disabled
          className="cursor-not-allowed input-registration-form"
          type="text"
          value="Brasil"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="">E-mail*</label>
        <input
          className="input-registration-form"
          type="email"
          value="programador@pr.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Número*</label>
        <input
          className="input-registration-form"
          type="text"
          value="55 47 0000-0000"
        />
      </div>
      <div className="flex flex-col opacity-40">
        <label className="label-registration-form">Documento*</label>
        <input
          className="cursor-not-allowed input-registration-form"
          disabled
          type="text"
          value="CPF"
        />
      </div>
      <div className="flex flex-col opacity-40">
        <label className="label-registration-form">Número*</label>
        <input
          className="cursor-not-allowed input-registration-form"
          disabled
          type="text"
          value="*********13"
        />
      </div>
    </form>
  );
}